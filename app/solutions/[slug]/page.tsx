import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { SolutionPageLayout } from "@/components/solutions";
import { solutions, getSolutionBySlug } from "@/data/solutions";
import { getLocalizedSolutionPageData } from "@/lib/solutions/getLocalizedSolutionPageData";

type SolutionRouteProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(solutions).map((slug) => ({ slug }));
}

export default async function SolutionRoute({ params }: SolutionRouteProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) notFound();

  const messages = await getMessages();
  const solutionMessages = messages.Solutions;
  const copy =
    solutionMessages && typeof solutionMessages === "object"
      ? solutionMessages[solution.slug]
      : undefined;

  // New locale data is picked up automatically; absent pages use English.
  if (!copy || typeof copy !== "object") {
    return <SolutionPageLayout solution={solution} />;
  }

  const t = await getTranslations(`Solutions.${solution.slug}`);
  const localizedSolution = getLocalizedSolutionPageData(solution, t);

  return <SolutionPageLayout solution={localizedSolution} />;
}
