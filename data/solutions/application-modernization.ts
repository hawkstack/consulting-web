import type { SolutionPageData } from "./types";

export const applicationModernizationData = {
  id: "application-modernization",
  slug: "application-modernization",

  // 1. Hero
  hero: {
    eyebrow: "APPLICATION MODERNIZATION",
    heading: "Modernize applications.",
    highlightedHeading: "Accelerate business.",
    description:
      "Transform applications with enterprise Kubernetes platforms, cloud-native architecture and delivery automation to improve agility, scalability and reliability.",
    ctaLabel: "Discuss your requirements ",
    ctaHref: "/contact-us",
  },

  // 2. Expertise and capabilities
  expertise: {
    heading: "From legacy complexity to modern application delivery.",
    description:
      "Assess, modernize, integrate and operate applications around your business priorities.",
    cards: [
      {
        id: "skills-assessment-learning-plans",
        title: "Application Assessment & Roadmaps",
        description:
          "Evaluate dependencies, risks and business value to define a phased modernization plan.",
        icon: "people",
      },
      {
        id: "enterprise-infrastructure-skills",
        title: "Enterprise Kubernetes Platforms",
        description:
          "Design and implement secure container platforms with networking, storage and operational controls",
        icon: "server",
      },
      {
        id: "kubernetes-cloud-platforms",
        title: "Containerization & Migration",
        description:
          "Package suitable applications into containers and migrate with testing and rollback planning.",
        icon: "cloud",
      },
      {
        id: "ai-automation-enablement",
        title: "Application Architecture & Refactoring",
        description:
          "Modernize selected components with modular services and APIs where they deliver business value.",
        icon: "chip",
      },
      {
        id: "security-operational-practices",
        title: "CI/CD & GitOps",
        description:
          "Automate builds, tests and deployments for consistent, repeatable application delivery.",
        icon: "shield",
      },
      {
        id: "learning-subscriptions-labs",
        title: "APIs & Enterprise Integration",
        description:
          "Connect applications, identity systems, databases and messaging services.",
        icon: "book",
      },
      {
        id: "certification-readiness",
        title: "Application Security & Governance",
        description:
          "Integrate image scanning, access controls, secrets management and deployment policies.",
        icon: "certificate",
      },
      {
        id: "project-based-knowledge-transfer",
        title: "Observability & Operations",
        description:
          "Implement logs, metrics and tracing with performance tuning and ongoing operations support.",
        icon: "people",
      },
    ],
  },

  // 3. Delivery approach
  deliveryApproach: {
    heading: "A practical path to modernization.",
    description:
      "Turn modernization strategy into measurable progress through a structured, low-risk journey.",
    steps: [
      {
        number: "1",
        title: "Assess & Prioritize",
        description:
          "Understand your current applications, dependencies, risks and business goals.",
      },
      {
        number: "2",
        title: "Design & Prepare",
        description:
          "Define target architecture, plan the modernization approach and prepare the platform.",
      },
      {
        number: "3",
        title: "Modernize & Validate",
        description:
          "Migrate, refactor or rebuild selected applications with testing and validation.",
      },
      {
        number: "4",
        title: "Operate & Improve",
        description:
          "Run modernized applications with observability, governance and continuous improvement.",
      },
    ],
  },

  // 4. Business-led enablement
  businessEnablement: {
    eyebrow: "BUSINESS-LED OUTCOMES",
    heading: "Built around business outcomes.",
    description:
      "Modern platforms that help teams release faster, scale confidently and operate with clarity.",
    takeaway: "Technology aligned to measurable outcomes",
    cards: [
      {
        number: "01",
        title: "Simplified operations",
        description:
          "Gain consistent platforms, better visibility and more efficient operations.",
        accent: "blue",
      },
      {
        number: "02",
        title: "Scalable, reliable services",
        description: "Build applications that can grow with demand and meet business needs.",
        accent: "cyan",
      },
      {
        number: "03",
        title: "Faster application delivery",
        description:
          "Reduce time from change to value with automated, repeatable delivery processes.",
        accent: "green",
      },
    ],
  },

  // Page metadata remains tied to the existing translation messages.
  title: {
    namespace: "Home",
    key: "content.cloudServicesSectionData.services.1.title",
  },
  description: {
    namespace: "Home",
    key: "content.cloudServicesSectionData.services.1.description",
  },
  sections: [],
  seo: {
    title: {
      namespace: "Home",
      key: "content.cloudServicesSectionData.services.1.title",
    },
    description: {
      namespace: "Home",
      key: "content.cloudServicesSectionData.services.1.description",
    },
  },
} satisfies SolutionPageData;

export default applicationModernizationData;

