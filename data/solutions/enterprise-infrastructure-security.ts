import type { SolutionPageData } from "./types";

export const enterpriseInfrastructureSecurityData = {
  id: "enterprise-infrastructure-security",
  slug: "enterprise-infrastructure-security",

  // 1. Hero
  hero: {
    eyebrow: "ENTERPRISE INFRASTRUCTURE & SECURITY",
    heading: "Build integrated infrastructure.",
    highlightedHeading: "Strengthen security.",
    description:
      "Connect enterprise hardware, platforms and security to simplify IT operations and protect business-critical workloads.",
    ctaLabel: "Discuss your requirements",
    ctaHref: "/contact-us",
  },

  // 2. Expertise and capabilities
  expertise: {
    heading: "End-to-end expertise for your enterprise.",
    description:
      "From infrastructure and platforms to networking and security, we help you design, deploy and operate an integrated environment that supports your business goals.",
    cards: [
      {
        id: "skills-assessment-learning-plans",
        title: "Servers & Infrastructure",
        description:
          "Deploy enterprise servers, storage and infrastructure aligned with workload requirements.",
        icon: "people",
      },
      {
        id: "enterprise-infrastructure-skills",
        title: "Enterprise Linux & Platforms",
        description:
          "Implement and maintain enterprise operating systems and supporting platform services.",
        icon: "server",
      },
      {
        id: "kubernetes-cloud-platforms",
        title: "Kubernetes & Virtualization",
        description:
          "Integrate container and virtualization platforms with compute, storage and networking.",
        icon: "cloud",
      },
      {
        id: "ai-automation-enablement",
        title: "Network Devices & Connectivity",
        description:
          "Configure routers, switches and resilient connectivity with network segmentation.",
        icon: "chip",
      },
      {
        id: "security-operational-practices",
        title: "Firewalls & Secure Access",
        description:
          "Implement enterprise firewalls, secure access and network protection.",
        icon: "shield",
      },
      {
        id: "learning-subscriptions-labs",
        title: "Identity & Platform Hardening",
        description:
          "Integrate identity, access controls, secrets management and platform hardening.",
        icon: "book",
      },
      {
        id: "certification-readiness",
        title: "Automation & Lifecycle Management",
        description:
          "Standardize configuration, patching and infrastructure maintenance.",
        icon: "certificate",
      },
      {
        id: "project-based-knowledge-transfer",
        title: "Monitoring & Operational Resilience",
        description:
          "Improve visibility, incident response and recovery readiness.",
        icon: "people",
      },
    ],
  },

  // 3. Delivery approach
  deliveryApproach: {
    heading: "Our delivery approach.",
    description:
      "A structured approach to design, implement and operate a secure and resilient environment.",
    steps: [
      {
        number: "1",
        title: "Assess & Design",
        description:
          "Understand your requirements and design the right architecture and security model.",
      },
      {
        number: "2",
        title: "Deploy & Integrate",
        description:
          "Implement infrastructure, platforms and security components and integrate with your environment.",
      },
      {
        number: "3",
        title: "Secure & Validate",
        description:
          "Apply security controls, configure and test for operational readiness.",
      },
      {
        number: "4",
        title: "Operate & Improve",
        description:
          "Provide ongoing management, monitoring and optimization to support evolving needs.",
      },
    ],
  },

  // 4. Business-led enablement
  businessEnablement: {
    eyebrow: "BUSINESS-LED OUTCOMES",
    heading: "Built around business priorities.",
    description:
      "A more secure, efficient and resilient IT environment that helps your organization move forward.",
    takeaway: "Technology aligned to measurable outcomes",
    cards: [
      {
        number: "01",
        title: "Operational resilience",
        description:
          "Improve visibility and preparedness to keep your business running and ready for what’s next.",
        accent: "blue",
      },
      {
        number: "02",
        title: "Secure platforms & networks",
        description: "Strengthen security across your environment to protect business-critical workloads.",
        accent: "cyan",
      },
      {
        number: "03",
        title: "Simplified infrastructure management",
        description:
          "Bring infrastructure, platforms and security together to reduce complexity and streamline operations.",
        accent: "green",
      },
    ],
  },

  // Page metadata remains tied to the existing translation messages.
  title: {
    namespace: "Home",
    key: "content.cloudServicesSectionData.services.2.title",
  },
  description: {
    namespace: "Home",
    key: "content.cloudServicesSectionData.services.2.description",
  },
  sections: [],
  seo: {
    title: {
      namespace: "Home",
      key: "content.cloudServicesSectionData.services.2.title",
    },
    description: {
      namespace: "Home",
      key: "content.cloudServicesSectionData.services.2.description",
    },
  },
} satisfies SolutionPageData;

export default enterpriseInfrastructureSecurityData;

