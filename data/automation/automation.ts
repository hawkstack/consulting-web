import type { AppModernizationHeroContent } from "@/app/types/app-modernization";
import type {
  AutomationCapabilitiesSectionContent,
  AutomationOfferSectionContent,
} from "@/app/types/automation";

export const automationHeroContent: AppModernizationHeroContent = {
  badge: "Enterprise Grade Ansible Solutions",
  title: "Automate infrastructure operations with enterprise grade",
  highlightedLastLine: "Ansible solutions",
  description:
    "HawkStack helps teams eliminate repetitive manual work, standardize infrastructure changes, and accelerate deployments using scalable Ansible automation built for modern operations.",
  buttons: [
    {
      label: "Book a Consultation",
      href: "#app-modernization-form",
      variant: "primary",
    },
    {
      label: "Explore Services",
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
        placeholder: "Enter your message",
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

export const automationOfferSectionContent: AutomationOfferSectionContent = {
  badge: "WHAT WE OFFER",
  title: "Ansible automation services designed for reliability and scale",
  description:
    "From initial automation strategy to full implementation, HawkStack helps organizations transform infrastructure management into a repeatable, efficient, and auditable operating model.",
  fitTitle: "Best fit for teams that need to:",
  fitPoints: [
    "Reduce manual server administration and repetitive operational tasks",
    "Improve deployment speed and reliability across environments",
    "Minimize downtime caused by inconsistent configurations",
    "Scale infrastructure operations without scaling operational overhead",
    "Strengthen governance with auditable, version-controlled automation",
  ],
  offerings: [
    "Ansible playbook design and implementation",
    "Server provisioning and configuration management",
    "Patch management and update orchestration",
    "Cloud, VM, and hybrid infrastructure automation",
    "Application deployment automation",
    "Runbook modernization and operational workflow automation",
    "CI/CD and DevOps pipeline integration",
    "Automation health review and optimization",
  ],
};
