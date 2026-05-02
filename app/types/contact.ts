// Types for Contact page

import { ComponentType } from "react";

// Hero section
export interface ContactHeroData {
  title: string;
  description: string;
}

// CTA Section
export interface CTASectionData {
  badge?: string;
  heading: string;
  highlightText?: string;
  description: string;
  buttonText: string;
}

// Contact Section
export interface SocialItem {
  icon: ComponentType;
  link: string;
}
export interface ContactInfoData {
  title: string;
  description: string;
  mapImage: string;
  address: string;
  phone: string;
  hours: string;
  email: string;
  socials: SocialItem[];
}
