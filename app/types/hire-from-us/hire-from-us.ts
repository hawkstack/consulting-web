// Hero Section
export interface HeroSectionData {
  title: string;
  description: string;
  buttonText: string;
  image: string;
}

// CTA Section
export interface CTASectionData {
  title: string;
  description: string;
  email: string;
  website: string;
  buttonText: string;
}

// Showcase Section
export interface SolutionCard {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface SolutionsShowcaseSectionData {
  tag: string;
  title: string;
  description: string;
  solutions: SolutionCard[];
}

// Risk Reduction Section
export interface RiskCard {
  title: string;
  items: string[];
  variant: "light" | "dark";
}

export interface RiskReductionSectionData {
  badge: string;
  title: string;
  cards: RiskCard[];
}

// stats and benefits section
export interface HiringStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface StatsAndBenefitsSectionData {
  badge: string;
  statNumber: string;
  title: string;
  description: string;
  steps: HiringStep[];
}
