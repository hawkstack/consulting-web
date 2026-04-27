export interface AboutHeroContent {
  subTitle: string;
  title: string;
  highlightedText: string;
  image: string;
  bgImage: string;
} 

export interface PlatformItem {
    id: number;
    number: string;
    title: string;
    description: string;
}

export interface EndtoEndServicesContent {
    title: string;
    items: PlatformItem[];
}

export interface OfferPartnerItem {
  id: number;
  name: string;
  logo: string;
}

export interface OfferRowItem {
  id: number;
  title: string;
  description?: string;
  logo?: string;
  partners?: OfferPartnerItem[];
}

export interface WhatWeOfferContent {
  title: string;
  rows: OfferRowItem[];
}

export interface PlatformJourneyContent {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  points: string[];
  image: string;
}

export interface AboutUsPageData {
    aboutHeroData: AboutHeroContent;
    endtoendServicesData: EndtoEndServicesContent;
    whatWeOfferData: WhatWeOfferContent;
    platformJourneyData: PlatformJourneyContent;
}
