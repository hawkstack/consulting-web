import type { SuseWhyChooseFeature } from "../types/suseWhyChoose";

export const suseWhyChooseFeatures = [
  {
    title: "Architecture before acquisition:",
    description:
      "Align subscriptions and platform choices with your workloads, operating model, and growth plans.",
    icon: "architecture",
  },
  {
    title: "Connected infrastructure expertise:",
    description:
      "Bring Linux, Kubernetes, virtualization, storage, and networking into one implementation roadmap.",
    icon: "connected",
  },
  {
    title: "Migration with clarity:",
    description:
      "Assess dependencies, validate compatibility, and plan a phased transition.",
    icon: "migration",
  },
  {
    title: "Operational readiness:",
    description:
      "Prepare your teams with documentation, knowledge transfer, and practical enablement.",
    icon: "readiness",
  },
] as const satisfies readonly SuseWhyChooseFeature[];
