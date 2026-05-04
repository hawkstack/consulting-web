import type { ProductRedhatPageContent } from "@/app/types/product-reseller/product-redhat/product-redhat";
import ProductRedhatHeroSection from "./hero-section";

type ProductRedhatPageProps = {
  pageData: ProductRedhatPageContent;
};

export default function ProductRedhatPage({ pageData }: ProductRedhatPageProps) {
  return (
    <>
      <ProductRedhatHeroSection content={pageData.hero} />
    </>
  );
}
