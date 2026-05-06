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
