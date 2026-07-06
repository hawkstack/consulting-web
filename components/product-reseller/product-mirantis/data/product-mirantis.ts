import type { ProductMirantisPageContent } from "@/components/product-reseller/product-mirantis/types/product-mirantis";

export const productMirantisPageData: ProductMirantisPageContent = {
  hero: {
    badge: "Mirantis Partner",
    title:
      "Simplify Enterprise Kubernetes Operations with Mirantis and Red Hat Expertise.",
    description:
      "HawkStack helps organizations design, deploy, and operate secure Kubernetes environments using Mirantis container technologies and enterprise Linux practices. From Kubernetes cluster deployment and container security to automation and engineering team enablement, we help businesses build reliable cloud-native platforms with confidence.",
    actions: [
      {
        label: "Explore Mirantis",
        href: "/contact-us",
        ariaLabel: "Explore Mirantis services with HawkStack",
        variant: "primary",
      },
      {
        label: "Schedule Demo",
        href: "/contact-us",
        ariaLabel: "Schedule a Mirantis platform demo",
        variant: "secondary",
      },
    ],
    platform: {
      badge: "Enterprise Kubernetes",
      title: "ZeroOps Platform Engineering",
      metrics: [
        {
          value: "99.99%",
          label: "Platform Availability",
        },
        {
          value: "24/7",
          label: "Enterprise Support",
        },
        {
          value: "Zero",
          label: "Vendor Lock-in",
        },
        {
          value: "100+",
          label: "Cloud Deployments",
        },
      ],
    },
    floatingCards: {
      supplyChain: {
        title: "Secure Supply Chain",
        description:
          "Protect every deployment with hardened containers, signed artifacts and secure software delivery pipelines built for enterprise scale.",
      },
      operations: {
        title: "Multi-Cluster Operations",
        description:
          "Operate Kubernetes across public cloud, private cloud and bare metal through one unified management experience.",
      },
    },
  },
};
