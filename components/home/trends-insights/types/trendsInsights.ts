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
