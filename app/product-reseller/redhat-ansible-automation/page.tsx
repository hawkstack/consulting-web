import {
  RedHatAICapabilitiesSection,
  RedHatAICtaSection,
  RedHatAIFoundationSection,
  RedHatAIOverviewSection,
  RedHatAIProductionSection,
  RedHatAIStrategySection,
} from "@/components/product-reseller/product-redhat/redhat-ai";
import RedHatAnsibleHeroSection from "@/components/product-reseller/product-redhat/redhat-ansible/RedHatAnsibleHeroSection";

import {
  redHatAnsibleCapabilitiesData,
  redHatAnsibleCtaData,
  redHatAnsibleFoundationData,
  redHatAnsibleHeroData,
  redHatAnsibleOverviewData,
  redHatAnsibleProductionData,
  redHatAnsibleStrategyData,
} from "@/data/product-reseller/product-redhat/redhat-ansible/redhat-ansible";

const page = () => {
  return (
    <div>
      <RedHatAnsibleHeroSection data={redHatAnsibleHeroData} />
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
