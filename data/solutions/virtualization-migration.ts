import type { SolutionPageData } from "./types";

export const virtualizationMigrationData = {
  id: "virtualization-migration",
  slug: "virtualization-migration",

  // 1. Hero
  hero: {
    eyebrow: "VIRTUALIZATION & MIGRATION",
    heading: "Modernize virtualization.",
    highlightedHeading: "Migrate with confidence.",
    description:
      "Assess, plan and migrate workloads to modern virtualization platforms, supported by KubeVirtStack for AI-assisted readiness, planning and validation.",
    ctaLabel: "Discuss your requirements",
    ctaHref: "/contact-us",
  },

  // 2. Expertise and capabilities
  expertise: {
    heading: "End-to-end expertise for your enterprise.",
    description:
      "From assessment to handover, we help you modernize your virtualization environment and migrate workloads with a structured, low-risk approach.",
    cards: [
      {
        id: "skills-assessment-learning-plans",
        title: "Migration Readiness Assessment",
        description:
          "Evaluate workloads, dependencies and platform compatibility before migration.",
        icon: "people",
      },
      {
        id: "enterprise-infrastructure-skills",
        title: "Target Platform Architecture",
        description:
          "Design compute, storage and networking for the destination environment.",
        icon: "server",
      },
      {
        id: "kubernetes-cloud-platforms",
        title: "Virtualization Platform Deployment",
        description:
          "Implement enterprise virtualization platforms integrated with existing infrastructure.",
        icon: "cloud",
      },
      {
        id: "ai-automation-enablement",
        title: "Storage & Network Integration",
        description:
          "Prepare storage classes, connectivity and access for migrated workloads.",
        icon: "chip",
      },
      {
        id: "security-operational-practices",
        title: "Pilot Migration & Validation",
        description:
          "Test representative workloads and validate performance and functionality.",
        icon: "shield",
      },
      {
        id: "learning-subscriptions-labs",
        title: "Migration Execution & Cutover",
        description:
          "Coordinate migration waves, cutover activities and rollback plans.",
        icon: "book",
      },
      {
        id: "certification-readiness",
        title: "Backup & Recovery Readiness",
        description:
          "Prepare protection and recovery procedures for the new environment.",
        icon: "certificate",
      },
      {
        id: "project-based-knowledge-transfer",
        title: "Operational Handover & Support",
        description:
          "Provide documentation, team enablement and post-migration support.",
        icon: "people",
      },
    ],
  },

  // 3. Delivery approach
  deliveryApproach: {
    heading: "Our delivery approach.",
    description:
      "A structured and practical approach to build skills, validate capability and enable long-term success.",
    steps: [
      {
        number: "1",
        title: "Assess & Plan",
        description:
          "Understand your environment, objectives and constraints.",
      },
      {
        number: "2",
        title: "Prepare & Pilot",
        description:
          "Design the target environment and validate with pilot workloads.",
      },
      {
        number: "3",
        title: "Migrate & Validate",
        description:
          "Execute migration waves and validate outcomes.",
      },
      {
        number: "4",
        title: "Handover & Support",
        description:
          "Transition to operations with ongoing support.",
      },
    ],
  },

  // 4. Business-led enablement
  businessEnablement: {
    eyebrow: "BUSINESS-LED OUTCOMES",
    heading: "Built around business priorities.",
    description:
      "Helping you achieve your modernization goals with measurable outcomes.",
    takeaway: "Technology aligned to measurable outcomes",
    cards: [
      {
        number: "01",
        title: "Business continuity",
        description:
          "Maintain operational stability through careful planning and execution.",
        accent: "blue",
      },
      {
        number: "02",
        title: "Greater platform flexibility",
        description: "Modernize your environment to support current and future needs.",
        accent: "cyan",
      },
      {
        number: "03",
        title: "Reduced migration risk",
        description:
          "Identify and address potential issues early with a structured approach.",
        accent: "green",
      },
    ],
  },

  // Page metadata remains tied to the existing translation messages.
  title: {
    namespace: "Home",
    key: "content.cloudServicesSectionData.services.3.title",
  },
  description: {
    namespace: "Home",
    key: "content.cloudServicesSectionData.services.3.description",
  },
  sections: [],
  seo: {
    title: {
      namespace: "Home",
      key: "content.cloudServicesSectionData.services.3.title",
    },
    description: {
      namespace: "Home",
      key: "content.cloudServicesSectionData.services.3.description",
    },
  },
} satisfies SolutionPageData;

export default virtualizationMigrationData;

