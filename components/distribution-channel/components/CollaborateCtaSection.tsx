import { collaborateCtaContent as content } from "@/components/distribution-channel/data/distributionChannelData";

export default function CollaborateCtaSection() {
  return (
    <section className="bg-white px-5 py-8 font-lexend sm:px-8 lg:px-12 lg:py-8 xl:px-[5.3%]">
      <div className="relative mx-auto flex min-h-[224px] max-w-[1170px] flex-col justify-center gap-7 overflow-hidden rounded-[20px] bg-[#0b1d39] px-7 py-8 text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-[38px] lg:py-8">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-[15%] hidden w-[115px] -skew-x-[31deg] bg-[#122653] lg:block"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-[4%] hidden w-[115px] -skew-x-[31deg] bg-[#1a3158] lg:block"
        />

        <div className="relative z-10 min-w-0 lg:max-w-[650px]">
          <p className="text-[10px] font-bold tracking-[0.14em] text-[#8dc4ff]">
            {content.eyebrow}
          </p>
          <h2 className="mt-[24px] text-[28px] font-semibold leading-[1.25] tracking-[-0.02em] sm:text-[34px] xl:text-[38px]">
            {content.heading}
          </h2>
          <p className="mt-[22px] max-w-[610px] text-[14px] leading-[1.7] text-[#c2d2e7] sm:text-[15px]">
            {content.description}
          </p>
        </div>

        <a
          href={content.actionHref}
          className="relative z-10 inline-flex min-h-[46px] w-fit shrink-0 items-center justify-center rounded-[8px] bg-white px-[18px] text-[12px] font-semibold text-[#172a47] transition-colors hover:bg-[#eaf2fd] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:mr-[39px]"
        >
          {content.actionLabel}
        </a>
      </div>
    </section>
  );
}
