export type heroSlides = {
    title: string;
    desc: string;
}

export type HeroSectionData = {
    slides: heroSlides[];
    bgVideo: string;
    bg: string;
    icons: string[];
};

export type ProductCard = {
  id: string;
  count: string;
  category: string;
  title: string;
  description: string;
  logo: string;
  link: string;
};

export type ProductsSectionData = {
  title: string;
  subtitle: string;
  products: ProductCard[];
};

export type PlatformFeature = {
    id: number;
    title: string;
    icon: string; 
    link: string;
};

export type PlatformSectionData = {
    bgImage: string;
    title: string[];
    description: string;
    features: PlatformFeature[];
};

export type HomePageData = {
    heroSectionData: HeroSectionData;
    productsSectionData: ProductsSectionData;
    platformSectionData: PlatformSectionData;
};