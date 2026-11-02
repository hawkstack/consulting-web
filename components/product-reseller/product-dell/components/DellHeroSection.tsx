import type { DellHeroData } from "../types/dell.types";

export default function DellHeroSection({ data }: { data: DellHeroData }) {

  return (
    <section className="w-full bg-[#EAF4FB] px-5 py-10 text-[#102b41] sm:px-8 md:px-9 md:py-12 lg:px-10 xl:px-[6.8vw]">
      <div className="mx-auto grid w-full max-w-[1366px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12 xl:gap-[6.6vw]">
        <div className="w-full lg:max-w-[600px]">
          <div className="mb-3 text-[18px] font-semibold leading-6 tracking-[-0.02em]">
            <span>{data.brand.first}</span>{" "}
            <span className="text-[#0076CE]">{data.brand.second}</span>
          </div>
          <p className="mb-5 text-[11px] font-bold tracking-[0.12em] text-[#0076CE]">
            {data.eyebrow}
          </p>
          <h1 className="font-lexend text-[34px] font-semibold leading-[1.16] tracking-[-0.035em] sm:text-[40px] md:text-[44px] xl:text-[44px]">
            {data.heading.lines.map((line) => (
              <span className="block" key={line}>
                {line}
              </span>
            ))}
            <span className="block text-[#0076CE]">
              {data.heading.highlight}
            </span>
          </h1>
          <p className="mt-5 max-w-[600px] text-[15px] leading-[1.55] text-[#587185]">
            {data.description}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href={data.primaryCta.href}
              className="inline-flex min-h-[46px] items-center justify-center rounded-md bg-[#0076CE] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-[#0066b3]"
            >
              {data.primaryCta.label}
            </a>
            <a
              href={data.secondaryCta.href}
              className="inline-flex min-h-[46px] items-center justify-center rounded-md border border-[#a8bfce] px-6 text-[13px] font-semibold text-[#102b41] transition-colors hover:bg-white/50"
            >
              {data.secondaryCta.label}
            </a>
          </div>
          <p className="mt-6 text-[10px] font-semibold tracking-[0.035em] text-[#61798a]">
            {data.footerLabel}
          </p>
        </div>

        <div className="relative flex aspect-[566/425] w-full flex-col overflow-hidden rounded-[20px] bg-gradient-to-br from-[#0c2639] to-[#153f5a] p-6 text-white sm:p-8 lg:min-h-[390px] lg:aspect-auto lg:p-[30px] xl:min-h-[425px]">
          <p className="text-[10px] font-bold tracking-[0.015em] text-[#70cfff]">
            {data.imageTopLabel}
          </p>
          <div
            className="min-h-0 flex-1 bg-contain bg-center bg-no-repeat"
            role={data.imageAlt ? "img" : undefined}
            aria-label={data.imageAlt || undefined}
            style={{ backgroundImage: `url("${data.imagePath}")` }}
          />
          <div className="border-t border-white/30 pt-4">
            <h2 className="font-lexend text-[18px] font-medium leading-6 sm:text-[20px]">
              {data.imageHeading}
            </h2>
            <p className="mt-1 text-[12px] text-[#70cfff]">
              {data.imageCaption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
