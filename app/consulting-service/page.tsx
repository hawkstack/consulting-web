import AppModernizationHeroSection from "@/components/app-modernization/HeroSection";
import HowWeHelpClientsSection from "@/components/consulting-services/HowWeHelpClientsSection";
import WhatWeDoSection from "@/components/consulting-services/WhatWeDoSection";
import {
  consultingServicesHeroContent,
  consultingServicesHowWeHelpSectionContent,
  consultingServicesWhatWeDoSectionContent,
} from "@/data/consulting-services/consulting-services";

export default function ConsultingPage() {
  return (
    <>
      <AppModernizationHeroSection content={consultingServicesHeroContent} />
      <WhatWeDoSection content={consultingServicesWhatWeDoSectionContent} />
      <HowWeHelpClientsSection
        content={consultingServicesHowWeHelpSectionContent}
      />
    </>
  );
}
