import type {
  DistributionChannelContent,
  InfrastructurePlatformsContent,
  DistributionPlatformsContent,
} from "../types/distributionChannel.types";

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

export const distributionPlatformsContent: DistributionPlatformsContent = {
  eyebrow: "01 / ENTERPRISE PLATFORMS",
  heading: ["Build the platform.", "Enable what comes next."],
  introduction:
    "Enterprise Linux, Kubernetes, automation and private cloud—connected with HawkStack’s architecture, integration and enablement expertise.",
  items: [
    {
      brand: "Red Hat",
      logo: "/images/home/product-reseller/Redhat.webp",
      category: "ENTERPRISE PLATFORMS & AUTOMATION",
      heading: "Build an open foundation for transformation.",
      description:
        "Red Hat brings together enterprise Linux, Kubernetes, virtualization, automation and AI platforms to run and modernize business-critical workloads.",
      technologies:
        "Red Hat Enterprise Linux · OpenShift · OpenShift Virtualization · Ansible Automation Platform · OpenShift AI",
      hawkstackHelps:
        "Platform architecture, implementation, integration, automation and enterprise training.",
      discussionLabel: "Discuss your Red Hat requirements",
      discussionHref: "/contact-us",
    },
    {
      brand: "SUSE",
      logo: "/images/home/product-reseller/Suse.webp",
      category: "ENTERPRISE LINUX & KUBERNETES",
      heading: "Bring choice and control to hybrid IT.",
      description:
        "SUSE combines enterprise Linux with Rancher-based Kubernetes management and virtualization to support applications across data centers, cloud and edge environments.",
      technologies:
        "SUSE Linux Enterprise · Rancher Prime · SUSE Virtualization",
      hawkstackHelps:
        "Linux and Kubernetes architecture, cluster integration, migration planning and team enablement.",
      discussionLabel: "Discuss your SUSE requirements",
      discussionHref: "/contact-us",
    },
    {
      brand: "Mirantis",
      logo: "/images/home/product-reseller/Mirantis.webp",
      category: "KUBERNETES & PRIVATE CLOUD",
      heading: "Make cloud native capability operational.",
      description:
        "Mirantis provides Kubernetes, container and OpenStack technologies for building and operating cloud native platforms and private cloud environments.",
      technologies:
        "Mirantis Kubernetes Engine · Mirantis OpenStack for Kubernetes · Mirantis Secure Registry",
      hawkstackHelps:
        "Platform consulting, integration and practical training to build deployment and operational capability.",
      discussionLabel: "Discuss your Mirantis requirements",
      discussionHref: "/contact-us",
    },
  ],
};

export const infrastructurePlatformsContent: InfrastructurePlatformsContent = {
  eyebrow: "02 / INFRASTRUCTURE & VIRTUALIZATION",
  heading: "A stronger foundation for every workload.",
  items: [
    {
      brand: "Dell Technologies",
      logo: "/images/home/digital-transformation/dell-technologies.webp",
      category: "COMPUTE, STORAGE & DATA PROTECTION",
      heading: "Power your enterprise. Prepare for AI.",
      description:
        "Dell Technologies provides the compute, storage and data protection foundations for enterprise applications, virtualization platforms and demanding AI workloads.",
      technologies: [
        "PowerEdge servers",
        "Enterprise storage",
        "Data protection",
        "AI infrastructure",
      ],
      hawkstackHelps: [
        "Infrastructure sizing",
        "Solution sourcing",
        "Deployment and integration with enterprise software platforms",
      ],
      discussionLabel: "Discuss your Dell Technologies requirements",
      discussionHref: "/contact-us",
    },
    {
      brand: "Nutanix",
      logo: "/images/home/product-reseller/nutanix-updated.svg",
      category: "VIRTUALIZATION & HYBRID CLOUD",
      heading: "Simplify the infrastructure behind your business.",
      description:
        "Nutanix brings compute, storage and virtualization together through hyperconverged infrastructure and a unified hybrid cloud platform.",
      technologies: [
        "Nutanix Cloud Infrastructure",
        "AHV Virtualization",
        "Prism management",
      ],
      hawkstackHelps: [
        "Infrastructure assessment",
        "Workload sizing",
        "Virtualization planning",
        "Migration validation and platform integration",
      ],
      discussionLabel: "Discuss your Nutanix requirements",
      discussionHref: "/contact-us",
    },
  ],
};
