import type { AppModernizationHeroContent } from "@/app/types/app-modernization";

export interface KubevirtAdoptionCard {
  title: string;
  description: string;
}

export interface KubevirtAdoptionSectionContent {
  badge: string;
  title: string;
  description: string;
  cards: KubevirtAdoptionCard[];
}

export interface KubevirtServicesCard {
  title: string;
  description: string;
}

export interface KubevirtServicesSectionContent {
  badge: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  cards: KubevirtServicesCard[];
}

export interface KubevirtServicePageData {
  heroSectionData: AppModernizationHeroContent;
  adoptionSectionData: KubevirtAdoptionSectionContent;
  servicesSectionData: KubevirtServicesSectionContent;
}
