import RedHatClientsSection from "@/components/product-reseller/product-redhat/components/RedHatClientsSection";
import RedHatCTASection from "@/components/product-reseller/product-redhat/components/RedHatCTASection";
import RedHatDeliverySection from "@/components/product-reseller/product-redhat/components/RedHatDeliverySection";
import RedHatHeroSection from "@/components/product-reseller/product-redhat/components/RedHatHeroSection";
import RedHatOverviewSection from "@/components/product-reseller/product-redhat/components/RedHatOverviewSection";
import RedHatWhyChooseSection from "@/components/product-reseller/product-redhat/components/RedHatWhyChooseSection";
import RedHatProductsSection from "@/components/product-reseller/product-redhat/components/RedHatProductsSection";
import type { ProductRedhatPageContent } from "@/components/product-reseller/product-redhat/types/product-redhat";

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
