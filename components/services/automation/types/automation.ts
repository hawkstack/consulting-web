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

export interface AutomationOfferSectionContent {
  badge: string;
  title: string;
  description: string;
  fitTitle: string;
  fitPoints: string[];
  offerings: string[];
}

export interface AutomationProcessStepItem {
  number: string;
  title: string;
  description: string;
}

export interface AutomationProcessSectionContent {
  steps: AutomationProcessStepItem[];
}

export interface AutomationWhyHawkstackFormContent {
  title: string;
  description: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  submitLabel: string;
  helperText: string;
  successMessage: string;
  errorMessage: string;
  source: string;
}

export interface AutomationWhyHawkstackSectionContent {
  badge: string;
  title: string;
  description: string;
  form: AutomationWhyHawkstackFormContent;
}
