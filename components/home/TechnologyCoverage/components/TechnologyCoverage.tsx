import TechnologyCategories from "./TechnologyCategories";
import TechnologyCoverageIntro from "./TechnologyCoverageIntro";
import TechnologyCoveragePanel from "./TechnologyCoveragePanel";
import TechnologyJourney from "./TechnologyJourney";
import TechnologyMembershipCards from "./TechnologyMembershipCards";

export default function TechnologyCoverage() {
  return (
    <section className="bg-white px-5 py-14 font-lexend text-slate-900 sm:px-8 lg:px-12 lg:py-20 xl:px-16">
      <div className="mx-auto max-w-[1360px]">
        <TechnologyCoverageIntro />
        <TechnologyJourney />
        <TechnologyCoveragePanel />
        <TechnologyMembershipCards />
        <TechnologyCategories />
      </div>
    </section>
  );
}
