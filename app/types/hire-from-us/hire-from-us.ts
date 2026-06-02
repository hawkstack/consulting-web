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
