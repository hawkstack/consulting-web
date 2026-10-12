import { seoMeta } from "../components/seo/seoMeta";

import HeroSection from "@/components/home/HeroSection";
import EngineeringDrivenCloudServices from "@/components/home/EngineeringDrivenCloudServices";
import PlatformSection from "@/components/home/PlatformSection";
import CloudInnovation from "@/components/home/CloudInnovation";
import ContactCTA from "@/components/home/ContactFormSection";
// import ProductReseller from "@/components/home/ProductReseller";
// import DigitalTransformation from "@/components/home/DigitalTransformation";
import TechnologyCoverage from "@/components/home/TechnologyCoverage/components/TechnologyCoverage";
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
    platformSectionData,
    cloudSectionData,
  } = getLocalizedHomePageData(t);
  return (
    <div>
      <HeroSection data={heroSectionData} />
      {/* <ProductReseller data={productsSectionData} /> */}
      {/* <DigitalTransformation data={digitalTransformationSectionData} /> */}
      <TechnologyCoverage />
      <EngineeringDrivenCloudServices data={cloudServicesSectionData} />
      <PlatformSection data={platformSectionData} />
      <CloudInnovation data={cloudSectionData} />
      <ContactCTA />
    </div>
  );
}
