import { ComponentType, ReactNode } from "react";

// RedHatAIOverviewSection types
export interface RedHatAIOverviewCard {
  id: number;
  title: string;
  description: string;
}

export interface RedHatAIOverviewData {
  tag: string;
  heading: string;
  description: string;
  cards: RedHatAIOverviewCard[];
}

// RedHatAICapabilitiesSection types

export interface RedHatAICapabilitiesCard {
  id: number;
  title: string;
  description: string;
}

export interface RedHatAICapabilitiesData {
  cards: RedHatAICapabilitiesCard[];
}

// RedHatAICtaSection types

export interface RedHatAICtaButton {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

export interface RedHatAICtaData {
  tag: string;
  title: string;
  description: string;
  buttons: RedHatAICtaButton[];
}

// RedHatAIFoundationSection types

export interface RedHatAIFoundationCard {
  title: string;
  description: string;
  ctaText: string;
  href: string;
}

export interface RedHatAIFoundationSectionData {
  tag: string;
  title: string;
  description: string;
  cards: RedHatAIFoundationCard[];
}

// RedHatAIProductionSection types

export interface RedHatAIProductionCard {
  title: string;
  description: string;
}

export interface RedHatAIProductionSectionData {
  tag: string;
  title: string;
  description: string;
  cards: RedHatAIProductionCard[];
}

// RedHatAIStrategySection types
export interface RedHatAIStrategyCard {
  id: number;
  title: string;
  description: string;
  icon?: ComponentType;
}

export interface RedHatAIStrategySectionData {
  tag: string;
  heading: string;
  description: string;
  cards: RedHatAIStrategyCard[];
}

// RedHatAIHeroSection types
export interface RedHatAIHeroFeature {
  id: number;
  title: string;
  icon: ComponentType;
}

export interface RedHatAIHeroButton {
  id: number;
  label: string;
  link: string;
  variant: "primary" | "secondary";
}

export interface RedHatAIHeroData {
  heading: string;
  highlightedText: string;
  titleSuffix?: string;
  variant?: "default" | "linux";
  description: string;
  image: string;
  mobileImage: string;
  imageAlt: string;
  buttons: RedHatAIHeroButton[];
  features: RedHatAIHeroFeature[];
}
