import type { ProductCncfPageContent } from "@/app/types/product-reseller/product-cncf/product-cncf";
import ProductCncfHeroSection from "./herro-section";
import ProductCncfKubeVirtPromoSection from "./kubevirt-promo-section";
import ProductCncfOnePartnerSection from "./one-partner-section";

type ProductCncfPageProps = {
  pageData: ProductCncfPageContent;
};

export default function ProductCncfPage({ pageData }: ProductCncfPageProps) {
  return (
    <>
      <ProductCncfHeroSection content={pageData.hero} />
      <ProductCncfOnePartnerSection content={pageData.onePartner} />
      <ProductCncfKubeVirtPromoSection content={pageData.kubeVirtPromo} />
    </>
  );
}
