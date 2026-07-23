import type { ComponentType } from "react";

// Hero section types
export type TrendsInsightsHeroData = {
  eyebrow: string;
  title: {
    prefix: string;
    highlight: string;
  };
  description: string;
  curatedForLabel: string;
  audiences: string[];
  scrollLabel: string;
};

export type ImpactStatistic = {
  value: string;
  label: string;
};

// Real world impact types
export type RealWorldImpactData = {
  title: string;
  description: string;
  dashboardImage: string;
  dashboardImageAlt: string;
  optimization: {
    eyebrow: string;
    title: string;
    description: string;
    statistics: ImpactStatistic[];
  };
  devOps: {
    title: string;
    description: string;
    linkLabel: string;
  };
};

// Technology insights newsletter types
export type TechnologyInsightStatistic = {
  value: string;
  label: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

export type TechnologyInsightsNewsletterData = {
  title: {
    prefix: string;
    highlight: string;
  };
  description: string;
  statistics: TechnologyInsightStatistic[];
};

// Categories section types

export type TrendsInsightsCategory = {
  title: string;
  description: string;
  accentColor: string;
  icon: ComponentType<{ className?: string }>;
};

export type CategoriesTabsData = {
  categories: TrendsInsightsCategory[];
};
