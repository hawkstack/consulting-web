// cta section
export interface CtaButton {
  label: string;
  variant: "primary" | "secondary";
  link?: string;
}

export interface CtaData {
  tag: string;
  title: string;
  description: string;
  buttons: CtaButton[];
}

// benefits section

export interface BenefitItem {
  id: number;
  text: string;
}

export interface BenefitsData {
  subtitle: string;
  title: string;
  items: BenefitItem[];
}
