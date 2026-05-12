import {
  RedHatAICapabilitiesData,
  RedHatAIHeroData,
  RedHatAIOverviewData,
  RedHatAIStrategySectionData,
} from "@/app/types/product-reseller/product-redhat/redhat-ai/redhat-ai";
import ArchitectIcon from "@/components/icons/product-reseller/redhat-ai/ArchitectIcon";
import AssessIcon from "@/components/icons/product-reseller/redhat-ai/AssessIcon";
import CheckIcon from "@/components/icons/product-reseller/redhat-ai/CheckIcon";
import ImplementIcon from "@/components/icons/product-reseller/redhat-ai/ImplementIcon";
import OptimizeIcon from "@/components/icons/product-reseller/redhat-ai/OptimizeIcon";

export const redHatLinuxHeroData: RedHatAIHeroData = {
  heading: "Run enterprise workloads on the",
  highlightedText: "Linux",
  description:
    "HawkStack helps teams standardize, secure, and operate Red Hat Enterprise Linux across data center, cloud, and edge environments with a practical delivery roadmap.",
  image: "/images/product-reseller/redhat-enterprise-linux.webp",
  mobileImage: "/images/product-reseller/redhat-enterprise-linux.webp",
  imageAlt: "Red Hat Enterprise Linux platform graphic",
  buttons: [
    {
      id: 1,
      label: "Book a consultation",
      link: "/contact-us",
      variant: "primary",
    },
    {
      id: 2,
      label: "Explore Linux services",
      link: "#",
      variant: "secondary",
    },
  ],
  features: [
    {
      id: 1,
      title: "Hybrid cloud ready",
      icon: CheckIcon,
    },
    {
      id: 2,
      title: "Enterprise lifecycle support",
      icon: CheckIcon,
    },
    {
      id: 3,
      title: "Security-focused operations",
      icon: CheckIcon,
    },
  ],
};

export const redHatLinuxOverviewData: RedHatAIOverviewData = {
  tag: "PLATFORM OVERVIEW",
  heading:
    "A stable, secure operating system for modern enterprise IT.",
  description:
    "Red Hat Enterprise Linux provides a consistent foundation for running applications across physical servers, virtual machines, cloud environments, containers, and edge infrastructure. HawkStack helps you turn that foundation into a production-ready operating model.",
  cards: [
    {
      id: 1,
      title: "Standardize your infrastructure",
      description:
        "Create a consistent Linux environment across on-premise, cloud, and hybrid deployments.",
    },
    {
      id: 2,
      title: "Secure critical workloads",
      description:
        "Protect enterprise systems with built-in security features, compliance-ready controls, and trusted lifecycle support.",
    },
    {
      id: 3,
      title: "Automate at scale",
      description:
        "Reduce manual operations with repeatable provisioning, patching, monitoring, and configuration workflows.",
    },
  ],
};

export const redHatLinuxCapabilitiesData: RedHatAICapabilitiesData = {
  cards: [
    {
      id: 1,
      title: "Secure",
      description:
        "Built for regulated, business-critical, and production-grade workloads.",
    },
    {
      id: 2,
      title: "Consistent",
      description:
        "One Linux platform across data center, cloud, containers, and edge.",
    },
    {
      id: 3,
      title: "Scalable",
      description:
        "Designed to support enterprise applications, automation, AI, and modern infrastructure.",
    },
  ],
};

export const redHatLinuxStrategyData: RedHatAIStrategySectionData = {
  tag: "HAWKSTACK APPROACH",
  heading: "From Linux planning to production operations.",
  description:
    "We help you establish a secure, repeatable Red Hat Enterprise Linux operating model that scales with your infrastructure.",
  cards: [
    {
      id: 1,
      title: "Assess",
      description:
        "Review workloads, operating standards, support needs, and migration priorities.",
      icon: AssessIcon,
    },
    {
      id: 2,
      title: "Architect",
      description:
        "Design the target Linux platform, security baseline, and hybrid deployment model.",
      icon: ArchitectIcon,
    },
    {
      id: 3,
      title: "Implement",
      description:
        "Configure systems, automation, patching, and operational handoff for production use.",
      icon: ImplementIcon,
    },
    {
      id: 4,
      title: "Optimize",
      description:
        "Improve consistency, reduce manual work, and strengthen lifecycle governance.",
      icon: OptimizeIcon,
    },
  ],
};
