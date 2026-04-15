import AppModernizationHeroSection from "@/components/app-modernization/HeroSection";
import WhyAppModernizationSection from "@/components/app-modernization/WhyAppModernizationSection";
import {
  appModernizationHeroContent,
  appModernizationWhySectionContent,
} from "@/data/app-modernization/app-modernization";

export default function AppModernizationPage() {
  return (
    <>
      <AppModernizationHeroSection content={appModernizationHeroContent} />
      <WhyAppModernizationSection content={appModernizationWhySectionContent} />
    </>
  );
}
