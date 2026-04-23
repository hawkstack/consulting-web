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

export interface KubevirtServicePageData {
  heroSectionData: AppModernizationHeroContent;
  adoptionSectionData: KubevirtAdoptionSectionContent;
}
