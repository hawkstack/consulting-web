import { AppModernizationHeroSection } from "@/components/services/app-modernization";
import EngagementModelSection from "@/components/services/consulting-services/components/EngagementModelSection";
import HowWeHelpClientsSection from "@/components/services/consulting-services/components/HowWeHelpClientsSection";
import StartConversationSection from "@/components/services/consulting-services/components/StartConversationSection";
import WhatWeDoSection from "@/components/services/consulting-services/components/WhatWeDoSection";
import {
  consultingServicesConversationSectionContent,
  consultingServicesEngagementModelSectionContent,
  consultingServicesHeroContent,
  consultingServicesHowWeHelpSectionContent,
  consultingServicesWhatWeDoSectionContent,
} from "@/components/services/consulting-services/data/consulting-services";

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
