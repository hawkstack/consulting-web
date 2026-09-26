import type {
  CoverageItem,
  MembershipCard,
  TechnologyJourneyItem,
  TechnologyPartner,
} from "../types/TechnologyCoverage.types";

export const technologyJourney: TechnologyJourneyItem[] = [
  { id: "consulting", label: "Technology Consulting", icon: "consulting" },
  {
    id: "architecture",
    label: "Enterprise Architecture & Solution Design",
    icon: "architecture",
  },
  {
    id: "integration",
    label: "System Integration & Managed Services",
    icon: "integration",
  },
  {
    id: "training",
    label: "Enterprise Training & Enablement",
    icon: "training",
  },
];

export const coverageItems: CoverageItem[] = [
  {
    id: "enterprise",
    title: "Enterprise Platforms",
    description: "Linux, cloud native and open source platforms",
    icon: "platform",
  },
  {
    id: "cloud",
    title: "Cloud Platforms",
    description: "Leading hyperscale cloud providers",
    icon: "cloud",
  },
  {
    id: "infrastructure",
    title: "Infrastructure + Cloud Native",
    description: "Enterprise infrastructure & open source ecosystem",
    icon: "infrastructure",
  },
];

export const enterprisePartners: TechnologyPartner[] = [
  {
    id: "red-hat",
    name: "Red Hat",
    logo: "/images/home/digital-transformation/red-hat.webp",
    href: "https://www.credly.com/badges/a89d1d73-c4e0-4395-92a2-e03641af5d6c/public_url",
    external: true,
  },
  {
    id: "suse",
    name: "SUSE",
    logo: "/images/home/digital-transformation/suse.webp",
    href: "/certificates/suse-partnership.pdf",
    external: true,
  },
  {
    id: "mirantis",
    name: "Mirantis",
    logo: "/images/home/digital-transformation/mirantis.webp",
  },
];

export const cloudPartners: TechnologyPartner[] = [
  {
    id: "aws",
    name: "AWS",
    logo: "/images/home/digital-transformation/aws.webp",
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    logo: "/images/home/digital-transformation/azure.webp",
  },
  {
    id: "google-cloud",
    name: "Google Cloud",
    logo: "/images/home/digital-transformation/google-cloud.webp",
  },
];

export const membershipCards: MembershipCard[] = [
  {
    id: "dell",
    badge: "ODM & INFRASTRUCTURE PARTNER",
    name: "Dell Technologies",
    description: "Enterprise servers, storage and edge infrastructure.",
    logo: "/images/home/digital-transformation/dell-technologies.webp",
  },
  {
    id: "cncf",
    badge: "SILVER MEMBER",
    name: "Cloud Native Computing Foundation",
    description: "Cloud Native Ecosystem",
    logo: "/images/home/digital-transformation/cncf-wordmark.webp",
  },
];

export const technologyCategories = [
  "Government",
  "Public Sector",
  "Enterprise",
  "Data Centre",
  "Sovereign Cloud",
  "Cybersecurity",
  "AI",
];
