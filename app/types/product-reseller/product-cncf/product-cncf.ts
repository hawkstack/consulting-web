export interface ProductCncfHeroButton {
  label: string;
  href: string;
  ariaLabel: string;
}

export interface ProductCncfHeroContent {
  titleLines: string[];
  description: string;
  button: ProductCncfHeroButton;
  image: {
    src: string;
    alt: string;
  };
}

export interface ProductCncfJourneyCard {
  title: string;
  description: string;
  tag: string;
  tagClassName: string;
}

export interface ProductCncfOnePartnerContent {
  cards: ProductCncfJourneyCard[];
  eyebrow: string;
  highlightedTitle: string;
  description: string;
  points: string[];
}

export interface ProductCncfPageContent {
  hero: ProductCncfHeroContent;
  onePartner: ProductCncfOnePartnerContent;
}
