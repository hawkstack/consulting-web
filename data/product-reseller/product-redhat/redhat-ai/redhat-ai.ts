// RedHatAIOverviewSection data

import { RedHatAIOverviewData } from "@/app/types/product-reseller/product-redhat/redhat-ai/redhat-ai";

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
