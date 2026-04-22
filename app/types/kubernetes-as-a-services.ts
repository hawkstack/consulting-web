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
