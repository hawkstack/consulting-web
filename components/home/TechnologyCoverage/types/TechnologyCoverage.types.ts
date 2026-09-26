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
};
export type MembershipCard = {
  id: string;
  badge: string;
  name: string;
  description: string;
  logo?: string;
  logoText?: string;
};
