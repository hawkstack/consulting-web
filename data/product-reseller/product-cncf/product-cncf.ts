import type { ProductCncfPageContent } from "@/app/types/product-reseller/product-cncf/product-cncf";

export const productCncfPageData: ProductCncfPageContent = {
  hero: {
    titleLines: [
      "Turn cloud native ambition",
      "into a production ready",
      "platform.",
    ],
    description:
      "HawkStack helps teams adopt CNCF technologies with Kubernetes first architecture, secure automation, observability, and hands-on platform engineering from strategy to steady-state operations.",
    button: {
      label: "Visit KubevirtStack",
      href: "/openshift/unified",
      ariaLabel: "Visit KubevirtStack platform page",
    },
    image: {
      src: "/images/products/cncf-hero-platform.webp",
      alt: "CNCF cloud native platform illustration",
    },
  },
};
