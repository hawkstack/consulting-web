export interface ProductGcpHeroContent {
  eyebrow: string;
  title: string;
  description: string;
}

export interface ProductGcpSolutionCard {
  title: string;
  description: string;
}

export interface ProductGcpSolutionsContent {
  title: string;
  description: string;
  cards: ProductGcpSolutionCard[];
}

export interface ProductGcpBenefitCard {
  title: string;
  description: string;
}

export interface ProductGcpBenefitsContent {
  title: string;
  description: string;
  benefits: ProductGcpBenefitCard[];
}

export interface ProductGcpCtaContent {
  title: string;
  description: string;
  action: {
    label: string;
    href: string;
    ariaLabel: string;
  };
}

export interface ProductGcpPageContent {
  hero: ProductGcpHeroContent;
  solutions: ProductGcpSolutionsContent;
  benefits: ProductGcpBenefitsContent;
  cta: ProductGcpCtaContent;
}
