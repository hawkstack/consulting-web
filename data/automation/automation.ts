import type {
  AutomationCapabilitiesSectionContent,
  AutomationCtaSectionContent,
  AutomationHeroContent,
  AutomationProcessSectionContent,
  AutomationWhyHawkStackSectionContent,
  AutomationWhySectionContent,
} from "@/app/types/automation";

export const automationHeroContent: AutomationHeroContent = {
  badge: "Infrastructure, CI/CD & Platform Automation",
  title: "Automate delivery and operations without losing control",
  description:
    "HawkStack helps teams standardize provisioning, deployments, and day-to-day platform workflows so releases move faster, environments stay consistent, and operations scale with less manual effort.",
  buttons: [
    {
      label: "Talk to an Expert",
      href: "#automation-form",
      variant: "primary",
    },
    {
      label: "Explore Our Approach",
      href: "/get-started",
      variant: "secondary",
    },
  ],
  form: {
    title: "GET IN TOUCH",
    submitLabel: "Send Message",
    successMessage: "Message sent successfully.",
    errorMessage: "Something went wrong. Please try again.",
    source: "automation",
    fields: [
      {
        name: "firstName",
        label: "First Name",
        placeholder: "Enter first name",
        type: "text",
        required: true,
      },
      {
        name: "lastName",
        label: "Last Name",
        placeholder: "Enter last name",
        type: "text",
        required: true,
      },
      {
        name: "email",
        label: "Email",
        placeholder: "Enter your email",
        type: "email",
        required: true,
      },
      {
        name: "phone",
        label: "Mobile Number",
        placeholder: "Enter your mobile number",
        type: "tel",
        required: true,
      },
      {
        name: "message",
        label: "Your Message",
        placeholder: "Tell us what you want to automate",
        type: "textarea",
        required: true,
      },
    ],
  },
};

export const automationCapabilitiesSectionContent: AutomationCapabilitiesSectionContent =
  {
    services: [
      {
        title: "End-to-End Infrastructure Automation",
        description:
          "Automate provisioning, configuration, patching, and routine operations across servers, cloud, and hybrid environments with reliable Ansible playbooks.",
        icon: "infrastructure",
        mobileOrder: 1,
        tabletOrder: 1,
        desktopOrder: 1,
      },
      {
        title: "Faster, Safer Deployments",
        description:
          "Standardize releases and reduce configuration drift with repeatable workflows, approval-ready runbooks, and environment-specific automation.",
        icon: "deployments",
        mobileOrder: 2,
        tabletOrder: 2,
        desktopOrder: 2,
      },
      {
        title: "Operational Consistency at Scale",
        description:
          "Enforce the same process across teams and systems so every deployment, update, and configuration change happens the right way every time.",
        icon: "operations",
        mobileOrder: 3,
        tabletOrder: 3,
        desktopOrder: 3,
      },
      {
        title: "DevOps and Platform Enablement",
        description:
          "Support platform teams with reusable automation modules, CI/CD integrations, secrets-aware workflows, and infrastructure lifecycle management.",
        icon: "platform",
        mobileOrder: 4,
        tabletOrder: 4,
        desktopOrder: 4,
      },
    ],
  };

export const automationWhySectionContent: AutomationWhySectionContent = {
  badge: "Why Automation",
  title: "Automation reduces friction, risk, and manual rework",
  description:
    "As environments grow, manual provisioning and hand-operated release steps slow teams down and increase the chance of drift. Automation creates a repeatable operating model that improves reliability without sacrificing visibility or control.",
  gainsTitle: "What you gain",
  gains: [
    "Faster infrastructure provisioning",
    "Lower operational overhead",
    "Consistent environments across teams",
    "Safer repeatable deployments",
    "Reduced configuration drift",
    "Better platform team productivity",
  ],
};

export const automationProcessSectionContent: AutomationProcessSectionContent =
  {
    badge: "Our Process",
    title: "A practical automation rollout that improves reliability fast",
    steps: [
      {
        stepNumber: "01.",
        title: "Assess",
        description:
          "We review your current workflows, manual bottlenecks, tooling, and operational risks.",
        mobileOrder: 1,
        tabletOrder: 1,
        desktopOrder: 1,
      },
      {
        stepNumber: "02.",
        title: "Design",
        description:
          "We define automation patterns, approvals, guardrails, and ownership aligned to your teams.",
        mobileOrder: 2,
        tabletOrder: 3,
        desktopOrder: 2,
      },
      {
        stepNumber: "03.",
        title: "Implement",
        description:
          "We build and integrate playbooks, pipelines, workflows, and reusable automation modules.",
        mobileOrder: 3,
        tabletOrder: 2,
        desktopOrder: 3,
      },
      {
        stepNumber: "04.",
        title: "Scale",
        description:
          "We expand coverage, improve observability, and refine operations as adoption grows.",
        mobileOrder: 4,
        tabletOrder: 4,
        desktopOrder: 4,
      },
    ],
  };

export const automationWhyHawkStackSectionContent: AutomationWhyHawkStackSectionContent =
  {
    badge: "Why HawkStack",
    title: "Automation that fits real platform and operations teams",
    description:
      "We design automation around the way your engineers actually deliver and support systems. That means reusable workflows, clear governance, and implementation that works across cloud, hybrid, and enterprise environments.",
    points: [
      "Infrastructure and DevOps automation expertise",
      "Reusable patterns instead of one-off scripts",
      "Delivery built with controls and auditability",
      "Designed for platform scale and team adoption",
    ],
  };

export const automationCtaSectionContent: AutomationCtaSectionContent = {
  badge: "LET'S TALK",
  title: "Ready to automate infrastructure and delivery workflows?",
  description:
    "We can help you design and implement automation that makes environments more consistent, deployments more reliable, and platform operations easier to scale.",
  buttons: [
    {
      label: "Download Capability Overview",
      href: "/get-started",
      variant: "secondary",
    },
    {
      label: "Talk to an Expert",
      href: "#automation-form",
      variant: "primary",
    },
  ],
};
