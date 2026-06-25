import { AppModernizationHeroSection } from "@/components/services/app-modernization";
import {
  AutomationCapabilitiesSection,
  AutomationOfferSection,
  AutomationProcessSection,
  AutomationWhyHawkstackSection,
  automationHeroContent,
  automationCapabilitiesSectionContent,
  automationOfferSectionContent,
  automationProcessSectionContent,
  automationWhyHawkstackSectionContent,
} from "@/components/services/automation";

export default function AutomationPage() {
  return (
    <>
      <AppModernizationHeroSection content={automationHeroContent} />
      <AutomationCapabilitiesSection content={automationCapabilitiesSectionContent} />
      <AutomationOfferSection content={automationOfferSectionContent} />
      <AutomationProcessSection content={automationProcessSectionContent} />
      <AutomationWhyHawkstackSection content={automationWhyHawkstackSectionContent} />
    </>
  );
}
