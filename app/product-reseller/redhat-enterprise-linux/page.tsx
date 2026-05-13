import RedHatAICapabilitiesSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAICapabilitiesSection";
import RedHatAIHeroSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIHeroSection";
import RedHatAIOverviewSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIOverviewSection";
import RedHatAIStrategySection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIStrategySection";
import {
  redHatLinuxCapabilitiesData,
  redHatLinuxHeroData,
  redHatLinuxOverviewData,
  redHatLinuxStrategyData,
} from "@/data/product-reseller/product-redhat/redhat-linux/redhat-linux";

const page = () => {
  return (
    <div>
      <RedHatAIHeroSection data={redHatLinuxHeroData} />
      <RedHatAIOverviewSection data={redHatLinuxOverviewData} />
      {/* <RedHatAIFoundationSection /> */}
      <RedHatAICapabilitiesSection data={redHatLinuxCapabilitiesData} />
      {/* <RedHatAIProductionSection /> */}
      <RedHatAIStrategySection data={redHatLinuxStrategyData} />
      {/* <RedHatAICtaSection /> */}
    </div>
  );
};

export default page;
