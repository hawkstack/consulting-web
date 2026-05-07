import RedHatAICapabilitiesSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAICapabilitiesSection";
import RedHatAICtaSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAICtaSection";
import RedHatAIFoundationSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIFoundationSection";
import RedHatAIHeroSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIHeroSection";
import RedHatAIOverviewSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIOverviewSection";
import RedHatAIProductionSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIProductionSection";
import RedHatAIStrategySection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIStrategySection";
import {
  redHatAICapabilitiesData,
  redHatAICtaData,
  redHatAIFoundationData,
  redHatAIOverviewData,
  redHatAIProductionData,
  redHatAIStrategyData,
} from "@/data/product-reseller/product-redhat/redhat-ai/redhat-ai";

const page = () => {
  return (
    <div>
      <RedHatAIHeroSection />
      <RedHatAIOverviewSection data={redHatAIOverviewData} />
      <RedHatAIFoundationSection data={redHatAIFoundationData} />
      <RedHatAICapabilitiesSection data={redHatAICapabilitiesData} />
      <RedHatAIProductionSection data={redHatAIProductionData} />
      <RedHatAIStrategySection data={redHatAIStrategyData} />
      <RedHatAICtaSection data={redHatAICtaData} />
    </div>
  );
};

export default page;
