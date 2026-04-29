import RedHatClientsSection from "@/components/product-reseller/red-hat/RedHatClientsSection";
import RedHatCTASection from "@/components/product-reseller/red-hat/RedHatCTASection";
import RedHatDeliverySection from "@/components/product-reseller/red-hat/RedHatDeliverySection";
import RedHatHeroSection from "@/components/product-reseller/red-hat/RedHatHeroSection";
import RedHatOverviewSection from "@/components/product-reseller/red-hat/RedHatOverviewSection";
import RedHatWhyChooseSection from "@/components/product-reseller/red-hat/RedHatWhyChooseSection";
import { redHatHeroData, redhatOverviewData, whyChooseData } from "@/data/product-reseller/red-hat";

const page = () => {
  return (
    <div>
      <RedHatHeroSection data={redHatHeroData} />
      <RedHatOverviewSection data={redhatOverviewData} />
      <RedHatWhyChooseSection data={whyChooseData} />
      <RedHatClientsSection />
      <RedHatDeliverySection />
      <RedHatCTASection />
    </div>
  );
};

export default page;
