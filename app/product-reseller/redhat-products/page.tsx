import RedHatAICapabilitiesSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAICapabilitiesSection";
import RedHatAICtaSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAICtaSection";
import RedHatApplicationServicesSection from "@/components/product-reseller/product-redhat/redhat-products/RedHatApplicationServicesSection";
import {
  redHatApplicationServicesData,
  redHatArtificialIntelligenceData,
  redHatCloudComputingData,
  redHatProductsCapabilitiesData,
  redHatProductsCtaData,
} from "@/data/product-reseller/product-redhat/redhat-products/redhat-application-services";

const RedHatApplicationServicesPage = () => {
  return (
    <>
      <RedHatAICapabilitiesSection data={redHatProductsCapabilitiesData} />
      <RedHatApplicationServicesSection data={redHatApplicationServicesData} />
      <RedHatApplicationServicesSection
        data={redHatArtificialIntelligenceData}
        backgroundClassName="bg-black"
        headingClassName="text-white"
        cardClassName="border-[#2a2a2a] bg-[#151515]"
        descriptionClassName="text-white/80"
      />
      <RedHatApplicationServicesSection
        data={redHatCloudComputingData}
        backgroundClassName="bg-white"
      />
      <RedHatAICtaSection data={redHatProductsCtaData} />
    </>
  );
};

export default RedHatApplicationServicesPage;
