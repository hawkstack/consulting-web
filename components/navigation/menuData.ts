import { MegaItem, OfferingsMenuContent } from "./types";

/* ================= PRODUCTS ================= */
export const products: MegaItem[] = [
  {
    id: "linux",
    label: "RedHat Linux",
    title: "RedHat Linux",
    description:
      "Build a secure and stable enterprise Linux foundation for mission-critical workloads.Optimized for performance, compliance, and long-term production operations across on-prem and cloud.",
    image: "/images/products/RedHat-Linux.webp",
  },
  {
    id: "ansible",
    label: "RedHat Ansible",
    title: "RedHat Ansible",
    description:
      "Automate infrastructure, applications, and operations at scale.Reduce manual effort, eliminate configuration drift, and deliver consistent outcomes through automation.",
    image: "/images/products/RedHat-Ansible.webp",
  },
  {
    id: "openshift",
    label: "RedHat OpenShift",
    title: "RedHat OpenShift",
    description:
      "Run and manage containerized applications with confidence.A production-ready Kubernetes platform designed for hybrid cloud, DevSecOps, and platform engineering teams.",
    image: "/images/products/RedHat-OpenShift.webp",
  },
  {
    id: "openstack",
    label: "RedHat OpenStack",
    title: "RedHat OpenStack",
    description:
      "Design and operate private clouds with full control and flexibility.Deliver scalable compute, storage, and networking for enterprise and cloud-native workloads.",
    image: "/images/products/RedHat-OpenStack.webp",
  },
  {
    id: "cncf",
    label: "CNCF",
    title: "CNCF",
    description:
      "A leading open-source foundation that fosters cloud-native innovation by supporting projects like Kubernetes and driving industry standards.",
    image: "/images/products/CNCF.webp",
  },
  {
    id: "mirantis",
    label: "Mirantis",
    title: "Mirantis",
    description:
      "A cloud-native technology provider that delivers flexible Kubernetes and container solutions to run modern infrastructure at enterprise scale.",
    image: "/images/products/Mirantis.webp",
  },
];

export const offeringsMenuContent: OfferingsMenuContent = {
  tabs: {
    product: "Product",
    productResellers: "Product Resellers",
  },
  featured: {
    title: "KubeVirtStack",
    description:
      "Explore KubeVirtStack solutions designed to unify virtualization and Kubernetes, enabling scalable, secure, and cloud-native infrastructure.",
    image: "/images/products/KubeVirtStack-AI.webp",
    href: "/coming-soon",
  },
  resellers: [
    {
      id: "redhat",
      title: "RedHat",
      description:
        "Enterprise open-source solutions for hybrid cloud, automation, and Kubernetes platforms.",
      image: "/images/home/product-reseller/Redhat.webp",
      href: "/get-started",
    },
    {
      id: "cncf",
      title: "CNCF",
      description:
        "Cloud-native technologies and frameworks powering modern application development.",
      image: "/images/home/product-reseller/cncf.webp",
      href: "/get-started",
    },
    {
      id: "mirantis",
      title: "Mirantis",
      description:
        "Kubernetes and container solutions for scalable and secure cloud environments.",
      image: "/images/home/product-reseller/Mirantis.webp",
      href: "/get-started",
    },
    {
      id: "lenovo",
      title: "Lenovo",
      description:
        "High-performance infrastructure and hardware optimized for enterprise workloads.",
      badge: "L",
      href: "/get-started",
    },
    {
      id: "aws",
      title: "AWS",
      description:
        "Comprehensive cloud services for compute, storage, AI/ML, and scalable applications.",
      image: "/images/home/product-reseller/AWS.webp",
      href: "/get-started",
    },
    {
      id: "gcp",
      title: "GCP",
      description:
        "Google Cloud solutions for data analytics, AI, and cloud-native innovation.",
      image: "/images/home/product-reseller/google-cloud.webp",
      href: "/get-started",
    },
    {
      id: "azure",
      title: "Azure",
      description:
        "Microsoft's cloud platform enabling hybrid cloud, DevOps, and enterprise integration.",
      image: "/images/home/product-reseller/Azure.webp",
      href: "/get-started",
    },
    {
      id: "dell",
      title: "Dell",
      description:
        "Reliable enterprise hardware and infrastructure for modern data centers.",
      badge: "D",
      href: "/get-started",
    },
    {
      id: "veeam",
      title: "Veeam",
      description:
        "Data protection, backup, and recovery solutions ensuring business continuity.",
      badge: "V",
      href: "/get-started",
    },
  ],
};

/* ================= SERVICES ================= */
export const services: MegaItem[] = [
  {
    id: "app modernization",
    label: "App Modernization",
    title: "App Modernization",
    description:
      "Upgrade and re-architect legacy applications using modern frameworks, cloud platforms, and microservices for agility and growth. ",
    image: "/images/services/App-Modernization.webp",
    href: "/app-modernization",
  },
  {
    id: "kubeVirt",
    label: "KubeVirt",
    title: "KubeVirt",
    description:
      "Modernize virtualization by managing VMs alongside containers with Kubernetes-native scalability and control.",
    image: "/images/services/KubeVirt.webp",
    href: "/kubevirt-service",
  },
  {
    id: "automation",
    label: "Automation",
    title: "Automation",
    description:
      "Streamline infrastructure, CI/CD, and operational tasks through intelligent automation and orchestration.",
    image: "/images/services/Automation.webp",
    href: "/automation",
  },
  {
    id: "cloud platform operation",
    label: "Cloud Platform Operation",
    title: "Cloud Platform Operation",
    description:
      "Automate cloud infrastructure provisioning, configuration, and operations for consistent and scalable platforms.",
    image: "/images/services/Cloud-Platform-Operation.webp",
    href: "/cloud-platform-operations",
  },
  {
    id: "consulting services",
    label: "Consulting Services",
    title: "Consulting Services",
    description:
      "Strategic guidance across cloud, platforms, and modern applications that turns decisions into measurable outcomes.",
    image: "/images/services/Consulting-Services.webp",
    href: "/consulting-service",
  },
  {
    id: "training services",
    label: "Training Services",
    title: "Training Services",
    description:
      "Empower teams with industry-relevant training that accelerates learning and real-world application.",
    image: "/images/services/Training-Services.webp",
    href: "/training-services",
  },
  {
    id: "kubernetes as a services",
    label: "Kubernetes as a Services",
    title: "Kubernetes as a Services",
    description:
      "End-to-end Kubernetes management with governance, monitoring, and lifecycle support.",
    image: "/images/services/Kubernetes-as-a-Services.webp",
    href: "/kubernetes-as-a-services",
  },
];

/* ================= COMPANY ================= */
export const company: MegaItem[] = [
  {
    id: "about us",
    label: "About Us",
    title: "About HawkStack",
    description:
      "HawkStack builds, modernizes, and operates scalable cloud-native platforms and applications",
    image: "/images/company/About-Us.webp",
    href: `${process.env.NEXT_PUBLIC_TRAINING_URL}/about`,
    external: true,
  },
  {
    id: "partner",
    label: "Partner",
    title: "Partner",
    description:
      "Our partner ecosystem combines leading technologies and expertise to accelerate innovation and business success.",
    image: "/images/company/Partner.webp",
    href: "/coming-soon",
  },
  // TODO: Add blog section in the future when we have content to share
  // {
  //   id: "blog",
  //   label: "Blog",
  //   title: "Blog",
  //   description:
  //     "Thought leadership, technical insights, and real-world lessons from modern cloud engineering",
  //   image: "/images/company/Blog.webp",
  //   href: "/coming-soon",
  // },
  {
    id: "career",
    label: "Career",
    title: "Career",
    description:
      "Build meaningful technology. Grow your career with modern cloud and platform engineering.",
    image: "/images/company/Career.webp",
    href: "/career",
  },
  // TODO
  // {
  //   id: "contact us",
  //   label: "Contact Us",
  //   title: "Contact Us",
  //   description:
  //     "Let’s connect to discuss how we can help you build and scale modern cloud solutions.",
  //   image: "/images/company/Contact-Us.webp",
  //   href: "/get-started",
  // },
];

/* ================= TRAINING ================= */
export const training: MegaItem[] = [
  {
    id: "red hat",
    label: "Red hat",
    title: "Red hat",
    description:
      "Industry-aligned Red Hat training focused on real-world enterprise Linux and OpenShift skills.",
    image: "/images/training/Red-hat.webp",
  },
  {
    id: "mirantis",
    label: "Mirantis",
    title: "Mirantis",
    description:
      "Hands-on Mirantis training designed for production-ready Kubernetes and container platforms.",
    image: "/images/training/The-Mirantis.webp",
  },
  {
    id: "cncf",
    label: "CNCF",
    title: "CNCF",
    description:
      "Cloud-native training built around CNCF projects like Kubernetes, Prometheus, and Envoy.",
    image: "/images/training/CNCF.webp",
  },
  {
    id: "the linux foundation",
    label: "The Linux Foundation",
    title: "The Linux Foundation",
    description:
      "Linux Foundation–aligned learning for mastering open-source and cloud technologies.",
    image: "/images/training/The-Linux-Foundation.webp",
  },
  {
    id: "customised training",
    label: "Customised Training",
    title: "Customised Training",
    description:
      "Tailored training programs designed to meet your team’s specific cloud and DevOps needs.",
    image: "/images/training/Customised-Training.webp",
  },
];
