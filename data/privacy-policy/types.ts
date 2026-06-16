import type { PrivacySection } from "@/app/types/privacy-policy/privacy-policy";

export type PolicyHeader = {
  brandName?: string;
  title?: string;
  effectiveDate?: string;
  intro?: string;
  siteUrl?: string;
};

export type PolicyPageData = {
  headerProps: PolicyHeader;
  sections: PrivacySection[];
};

export const commonPolicyHeader = {
  brandName: "HAWKSTACK TECHNOLOGIES",
  effectiveDate: "25/05/2026",
  siteUrl: "https://hawkstack.com/",
};
