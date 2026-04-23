import type { AppModernizationHeroContent } from "@/app/types/app-modernization";

export const kubevirtServiceHeroContent: AppModernizationHeroContent = {
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
        placeholder: "Tell us about your virtualization or KubeVirt requirement",
        type: "textarea",
        required: true,
      },
    ],
  },
};
