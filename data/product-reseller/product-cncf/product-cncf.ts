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
  onePartner: {
    cards: [
      {
        title: "Kubernetes Foundation",
        description:
          "Design, Deploy & scale production Kubernetes environments aligned with cloud native best practices.",
        tag: "K8s",
        tagClassName: "bg-[#0811A1]/20 text-[#99A8FF]",
      },
      {
        title: "Security by Default",
        description:
          "Harden clusters, workloads, access, networking, and platform policies from day one.",
        tag: "Zero trust",
        tagClassName: "bg-[#142F3A]/20 text-[#25D4AA]",
      },
      {
        title: "Observability Stack",
        description:
          "Build actionable visibility across metrics, logs, traces, alerts and services health.",
        tag: "Metrics + Traces",
        tagClassName: "bg-[#6B7D05]/20 text-[#EEC830]",
      },
      {
        title: "Cloud Native Networking",
        description:
          "Modern ingress, service discovery, traffic management and workload connectivity patterns.",
        tag: "Ingress",
        tagClassName: "bg-[#673402]/20 text-[#F56F2A]",
      },
    ],
    eyebrow: "One partner.",
    highlightedTitle: "Full Cloud Native journey.",
    description:
      "From assessment and architecture to implementation, enablement, and operations - HawkStack turns CNCF tooling into measurable impact.",
    points: [
      "Move from legacy infrastructure to cloud native platforms",
      "Run containers, microservices and virtualized workloads together",
      "Adopt CNCF ecosystem tools with enterprise grade implementation",
      "Accelerate DevOps, automation, CI/CD, and platform engineering",
    ],
  },
};
