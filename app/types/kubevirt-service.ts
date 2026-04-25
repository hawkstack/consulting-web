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

export interface KubevirtCommercialCtaContent {
  badge: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

export interface KubevirtServicesSectionContent {
  badge: string;
  title: string;
  description: string;
  cards: KubevirtServicesCard[];
  commercialCta: KubevirtCommercialCtaContent;
}

export interface KubevirtServicePageData {
  heroSectionData: AppModernizationHeroContent;
  adoptionSectionData: KubevirtAdoptionSectionContent;
  servicesSectionData: KubevirtServicesSectionContent;
}
