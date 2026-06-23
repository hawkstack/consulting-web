import { privacySections } from "./privacy-policy";
import { commonPolicyHeader, type PolicyPageData } from "./types";

export const privacyPolicyPage: PolicyPageData = {
  headerProps: {
    ...commonPolicyHeader,
    title: "Privacy Policy",
    intro:
      'Hawkstack Technologies Private Limited ("HawkStack", "we", "our", or "us") values your privacy and is committed to protecting the confidential and personal information of our enterprise clients, partners, and website visitors. This Privacy Policy explains how we collect, use, store, and safeguard your data when you visit or engage with our consulting services at https://hawkstack.com/.',
  },
  sections: privacySections,
};
