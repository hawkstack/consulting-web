import AppModernizationHeroSection from "@/components/app-modernization/HeroSection";
import { automationHeroContent } from "@/data/consulting-services/consulting-services";

export default function ConsultingPage() {
  return (
    <>
      <AppModernizationHeroSection content={automationHeroContent} />
    </>
  );
}
