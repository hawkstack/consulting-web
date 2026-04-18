import type { AutomationCapabilitiesSectionContent } from "@/app/types/automation";

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
