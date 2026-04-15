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
    }
}