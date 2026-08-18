import type { ComponentType, SVGProps } from "react";

export type heroSlides = {
  title: string;
  desc: string;
};

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
  maintitle: string;
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

export type PlatformFeature = {
  id: number;
  title: string;
  icon: string;
  desc: string;
};

export type PlatformSectionData = {
  bgImage: string;
  title: string[];
  description: string;
  features: PlatformFeature[];
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

export type HomePageData = {
  heroSectionData: HeroSectionData;
  cloudServicesSectionData: EngineeringDrivenCloudServicesProps;
  productsSectionData: ProductsSectionData;
  digitalTransformationSectionData: DigitalTransformationSectionData;
  platformSectionData: PlatformSectionData;
  cloudSectionData: CloudSectionData;
  whatWeDoSectionData: WhatWeDoSection;
};

export type DigitalTransformationIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type DigitalTransformationService = {
  title: string;
  icon: DigitalTransformationIcon;
};

export type DigitalTransformationPartner = {
  id: string;
  name: string;
  caption: string;
  description?: string;
  badge?: string;
  secondaryBadge?: string;
  footerLink?: string;
  footerLabel?: string;
  partnerAccount?: {
    label: string;
    number: string;
  };
  image: string;
  accent: "red" | "green" | "blue";
};

export type DigitalTransformationSectionData = {
  title: string;
  highlights: string[];
  services: DigitalTransformationService[];
  servicesCaption: string;
  primaryPartners: DigitalTransformationPartner[];
  ecosystemTitle: string;
  ecosystemPartners: DigitalTransformationPartner[];
  footerText: string;
};
