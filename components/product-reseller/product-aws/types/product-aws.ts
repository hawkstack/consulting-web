export interface ProductAwsAction {
  label: string;
  href: string;
}

export interface ProductAwsHeroContent {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  primaryButton: ProductAwsAction;
  secondaryButton: ProductAwsAction;
}

export interface ProductAwsCtaContent {
  title: string;
  description: string;
  primaryButton: ProductAwsAction;
  secondaryButton: ProductAwsAction;
}

export interface ProductAwsPageContent {
  hero: ProductAwsHeroContent;
  cta: ProductAwsCtaContent;
}
