export type heroSlides = {
    title: string;
    desc: string;
}

export type HeroSectionData = {
    slides: heroSlides[];
    bgVideo: string;
    bg: string;
};

export interface CloudServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  video: string;
  imageAlt: string;
  href: string;
}

export interface EngineeringDrivenCloudServicesProps {
  title: string;
  services: CloudServiceItem[];
}

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

export type PartnerCards = {
    id: number;
    partnerName: string;
    status: string;
    logo: string;
    tags: string[];
    link: string;
};

export type GlobalSectionData = {
    highlightText: string;
    title: string;
    desc: string;
    items: PartnerCards[];
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

export type OfferingCard = {
    id: number;
    title: string;
    desc: string;
    image: string;
    link: string;
};

export type WhatWeDoSection = {
    title: string;
    description: string;
    cards: OfferingCard[];
};

export type CloudSectionData = {
    title: {
        main: string;
        highlight: string;
        suffix: string;
    };
    desc: string;
    videoDesktop: string;
    videoMobile: string;
};

export type HomePageData = {
    heroSectionData: HeroSectionData;
    cloudServicesSectionData: EngineeringDrivenCloudServicesProps;
    productsSectionData: ProductsSectionData;
    globalSectionData: GlobalSectionData;
    platformSectionData: PlatformSectionData;
    whatWeDoSectionData: WhatWeDoSection;
    cloudSectionData: CloudSectionData;
};