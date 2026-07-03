export interface ProductMirantisAction {
  label: string;
  href: string;
  ariaLabel: string;
  variant: "primary" | "secondary";
}

export interface ProductMirantisMetric {
  value: string;
  label: string;
}

export interface ProductMirantisInfoCard {
  title: string;
  description: string;
}

export interface ProductMirantisHeroContent {
  badge: string;
  title: string;
  description: string;
  actions: ProductMirantisAction[];
  platform: {
    badge: string;
    title: string;
    metrics: ProductMirantisMetric[];
  };
  floatingCards: {
    supplyChain: ProductMirantisInfoCard;
    operations: ProductMirantisInfoCard;
  };
}

export interface ProductMirantisPageContent {
  hero: ProductMirantisHeroContent;
}
