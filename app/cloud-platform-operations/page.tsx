import AppModernizationHeroSection from "@/components/app-modernization/HeroSection";
import LetsTalk from "@/components/cloud-platform-operations/LetsTalk";
import WhatWeDoSection from "@/components/cloud-platform-operations/WhatWeDo";
import { cloudPlatformOperationsPageData } from "@/data/cloud-platform-operations/cloud-platform-operations";

export default function CloudPlatformOperationsPage() {
    const { heroSectionData, whatWeDoSectionData , contactCtaData} = cloudPlatformOperationsPageData;
    
    return (
        <>
        <AppModernizationHeroSection content={heroSectionData} />
        <WhatWeDoSection content={whatWeDoSectionData}/>
        <LetsTalk content={contactCtaData} />
        </>
    );
}
