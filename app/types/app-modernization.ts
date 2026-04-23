export interface AppModernizationButton {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

export interface AppModernizationFormField {
  name: "firstName" | "lastName" | "email" | "phone" | "message";
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel" | "textarea";
  required: boolean;
}

export interface AppModernizationFormContent {
  title: string;
  submitLabel: string;
  successMessage: string;
  errorMessage: string;
  source: string;
  fields: AppModernizationFormField[];
}

export interface StatBadge {
  id: number;
  value?: string;
  title?: string;
  description: string;
}

export interface AppModernizationHeroContent {
  heroBgClass?: string;
  subTitle?: string;
  badge?: string;
  title: string;
  highlightedLastLine?: string;
  description: string;
  buttons: AppModernizationButton[];
  h1MaxWidth?: string;
  titleMarginTop?: string;
  descriptionWidth?: string;
  tags?: string[];
  statBadges?: StatBadge[];
  form: AppModernizationFormContent;
}

export interface AppModernizationCapabilitiesSectionContent {
  badge?: string;
  title: string;
  services: AppModernizationCapabilityItem[];
}

export interface AppModernizationCapabilityItem {
  title: string;
  description: string;
  mobileOrder?: number;
  tabletOrder?: number;
  desktopOrder?: number;
}

export interface AppModernizationWhySectionContent {
  badge: string;
  title: string;
  description: string;
  gainsTitle: string;
  gains: string[];
}

export interface AppModernizationProcessItem {
  stepNumber: string;
  title: string;
  description: string;
  mobileOrder?: number;
  tabletOrder?: number;
  desktopOrder?: number;
}

export interface AppModernizationProcessSectionContent {
  badge: string;
  title: string;
  steps: AppModernizationProcessItem[];
}

export interface AppModernizationWhyHawkStackSectionContent {
  badge: string;
  title: string;
  description: string;
  points: string[];
}

export interface AppModernizationCtaSectionContent {
  badge: string;
  title: string;
  description: string;
  buttons: AppModernizationButton[];
}
