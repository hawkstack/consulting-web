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
