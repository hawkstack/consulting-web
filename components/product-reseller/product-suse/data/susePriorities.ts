import type { SusePriority } from "../types/susePriorities";

export const susePriorities = [
  {
    title: "Enterprise IT",
    description:
      "Simplify infrastructure and support application modernization.",
    icon: "enterprise",
  },
  {
    title: "Government & Public Sector",
    description:
      "Align platform architecture with procurement, security, and operational requirements.",
    icon: "government",
  },
  {
    title: "Distributed Operations",
    description:
      "Establish consistent management across data centers, cloud, and edge locations.",
    icon: "distributed",
  },
] as const satisfies readonly SusePriority[];
