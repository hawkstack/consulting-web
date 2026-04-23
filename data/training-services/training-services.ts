import type { TrainingServicesPageData } from "@/app/types/training-services";

export const trainingServicesPageData: TrainingServicesPageData = {
    heroSectionData: {
        heroBgClass: "bg-[linear-gradient(0deg,_#1F2D5A,_#1F2D5A),radial-gradient(121.54%_175.93%_at_0%_100%,_rgba(120,170,255,0.18)_0%,_rgba(120,170,255,0)_32%),radial-gradient(121.54%_175.93%_at_100%_0%,_rgba(85,126,255,0.28)_0%,_rgba(85,126,255,0)_28%)]",
        subTitle: "HawkStack Training",
        title: "Build cloud, Linux, automation and Kubernetes expertise with industry ready training.",
        h1MaxWidth: "max-w-[700px]",
        fontSize: "text-[22px] md:text-[40px] xl:text-[50px]",
        descriptionWidth: "max-w-[680px]",
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

    trainingEcosystemData: {
        subTitle: "Training Ecosystem",
        title: "Trusted learning paths across leading technology platforms",
        description: "Build capability through recognized vendor and open source aligned programs that support enterprise learning, certifications, and practical implementation.",
        partners: [
            {
                id: 1,
                name: "Red Hat",
                logo: "/images/training-services/redhat-logo.webp"
            },
            {
                id: 2,
                name: "Mirantis",
                logo: "/images/training-services/mirantis-logo.webp"
            },
            {
                id: 3,  
                name: "CNCF",
                logo: "/images/training-services/cncf-logo.webp"
            },
            {
                id: 4,
                name: "The Linux Foundation",
                logo: "/images/training-services/Linux-logo.webp"
            },
            {
                id: 5,
                name: "AWS",
                logo: "/images/home/product-reseller/AWS.webp"
            },
            {
                id: 6,
                name: "Google Cloud Platform",
                logo: "/images/training-services/GCP-logo.webp",
                scale: 1.5,
            },
            {
                id: 7,
                name: "Azure",
                logo: "/images/training-services/Azure-logo.webp"
            },
        ]
    },

     trainingPortfolioData: {
        subTitle: "Training Portfolio",
        title: "Explore our training tracks",
        description: "Each training path is designed to help learners move from concepts to implementation with structured modules, applied labs, and enterprise-ready outcomes.",
        items: [
            {
                id: 1,
                title: "Red Hat",
                highLightedText: "Enterprise Linux, OpenShift, Ansible, and platform engineering training.",
                desc: "Red Hat training programs are built for teams that want practical skills in Linux administration, container platforms, automation, and hybrid cloud operations.",
                points:[
                    "Red Hat Enterprise Linux administration and operations",
                    "OpenShift platform deployment, management, and troubleshooting",
                    "Ansible Automation Platform for scalable IT automation",
                    "Certification-aligned learning for enterprise engineering teams"
                ]
            },
            {
                id: 2,
                title: "Mirantis",
                highLightedText: "Containers, Kubernetes, and cloud infrastructure learning paths.",
                desc: "Mirantis training is designed for organizations adopting Kubernetes and container platforms that need strong operational capability across modern infrastructure environments.",
                points:[
                    "Kubernetes fundamentals and cluster operations",
                    "Container runtime, image, and workload management",
                    "Modern application deployment strategies",
                    "Operational best practices for platform teams"
                ]
            },
            {
                id: 3,
                title: "CNCF",
                highLightedText: "Cloud native skills across Kubernetes, observability, security, and GitOps.",
                desc: "CNCF-focused programs help learners build cloud native expertise using ecosystem tools, open standards, and modern operational practices trusted by leading engineering teams.",
                points:[
                    "Kubernetes administration and cloud native architecture",
                    "Observability with logging, metrics, and tracing concepts",
                    "GitOps, CI/CD, and release automation workflows",
                    "Security, resilience, and production readiness practices"
                ]
            },
            {
                id: 4,
                title: "The Linux Foundation",
                highLightedText: "Open source, Linux, Kubernetes, and DevOps certification-oriented programs.",
                desc: "The Linux Foundation training track supports professionals and enterprises looking to strengthen open source, Linux, Kubernetes, and DevOps capabilities with structured learning paths.",
                points:[
                    "Linux system administration and command-line proficiency",
                    "Kubernetes and cloud native certification preparation",
                    "Open source development and operational best practices",
                    "DevOps workflows, automation, and engineering readiness"
                ]
            },
        ]
    },
    
    trainingsWeGiveData: {
        subTitle: "Trainings We Give",
        title: "Practical programs for cloud, DevOps, Linux, automation, and Kubernetes teams",
        description: "Our training portfolio is designed to support both individual learners and enterprise teams with structured technical programs that connect theory, labs, and real-world operational outcomes.",
        programs: [
            {
                id: 1,
                provider: "Red Hat",
                title: "Red Hat OpenShift Administration",
                description: "Deploy, manage, and troubleshoot enterprise Kubernetes platforms with practical OpenShift administration skills.",
                buttonLink: "/get-started"
            },
             {
                id: 2,
                provider: "Red Hat",
                title: "Red Hat Enterprise Linux",
                description: "Build strong Linux administration capabilities for system operations, security, and enterprise reliability.",
                buttonLink: "/get-started"
            },
             {
                id: 3,
                provider: "Red Hat",
                title: "Ansible Automation",
                description: "Automate infrastructure, configuration, and repetitive operational tasks using scalable Ansible workflows.",
                buttonLink: "/get-started"
            },
             {
                id: 4,
                provider: "Mirantis",
                title: "Mirantis Kubernetes Engine",
                description: "Learn Kubernetes cluster deployment, operations, and lifecycle management for production environments.",
                buttonLink: "/get-started"
            },
             {
                id: 5,
                provider: "CNCF",
                title: "Cloud Native Operations",
                description: "Gain working knowledge of observability, GitOps, resiliency, and day-2 cloud native operations.",
                buttonLink: "/get-started"
            },
             {
                id: 6,
                provider: "The Linux Foundation",
                title: "Kubernetes Certification Prep",
                description: "Structured learning support for Kubernetes and Linux Foundation certification-aligned readiness.",
                buttonLink: "/get-started"
            },
        ]
    }
}