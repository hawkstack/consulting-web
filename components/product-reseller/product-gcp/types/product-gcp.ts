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

export interface ProductGcpPageContent {
  hero: ProductGcpHeroContent;
  solutions: ProductGcpSolutionsContent;
}
