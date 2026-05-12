import RedHatAICapabilitiesSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAICapabilitiesSection";
import RedHatAICtaSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAICtaSection";
import RedHatAIFoundationSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIFoundationSection";
import RedHatAIHeroSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIHeroSection";
import RedHatAIOverviewSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIOverviewSection";
import RedHatAIProductionSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIProductionSection";
import RedHatAIStrategySection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIStrategySection";
import {
  redHatLinuxCapabilitiesData,
  redHatLinuxCtaData,
  redHatLinuxFoundationData,
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
      <RedHatAIFoundationSection data={redHatLinuxFoundationData} />
      <RedHatAICapabilitiesSection data={redHatLinuxCapabilitiesData} />
      <RedHatAIProductionSection data={redHatLinuxProductionData} />
      <RedHatAIStrategySection data={redHatLinuxStrategyData} />
      <RedHatAICtaSection data={redHatLinuxCtaData} />
    </div>
  );
};

export default page;
