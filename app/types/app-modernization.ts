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

export interface AppModernizationHeroContent {
  badge: string;
  title: string;
  description: string;
  buttons: AppModernizationButton[];
  form: AppModernizationFormContent;
}

export interface AppModernizationWhySectionContent {
  badge: string;
  title: string;
  description: string;
  gainsTitle: string;
  gains: string[];
}
