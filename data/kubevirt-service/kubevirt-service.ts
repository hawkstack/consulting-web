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
    badge: "WHY KUBEVIRT",
    title: "Why organizations are adopting KubeVirt",
    description:
      "KubeVirt gives teams a practical path to modernize virtualization, run VMs and containers on one platform, and build infrastructure that is easier to scale, automate, and govern.",
    cards: [
      {
        title: "Reduce hypervisor lock-in and licensing pressure",
        description:
          "Organizations are looking for more control over infrastructure costs while moving away from rigid virtualization stacks.",
      },
      {
        title: "Bring VMs and containers onto one operating model",
        description:
          "Platform teams can manage mixed workloads with shared tooling, policies, CI/CD workflows, and Kubernetes-native operations.",
      },
      {
        title: "Create a safer path for modernization and migration",
        description:
          "Business-critical applications can be modernized in stages without forcing disruptive rewrites or risky big-bang migrations.",
      },
      {
        title: "Strengthen day-2 operations from the start",
        description:
          "Observability, backup, governance, scaling, and lifecycle management become part of the platform from day one.",
      },
    ],
  },
};
