import BenefitsSection from "@/components/kubernetes-as-a-services/BenefitsSection";
import CtaSection from "@/components/kubernetes-as-a-services/CtaSection";
import FeaturesSection from "@/components/kubernetes-as-a-services/FeaturesSection";
import HeroSection from "@/components/kubernetes-as-a-services/HeroSection";
import ProblemSection from "@/components/kubernetes-as-a-services/ProblemSection";
import SolutionSection from "@/components/kubernetes-as-a-services/SolutionSection";
import UseCasesSection from "@/components/kubernetes-as-a-services/UseCasesSection";
import {
  benefitsData,
  ctaData,
  howItWorksData,
  problemData,
  solutionData,
  useCasesData,
} from "@/data/kubernetes-as-a-services/kubernetes-as-a-services";

const page = () => {
  return (
    <div>
      <HeroSection />
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
