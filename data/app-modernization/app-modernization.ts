import type { AppModernizationHeroContent } from "@/app/types/app-modernization";

export const appModernizationHeroContent: AppModernizationHeroContent = {
  badge: "Strategic Partnership & Memberships",
  title: "Modernize applications without disrupting your business",
  description:
    "Transform legacy applications into secure, scalable, cloud-ready digital platforms. HawkStack helps you reduce technical debt, improve agility, and deliver better user experiences.",
  buttons: [
    {
      label: "Talk to an Expert",
      href: "#app-modernization-form",
      variant: "primary",
    },
    {
      label: "Explore Our Approach",
      href: "/get-started",
      variant: "secondary",
    },
  ],
  form: {
    title: "GET IN TOUCH",
    submitLabel: "Send Message",
    successMessage: "Message sent successfully.",
    errorMessage: "Something went wrong. Please try again.",
    source: "app-modernization",
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
