import Link from "next/link";
import type { AppModernizationCtaSectionContent } from "@/app/types/app-modernization";

export default function CtaSection({
  content,
}: {
  content: AppModernizationCtaSectionContent;
}) {
  return (
    <section className="bg-white font-lexend">
      <div className="mx-auto max-w-[1280px] px-4 py-10 md:px-8 md:pb-12 xl:px-6 xl:pb-14">
        <div className="mx-auto max-w-[1160px] rounded-[18px] border border-[#D9E2EC] bg-[#F5F8FB] px-5 py-8 text-center shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:px-6 md:px-8 md:py-9 lg:px-10 lg:py-8">
          <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#008DFF] md:text-[13px] lg:text-[16px]">
            {content.badge}
          </span>

          <h2 className="mx-auto mt-3 max-w-[860px] text-[23px] font-semibold leading-[1.12] tracking-[-0.04em] text-[#1E293B] md:max-w-[620px] md:text-[24px] lg:max-w-[960px] lg:text-[40px]">
            {content.title}
          </h2>

          <p className="mx-auto mt-3 max-w-[980px] text-[16px] leading-[1.6] text-[#4B5563] md:max-w-[700px] md:text-[16px] lg:max-w-[900px] lg:text-[18px]">
            {content.description}
          </p>

          <div className="mt-6 flex flex-col-reverse items-center justify-center gap-3 sm:flex-row md:mt-5 md:gap-3.5 lg:mt-5">
            {content.buttons.map((button) => (
              <div
                key={button.label}
                // href={button.href}
                className={`inline-flex min-h-[44px] w-full items-center justify-center rounded-[10px] border px-5 text-[14px] font-medium transition sm:w-auto sm:min-w-[220px] md:min-h-[42px] md:text-[14px] lg:min-h-[45px] lg:min-w-[240px] lg:px-7 lg:text-[18px] ${
                  button.variant === "primary"
                    ? "border-[#0B1226] bg-[#020618] text-white hover:bg-[#111B37]"
                    : "border-[#D1D9E3] bg-white text-[#111827] hover:bg-[#F8FAFC]"
                }`}
              >
                {button.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
