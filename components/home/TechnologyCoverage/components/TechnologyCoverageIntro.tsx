import { technologyCoverageCopy as copy } from "../data/TechnologyCoverage.data";

export default function TechnologyCoverageIntro() {
  return (
    <div className="grid gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#137DD3]">
          {copy.sectionEyebrow}
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-[#0A182E] sm:text-4xl xl:text-[46px]">
          {copy.sectionTitleFirstLine}
          <br className="hidden sm:block" /> {copy.sectionTitleSecondLine}
        </h2>
      </div>
      <p className="rounded-3xl bg-[#EFF8FF] px-6 py-5 text-sm leading-relaxed text-[#0066FF] sm:text-base">
        {copy.sectionDescription}
      </p>
    </div>
  );
}
