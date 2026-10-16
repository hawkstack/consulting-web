import { notFound } from "next/navigation";
import { SolutionPageLayout } from "@/components/solutions";
import { solutions, getSolutionBySlug } from "@/data/solutions";

type SolutionRouteProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(solutions).map((slug) => ({ slug }));
}

export default async function SolutionRoute({ params }: SolutionRouteProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) notFound();

  return <SolutionPageLayout solution={solution} />;
}
