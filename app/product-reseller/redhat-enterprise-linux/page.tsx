import RedHatAICapabilitiesSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAICapabilitiesSection";
import RedHatAIHeroSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIHeroSection";
import RedHatAIOverviewSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIOverviewSection";
import RedHatAIStrategySection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIStrategySection";
import {
  redHatAIFoundationData,
  redHatLinuxCapabilitiesData,
  redHatLinuxCtaData,
  redHatLinuxHeroData,
  redHatLinuxOverviewData,
  redHatLinuxProductionData,
  redHatLinuxStrategyData,
} from "@/data/product-reseller/product-redhat/redhat-linux/redhat-linux";

const page = () => {
  return (
    <div>
      <RedHatAIHeroSection data={redHatLinuxHeroData} />
      <RedHatAIOverviewSection data={redHatLinuxOverviewData} />
      <RedHatAIFoundationSection data={redHatAIFoundationData} />
      <RedHatAICapabilitiesSection data={redHatLinuxCapabilitiesData} />
      <RedHatAIProductionSection data={redHatLinuxProductionData} />
      <RedHatAIStrategySection data={redHatLinuxStrategyData} />
      <RedHatAICtaSection data={redHatLinuxCtaData} />
    </div>
  );
};

export default page;
