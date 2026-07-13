import type { ProductCncfPageContent } from "@/components/product-reseller/product-cncf/types/product-cncf";
import ProductCncfHeroSection from "./herro-section";
import ProductCncfKubeVirtPromoSection from "./kubevirt-promo-section";
import ProductCncfOnePartnerSection from "./one-partner-section";
import ProductCncfPlatformConfidenceSection from "./platform-confidence-section";

type ProductCncfPageProps = {
  pageData: ProductCncfPageContent;
};

export default function ProductCncfPage({ pageData }: ProductCncfPageProps) {
  return (
    <>
      <ProductCncfHeroSection content={pageData.hero} />
      <ProductCncfOnePartnerSection content={pageData.onePartner} />
      <ProductCncfKubeVirtPromoSection content={pageData.kubeVirtPromo} />
      <ProductCncfPlatformConfidenceSection
        content={pageData.platformConfidence}
      />
    </>
  );
}
