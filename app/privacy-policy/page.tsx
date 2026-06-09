import PrivacyLayout from "@/components/privacy-policy/PrivacyLayout";
import { privacySections } from "@/data/privacy-policy/privacy-policy";

async function fetchPolicy(policyKey: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/public/policies/training?policy=${policyKey}`,
      { cache: "no-store" },
    );

    if (!res.ok) return null;

    const payload = await res.json();
    return payload;
  } catch (e) {
    return null;
  }
}

const page = async () => {
  const payload = await fetchPolicy("privacy");
  const sections =
    Array.isArray(payload?.sections) && payload.sections.length > 0
      ? payload.sections
      : privacySections;
  const headerProps = payload?.header ?? { title: "Privacy Policy" };

  return (
    <div>
      {/* PrivacyLayout is a client component expecting sections and headerProps */}
      {/* Pass server-fetched data (or fallback) as props */}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <PrivacyLayout sections={sections} headerProps={headerProps} />
    </div>
  );
};

export default page;
