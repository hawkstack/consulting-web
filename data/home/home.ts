import { HomePageData } from "@/types/home/home";

export const homePageData: HomePageData = {
    heroSectionData: {
        slides: [
            {
                title: "KubeVirtStack Virtualization Platform",
                desc: "Run VMs and containers together on Kubernetes. Modernize workloads on a unified platform.",
            },
            {
                title: "Modernize Applications with OpenShift",
                desc: "Build and run microservices on Red Hat OpenShift. Accelerate delivery with secure, enterprise Kubernetes.",
            },
            {
                title: "Digital Transformation with Kubernetes",
                desc: "Adopt Kubernetes and cloud-native architectures. Enable scalable, resilient, and faster delivery.",
            },
            {
                title: "Fully Managed Kubernetes Service Platform",
                desc: "Operate Kubernetes with built-in security and observability. Automate scaling, upgrades, and lifecycle management.",
            }
        ],

        bgVideo: "/videos/hero.mp4",
        bg: "/videos/hero-mobile.mp4",
        icons: [
            `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12L12 5L19 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 19V5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12L12 19L19 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5V19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
        ]
    },

    productsSectionData: {
        title: "HawkStack - Product Resellers, Redefined",
        subtitle: "End-to-end cloud and DevOps solutions tailored for modern enterprise needs.",
        products: [
            {
            id: "1",
            count: "01",
            category: "ENTERPRISE PLATFORM",
            title: "RedHat",
            description: "Enterprise open-source solutions for hybrid cloud, automation, and Kubernetes platforms.",
            logo: "/images/home/Redhat.webp",
            link: "/"
            },
            {
            id: "2",
            count: "02",
            category: "CLOUD NATIVE",
            title: "Mirantis",
            description: "Kubernetes and container solutions for scalable and secure cloud environments.",
            logo: "/images/home/Mirantis.webp",
            link: "/"
            },
            {
            id: "3",
            count: "03",
            category: "CLOUD NATIVE",
            title: "CNCF",
            description: "Cloud-native technologies and frameworks powering modern application development.",
            logo: "/images/home/cncf.webp",
            link: "/"
            },
            {
            id: "4",
            count: "04",
            category: "CLOUD NATIVE",
            title: "Azure",
            description: "Microsoft's cloud platform enabling hybrid cloud, DevOps, and enterprise integration.",
            logo: "/images/home/Azure.webp",
            link: "/"
            },
            {
            id: "5",
            count: "05",
            category: "CLOUD NATIVE",
            title: "AWS",
            description: "Comprehensive cloud services for compute, storage, AI/ML, and scalable applications.",
            logo: "/images/home/AWS.webp",
            link: "/"
            },
            {
            id: "6",
            count: "06",
            category: "CLOUD NATIVE",
            title: "GCP",
            description: "Google Cloud solutions for data analytics, AI, and cloud-native innovation.",
            logo: "/images/home/google-cloud.webp",
            link: "/"
            },
        ]
    },
    
    platformSectionData: {
        bgImage: "/images/home/Border-bg.webp",
        title: [
            "A Simpler",
            "Stronger foundation",
            "for modern platform",
            "operations."
        ],
        description: "HawkStack helps teams standardize infrastructure, improve reliability, strengthen security, and give developers a cleaner path from build to production.",
        features: [
            { 
                id: 1,
                title: "Cloud Native Architecture", 
                icon: "cloud", 
                link: "#" 
            },
            { 
                id: 2, 
                title: "Operational Excellence", 
                icon: "medal", 
                link: "#" 
            },
            { 
                id: 3, 
                title: "Observability", 
                icon: "eye", 
                link: "#" 
            },
            { 
                id: 4, 
                title: "Security & Compliance", 
                icon: "shield", 
                link: "#" 
            },
            { 
                id: 5, 
                title: "Continuity & Lifecycle", 
                icon: "refresh", 
                link: "#" 
            },
            { 
                id: 6, 
                title: "Unified Platform", 
                icon: "layers", 
                link: "#" 
            },
        ],
    },
    whatWeDoSectionData: {
        title: "What we do?",
        description: "Innovative Digital Solutions Powering Modern Industries",
        cards: [
            {
                id: 1, 
                title: "E-commerce & Retail",
                desc: "Scalable cloud and microservices solutions to enhance digital commerce and customer experience.",
                image: "/images/home/retail.webp",
                link: ""
            },
            {
                id: 2, 
                title: "Telecom & Connectivity",
                desc: "Cloud-native and automated solutions to enhance telecom networks and connectivity.",
                image: "/images/home/telecom.webp",
                link: ""
            },
            {
                id: 3, 
                title: "DevOps & Automation",
                desc: "CI/CD and automation solutions to accelerate development and improve system reliability.",
                image: "/images/home/devops.webp",
                link: ""
            },
            {
                id: 4, 
                title: "AI & Data Intelligence",
                desc: "AI-driven analytics to turn data into actionable insights for smarter decision-making.",
                image: "/images/home/ai-data.webp",
                link: ""
            },
            {
                id: 5, 
                title: "Healthcare & Life Sciences",
                desc: "Secure and scalable digital solutions to improve healthcare systems and patient outcomes.",
                image: "/images/home/healthcare.webp",
                link: ""
            },
            {
                id: 6, 
                title: "Manufacturing & Industry 4.0",
                desc: "Smart automation and IoT-driven systems to boost industrial efficiency and innovation.",
                image: "/images/home/industry.webp",
                link: ""
            }
        ],
    }
}