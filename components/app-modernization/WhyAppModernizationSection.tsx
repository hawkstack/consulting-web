import type { AppModernizationWhySectionContent } from "@/app/types/app-modernization";

export default function WhyAppModernizationSection({
  content,
}: {
  content: AppModernizationWhySectionContent;
}) {
  return (
    <section className="bg-white font-lexend">
      <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 md:px-8 md:py-12 lg:px-12 lg:py-14">
        <div className="grid items-center gap-7 md:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,480px)] lg:gap-12">
          <div className="mx-auto flex max-w-[640px] flex-col text-center lg:mx-0 lg:text-left">
            <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#008DFF] md:text-[13px]">
              {content.badge}
            </span>

            <h2 className="mt-3 text-[24px] font-semibold leading-[1.12] tracking-[-0.04em] text-[#20283A] md:mx-auto md:max-w-[520px] md:text-[24px] lg:mx-0 lg:max-w-[620px] lg:text-[31px]">
              {content.title}
            </h2>

            <p className="mt-2 hidden text-[15px] leading-[1.9] text-[#343B4C] min-[480px]:block md:mx-auto md:max-w-[680px] md:text-[15px] md:leading-[2] lg:mx-0 lg:max-w-[620px] lg:text-[20px]">
              {content.description}
            </p>
          </div>

          <div className="mx-auto w-full max-w-[420px] rounded-[16px] border border-[#E2E8F0] bg-[#DEF4FF] p-5 shadow-[0_4px_10px_rgba(0,0,0,0.18)] sm:p-6 md:max-w-[450px] lg:mx-0 lg:max-w-none">
            <h3 className="text-[18px] font-semibold text-[#111827] md:text-[18px] lg:text-[20px]">
              {content.gainsTitle}
            </h3>

            <ul className="mt-4 space-y-2.5 md:space-y-2">
              {content.gains.map((gain) => (
                <li
                  key={gain}
                  className="rounded-full bg-white px-4 py-1.5 text-[12px] font-normal leading-[1.35] text-[#2F3747] shadow-[inset_0_0_0_1px_rgba(0,141,255,0.05)] md:py-2 md:text-[12px] lg:text-[14px]"
                >
                  {gain}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
