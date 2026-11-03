import type { DellIntegrationData } from "../types/dell.types";

export default function DellIntegrationSection({ data }: { data: DellIntegrationData }) {

  return (
    <section className="bg-[#102C46] px-5 pb-16 pt-12 text-white sm:px-8 sm:pb-20 sm:pt-14 md:px-12 lg:px-10 lg:pb-[96px] lg:pt-[63px] xl:px-[6.8vw]">
      <div className="mx-auto max-w-[1214px]">
        <header className="mb-9 grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(280px,394px)] md:items-center lg:mb-[35px]">
          <div>
            <p className="mb-3 text-[11px] font-bold tracking-[0.04em] text-[#82CBF8]">
              {data.eyebrow}
            </p>
            <h2 className="max-w-[620px] font-lexend text-[26px] font-semibold leading-[1.32] tracking-[-0.025em] sm:text-[30px]">
              {data.heading}
            </h2>
          </div>
          <p className="max-w-[400px] text-[14px] leading-[1.6] text-white md:justify-self-end lg:text-[15px]">
            {data.description}
          </p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[38px]">
          {data.steps.map((step) => (
            <article
              key={step.number}
              className="border-t border-white/30 pt-[10px]"
            >
              <p className="font-lexend text-[25px] font-semibold leading-[1.25] text-[#82CBF8]">
                {step.number}
              </p>
              <h3 className="mt-[10px] font-lexend text-[18px] font-semibold leading-[1.35] sm:text-[20px]">
                {step.heading}
              </h3>
              <ul className="mt-[17px] space-y-[2px] text-[13px] leading-[1.45] text-white">
                {step.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
