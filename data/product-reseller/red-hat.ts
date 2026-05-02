// Redhat Hero data file

import {
  RedHatClientsSectionData,
  RedHatCTAData,
  RedHatHeroData,
  RedHatOverviewData,
  WhyChooseSectionData,
} from "@/app/types/product-reseller/red-hat";

export const redHatHeroData: RedHatHeroData = {
  title: "Your business runs",
  highlightText: "everywhere.",
  subtitle: "Your tech should too.",
  description:
    "According to Red Hat, nearly 50% of the Fortune 100 top companies and over 30% of the Fortune Global 500 use Red Hat OpenShift.",
  ctaPrimary: {
    text: "Explore Red Hat products",
    link: "#",
  },
  ctaSecondary: {
    text: "Contact an expert",
    link: "#",
  },
  image: "/images/product-seller/redhat-hero.webp", // your figma image
};

// Redhat overview data file

export const redhatOverviewData: RedHatOverviewData = {
  badge: "OUR SOLUTIONS",
  title: "Build on a reliable foundation.",
  highlightTitle: "Take your apps anywhere.",
  description:
    "Power your business with the industry’s leading enterprise open source solutions built for security, performance and flexibility.",
};

// RedHatWhyChooseSection data file

export const whyChooseData: WhyChooseSectionData = {
  heading: "Why Leading Enterprises Choose",
  highlightText: "HawkStack",
  subheading:
    "Expert-led Red Hat solutions designed to accelerate your cloud transformation and operational excellence.",

  cards: [
    {
      title: "Why enterprises choose HawkStack",
      variant: "dark",
      items: [
        {
          id: 1,
          text: "Consulting-first approach: we assess, design, implement, and support with a practical roadmap.",
        },
        {
          id: 2,
          text: "Deep focus on OpenShift, Kubernetes, virtualization, automation, and hybrid cloud infrastructure.",
        },
        {
          id: 3,
          text: "End-to-end support from pilot environments to production-grade enterprise rollouts.",
        },
        {
          id: 4,
          text: "Clean migration planning for teams moving from legacy infrastructure to cloud-native platforms.",
        },
      ],
    },
    {
      title: "Red Hat services we deliver",
      variant: "red",
      items: [
        {
          id: 1,
          text: "Red Hat subscription advisory and solution positioning",
        },
        {
          id: 2,
          text: "OpenShift architecture, installation, upgrades, and operations",
        },
        {
          id: 3,
          text: "Ansible automation strategy, playbooks, and platform implementation",
        },
        {
          id: 4,
          text: "Linux server implementation, security baseline, and lifecycle support",
        },
        {
          id: 5,
          text: "Virtualization migration readiness and modernization planning",
        },
      ],
    },
  ],
};

// RedHatDeliverySection data file

export const deliveryApproachData = {
  header: {
    title: "Our delivery approach",
  },
  idColor: "#FF4B4B",
  variant: "darkCard",
  items: [
    {
      id: "01",
      title: "Assess",
      desc: "Review current infrastructure, workloads, business goals, and migration readiness.",
    },
    {
      id: "02",
      title: "Design",
      desc: "Create a secure, scalable  architecture aligned with Red Hat best practices.",
    },
    {
      id: "03",
      title: "Implement",
      desc: "Deploy platforms, automate workflows, migrate workloads, and validate performance.",
    },
    {
      id: "04",
      title: "Support",
      desc: "Provide ongoing optimization, troubleshooting, upgrades, and team enablement.",
    },
  ],
};

// RedHatCTASection data file

export const redHatCTAData: RedHatCTAData = {
  heading: "Ready to modernize with HawkStack?",
  description:
    "Talk to HawkStack Technologies for Red Hat consulting, implementation, migration, support, and enterprise platform enablement.",
  buttonText: "Contact HawkStack →",
};

// RedHatClientsSection data file

export const redHatClientsData: RedHatClientsSectionData = {
  heading: "The world’s leading enterprises run on",
  highlightText: "Red Hat",
  description:
    "Trusted by the world’s most demanding enterprises to power critical infrastructure.",

  clients: [
    { name: "IBM", logo: "/images/company-logos/ibm.webp" },
    { name: "Accenture", logo: "/images/company-logos/accenture.webp" },
    { name: "Cognizant", logo: "/images/company-logos/cognizant.webp" },
    { name: "DXC", logo: "/images/company-logos/dxc.webp" },
    { name: "Capgemini", logo: "/images/company-logos/capgemini.webp" },
    { name: "Wipro", logo: "/images/company-logos/wipro.webp" },
    { name: "TCS", logo: "/images/company-logos/tcs.webp" },
    { name: "Infosys", logo: "/images/company-logos/infosys.webp" },
    { name: "Goldman Sachs", logo: "/images/company-logos/goldman.webp" },

    { name: "Morgan Stanley", logo: "/images/company-logos/morgan.webp" },
    { name: "Bank of America", logo: "/images/company-logos/boa.webp" },
    { name: "Microsoft", logo: "/images/company-logos/microsoft.webp" },
    { name: "SAP", logo: "/images/company-logos/sap.webp" },
    { name: "HSBC", logo: "/images/company-logos/hsbc.webp" },
    { name: "AT&T", logo: "/images/company-logos/att.webp" },
    { name: "Verizon", logo: "/images/company-logos/verizon.webp" },
    { name: "Vodafone", logo: "/images/company-logos/vodafone.webp" },
    { name: "Telefonica", logo: "/images/company-logos/telefonica.webp" },

    { name: "Orange", logo: "/images/company-logos/orange.webp" },
    { name: "Walmart", logo: "/images/company-logos/walmart.webp" },
    { name: "Target", logo: "/images/company-logos/target.webp" },
    { name: "Alibaba", logo: "/images/company-logos/alibaba.webp" },
    { name: "eBay", logo: "/images/company-logos/ebay.webp" },
    { name: "Bosch", logo: "/images/company-logos/bosch.webp" },
    { name: "PayPal", logo: "/images/company-logos/paypal.webp" },
    { name: "Nokia", logo: "/images/company-logos/nokia.webp" },
    { name: "Siemens", logo: "/images/company-logos/siemens.webp" },
  ],
};
