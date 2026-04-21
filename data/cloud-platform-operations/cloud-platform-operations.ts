import type { CloudPlatformOperationsPageData } from "@/app/types/cloud-platform-operations";
import { CloudIcon, WaveIcon, DevopsIcon, DecrementIcon } from "@/components/icons/cloud-platform/cloud-platform";

export const cloudPlatformOperationsPageData: CloudPlatformOperationsPageData = {
    heroSectionData: {
        badge: "Reliable. Scalable. Optimized.",
        title: "Cloud Platform Operations That Scale With Your Business",
        description:
            "We design, manage, and optimize cloud infrastructure for performance,resilience, security, and cost efficiency so your teams can move fasterwith confidence.",
        buttons: [
            {
            label: "Talk to an Expert",
            href: "#app-modernization-form",
            variant: "primary",
            },
            {
            label: "Explore Services",
            href: "/get-started",
            variant: "secondary",
            },
        ],
        tags: ["AWS", "Azure", "Google Cloud", "Terraform", "Kubernetes"],

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
    },
    whatWeDoSectionData : {
        highlightedTitle: "WHAT WE DO",
        title: "End-to-end cloud operations services",
        desc: "From infrastructure management to automation and monitoring, HawkStack helps you build dependable cloud operations at scale.",
        cards: [
            {
            icon: CloudIcon,
            title: "Cloud Infrastructure Management",
            description: "Provision, manage, and scale secure cloud environments across AWS, Azure, and GCP.",
            },
            {
            icon: WaveIcon,
            title: "Monitoring & Response",
            description: "Gain 24/7 visibility with  proactive monitoring, alerting, and rapid issue resolution.",
            },
            {
            icon: DevopsIcon,
            title: "DevOps & Automation",
            description: "Delivery with CI/CD pipelines, Infrastructure as Code, and repeatable  Workflows.",
            },
            {
            icon: DecrementIcon,
            title: "Cost Optimization",
            description: "Reduce waste and improve cloud efficiency with usage analysis and governance.",
            },
        ]
    },
    faqSectionData: {
        subTitle: "FAQ",
	    title: "Common questions",
	    faqs: [
            {
                id: 1,
		        question: "Which cloud platforms do you support?",
                answer: "We support AWS, Microsoft Azure, Google Cloud, and hybrid or multi-cloud environments."
            },
            {
                id: 2,
		        question: "Do you provide 24/7 monitoring?",
                answer: "Yes. We help set up and manage proactive monitoring, alerting, dashboards, and incident response processes."
            },
            {
                id: 3,
		        question: "Can you help reduce our cloud bill?",
                answer: "Yes. Our cloud operations approach includes cost analysis, resource optimization, governance, and usage tuning."
            },
            {
                id: 4,
		        question: "Do you work with existing DevOps teams?",
                answer: "Absolutely. We can augment your internal teams, standardize processes, and improve operational efficiency."
            },
        ]
    },
}
