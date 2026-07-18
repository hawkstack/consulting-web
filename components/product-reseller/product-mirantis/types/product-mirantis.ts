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

export type ProductMirantisSolutionIcon =
  | "network"
  | "shield"
  | "automation"
  | "hybrid";

export interface ProductMirantisSolutionCard {
  title: string;
  description: string;
  icon: ProductMirantisSolutionIcon;
}

export interface ProductMirantisSolutionsContent {
  eyebrow: string;
  title: string;
  cards: ProductMirantisSolutionCard[];
}

export interface ProductMirantisTransformationItem {
  id: number;
  text: string;
}

export type ProductMirantisTransformationCapabilityIcon =
  | "assessment"
  | "integration"
  | "enablement";

export interface ProductMirantisTransformationCapability {
  title: string;
  description: string;
  icon: ProductMirantisTransformationCapabilityIcon;
}

export interface ProductMirantisTransformationContent {
  title: string;
  description: string;
  items: ProductMirantisTransformationItem[];
  capabilities: ProductMirantisTransformationCapability[];
}

export interface ProductMirantisCtaContent {
  title: string;
  description: string;
  action: {
    label: string;
    href: string;
    ariaLabel: string;
  };
}

export interface ProductMirantisPageContent {
  hero: ProductMirantisHeroContent;
  solutions: ProductMirantisSolutionsContent;
  transformation: ProductMirantisTransformationContent;
  cta: ProductMirantisCtaContent;
}
