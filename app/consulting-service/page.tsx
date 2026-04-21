import AppModernizationHeroSection from "@/components/app-modernization/HeroSection";
import WhatWeDoSection from "@/components/consulting-services/WhatWeDoSection";
import {
  consultingServicesHeroContent,
  consultingServicesWhatWeDoSectionContent,
} from "@/data/consulting-services/consulting-services";

export default function ConsultingPage() {
  return (
    <>
      <AppModernizationHeroSection content={consultingServicesHeroContent} />
      <WhatWeDoSection content={consultingServicesWhatWeDoSectionContent} />
    </>
  );
}
