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
  title: "From Blueprint to Operational Excellence",
  steps: [
    {
      step: "1",
      title: "Assess",
      desktopDescription:
        "Identifying capability gaps and defining your technical north star.",
      mobileDescription:
        "Auditing current infrastructure and engineering competencies.",
      icon: AzureBlueprintAssessIcon,
    },
    {
      step: "2",
      title: "Build",
      desktopDescription:
        "Implementing the training curriculum and modern tooling stacks.",
      mobileDescription:
        "Execution of custom training paths and collaborative labs.",
      icon: AzureBlueprintBuildIcon,
    },
    {
      step: "3",
      title: "Operate",
      desktopDescription:
        "Launching with confidence on a self-sustaining engineering foundation.",
      mobileDescription:
        "Sustained cloud confidence through ongoing certification support.",
      icon: AzureBlueprintOperateIcon,
    },
  ],
};
