// app/page.tsx
import React from "react";
import { seoMeta } from "../components/seo/seoMeta";

import HeroSection from "@/components/home/HeroSection";
import VisionApproach from "@/components/home/VisionApproach";
import OurSolutions from "@/components/home/OurSolutions";
import EngineeringDrivenCloudServices from "@/components/home/EngineeringDrivenCloudServices";
import StrategicPartners from "@/components/home/StrategicPartners";
import JoinOurTeam from "@/components/home/JoinOurTeam";
import WhyWorkWithUs from "@/components/home/WhyWorkWithUs";
import Industries from "@/components/home/Industries";
import ContactCTA from "@/components/home/ContactFormSection";
import WhyHawkstackSection from "@/components/home/whyHawkstack/whyHawkstackSection";
import { SOLUTIONS } from "@/constants";

// Page-level metadata (SEO)
export const metadata = seoMeta({
  title: "Red Hat Training & Certification Courses | Bengaluru ",
  description: "Red Hat Training & Certification Courses | Bengaluru",
});

const Home = () => {
  return (
    <div>
      <HeroSection />
      <VisionApproach />
      <WhyHawkstackSection
        title="Why HawkStack"
        description="HawkStack delivers real, hands-on cloud skills that translate directly into real-world impact."
      />
      <OurSolutions />
      <EngineeringDrivenCloudServices />
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

export default Home;
