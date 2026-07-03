import HeroSection from "./HeroSection";
import CtaSection from "./CtaSection";
import type { ProductAwsPageContent } from "@/components/product-reseller/product-aws/types/product-aws";

type ProductAwsPageProps = {
  pageData: ProductAwsPageContent;
};

const ProductAwsPage = ({ pageData }: ProductAwsPageProps) => {
  return (
    <div>
      <HeroSection content={pageData.hero} />
      <CtaSection content={pageData.cta} />
    </div>
  );
};

export default ProductAwsPage;
