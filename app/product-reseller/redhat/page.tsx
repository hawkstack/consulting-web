import RedHatClientsSection from "@/components/product-reseller/redhat/RedHatClientsSection";
import RedHatCTASection from "@/components/product-reseller/redhat/RedHatCTASection";
import RedHatDeliverySection from "@/components/product-reseller/redhat/RedHatDeliverySection";
import RedHatHeroSection from "@/components/product-reseller/redhat/RedHatHeroSection";
import RedHatOverviewSection from "@/components/product-reseller/redhat/RedHatOverviewSection";
import RedHatWhyChooseSection from "@/components/product-reseller/redhat/RedHatWhyChooseSection";
import RedHatProductsSection from "@/components/product-reseller/redhat/RedHatProductsSection";
import {
  redHatClientsData,
  redHatCTAData,
  redHatHeroData,
  redhatOverviewData,
  redHatProductsData,
  whyChooseData,
} from "@/data/product-reseller/redhat";

const page = () => {
  return (
    <div>
      <RedHatHeroSection data={redHatHeroData} />
      <RedHatOverviewSection data={redhatOverviewData} />
      <RedHatProductsSection data={redHatProductsData} />
      <RedHatWhyChooseSection data={whyChooseData} />
      <RedHatClientsSection data={redHatClientsData} />
      <RedHatDeliverySection />
      <RedHatCTASection data={redHatCTAData} />
    </div>
  );
};

export default page;
