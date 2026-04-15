// app/page.tsx
import React from "react";
import { seoMeta } from "../components/seo/seoMeta";

import HeroSection from "@/components/home/HeroSection";
import VisionApproach from "@/components/home/VisionApproach";
import OurSolutions from "@/components/home/OurSolutions";
import PlatformSection from "@/components/home/PlatformSection";
import StrategicPartners from "@/components/home/StrategicPartners";
import JoinOurTeam from "@/components/home/JoinOurTeam";
import WhyWorkWithUs from "@/components/home/WhyWorkWithUs";
import Industries from "@/components/home/Industries";
import ContactCTA from "@/components/home/ContactFormSection";
import WhyHawkstackSection from "@/components/home/whyHawkstack/whyHawkstackSection";
import { SOLUTIONS } from "@/constants";
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
    hero, platform
  } = homePageData;
  return (
    <div>
      <HeroSection data = {hero}/>
      <VisionApproach />
      <WhyHawkstackSection
        title="Why HawkStack"
        description="HawkStack delivers real, hands-on cloud skills that translate directly into real-world impact."
      />
      <OurSolutions />
      <PlatformSection data = {platform}/>
      <StrategicPartners />
      <JoinOurTeam />
      <WhyWorkWithUs
        title="Why Work with us"
        description="Innovate,Grow and Succeed Together"
        solutions={SOLUTIONS}
      />
      <Industries />
      <ContactCTA />
    </div>
  );
};
