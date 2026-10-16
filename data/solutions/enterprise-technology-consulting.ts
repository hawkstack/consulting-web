import type { SolutionPageData } from "./types";

export const enterpriseTechnologyConsultingData = {
  id: "enterprise-technology-consulting",
  slug: "enterprise-technology-consulting",

  // 1. Hero
  hero: {
    eyebrow: "ENTERPRISE TECHNOLOGY CONSULTING",
    heading: "Design. Integrate.",
    highlightedHeading: "Operate with confidence.",
    description:
      "Align enterprise architecture, hardware and software integration, product implementation and operations support with your business priorities.",
    ctaLabel: "Discuss your requirements",
    ctaHref: "/contact-us",
  },

  // 2. Expertise and capabilities
  expertise: {
    heading: "End-to-end expertise for your enterprise.",
    description:
      "From strategy to implementation and support, we deliver complete enterprise technology solutions.",
    cards: [
      {
        id: "skills-assessment-learning-plans",
        title: "Technology Assessment & Roadmaps",
        description:
          "Identify infrastructure gaps and define practical implementation priorities.",
        icon: "people",
      },
      {
        id: "enterprise-infrastructure-skills",
        title: "Enterprise Architecture & Design",
        description:
          "Develop solution architectures and deployment plans around business needs.",
        icon: "server",
      },
      {
        id: "kubernetes-cloud-platforms",
        title: "Hardware Implementation",
        description:
          "Deploy servers, routers, switches and firewall appliances.",
        icon: "cloud",
      },
      {
        id: "ai-automation-enablement",
        title: "Enterprise Platform Implementation",
        description:
          "Implement enterprise Linux, Kubernetes, virtualisation and automation platforms.",
        icon: "chip",
      },
      {
        id: "security-operational-practices",
        title: "Hardware & Software Integration",
        description:
          "Connect enterprise products, identity, storage, networking and management services.",
        icon: "shield",
      },
      {
        id: "learning-subscriptions-labs",
        title: "PoC & Solution Validation",
        description:
          "Evaluate solution fit through scoped proofs of concept and acceptance checks.",
        icon: "book",
      },
      {
        id: "certification-readiness",
        title: "Operations Support & Optimization",
        description:
          "Support troubleshooting, performance tuning and lifecycle improvements.",
        icon: "certificate",
      },
      {
        id: "project-based-knowledge-transfer",
        title: "Documentation & Knowledge Transfer",
        description:
          "Provide implementation records, runbooks and practical team handover.",
        icon: "people",
      },
    ],
  },

  // 3. Delivery approach
  deliveryApproach: {
    heading: "Our delivery approach.",
    description:
      "From discovery to ongoing optimization, we deliver solutions aligned with your business goals.",
    steps: [
      {
        number: "1",
        title: "Discover & Assess",
        description:
          "Understand your business objectives, current environment and requirements.",
      },
      {
        number: "2",
        title: "Design & Validate",
        description:
          "Develop solution architectures and implementation plans with clear priorities.",
      },
      {
        number: "3",
        title: "Implement & Integrate",
        description:
          "Deploy and integrate hardware, software and services across your environment.",
      },
      {
        number: "4",
        title: "Support & Optimize",
        description:
          "Provide ongoing support and optimization to keep your environment aligned with business needs.",
      },
    ],
  },

  // 4. Business-led enablement
  businessEnablement: {
    eyebrow: "BUSINESS-LED ENABLEMENT",
    heading:"Built around business priorities.",
    description:
      "A more resilient, efficient and future-ready environment to support your business.",
    takeaway: "Technology aligned to measurable outcomes",
    cards: [
      {
        number: "01",
        title: "Stronger operational capability",
        description:
          "Build the capability required to operate and evolve enterprise technology with confidence.",
        accent: "blue",
      },
      {
        number: "02",
        title: "Integrated enterprise systems",
        description: "Coherent, secure and manageable infrastructure across people, processes and technologies.",
        accent: "cyan",
      },
      {
        number: "03",
        title: "Business-aligned architecture",
        description:
          "Solutions designed around your objectives, operational needs and long-term plans.",
        accent: "green",
      },
    ],
  },

  // Page metadata remains tied to the existing translation messages.
  title: {
    namespace: "Home",
    key: "content.cloudServicesSectionData.services.4.title",
  },
  description: {
    namespace: "Home",
    key: "content.cloudServicesSectionData.services.4.description",
  },
  sections: [],
  seo: {
    title: {
      namespace: "Home",
      key: "content.cloudServicesSectionData.services.4.title",
    },
    description: {
      namespace: "Home",
      key: "content.cloudServicesSectionData.services.4.description",
    },
  },
} satisfies SolutionPageData;

export default enterpriseTechnologyConsultingData;

