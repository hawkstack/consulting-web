import RedHatClientsSection from "@/components/product-reseller/red-hat/RedHatClientsSection";
import RedHatCTASection from "@/components/product-reseller/red-hat/RedHatCTASection";
import RedHatDeliverySection from "@/components/product-reseller/red-hat/RedHatDeliverySection";
import RedHatHeroSection from "@/components/product-reseller/red-hat/RedHatHeroSection";
import RedHatOverviewSection from "@/components/product-reseller/red-hat/RedHatOverviewSection";
import RedHatWhyChooseSection from "@/components/product-reseller/red-hat/RedHatWhyChooseSection";

const page = () => {
  return (
    <div>
      <RedHatHeroSection />
      <RedHatOverviewSection />
      <RedHatWhyChooseSection />
      <RedHatClientsSection />
      <RedHatDeliverySection />
      <RedHatCTASection />
    </div>
  );
};

export default page;
