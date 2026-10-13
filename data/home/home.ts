import { HomePageData } from "@/types/home/home";
import {
  ConsultingIcon,
  IntegrationIcon,
  SolutionDesignIcon,
  TrainingIcon,
} from "@/components/icons/Home/digital-transformation/DigitalTransformationIcons";

export const homePageData: HomePageData = {
  heroSectionData: {
    eyebrow: "AI DATA CENTER SOLUTIONS",
    title: ["Build the foundation", "for enterprise AI."],
    description:
      "Connect compute, storage, networking and AI platforms to turn ambitious ideas into operational capability.",
    primaryAction: {
      label: "Explore our solutions",
      targetId: "our-solutions",
    },
    secondaryAction: { label: "Schedule a consultation", href: "/get-started" },
    marketplace: {
      brand: "GeM",
      logo: "/images/home/gem-logo.png",
      emblem: "/images/home/national-emblem.svg",
      brandDescription: "Government e Marketplace",
      title: "Available on GeM",
      description:
        "Procure HawkStack solutions through the Government e Marketplace",
    },
    status: { cluster: "GPU cluster online", uptime: "99.99% uptime" },
    services: [
      {
        title: "Data Center Solutions",
        description:
          "Design and build AI-ready compute, storage and networking that scales with your workloads.",
        icon: "server",
      },
      {
        title: "Application Modernization",
        description:
          "Move legacy applications to containers and cloud-native platforms without losing momentum.",
        icon: "refresh",
      },
      {
        title: "Enterprise Infrastructure & Security",
        description:
          "Harden the stack from servers to network edge with resilient, policy-driven protection.",
        icon: "shield",
      },
      {
        title: "Virtualization & Migration",
        description:
          "Migrate VMs to modern platforms with minimal downtime and a clear rollback path.",
        icon: "cube",
      },
      {
        title: "Technology Consulting",
        description:
          "Turn goals into a practical roadmap, architecture and delivery plan with expert guidance.",
        icon: "chat",
      },
      {
        title: "Enterprise Skills & Enablement",
        description:
          "Train your teams to run, secure and evolve the platforms you deploy.",
        icon: "cap",
      },
    ],
  },

  cloudServicesSectionData: {
    title: "Technology that moves your business forward.",
    intro:
      "Build resilience, accelerate change and strengthen your teams—with connected solutions for enterprises, government and the public sector.",
    actionLabel: "Discuss this solution",
    services: [
      {
        id: "data-center-solutions",
        number: "01",
        title: "Data Center Solutions",
        headline: "Build a resilient foundation for growth.",
        description:
          "Design and modernize data centers to keep critical services running, use resources efficiently and scale with business demand.",
        benefits: [
          "Business continuity",
          "Resource efficiency",
          "Capacity for growth",
        ],
        image: "/images/home/solutions/data-center.webp",
        imageAlt: "Modern data center with rows of server racks",
        href: "/get-started?solution=data-center-solutions",
      },
      {
        id: "application-modernization",
        number: "02",
        title: "Application Modernization",
        headline: "Modernize applications. Accelerate business.",
        description:
          "Transform applications with containers, enterprise Kubernetes platforms and cloud-native technologies to release faster, scale reliably and respond to changing business needs.",
        benefits: [
          "Faster time to market",
          "Agility to scale",
          "Reliable application delivery",
        ],
        image: "/images/home/solutions/application-modernization.webp",
        imageAlt: "Enterprise servers connected to cloud-native platforms",
        href: "/get-started?solution=application-modernization",
      },
      {
        id: "enterprise-infrastructure-security",
        number: "03",
        title: "Enterprise Infrastructure & Security",
        headline: "Build integrated infrastructure. Strengthen security.",
        description:
          "Design, deploy and integrate servers, enterprise Kubernetes platforms, firewalls and network devices to simplify IT operations, protect critical workloads and support business growth.",
        benefits: [
          "Simplified infrastructure management",
          "Secure platforms & networks",
          "Operational resilience",
        ],
        image: "/images/home/solutions/infrastructure-security.webp",
        imageAlt:
          "Secure enterprise infrastructure and integrated server systems",
        href: "/get-started?solution=enterprise-infrastructure-security",
      },
      {
        id: "virtualization-migration",
        number: "04",
        title: "Virtualization & Migration",
        headline: "Modernize virtualization. Migrate with confidence.",
        description:
          "Assess, plan and migrate virtual machines to OpenShift Virtualization, supported by KubeVirtStack for AI-assisted readiness assessment, migration planning and validation.",
        benefits: [
          "Reduce migration risk",
          "Greater platform flexibility",
          "Business continuity",
        ],
        image: "/images/home/solutions/virtualization-migration.webp",
        imageAlt:
          "Server infrastructure migrating to modern virtual cloud platforms",
        href: "/get-started?solution=virtualization-migration",
      },
      {
        id: "enterprise-technology-consulting",
        number: "05",
        title: "Enterprise Technology Consulting",
        headline: "Design. Integrate. Operate with confidence.",
        description:
          "Design and implement servers, routers, switches and firewalls with enterprise Linux, Kubernetes and Ansible Automation Platform. Integrate hardware and software with ongoing operational support.",
        benefits: [
          "Architecture & system integration",
          "Hardware & software implementation",
          "Operations support & optimization",
        ],
        image: "/images/home/solutions/technology-consulting.webp",
        imageAlt:
          "Enterprise technology consulting and infrastructure planning session",
        href: "/get-started?solution=enterprise-technology-consulting",
      },
      {
        id: "enterprise-skills-enablement",
        number: "06",
        title: "Enterprise Skills & Enablement",
        headline: "Build expertise. Accelerate technology adoption.",
        description:
          "Equip teams with enterprise training, learning subscriptions and hands-on labs across infrastructure, cloud, cybersecurity, AI and automation to turn learning into operational capability.",
        benefits: [
          "Practical skills & certification readiness",
          "Faster platform & AI adoption",
          "Stronger operational capability",
        ],
        image: "/images/home/solutions/skills-enablement.webp",
        imageAlt:
          "Team working together on enterprise technology and infrastructure",
        href: "/get-started?solution=enterprise-skills-enablement",
      },
    ],
  },

  productsSectionData: {
    maintitle: "Trusted by Global Technology Leaders",
    title: "HawkStack - Product Resellers, Redefined",
    subtitle:
      "End-to-end cloud and DevOps solutions tailored for modern enterprise needs.",
    products: [
      {
        id: "1",
        count: "01",
        category: "ENTERPRISE PLATFORM",
        title: "RedHat",
        description:
          "Enterprise open-source solutions for hybrid cloud, automation, and Kubernetes platforms.",
        logo: "/images/home/product-reseller/Redhat.webp",
        link: "https://catalog.redhat.com/en/partners/detail/hawkstack#overview",
      },
      {
        id: "2",
        count: "02",
        category: "CLOUD NATIVE",
        title: "Mirantis",
        description:
          "Kubernetes and container solutions for scalable and secure cloud environments.",
        logo: "/images/home/product-reseller/Mirantis.webp",
        link: "https://www.mirantis.com/partners/hawkstack/",
      },
      {
        id: "3",
        count: "03",
        category: "CLOUD NATIVE",
        title: "CNCF",
        description:
          "Cloud-native technologies and frameworks powering modern application development.",
        logo: "/images/home/product-reseller/cncf.webp",
        link: "https://landscape.cncf.io/?group=members&item=cncf-members--silver--hawkstack-member",
      },
      {
        id: "4",
        count: "04",
        category: "CLOUD NATIVE",
        title: "Azure",
        description:
          "Microsoft's cloud platform enabling hybrid cloud, DevOps, and enterprise integration.",
        logo: "/images/home/product-reseller/Azure.webp",
        link: "/",
      },
      {
        id: "5",
        count: "05",
        category: "CLOUD NATIVE",
        title: "AWS",
        description:
          "Comprehensive cloud services for compute, storage, AI/ML, and scalable applications.",
        logo: "/images/home/product-reseller/AWS.webp",
        link: "/",
      },
      {
        id: "6",
        count: "06",
        category: "CLOUD NATIVE",
        title: "GCP",
        description:
          "Google Cloud solutions for data analytics, AI, and cloud-native innovation.",
        logo: "/images/home/product-reseller/google-cloud.webp",
        link: "/",
      },
      // {
      //   id: "7",
      //   count: "07",
      //   category: "CLOUD NATIVE",
      //   title: "The Linux Foundation",
      //   description:
      //     "Empowering open-source innovation through Linux, AI, and cloud-native technologies.",
      //   logo: "/images/home/global-leaders/linux-partners.webp",
      //   link: "/",
      // },
    ],
  },

  digitalTransformationSectionData: {
    title: "End-to-end expertise for your digital transformation.",
    highlights: [
      "Modern platforms",
      "Intelligent automation",
      "Cloud-native operations",
      "Workforce enablement",
    ],
    services: [
      { title: "Consulting", icon: ConsultingIcon },
      { title: "Solution Design", icon: SolutionDesignIcon },
      { title: "System Integration", icon: IntegrationIcon },
      { title: "Training Solutions", icon: TrainingIcon },
    ],
    servicesCaption: "Integrated services across the transformation lifecycle",
    primaryPartners: [
      {
        id: "red-hat",
        name: "Red Hat",
        caption:
          "OpenShift Ãƒâ€šÃ‚Â· Ansible Ãƒâ€šÃ‚Â· Virtualization Ãƒâ€šÃ‚Â· AI",
        description:
          "Consulting, solution design, system integration, modernization, operations, and technical training.",
        badge: "Strategic partner",
        secondaryBadge: "Premier",
        footerLabel: "Verify here ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢",
        footerLink:
          "https://www.credly.com/badges/a89d1d73-c4e0-4395-92a2-e03641af5d6c/public_url",
        image: "/images/home/digital-transformation/red-hat.webp",
        accent: "red",
      },
      {
        id: "suse",
        name: "SUSE",
        caption: "SUSE Linux Ãƒâ€šÃ‚Â· Rancher Ãƒâ€šÃ‚Â· RKE Ãƒâ€šÃ‚Â· Edge",
        description:
          "Consulting, solution design, system integration, modernization, resilience, and technical training.",
        badge: "Strategic partner",
        footerLabel: "Verify here ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢",
        footerLink: "/certificates/suse-partnership.pdf",
        partnerAccount: {
          label: "Partner Account:",
          number: "SF Account No. A245270",
        },
        image: "/images/home/digital-transformation/suse.webp",
        accent: "green",
      },
    ],
    ecosystemTitle: "Digital transformation delivery ecosystem",
    ecosystemPartners: [
      {
        id: "mirantis",
        name: "Mirantis",
        caption: "Kubernetes Platforms",
        footerLabel: "Strategic partner",
        image: "/images/home/digital-transformation/mirantis.webp",
        accent: "blue",
      },
      {
        id: "cncf",
        name: "CNCF",
        caption: "Cloud-Native Architecture",
        footerLabel: "Silver member",
        image: "/images/home/digital-transformation/cncf.webp",
        accent: "blue",
      },
      {
        id: "azure",
        name: "Microsoft Azure",
        caption: "Hybrid Cloud & DevOps",
        footerLabel: "Strategic partner",
        image: "/images/home/digital-transformation/azure.webp",
        accent: "blue",
      },
      {
        id: "aws",
        name: "AWS",
        caption: "Modernization & AI",
        footerLabel: "Strategic partner",
        image: "/images/home/digital-transformation/aws.webp",
        accent: "blue",
      },
      {
        id: "google-cloud",
        name: "Google Cloud",
        caption: "Data, AI & Platforms",
        footerLabel: "Strategic partner",
        image: "/images/home/digital-transformation/google-cloud.webp",
        accent: "blue",
      },
    ],
    footerText:
      "One partner for consulting, solution design, system integration, and workforce enablement.",
  },

  // globalSectionData: {
  //   highlightText: "Strategic Partnership & Memberships",
  //   title: "Trusted by Global Technology leaders",
  //   desc: "HawkStack Partners with leading enterprise platform and opensource foundations to deliver trusted clud-native, virtualization, and infrastructure modernization solutions.",
  //   items: [
  //     {
  //       id: 1,
  //       partnerName: "Red Hat",
  //       status: "Certified Delivery & Support Partner",
  //       logo: "/images/home/global-leaders/redhat-partners.webp",
  //       tags: [
  //         "Cloud & Service Provider",
  //         "Training Provider",
  //         "Implementation",
  //         "Enterprise Support",
  //       ],
  //       link: "https://catalog.redhat.com/en/partners/detail/hawkstack#overview",
  //     },
  //     {
  //       id: 2,
  //       partnerName: "CNCF",
  //       status: "Silver member and ecosystem contributor",
  //       logo: "/images/home/global-leaders/cncf-partners.webp",
  //       tags: [
  //         "Silver Member",
  //         "Cloud-Native Focus",
  //         "KubeVirtStack Initiative",
  //         "Opensource Alignmnet",
  //       ],
  //       link: "https://landscape.cncf.io/?group=members&item=cncf-members--silver--hawkstack-member",
  //     },
  //     {
  //       id: 3,
  //       partnerName: "Mirantis",
  //       status: "Certified Delivery Partner",
  //       logo: "/images/home/global-leaders/mirantis-partners.webp",
  //       tags: [
  //         "OpenStack Expertise",
  //         "Kubernetes Enablement",
  //         "Infrastructure Modernization",
  //       ],
  //       link: "https://www.mirantis.com/partners/hawkstack/",
  //     },
  //     {
  //       id: 4,
  //       partnerName: "The Linux Foundation",
  //       status: "Silver Partner",
  //       logo: "/images/home/global-leaders/linux-partners.webp",
  //       tags: [
  //         "Silver Partner",
  //         "Open Source Leadership",
  //         "Enterprise Reliability",
  //         "Future-Ready Platforms",
  //       ],
  //       link: "",
  //     },
  //   ],
  // },

};
