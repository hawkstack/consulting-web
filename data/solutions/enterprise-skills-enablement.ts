import type { SolutionPageData } from "./types";

export const enterpriseSkillsEnablementData = {
  id: "enterprise-skills-enablement",
  slug: "enterprise-skills-enablement",

  // 1. Hero
  hero: {
    eyebrow: "ENTERPRISE SKILLS & ENABLEMENT",
    heading: "Build expertise.",
    highlightedHeading: "Accelerate technology adoption.",
    description:
      "Equip teams with enterprise training, learning subscriptions and hands-on practice to turn technology investments into operational capability.",
    ctaLabel: "Discuss your requirements",
    ctaHref: "/contact-us",
  },

  // 2. Expertise and capabilities
  expertise: {
    heading: "End-to-end expertise for your enterprise.",
    description:
      "From foundational skills to advanced platform enablement, we help your teams build the knowledge and hands-on experience to operate, manage and scale modern infrastructure and applications.",
    cards: [
      {
        id: "skills-assessment-learning-plans",
        title: "Skills Assessment & Learning Plans",
        description:
          "Align learning priorities with team roles and technology adoption goals.",
        icon: "people",
      },
      {
        id: "enterprise-infrastructure-skills",
        title: "Enterprise Infrastructure Skills",
        description:
          "Develop practical skills across operating systems, servers, storage and networking.",
        icon: "server",
      },
      {
        id: "kubernetes-cloud-platforms",
        title: "Kubernetes & Cloud Platforms",
        description:
          "Build capability in deployment, administration and platform operations.",
        icon: "cloud",
      },
      {
        id: "ai-automation-enablement",
        title: "AI & Automation Enablement",
        description:
          "Develop practical skills in AI platforms and enterprise automation.",
        icon: "chip",
      },
      {
        id: "security-operational-practices",
        title: "Security & Operational Practices",
        description:
          "Strengthen access management, platform security and troubleshooting skills.",
        icon: "shield",
      },
      {
        id: "learning-subscriptions-labs",
        title: "Learning Subscriptions & Labs",
        description:
          "Support continuous learning through structured content and hands-on environments.",
        icon: "book",
      },
      {
        id: "certification-readiness",
        title: "Certification Readiness",
        description:
          "Prepare learners through guided practice and role-aligned learning.",
        icon: "certificate",
      },
      {
        id: "project-based-knowledge-transfer",
        title: "Project-Based Knowledge Transfer",
        description:
          "Enable customer teams with workshops, runbooks and implementation handover.",
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
        title: "Assess & Align",
        description:
          "Understand your goals, assess current skills and define priorities.",
      },
      {
        number: "2",
        title: "Learn & Practice",
        description:
          "Deliver structured training with hands-on labs and real-world scenarios.",
      },
      {
        number: "3",
        title: "Validate & Apply",
        description:
          "Reinforce learning through practical exercises and applied use cases.",
      },
      {
        number: "4",
        title: "Enable & Advance",
        description:
          "Support ongoing learning and knowledge transfer to drive continued capability.",
      },
    ],
  },

  // 4. Business-led enablement
  businessEnablement: {
    eyebrow: "BUSINESS-LED ENABLEMENT",
    heading: "Built around business priorities.",
    description:
      "Practical enablement that helps your teams deliver greater value from technology investments.",
    takeaway: "Skills that translate into business outcomes",
    cards: [
      {
        number: "01",
        title: "Practical enterprise skills",
        description:
          "Focus on real-world skills that improve operational capability.",
        accent: "blue",
      },
      {
        number: "02",
        title: "Faster technology adoption",
        description: "Help teams get up to speed and contribute sooner.",
        accent: "cyan",
      },
      {
        number: "03",
        title: "Stronger team capability",
        description:
          "Build confident, self-sufficient teams for long-term success.",
        accent: "green",
      },
    ],
  },

  // Page metadata remains tied to the existing translation messages.
  title: {
    namespace: "Home",
    key: "content.cloudServicesSectionData.services.5.title",
  },
  description: {
    namespace: "Home",
    key: "content.cloudServicesSectionData.services.5.description",
  },
  sections: [],
  seo: {
    title: {
      namespace: "Home",
      key: "content.cloudServicesSectionData.services.5.title",
    },
    description: {
      namespace: "Home",
      key: "content.cloudServicesSectionData.services.5.description",
    },
  },
} satisfies SolutionPageData;

export default enterpriseSkillsEnablementData;

