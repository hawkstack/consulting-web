import { notFound } from "next/navigation";
import ProductCncfPage from "@/components/product-reseller/product-cncf/components/product-cncf-page";
import ProductMirantisPage from "@/components/product-reseller/product-mirantis/componets/product-mirantis-page";
import ProductRedhatPage from "@/components/product-reseller/product-redhat/components/product-redhat-page";
import { productCncfPageData } from "@/components/product-reseller/product-cncf/data/product-cncf";
import { productMirantisPageData } from "@/components/product-reseller/product-mirantis/data/product-mirantis";
import { productRedhatPageData } from "@/components/product-reseller/product-redhat/data/product-redhat";
import ProductAwsPage from "@/components/product-reseller/product-aws/components/product-aws-page";
import { productAwsPageData } from "@/components/product-reseller/product-aws/data/product-aws";
import { PRODUCT_TYPES } from "@/constants/productReseller";

const PRODUCT_TYPES = {
  AWS: "aws",
  CNCF: "cncf",
  MIRANTIS: "mirantis",
  REDHAT: "redhat",
} as const;

const productPages = {
  [PRODUCT_TYPES.AWS]: productAwsPageData,
  [PRODUCT_TYPES.CNCF]: productCncfPageData,
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
  return Object.keys(productPages).map((product) => ({ product }));
}

export default async function ProductResellerPage({
  params,
}: ProductPageProps) {
  const { product } = await params;
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

  if (product === PRODUCT_TYPES.AWS) {
    return <ProductAwsPage pageData={productAwsPageData} />;
  }

  return notFound();
}
