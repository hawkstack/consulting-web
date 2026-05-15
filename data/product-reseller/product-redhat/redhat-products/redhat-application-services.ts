import {
  RedHatAICapabilitiesData,
  RedHatAICtaData,
  RedHatAIFoundationSectionData,
  RedHatAIStrategySectionData,
} from "@/app/types/product-reseller/product-redhat/redhat-ai/redhat-ai";
import type { RedHatApplicationServicesData } from "@/app/types/product-reseller/product-redhat/redhat-products/redhat-application-services";

export const redHatApplicationServicesData: RedHatApplicationServicesData = {
  heading: "Application services",
  showAllButtonText: "Explore all products",
  showLessButtonText: "Less products",
  products: [
    {
      title: "Red Hat 3scale API Management",
      description:
        "Share, secure, control, distribute, and monetize application programming interfaces across teams and partners.",
    },
    {
      title: "Red Hat AMQ",
      description:
        "A flexible messaging platform for real-time integration, event-driven systems, and IoT connectivity.",
    },
    {
      title: "Red Hat Application Foundations",
      description:
        "A curated set of components for building, deploying, integrating, and modernizing enterprise applications.",
    },
    {
      title: "Red Hat Connectivity Link",
      description:
        "A Kubernetes-native solution to manage, secure, and connect applications across cloud environments.",
    },
    {
      title: "Red Hat Data Grid",
      description:
        "An in-memory, distributed, NoSQL datastore that helps applications access, process, and analyze data quickly.",
    },
    {
      title: "Red Hat JBoss Enterprise Application Platform",
      description:
        "An enterprise Java application server for building once and deploying across multiple environments.",
    },
    {
      title: "Red Hat JBoss Web Server",
      description:
        "A web server platform for managing and administering enterprise web environments of any size.",
    },
    {
      title: "Red Hat Runtimes",
      description:
        "Products, tools, and components for developing, running, and maintaining cloud-native applications.",
    },
  ],
};

export const redHatCloudComputingData: RedHatApplicationServicesData = {
  heading: "Cloud computing",
  showAllButtonText: "Explore all products",
  showLessButtonText: "Less products",
  products: [
    {
      title: "Microsoft Azure Red Hat OpenShift",
      description:
        "A fully managed Red Hat OpenShift service jointly engineered and supported by Microsoft and Red Hat.",
    },
    {
      title: "Red Hat Advanced Developer Suite",
      description:
        "A suite for improving developer productivity, application security, and platform engineering workflows.",
    },
    {
      title: "Red Hat Certificate System",
      description:
        "A security framework for managing user identities and secure communications.",
    },
    {
      title: "Red Hat Developer Hub",
      description:
        "A developer portal platform that improves self-service, standards, and developer experience.",
    },
    {
      title: "Red Hat Device Edge",
      description:
        "A platform for small, resource-constrained edge devices across remote and distributed environments.",
    },
    {
      title: "Red Hat Directory Server",
      description:
        "An LDAP-based directory service that centralizes user access and identity data.",
    },
    {
      title: "Red Hat OpenShift",
      description:
        "A unified application development platform for building, modernizing, and deploying apps at scale.",
    },
    {
      title: "Red Hat OpenShift Container Platform",
      description:
        "A hybrid cloud platform for building and scaling containerized applications.",
    },
    {
      title: "Red Hat OpenShift Dedicated",
      description:
        "A fully managed OpenShift service designed for teams that want cloud convenience with enterprise support.",
    },
    {
      title: "Red Hat OpenShift Platform Plus",
      description:
        "An enterprise application platform with multi-cluster management, Kubernetes security, and image registry capabilities.",
    },
    {
      title: "Red Hat OpenShift Service on AWS",
      description:
        "A fully managed OpenShift service running on AWS public cloud.",
    },
    {
      title: "Red Hat OpenShift Virtualization",
      description:
        "Run and manage virtual machines alongside container workloads in OpenShift.",
    },
    {
      title: "Red Hat OpenStack Services on OpenShift",
      description:
        "A platform that virtualizes hardware and organizes resources into private cloud services.",
    },
    {
      title: "Red Hat Quay",
      description:
        "A container image registry for storing, building, and distributing container images.",
    },
    {
      title: "Red Hat Service Interconnect",
      description:
        "A cross-platform connectivity solution for linking services across Red Hat and non-Red Hat environments.",
    },
  ],
};

export const redHatLinuxPlatformsData: RedHatApplicationServicesData = {
  heading: "Linux platforms",
  showAllButtonText: "Explore all products",
  showLessButtonText: "Less products",
  products: [
    {
      title: "Red Hat Enterprise Linux",
      description:
        "A stable, high-performance Linux platform with built-in security and management features for critical workloads.",
    },
    {
      title: "Red Hat Enterprise Linux for SAP Solutions",
      description:
        "The reliability and power of Linux with technologies designed for SAP workload requirements.",
    },
  ],
};

export const redHatManagementData: RedHatApplicationServicesData = {
  heading: "Management",
  showAllButtonText: "Explore all products",
  showLessButtonText: "Less products",
  products: [
    {
      title: "Red Hat Advanced Cluster Management for Kubernetes",
      description:
        "A single console for managing Kubernetes clusters and applications with governance and policies.",
    },
    {
      title: "Red Hat Advanced Cluster Security for Kubernetes",
      description:
        "A Kubernetes-native security platform for building, deploying, and running cloud-native apps securely.",
    },
    {
      title: "Red Hat Ansible Automation Platform",
      description:
        "A platform for implementing enterprise-wide automation across infrastructure, cloud, network, and security workflows.",
    },
    {
      title: "Red Hat Ansible Automation Platform on Microsoft Azure",
      description:
        "A managed application for enterprise automation deployed in Azure and supported by Red Hat.",
    },
    {
      title: "Red Hat Lightspeed",
      description:
        "Predictive analytics that helps identify and remediate security, performance, and availability risks.",
    },
    {
      title: "Red Hat Satellite",
      description:
        "System management software that makes Red Hat infrastructure easier to deploy, scale, and manage.",
    },
  ],
};

export const redHatArtificialIntelligenceData: RedHatApplicationServicesData = {
  heading: "Artificial intelligence",
  showAllButtonText: "Explore all products",
  showLessButtonText: "Less products",
  products: [
    {
      title: "Red Hat AI Enterprise",
      description:
        "An integrated platform for building and running efficient models, agents, and AI applications on any infrastructure.",
    },
    {
      title: "Red Hat AI Factory with NVIDIA",
      description:
        "A co-engineered enterprise AI solution for building, deploying, and managing AI at scale across hybrid cloud.",
    },
    {
      title: "Red Hat AI Inference Server",
      description:
        "An inference server designed to optimize model deployment across hybrid cloud environments.",
    },
    {
      title: "Red Hat Ansible Lightspeed",
      description:
        "A generative AI service that helps IT teams create reliable Ansible automation code more efficiently.",
    },
    {
      title: "Red Hat Enterprise Linux AI",
      description:
        "A generative AI server appliance built for fast, cost effective inference and Linux-based AI operations.",
    },
    {
      title: "Red Hat OpenShift AI",
      description:
        "A platform for developing, training, serving, and monitoring AI models and AI-enabled applications.",
    },
  ],
};

export const redHatProductsCapabilitiesData: RedHatAICapabilitiesData = {
  cards: [
    {
      id: 1,
      title: "Build",
      description:
        "Design application, cloud, AI, automation, and Linux solutions around real business outcomes.",
    },
    {
      id: 2,
      title: "Deploy",
      description:
        "Implement Red Hat platforms with secure architecture, migration planning, and integration support.",
    },
    {
      id: 3,
      title: "Optimize",
      description:
        "Improve performance, automation, reliability, governance, security, and cost efficiency over time.",
    },
  ],
};

export const redHatProductsFeaturedPlatformsData: RedHatAIFoundationSectionData =
  {
    tag: "Featured platforms",
    title: "Start with the Red Hat foundation that matches your business goal.",
    description:
      "These core platforms help organizations standardize infrastructure, build modern applications, scale automation, and accelerate AI adoption.",
    cards: [
      {
        badge: "AI",
        title: "Red Hat AI",
        description:
          "Develop, deploy, and manage AI models, inference, agents, and applications across hybrid environments.",
        ctaText: "Explore AI →",
        href: "/product-reseller/redhat-ai",
      },
      {
        badge: "LX",
        title: "Red Hat Enterprise Linux",
        description:
          "Run critical workloads on a secure, stable, and consistent Linux foundation across cloud and data center.",
        ctaText: "Explore Linux →",
        href: "/product-reseller/redhat-enterprise-linux",
      },
      {
        badge: "OS",
        title: "Red Hat OpenShift",
        description:
          "Build, modernize, and deploy applications at scale using an enterprise Kubernetes platform.",
        ctaText: "Explore OpenShift →",
        href: "/product-reseller/redhat-openshift",
      },
      {
        badge: "AA",
        title: "Red Hat Ansible Automation Platform",
        description:
          "Create, manage, and scale enterprise-wide automation across infrastructure, cloud, networks, and security.",
        ctaText: "Explore automation →",
        href: "/product-reseller/redhat-ansible-automation",
      },
    ],
  };

export const redHatProductsDeliveryModelData: RedHatAIStrategySectionData = {
  tag: "HawkStack delivery model",
  heading: "Not sure which Red Hat product fits your roadmap? We help you choose.",
  description:
    "HawkStack turns the Red Hat portfolio into a clear solution roadmap aligned with your infrastructure, applications, security requirements, and business goals.",
  cards: [
    {
      id: 1,
      title: "Discover",
      description:
        "Understand your current IT environment, application estate, cloud model, and operational challenges.",
    },
    {
      id: 2,
      title: "Map",
      description:
        "Identify the right Red Hat products, integrations, licensing path, and implementation sequence.",
    },
    {
      id: 3,
      title: "Deploy",
      description:
        "Implement platforms with security, governance, automation, migration, and platform engineering support.",
    },
    {
      id: 4,
      title: "Optimize",
      description:
        "Improve performance, reliability, cost, adoption, automation, and long-term operating maturity.",
    },
  ],
};

export const redHatProductsCtaData: RedHatAICtaData = {
  tag: "Build your Red Hat roadmap",
  title: "Ready to choose and deploy the right Red Hat solutions?",
  description:
    "Talk to HawkStack about your application, cloud, AI, automation, Linux, or management requirements. We'll help you build a practical product and implementation plan.",
  buttons: [
    {
      label: "Schedule a consultation",
      href: "/contact",
      variant: "primary",
    },
  ],
};
