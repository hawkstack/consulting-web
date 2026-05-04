import RedHatClientsSection from "@/components/product-reseller/red-hat/RedHatClientsSection";
import RedHatCTASection from "@/components/product-reseller/red-hat/RedHatCTASection";
import RedHatDeliverySection from "@/components/product-reseller/red-hat/RedHatDeliverySection";
import RedHatHeroSection from "@/components/product-reseller/red-hat/RedHatHeroSection";
import RedHatOverviewSection from "@/components/product-reseller/red-hat/RedHatOverviewSection";
import RedHatWhyChooseSection from "@/components/product-reseller/red-hat/RedHatWhyChooseSection";
import RedHatProductsSection from "@/components/product-reseller/red-hat/RedHatProductsSection";
import {
  redHatClientsData,
  redHatCTAData,
  redHatHeroData,
  redhatOverviewData,
  redHatProductsData,
  whyChooseData,
} from "@/data/product-reseller/red-hat";

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
