export type heroSlides = {
    title: string;
    desc: string;
}

export type Hero = {
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
    hero: Hero;
    platform: PlatformSectionData;
};