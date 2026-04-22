export interface ConsultingServiceItem {
  title: string;
  description: string;
  bullets: string[];
  icon: "advisory" | "optimization" | "transformation" | "implementation";
  mobileOrder?: number;
  tabletOrder?: number;
  desktopOrder?: number;
}

export interface ConsultingServicesWhatWeDoSectionContent {
  badge: string;
  title: string;
  description: string;
  services: ConsultingServiceItem[];
}

export interface ConsultingClientOutcomeItem {
  text: string;
  mobileOrder?: number;
  tabletOrder?: number;
  desktopOrder?: number;
}

export interface ConsultingServicesHowWeHelpSectionContent {
  badge: string;
  title: string;
  description: string;
  cardTitle: string;
  cardDescription: string;
  outcomes: ConsultingClientOutcomeItem[];
}

export interface ConsultingEngagementStepItem {
  stepLabel: string;
  title: string;
  description: string;
  mobileOrder?: number;
  tabletOrder?: number;
  desktopOrder?: number;
}

export interface ConsultingServicesEngagementModelSectionContent {
  badge: string;
  title: string;
  description: string;
  steps: ConsultingEngagementStepItem[];
}
