// RedHatAIOverviewSection data

import {
  RedHatAICapabilitiesData,
  RedHatAICtaData,
  RedHatAIFoundationSectionData,
  RedHatAIOverviewData,
  RedHatAIProductionSectionData,
  RedHatAIStrategySectionData,
} from "@/app/types/product-reseller/product-redhat/redhat-ai/redhat-ai";
import { RedHatAnsibleHeroData } from "@/app/types/product-reseller/product-redhat/redhat-ansible/redhat-ansible";
import ArchitectIcon from "@/components/icons/product-reseller/redhat-ai/ArchitectIcon";
import AssessIcon from "@/components/icons/product-reseller/redhat-ai/AssessIcon";
import ImplementIcon from "@/components/icons/product-reseller/redhat-ai/ImplementIcon";
import OptimizeIcon from "@/components/icons/product-reseller/redhat-ai/OptimizeIcon";
import CheckIcon from "@/components/icons/product-reseller/redhat-ai/CheckIcon";

// RedHatAnsibleHeroSection data

export const redHatAnsibleHeroData: RedHatAnsibleHeroData = {
  badge: "Red Hat Ansible Automation Platform by HawkStack",

  heading: {
    title: "Scale automation across your",
    highlight: "entire enterprise.",
  },

  description:
    "HawkStack helps organizations implement Red Hat Ansible Automation Platform to orchestrate infrastructure, applications, networks, security operations, cloud environments, and day-to-day IT workflows from one trusted automation foundation.",

  primaryButtonText: "Book a consultation",

  secondaryButtonText: "Explore automation",

  features: [
    {
      id: 1,
      text: "Enterprise-wide automation",
      icon: CheckIcon,
    },
    {
      id: 2,
      text: "Governed workflows",
      icon: CheckIcon,
    },
    {
      id: 3,
      text: "Hybrid cloud ready",
      icon: CheckIcon,
    },
  ],

  statusList: [
    {
      id: 1,
      title: "Inventory synced",
      status: "READY",
    },
    {
      id: 2,
      title: "Playbook approved",
      status: "GOVERNED",
    },
    {
      id: 3,
      title: "Policy triggered",
      status: "EVENT",
    },
    {
      id: 4,
      title: "Automation executed",
      status: "SUCCESS",
    },
  ],

  capabilityCards: [
    {
      id: 1,
      title: "AIOps",
      subtitle: "Automated response",
    },
    {
      id: 2,
      title: "VMs",
      subtitle: "Lifecycle automation",
    },
    {
      id: 3,
      title: "Cloud",
      subtitle: "Provisioning",
    },
    {
      id: 4,
      title: "Security",
      subtitle: "Policy automation",
    },
  ],
};

export const redHatAnsibleOverviewData: RedHatAIOverviewData = {
  tag: "PLATFORM OVERVIEW",
  heading: "Automation for the enterprise. Engineered for every team.",
  description:
    "Red Hat Ansible Automation Platform helps teams create, manage, and scale automation across IT environments. HawkStack adds automation strategy, playbook design, platform implementation, integrations, governance, and managed support to help your organization move from manual operations to repeatable execution.",

  cards: [
    {
      id: 1,
      title: "Orchestrate your IT estate",
      description:
        "Automate operating systems, networks, cloud platforms, applications, virtual machines, and security workflows from a unified platform.",
    },
    {
      id: 2,
      title: "Make operations more resilient",
      description:
        "Use event-driven automation and governed workflows to respond faster to changes, incidents, and operational triggers.",
    },
    {
      id: 3,
      title: "Empower more automators",
      description:
        "Enable teams of different skill levels with reusable automation content, self-service workflows, and policy-controlled execution.",
    },
  ],
};

// RedHatAnsibleFoundationSection data

export const redHatAnsibleFoundationData: RedHatAIFoundationSectionData = {
  tag: "Core capabilities",
  title:
    "One automation platform for every task, every environment, and any scale.",
  description:
    "HawkStack helps you implement Ansible Automation Platform capabilities that improve speed, consistency, security, and control across your enterprise operations.",
  cards: [
    {
      title: "Event-driven automation",
      description:
        "Trigger automated actions from alerts, system events, policy changes, tickets, and operational signals.",
      ctaText: "Automate response →",
      href: "/",
    },
    {
      title: "Automation controller",
      description:
        "Manage playbooks, inventories, credentials, approvals, job templates, and role-based access in one control plane.",
      ctaText: "Centralize control →",
      href: "/",
    },
    {
      title: "Self-service automation",
      description:
        "Let approved users launch trusted automation workflows without depending on manual ticket handoffs.",
      ctaText: "Enable self-service →",
      href: "/",
    },
    {
      title: "Automation analytics",
      description:
        "Track usage, performance, success rates, operational impact, and automation adoption across teams.",
      ctaText: "Measure value →",
      href: "/",
    },
  ],
};

// RedHatAnsibleCapabilitiesSection data

export const redHatAnsibleCapabilitiesData: RedHatAICapabilitiesData = {
  cards: [
    {
      id: 1,
      title: "Automate",
      description:
        "Reduce repetitive manual work across infrastructure, cloud, network, security, and app operations.",
    },
    {
      id: 2,
      title: "Govern",
      description:
        "Standardize automation with access controls, approvals, reusable content, and auditable execution.",
    },
    {
      id: 3,
      title: "Scale",
      description:
        "Expand automation from individual tasks to enterprise-wide workflows and cross-team operations.",
    },
  ],
};

// RedHatAnsibleProductionSection data

export const redHatAnsibleProductionData: RedHatAIProductionSectionData = {
  tag: "USE CASES",
  title: "Turn complex operations into repeatable automation.",
  description:
    "HawkStack helps you identify high-value automation opportunities and convert them into reliable, governed workflows.",
  cards: [
    {
      title: "AIOps automation",
      description:
        "Turn alerts and insights into deterministic, auditable, and consistent automated actions.",
    },
    {
      title: "Virtual infrastructure",
      description:
        "Automate VM provisioning, configuration, migration, patching, and lifecycle operations.",
    },
    {
      title: "Network automation",
      description:
        "Manage multivendor networks across campus, branch, cloud, and edge environments.",
    },
    {
      title: "Cloud automation",
      description:
        "Provision, configure, secure, and manage resources across AWS, Azure, Google Cloud, and private cloud.",
    },
    {
      title: "Operating systems",
      description:
        "Standardize patching, configuration, compliance, and administration across Linux and Windows environments.",
    },
    {
      title: "Security automation",
      description:
        "Accelerate response, enforce policies, automate remediation, and connect security tools with IT operations.",
    },
  ],
};

// RedHatAnsibleStrategySection data

export const redHatAnsibleStrategyData: RedHatAIStrategySectionData = {
  tag: "HAWKSTACK APPROACH",

  heading: "Build an automation practice that delivers measurable value.",

  description:
    "We help your teams move beyond isolated scripts toward an enterprise automation operating model.",

  cards: [
    {
      id: 1,
      title: "Assess",
      description:
        "Identify manual processes, automation gaps, risk areas, integration needs, and high-value quick wins.",
      icon: AssessIcon,
    },
    {
      id: 2,
      title: "Design",
      description:
        "Define the automation architecture, governance model, content strategy, access controls, and rollout plan.",
      icon: ArchitectIcon,
    },
    {
      id: 3,
      title: "Implement",
      description:
        "Deploy Ansible Automation Platform, build playbooks, configure integrations, and onboard teams.",
      icon: ImplementIcon,
    },
    {
      id: 4,
      title: "Optimize",
      description:
        "Measure adoption, improve workflows, expand automation coverage, and mature platform governance.",
      icon: OptimizeIcon,
    },
  ],
};

// RedHatAnsibleCtaSection data

export const redHatAnsibleCtaData: RedHatAICtaData = {
  tag: "Automate with confidence",
  title: "Ready to scale enterprise automation with HawkStack?",
  description:
    "Talk to our team about your automation goals, current manual processes, cloud environment, security requirements, and Ansible implementation roadmap.",
  buttons: [
    {
      label: "Schedule a consultation",
      href: "/",
      variant: "primary",
    },
    {
      label: "View capabilities",
      href: "/",
      variant: "secondary",
    },
  ],
};
