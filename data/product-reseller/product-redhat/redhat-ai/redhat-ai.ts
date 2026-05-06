// RedHatAIOverviewSection data

import {
  RedHatAICapabilitiesData,
  RedHatAICtaData,
  RedHatAIOverviewData,
} from "@/app/types/product-reseller/product-redhat/redhat-ai/redhat-ai";

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
