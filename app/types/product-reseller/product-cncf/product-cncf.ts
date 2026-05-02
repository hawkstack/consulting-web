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

export interface ProductCncfPageContent {
  hero: ProductCncfHeroContent;
}
