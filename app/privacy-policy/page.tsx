import PrivacyLayout from "@/components/privacy-policy/PrivacyLayout";
import PolicyUnavailable from "@/components/privacy-policy/PolicyUnavailable";
import { fetchPublicPrivacyPolicyResult } from "@/lib/publicPolicies";

const page = async () => {
  const { sections, headerProps } = await fetchPublicPrivacyPolicyResult();

  if (sections.length === 0) {
    return <PolicyUnavailable title="Privacy Policy" />;
  }

  return (
    <div>
      <PrivacyLayout sections={sections} headerProps={headerProps} />
    </div>
  );
};

export default page;
