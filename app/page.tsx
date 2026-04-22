import { seoMeta } from "../components/seo/seoMeta";

import HeroSection from "@/components/home/HeroSection";
import EngineeringDrivenCloudServices from "@/components/home/EngineeringDrivenCloudServices";
import GlobalTechnology from "@/components/home/GlobalTechnology";
import PlatformSection from "@/components/home/PlatformSection";
import CloudInnovation from "@/components/home/CloudInnovation";
import WhatWeDo from "@/components/home/WhatWeDo";
import ContactCTA from "@/components/home/ContactFormSection";
import ProductReseller from "@/components/home/ProductReseller";
import { homePageData } from "@/data/home/home";

// Page-level metadata (SEO)
export const metadata = seoMeta({
  title: "Red Hat Training & Certification Courses | Bengaluru ",
  description: "Red Hat Training & Certification Courses | Bengaluru",
});

export default function HomePage () {
  const { 
    heroSectionData, cloudServicesSectionData, productsSectionData, globalSectionData, platformSectionData, whatWeDoSectionData, cloudSectionData
  } = homePageData;
  return (
    <div>
      <HeroSection data = {heroSectionData}/>
      <EngineeringDrivenCloudServices data = {cloudServicesSectionData} />
      <ProductReseller data = {productsSectionData} />
      <GlobalTechnology data = {globalSectionData} />
      <PlatformSection data = {platformSectionData}/>
      <WhatWeDo data = {whatWeDoSectionData} />
      <CloudInnovation data = {cloudSectionData} />
      <ContactCTA />
    </div>
  );
};
