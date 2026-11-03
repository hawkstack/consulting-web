import type { DellCtaData } from "../types/dell.types";

export default function DellCtaSection({ data }: { data: DellCtaData }) {

  return (
    <section className="bg-[#102C46] px-5 pb-10 pt-12 text-white sm:px-8 sm:pb-11 sm:pt-14 md:px-12 lg:px-10 lg:pb-[62px] lg:pt-[62px] xl:px-[6.8vw]">
      <div className="mx-auto max-w-[1214px]">
        <p className="mb-[18px] text-[11px] font-bold tracking-[0.04em] text-[#82CBF8]">
          {data.eyebrow}
        </p>
        <h2 className="font-lexend text-[28px] font-semibold leading-[1.25] tracking-[-0.025em] sm:text-[34px] lg:text-[38px]">
          {data.heading}
        </h2>

        <div className="mt-[22px] flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
          <p className="text-[14px] leading-[1.75] text-[#E2EAF0] sm:text-[15px] lg:text-[16px]">
            {data.description.map((line) => (
              <span className="block" key={line}>
                {line}
              </span>
            ))}
          </p>
          <a
            href={data.cta.href}
            className="inline-flex min-h-[48px] shrink-0 items-center justify-center rounded-[10px] bg-white px-[17px] text-[13px] font-semibold text-[#102C46] md:ml-8 xl:mr-[42px]"
          >
            {data.cta.label}
          </a>
        </div>

        <ul className="mt-[25px] flex flex-wrap items-center gap-x-[11px] gap-y-2 text-[12px] leading-[1.4] text-[#B7D4E7]">
          {data.supportingItems.map((item, index) => (
            <li className="flex items-center gap-[11px]" key={item}>
              {index > 0 && (
                <span aria-hidden="true" className="text-[#82CBF8]">
                  •
                </span>
              )}
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
