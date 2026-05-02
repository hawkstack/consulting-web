import type { ProductRedhatPageContent } from "@/app/types/product-reseller/product-redhat/product-redhat";

export const productRedhatPageData: ProductRedhatPageContent = {
  hero: {
    titleLines: [
      "Build enterprise platforms",
      "with trusted Red Hat",
      "solutions.",
    ],
    description:
      "HawkStack helps teams adopt Red Hat technologies across Linux, OpenShift, Ansible, and OpenStack with secure architecture, automation, implementation, and steady-state platform support.",
    button: {
      label: "Explore Red Hat",
      href: "/get-started",
      ariaLabel: "Explore Red Hat solutions with HawkStack",
    },
    image: {
      src: "/images/products/RedHat-OpenShift.webp",
      alt: "Red Hat OpenShift enterprise platform illustration",
    },
  },
};
