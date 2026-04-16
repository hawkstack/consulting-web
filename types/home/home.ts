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
    platformSectionData: PlatformSectionData;
};