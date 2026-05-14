import { RedHatAICapabilitiesData } from "@/app/types/product-reseller/product-redhat/redhat-ai/redhat-ai";
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
