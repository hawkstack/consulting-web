import type {
  PrivacyPoint,
  PrivacySection,
} from "@/app/types/privacy-policy/privacy-policy";
import {
  type PolicyHeader,
  type PolicyPageData,
  policyPageFallbacks,
} from "@/data/privacy-policy/policyPages";

export type { PolicyHeader, PolicyPageData };

type PolicyResult = PolicyPageData & {
  ok: boolean;
};

type ApiTitleBullets = {
  title?: string | null;
  topic?: string | null;
  onlyPoints?: string[] | null;
  only_points?: string[] | null;
};

type ApiTitleDescription = {
  title?: string | null;
  description?: string | null;
  desc?: string | null;
  descss?: string[] | null;
};

const DEFAULT_BASE_URL = "https://hawkstack.com";

function cleanText(value: unknown): string {
  return typeof value === "string" ? value.replace(/\s+/g, " ").trim() : "";
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getRecord(value: unknown, key: string): Record<string, unknown> | null {
  if (!isRecord(value)) return null;
  return isRecord(value[key]) ? value[key] : null;
}

function getArray<T>(value: unknown): T[] {
  return Array.isArray(value) ? (value as T[]) : [];
}

function getStringArray(value: unknown): string[] {
  return getArray<unknown>(value).map(cleanText).filter(Boolean);
}

function createSection(section: PrivacySection): PrivacySection | null {
  return section.title ? section : null;
}

function mapTitleBullets(value: unknown): PrivacyPoint[] {
  return getArray<ApiTitleBullets>(value)
    .flatMap((item) => {
      const heading = cleanText(item.title ?? item.topic);
      const points = [
        ...(item.onlyPoints ?? []),
        ...(item.only_points ?? []),
      ]
        .map(cleanText)
        .filter(Boolean);

      if (points.length === 0) {
        return heading ? [{ description: heading }] : [];
      }

      return points.map((description, index) => ({
        ...(index === 0 && heading ? { heading } : {}),
        description,
      }));
    })
    .filter((point) => point.description);
}

function mapTitleDescriptions(value: unknown): PrivacyPoint[] {
  return getArray<ApiTitleDescription>(value)
    .map((item): PrivacyPoint | null => {
      const heading = cleanText(item.title);
      const description =
        cleanText(item.description) ||
        cleanText(item.desc) ||
        getStringArray(item.descss).join(" ");

      if (!description) return null;

      return {
        ...(heading ? { heading } : {}),
        description,
      };
    })
    .filter((point): point is PrivacyPoint => point !== null);
}

function mapPointStrings(value: unknown): PrivacyPoint[] {
  return getStringArray(value).map((description) => ({ description }));
}

function splitEmailNote(value: string): Pick<PrivacySection, "note" | "noteEmail"> {
  const emailMatch = value.match(
    /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\.?/i,
  );

  if (!emailMatch) {
    return value ? { note: value } : {};
  }

  const note = value.slice(0, emailMatch.index).trimEnd();

  return {
    note: note ? `${note} ` : undefined,
    noteEmail: emailMatch[0],
  };
}

function getNestedPayload(payload: unknown): Record<string, unknown> | null {
  if (!isRecord(payload)) return null;

  if (
    "sections" in payload ||
    "privacyPolicyComp" in payload ||
    "pageName" in payload ||
    "tr_pp_comp1" in payload ||
    "tr_cp_comp0" in payload ||
    "tr_tou_Comp0" in payload ||
    "tr_coc_Comp0" in payload
  ) {
    return payload;
  }

  for (const key of ["data", "value", "payload", "result"]) {
    const nested = getNestedPayload(payload[key]);
    if (nested) return nested;
  }

  return null;
}

function mapNormalizedSection(section: unknown): PrivacySection | null {
  if (!isRecord(section)) return null;

  const title = cleanText(section.title);
  if (!title) return null;

  const descriptionArray = getStringArray(section.description);
  const description =
    descriptionArray.length > 0
      ? descriptionArray
      : cleanText(section.description) || undefined;
  const points = getArray<Record<string, unknown>>(section.points)
    .map((point): PrivacyPoint | null => {
      const pointDescription = cleanText(point.description);
      if (!pointDescription) return null;

      const heading = cleanText(point.heading);
      return {
        ...(heading ? { heading } : {}),
        description: pointDescription,
      };
    })
    .filter((point): point is PrivacyPoint => point !== null);
  const contactInfo = getRecord(section, "contactInfo");

  return {
    title,
    description,
    points: points.length > 0 ? points : undefined,
    note: cleanText(section.note) || undefined,
    noteEmail: cleanText(section.noteEmail) || undefined,
    contactInfo: contactInfo
      ? {
          company: cleanText(contactInfo.company) || undefined,
          website: cleanText(contactInfo.website) || undefined,
          email: cleanText(contactInfo.email) || undefined,
        }
      : undefined,
  };
}

function mapNormalizedPolicy(
  payload: Record<string, unknown>,
  fallbackTitle: string,
): PolicyPageData | null {
  const sections = getArray<unknown>(payload.sections)
    .map(mapNormalizedSection)
    .filter((section): section is PrivacySection => section !== null);

  if (sections.length === 0) return null;

  const header = getRecord(payload, "header");

  return {
    headerProps: {
      brandName: cleanText(header?.brandName) || undefined,
      title: cleanText(header?.title) || fallbackTitle,
      effectiveDate: cleanText(header?.effectiveDate) || undefined,
      intro: cleanText(header?.intro) || undefined,
      siteUrl: cleanText(header?.siteUrl) || undefined,
    },
    sections,
  };
}

function mapPrivacyPolicyPayload(payload: Record<string, unknown>): PolicyPageData | null {
  const header = getArray<Record<string, unknown>>(payload.privacyPolicyComp)[0];
  const headerLines = getStringArray(header?.ppHeadlineContents);
  const dataSecurity = getArray<Record<string, unknown>>(payload.tr_pp_comp5)
    .map((item) =>
      createSection({
        title: cleanText(item.topic),
        points: mapTitleBullets(item.titleBullets),
      }),
    )
    .filter((section): section is PrivacySection => section !== null);
  const rights = getRecord(payload, "tr_pp_rights_exerciseCom6");
  const contact = getRecord(payload, "Tr_pp_contactUs");

  const sections = [
    createSection({
      title: cleanText(getRecord(payload, "tr_pp_comp1")?.topic),
      points: mapTitleBullets(getRecord(payload, "tr_pp_comp1")?.titleBullets),
    }),
    createSection({
      title: cleanText(getRecord(payload, "tr_pp_comp2")?.headLine),
      description: cleanText(getRecord(payload, "tr_pp_comp2")?.footNote),
      points: mapTitleDescriptions(
        getRecord(payload, "tr_pp_comp2")?.footNoteTitleDesc,
      ),
    }),
    createSection({
      title: cleanText(getRecord(payload, "tr_pp_comp3")?.headline),
      description: cleanText(getRecord(payload, "tr_pp_comp3")?.description),
    }),
    createSection({
      title: cleanText(getRecord(payload, "tr_pp_comp4")?.topic),
      points: mapTitleBullets(getRecord(payload, "tr_pp_comp4")?.titleBullets),
    }),
    ...dataSecurity,
    createSection({
      title: cleanText(rights?.title),
      description: cleanText(rights?.footnotes),
      points: mapTitleDescriptions(rights?.titlDesc),
      ...splitEmailNote(cleanText(rights?.exerciseDetails)),
    }),
    createSection({
      title: cleanText(getRecord(payload, "tr_pp_comp7")?.headline),
      description: cleanText(getRecord(payload, "tr_pp_comp7")?.description),
    }),
    createSection({
      title: cleanText(contact?.contactHeadline),
      contactInfo: {
        company: cleanText(contact?.probDesc),
        website: getStringArray(contact?.contactDetails).find((item) =>
          item.toLowerCase().includes("http"),
        ),
        email: getStringArray(contact?.contactDetails).find((item) =>
          item.includes("@"),
        ),
      },
    }),
  ].filter((section): section is PrivacySection => section !== null);

  if (sections.length === 0) return null;

  return {
    headerProps: {
      title: cleanText(header?.pageTitle) || "Privacy Policy",
      effectiveDate: cleanText(headerLines[0]).replace(
        /^Effective Date\s*:\s*/i,
        "",
      ),
      intro: headerLines.slice(1, -1).join(" ") || undefined,
      siteUrl: headerLines.at(-1),
    },
    sections,
  };
}

function mapCookiePolicyPayload(payload: Record<string, unknown>): PolicyPageData | null {
  const header = getRecord(payload, "tr_cp_comp0");
  const headerLines = getStringArray(header?.ppHeadlineContents);
  const contact = getRecord(payload, "tr_cp_contactComp");

  const sections = [
    createSection({
      title: cleanText(getRecord(payload, "tr_cp_comp1")?.Headline),
      description: cleanText(getRecord(payload, "tr_cp_comp1")?.description),
      points: mapTitleBullets(
        getArray<Record<string, unknown>>(
          getRecord(payload, "tr_cp_comp1")?.headline_title_points,
        ).flatMap((item) => item.titleBullets),
      ),
    }),
    createSection({
      title: cleanText(getRecord(payload, "tr_cp_comp2")?.headLine),
      points: mapTitleBullets(getRecord(payload, "tr_cp_comp2")?.bullet_points),
    }),
    createSection({
      title: cleanText(getRecord(payload, "tr_cp_comp3")?.headLine),
      points: mapTitleBullets(getRecord(payload, "tr_cp_comp3")?.bullet_points),
    }),
    createSection({
      title: cleanText(getRecord(payload, "tr_cp_comp4")?.headLine),
      points: mapPointStrings(getRecord(payload, "tr_cp_comp4")?.points_Only),
    }),
    createSection({
      title: cleanText(getRecord(payload, "tr_cp_comp5")?.headLine),
      points: mapPointStrings(getRecord(payload, "tr_cp_comp5")?.points_Only),
    }),
    createSection({
      title: cleanText(contact?.headLine),
      points: mapPointStrings(contact?.points_Only),
    }),
  ].filter((section): section is PrivacySection => section !== null);

  if (sections.length === 0) return null;

  return {
    headerProps: {
      title: cleanText(header?.pageTitle) || "Cookie Policy",
      effectiveDate: cleanText(headerLines[0]).replace(
        /^Effective Date\s*:\s*/i,
        "",
      ),
      intro: headerLines.slice(1).join(" ") || undefined,
    },
    sections,
  };
}

function mapTermsOfUsePayload(
  payload: Record<string, unknown>,
  fallbackTitle: string,
): PolicyPageData | null {
  const header =
    getRecord(payload, "tr_tou_Comp0") ?? getRecord(payload, "tr_coc_Comp0");
  const sectionKeys = Object.keys(payload).filter(
    (key) =>
      /^tr_tou_Comp\d+/i.test(key) ||
      /^tr_tou_comp\d+/i.test(key) ||
      /^tr_coc_Comp\d+/i.test(key),
  );

  const sections = sectionKeys
    .filter((key) => !key.endsWith("0"))
    .map((key) => {
      const item = getRecord(payload, key);
      return createSection({
        title:
          cleanText(item?.headLine) ||
          cleanText(item?.Headline) ||
          cleanText(item?.title),
        description:
          cleanText(item?.footNote) ||
          cleanText(item?.Footnote) ||
          cleanText(item?.desc) ||
          getStringArray(item?.description).join(" ") ||
          getStringArray(item?.Descss).join(" ") ||
          undefined,
        points:
          mapTitleDescriptions(item?.titleDesc).length > 0
            ? mapTitleDescriptions(item?.titleDesc)
            : mapPointStrings(item?.points),
      });
    })
    .filter((section): section is PrivacySection => section !== null);

  if (sections.length === 0) return null;

  const effectiveDate = getRecord(header, "effectiveDate");

  return {
    headerProps: {
      title:
        cleanText(header?.headLine) ||
        cleanText(header?.pageTitle) ||
        fallbackTitle,
      effectiveDate: cleanText(effectiveDate?.description) || undefined,
      intro:
        getStringArray(header?.pageDescs).join(" ") ||
        [cleanText(header?.title), cleanText(header?.codeOfPoint1)]
          .filter(Boolean)
          .join(" ") ||
        undefined,
    },
    sections,
  };
}

function mapApiPolicyPayload(
  rawPayload: unknown,
  policyKey: string,
  fallbackTitle: string,
): PolicyPageData | null {
  const payload = getNestedPayload(rawPayload);
  if (!payload) return null;

  const normalized = mapNormalizedPolicy(payload, fallbackTitle);
  if (normalized) return normalized;

  if ("privacyPolicyComp" in payload || "tr_pp_comp1" in payload) {
    return mapPrivacyPolicyPayload(payload);
  }

  if ("tr_cp_comp0" in payload || cleanText(payload.pageName).includes("Cookie")) {
    return mapCookiePolicyPayload(payload);
  }

  if (
    "tr_tou_Comp0" in payload ||
    policyKey === "terms-of-use"
  ) {
    return mapTermsOfUsePayload(payload, fallbackTitle);
  }

  return null;
}

function getApiUrls(policyKey: string) {
  const explicitUrl =
    process.env.CONSULTING_POLICY_API_URL ||
    process.env.NEXT_PUBLIC_CONSULTING_POLICY_API_URL;
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL;
  const siteBase = process.env.NEXT_PUBLIC_BASE_URL || DEFAULT_BASE_URL;

  if (explicitUrl) {
    return [explicitUrl];
  }

  return Array.from(
    new Set(
      [apiBase, siteBase]
        .filter(Boolean)
        .map(
          (base) =>
            `${base}/api/public/policies/consulting?policy=${encodeURIComponent(
              policyKey,
            )}`,
        ),
    ),
  );
}

function getFallback(policyKey: string, fallbackTitle?: string): PolicyPageData {
  const fallback = policyPageFallbacks[policyKey] ?? policyPageFallbacks.privacy;

  return {
    headerProps: {
      ...fallback.headerProps,
      ...(fallbackTitle ? { title: fallbackTitle } : {}),
    },
    sections: fallback.sections,
  };
}

export async function fetchPublicPolicyResult(
  policyKey: string,
  options: { fallbackTitle?: string } = {},
): Promise<PolicyResult> {
  const fallback = getFallback(policyKey, options.fallbackTitle);
  const fallbackTitle = fallback.headerProps.title ?? options.fallbackTitle ?? "Policy";

  for (const url of getApiUrls(policyKey)) {
    try {
      const response = await fetch(url, { cache: "no-store" });

      if (!response.ok) continue;

      const apiPolicy = mapApiPolicyPayload(
        await response.json(),
        policyKey,
        fallbackTitle,
      );

      if (apiPolicy?.sections.length) {
        return { ...apiPolicy, ok: true };
      }
    } catch {
      continue;
    }
  }

  return { ...fallback, ok: false };
}

export async function fetchPublicPrivacyPolicyResult() {
  return fetchPublicPolicyResult("privacy", {
    fallbackTitle: "Privacy Policy",
  });
}
