import type {
  AppModernizationCapabilitiesSectionContent,
  AppModernizationHeroContent,
  AppModernizationProcessSectionContent,
  AppModernizationWhySectionContent,
} from "@/app/types/app-modernization";

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

export const appModernizationCapabilitiesSectionContent: AppModernizationCapabilitiesSectionContent =
  {
    badge: "Capabilities",
    title: "End to end application modernization services",
    services: [
      {
        title: "Legacy Assessment",
        description:
          "Audit existing applications, dependencies, performance bottlenecks, and technical debt to define a modernization roadmap.",
        mobileOrder: 1,
        tabletOrder: 1,
        desktopOrder: 1,
      },
      {
        title: "Cloud Migration",
        description:
          "Replatform or refactor applications for AWS, Azure, or GCP with resilience, scalability, and cost control in mind.",
        mobileOrder: 2,
        tabletOrder: 2,
        desktopOrder: 2,
      },
      {
        title: "DevOps & Automation",
        description:
          "Implement CI/CD, IaC, observability, and automated testing to accelerate releases and reduce operational risk.",
        mobileOrder: 3,
        tabletOrder: 3,
        desktopOrder: 5,
      },
      {
        title: "Security & Compliance",
        description:
          "Embed security best practices, identity controls, monitoring, and governance into every modernization stage.",
        mobileOrder: 4,
        tabletOrder: 4,
        desktopOrder: 6,
      },
      {
        title: "Architecture Modernization",
        description:
          "Move from monoliths to modular, API-first, event-driven, or microservices-based architectures where it makes sense.",
        mobileOrder: 5,
        tabletOrder: 5,
        desktopOrder: 3,
      },
      {
        title: "UI/UX Refresh",
        description:
          "Modernize user interfaces and customer journeys to improve adoption, productivity, and satisfaction.",
        mobileOrder: 6,
        tabletOrder: 6,
        desktopOrder: 4,
      },
    ],
  };

export const appModernizationWhySectionContent: AppModernizationWhySectionContent =
  {
    badge: "Why App Modernization",
    title: "Modern System Create Speed, Resilience and Growth",
    description:
      "Aging applications slow teams down, increase operating costs, and create barriers to innovation. Our app modernization services help organizations improve performance, simplify maintenance, and unlock faster business change.",
    gainsTitle: "What you gain",
    gains: [
      "Faster release cycles",
      "Lower maintenance cost",
      "Improved application performance",
      "Better scalability and uptime",
      "Enhanced security posture",
      "Stronger customer and employee experiences",
    ],
  };

export const appModernizationProcessSectionContent: AppModernizationProcessSectionContent =
  {
    badge: "Our Process",
    title: "A phased approach that reduces risk and delivers value faster",
    steps: [
      {
        stepNumber: "01.",
        title: "Discover",
        description:
          "We assess your current systems, business priorities, risks, and modernization opportunities.",
        mobileOrder: 1,
        tabletOrder: 1,
        desktopOrder: 1,
      },
      {
        stepNumber: "02.",
        title: "Prioritize",
        description:
          "We define a practical roadmap based on impact, complexity, budget, and time-to-value.",
        mobileOrder: 2,
        tabletOrder: 3,
        desktopOrder: 2,
      },
      {
        stepNumber: "03.",
        title: "Modernize",
        description:
          "We execute migration, refactoring, UI upgrades, and platform improvements in focused phases.",
        mobileOrder: 3,
        tabletOrder: 2,
        desktopOrder: 3,
      },
      {
        stepNumber: "04.",
        title: "Optimize",
        description:
          "We monitor, fine-tune, and continuously improve reliability, performance, and cost efficiency.",
        mobileOrder: 4,
        tabletOrder: 4,
        desktopOrder: 4,
      },
    ],
  };
