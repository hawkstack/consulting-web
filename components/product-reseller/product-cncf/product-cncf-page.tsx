import type { ProductCncfPageContent } from "@/app/types/product-reseller/product-cncf/product-cncf";
import ProductCncfHeroSection from "./herro-section";

type ProductCncfPageProps = {
  pageData: ProductCncfPageContent;
};

export default function ProductCncfPage({ pageData }: ProductCncfPageProps) {
  return (
    <>
      <ProductCncfHeroSection content={pageData.hero} />
    </>
  );
}
