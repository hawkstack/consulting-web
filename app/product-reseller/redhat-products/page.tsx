import {
  RedHatAICapabilitiesSection,
  RedHatAICtaSection,
  RedHatAIFoundationSection,
  RedHatAIStrategySection,
} from "@/components/product-reseller/product-redhat/redhat-ai";
import RedHatApplicationServicesSection from "@/components/product-reseller/product-redhat/redhat-products/RedHatApplicationServicesSection";
import RedHatProductsHeroSection from "@/components/product-reseller/product-redhat/redhat-products/RedHatProductsHeroSection";
import {
  redHatApplicationServicesData,
  redHatArtificialIntelligenceData,
  redHatCloudComputingData,
  redHatLinuxPlatformsData,
  redHatManagementData,
  redHatProductsCapabilitiesData,
  redHatProductsCtaData,
  redHatProductsDeliveryModelData,
  redHatProductsFeaturedPlatformsData,
  redHatProductsHeroData,
} from "@/data/product-reseller/product-redhat/redhat-products/redhat-application-services";

const RedHatApplicationServicesPage = () => {
  return (
    <>
      <RedHatProductsHeroSection data={redHatProductsHeroData} />
      <RedHatAIFoundationSection
        data={redHatProductsFeaturedPlatformsData}
        titleClassName="xl:w-[960px]"
      />
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
      <RedHatApplicationServicesSection data={redHatLinuxPlatformsData} />
      <RedHatApplicationServicesSection
        data={redHatManagementData}
        backgroundClassName="bg-white"
      />
      <RedHatAIStrategySection
        data={redHatProductsDeliveryModelData}
        headingContainerClassName="max-w-[980px]"
      />
      <RedHatAICtaSection data={redHatProductsCtaData} />
    </>
  );
};

export default RedHatApplicationServicesPage;
