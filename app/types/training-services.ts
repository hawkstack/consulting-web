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

export interface TrainingProgramItem {
  id: number;
  provider: string;
  title: string;
  description: string;
  buttonLink: string;
}

export interface TrainingsWeGiveContent {
  subTitle: string;
  title: string;
  description: string;
  programs: TrainingProgramItem[];
}

export interface DeliveryOptionItem {
  id: number;
  title: string;
  description: string;
}

export interface DeliverOptionContent {
  subTitle: string;
  title: string;
  options: DeliveryOptionItem[];

  cta: {
    badge: string;
    title: string;
    description: string;
    primaryButton: {
      label: string;
      href: string;
    };
    secondaryButton: {
      label: string;
      href: string;
    };
  };
}

export interface TrainingServicesPageData {
    heroSectionData: AppModernizationHeroContent;
    trainingEcosystemData: TrainingEcosystemContent;
    trainingPortfolioData: TrainingPortfolioContent;
    trainingsWeGiveData: TrainingsWeGiveContent;
    deliveryOptionData: DeliverOptionContent;
}
