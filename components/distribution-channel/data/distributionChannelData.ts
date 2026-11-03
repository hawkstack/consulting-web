import type { DistributionChannelContent } from "../types/distributionChannel.types";

export const distributionChannelContent: DistributionChannelContent = {
  eyebrow: "OUR TECHNOLOGY ECOSYSTEM",
  heading: ["Global technology.", "Delivered as one."],
  subheading: [
    "The platforms you trust.",
    "The expertise to bring them together.",
  ],
  description:
    "Accelerate digital transformation and AI adoption with HawkStack. We connect leading OEMs and cloud platforms with consulting, implementation and enterprise enablement—from your data center to your next innovation.",
  actions: [
    {
      label: "Explore our ecosystem",
      href: "/distribution-channel",
      variant: "primary",
    },
    {
      label: "Discuss your requirements",
      href: "/contact-us",
      variant: "secondary",
    },
  ],
  audience: "FOR ENTERPRISES · GOVERNMENT · PUBLIC SECTOR",
  cardEyebrow: "ONE CONNECTED APPROACH",
  cardHeading: ["Technology,", "working together."],
  steps: [
    {
      number: "01",
      title: "Strategy",
      description: "Align technology to your priorities.",
    },
    {
      number: "02",
      title: "Integration",
      description: "Connect platforms and operations.",
    },
    {
      number: "03",
      title: "Delivery",
      description: "Implement. Enable. Move forward.",
    },
  ],
  logoPanelHeading: "THE TECHNOLOGIES BEHIND YOUR NEXT MOVE",
  logos: [
    {
      name: "Red Hat",
      src: "/images/home/product-reseller/Redhat.webp",
      className: "h-[26px] w-[48px]",
    },
    {
      name: "SUSE",
      src: "/images/home/product-reseller/Suse.webp",
      className: "h-[24px] w-[45px]",
    },
    {
      name: "Nutanix",
      src: "/images/home/product-reseller/nutanix-updated.svg",
      className: "h-[22px] w-[60px]",
    },
    {
      name: "Dell",
      src: "/images/home/digital-transformation/dell-technologies.webp",
      className: "h-[25px] w-[42px]",
    },
    {
      name: "Mirantis",
      src: "/images/home/product-reseller/mirantis.webp",
      className: "h-[22px] w-[60px]",
    },
    {
      name: "AWS",
      src: "/images/home/product-reseller/AWS.webp",
      className: "h-[24px] w-[42px]",
    },
  ],
  outcomes: {
    eyebrow: "THE OUTCOME COMES FIRST",
    heading: "From technology choices to business outcomes.",
    items: [
      {
        number: "01",
        title: "AI-ready data centers",
        description:
          "Align compute, storage, networking and platforms with enterprise AI requirements.",
      },
      {
        number: "02",
        title: "Modern applications",
        description:
          "Connect Kubernetes, cloud and automation for more consistent delivery.",
      },
      {
        number: "03",
        title: "Virtualization that fits",
        description:
          "Assess workloads and plan migration around business continuity.",
      },
      {
        number: "04",
        title: "Stronger operations",
        description:
          "Combine resilient architecture, security and enterprise enablement.",
      },
    ],
  },
};
