import type { ProductMirantisPageContent } from "@/components/product-reseller/product-mirantis/types/product-mirantis";
import ProductMirantisCtaSection from "./cta-section";
import ProductMirantisHeroSection from "./hero-section";
import ProductMirantisSolutionsSection from "./solutions-section";

type ProductMirantisPageProps = {
  pageData: ProductMirantisPageContent;
};

export default function ProductMirantisPage({
  pageData,
}: ProductMirantisPageProps) {
  return (
    <>
      <ProductMirantisHeroSection content={pageData.hero} />
      <ProductMirantisSolutionsSection content={pageData.solutions} />
      <ProductMirantisCtaSection content={pageData.cta} />
    </>
  );
}
