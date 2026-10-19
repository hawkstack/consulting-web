import type { SolutionPageData } from "@/data/solutions/types";

type SolutionTranslator = {
  (key: string): string;
  has(key: string): boolean;
};

/** Applies available translations and keeps English for copy that is not supplied yet. */
export function getLocalizedSolutionPageData(
  solution: SolutionPageData,
  t: SolutionTranslator,
): SolutionPageData {
  const translate = (key: string, fallback: string) =>
    t.has(key) ? t(key) : fallback;

  return {
    ...solution,
    hero: {
      ...solution.hero,
      eyebrow: translate("hero.eyebrow", solution.hero.eyebrow),
      heading: translate("hero.heading", solution.hero.heading),
      highlightedHeading: translate("hero.highlightedHeading", solution.hero.highlightedHeading),
      description: translate("hero.description", solution.hero.description),
      ctaLabel: translate("hero.ctaLabel", solution.hero.ctaLabel),
    },
    expertise: {
      ...solution.expertise,
      heading: translate("expertise.heading", solution.expertise.heading),
      description: translate("expertise.description", solution.expertise.description),
      cards: solution.expertise.cards.map((card, index) => ({
        ...card,
        title: translate(`expertise.cards.${index}.title`, card.title),
        description: translate(`expertise.cards.${index}.description`, card.description),
      })),
    },
    deliveryApproach: {
      ...solution.deliveryApproach,
      heading: translate("deliveryApproach.heading", solution.deliveryApproach.heading),
      description: translate("deliveryApproach.description", solution.deliveryApproach.description),
      steps: solution.deliveryApproach.steps.map((step, index) => ({
        ...step,
        title: translate(`deliveryApproach.steps.${index}.title`, step.title),
        description: translate(`deliveryApproach.steps.${index}.description`, step.description),
      })),
    },
    businessEnablement: {
      ...solution.businessEnablement,
      eyebrow: translate("businessEnablement.eyebrow", solution.businessEnablement.eyebrow),
      heading: translate("businessEnablement.heading", solution.businessEnablement.heading),
      description: translate("businessEnablement.description", solution.businessEnablement.description),
      takeaway: translate("businessEnablement.takeaway", solution.businessEnablement.takeaway),
      cards: solution.businessEnablement.cards.map((card, index) => ({
        ...card,
        title: translate(`businessEnablement.cards.${index}.title`, card.title),
        description: translate(`businessEnablement.cards.${index}.description`, card.description),
      })),
    },
  };
}
