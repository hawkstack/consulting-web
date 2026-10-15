import type { SolutionPageData, SolutionSlug } from "./types";
import { applicationModernizationData } from "./application-modernization";
import { dataCenterSolutionsData } from "./data-center-solutions";
import { enterpriseInfrastructureSecurityData } from "./enterprise-infrastructure-security";
import { enterpriseSkillsEnablementData } from "./enterprise-skills-enablement";
import { enterpriseTechnologyConsultingData } from "./enterprise-technology-consulting";
import { virtualizationMigrationData } from "./virtualization-migration";

export const solutions = {
  "data-center-solutions": dataCenterSolutionsData,
  "application-modernization": applicationModernizationData,
  "enterprise-infrastructure-security": enterpriseInfrastructureSecurityData,
  "virtualization-migration": virtualizationMigrationData,
  "enterprise-technology-consulting": enterpriseTechnologyConsultingData,
  "enterprise-skills-enablement": enterpriseSkillsEnablementData,
} satisfies Record<SolutionSlug, SolutionPageData>;

export {
  applicationModernizationData,
  dataCenterSolutionsData,
  enterpriseInfrastructureSecurityData,
  enterpriseSkillsEnablementData,
  enterpriseTechnologyConsultingData,
  virtualizationMigrationData,
};

export type * from "./types";

export function getSolutionBySlug(
  slug: string,
): SolutionPageData | undefined {
  return Object.prototype.hasOwnProperty.call(solutions, slug)
    ? solutions[slug as SolutionSlug]
    : undefined;
}
