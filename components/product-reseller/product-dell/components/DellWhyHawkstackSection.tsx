import type { DellWhyHawkstackData } from "../types/dell.types";

export default function DellWhyHawkstackSection({ data }: { data: DellWhyHawkstackData }) {

  return (
    <section className="bg-[#F7FAFC] px-5 pb-14 pt-10 text-[#102b41] sm:px-8 sm:pb-16 sm:pt-11 md:px-12 lg:px-10 lg:pb-[58px] lg:pt-[41px] xl:px-[6.8vw]">
      <div className="mx-auto max-w-[1214px]">
        <header>
          <p className="mb-2 text-[11px] font-bold tracking-[0.04em] text-[#0076CE]">
            {data.eyebrow}
          </p>
          <h2 className="font-lexend text-[27px] font-semibold leading-[1.32] tracking-[-0.025em] sm:text-[30px]">
            {data.heading.map((line) => (
              <span className="block" key={line}>
                {line}
              </span>
            ))}
          </h2>
        </header>

        <div className="mt-8 grid gap-x-7 gap-y-8 sm:grid-cols-2 lg:mt-[34px] lg:grid-cols-4 lg:gap-x-[30px] lg:gap-y-0">
          {data.items.map((item) => (
            <article key={item.heading}>
              <div className="mb-[17px] h-px w-[45px] bg-[#0076ce]" />
              <h3 className="font-lexend text-[16px] font-semibold leading-[1.4] text-[#102b41] sm:text-[17px]">
                {item.heading}
              </h3>
              <p className="mt-[15px] text-[13px] leading-[1.5] text-[#587185]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
