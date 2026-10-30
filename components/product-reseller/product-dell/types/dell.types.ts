export interface DellHeroData {
  brand: { first: string; second: string };
  eyebrow: string;
  heading: { lines: string[]; highlight: string };
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  footerLabel: string;
  imagePath: string;
  imageAlt: string;
  imageTopLabel: string;
  imageHeading: string;
  imageCaption: string;
}

export interface DellPortfolioCard {
  id: string;
  category: string;
  title: string;
  description: string;
  linkLabel: string;
  href: string;
}

export interface DellProductPortfolioData {
  eyebrow: string;
  heading: string;
  headerDescription: string[];
  featured: DellPortfolioCard & { imagePath: string; imageAlt: string };
  products: DellPortfolioCard[];
  apex: {
    category: string;
    heading: string;
    description: string;
    linkLabel: string;
    href: string;
  };
}

export interface DellIntegrationStep {
  number: string;
  heading: string;
  items: string[];
}

export interface DellIntegrationData {
  eyebrow: string;
  heading: string;
  description: string;
  steps: DellIntegrationStep[];
}

export interface DellWhyHawkstackItem {
  heading: string;
  description: string;
}

export interface DellWhyHawkstackData {
  eyebrow: string;
  heading: string[];
  items: DellWhyHawkstackItem[];
}
