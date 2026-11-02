import type { AboutSectionData } from "@/types/home/about";

export const aboutSectionData: AboutSectionData = {
  eyebrow: "About HawkStack",
  title: "From infrastructure to enterprise AI.",
  description: "We help enterprises, government and public sector organizations modernize infrastructure, platforms and operations.",
  supportingCopy: "Technology consulting, implementation and enablement—from strategy to operations.",
  action: { label: "Explore HawkStack", href: "/about-us" },
  capabilities: [
    { id: "foundation", title: "Build the foundation", description: "Compute, storage, networking and security for a dependable enterprise foundation.", icon: "foundation" },
    { id: "platforms", title: "Modernize your platforms", description: "Cloud, Kubernetes and virtualization to modernize enterprise platforms.", icon: "platforms" },
    { id: "ai", title: "Automate & enable AI", description: "Streamline operations with automation and enable enterprise AI adoption.", icon: "ai" },
    { id: "teams", title: "Empower your teams", description: "Enterprise training and enablement for confident, operations-ready teams.", icon: "teams" },
  ],
  technologiesLabel: "Technologies we work with",
  technologies: [
    { name: "Red Hat", logo: "/images/home/product-reseller/Redhat.webp" },
    { name: "SUSE", logo: "/images/home/product-reseller/Suse.webp" },
    { name: "Dell Technologies", logo: "/images/home/product-reseller/dell-logo.png" },
    { name: "AWS", logo: "/images/home/product-reseller/AWS.webp", wordmark: true },
    { name: "Azure", logo: "/images/home/product-reseller/Azure.webp" },
    { name: "Google Cloud", logo: "/images/home/product-reseller/google-cloud.webp" },
    { name: "MIRANTIS", logo: "/images/home/product-reseller/Mirantis.webp", wordmark: true },
    { name: "CNCF", logo: "/images/home/product-reseller/cncf.webp" },
    { name: "Nutanix", logo: "/images/home/product-reseller/nutanix-about.svg", wordmark: true },
  ],
};
