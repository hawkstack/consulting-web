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
