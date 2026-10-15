export type SolutionSlug =
  | "data-center-solutions"
  | "application-modernization"
  | "enterprise-infrastructure-security"
  | "virtualization-migration"
  | "enterprise-technology-consulting"
  | "enterprise-skills-enablement";

export type LocalizedText = {
  namespace: string;
  key: string;
};

export type SolutionSectionConfig = {
  id: string;
  order: number;
  enabled?: boolean;
  data?: unknown;
};

export type SolutionHeroConfig = {
  eyebrow: string;
  heading: string;
  highlightedHeading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export type SolutionExpertiseIcon =
  | "people"
  | "server"
  | "cloud"
  | "chip"
  | "shield"
  | "book"
  | "certificate";

export type SolutionExpertiseContent = {
  heading: string;
  description: string;
  cards: {
    id: string;
    title: string;
    description: string;
    icon: SolutionExpertiseIcon;
  }[];
};

export type SolutionDeliveryContent = {
  heading: string;
  description: string;
  steps: {
    number: string;
    title: string;
    description: string;
  }[];
};

export type SolutionBusinessEnablementContent = {
  eyebrow: string;
  heading: string;
  description: string;
  takeaway: string;
  cards: {
    number: string;
    title: string;
    description: string;
    accent: "blue" | "cyan" | "green";
  }[];
};

export type SolutionPageData = {
  id: SolutionSlug;
  slug: SolutionSlug;
  title: LocalizedText;
  description: LocalizedText;
  hero: SolutionHeroConfig;
  expertise: SolutionExpertiseContent;
  deliveryApproach: SolutionDeliveryContent;
  businessEnablement: SolutionBusinessEnablementContent;
  sections: SolutionSectionConfig[];
  seo: { title: LocalizedText; description: LocalizedText };
};

export type SolutionPageConfig = SolutionPageData;
