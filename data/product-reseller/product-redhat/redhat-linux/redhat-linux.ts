import {
  RedHatAICapabilitiesData,
  RedHatAICtaData,
  RedHatAIFoundationSectionData,
  RedHatAIHeroData,
  RedHatAIOverviewData,
  RedHatAIProductionSectionData,
  RedHatAIStrategySectionData,
} from "@/app/types/product-reseller/product-redhat/redhat-ai/redhat-ai";
import ArchitectIcon from "@/components/icons/product-reseller/redhat-ai/ArchitectIcon";
import AssessIcon from "@/components/icons/product-reseller/redhat-ai/AssessIcon";
import CheckIcon from "@/components/icons/product-reseller/redhat-ai/CheckIcon";

import ImplementIcon from "@/components/icons/product-reseller/redhat-ai/ImplementIcon";
import OptimizeIcon from "@/components/icons/product-reseller/redhat-ai/OptimizeIcon";

export const redHatLinuxHeroData: RedHatAIHeroData = {
  heading: "The enterprise Linux foundation for ",
  highlightedText: "hybrid cloud",
  description:
    "HawkStack helps organizations deploy, manage, and optimize Red Hat Enterprise Linux across data centers, public cloud, edge, and mission-critical enterprise environments.",
  image: "/images/product-reseller/redhat/redhat-linux/container.webp",
  mobileImage: "/images/product-reseller/redhat/redhat-linux/container.webp",
  imageAlt: "Red Hat Enterprise Linux foundation diagram",
  buttons: [
    {
      id: 1,
      label: "Book a consultation",
      link: "/contact-us",
      variant: "primary",
    },
    {
      id: 2,
      label: "Explore capabilities",
      link: "#redhat-linux-capabilities",
      variant: "secondary",
    },
  ],
  features: [
    {
      id: 1,
      title: "Secure by design",
      icon: CheckIcon,
    },
    {
      id: 2,
      title: "Cloud-ready",
      icon: CheckIcon,
    },
    {
      id: 3,
      title: "Built for critical workloads",
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
  heading: "Deploy RHEL with clarity, control, and confidence.",
  description:
    "We help you plan, migrate, implement, and optimize RHEL environments with a structured delivery model.",
  cards: [
    {
      id: 1,
      title: "Assess",
      description:
        "Review your current OS estate, workloads, security posture, and migration priorities.",
      icon: AssessIcon,
    },
    {
      id: 2,
      title: "Design",
      description:
        "Create the right RHEL architecture across cloud, on-premise, containers, and edge environments.",
      icon: ArchitectIcon,
    },
    {
      id: 3,
      title: "Deploy",
      description:
        "Implement RHEL, configure policies, migrate workloads, and standardize operating procedures.",
      icon: ImplementIcon,
    },
    {
      id: 4,
      title: "Optimize",
      description:
        "Improve security, performance, patching, automation, and long-term platform governance.",
      icon: OptimizeIcon,
    },
  ],
};

// RedHatAICtaSection data

export const redHatLinuxCtaData: RedHatAICtaData = {
  tag: "MODERNIZE YOUR LINUX PLATFORM",
  title: "Ready to build on Red Hat Enterprise Linux with HawkStack?",
  description:
    "Talk to our team about your infrastructure goals, migration roadmap, and enterprise Linux requirements. We'll help you design the right path forward.",
  buttons: [
    {
      label: "Schedule a consultation",
      href: "/contact-us",
      variant: "primary",
    },
    {
      label: "View capabilities",
      href: "#redhat-linux-capabilities",
      variant: "secondary",
    },
  ],
};

// RedHatAIProductionSection data

export const redHatLinuxProductionData: RedHatAIProductionSectionData = {
  tag: "USE CASES",
  title: "Power the workloads your business depends on.",
  description:
    "HawkStack helps you use RHEL as the foundation for enterprise applications, modernization programs, and cloud-ready infrastructure.",
  cards: [
    {
      title: "Enterprise application hosting",
      description:
        "Run databases, middleware, business apps, and backend services on a trusted enterprise Linux platform.",
    },
    {
      title: "Cloud migration",
      description:
        "Create a consistent operating environment as you move workloads to AWS, Azure, Google Cloud, or private cloud.",
    },
    {
      title: "DevOps and automation",
      description:
        "Standardize provisioning, configuration, patching, and deployment workflows across IT teams.",
    },
    {
      title: "Containerized workloads",
      description:
        "Support modern application delivery with containers, Kubernetes-aligned tooling, and OpenShift-ready foundations.",
    },
    {
      title: "Edge infrastructure",
      description:
        "Extend reliable Linux operations to distributed locations, retail sites, factories, and remote environments.",
    },
    {
      title: "AI and data workloads",
      description:
        "Prepare secure, scalable infrastructure for analytics, machine learning, and enterprise AI platforms.",
    },
  ],
};

export const redHatAIFoundationData: RedHatAIFoundationSectionData = {
  tag: "RED HAT AI PORTFOLIO",
  title: "Choose the right foundation for every AI workload.",
  description:
    "HawkStack helps you evaluate, implement, and optimize the Red Hat AI products that match your use case, infrastructure, and growth roadmap.",
  cards: [
    {
      title: "Red Hat AI Enterprise",
      description:
        "Build, develop, and deploy AI-powered applications across hybrid cloud environments.",
      ctaText: "Plan implementation →",
      href: "/",
    },
    {
      title: "Red Hat OpenShift AI",
      description:
        "Operationalize models and applications at scale using Kubernetes-based MLOps capabilities.",
      ctaText: "Modernize MLOps →",
      href: "/",
    },
    {
      title: "Red Hat AI Inference Server",
      description:
        "Optimize model serving with fast, scalable, cost-efficient inference for production AI.",
      ctaText: "Improve inference →",
      href: "/",
    },
    {
      title: "Red Hat Enterprise Linux AI",
      description:
        "Develop, test, and run generative AI models on a trusted enterprise Linux foundation.",
      ctaText: "Deploy securely →",
      href: "/",
    },
  ],
};
