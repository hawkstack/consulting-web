import { HomePageData } from "@/types/home/home";

export const homePageData: HomePageData = {
    hero: {
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
        icons: [
            `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12L12 5L19 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 19V5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
            `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12L12 19L19 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5V19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
        ]
    }
}