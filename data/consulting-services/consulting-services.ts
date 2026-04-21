import { AppModernizationHeroContent } from "@/app/types/app-modernization";

export const automationHeroContent: AppModernizationHeroContent = {
  title:
    "Technical consulting for architecture, delivery, operations, and scalable execution.",
  description:
    "HawkStack helps organizations solve  technology and operational challenges through structured consulting engagements. We work with client teams to assess current systems, identify gaps, design practical improvements, and support implementation with clarity and technical depth.",
  buttons: [
    {
      label: "Schedule a Consultation",
      href: "#app-modernization-form",
      variant: "primary",
    },
    {
      label: "View Service Scope",
      href: "/get-started",
      variant: "secondary",
    },
  ],
  h1MaxWidth: "max-w-[720px]",
  titleMarginTop: "mt-0",
  descriptionWidth: "max-w-[650px]",

  form: {
    title: "GET IN TOUCH",
    submitLabel: "Send Message",
    successMessage: "Message sent successfully.",
    errorMessage: "Something went wrong. Please try again.",
    source: "automation",
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
        placeholder: "Enter your message",
        type: "textarea",
        required: true,
      },
    ],
  },
};
