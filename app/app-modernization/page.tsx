import {
  AppModernizationHeroSection,
  CapabilitiesSection,
  CtaSection,
  ProcessSection,
  WhyAppModernizationSection,
  WhyHawkStackSection,
} from "@/components/services/app-modernization";
import {
  appModernizationCtaSectionContent,
  appModernizationCapabilitiesSectionContent,
  appModernizationHeroContent,
  appModernizationProcessSectionContent,
  appModernizationWhyHawkStackSectionContent,
  appModernizationWhySectionContent,
} from "@/components/services/app-modernization/data/app-modernization";

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
      <CtaSection content={appModernizationCtaSectionContent} />
    </>
  );
}
