export type TechnologyJourneyItem = {
  id: string;
  label: string;
  icon: "consulting" | "architecture" | "integration" | "training";
};
export type CoverageItem = {
  id: string;
  title: string;
  description: string;
  icon: "platform" | "cloud" | "infrastructure";
};
export type TechnologyPartner = {
  id: string;
  name: string;
  logo: string;
  href?: string;
  external?: boolean;
  mark?: string;
};
export type TechnologyPartnerGroup = {
  id: string;
  title: string;
  partners: TechnologyPartner[];
};
export type MembershipCard = {
  id: string;
  badge: string;
  name: string;
  description: string;
  logo?: string;
  logoText?: string;
  tone: "blue" | "purple";
};

export type EcosystemBenefit = {
  id: string;
  title: [string, string];
  description: string;
  icon: "platform" | "shield" | "growth";
};

export type EcosystemPartner = {
  id: string;
  name: string;
  kind: "image" | "aws" | "dell" | "lenovo";
  logo?: string;
  subtitle?: string;
  href?: string;
  external?: boolean;
};

export type TechnologyEcosystemData = {
  title: string;
  highlight: string;
  description: string;
  benefits: EcosystemBenefit[];
  groups: { id: string; title: string; partners: EcosystemPartner[] }[];
  distribution: {
    eyebrow: string;
    title: string;
    description: string;
    partners: { id: string; name: string; logo: string; emblem?: string }[];
  };
  cta: { label: string; href: string };
};

export type TechnologyEcosystemCopy = {
  title: string;
  highlight: string;
  description: string;
  benefits: Record<string, { title: [string, string]; description: string }>;
  groups: Record<string, string>;
  distribution: {
    eyebrow: string;
    title: string;
    description: string;
    gemName: string;
  };
  ctaLabel: string;
};
