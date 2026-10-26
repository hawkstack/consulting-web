import type { SuseHeroContent } from "../types/suseHero";

export const suseHeroContent: SuseHeroContent = {
  brand: "SUSE",
  brandTagline: "OPEN BY DESIGN",
  heading: ["Your infrastructure.", "Your choice.", "Modernize with SUSE."],
  description:
    "Build a resilient Linux foundation, simplify Kubernetes operations, and modernize virtualization—with HawkStack guiding every step.",
  actions: [
    {
      label: "Explore SUSE solutions",
      href: "",
      variant: "primary",
    },
    { label: "Talk to an expert", href: "/contact-us", variant: "secondary" },
  ],
  audience: "FOR ENTERPRISES, GOVERNMENT & PUBLIC SECTOR",
  nodes: [
    { id: "linux", label: "LINUX" },
    { id: "kubernetes", label: "KUBERNETES" },
    { id: "virtualization", label: "VIRTUALIZATION" },
  ],
  caption: ["One connected strategy.", "More room to move forward."],
};
