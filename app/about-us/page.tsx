import EndtoEndServices from "@/components/about/EndtoEndServices";
import AboutHero from "@/components/about/AboutHero";
import WhatWeOffer from "@/components/about/WhatWeOffer";
import { aboutusPageData } from "@/data/about-us/about-us";

export default function AboutPage() {
    const { endtoendServicesData, aboutHeroData, whatWeOfferData } = aboutusPageData;

    return (
        <>   
            <AboutHero content={aboutHeroData} />
            <EndtoEndServices content={endtoendServicesData}/> 
            <WhatWeOffer content={whatWeOfferData} />
        </>
    );
}
