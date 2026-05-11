import RedHatAICapabilitiesSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAICapabilitiesSection";
import RedHatAICtaSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAICtaSection";
import RedHatAIFoundationSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIFoundationSection";
// import RedHatAIHeroSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIHeroSection";
import RedHatAIOverviewSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIOverviewSection";
import RedHatAIProductionSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIProductionSection";
import RedHatAIStrategySection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIStrategySection";

import {
  redHatAnsibleCapabilitiesData,
  redHatAnsibleCtaData,
  redHatAnsibleFoundationData,
  redHatAnsibleOverviewData,
  redHatAnsibleProductionData,
  redHatAnsibleStrategyData,
} from "@/data/product-reseller/product-redhat/redhat-ansible/redhat-ansible";

const page = () => {
  return (
    <div>
      {/* <RedHatAIHeroSection data={redHatAIHeroData} /> */}
      <RedHatAIOverviewSection data={redHatAnsibleOverviewData} />
      <RedHatAIFoundationSection data={redHatAnsibleFoundationData} />
      <RedHatAICapabilitiesSection data={redHatAnsibleCapabilitiesData} />
      <RedHatAIProductionSection data={redHatAnsibleProductionData} />
      <RedHatAIStrategySection data={redHatAnsibleStrategyData} />
      <RedHatAICtaSection data={redHatAnsibleCtaData} />
    </div>
  );
};

export default page;
