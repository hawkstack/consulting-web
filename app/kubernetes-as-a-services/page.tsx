import { AppModernizationHeroSection } from "@/components/services/app-modernization";
import BenefitsSection from "@/components/services/kubernetes-as-a-services/components/BenefitsSection";
import CtaSection from "@/components/services/kubernetes-as-a-services/components/CtaSection";
import FeaturesSection from "@/components/services/kubernetes-as-a-services/components/FeaturesSection";
import ProblemSection from "@/components/services/kubernetes-as-a-services/components/ProblemSection";
import SolutionSection from "@/components/services/kubernetes-as-a-services/components/SolutionSection";
import UseCasesSection from "@/components/services/kubernetes-as-a-services/components/UseCasesSection";
import {
  benefitsData,
  ctaData,
  heroSectionData,
  howItWorksData,
  problemData,
  solutionData,
  useCasesData,
} from "@/components/services/kubernetes-as-a-services/data/kubernetes-as-a-services";

const page = () => {
  return (
    <div>
      <AppModernizationHeroSection content={heroSectionData} />
      <ProblemSection data={problemData} />
      <SolutionSection data={solutionData} />
      <FeaturesSection data={howItWorksData} />
      <UseCasesSection data={useCasesData} />
      <BenefitsSection data={benefitsData} />
      <CtaSection data={ctaData} />
    </div>
  );
};

export default page;
