import type { ProductCncfPageContent } from "@/app/types/product-reseller/product-cncf/product-cncf";
import ProductCncfHeroSection from "./herro-section";
<<<<<<< HEAD
import ProductCncfKubeVirtPromoSection from "./kubevirt-promo-section";
=======
>>>>>>> b8e0e02d942140fc5ae297c91e9f75a32b4528aa
import ProductCncfOnePartnerSection from "./one-partner-section";

type ProductCncfPageProps = {
  pageData: ProductCncfPageContent;
};

export default function ProductCncfPage({ pageData }: ProductCncfPageProps) {
  return (
    <>
      <ProductCncfHeroSection content={pageData.hero} />
      <ProductCncfOnePartnerSection content={pageData.onePartner} />
<<<<<<< HEAD
      <ProductCncfKubeVirtPromoSection content={pageData.kubeVirtPromo} />
=======
>>>>>>> b8e0e02d942140fc5ae297c91e9f75a32b4528aa
    </>
  );
}
