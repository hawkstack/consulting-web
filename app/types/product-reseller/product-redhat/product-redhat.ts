export interface ProductRedhatHeroButton {
  label: string;
  href: string;
  ariaLabel: string;
}

export interface ProductRedhatHeroContent {
  titleLines: string[];
  description: string;
  button: ProductRedhatHeroButton;
  image: {
    src: string;
    alt: string;
  };
}

export interface ProductRedhatPageContent {
  hero: ProductRedhatHeroContent;
}
