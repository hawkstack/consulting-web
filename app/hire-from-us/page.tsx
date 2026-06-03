import CTASection from "@/components/hire-from-us/CTASection";
import HeroSection from "@/components/hire-from-us/HeroSection";
import HiringRequestFormSection from "@/components/hire-from-us/HiringRequestFormSection";
import RiskReductionSection from "@/components/hire-from-us/RiskReductionSection";
import ServicesOverviewSection from "@/components/hire-from-us/ServicesOverviewSection";
import SolutionsShowcaseSection from "@/components/hire-from-us/SolutionsShowcaseSection";
import StatsAndBenefitsSection from "@/components/hire-from-us/StatsAndBenefitsSection";
import {
  ctaSectionData,
  heroSectionData,
  riskReductionSectionData,
  servicesOverviewSectionData,
  solutionsShowcaseData,
  statsAndBenefitsSectionData,
} from "@/data/hire-from-us/hire-from-us";

const page = () => {
  return (
    <div>
      <HeroSection data={heroSectionData} />
      <HiringRequestFormSection />
      <ServicesOverviewSection data={servicesOverviewSectionData} />
      <SolutionsShowcaseSection data={solutionsShowcaseData} />
      <StatsAndBenefitsSection data={statsAndBenefitsSectionData} />
      <RiskReductionSection data={riskReductionSectionData} />
      <CTASection data={ctaSectionData} />
    </div>
  );
};

export default page;
