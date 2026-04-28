import type { DeliverableItem } from "@/types/deliverables";

export const DELIVERABLE_ITEMS: DeliverableItem[] = [
  {
    title: "High-Availability OpenShift Environment",
    desc: "Production-aligned OpenShift cluster. High-availability baseline as per agreed architecture. Control plane and worker node HA validation.",
    icon: "/images/unified/Environment.webp",
  },
  {
    title: "VM Provisioning Demonstration",
    desc: "Standardized VM templates (RHEL / Windows / Linux variants). Golden images and provisioning workflows. Consistent VM lifecycle operations.",
    icon: "/images/unified/Vm-Demonstration.webp",
  },
  {
    title: "Console-Managed Platform",
    desc: "Full VM operations from OpenShift Console. CLI-based management using oc and virtctl. Unified experience for VMs and containers.",
    icon: "/images/unified/Console-Platform.webp",
  },
  {
    title: "Migration Toolkit for Virtualization",
    desc: "MTV installed and configured. Demonstrated VMware-to-OpenShift migration workflow. Repeatable process for future migrations.",
    icon: "/images/unified/Virtualization.webp",
  },
  {
    title: "Documentation & Runbooks",
    desc: "Platform and architecture documentation. Clearly defined access controls, workflows, and operational procedures. Support and escalation model.",
    icon: "/images/unified/Documentation.webp",
  },
  {
    title: "Team Training & Enablement",
    desc: "Structured knowledge transfer sessions. Enablement for IT Operations and Platform teams. Application owner walkthrough (as required).",
    icon: "/images/unified/Team-Training.webp",
  },
];
