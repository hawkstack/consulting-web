import {
  RedHatAICapabilitiesSection,
  RedHatAICtaSection,
  RedHatAIFoundationSection,
  RedHatAIOverviewSection,
  RedHatAIProductionSection,
  RedHatAIStrategySection,
} from "@/components/product-reseller/product-redhat/redhat-ai";
import { RedHatAnsibleHeroSection } from "@/components/product-reseller/product-redhat/redhat-ansible";
import {
  redHatOpenShiftCapabilitiesData,
  redHatOpenShiftCtaData,
  redHatOpenShiftFoundationData,
  redHatOpenShiftHeroData,
  redHatOpenShiftOverviewData,
  redHatOpenShiftProductionData,
  redHatOpenShiftStrategyData,
} from "@/data/product-reseller/product-redhat/redhat-openshift/redhat-openshift";

const page = () => {
  return (
    <div>
      <RedHatAnsibleHeroSection data={redHatOpenShiftHeroData} />
      <RedHatAIOverviewSection data={redHatOpenShiftOverviewData} />
      <RedHatAIFoundationSection data={redHatOpenShiftFoundationData} />
      <RedHatAICapabilitiesSection data={redHatOpenShiftCapabilitiesData} />
      <RedHatAIProductionSection data={redHatOpenShiftProductionData} />
      <RedHatAIStrategySection data={redHatOpenShiftStrategyData} />
      <RedHatAICtaSection data={redHatOpenShiftCtaData} />
    </div>
  );
};

export default page;
