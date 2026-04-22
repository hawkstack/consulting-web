import { AppModernizationHeroContent } from "@/app/types/app-modernization";
import {
  ConsultingServicesConversationSectionContent,
  ConsultingServicesEngagementModelSectionContent,
  ConsultingServicesHowWeHelpSectionContent,
  ConsultingServicesWhatWeDoSectionContent,
} from "@/app/types/consulting-services";

export const consultingServicesHeroContent: AppModernizationHeroContent = {
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
    source: "consulting-services",
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

export const consultingServicesWhatWeDoSectionContent: ConsultingServicesWhatWeDoSectionContent =
  {
    badge: "WHAT WE DO",
    title: "Consulting services built around real client delivery needs",
    description:
      "Our consulting approach is designed for teams that need technical clarity, process improvements, and implementation direction rather than generic advisory language.",
    services: [
      {
        title: "Technology Advisory",
        description:
          "We help clients evaluate systems, tools, and technical decisions to reduce uncertainty and improve long-term fit.",
        bullets: [
          "Architecture and platform review",
          "Technology stack evaluation",
          "Technical risk identification",
        ],
        icon: "advisory",
        mobileOrder: 1,
        tabletOrder: 1,
        desktopOrder: 1,
      },
      {
        title: "Process Optimization",
        description:
          "We analyze how work moves across teams and identify changes that improve delivery consistency and efficiency.",
        bullets: [
          "Workflow assessment",
          "Delivery bottleneck analysis",
          "Operating model refinement",
        ],
        icon: "optimization",
        mobileOrder: 2,
        tabletOrder: 2,
        desktopOrder: 2,
      },
      {
        title: "Digital Transformation Support",
        description:
          "We support clients who are modernizing systems, restructuring operations, or scaling internal capabilities.",
        bullets: [
          "Legacy process modernization",
          "Change initiative planning",
          "Cross functional alignment",
        ],
        icon: "transformation",
        mobileOrder: 3,
        tabletOrder: 3,
        desktopOrder: 3,
      },
      {
        title: "Implementation Consulting",
        description:
          "We stay close to execution by helping teams move from recommendations into practical rollout steps.",
        bullets: [
          "Execution planning",
          "Migration and rollout support",
          "Delivery monitoring and iteration",
        ],
        icon: "implementation",
        mobileOrder: 4,
        tabletOrder: 4,
        desktopOrder: 4,
      },
    ],
  };

export const consultingServicesHowWeHelpSectionContent: ConsultingServicesHowWeHelpSectionContent =
  {
    badge: "HOW WE HELP CLIENTS",
    title:
      "We focus on solving operational and technical problems with structured consulting work",
    description:
      "As a new consulting practice, our positioning should emphasize capability, clarity, and hands-on problem solving. This page is built to highlight what HawkStack does for clients instead of relying on social proof.",
    cardTitle: "Typical client outcomes",
    cardDescription:
      "Examples of the business and technical areas this service page is designed to communicate clearly.",
    outcomes: [
      {
        text: "Clearer architecture direction for new or evolving systems",
        mobileOrder: 1,
        tabletOrder: 1,
        desktopOrder: 1,
      },
      {
        text: "Better visibility into process inefficiencies and delivery gaps",
        mobileOrder: 2,
        tabletOrder: 2,
        desktopOrder: 2,
      },
      {
        text: "Practical execution plans with phased priorities",
        mobileOrder: 3,
        tabletOrder: 3,
        desktopOrder: 3,
      },
      {
        text: "Better alignment between business requirements and technical implementation",
        mobileOrder: 4,
        tabletOrder: 4,
        desktopOrder: 4,
      },
      {
        text: "Reduced uncertainty when selecting tools, platforms, or workflows",
        mobileOrder: 5,
        tabletOrder: 5,
        desktopOrder: 5,
      },
      {
        text: "Stronger delivery structure for transformation or optimization initiatives",
        mobileOrder: 6,
        tabletOrder: 6,
        desktopOrder: 6,
      },
    ],
  };

export const consultingServicesEngagementModelSectionContent: ConsultingServicesEngagementModelSectionContent =
  {
    badge: "ENGAGEMENT MODEL",
    title: "A structured process from assessment to execution support",
    description:
      "The page uses a technical, execution-oriented flow so prospective clients understand how HawkStack approaches consulting engagements.",
    steps: [
      {
        stepLabel: "STEP 01",
        title: "Discover",
        description:
          "Understand business goals, current systems, delivery constraints, stakeholder expectations, and known pain points.",
        mobileOrder: 1,
        tabletOrder: 1,
        desktopOrder: 1,
      },
      {
        stepLabel: "STEP 02",
        title: "Assess",
        description:
          "Review architecture, workflows, tools, process maturity, dependencies, and operational bottlenecks in detail.",
        mobileOrder: 2,
        tabletOrder: 2,
        desktopOrder: 2,
      },
      {
        stepLabel: "STEP 03",
        title: "Recommend",
        description:
          "Provide a structured plan covering priorities, technical options, process changes, implementation considerations, and next steps.",
        mobileOrder: 3,
        tabletOrder: 3,
        desktopOrder: 3,
      },
      {
        stepLabel: "STEP 04",
        title: "Support",
        description:
          "Work with client teams during rollout, change execution, process refinement, or technical implementation phases.",
        mobileOrder: 4,
        tabletOrder: 4,
        desktopOrder: 4,
      },
    ],
  };

export const consultingServicesConversationSectionContent: ConsultingServicesConversationSectionContent =
  {
    badge: "START THE CONVERSATION",
    title: "Discuss your consulting requirement with HawkStack",
    description:
      "Whether you need architecture guidance, process optimization, implementation consulting, or transformation support, we can help define the right scope and next steps.",
    points: [
      "Ideal for teams evaluating systems, fixing execution gaps, or planning transformation initiatives.",
      "Suitable for early-stage assessments, targeted consulting engagements, and ongoing advisory support.",
      "Built to present HawkStack as a technical consulting partner with a clear and delivery-focused approach.",
    ],
    submitLabel: "Request Consultation",
    successMessage: "Message sent successfully.",
    errorMessage: "Something went wrong. Please try again.",
    source: "consulting-services-conversation",
    fields: [
      {
        name: "fullName",
        label: "Full Name",
        placeholder: "Your name",
        type: "text",
        required: true,
      },
      {
        name: "workEmail",
        label: "Work Email",
        placeholder: "you@company.com",
        type: "email",
        required: true,
      },
      {
        name: "company",
        label: "Company",
        placeholder: "Company name",
        type: "text",
        required: true,
      },
      {
        name: "areaOfInterest",
        label: "Area of interest",
        placeholder: "Technology Advisory",
        type: "text",
        required: true,
      },
      {
        name: "projectRequirement",
        label: "Project or requirement",
        placeholder:
          "Tell us about your current challenge, systems, goals, or consulting requirement",
        type: "textarea",
        required: true,
      },
    ],
  };
