export interface AutomationCapabilityItem {
  title: string;
  description: string;
  icon: "infrastructure" | "deployments" | "operations" | "platform";
  mobileOrder?: number;
  tabletOrder?: number;
  desktopOrder?: number;
}

export interface AutomationCapabilitiesSectionContent {
  badge?: string;
  title?: string;
  services: AutomationCapabilityItem[];
}
