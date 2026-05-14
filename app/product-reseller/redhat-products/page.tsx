import RedHatAICapabilitiesSection from "@/components/product-reseller/product-redhat/redhat-ai/RedHatAICapabilitiesSection";
import RedHatApplicationServicesSection from "@/components/product-reseller/product-redhat/redhat-products/RedHatApplicationServicesSection";
import {
  redHatApplicationServicesData,
  redHatProductsCapabilitiesData,
} from "@/data/product-reseller/product-redhat/redhat-products/redhat-application-services";

const RedHatApplicationServicesPage = () => {
  return (
    <>
      <RedHatAICapabilitiesSection data={redHatProductsCapabilitiesData} />
      <RedHatApplicationServicesSection data={redHatApplicationServicesData} />
    </>
  );
};

export default RedHatApplicationServicesPage;
