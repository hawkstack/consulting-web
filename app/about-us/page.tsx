import EndtoEndServices from "@/components/about/EndtoEndServices";
import AboutHero from "@/components/about/AboutHero";
import { aboutusPageData } from "@/data/about-us/about-us";

export default function AboutPage() {
    const { endtoendServicesData, aboutHeroData } = aboutusPageData;

    return (
        <>   
             <AboutHero content={aboutHeroData} />
            <EndtoEndServices content={endtoendServicesData}/> 
        </>
    );
}
