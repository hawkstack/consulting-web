import AppModernizationHeroSection from "@/components/app-modernization/HeroSection";
import ServicesSection from "@/components/kubevirt-service/ServicesSection";
import WhyKubevirtSection from "@/components/kubevirt-service/WhyKubevirtSection";
import { kubevirtServicePageData } from "@/data/kubevirt-service/kubevirt-service";

export default function KubevirtServicePage() {
  const { heroSectionData, adoptionSectionData, servicesSectionData } =
    kubevirtServicePageData;

  return (
    <>
      <AppModernizationHeroSection content={heroSectionData} />
      <WhyKubevirtSection content={adoptionSectionData} />
      <ServicesSection
        content={servicesSectionData}
        adoptionContent={adoptionSectionData}
      />
    </>
  );
}
