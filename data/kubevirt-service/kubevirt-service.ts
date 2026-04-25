import type { KubevirtServicePageData } from "@/app/types/kubevirt-service";

export const kubevirtServicePageData: KubevirtServicePageData = {
  heroSectionData: {
    title:
      "Run Virtual Machines on Kubernetes with KubeVirt Expertise from HawkStack",
    description:
      "Modernize virtualization with KubeVirt-powered infrastructure, migration support, platform engineering, and production-ready operations for hybrid and cloud-native environments.",
    buttons: [
      {
        label: "Talk to Our Experts",
        href: "#app-modernization-form",
        variant: "primary",
      },
      {
        label: "Explore KubeVirtStack \u2192",
        href: "/get-started",
        variant: "secondary",
      },
    ],
    h1MaxWidth: "max-w-[575px]",
    titleMarginTop: "mt-0",
    descriptionWidth: "max-w-[700px]",
    form: {
      title: "GET IN TOUCH",
      submitLabel: "Send Message",
      successMessage: "Message sent successfully.",
      errorMessage: "Something went wrong. Please try again.",
      source: "kubevirt-service",
      fields: [
        {
          name: "firstName",
          label: "First Name",
          placeholder: "Enter first name",
          type: "text",
          required: true,
        },
        {
          name: "lastName",
          label: "Last Name",
          placeholder: "Enter last name",
          type: "text",
          required: true,
        },
        {
          name: "email",
          label: "Email",
          placeholder: "Enter your email",
          type: "email",
          required: true,
        },
        {
          name: "phone",
          label: "Mobile Number",
          placeholder: "Enter your mobile number",
          type: "tel",
          required: true,
        },
        {
          name: "message",
          label: "Your Message",
          placeholder:
            "Tell us about your virtualization or KubeVirt requirement",
          type: "textarea",
          required: true,
        },
      ],
    },
  },
  adoptionSectionData: {
    badge: "WHY HAWKSTACK",
    title: "Built for real production environments",
    description:
      "We help teams go beyond experimentation and build KubeVirt environments that are secure, scalable, and operationally ready. From advisory to migration to day-2 support, HawkStack brings the engineering depth needed to make KubeVirt work in real infrastructure environments.",
    cards: [
      {
        title: "Cloud-native and virtualization expertise",
        description: "",
      },
      {
        title: "Production-first implementation approach",
        description: "",
      },
      {
        title: "Deep platform engineering focus",
        description: "",
      },
      {
        title: "From advisory to long-term operational support",
        description: "",
      },
    ],
  },
  servicesSectionData: {
    badge: "SERVICES",
    title: "KubeVirt Services by HawkStack",
    description:
      "From architecture to migration to long-term operations, HawkStack helps teams move beyond evaluation and build KubeVirt platforms that are ready for real production environments.",
    cards: [
      {
        title: "Architecture & Platform Design",
        description:
          "Design production-ready KubeVirt platforms aligned to your infrastructure, security, and workload requirements.",
      },
      {
        title: "Migration Strategy & Execution",
        description:
          "Plan and execute migrations from traditional virtualization environments into KubeVirt with reduced risk and disruption.",
      },
      {
        title: "Operations & Day-2 Engineering",
        description:
          "Implement observability, upgrades, backup strategies, lifecycle management, and performance tuning.",
      },
      {
        title: "Automation & GitOps",
        description:
          "Standardize infrastructure and VM operations with Infrastructure as Code, CI/CD, and GitOps workflows.",
      },
      {
        title: "Security & Governance",
        description:
          "Apply policy, multi-tenancy, network controls, and compliance-aligned operational guardrails.",
      },
      {
        title: "Training & Enablement",
        description:
          "Upskill internal teams to operate KubeVirt confidently in production with clear processes and best practices.",
      },
    ],
    commercialCta: {
      badge: "COMMERCIAL OFFERING",
      title: "Looking for a commercial KubeVirt platform?",
      description:
        "HawkStack also offers a dedicated commercial path for organizations that need an accelerated route to production, enterprise-focused capabilities, and platform support. Explore our dedicated offering on KubeVirtStack.",
      primaryLabel: "Visit KubeVirtStack.com",
      primaryHref: "https://kubevirtstack.com",
      secondaryLabel: "Request a Demo",
      secondaryHref: "/get-started",
    },
  },
};
