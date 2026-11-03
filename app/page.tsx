import { seoMeta } from "../components/seo/seoMeta";

import HeroSection from "@/components/home/HeroSection";
import AboutHawkStack from "@/components/home/AboutHawkStack";
import { aboutSectionData } from "@/data/home/about";
import ProductShowcaseSection from "@/components/home/ProductShowcaseSection";
import EngineeringDrivenCloudServices from "@/components/home/EngineeringDrivenCloudServices";
import WhyHawkStack from "@/components/home/WhyHawkStack/components/WhyHawkStack";
import BuildYourCareer from "@/components/home/BuildYourCareer/components/BuildYourCareer";
import SectorsSection from "@/components/home/SectorsSection";
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
  } = getLocalizedHomePageData(t);
  return (
    <div>
      <HeroSection data={heroSectionData} />
      <div id="home-overview" className="scroll-mt-[70px] bg-white">
        <AboutHawkStack data={aboutSectionData} />
        <ProductShowcaseSection />
      </div>
      {/* <ProductReseller data={productsSectionData} /> */}
      {/* <DigitalTransformation data={digitalTransformationSectionData} /> */}
      <TechnologyCoverage />
      <EngineeringDrivenCloudServices data={cloudServicesSectionData} />
      <SectorsSection />
      <WhyHawkStack />
      <BuildYourCareer />
      <ContactCTA />
    </div>
  );
}
