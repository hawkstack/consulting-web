// Redhat hero Types file
export interface RedHatHeroData {
  title: string;
  highlightText?: string;
  subtitle: string;
  description: string;
  ctaPrimary: {
    text: string;
    link: string;
  };
  ctaSecondary: {
    text: string;
    link: string;
  };
  image: string;
}

// Redhat overview Types file
export interface RedHatOverviewData {
  badge: string;
  title: string;
  highlightTitle: string;
  description: string;
}

// RedHatWhyChooseSection Types file

export interface WhyChooseItem {
  id: number;
  text: string;
}

export interface WhyChooseCard {
  title: string;
  items: WhyChooseItem[];
  variant: "dark" | "red";
}

export interface WhyChooseSectionData {
  heading: string;
  subheading: string;
  highlightText?: string;
  cards: WhyChooseCard[];
}

// RedHatDeliverySection Types file
export interface FeatureItem {
  id: string;
  title: string;
  desc: string;
}

export interface FeatureHeader {
  title: string;
  tag?: string;
}

export type FeatureVariant = "default" | "darkCard";

export interface FeaturesData {
  header: FeatureHeader;
  items: FeatureItem[];

  variant?: FeatureVariant;
}

// RedHatCTASection Types file
export interface RedHatCTAData {
  heading: string;
  description: string;
  buttonText: string;
}

// RedHatClientsSection Types file
export interface ClientLogo {
  name: string;
  logo: string;
}

export interface RedHatClientsSectionData {
  heading: string;
  highlightText: string;
  description: string;
  clients: ClientLogo[];
}
