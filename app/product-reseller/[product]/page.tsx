import { notFound } from "next/navigation";
import ProductCncfPage from "@/components/product-reseller/product-cncf/components/product-cncf-page";
import ProductGcpPage from "@/components/product-reseller/product-gcp/components/product-gcp-page";
import ProductMirantisPage from "@/components/product-reseller/product-mirantis/componets/product-mirantis-page";
import ProductRedhatPage from "@/components/product-reseller/product-redhat/components/product-redhat-page";
import { productCncfPageData } from "@/components/product-reseller/product-cncf/data/product-cncf";
import { productGcpPageData } from "@/components/product-reseller/product-gcp/data/product-gcp";
import { productMirantisPageData } from "@/components/product-reseller/product-mirantis/data/product-mirantis";
import { productRedhatPageData } from "@/components/product-reseller/product-redhat/data/product-redhat";
import ProductAwsPage from "@/components/product-reseller/product-aws/components/product-aws-page";
import { productAwsPageData } from "@/components/product-reseller/product-aws/data/product-aws";
import { PRODUCT_TYPES } from "@/constants/productReseller";
import SUSEHero from "@/components/product-reseller/product-suse/components/SUSEHero";

import SUSESolutions from "@/components/product-reseller/product-suse/components/SUSESolutions";
import SUSEWhyChoose from "@/components/product-reseller/product-suse/components/SUSEWhyChoose";
import BuildAroundYourPriorities from "@/components/product-reseller/product-suse/components/BuildAroundYourPriorities";
import OurDeliveryApproach from "@/components/product-reseller/product-suse/components/OurDeliveryApproach";

import SUSEServices from "@/components/product-reseller/product-suse/components/SUSEServices";
import SUSEContactCTA from "@/components/product-reseller/product-suse/components/SUSEContactCTA";
import DellHeroSection from "@/components/product-reseller/product-dell/components/DellHeroSection";
import DellProductPortfolio from "@/components/product-reseller/product-dell/components/DellProductPortfolio";
import DellIntegrationSection from "@/components/product-reseller/product-dell/components/DellIntegrationSection";
import DellWhyHawkstackSection from "@/components/product-reseller/product-dell/components/DellWhyHawkstackSection";
import DellProcessSection from "@/components/product-reseller/product-dell/components/DellProcessSection";
import DellCtaSection from "@/components/product-reseller/product-dell/components/DellCtaSection";

const productPages = {
  [PRODUCT_TYPES.AWS]: productAwsPageData,
  [PRODUCT_TYPES.CNCF]: productCncfPageData,
  [PRODUCT_TYPES.GCP]: productGcpPageData,
  [PRODUCT_TYPES.MIRANTIS]: productMirantisPageData,
  [PRODUCT_TYPES.REDHAT]: productRedhatPageData,
};

type ProductSlug = keyof typeof productPages;

type ProductPageProps = {
  params: Promise<{
    product: string;
  }>;
};

export function generateStaticParams() {
  return [
    ...Object.keys(productPages),
    PRODUCT_TYPES.SUSE,
    PRODUCT_TYPES.DELL,
  ].map((product) => ({
    product,
  }));
}

export default async function ProductResellerPage({
  params,
}: ProductPageProps) {
  const { product } = await params;
  if (product === PRODUCT_TYPES.SUSE) {
    return (
      <>
        <SUSEHero />
        <SUSESolutions />
        <SUSEWhyChoose />
        <SUSEServices />
        <BuildAroundYourPriorities />
        <OurDeliveryApproach />
        <SUSEContactCTA />
      </>
    );
  }
  if (product === PRODUCT_TYPES.DELL) {
    return (
      <>
        <DellHeroSection />
        <DellProductPortfolio />
        <DellIntegrationSection />
        <DellWhyHawkstackSection />
        <DellProcessSection />
        <DellCtaSection />
      </>
    );
  }
  const pageData = productPages[product as ProductSlug];

  if (!pageData) {
    notFound();
  }

  if (product === PRODUCT_TYPES.REDHAT) {
    return <ProductRedhatPage pageData={productRedhatPageData} />;
  }

  if (product === PRODUCT_TYPES.CNCF) {
    return <ProductCncfPage pageData={productCncfPageData} />;
  }

  if (product === PRODUCT_TYPES.MIRANTIS) {
    return <ProductMirantisPage pageData={productMirantisPageData} />;
  }

  if (product === PRODUCT_TYPES.GCP) {
    return <ProductGcpPage pageData={productGcpPageData} />;
  }

  if (product === PRODUCT_TYPES.AWS) {
    return <ProductAwsPage pageData={productAwsPageData} />;
  }

  return notFound();
}
