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

<<<<<<< HEAD
export interface ProductCncfKubeVirtCard {
  title: string;
  description: string;
}

export interface ProductCncfAction {
  label: string;
  href: string;
  ariaLabel: string;
}

export interface ProductCncfKubeVirtPromoContent {
  title: string;
  description: string;
  actions: ProductCncfAction[];
  cards: ProductCncfKubeVirtCard[];
}

export interface ProductCncfPageContent {
  hero: ProductCncfHeroContent;
  onePartner: ProductCncfOnePartnerContent;
  kubeVirtPromo: ProductCncfKubeVirtPromoContent;
=======
export interface ProductCncfPageContent {
  hero: ProductCncfHeroContent;
  onePartner: ProductCncfOnePartnerContent;
>>>>>>> b8e0e02d942140fc5ae297c91e9f75a32b4528aa
}
