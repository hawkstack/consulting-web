import AppModernizationHeroSection from "@/components/app-modernization/HeroSection";
import WhyKubevirtSection from "@/components/kubevirt-service/WhyKubevirtSection";
import { kubevirtServicePageData } from "@/data/kubevirt-service/kubevirt-service";

export default function KubevirtServicePage() {
  const { heroSectionData, adoptionSectionData } = kubevirtServicePageData;

  return (
    <>
      <AppModernizationHeroSection content={heroSectionData} />
      <WhyKubevirtSection content={adoptionSectionData} />
    </>
  );
}
