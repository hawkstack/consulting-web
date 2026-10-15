import type {
  CoverageItem,
  TechnologyEcosystemData,
  MembershipCard,
  TechnologyJourneyItem,
  TechnologyPartner,
  TechnologyPartnerGroup,
} from "../types/TechnologyCoverage.types";

export const technologyCoverageCopy = {
  sectionEyebrow: "Strategic Technology Ecosystem",
  sectionTitleFirstLine: "End to End Expertise for",
  sectionTitleSecondLine: "Your Digital Transformation.",
  sectionDescription:
    "From strategy to execution, HawkStack connects consulting, platforms, infrastructure and enablement through one integrated approach.",
  coverageEyebrow: "Coverage",
  coverageTitle: "Technology coverage",
  coverageDescription:
    "A unified ecosystem of leading partners across platforms, infrastructure and cloud native technologies to accelerate your outcomes.",
  technologyCategoriesLabel: "Technology sectors",
};

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
    mark: "/images/home/product-reseller/Redhat.webp",
    href: "https://www.credly.com/badges/a89d1d73-c4e0-4395-92a2-e03641af5d6c/public_url",
    external: true,
  },
  {
    id: "suse",
    name: "SUSE",
    logo: "/images/home/digital-transformation/suse.webp",
    mark: "/images/home/product-reseller/Suse.webp",
    href: "/certificates/suse-partnership.pdf",
    external: true,
  },
  {
    id: "mirantis",
    name: "Mirantis",
    logo: "/images/home/digital-transformation/mirantis.webp",
    mark: "/images/home/product-reseller/Mirantis.webp",
  },
];

export const cloudPartners: TechnologyPartner[] = [
  {
    id: "aws",
    name: "AWS",
    logo: "/images/home/digital-transformation/aws.webp",
    mark: "/images/home/product-reseller/AWS.webp",
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    logo: "/images/home/digital-transformation/azure.webp",
    mark: "/images/home/product-reseller/Azure.webp",
  },
  {
    id: "google-cloud",
    name: "Google Cloud",
    logo: "/images/home/digital-transformation/google-cloud.webp",
    mark: "/images/home/product-reseller/google-cloud.webp",
  },
];

export const technologyPartnerGroups: TechnologyPartnerGroup[] = [
  {
    id: "enterprise-platforms",
    title: "Enterprise Platforms",
    partners: enterprisePartners,
  },
  { id: "cloud-platforms", title: "Cloud Platforms", partners: cloudPartners },
];

export const membershipCards: MembershipCard[] = [
  {
    id: "dell",
    badge: "OEM & INFRASTRUCTURE PARTNER",
    name: "Dell Technologies",
    description: "Enterprise servers, storage and edge infrastructure.",
    logo: "/images/home/digital-transformation/dell-technologies.webp",
    tone: "blue",
  },
  {
    id: "cncf",
    badge: "SILVER MEMBER",
    name: "Cloud Native Computing Foundation",
    description: "Cloud Native Ecosystem",
    logo: "/images/home/digital-transformation/cncf-wordmark.webp",
    tone: "purple",
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

export const technologyEcosystemData: TechnologyEcosystemData = {
  title: "End to End Expertise for Your",
  highlight: "Digital Transformation.",
  description:
    "Integrated solutions to modernize IT, strengthen resilience and accelerate business growth.",
  benefits: [
    {
      id: "modernize",
      title: ["Modernize", "Enterprise IT"],
      description: "Unify infrastructure, cloud and platforms.",
      icon: "platform",
    },
    {
      id: "resilience",
      title: ["Strengthen", "Business Resilience"],
      description: "Build reliable, scalable operations.",
      icon: "shield",
    },
    {
      id: "value",
      title: ["Maximize", "Technology Value"],
      description: "Align investments with business priorities.",
      icon: "growth",
    },
  ],
  groups: [
    {
      id: "enterprise",
      title: "Enterprise Platforms",
      partners: [
        {
          id: "red-hat",
          name: "Red Hat",
          kind: "image",
          logo: "/images/home/product-reseller/Redhat.webp",
          href: "https://www.credly.com/badges/a89d1d73-c4e0-4395-92a2-e03641af5d6c/public_url",
          external: true,
        },
        {
          id: "suse",
          name: "SUSE",
          kind: "image",
          logo: "/images/home/product-reseller/Suse.webp",
          href: "/certificates/suse-partnership.pdf",
          external: true,
        },
        {
          id: "mirantis",
          name: "MIRANTIS",
          kind: "image",
          logo: "/images/home/product-reseller/Mirantis.webp",
        },
      ],
    },
    {
      id: "cloud",
      title: "Cloud Platforms",
      partners: [
        {
          id: "aws",
          name: "Amazon Web Services",
          kind: "aws",
        },
        {
          id: "azure",
          name: "Microsoft Azure",
          kind: "image",
          logo: "/images/home/product-reseller/Azure.webp",
        },
        {
          id: "google-cloud",
          name: "Google Cloud",
          kind: "image",
          logo: "/images/home/product-reseller/google-cloud.webp",
        },
      ],
    },
    {
      id: "infrastructure",
      title: "Infrastructure Partner",
      partners: [
        {
          id: "dell",
          name: "Dell Technologies",
          kind: "dell",
        },
        {
          id: "cncf",
          name: "Cloud Native",
          subtitle: "Computing Foundation",
          kind: "image",
          logo: "/images/home/product-reseller/cncf.webp",
        },
        // Temporarily hidden; uncomment to restore Lenovo.
        /*
        {
          "id": "lenovo",
          "name": "Lenovo",
          "kind": "lenovo"
        },
        */
      ],
    },
  ],
  distribution: {
    eyebrow: "Distribution Channel",
    title: "Partners",
    description: "Procurement & fulfilment network",
    partners: [
      {
        id: "ingram",
        name: "Ingram Micro",
        logo: "/images/home/technology-ecosystem/ingram-micro.svg",
      },
      {
        id: "redington",
        name: "Redington",
        logo: "/images/home/technology-ecosystem/redington.svg",
      },
      {
        id: "gem",
        name: "GeM — Government e Marketplace",
        logo: "/images/home/gem-logo.png",
        emblem: "/images/home/national-emblem.svg",
      },
    ],
  },
  cta: {
    label: "View More",
    href: "/partner",
  },
};
