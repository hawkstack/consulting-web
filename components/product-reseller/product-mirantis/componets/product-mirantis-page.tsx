import type { ProductMirantisPageContent } from "@/components/product-reseller/product-mirantis/types/product-mirantis";
import ProductMirantisHeroSection from "./hero-section";
import ProductMirantisSolutionsSection from "./solutions-section";
import ProductMirantisTransformationCapabilitiesSection from "./transformation-capabilities-section";
import ProductMirantisTransformationSection from "./transformation-section";

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
      <ProductMirantisTransformationSection content={pageData.transformation} />
      <ProductMirantisTransformationCapabilitiesSection
        capabilities={pageData.transformation.capabilities}
      />
    </>
  );
}
