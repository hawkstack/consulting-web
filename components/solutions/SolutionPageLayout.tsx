import { useLocale } from "next-intl";
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
  const textDirection = useLocale() === "ar" ? "rtl" : "ltr";
  const sections = [...solution.sections]
    .filter((section) => section.enabled !== false)
    .sort((left, right) => left.order - right.order);

  return (
    <div dir="ltr" className="mx-auto w-full" data-solution-page={solution.slug}>
      <SolutionsHero content={solution.hero} textDirection={textDirection} />
      <SolutionsExpertiseSection content={solution.expertise} textDirection={textDirection} />
      <SolutionsDeliverySection content={solution.deliveryApproach} textDirection={textDirection} />
      <SolutionsBusinessSection content={solution.businessEnablement} textDirection={textDirection} />
      {sections.map((section) => (
        <section key={section.id} data-solution-section={section.id} />
      ))}
    </div>
  );
}
