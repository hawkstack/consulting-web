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

export interface KubevirtUseCaseItem {
  title: string;
}

export interface KubevirtUseCasesSectionContent {
  badge: string;
  title: string;
  items: KubevirtUseCaseItem[];
}

export interface KubevirtProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface KubevirtProcessSectionContent {
  badge: string;
  title: string;
  description: string;
  steps: KubevirtProcessStep[];
  cta: KubevirtProcessCtaContent;
}

export interface KubevirtProcessCtaContent {
  badge: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
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
  useCasesSectionData: KubevirtUseCasesSectionContent;
  processSectionData: KubevirtProcessSectionContent;
  servicesSectionData: KubevirtServicesSectionContent;
}
