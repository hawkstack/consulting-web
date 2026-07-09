import {
  AzureSkillsIcon,
  EnterpriseReadyIcon,
  HandsOnLabsIcon,
  RedHatExpertiseIcon,
} from "../icons/AzureHeroIcons";
import type { AzureHeroData } from "../types/azure";

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
