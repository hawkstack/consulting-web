import RedHatAICapabilitiesSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAICapabilitiesSection";
import RedHatAICtaSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAICtaSection";
import RedHatAIFoundationSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIFoundationSection";
import RedHatAIOverviewSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIOverviewSection";
import RedHatAIProductionSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIProductionSection";
import RedHatAIStrategySection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIStrategySection";
import RedHatAnsibleHeroSection from "@/components/product-reseller/product-redhat/redhat-ansible/RedHatAnsibleHeroSection";
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
