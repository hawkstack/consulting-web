import AppModernizationHeroSection from "@/components/app-modernization/HeroSection";
import { kubevirtServiceHeroContent } from "@/data/kubevirt-service/kubevirt-service";

export default function KubevirtServicePage() {
  return <AppModernizationHeroSection content={kubevirtServiceHeroContent} />;
}
