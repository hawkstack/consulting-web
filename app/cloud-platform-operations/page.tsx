import AppModernizationHeroSection from "@/components/app-modernization/HeroSection";
import LetsTalk from "@/components/cloud-platform-operations/LetsTalk";
import WhatWeDoSection from "@/components/cloud-platform-operations/WhatWeDo";
import WhyHawkstack from "@/components/cloud-platform-operations/WhyHawkstack";
import { cloudPlatformOperationsPageData } from "@/data/cloud-platform-operations/cloud-platform-operations";

export default function CloudPlatformOperationsPage() {
    const { heroSectionData, whatWeDoSectionData, whyHawkstackSectionData, contactCtaData } = cloudPlatformOperationsPageData;
    
    return (
        <>
        <AppModernizationHeroSection content={heroSectionData} />
        <WhatWeDoSection content={whatWeDoSectionData}/>
        <WhyHawkstack content={whyHawkstackSectionData}/>
        <LetsTalk content={contactCtaData} />
        </>
    );
}
