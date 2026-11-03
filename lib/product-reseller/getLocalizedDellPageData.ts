import {
  dellCtaData,
  dellHeroData,
  dellIntegrationData,
  dellProcessData,
  dellProductPortfolioData,
  dellWhyHawkstackData,
} from "@/components/product-reseller/product-dell/data/dellData";
import type {
  DellCtaData,
  DellHeroData,
  DellIntegrationData,
  DellProcessData,
  DellProductPortfolioData,
  DellWhyHawkstackData,
} from "@/components/product-reseller/product-dell/types/dell.types";

export type DellPageData = {
  hero: DellHeroData;
  portfolio: DellProductPortfolioData;
  integration: DellIntegrationData;
  whyHawkstack: DellWhyHawkstackData;
  process: DellProcessData;
  cta: DellCtaData;
};

const dellPageData: DellPageData = {
  hero: dellHeroData,
  portfolio: dellProductPortfolioData,
  integration: dellIntegrationData,
  whyHawkstack: dellWhyHawkstackData,
  process: dellProcessData,
  cta: dellCtaData,
};

type DellTranslator = { raw(key: string): unknown; has(key: string): boolean };
const sharedFields = new Set(["href", "imagePath", "imageAlt", "id", "number"]);

function mergeCopy(base: unknown, copy: unknown, key = ""): unknown {
  if (sharedFields.has(key)) return base;
  if (typeof base === "string") return typeof copy === "string" ? copy : base;
  if (Array.isArray(base))
    return base.map((item, i) =>
      mergeCopy(item, Array.isArray(copy) ? copy[i] : undefined),
    );
  if (base && typeof base === "object") {
    const translated =
      copy && typeof copy === "object" ? (copy as Record<string, unknown>) : {};
    return Object.fromEntries(
      Object.entries(base).map(([field, value]) => [
        field,
        mergeCopy(value, translated[field], field),
      ]),
    );
  }
  return base;
}

export function getLocalizedDellPageData(t: DellTranslator): DellPageData {
  return mergeCopy(
    dellPageData,
    t.has("content") ? t.raw("content") : {},
  ) as DellPageData;
}
