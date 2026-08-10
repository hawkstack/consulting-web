import { seoMeta } from "../components/seo/seoMeta";

import HeroSection from "@/components/home/HeroSection";
import EngineeringDrivenCloudServices from "@/components/home/EngineeringDrivenCloudServices";
import PlatformSection from "@/components/home/PlatformSection";
import CloudInnovation from "@/components/home/CloudInnovation";
import WhatWeDo from "@/components/home/WhatWeDo";
import ContactCTA from "@/components/home/ContactFormSection";
// import ProductReseller from "@/components/home/ProductReseller";
import DigitalTransformation from "@/components/home/DigitalTransformation";
import { getLocalizedHomePageData } from "@/lib/home/getLocalizedHomePageData";
import { getTranslations } from "next-intl/server";

// Page-level metadata (SEO)
export const metadata = seoMeta({
  title: "HawkStack Consulting | Digital Transformation & Growth ",
  description: "HawkStack Consulting | Digital Transformation & Growth",
});

export default async function HomePage() {
  const t = await getTranslations("Home");
  const {
    heroSectionData,
    cloudServicesSectionData,
    // productsSectionData,
    digitalTransformationSectionData,
    platformSectionData,
    whatWeDoSectionData,
    cloudSectionData,
  } = getLocalizedHomePageData(t);
  return (
    <div>
      <HeroSection data={heroSectionData} />
      <EngineeringDrivenCloudServices data={cloudServicesSectionData} />
      {/* <ProductReseller data={productsSectionData} /> */}
      <DigitalTransformation data={digitalTransformationSectionData} />
      <WhatWeDo data={whatWeDoSectionData} />
      <PlatformSection data={platformSectionData} />
      <CloudInnovation data={cloudSectionData} />
      <ContactCTA />
    </div>
  );
}
