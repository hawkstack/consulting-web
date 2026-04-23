import type { AppModernizationHeroContent } from "@/app/types/app-modernization";

export interface EcosystemPartner {
  id: number;
  name: string;
  logo: string;
}

export interface TrainingEcosystemContent {
  subTitle: string;
  title: string;
  description: string;
  partners: EcosystemPartner[];
}

export interface TrainingServicesPageData {
    heroSectionData: AppModernizationHeroContent;
    trainingEcosystemData: TrainingEcosystemContent;
}
