import type { ComponentType } from "react";

export interface AzureHeroButton {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

export interface AzureHeroFeature {
  label: string;
  icon: ComponentType;
}

export interface AzureHeroData {
  eyebrow: string;
  heading: string;
  highlightedHeading: string;
  headingSuffix: string;
  description: string;
  image: string;
  imageAlt: string;
  buttons: AzureHeroButton[];
  features: AzureHeroFeature[];
  trustedLabel: string;
  trustedCompanies: string[];
}

export interface AzureCompetencyCard {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}

export interface AzureCompetenciesData {
  title: string;
  mobileTitle: string;
  description: string;
  cards: AzureCompetencyCard[];
}
