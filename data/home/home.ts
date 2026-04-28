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

        bgVideo: "/videos/home/hero/hero.mp4",
        bg: "/videos/home/hero/hero-mobile.mp4",
    },

    cloudServicesSectionData: {
        title: "Engineering Driven Cloud Services",
        services:  [
            {
                id: "app-modernization",
                number: "01",
                title: "App Modernization",
                description:
                "Transform legacy applications into scalable, cloud-native architectures by refactoring monoliths into containerized microservices using Kubernetes enabling DevOps, CI/CD, and faster, more resilient deployments",
                video: "/videos/home/services/app-modernization.mp4",
                imageAlt: "App modernization service preview",
                href: "/app-modernization",
            },
            {
                id: "kubevirt",
                number: "02",
                title: "KubeVirt",
                description:
                "Run virtual machines alongside containers on Kubernetes with unified orchestration using KubeVirt enabling seamless coexistence, workload portability, and efficient resource utilization through Kubernetes-native tools.",
                video: "/videos/home/services/kubevirt.mp4 ",
                imageAlt: "KubeVirt service preview",
                href: "/kubevirt-service",
            },
            {
                id: "automation",
                number: "03",
                title: "Automation",
                description:
                "Accelerate operations with intelligent automation using IaC, GitOps, and CI/CD eliminating manual work, ensuring consistency, and enabling faster, reliable deployments at scale.",
                video: "/videos/home/services/automation.mp4",
                imageAlt: "Automation service preview",
                href: "/automation",
            },
            {
                id: "cloud-service-provider",
                number: "04",
                title: "Cloud Service Provider",
                description:
                "Operate and optimize Kubernetes and cloud platforms at scale with end-to-end management, ensuring high availability, scalability, and cost efficiency across multi-cloud and hybrid environments.",
                video: "/videos/home/services/cloud-service-provider.mp4",
                imageAlt: "Cloud service provider preview",
                href: "/cloud-platform-operations",
            },
            {
                id: "consulting-services",
                number: "05",
                title: "Consulting Services",
                description:
                "Strategic guidance for cloud-native transformation and infrastructure design helping you build secure, scalable, compliant architectures with the right platforms and migration strategies aligned to your business goals.",
                video: "/videos/home/services/consulting.mp4",
                imageAlt: "Consulting services preview",
                href: "/consulting-service",
            },
            {
                id: "kaas",
                number: "06",
                title: "Kubernetes as a Service (KaaS)",
                description:
                "Enterprise-ready Kubernetes, fully managed with security and observability so you can build while we handle provisioning, scaling, upgrades, and maintenance.",
                video: "/videos/home/services/KAAS.mp4",
                imageAlt: "Kubernetes as a Service preview",
                href: "/kubernetes-as-a-services",
            },
            {
                id: "training-services",
                number: "07",
                title: "Training Services",
                description:
                "Upskill teams with hands-on cloud-native training covering Kubernetes, DevOps, automation, and cloud platforms through real-world labs empowering confident management of modern infrastructure.",
                video: "/videos/home/services/Training.mp4",
                imageAlt: "Training services preview",
                href: "/training-services",
            },
        ],
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
                logo: "/images/home/product-reseller/Redhat.webp",
                link: "/"
            },
            {
                id: "2",
                count: "02",
                category: "CLOUD NATIVE",
                title: "Mirantis",
                description: "Kubernetes and container solutions for scalable and secure cloud environments.",
                logo: "/images/home/product-reseller/Mirantis.webp",
                link: "/"
            },
            {
                id: "3",
                count: "03",
                category: "CLOUD NATIVE",
                title: "CNCF",
                description: "Cloud-native technologies and frameworks powering modern application development.",
                logo: "/images/home/product-reseller/cncf.webp",
                link: "/"
            },
            {
                id: "4",
                count: "04",
                category: "CLOUD NATIVE",
                title: "Azure",
                description: "Microsoft's cloud platform enabling hybrid cloud, DevOps, and enterprise integration.",
                logo: "/images/home/product-reseller/Azure.webp",
                link: "/"
            },
            {
                id: "5",
                count: "05",
                category: "CLOUD NATIVE",
                title: "AWS",
                description: "Comprehensive cloud services for compute, storage, AI/ML, and scalable applications.",
                logo: "/images/home/product-reseller/AWS.webp",
                link: "/"
            },
            {
                id: "6",
                count: "06",
                category: "CLOUD NATIVE",
                title: "GCP",
                description: "Google Cloud solutions for data analytics, AI, and cloud-native innovation.",
                logo: "/images/home/product-reseller/google-cloud.webp",
                link: "/"
            },
        ]
    },

    globalSectionData: {
        highlightText: "Strategic Partnership & Memberships",
        title: "Trusted by Global Technology leaders",
        desc: "HawkStack Partners with leading enterprise platform and opensource foundations to deliver trusted clud-native, virtualization, and infrastructure modernization solutions.",
        items: [
            {
                id: 1, 
                partnerName: "Red Hat",
                status: "Certified Delivery & Support Partner",
                logo: "/images/home/global-leaders/redhat-partners.webp",
                tags: [
                    "Cloud & Service Provider",
                    "Training Provider",
                    "Implementation",
                    "Enterprise Support"
                ],
                link: ""
            },
            {
                id: 2, 
                partnerName: "CNCF",
                status: "Silver member and ecosystem contributor",
                logo: "/images/home/global-leaders/cncf-partners.webp",
                tags: [
                    "Silver Member",
                    "Cloud-Native Focus",
                    "KubeVirtStack Initiative",
                    "Opensource Alignmnet"
                ],
                link: ""
            },
            {
                id: 3, 
                partnerName: "Mirantis",
                status: "Certified Delivery Partner",
                logo: "/images/home/global-leaders/mirantis-partners.webp",
                tags: [
                    "OpenStack Expertise",
                    "Kubernetes Enablement",
                    "Infrastructure Modernization"
                ],
                link: ""
            },
            {
                id: 4, 
                partnerName: "The Linux Foundation",
                status: "Silver Partner",
                logo: "/images/home/global-leaders/linux-partners.webp",
                tags: [
                    "Silver Partner",
                    "Open Source Leadership",
                    "Enterprise Reliability",
                    "Future-Ready Platforms"
                ],
                link: ""
            },
        ],
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
                desc: "Scalable, resilient systems built for the cloud." 
            },
            { 
                id: 2, 
                title: "Operational Excellence", 
                icon: "medal", 
                desc: "Improve reliability, efficiency, and performance." 
            },
            { 
                id: 3, 
                title: "Observability", 
                icon: "eye", 
                desc: "End-to-end visibility for faster issue resolution." 
            },
            { 
                id: 4, 
                title: "Security & Compliance", 
                icon: "shield", 
                desc: "Enterprise-grade protection and regulatory alignment." 
            },
            { 
                id: 5, 
                title: "Continuity & Lifecycle", 
                icon: "refresh", 
                desc: "Structured lifecycle management and continuous improvement." 
            },
            { 
                id: 6, 
                title: "Unified Platform", 
                icon: "layers", 
                desc: "Seamlessly integrate tools, teams, and workflows." 
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
                image: "/images/home/whatwedo/retail.webp",
                link: ""
            },
            {
                id: 2, 
                title: "Telecom & Connectivity",
                desc: "Cloud-native and automated solutions to enhance telecom networks and connectivity.",
                image: "/images/home/whatwedo/telecom.webp",
                link: ""
            },
            {
                id: 3, 
                title: "DevOps & Automation",
                desc: "CI/CD and automation solutions to accelerate development and improve system reliability.",
                image: "/images/home/whatwedo/devops.webp",
                link: ""
            },
            {
                id: 4, 
                title: "AI & Data Intelligence",
                desc: "AI-driven analytics to turn data into actionable insights for smarter decision-making.",
                image: "/images/home/whatwedo/ai-data.webp",
                link: ""
            },
            {
                id: 5, 
                title: "Healthcare & Life Sciences",
                desc: "Secure and scalable digital solutions to improve healthcare systems and patient outcomes.",
                image: "/images/home/whatwedo/healthcare.webp",
                link: ""
            },
            {
                id: 6, 
                title: "Manufacturing & Industry 4.0",
                desc: "Smart automation and IoT-driven systems to boost industrial efficiency and innovation.",
                image: "/images/home/whatwedo/industry.webp",
                link: ""
            }
        ],
    },

    cloudSectionData: {
        title: {
            main: "Build the",
            highlight: "next wave",
            suffix: "of cloud innovation."
        },
        desc: "As a silver member of CNCF, HawkStack actively with the cloud native community and contributes through initiatives like kubeVirtStack, focused on Modern virtualization on Kubernetes.",
        videoDesktop: "/videos/home/cloud/Blue_Background.mp4",
        videoMobile: "/videos/home/cloud/Blue_Background-mobile.mp4"
    },
}