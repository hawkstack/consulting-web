import type { AboutUsPageData } from "@/app/types/about-us";

export const aboutusPageData: AboutUsPageData = {
    aboutHeroData: {
        subTitle: "About HawkStack",
        title: "We help organizations modernize, automate and scale using",
        highlightedText: "cloud-native technologies  and Kubernetes driven platforms.",
        image: "/images/about/hero-image.webp",
        bgImage: "/images/about/background.webp"
    },

    endtoendServicesData: {
        title: "End to end services for enterprise platform transformation.?",
        items: [
            {
                id: 1,
                number: "01",
                title: "Cloud Platform Services",
                description: "Design, build, operate, and optimize secure enterprise platforms for cloud native growth and operational stability."
            },
            {
                id: 2,
                number: "02",
                title: "Application Modernization",
                description: "Transform legacy workloads into modern, scalable environments aligned with today’s architecture and delivery models."
            },
            {
                id: 3,
                number: "03",
                title: "Kubernetes & OpenShift",
                description: "Deploy production-grade container and platform solutions that support automation, governance, and business continuity."
            },
            {
                id: 4,
                number: "04",
                title: "Consulting Services",
                description: "Navigate complex cloud and transformation journeys with practical guidance, architecture insight, and expert support."
            },
            {
                id: 5,
                number: "05",
                title: "Training & Certification",
                description: "Equip technical teams with hands-on, industry-relevant knowledge that improves confidence, capability, and outcomes."
            },
            {
                id: 6,
                number: "06",
                title: "Automation & DevOps",
                description: "Reduce friction across environments with automation first workflows, standardized operations, and faster release cycles."
            },
        ]
    },
    whatWeOfferData: {
        title: "WHAT WE OFFER ?",

        rows: [
            {
                id: 1,
                title: "KubeVirtStack",
                logo: "/images/products/KubeVirtStack-AI.webp",
                description: "Explore KubeVirtStack,your force for digital security with automation, virtalizatiom,  monitoring, resilience, security and observability."    
            },

            {
                id: 2,
                title: "Product Resellers",
                partners: [
                    { 
                        id: 1, 
                        name: "RedHat", 
                        logo: "/images/home/product-reseller/Redhat.webp" 
                    },
                    { 
                        id: 2, 
                        name: "AWS", 
                        logo: "/images/home/product-reseller/AWS.webp" 
                    },
                    { 
                        id: 3, 
                        name: "GCP", 
                        logo: "/images/home/product-reseller/google-cloud.webp" 
                    },
                    { 
                        id: 4, 
                        name: "CNCF", 
                        logo: "/images/home/product-reseller/cncf.webp" 
                    },
                    { 
                        id: 5, 
                        name: "Mirantis", 
                        logo: "/images/about/mirantis-logo.webp" 
                    },
                    { 
                        id: 6, 
                        name: "Azure", 
                        logo: "/images/home/product-reseller/Azure.webp" 
                    },
                ],
            },
        ],
    }
}

