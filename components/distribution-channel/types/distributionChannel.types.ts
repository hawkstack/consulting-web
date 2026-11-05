export interface TechnologyLogo {
  name: string;
  src?: string;
  className?: string;
}

export interface DistributionChannelContent {
  eyebrow: string;
  heading: [string, string];
  subheading: [string, string];
  description: string;
  actions: { label: string; href: string; variant: "primary" | "secondary" }[];
  audience: string;
  cardEyebrow: string;
  cardHeading: [string, string];
  steps: { number: string; title: string; description: string }[];
  logoPanelHeading: string;
  logos: TechnologyLogo[];
  outcomes: DistributionOutcomesContent;
}

export interface DistributionOutcome {
  number: string;
  title: string;
  description: string;
}

export interface DistributionOutcomesContent {
  eyebrow: string;
  heading: string;
  items: DistributionOutcome[];
}

export interface DistributionPlatform {
  brand: string;
  logo: string;
  category: string;
  heading: string;
  description: string;
  technologies: string;
  hawkstackHelps: string;
  discussionLabel: string;
  discussionHref: string;
}

export interface DistributionPlatformsContent {
  eyebrow: string;
  heading: [string, string];
  introduction: string;
  items: DistributionPlatform[];
}

export interface InfrastructurePlatform {
  brand: string;
  logo: string;
  category: string;
  heading: string;
  description: string;
  technologies: string[];
  hawkstackHelps: string[];
  discussionLabel: string;
  discussionHref: string;
}

export interface InfrastructurePlatformsContent {
  eyebrow: string;
  heading: string;
  items: InfrastructurePlatform[];
}

export interface CloudPlatformsContent {
  eyebrow: string;
  heading: [string, string];
  introduction: string;
  items: InfrastructurePlatform[];
}

export interface CloudEcosystemContent {
  eyebrow: string;
  heading: string;
  description: string;
  supportingText: string[];
  logo: string;
}
