import AppModernizationHeroSection from "@/components/app-modernization/HeroSection";
import EngagementModelSection from "@/components/consulting-services/EngagementModelSection";
import HowWeHelpClientsSection from "@/components/consulting-services/HowWeHelpClientsSection";
import StartConversationSection from "@/components/consulting-services/StartConversationSection";
import WhatWeDoSection from "@/components/consulting-services/WhatWeDoSection";
import {
  consultingServicesConversationSectionContent,
  consultingServicesEngagementModelSectionContent,
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
      <EngagementModelSection
        content={consultingServicesEngagementModelSectionContent}
      />
      <StartConversationSection
        content={consultingServicesConversationSectionContent}
      />
    </>
  );
}
