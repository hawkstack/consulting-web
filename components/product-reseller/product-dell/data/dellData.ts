import type {
  DellHeroData,
  DellProductPortfolioData,
} from "../types/dell.types";

export const dellHeroData: DellHeroData = {
  brand: { first: "DELL", second: "Technologies" },
  eyebrow: "ENTERPRISE INFRASTRUCTURE · POWERED BY EXPERTISE",
  heading: {
    lines: ["Your ambitions need", "a powerful foundation."],
    highlight: "Build it with Dell.",
  },
  description:
    "Power business-critical applications, modern virtualization, and enterprise AI with infrastructure designed around your workloads.",
  primaryCta: { label: "Explore Dell solutions", href: "" },
  secondaryCta: { label: "Talk to an expert", href: "/contact-us" },
  footerLabel: "FOR ENTERPRISES, GOVERNMENT & PUBLIC SECTOR",
  imagePath: "/images/product-dell/dell-hero-illustration.svg",
  imageAlt: "",
  imageTopLabel: "YOUR INFRASTRUCTURE. CONNECTED.",
  imageHeading: "One strategy. Every workload.",
  imageCaption: "Data center  /  Cloud  /  Edge",
};

const contactHref = "/contact-us";

export const dellProductPortfolioData: DellProductPortfolioData = {
  eyebrow: "THE DELL PORTFOLIO",
  heading: "The right foundation for what’s next.",
  headerDescription: [
    "Choose the building blocks for your business.",
    "We help connect them into one practical solution.",
  ],
  featured: {
    id: "poweredge",
    category: "01 / COMPUTE",
    title: "Dell PowerEdge Servers",
    description:
      "A foundation for business applications, virtualization, Kubernetes and demanding AI workloads.",
    linkLabel: "Explore compute solutions",
    href: contactHref,
    imagePath: "/images/product-dell/dell-poweredge-servers.svg",
    imageAlt: "Dell PowerEdge rack servers",
  },
  products: [
    {
      id: "powerstore",
      category: "02 / STORAGE",
      title: "Dell PowerStore",
      description:
        "Support application and database workloads with adaptable enterprise storage.",
      linkLabel: "Discuss solution",
      href: contactHref,
    },
    {
      id: "powerscale",
      category: "03 / UNSTRUCTURED DATA",
      title: "Dell PowerScale",
      description:
        "Bring growing file data together for analytics, AI and enterprise content.",
      linkLabel: "Discuss solution",
      href: contactHref,
    },
    {
      id: "powerprotect",
      category: "04 / DATA PROTECTION",
      title: "Dell PowerProtect",
      description:
        "Strengthen backup and recovery across your application landscape.",
      linkLabel: "Discuss solution",
      href: contactHref,
    },
    {
      id: "networking",
      category: "05 / CONNECTIVITY",
      title: "Dell Networking",
      description:
        "Connect servers, storage and applications with a consistent network foundation.",
      linkLabel: "Discuss solution",
      href: contactHref,
    },
  ],
  apex: {
    category: "06 / DELL APEX",
    heading: "Infrastructure on your terms.",
    description: "Explore consumption-based infrastructure options.",
    linkLabel: "Explore",
    href: contactHref,
  },
};
