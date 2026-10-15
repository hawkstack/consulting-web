import type { SolutionPageData } from "@/data/solutions/types";
import SolutionsHero from "./SolutionsHero";
import SolutionsExpertiseSection from "./SolutionsExpertiseSection";
import SolutionsDeliverySection from "./SolutionsDeliverySection";
import SolutionsBusinessSection from "./SolutionsBusinessSection";

type SolutionPageLayoutProps = { solution: SolutionPageData };

/** Shared structural shell. Section components can be registered as the page designs are finalized. */
export default function SolutionPageLayout({
  solution,
}: SolutionPageLayoutProps) {
  const sections = [...solution.sections]
    .filter((section) => section.enabled !== false)
    .sort((left, right) => left.order - right.order);

  return (
    <div className="mx-auto w-full" data-solution-page={solution.slug}>
      <SolutionsHero content={solution.hero} />
      <SolutionsExpertiseSection content={solution.expertise} />
      <SolutionsDeliverySection content={solution.deliveryApproach} />
      <SolutionsBusinessSection content={solution.businessEnablement} />
      {sections.map((section) => (
        <section key={section.id} data-solution-section={section.id} />
      ))}
    </div>
  );
}
