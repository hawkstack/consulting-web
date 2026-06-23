import { notFound } from "next/navigation";
import ProductCncfPage from "@/components/product-reseller/product-cncf/product-cncf-page";
import ProductRedhatPage from "@/components/product-reseller/product-redhat/product-redhat-page";
import { productCncfPageData } from "@/data/product-reseller/product-cncf/product-cncf";
import { productRedhatPageData } from "@/data/product-reseller/product-redhat/product-redhat";

const productPages = {
  cncf: productCncfPageData,
  redhat: productRedhatPageData,
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

  return notFound();
}
