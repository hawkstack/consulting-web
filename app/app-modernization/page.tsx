import AppModernizationHeroSection from "@/components/app-modernization/HeroSection";
import CapabilitiesSection from "@/components/app-modernization/CapabilitiesSection";
import WhyAppModernizationSection from "@/components/app-modernization/WhyAppModernizationSection";
import {
  appModernizationCapabilitiesSectionContent,
  appModernizationHeroContent,
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
    </>
  );
}
