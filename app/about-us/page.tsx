import EndtoEndServices from "@/components/about/EndtoEndServices";
import { aboutusPageData } from "@/data/about-us/about-us";

export default function AboutPage() {
    const { endtoendServicesData } = aboutusPageData;
    
    return (
        <>    
            <EndtoEndServices content={endtoendServicesData}/>        
        </>
    );
}
