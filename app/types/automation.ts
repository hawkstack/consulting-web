export interface AutomationButton {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

export interface AutomationFormField {
  name: "firstName" | "lastName" | "email" | "phone" | "message";
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel" | "textarea";
  required: boolean;
}

export interface AutomationFormContent {
  title: string;
  submitLabel: string;
  successMessage: string;
  errorMessage: string;
  source: string;
  fields: AutomationFormField[];
}

export interface AutomationHeroContent {
  badge: string;
  title: string;
  description: string;
  buttons: AutomationButton[];
  form: AutomationFormContent;
}

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

export interface AutomationWhySectionContent {
  badge: string;
  title: string;
  description: string;
  gainsTitle: string;
  gains: string[];
}

export interface AutomationProcessItem {
  stepNumber: string;
  title: string;
  description: string;
  mobileOrder?: number;
  tabletOrder?: number;
  desktopOrder?: number;
}

export interface AutomationProcessSectionContent {
  badge: string;
  title: string;
  steps: AutomationProcessItem[];
}

export interface AutomationWhyHawkStackSectionContent {
  badge: string;
  title: string;
  description: string;
  points: string[];
}

export interface AutomationCtaSectionContent {
  badge: string;
  title: string;
  description: string;
  buttons: AutomationButton[];
}
