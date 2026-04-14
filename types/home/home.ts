export type heroSlides = {
    title: string;
    desc: string;
}

export type Hero = {
    slides: heroSlides[];
    bgVideo: string;
    icons: string[];
};

export type HomePageData = {
    hero: Hero;
};