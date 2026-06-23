// RedHatAIOverviewSection data

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

export const redHatAIOverviewData: RedHatAIOverviewData = {
  tag: "PLATFORM OVERVIEW",
  heading: "AI infrastructure that works with your business, not against it.",
  description:
    "Red Hat AI brings together tools for model development, tuning, deployment, monitoring, and inference. HawkStack adds the architecture, implementation, migration, and managed support needed to make it work in your environment.",

  cards: [
    {
      id: 1,
      title: "Build with your data",
      description:
        "Use enterprise data safely to power generative AI, predictive AI, assistants, and knowledge-driven applications.",
    },
    {
      id: 2,
      title: "Deploy across hybrid cloud",
      description:
        "Run AI workloads across on-premise infrastructure, cloud platforms, Kubernetes, and edge environments.",
    },
    {
      id: 3,
      title: "Scale with governance",
      description:
        "Standardize AI operations with security, monitoring, lifecycle controls, and repeatable deployment patterns.",
    },
  ],
};

// RedHatAICapabilitiesSection data

export const redHatAICapabilitiesData: RedHatAICapabilitiesData = {
  cards: [
    {
      id: 1,
      title: "Any",
      description: "Model, framework, hardware, or deployment environment.",
    },
    {
      id: 2,
      title: "Hybrid",
      description: "Cloud, on-premise, and edge-ready AI delivery.",
    },
    {
      id: 3,
      title: "Secure",
      description:
        "Enterprise-grade governance, control, and lifecycle support.",
    },
  ],
};

// RedHatAICtaSection data

export const redHatAICtaData: RedHatAICtaData = {
  tag: "START YOUR AI JOURNEY",
  title: "Ready to build enterprise AI with Red Hat and HawkStack?",
  description:
    "Talk to our team about your AI use case, infrastructure, and deployment goals. We'll help you map the right solution.",
  buttons: [
    {
      label: "Schedule a consultation",
      href: "/contact",
      variant: "primary",
    },
    {
      label: "View products",
      href: "/products",
      variant: "secondary",
    },
  ],
};

// RedHatAIFoundationSection data

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

// RedHatAIProductionSection data

export const redHatAIProductionData: RedHatAIProductionSectionData = {
  tag: "USE CASES",
  title: "Turn AI ideas into production systems.",
  description:
    "From pilots to enterprise rollouts, HawkStack helps you identify the right use cases, architecture, and delivery roadmap.",
  cards: [
    {
      title: "Generative AI applications",
      description:
        "Launch copilots, assistants, content workflows, and knowledge search tools using your enterprise data.",
    },
    {
      title: "AI inference at scale",
      description:
        "Improve performance and reduce serving costs with optimized model inference patterns.",
    },
    {
      title: "Agentic automation",
      description:
        "Build intelligent workflows that connect AI models with business systems, APIs, and processes.",
    },
    {
      title: "Predictive intelligence",
      description:
        "Use data science and machine learning to forecast outcomes, detect risks, and improve decisions.",
    },
    {
      title: "Secure AI platforms",
      description:
        "Create controlled AI environments with governance, access control, monitoring, and compliance readiness.",
    },
    {
      title: "AI modernization",
      description:
        "Move experiments into repeatable, governed, production-ready AI operations.",
    },
  ],
};

// RedHatAIStrategySection data

export const redHatAIStrategyData: RedHatAIStrategySectionData = {
  tag: "HAWKSTACK APPROACH",

  heading: "From AI strategy to production delivery.",

  description:
    "We help you move from uncertainty to a working AI platform with a clear, structured delivery path.",

  cards: [
    {
      id: 1,
      title: "Assess",
      description:
        "Review your current infrastructure, data sources, AI goals, and security requirements.",
      icon: AssessIcon,
    },
    {
      id: 2,
      title: "Architect",
      description:
        "Design the right Red Hat AI architecture for your workloads, teams, and deployment model.",
      icon: ArchitectIcon,
    },
    {
      id: 3,
      title: "Implement",
      description:
        "Deploy the platform, configure integrations, build pipelines, and prepare production workloads.",
      icon: ImplementIcon,
    },
    {
      id: 4,
      title: "Optimize",
      description:
        "Improve performance, reduce operational cost, and mature your AI governance model.",
      icon: OptimizeIcon,
    },
  ],
};

// RedHatAIHeroSection data

export const redHatAIHeroData: RedHatAIHeroData = {
  heading: "Deliver enterprise AI with the",

  highlightedText: "freedom",

  description:
    "HawkStack helps your teams design, deploy, and operationalize Red Hat AI across hybrid cloud, on-premise, and edge environments without locking your data, models, or infrastructure into one path.",

  image: "/images/product-reseller/redhat/redhat-ai/hero-cube-image.webp",

  mobileImage:
    "/images/product-reseller/redhat/redhat-ai/mobile-hero-image.webp",

  imageAlt: "Red Hat AI Hero Cube",

  buttons: [
    {
      id: 1,
      label: "Book a consultation",
      link: "#",
      variant: "primary",
    },
    {
      id: 2,
      label: "Explore Red Hat AI",
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
      title: "Open source foundation",
      icon: CheckIcon,
    },
    {
      id: 3,
      title: "Enterprise-grade control",
      icon: CheckIcon,
    },
  ],
};
