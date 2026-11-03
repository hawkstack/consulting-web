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
