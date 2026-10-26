export type SuseIllustrationNode = {
  id: "linux" | "kubernetes" | "virtualization";
  label: string;
};

export type SuseHeroContent = {
  heading: [string, string, string];
  description: string;
  brand: string;
  brandTagline: string;
  actions: { label: string; href: string; variant: "primary" | "secondary" }[];
  audience: string;
  nodes: SuseIllustrationNode[];
  caption: [string, string];
};
