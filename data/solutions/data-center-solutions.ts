import type { SolutionPageData } from "./types";

export const dataCenterSolutionsData = {
  id: "data-center-solutions",
  slug: "data-center-solutions",

  // 1. Hero
  hero: {
    eyebrow: "DATA CENTER & AI SOLUTIONS",
    heading: "Build the foundation",
    highlightedHeading: "for enterprise AI.",
    description:
      "Integrated compute, storage, networking and security for resilient data centers and scalable AI workloads.",
    ctaLabel: "Discuss your requirements",
    ctaHref: "/contact-us",
  },

  // 2. Expertise and capabilities
  expertise: {
    heading: "From core infrastructure to AI-ready operations.",
    description:
      "Design, supply, integrate and support the infrastructure your business depends on.",
    cards: [
      {
        id: "skills-assessment-learning-plans",
        title: "AI & Enterprise Servers",
        description:
          "GPU-accelerated systems, CPU servers and capacity planning for AI training, inference and critical workloads.",
        icon: "people",
      },
      {
        id: "enterprise-infrastructure-skills",
        title: "Storage & Data Platforms",
        description:
          "Block, file and object storage, data protection and scalable performance for enterprise and AI data.",
        icon: "server",
      },
      {
        id: "kubernetes-cloud-platforms",
        title: "Switches & Routers",
        description:
          "High-speed network fabrics, routing, segmentation and resilient connectivity.",
        icon: "cloud",
      },
      {
        id: "ai-automation-enablement",
        title: "Enterprise Firewalls & Security",
        description:
          "Network protection, access controls, secure management and workload isolation.",
        icon: "chip",
      },
      {
        id: "security-operational-practices",
        title: "Enterprise Platforms & Automation",
        description:
          "Linux, Kubernetes, virtualization and automation integrated with your infrastructure.",
        icon: "shield",
      },
      {
        id: "learning-subscriptions-labs",
        title: "Power, Cooling & Facilities",
        description:
          "Racks, UPS, power distribution, cooling and facility readiness coordinated with specialist partners.",
        icon: "book",
      },
      {
        id: "certification-readiness",
        title: "Backup & Disaster Recovery",
        description:
          "Backup architecture, recovery planning and validation aligned with business continuity goals.",
        icon: "certificate",
      },
      {
        id: "project-based-knowledge-transfer",
        title: "Monitoring & Operations",
        description:
          "Infrastructure visibility, capacity management, lifecycle maintenance and operations support.",
        icon: "people",
      },
    ],
  },

  // 3. Delivery approach
  deliveryApproach: {
    heading: "A clear path from assessment to operations.",
    description:
      "Move from assessment to implementation with a clear, structured approach built around your business needs.",
    steps: [
      {
        number: "1",
        title: "Assess & Size",
        description:
          "Understand your goals, workloads and constraints.",
      },
      {
        number: "2",
        title: "Design & Supply",
        description:
          "Architect the right solution and source the infrastructure.",
      },
      {
        number: "3",
        title: "Integrate & Validate",
        description:
          "Deploy, configure and test for performance and resilience.",
      },
      {
        number: "4",
        title: "Enable & Support",
        description:
          "Support your team with ongoing operations and lifecycle management.",
      },
    ],
  },

  // 4. Business-led enablement
  businessEnablement: {
    eyebrow: "BUSINESS-LED OUTCOMES",
    heading: "Built around business priorities.",
    description:
      "Flexible architectures that scale with your business and evolving AI needs.",
    takeaway: "Technology aligned to measurable outcomes",
    cards: [
      {
        number: "01",
        title: "Capacity for growth",
        description:
          "Secure, scalable and well-supported infrastructure for business continuity and peace of mind.",
        accent: "blue",
      },
      {
        number: "02",
        title: "Resilient operations",
        description: "Flexible architectures that scale with your business and evolving AI needs.",
        accent: "cyan",
      },
      {
        number: "03",
        title: "AI workload readiness",
        description:
          "Infrastructure designed for today’s AI workloads and tomorrow’s opportunities.",
        accent: "green",
      },
    ],
  },

  // Page metadata remains tied to the existing translation messages.
  title: {
    namespace: "Home",
    key: "content.cloudServicesSectionData.services.0.title",
  },
  description: {
    namespace: "Home",
    key: "content.cloudServicesSectionData.services.0.description",
  },
  sections: [],
  seo: {
    title: {
      namespace: "Home",
      key: "content.cloudServicesSectionData.services.0.title",
    },
    description: {
      namespace: "Home",
      key: "content.cloudServicesSectionData.services.0.description",
    },
  },
} satisfies SolutionPageData;

export default dataCenterSolutionsData;
