export type SuseServiceIcon =
  | "subscription"
  | "linux"
  | "kubernetes"
  | "virtualization"
  | "security"
  | "support";

export type SuseService = {
  icon: SuseServiceIcon;
  description: string;
};

export type SuseServicesContent = {
  eyebrow: string;
  heading: string;
  services: readonly SuseService[];
};
