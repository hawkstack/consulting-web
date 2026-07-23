import {
  AzureBlueprintAssessIcon,
  AzureBlueprintBuildIcon,
  AzureBlueprintOperateIcon,
} from "../icons/AzureBlueprintIcons";
import {
  AzureAutomationIcon,
  AzureSkillsIcon,
  AzureInfrastructureIcon,
  AzurePlatformIcon,
  AzureTerminalIcon,
  EnterpriseReadyIcon,
  HandsOnLabsIcon,
  RedHatExpertiseIcon,
} from "../icons/AzureHeroIcons";
import type {
  AzureBlueprintOperationalData,
  AzureCompetenciesData,
  AzureCtaData,
  AzureEngineeringData,
  AzureHeroData,
  AzureSkillsAccelerationData,
} from "../types/azure";

export const azureHeroData: AzureHeroData = {
  eyebrow: "RED HAT CERTIFIED PARTNER",
  heading: "Build Azure-Ready",
  highlightedHeading: "Engineering Teams",
  headingSuffix: "with Red Hat Expertise",
  description:
    "Accelerate your cloud transformation by empowering your workforce with the essential Linux, Automation, and Containerization skills required for high-performance Microsoft Azure environments.",
  image: "/images/product-reseller/azure/azure-hero.svg",
  imageAlt: "Azure cloud orchestration platform with connected servers",
  buttons: [
    { label: "Start Your Azure Journey", href: "/contact-us", variant: "primary" },
    { label: "Talk to an Expert", href: "/contact-us", variant: "secondary" },
  ],
  features: [
    { label: "Red Hat Expertise", icon: RedHatExpertiseIcon },
    { label: "Azure Skills", icon: AzureSkillsIcon },
    { label: "Hands-on Labs", icon: HandsOnLabsIcon },
    { label: "Enterprise Ready", icon: EnterpriseReadyIcon },
  ],
  trustedLabel: "TRUSTED BY INDUSTRY LEADERS",
  trustedCompanies: ["AZURE", "RED HAT", "FEDORA", "ANSIBLE"],
};

export const azureCompetenciesData: AzureCompetenciesData = {
  title: "Mission-Critical Cloud Competencies",
  mobileTitle: "Core Solutions",
  description:
    "We bridge the gap between traditional engineering and cloud-native excellence through specialized skill acceleration.",
  cards: [
    {
      title: "Enterprise Linux Skills",
      description:
        "Mastering RHEL on Azure to ensure stability and performance for enterprise workloads.",
      icon: AzureTerminalIcon,
    },
    {
      title: "Infrastructure Training",
      description:
        "Scalable cloud administration patterns for resilient Azure infrastructure management.",
      icon: AzureInfrastructureIcon,
    },
    {
      title: "Automation Efficiency",
      description:
        "Leveraging Ansible and Azure DevOps to eliminate manual toil and human error.",
      icon: AzureAutomationIcon,
    },
    {
      title: "Modern App Platforms",
      description:
        "Deployment and orchestration excellence using OpenShift and Kubernetes on Azure.",
      icon: AzurePlatformIcon,
    },
  ],
};

export const azureEngineeringData: AzureEngineeringData = {
  title: "One Partner. Stronger Azure Engineering Capabilities.",
  mobileTitle: "One Partner. Stronger Azure Engineering Capabilities.",
  capabilities: [
    {
      title: "Customized Curriculum",
      description:
        "Tailored training paths that align specifically with your organization's Azure footprint.",
    },
    {
      title: "Expert-Led Workshops",
      description:
        "Hands-on mentorship from certified Red Hat and Microsoft Azure architects.",
    },
    {
      title: "Certification Readiness",
      description:
        "Direct path to achieving critical industry certifications for your entire team.",
    },
  ],
  image: "/images/product-reseller/azure/azure-engineering.svg",
  imageAlt: "Azure cloud platform surrounded by connected engineering services",
};

export const azureSkillsAccelerationData: AzureSkillsAccelerationData = {
  title: "The HawkStack Azure Skills Acceleration Framework",
  description:
    "A comprehensive 3-pillar system designed to transition engineering teams from legacy mindsets to modern cloud operational models.",
  pillars: [
    {
      step: "01",
      title: "Strategic Assessment",
      desktopTitle: "Assessment",
      description:
        "Baseline analysis of current skills, infrastructure complexity, and cultural readiness for cloud adoption.",
    },
    {
      step: "02",
      title: "Immersive Training",
      desktopTitle: "Training",
      description:
        "High-intensity modular labs covering Linux, Containers, and Infrastructure as Code specifically for Azure.",
    },
    {
      step: "03",
      title: "Operational Mastery",
      desktopTitle: "Enablement",
      description:
        "Embedded engineering support to apply new skills to real-world production projects and internal roadmaps.",
    },
  ],
};

export const azureBlueprintOperationalData: AzureBlueprintOperationalData = {
  title: "Azure Operational Blueprint",
  steps: [
    {
      step: "01",
      title: "Assess",
      desktopDescription:
        "Map current workloads, skills, and cloud readiness across your Azure estate.",
      mobileDescription:
        "Map workloads, skills, and cloud readiness across your Azure estate.",
      icon: AzureBlueprintAssessIcon,
    },
    {
      step: "02",
      title: "Build",
      desktopDescription:
        "Create secure landing zones, automation paths, and migration-ready operating patterns.",
      mobileDescription:
        "Create secure landing zones and migration-ready operating patterns.",
      icon: AzureBlueprintBuildIcon,
    },
    {
      step: "03",
      title: "Operate",
      desktopDescription:
        "Enable teams to run, govern, and optimize Azure environments with confidence.",
      mobileDescription:
        "Enable teams to run and optimize Azure environments with confidence.",
      icon: AzureBlueprintOperateIcon,
    },
  ],
};

export const azureCtaData: AzureCtaData = {
  title: "Ready to Strengthen Your Azure Engineering Capability?",
  mobileTitleStart: "Ready to Strengthen",
  mobileTitleHighlight: "Your Azure Capability?",
  description:
    "Partner with HawkStack to accelerate Azure adoption with practical Red Hat expertise and hands-on enablement.",
  mobileDescription:
    "Accelerate Azure adoption with practical Red Hat expertise.",
  primaryAction: {
    label: "Start Your Azure Journey",
    href: "/contact-us",
  },
  secondaryAction: {
    label: "Talk to an Expert",
    href: "/contact-us",
  },
  mobileAction: {
    label: "Get Started",
    href: "/contact-us",
  },
};
