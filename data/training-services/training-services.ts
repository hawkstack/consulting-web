import type { TrainingServicesPageData } from "@/app/types/training-services";

export const trainingServicesPageData: TrainingServicesPageData = {
    heroSectionData: {
        heroBgClass: "bg-[linear-gradient(0deg,_#1F2D5A,_#1F2D5A),radial-gradient(121.54%_175.93%_at_0%_100%,_rgba(120,170,255,0.18)_0%,_rgba(120,170,255,0)_32%),radial-gradient(121.54%_175.93%_at_100%_0%,_rgba(85,126,255,0.28)_0%,_rgba(85,126,255,0)_28%)]",
        subTitle: "HawkStack Training",
        title: "Build cloud, Linux, automation and Kubernetes expertise with industry ready training.",
        description:
            "Empower engineers, platform teams, and enterprises with vendor-aligned programs across Red Hat, Mirantis, CNCF, and The Linux Foundation. Learn through practical labs, expert guidance, and real operational use cases.",
        buttons: [
            {
            label: "Explore Trainings",
            href: "#app-modernization-form",
            variant: "primary",
            },
            {
            label: "Request Corporate Training",
            href: "/get-started",
            variant: "secondary",
            },
        ],
        statBadges: [
            {
                id: 1,
                title: "7+",
                description: "Training ecosystems"
            },
            {
                id: 2,
                title: "Hands-on",  
                description: "Lab-driven learning"
            },
            {
                id: 3,
                title: "Team & Enterprise",
                description: "Delivery formats"
            }
        ],

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
}