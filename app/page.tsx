// app/page.tsx
import React from "react";
import { seoMeta } from "../components/seo/seoMeta";
import HeroSection from "@/components/home/HeroSection";
import VisionApproach from "@/components/home/VisionApproach";
import WhyHawkStack from "@/components/home/WhyHawkStack";
import OurSolutions from "@/components/home/OurSolutions";
import WhatWeDeliver from "@/components/home/WhatWeDeliver";
import StrategicPartners from "@/components/home/StrategicPartners";
import JoinOurTeam from "@/components/home/JoinOurTeam";
import WhyWorkWithUs from "@/components/home/WhyWorkWithUs";
import Industries from "@/components/home/Industries";
import ContactCTA from "@/components/home/ContactCTA";

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
      <VisionApproach />
      <WhyHawkStack />
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
