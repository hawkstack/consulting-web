import Link from "next/link";
import type { AppModernizationHeroContent } from "@/app/types/app-modernization";
import AppModernizationContactForm from "@/components/app-modernization/ContactForm";

export default function AppModernizationHeroSection({
  content,
}: {
  content: AppModernizationHeroContent;
}) {
  return (
    <section className="relative overflow-hidden bg-[#040A1D] font-lexend text-white">
      <div className="absolute inset-0 " />

      <div className="relative mx-auto flex max-w-[1280px] items-center px-4 py-10 sm:px-6 md:px-8 lg:px-12 xl:py-20 ">
        <div className="grid w-full items-center gap-10 md:grid-cols-[minmax(0,1fr)_360px] md:gap-8 lg:grid-cols-[minmax(0,1fr)_396px] lg:gap-12">
          <div className="mx-auto flex max-w-[800px] flex-col items-center text-center md:mx-0 md:items-start md:text-left">
            {content.badge && (
              <span className="inline-flex rounded-full border border-[#019CFF] bg-[rgba(19,167,243,0.08)] px-4 py-1 text-[10px] font-normal text-[#009DFF] shadow-[0_0_0_1px_rgba(19,167,243,0.1)] md:text-[11px] xl:text-[16px]">
                {content.badge}
              </span>
            )}

            <h1
              className={`${content.titleMarginTop ?? "mt-4"} ${
                content.h1MaxWidth ?? "max-w-[580px]"
              } text-[22px] font-[600] text-[#ffffff] leading-[1.08] tracking-[-0.04em] md:text-[40px] xl:text-[60px]`}>
              <span>{content.title}</span>
              {content.highlightedLastLine ? (
                <span className="block text-[#1D6DFF]">
                  {content.highlightedLastLine}
                </span>
              ) : null}
            </h1>

            <p className= {`mt-3 ${content.descriptionWidth ?? "max-w-[620px]"} text-[14px] leading-7 text-[#ffffff] md:text-[16px] md:leading-8 xl:text-[20px]`}>
              {content.description}
            </p>
            <div className="mt-7 flex w-full flex-row items-center justify-center gap-3 md:justify-start">
              {content.buttons.map((button) => (
                <Link
                  key={button.label}
                  href={button.href}
                  className={`inline-flex min-h-11 items-center justify-center rounded-[10px] border px-4 md:px-4 text-[13px] font-medium whitespace-nowrap transition ${
                    button.variant === "primary"
                      ? "border-[#1D6DFF] bg-[#1D6DFF] text-white hover:bg-[#1656c8]"
                      : "border-[#1D6DFF] bg-transparent text-[#53A9FF] hover:bg-[#0E1735]"
                  }`}>
                  {button.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full md:mx-0 md:justify-self-end">
            <AppModernizationContactForm form={content.form} />
          </div>
        </div>
      </div>
    </section>
  );
}
