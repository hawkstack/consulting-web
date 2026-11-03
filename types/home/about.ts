export type AboutCapabilityIcon = "foundation" | "platforms" | "ai" | "teams";

export type AboutSectionCopy = {
  eyebrow: string;
  title: string;
  description: string;
  supportingCopy: string;
  actionLabel: string;
  technologiesLabel: string;
  capabilities: { title: string; description: string }[];
};

export type AboutSectionData = Omit<AboutSectionCopy, "actionLabel" | "capabilities"> & {
  action: { label: string; href: string };
  capabilities: { id: string; title: string; description: string; icon: AboutCapabilityIcon }[];
  technologies: { name: string; logo: string; wordmark?: boolean }[];
};
