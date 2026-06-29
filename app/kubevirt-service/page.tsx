import { AppModernizationHeroSection } from "@/components/services/app-modernization";
import ProcessSection from "@/components/services/kubevirt-service/components/ProcessSection";
import ServicesSection from "@/components/services/kubevirt-service/components/ServicesSection";
import UseCasesSection from "@/components/services/kubevirt-service/components/UseCasesSection";
import WhyKubevirtSection from "@/components/services/kubevirt-service/components/WhyKubevirtSection";
import { kubevirtServicePageData } from "@/components/services/kubevirt-service/data/kubevirt-service";

export default function KubevirtServicePage() {
  const {
    heroSectionData,
    adoptionSectionData,
    useCasesSectionData,
    processSectionData,
    servicesSectionData,
  } = kubevirtServicePageData;

  return (
    <>
      <AppModernizationHeroSection content={heroSectionData} />
      <WhyKubevirtSection content={adoptionSectionData} />
      <ServicesSection
        content={servicesSectionData}
        adoptionContent={adoptionSectionData}
      />
      <UseCasesSection content={useCasesSectionData} />
      <ProcessSection content={processSectionData} />
    </>
  );
}
