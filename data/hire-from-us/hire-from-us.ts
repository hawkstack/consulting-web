// Hero Section
import {
  CTASectionData,
  HeroSectionData,
  RiskReductionSectionData,
  SolutionsShowcaseSectionData,
} from "@/app/types/hire-from-us/hire-from-us";

export const heroSectionData: HeroSectionData = {
  title: "Accelerate Your Infrastructure Team",
  description:
    "Hire certified, industry ready open-source and cloud engineers from Hawkstack Technologies. We provide deployment-ready professionals who can contribute from day one without long onboarding cycles.",
  buttonText: "Connect to Experts",
  image: "/images/hire-from-us/hero-illustration.webp",
};

// CTA Section

export const ctaSectionData: CTASectionData = {
  title: "Looking for your next infrastructure superstar?",
  description:
    "Stop filtering keyword-stuffed resumes. Start hiring vetted open-source practitioners, DevOps engineers, cloud architects and infrastructure specialists ready to contribute from day one.",
  email: "hr@hawkstack.com",
  website: "www.hawkstack.com",
  buttonText: "Contact Us",
};

// Showcase Section

export const solutionsShowcaseData: SolutionsShowcaseSectionData = {
  tag: "Why Companies Choose Us",

  title: "One stop solution for infrastructure hiring needs",

  description:
    "Traditional hiring often brings certification-level knowledge. Hawkstack talent is trained to troubleshoot, automate, collaborate and work inside production-like environments.",

  solutions: [
    {
      id: 1,
      icon: "/icons/hire-from-us/shield.svg",
      title: "Production Ready Training",
      description:
        "Engineers are trained to design, deploy, automate, troubleshoot and optimize infrastructure systems.",
    },
    {
      id: 2,
      icon: "/icons/hire-from-us/lab.svg",
      title: "Hands-On Validation",
      description:
        "Candidates solve production failures, Kubernetes issues, outages, storage failures and migration challenges.",
    },
    {
      id: 3,
      icon: "/icons/hire-from-us/cloud.svg",
      title: "Cloud-Native Expertise",
      description:
        "Talent is prepared for DevOps, containers, GitOps, IaC, CI/CD and hybrid-cloud operations.",
    },
    {
      id: 4,
      icon: "/icons/hire-from-us/building.svg",
      title: "Enterprise Platforms",
      description:
        "RHEL, OpenShift, OpenStack, Ansible, Kubernetes, Docker, Ceph, KVM and CI/CD pipelines.",
    },
    {
      id: 5,
      icon: "/icons/hire-from-us/bolt.svg",
      title: "Agile Readiness",
      description:
        "Professionals are evaluated for communication, documentation, coordination and incident reporting.",
    },
    {
      id: 6,
      icon: "/icons/hire-from-us/dollar.svg",
      title: "Reduce Hiring Cost",
      description:
        "Access curated profiles and reduce time spent on irrelevant resumes and retraining.",
    },
  ],
};

// Risk Reduction Section

export const riskReductionSectionData: RiskReductionSectionData = {
  badge: "BUSINESS IMPACT",
  title: "Reduce hiring risk and accelerate delivery",
  cards: [
    {
      title: "The risks we help avoid",
      variant: "light",
      items: [
        "Delayed deployments",
        "Security vulnerabilities",
        "Downtime risks",
        "Operational inefficiencies",
        "Project slowdowns",
      ],
    },
    {
      title: "What your team gains",
      variant: "dark",
      items: [
        "Reduced onboarding time",
        "Improved deployment speed",
        "Higher operational reliability",
        "Faster cloud transformation",
        "Better engineering productivity",
      ],
    },
  ],
};
