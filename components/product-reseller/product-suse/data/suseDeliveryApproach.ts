import type { SuseDeliveryStep } from "../types/suseDeliveryApproach";

export const suseDeliverySteps = [
  {
    number: "01",
    title: "Assess",
    description:
      "Review infrastructure, workloads, dependencies, and modernization goals.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Define the architecture, subscription requirements, migration plan, and success criteria.",
  },
  {
    number: "03",
    title: "Implement",
    description:
      "Deploy platforms, integrate services, and validate agreed workloads.",
  },
  {
    number: "04",
    title: "Enable & Support",
    description:
      "Deliver documentation, team enablement, optimization, and ongoing operational assistance.",
  },
] as const satisfies readonly SuseDeliveryStep[];
