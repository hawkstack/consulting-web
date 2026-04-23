// cta section

import {
  BenefitsData,
  CtaData,
  FeaturesData,
  ProblemData,
  UseCasesData,
} from "@/app/types/kubernetes-as-a-services";

export const ctaData: CtaData = {
  tag: "GET STARTED",
  title: "Ready to simplify Kubernetes operations for your team?",
  description:
    "Partner with HawkStack Consulting to build a Kubernetes platform that is secure, scalable, and ready for production.",
  buttons: [
    {
      label: "Contact Us",
      variant: "primary",
      link: "/contact",
    },
    {
      label: "Schedule Consultation",
      variant: "secondary",
      link: "/schedule",
    },
  ],
};

// benefits section

export const benefitsData: BenefitsData = {
  subtitle: "WHY HAWKSTACK",
  title:
    "We help teams adopt Kubernetes with clarity, control, and confidence.",
  items: [
    {
      id: 1,
      text: "Expertise in Kubernetes architecture, container platforms, and cloud operations.",
    },
    {
      id: 2,
      text: "End-to-end support across planning, implementation, automation, and ongoing operations.",
    },
    {
      id: 3,
      text: "Consulting designed to reduce complexity while improving reliability and delivery speed.",
    },
  ],
};

// use cases section

export const useCasesData: UseCasesData = {
  header: {
    tag: "USE CASES",
    title: "Designed for teams building and scaling cloud-native applications.",
    description:
      "KaaS supports engineering teams that need reliable Kubernetes infrastructure without diverting valuable time into platform maintenance and operational firefighting.",
  },
  items: [
    {
      id: 1,
      title: "Managed Kubernetes platforms for growing teams",
    },
    {
      id: 2,
      title: "Application modernization and container migration",
    },
    {
      id: 3,
      title: "Multi-environment deployments for dev, staging, and production",
    },
    {
      id: 4,
      title: "Platform engineering support for internal teams",
    },
    {
      id: 5,
      title: "High-availability infrastructure for cloud-native apps",
    },
    {
      id: 6,
      title: "Secure scaling for enterprise workloads",
    },
  ],
};

// features section

export const howItWorksData: FeaturesData = {
  header: {
    tag: "HOW IT WORKS",
    title: "From infrastructure planning to platform operations.",
  },
  items: [
    {
      id: "01",
      title: "Assess",
      desc: "We evaluate your workloads, infrastructure, and operational requirements.",
    },
    {
      id: "02",
      title: "Architect",
      desc: "We design a Kubernetes platform aligned to performance, security, and scalability goals.",
    },
    {
      id: "03",
      title: "Deploy",
      desc: "We build and configure your managed Kubernetes environment with the right tooling and guardrails.",
    },
    {
      id: "04",
      title: "Operate",
      desc: "We support continuous monitoring, upgrades, scaling, and platform reliability over time.",
    },
  ],
};

// solutions section

import { SolutionData } from "@/app/types/kubernetes-as-a-services";

export const solutionData: SolutionData = {
  header: {
    tag: "THE SOLUTION",
    title:
      "KaaS by HawkStack gives your team a production-ready Kubernetes foundation without the burden of managing everything alone.",
    description:
      "We help organizations adopt Kubernetes with the right architecture, automation, governance, and operational support. From initial design to ongoing optimization, HawkStack provides a managed path to reliable, scalable cloud-native infrastructure.",
  },
  items: [
    {
      title: "Managed Kubernetes Operations",
      desc: "Provision, operate, and optimize production ready Kubernetes clusters without the operational overhead.",
    },
    {
      title: "Secure by Design",
      desc: "Built with security best practices, policy controls, workload isolation, and continuous monitoring from day one.",
    },
    {
      title: "Scalable Cloud Infrastructure",
      desc: "Run containerized workloads across environments with reliability, observability, and predictable performance.",
    },
  ],
};

// problem section

export const problemData: ProblemData = {
  header: {
    tag: "THE PROBLEM",
    title: "Kubernetes is powerful, but operating it well is hard.",
    description:
      "Many teams want the flexibility of Kubernetes but struggle with cluster setup, upgrades, observability, security policies, and day-to-day operations. The result is delayed releases, fragile infrastructure, and growing platform overhead.",
  },
  items: [
    { text: "Complex cluster operations and maintenance" },
    { text: "Security and compliance gaps in cloud-native environments" },
    { text: "Scaling challenges across workloads and environments" },
    { text: "High internal overhead for platform engineering teams" },
  ],
};
