import AppModernizationHeroSection from "@/components/app-modernization/HeroSection";
import CapabilitiesSection from "@/components/app-modernization/CapabilitiesSection";
import ProcessSection from "@/components/app-modernization/ProcessSection";
import WhyHawkStackSection from "@/components/app-modernization/WhyHawkStackSection";
import WhyAppModernizationSection from "@/components/app-modernization/WhyAppModernizationSection";
import {
  appModernizationCapabilitiesSectionContent,
  appModernizationHeroContent,
  appModernizationProcessSectionContent,
  appModernizationWhyHawkStackSectionContent,
  appModernizationWhySectionContent,
} from "@/data/app-modernization/app-modernization";

export default function AppModernizationPage() {
  return (
    <>
      <AppModernizationHeroSection content={appModernizationHeroContent} />
      <WhyAppModernizationSection content={appModernizationWhySectionContent} />
      <CapabilitiesSection
        content={appModernizationCapabilitiesSectionContent}
      />
      <ProcessSection content={appModernizationProcessSectionContent} />
      <WhyHawkStackSection content={appModernizationWhyHawkStackSectionContent} />
    </>
  );
}
