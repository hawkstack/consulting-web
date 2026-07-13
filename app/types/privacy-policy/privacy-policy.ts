export interface PrivacyPoint {
  heading?: string;
  description: string;
}

export interface ContactInfo {
  company?: string;
  website?: string;
  email?: string;
}

export interface PrivacySection {
  title: string;
  description?: string | string[];
  points?: PrivacyPoint[];
  note?: string;
  noteEmail?: string;
  contactInfo?: ContactInfo;
}

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
