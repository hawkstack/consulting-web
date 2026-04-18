import AppModernizationHeroSection from "@/components/app-modernization/HeroSection";
import CapabilitiesSection from "@/components/automation/CapabilitiesSection";
import {
  automationHeroContent,
  automationCapabilitiesSectionContent,
} from "@/data/automation/automation";

export default function AutomationPage() {
  return (
    <>
      <AppModernizationHeroSection content={automationHeroContent} />
      <CapabilitiesSection content={automationCapabilitiesSectionContent} />
    </>
  );
}
