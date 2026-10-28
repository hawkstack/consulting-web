import type { SuseServicesContent } from "../types/suseServices";

export const suseServicesContent = {
  eyebrow: "From advisory to operations",
  heading: "SUSE Services We Deliver",
  services: [
    {
      icon: "subscription",
      description: "Subscription advisory, procurement, and renewal planning.",
    },
    {
      icon: "linux",
      description:
        "Enterprise Linux deployment, hardening, and lifecycle management.",
    },
    {
      icon: "kubernetes",
      description:
        "Rancher Prime architecture, Kubernetes deployment, and cluster operations.",
    },
    {
      icon: "virtualization",
      description:
        "Virtualization assessment, proof of concept, and migration planning.",
    },
    {
      icon: "security",
      description: "Container security and observability integration.",
    },
    {
      icon: "support",
      description:
        "Platform upgrades, troubleshooting, and technical enablement.",
    },
  ],
} as const satisfies SuseServicesContent;
