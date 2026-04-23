import type { AppModernizationHeroContent } from "@/app/types/app-modernization";

export interface EcosystemPartner {
  id: number;
  name: string;
  logo: string;
  scale?: number;
}

export interface TrainingEcosystemContent {
  subTitle: string;
  title: string;
  description: string;
  partners: EcosystemPartner[];
}

export interface PortfolioItem{
    id: number;
    title: string;
    highLightedText: string;
    desc: string;
    points: string[];
}

export interface TrainingPortfolioContent {
    subTitle: string;
    title: string;
    description: string;
    items: PortfolioItem[];
}

export interface TrainingServicesPageData {
    heroSectionData: AppModernizationHeroContent;
    trainingEcosystemData: TrainingEcosystemContent;
    trainingPortfolioData: TrainingPortfolioContent;

}
