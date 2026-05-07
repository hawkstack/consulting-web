import RedHatClientsSection from "@/components/product-reseller/product-redhat/RedHatClientsSection";
import RedHatCTASection from "@/components/product-reseller/product-redhat/RedHatCTASection";
import RedHatDeliverySection from "@/components/product-reseller/product-redhat/RedHatDeliverySection";
import RedHatHeroSection from "@/components/product-reseller/product-redhat/RedHatHeroSection";
import RedHatOverviewSection from "@/components/product-reseller/product-redhat/RedHatOverviewSection";
import RedHatWhyChooseSection from "@/components/product-reseller/product-redhat/RedHatWhyChooseSection";
import RedHatProductsSection from "@/components/product-reseller/product-redhat/RedHatProductsSection";
import type { ProductRedhatPageContent } from "@/app/types/product-reseller/product-redhat/product-redhat";

type ProductRedhatPageProps = {
  pageData: ProductRedhatPageContent;
};

const ProductRedhatPage = ({ pageData }: ProductRedhatPageProps) => {
  return (
    <div>
      <RedHatHeroSection data={pageData.hero} />
      <RedHatOverviewSection data={pageData.overview} />
      <RedHatProductsSection data={pageData.products} />
      <RedHatWhyChooseSection data={pageData.whyChoose} />
      <RedHatClientsSection data={pageData.clients} />
      <RedHatDeliverySection data={pageData.deliveryApproach} />
      <RedHatCTASection data={pageData.cta} />
    </div>
  );
};

export default ProductRedhatPage;
