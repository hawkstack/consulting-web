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
