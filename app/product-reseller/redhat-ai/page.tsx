import {
  RedHatAICapabilitiesSection,
  RedHatAICtaSection,
  RedHatAIFoundationSection,
  RedHatAIHeroSection,
  RedHatAIOverviewSection,
  RedHatAIProductionSection,
  RedHatAIStrategySection,
  redHatAICapabilitiesData,
  redHatAICtaData,
  redHatAIFoundationData,
  redHatAIHeroData,
  redHatAIOverviewData,
  redHatAIProductionData,
  redHatAIStrategyData,
} from "@/components/product-reseller/product-redhat/redhat-ai";

const page = () => {
  return (
    <div>
      <RedHatAIHeroSection data={redHatAIHeroData} />
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
