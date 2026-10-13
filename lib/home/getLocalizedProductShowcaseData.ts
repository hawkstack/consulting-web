import { productShowcaseData } from "@/data/home/productShowcase";
import type { ProductShowcaseCopy, ProductShowcaseData } from "@/types/home/productShowcase";

export function getLocalizedProductShowcaseData(copy: Partial<ProductShowcaseCopy>): ProductShowcaseData {
  return {
    ...productShowcaseData,
    eyebrow: copy.eyebrow ?? productShowcaseData.eyebrow,
    title: copy.title ?? productShowcaseData.title,
    description: copy.description ?? productShowcaseData.description,
    product: {
      ...productShowcaseData.product,
      category: copy.product?.category ?? productShowcaseData.product.category,
      status: copy.product?.status ?? productShowcaseData.product.status,
      summary: copy.product?.summary ?? productShowcaseData.product.summary,
      description: copy.product?.description ?? productShowcaseData.product.description,
      features: copy.product?.features ?? productShowcaseData.product.features,
      ctaLabel: copy.product?.ctaLabel ?? productShowcaseData.product.ctaLabel,
      imageAlt: copy.product?.imageAlt ?? productShowcaseData.product.imageAlt,
    },
  };
}
