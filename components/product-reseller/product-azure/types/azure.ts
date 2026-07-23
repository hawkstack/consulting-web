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

export interface AzureEngineeringCapability {
  title: string;
  description: string;
}

export interface AzureEngineeringData {
  title: string;
  mobileTitle: string;
  capabilities: AzureEngineeringCapability[];
  image: string;
  imageAlt: string;
}

export interface AzureSkillsAccelerationPillar {
  step: string;
  title: string;
  desktopTitle: string;
  description: string;
}

export interface AzureSkillsAccelerationData {
  title: string;
  description: string;
  pillars: AzureSkillsAccelerationPillar[];
}

export interface AzureBlueprintOperationalStep {
  step: string;
  title: string;
  desktopDescription: string;
  mobileDescription: string;
  icon: ComponentType<{ className?: string }>;
}

export interface AzureBlueprintOperationalData {
  title: string;
  steps: AzureBlueprintOperationalStep[];
}

export interface AzureCtaAction {
  label: string;
  href: string;
}

export interface AzureCtaData {
  title: string;
  description: string;
  primaryAction: AzureCtaAction;
  secondaryAction: AzureCtaAction;
  mobileTitleStart: string;
  mobileTitleHighlight: string;
  mobileDescription: string;
  mobileAction: AzureCtaAction;
}
