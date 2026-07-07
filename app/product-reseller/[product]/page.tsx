import { notFound } from "next/navigation";
import ProductCncfPage from "@/components/product-reseller/product-cncf/components/product-cncf-page";
import ProductMirantisPage from "@/components/product-reseller/product-mirantis/componets/product-mirantis-page";
import ProductRedhatPage from "@/components/product-reseller/product-redhat/components/product-redhat-page";
import { productCncfPageData } from "@/components/product-reseller/product-cncf/data/product-cncf";
import { productMirantisPageData } from "@/components/product-reseller/product-mirantis/data/product-mirantis";
import { productRedhatPageData } from "@/components/product-reseller/product-redhat/data/product-redhat";
import ProductAwsPage from "@/components/product-reseller/product-aws/components/product-aws-page";
import { productAwsPageData } from "@/components/product-reseller/product-aws/data/product-aws";

const productPages = {
  cncf: productCncfPageData,
  mirantis: productMirantisPageData,
  redhat: productRedhatPageData,
  aws: productAwsPageData,
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

  if (product === "redhat") {
    return <ProductRedhatPage pageData={productRedhatPageData} />;
  }

  if (product === "cncf") {
    return <ProductCncfPage pageData={productCncfPageData} />;
  }

  if (product === "mirantis") {
    return <ProductMirantisPage pageData={productMirantisPageData} />;
  }
  if (product === "aws") {
    return <ProductAwsPage pageData={productAwsPageData} />;
  }

  return notFound();
}
