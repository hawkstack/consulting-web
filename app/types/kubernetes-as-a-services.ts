// cta section
export interface CtaButton {
  label: string;
  variant: "primary" | "secondary";
  link?: string;
}

export interface CtaData {
  tag: string;
  title: string;
  description: string;
  buttons: CtaButton[];
}

// benefits section
export interface BenefitItem {
  id: number;
  text: string;
}

export interface BenefitsData {
  subtitle: string;
  title: string;
  items: BenefitItem[];
}

// use cases section
export interface UseCaseItem {
  id: number;
  title: string;
}

export interface UseCasesHeader {
  tag: string;
  title: string;
  description: string;
}

export interface UseCasesData {
  header: UseCasesHeader;
  items: UseCaseItem[];
}

// features section
export interface FeatureItem {
  id: string;
  title: string;
  desc: string;
}

export interface FeaturesData {
  header: {
    tag: string;
    title: string;
  };
  items: FeatureItem[];
}

// solutions section

export interface SolutionHeader {
  tag: string;
  title: string;
  description: string;
}

export interface SolutionItem {
  title: string;
  desc: string;
}

export interface SolutionData {
  header: SolutionHeader;
  items: SolutionItem[];
}

// problem section
export interface ProblemHeader {
  tag: string;
  title: string;
  description: string;
}

export interface ProblemItem {
  text: string;
}

export interface ProblemData {
  header: ProblemHeader;
  items: ProblemItem[];
}
