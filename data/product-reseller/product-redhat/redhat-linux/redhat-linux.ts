import {
  RedHatAICapabilitiesData,
  RedHatAIOverviewData,
} from "@/app/types/product-reseller/product-redhat/redhat-ai/redhat-ai";

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
