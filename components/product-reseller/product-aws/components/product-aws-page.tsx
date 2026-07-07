import HeroSection from "./HeroSection";
import CtaSection from "./CtaSection";
import CoreInfrastructureSolutionsSection from "./CoreInfrastructureSolutionsSection";
import EnterpriseCapabilitiesSection from "./EnterpriseCapabilitiesSection";
import ModernizationEngineSection from "./ModernizationEngineSection";
import type { ProductAwsPageContent } from "@/components/product-reseller/product-aws/types/product-aws";

type ProductAwsPageProps = {
  pageData: ProductAwsPageContent;
};

const ProductAwsPage = ({ pageData }: ProductAwsPageProps) => {
  return (
    <div>
      <HeroSection content={pageData.hero} />
      <CoreInfrastructureSolutionsSection content={pageData.infrastructure} />
      <ModernizationEngineSection content={pageData.modernizationEngine} />
      <EnterpriseCapabilitiesSection
        content={pageData.enterpriseCapabilities}
      />
      <CtaSection content={pageData.cta} />
    </div>
  );
};

export default ProductAwsPage;
