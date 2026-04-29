// Redhat Hero data file

import {
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
