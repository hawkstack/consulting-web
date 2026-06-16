import PrivacyLayout from "@/components/privacy-policy/PrivacyLayout";
import PolicyUnavailable from "@/components/privacy-policy/PolicyUnavailable";
import { fetchPublicPolicyResult } from "@/lib/publicPolicies";

const page = async () => {
  const { sections, headerProps } = await fetchPublicPolicyResult("cookie", {
    fallbackTitle: "Cookie Policy",
  });

  if (sections.length === 0) {
    return <PolicyUnavailable title="Cookie Policy" />;
  }

  return (
    <div>
      <PrivacyLayout sections={sections} headerProps={headerProps} />
    </div>
  );
};

export default page;
