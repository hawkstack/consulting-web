// app/page.tsx
import React from "react";
import { seoMeta } from "../components/seo/seoMeta";

import HeroSection from "@/components/home/HeroSection";
// import RotatingCircle from "@/components/circle-rotation/Rotating-circle";
import VisionApproach from "@/components/home/VisionApproach";
import OurSolutions from "@/components/home/OurSolutions";
import WhatWeDeliver from "@/components/home/WhatWeDeliver";
import StrategicPartners from "@/components/home/StrategicPartners";
import JoinOurTeam from "@/components/home/JoinOurTeam";
import WhyWorkWithUs from "@/components/home/WhyWorkWithUs";
import Industries from "@/components/home/Industries";
import ContactCTA from "@/components/home/ContactCTA";
import WhyHawkstackSection from "@/components/home/whyHawkstack/whyHawkstackSection";

// Page-level metadata (SEO)
export const metadata = seoMeta({
  title: "Enterprise Cloud & Automation Consulting",
  description:
    "We help enterprises modernize applications, automate operations, and build secure cloud-native platforms.",
});

const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* <RotatingCircle /> */}
      <VisionApproach />

      <WhyHawkstackSection
        title="Why HawkStack"
        description="HawkStack delivers real, hands-on cloud skills that translate directly into real-world impact."
      />

      <OurSolutions />
      <WhatWeDeliver />
      <StrategicPartners />
      <JoinOurTeam />
      <WhyWorkWithUs />
      <Industries />
      <ContactCTA />
    </div>
  );
};

export default Home;
