// app/page.tsx
import React from "react";
import { seoMeta } from "../components/seo/seoMeta";

import HeroSection from "@/components/home/HeroSection";
import VisionApproach from "@/components/home/VisionApproach";
import GlobalTechnology from "@/components/home/GlobalTechnology";
import PlatformSection from "@/components/home/PlatformSection";
import WhatWeDo from "@/components/home/WhatWeDo";
import Industries from "@/components/home/Industries";
import ContactCTA from "@/components/home/ContactFormSection";
import ProductReseller from "@/components/home/ProductReseller";
import { homePageData } from "@/data/home/home";

// Page-level metadata (SEO)
export const metadata = seoMeta({
  title: "Red Hat Training & Certification Courses | Bengaluru ",
  description: "Red Hat Training & Certification Courses | Bengaluru",
});

const cardsData = [
  {
    title: "Vision",
    iconSrc: "/icons/vision.png",
    texts: ["Evolution", "Innovation", "Growth"],
  },
];

export default function HomePage () {
  const { 
    heroSectionData, productsSectionData, globalSectionData, platformSectionData, whatWeDoSectionData
  } = homePageData;
  return (
    <div>
      <HeroSection data = {heroSectionData}/>
      <VisionApproach />
      <ProductReseller data = {productsSectionData} />
      <GlobalTechnology data = {globalSectionData} />
      <PlatformSection data = {platformSectionData}/>
      <WhatWeDo data = {whatWeDoSectionData} />
      <Industries />
      <ContactCTA />
    </div>
  );
};
