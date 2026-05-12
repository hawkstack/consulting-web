import {
  RedHatAICapabilitiesData,
  RedHatAICtaData,
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
