import type { ProductGcpPageContent } from "@/components/product-reseller/product-gcp/types/product-gcp";
// import ProductGcpCtaSection from "./cta-section";
import ProductGcpHeroSection from "./hero-section";
import ProductGcpSolutionsSection from "./solutions-section";
// import ProductGcpBenefitsSection from "./benefits-section";

type ProductGcpPageProps = {
  pageData: ProductGcpPageContent;
};

export default function ProductGcpPage({ pageData }: ProductGcpPageProps) {
  return (
    <>
      <ProductGcpHeroSection content={pageData.hero} />
      <ProductGcpSolutionsSection content={pageData.solutions} />
      {/* <ProductGcpBenefitsSection content={pageData.benefits} /> */}
      {/* <ProductGcpCtaSection content={pageData.cta} /> */}
    </>
  );
}
