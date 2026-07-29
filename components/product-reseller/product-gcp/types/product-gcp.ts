import type { ComponentType } from "react";

export interface ProductGcpHeroContent {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface ProductGcpSolutionCard {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  action: {
    label: string;
    href: string;
    ariaLabel: string;
  };
}

export interface ProductGcpSolutionsContent {
  title: string;
  description: string;
  cards: ProductGcpSolutionCard[];
}

export interface ProductGcpBenefit {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface ProductGcpBenefitsContent {
  title: string;
  highlightedTitle: string;
  description: string;
  benefits: ProductGcpBenefit[];
}

export interface ProductGcpCtaStage {
  phase: string;
  title: string;
}

export interface ProductGcpCtaContent {
  title: string;
  highlightedTitle: string;
  description: string;
  stages: ProductGcpCtaStage[];
}

export interface ProductGcpPageContent {
  hero: ProductGcpHeroContent;
  solutions: ProductGcpSolutionsContent;
  benefits: ProductGcpBenefitsContent;
  cta: ProductGcpCtaContent;
}
