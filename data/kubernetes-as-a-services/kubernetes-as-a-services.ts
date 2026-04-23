// cta section

import { BenefitsData, CtaData } from "@/app/types/kubernetes-as-a-services";

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
