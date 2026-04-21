import AppModernizationHeroSection from "@/components/app-modernization/HeroSection";
import FaqSection from "@/components/cloud-platform-operations/FaqSection";
import WhatWeDoSection from "@/components/cloud-platform-operations/WhatWeDo";
import { cloudPlatformOperationsPageData } from "@/data/cloud-platform-operations/cloud-platform-operations";

export default function CloudPlatformOperationsPage() {
    const { heroSectionData, whatWeDoSectionData, faqSectionData } = cloudPlatformOperationsPageData;
    
    return (
        <>
        <AppModernizationHeroSection content={heroSectionData} />
        <WhatWeDoSection content={whatWeDoSectionData}/>
        <FaqSection content={faqSectionData} />
        </>
    );
}
