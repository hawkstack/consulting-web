// RedHatAIOverviewSection data

import {
  RedHatAICapabilitiesData,
  RedHatAICtaData,
  RedHatAIFoundationSectionData,
  RedHatAIOverviewData,
  RedHatAIProductionSectionData,
  RedHatAIStrategySectionData,
} from "@/app/types/product-reseller/product-redhat/redhat-ai/redhat-ai";
import { RedHatAnsibleHeroData } from "@/app/types/product-reseller/product-redhat/redhat-ansible/redhat-ansible";
import ArchitectIcon from "@/components/icons/product-reseller/redhat-ai/ArchitectIcon";
import AssessIcon from "@/components/icons/product-reseller/redhat-ai/AssessIcon";
import ImplementIcon from "@/components/icons/product-reseller/redhat-ai/ImplementIcon";
import OptimizeIcon from "@/components/icons/product-reseller/redhat-ai/OptimizeIcon";
import CheckIcon from "@/components/icons/product-reseller/redhat-ai/CheckIcon";

// RedHatOpenShiftHeroSection data

export const redHatOpenShiftHeroData: RedHatAnsibleHeroData = {
  badge: "Red Hat OpenShift by HawkStack",

  heading: {
    title: "Build, modernize, and deploy apps at",
    highlight: "enterprise scale.",
  },

  description:
    "HawkStack helps organizations adopt Red Hat OpenShift as atrusted Kubernetes application platform for cloud-nativedevelopment, modernization, AI workloads, virtualization, and hybrid cloud operations.",

  primaryButtonText: "Book a consultation",

  secondaryButtonText: "Explore OpenShift",

  features: [
    {
      id: 1,
      text: "Kubernetes at the core",
      icon: CheckIcon,
    },
    {
      id: 2,
      text: "Hybrid cloud ready",
      icon: CheckIcon,
    },
    {
      id: 3,
      text: "Built for modern apps",
      icon: CheckIcon,
    },
  ],

  statusList: [
    {
      id: 1,
      title: "Code committed",
      status: "READY",
    },
    {
      id: 2,
      title: "Container image built",
      status: "PASSED",
    },
    {
      id: 3,
      title: "Security policy checked",
      status: "SECURE",
    },
    {
      id: 4,
      title: "App deployed to cluster",
      status: "LIVE",
    },
  ],

  capabilityCards: [
    {
      id: 1,
      title: "CI/CD",
      subtitle: "Automated delivery",
    },
    {
      id: 2,
      title: "GitOps",
      subtitle: "Declarative control",
    },
    {
      id: 3,
      title: "AI/ML",
      subtitle: "Modern workloads",
    },
    {
      id: 4,
      title: "VMs",
      subtitle: "Virtualization ready",
    },
  ],
};

// RedHatOpenShiftOverview data

export const redHatOpenShiftOverviewData: RedHatAIOverviewData = {
  tag: "PLATFORM OVERVIEW",
  heading: "A unified application platform for cloud native innovation.",
  description:
    "Red Hat OpenShift helps teams develop, modernize, deploy, and operate applications on a consistent Kubernetes-based platform. HawkStack adds implementation expertise, platform engineering, migration planning, security configuration, and managed support.",

  cards: [
    {
      id: 1,
      title: "Accelerate application delivery",
      description:
        "Give developers self-service tools, automated pipelines, and standardized environments for faster releases.",
    },
    {
      id: 2,
      title: "Modernize existing workloads",
      description:
        "Move legacy applications, containers, and virtual machines onto a flexible platform built for hybrid cloud.",
    },
    {
      id: 3,
      title: "Operate consistently anywhere",
      description:
        "Run workloads across self-managed infrastructure, public cloud services, private cloud, and edge environments.",
    },
  ],
};

// RedHatOpenShiftFoundationSection data

export const redHatOpenShiftFoundationData: RedHatAIFoundationSectionData = {
  tag: "Core capabilities",
  title: "One platform for apps, AI, containers, and virtual machines.",
  description:
    "HawkStack helps you use OpenShift to standardize modern application delivery while supporting the workloads your business already depends on.",
  cards: [
    {
      title: "Cloud-native applications",
      description:
        "Build and run microservices, APIs, web apps, and distributed systems using Kubernetes- native workflows.",
      ctaText: "Modernize apps →",
      href: "/",
    },
    {
      title: "Managed or self- managed",
      description:
        "Choose managed cloud services or self-managed editions depending on your control, compliance, and infrastructure needs.",
      ctaText: "Choose your model →",
      href: "/",
    },
    {
      title: "AI and ML workloads",
      description:
        "Support predictive and generative AI workflows with scalable infrastructure, model operations, and integrated platform services.",
      ctaText: "Scale AI workloads →",
      href: "/",
    },
    {
      title: "Virtualization",
      description:
        "Migrate and manage virtual machines alongside containers on a consistent hybrid cloud application platform.",
      ctaText: "Plan VM migration →",
      href: "/",
    },
  ],
};

// RedHatOpenShiftCapabilitiesSection data

export const redHatOpenShiftCapabilitiesData: RedHatAICapabilitiesData = {
  cards: [
    {
      id: 1,
      title: "Build",
      description:
        "Enable developers with self-service tools, templates, pipelines, and cloud-native workflows.",
    },
    {
      id: 2,
      title: "Deploy",
      description:
        "Run applications consistently across cloud, on-premise, managed services, and edge environments.",
    },
    {
      id: 3,
      title: "Operate",
      description:
        "Centralize management, security, observability, automation, and platform governance.",
    },
  ],
};

// RedHatOpenShiftProductionSection data

export const redHatOpenShiftProductionData: RedHatAIProductionSectionData = {
  tag: "USE CASES",
  title: "Support every stage of your application modernization journey.",
  description:
    "From CI/CD and GitOps to AI, edge, and virtualization, HawkStack helps you design OpenShift around real business workloads.",
  cards: [
    {
      title: "CI/CD automation",
      description:
        "Standardize build, test, security validation, and deployment workflows for faster software delivery.",
    },
    {
      title: "Application modernization",
      description:
        "Refactor, replatform, and containerize applications while reducing operational complexity.",
    },
    {
      title: "GitOps operations",
      description:
        "Use declarative configuration and version- controlled operations to manage applications and clusters.",
    },
    {
      title: "AI/ML platforms",
      description:
        "Deploy scalable infrastructure for model training, inference, data pipelines, and AI- powered applications.",
    },
    {
      title: "Virtual machine migration",
      description:
        "Move VM workloads to OpenShift while gaining a path toward container and cloud- native modernization.",
    },
    {
      title: "Edge applications",
      description:
        "Deploy and manage applications closer to users, devices, branches, factories, and distributed locations.",
    },
  ],
};

// RedHatOpenShiftStrategySection data

export const redHatOpenShiftStrategyData: RedHatAIStrategySectionData = {
  tag: "HAWKSTACK APPROACH",

  heading: "Design, deploy, and operate OpenShift with confidence.",

  description:
    "We help your teams move from Kubernetes complexity to a reliable application platform operating model.",

  cards: [
    {
      id: 1,
      title: "Assess",
      description:
        "Review applications, infrastructure, team workflows, security needs, and modernization priorities.",
      icon: AssessIcon,
    },
    {
      id: 2,
      title: "Architect",
      description:
        "Design the right OpenShift edition, cluster topology, networking, security, and deployment model.",
      icon: ArchitectIcon,
    },
    {
      id: 3,
      title: "Implement",
      description:
        "Deploy OpenShift, configure pipelines, integrate tools, migrate workloads, and onboard teams.",
      icon: ImplementIcon,
    },
    {
      id: 4,
      title: "Optimize",
      description:
        "Improve scalability, security, observability, cost, governance, and platform adoption over time.",
      icon: OptimizeIcon,
    },
  ],
};

// RedHatOpenShiftCtaSection data

export const redHatOpenShiftCtaData: RedHatAICtaData = {
  tag: "Modernize your application platform",
  title: "Ready to build on Red Hat OpenShift with HawkStack?",
  description:
    "Talk to our team about your Kubernetes strategy, application modernization roadmap, cloud requirements, and OpenShift deployment goals.",
  buttons: [
    {
      label: "Schedule a consultation",
      href: "/",
      variant: "primary",
    },
    {
      label: "View capabilities",
      href: "/",
      variant: "secondary",
    },
  ],
};
