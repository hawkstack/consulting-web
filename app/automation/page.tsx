import AppModernizationHeroSection from "@/components/app-modernization/HeroSection";
import CapabilitiesSection from "@/components/automation/CapabilitiesSection";
import OfferSection from "@/components/automation/OfferSection";
import ProcessSection from "@/components/automation/ProcessSection";
import WhyHawkstackSection from "@/components/automation/WhyHawkstackSection";
import {
  automationHeroContent,
  automationCapabilitiesSectionContent,
  automationOfferSectionContent,
  automationProcessSectionContent,
  automationWhyHawkstackSectionContent,
} from "@/data/automation/automation";

export default function AutomationPage() {
  return (
    <>
      <AppModernizationHeroSection content={automationHeroContent} />
      <CapabilitiesSection content={automationCapabilitiesSectionContent} />
      <OfferSection content={automationOfferSectionContent} />
      <ProcessSection content={automationProcessSectionContent} />
      <WhyHawkstackSection content={automationWhyHawkstackSectionContent} />
    </>
  );
}
