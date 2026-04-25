export interface AboutHeroContent {
  subTitle: string;
  title: string;
  highlightedText: string;
  image: string;
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

export interface AboutUsPageData {
    aboutHeroData: AboutHeroContent;
    endtoendServicesData: EndtoEndServicesContent;
}
