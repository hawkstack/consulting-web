import { AppModernizationHeroSection } from "@/components/services/app-modernization";
import FaqSection from "@/components/services/cloud-platform-operations/components/FaqSection";
import LetsTalk from "@/components/services/cloud-platform-operations/components/LetsTalk";
import WhatWeDoSection from "@/components/services/cloud-platform-operations/components/WhatWeDo";
import WhyHawkstack from "@/components/services/cloud-platform-operations/components/WhyHawkstack";
import { cloudPlatformOperationsPageData } from "@/components/services/cloud-platform-operations/data/cloud-platform-operations";

export default function CloudPlatformOperationsPage() {
    const { heroSectionData, whatWeDoSectionData, whyHawkstackSectionData, faqSectionData, contactCtaData } = cloudPlatformOperationsPageData;
    
    return (
        <>
        <AppModernizationHeroSection content={heroSectionData} />
        <WhatWeDoSection content={whatWeDoSectionData}/>
        <WhyHawkstack content={whyHawkstackSectionData}/>
        <FaqSection content={faqSectionData} />
        <LetsTalk content={contactCtaData} />
        </>
    );
}
