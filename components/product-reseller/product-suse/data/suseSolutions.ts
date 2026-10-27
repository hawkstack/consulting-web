import type { SuseSolution } from "../types/suseSolutions";

export const suseSolutions = [
  {
    name: "SUSE Linux Enterprise Server",
    description:
      "Run business-critical applications on an enterprise Linux platform built for reliability, security, and long-term operational stability.",
    href: "https://www.suse.com/products/server/",
    icon: "layers",
  },
  {
    name: "SUSE Rancher Prime",
    description:
      "Simplify Kubernetes management across environments with centralized administration, consistent policies, and enterprise support.",
    href: "https://www.suse.com/products/suse-rancher/",
    icon: "network",
  },
  {
    name: "SUSE Virtualization",
    description:
      "Modernize virtual infrastructure with a Kubernetes-native platform that brings virtual machines and container operations closer together.",
    href: "https://www.suse.com/products/virtualization/",
    icon: "server",
  },
  {
    name: "SUSE Security",
    description:
      "Strengthen container security with vulnerability management, runtime protection, and policies that help safeguard cloud-native workloads.",
    href: "https://www.suse.com/products/security/",
    icon: "shield",
  },
  {
    name: "SUSE Multi Linux Manager",
    description:
      "Centralize provisioning, patching, configuration, and compliance management across supported Linux distributions.",
    href: "https://www.suse.com/products/multi-linux-manager/",
    icon: "sliders",
  },
  {
    name: "SUSE Observability",
    description:
      "Understand application dependencies, investigate issues, and improve visibility across Kubernetes environments.",
    href: "https://www.suse.com/products/observability/",
    icon: "eye",
  },
] as const satisfies readonly SuseSolution[];
