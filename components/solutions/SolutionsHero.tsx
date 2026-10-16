import Link from "next/link";
import type { SolutionHeroConfig } from "@/data/solutions/types";

type SolutionsHeroProps = { content: SolutionHeroConfig };

export default function SolutionsHero({ content }: SolutionsHeroProps) {
  return (
    <section className="relative isolate flex min-h-[570px] w-full items-center justify-center overflow-hidden bg-[#03172c] px-5 py-20 text-center sm:min-h-[540px] sm:px-8 sm:py-16 lg:min-h-[534px] lg:px-10 lg:py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[repeating-linear-gradient(0deg,transparent_0,transparent_93px,rgba(49,119,163,0.09)_94px,transparent_95px)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[245px] top-[76%] -z-10 h-[440px] w-[440px] -translate-y-1/2 rounded-full bg-[#061b32]/75"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[115px] top-[35%] -z-10 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-[#061b32]/65"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-sky-500/[0.2] sm:h-[430px] sm:w-[430px] lg:h-[480px] lg:w-[480px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/[0.11] sm:h-[290px] sm:w-[290px] lg:h-[330px] lg:w-[330px]"
      />

      <div className="relative mx-auto flex w-full max-w-[1080px] flex-col items-center">
        <span className="inline-flex max-w-full items-center justify-center rounded-full border border-cyan-500/35 bg-cyan-500/[0.035] px-5 py-2 font-lexend text-[10px] font-bold tracking-[0.08em] text-[#04c4f4] sm:px-5 sm:text-[11px]">
          {content.eyebrow}
        </span>

        <h1 className="mt-3 flex flex-col items-center font-lexend text-[clamp(2rem,3.35vw,3rem)] font-semibold leading-[1.12] tracking-[-0.025em] sm:mt-3">
          <span className="text-white">{content.heading}</span>
          <span className="bg-gradient-to-r from-[#32d2e5] via-[#16aef5] to-[#0878fa] bg-clip-text text-transparent">
            {content.highlightedHeading}
          </span>
        </h1>

        <p className="mt-4 max-w-[880px] font-lexend text-[15px] font-normal leading-[1.35] text-[#d2dae5] sm:mt-4 sm:text-base lg:text-[17px]">
          {content.description}
        </p>

        <Link
          href={content.ctaHref}
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#16b89c] to-[#075ee8] px-6 py-3 font-lexend text-sm font-medium text-white transition duration-200 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200 sm:mt-6 sm:px-6"
        >
          {content.ctaLabel}
        </Link>
      </div>
    </section>
  );
}
