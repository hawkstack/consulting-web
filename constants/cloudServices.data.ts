import type { CloudServiceItem } from "@/app/types/cloudServices";

export const cloudServicesData: CloudServiceItem[] = [
  {
    id: "app-modernization",
    number: "01",
    title: "App Modernization",
    description:
      "Transform legacy applications into scalable, cloud-native architectures by refactoring monoliths into containerized microservices using Kubernetes enabling DevOps, CI/CD, and faster, more resilient deployments",
    image: "/images/services/App-Modernization.webp",
    imageAlt: "App modernization service preview",
    href: "/get-started",
  },
  {
    id: "kubevirt",
    number: "02",
    title: "KubeVirt",
    description:
      "Run virtual machines alongside containers on Kubernetes with unified orchestration using KubeVirt enabling seamless coexistence, workload portability, and efficient resource utilization through Kubernetes-native tools.",
    image: "/images/services/KubeVirt.webp",
    imageAlt: "KubeVirt service preview",
    href: "/get-started",
  },
  {
    id: "automation",
    number: "03",
    title: "Automation",
    description:
      "Accelerate operations with intelligent automation using IaC, GitOps, and CI/CD eliminating manual work, ensuring consistency, and enabling faster, reliable deployments at scale.",
    image: "/images/services/Automation.webp",
    imageAlt: "Automation service preview",
    href: "/get-started",
  },
  {
    id: "cloud-service-provider",
    number: "04",
    title: "Cloud Service Provider",
    description:
      "Operate and optimize Kubernetes and cloud platforms at scale with end-to-end management, ensuring high availability, scalability, and cost efficiency across multi-cloud and hybrid environments.",
    image: "/images/services/Cloud-Platform-Operation.webp",
    imageAlt: "Cloud service provider preview",
    href: "/get-started",
  },
  {
    id: "consulting-services",
    number: "05",
    title: "Consulting Services",
    description:
      "Strategic guidance for cloud-native transformation and infrastructure design helping you build secure, scalable, compliant architectures with the right platforms and migration strategies aligned to your business goals.",
    image: "/images/services/Consulting-Services.webp",
    imageAlt: "Consulting services preview",
    href: "/get-started",
  },
  {
    id: "kaas",
    number: "06",
    title: "Kubernetes as a Service (KaaS)",
    description:
      "Enterprise-ready Kubernetes, fully managed with security and observability so you can build while we handle provisioning, scaling, upgrades, and maintenance.",
    image: "/images/services/Kubernetes-as-a-Services.webp",
    imageAlt: "Kubernetes as a Service preview",
    href: "/get-started",
  },
  {
    id: "training-services",
    number: "07",
    title: "Training Services",
    description:
      "Upskill teams with hands-on cloud-native training covering Kubernetes, DevOps, automation, and cloud platforms through real-world labs empowering confident management of modern infrastructure.",
    image: "/images/services/Training-Services.webp",
    imageAlt: "Training services preview",
    href: "/get-started",
  },
];
