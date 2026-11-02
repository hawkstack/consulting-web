import { dellProcessData } from "../data/dellData";

export default function DellProcessSection() {
  const data = dellProcessData;

  return (
    <section className="bg-white px-5 py-12 text-[#102b41] sm:px-8 sm:py-14 md:px-12 lg:px-10 lg:py-[64px] xl:px-[6.8vw]">
      <div className="mx-auto grid max-w-[1214px] gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-12 lg:gap-[54px] xl:grid-cols-[620px_484px] xl:gap-[60px]">
        <div className="md:pt-[21px]">
          <p className="mb-[6px] text-[11px] font-bold tracking-[0.04em] text-[#0076CE]">
            {data.eyebrow}
          </p>
          <h2 className="font-lexend text-[27px] font-semibold leading-[1.32] tracking-[-0.025em] sm:text-[30px] lg:text-[32px]">
            {data.heading.map((line) => (
              <span className="block" key={line}>
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-[22px] max-w-[380px] text-[14px] leading-[1.6] text-[#587185]">
            {data.description}
          </p>
          <a
            href={data.cta.href}
            className="mt-[23px] inline-block text-[12px] font-semibold text-[#0076CE]"
          >
            {data.cta.label}
          </a>
        </div>

        <div className="space-y-[27px] md:space-y-[27px]">
          {data.steps.map((step) => (
            <article
              key={step.number}
              className="grid grid-cols-[48px_minmax(0,1fr)] gap-4"
            >
              <p className="font-lexend text-[30px] font-semibold leading-[1.2] text-[#0076CE]">
                {step.number}
              </p>
              <div className="border-b border-[#D5E0E8] pb-[8px]">
                <h3 className="font-lexend text-[17px] font-semibold leading-[1.35] text-[#102b41]">
                  {step.heading}
                </h3>
                <p className="mt-[8px] text-[12px] leading-[1.45] text-[#587185]">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
