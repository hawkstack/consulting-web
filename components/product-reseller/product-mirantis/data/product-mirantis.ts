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
  solutions: {
    eyebrow: "Expert Implementation",
    title: "Enterprise Kubernetes Solutions",
    cards: [
      {
        title: "Production Kubernetes with Mirantis",
        description:
          "Deploy and manage enterprise clusters with Mirantis while following proven Linux and container practices.",
        icon: "network",
      },
      {
        title: "Secure Container Supply Chains",
        description:
          "Build secure delivery workflows by implementing image management, vulnerability controls, and production pipelines.",
        icon: "shield",
      },
      {
        title: "Kubernetes Automation",
        description:
          "Reduce operational complexity by automating cluster management and application deployments using DevOps frameworks.",
        icon: "automation",
      },
      {
        title: "Hybrid & Multi-Cluster",
        description:
          "Manage environments across data centers, private cloud, and public platforms with consistent operational processes.",
        icon: "hybrid",
      },
    ],
  },
  transformation: {
    title: "One Partner. Complete Kubernetes Transformation.",
    description:
      "HawkStack helps enterprises move from complex infrastructure management to modern container platforms. Combining Mirantis Kubernetes capabilities with Red Hat Linux expertise, automation knowledge, and hands-on training, we help teams build, operate, and scale secure cloud-native environments.",
    items: [
      {
        id: 1,
        text: "Modernize traditional applications by migrating workloads into enterprise Kubernetes platforms",
      },
      {
        id: 2,
        text: "Improve operational efficiency through automated Kubernetes deployment and management practices",
      },
      {
        id: 3,
        text: "Strengthen container security from image creation to production runtime",
      },
      {
        id: 4,
        text: "Enable developers with reliable Kubernetes workflows and cloud-native development practices",
      },
      {
        id: 5,
        text: "Train engineering teams on Linux, containers, Kubernetes, and automation technologies",
      },
    ],
    capabilities: [
      {
        title: "Readiness Assessment",
        description:
          "Evaluate existing environments, identify migration challenges, security gaps, and skills requirements before Kubernetes adoption.",
        icon: "assessment",
      },
      {
        title: "Cloud Integration",
        description:
          "Connect Kubernetes workloads across private infrastructure and cloud environments using consistent operational practices.",
        icon: "integration",
      },
      {
        title: "Skills Enablement",
        description:
          "Train teams on container management, Linux administration, Kubernetes concepts, automation, and production troubleshooting.",
        icon: "enablement",
      },
    ],
  },
  cta: {
    title: "Ready to Build and Operate Enterprise Kubernetes with Confidence?",
    description:
      "Partner with HawkStack to plan, deploy, secure, and scale Mirantis-powered container platforms for production teams.",
    action: {
      label: "Talk to an Expert",
      href: "/contact-us",
      ariaLabel: "Talk to HawkStack about Mirantis Kubernetes services",
    },
  },
};
