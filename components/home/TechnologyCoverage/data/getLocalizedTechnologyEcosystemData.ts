import { technologyEcosystemData } from "./TechnologyCoverage.data";
import type {
  TechnologyEcosystemCopy,
  TechnologyEcosystemData,
} from "../types/TechnologyCoverage.types";

/** Merges translated copy with the shared brand names, assets, and links. */
export function getLocalizedTechnologyEcosystemData(
  copy: Partial<TechnologyEcosystemCopy>,
): TechnologyEcosystemData {
  return {
    ...technologyEcosystemData,
    title: copy.title ?? technologyEcosystemData.title,
    highlight: copy.highlight ?? technologyEcosystemData.highlight,
    description: copy.description ?? technologyEcosystemData.description,
    benefits: technologyEcosystemData.benefits.map((benefit) => ({
      ...benefit,
      title: copy.benefits?.[benefit.id]?.title ?? benefit.title,
      description:
        copy.benefits?.[benefit.id]?.description ?? benefit.description,
    })),
    groups: technologyEcosystemData.groups.map((group) => ({
      ...group,
      title: copy.groups?.[group.id] ?? group.title,
    })),
    distribution: {
      ...technologyEcosystemData.distribution,
      eyebrow:
        copy.distribution?.eyebrow ??
        technologyEcosystemData.distribution.eyebrow,
      title:
        copy.distribution?.title ?? technologyEcosystemData.distribution.title,
      description:
        copy.distribution?.description ??
        technologyEcosystemData.distribution.description,
      partners: technologyEcosystemData.distribution.partners.map(
        (partner) => ({
          ...partner,
          name:
            partner.id === "gem"
              ? (copy.distribution?.gemName ?? partner.name)
              : partner.name,
        }),
      ),
    },
    cta: {
      ...technologyEcosystemData.cta,
      label: copy.ctaLabel ?? technologyEcosystemData.cta.label,
    },
  };
}
