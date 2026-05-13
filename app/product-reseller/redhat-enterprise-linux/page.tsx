import RedHatAICapabilitiesSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAICapabilitiesSection";
<<<<<<< HEAD
import RedHatAICtaSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAICtaSection";
import RedHatAIFoundationSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIFoundationSection";
import RedHatAIHeroSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIHeroSection";
import RedHatAIOverviewSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIOverviewSection";
import RedHatAIProductionSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIProductionSection";
=======
import RedHatAIHeroSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIHeroSection";
import RedHatAIOverviewSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAIOverviewSection";
>>>>>>> 84b9c7cb62e1c3eb80644673f838611aee705ec1
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
