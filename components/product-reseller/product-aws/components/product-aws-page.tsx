import HeroSection from "./HeroSection";
import type { ProductAwsPageContent } from "@/components/product-reseller/product-aws/types/product-aws";

type ProductAwsPageProps = {
  pageData: ProductAwsPageContent;
};

const ProductAwsPage = ({ pageData }: ProductAwsPageProps) => {
  return (
    <div>
      <HeroSection content={pageData.hero} />
    </div>
  );
};

export default ProductAwsPage;
