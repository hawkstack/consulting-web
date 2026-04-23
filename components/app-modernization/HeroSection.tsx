import Link from "next/link";
import type { AppModernizationHeroContent } from "@/app/types/app-modernization";
import AppModernizationContactForm from "@/components/app-modernization/ContactForm";

export default function AppModernizationHeroSection({
  content,
}: {
  content: AppModernizationHeroContent;
}) {
  return (
    <section className={`relative overflow-hidden bg-[#040A1D] font-lexend text-white 
      ${content.heroBgClass ?? "bg-[#040A1D]"}`}>
      <div className="absolute inset-0 " />

      <div className="relative mx-auto flex max-w-[1280px] items-center px-4 py-10 sm:px-6 md:px-8 lg:px-12 xl:py-20 ">
        <div className="grid w-full items-center gap-10 md:grid-cols-[minmax(0,1fr)_360px] md:gap-8 lg:grid-cols-[minmax(0,1fr)_396px] lg:gap-12">
          <div className="mx-auto flex max-w-[800px] flex-col items-center text-center md:mx-0 md:items-start md:text-left">
            {content.badge && (
              <span className="inline-flex rounded-full border border-[#019CFF] bg-[rgba(19,167,243,0.08)] px-4 py-1 text-[10px] font-normal text-[#009DFF] shadow-[0_0_0_1px_rgba(19,167,243,0.1)] md:text-[11px] xl:text-[16px]">
                {content.badge}
              </span>
            )}

            {content.subTitle && (
              <p className="mt-3 text-[14px] leading-7 text-[#BFDBFE] md:text-[14px] uppercase tracking-[0.2em] font-bold">
                {content.subTitle}
              </p>
            )}

            <h1
              className={`${content.titleMarginTop ?? "mt-4"} ${
                content.h1MaxWidth ?? "max-w-[580px]"
              } text-[22px] font-[600] text-[#ffffff] leading-[1.08] tracking-[0.02em]  ${content.fontSize ?? "xl:text-[60px] md:text-[40px]"}`}>
              <span>{content.title}</span>
              {content.highlightedLastLine ? (
                <span className="block text-[#1D6DFF]">
                  {content.highlightedLastLine}
                </span>
              ) : null}
            </h1>

            <p className= {`mt-3 ${content.descriptionWidth ?? "max-w-[620px]"} text-[14px] leading-7 text-[#ffffff] md:text-[16px] md:leading-8 xl:text-[18px]`}>
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
            
            {content.tags && content.tags.length > 0 && (
              <div className="flex flex-wrap gap-x-5 text-[#525252] text-[12px] lg:text-[14px] justify-center md:justify-start font-medium mt-5">
                {content.tags.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <div className="hidden md:grid md:grid-cols-3 gap-3 mt-6">
              {content.statBadges?.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[14px] bg-white/8 border border-white/10 px-3 py-3 backdrop-blur-[9.3506498336792px]"
                >
                  {item.value && (
                    <div className="text-white text-[18px] md:text-[20px] font-semibold leading-none">
                      {item.value}
                    </div>
                  )}

                  <div className="text-white md:text-[14px] xl:text-[15px] font-medium mt-1">
                    {item.title}
                  </div>

                  {item.description && (
                    <p className="text-[#DBE4F2] md:text-[12px] mt-3 leading-snug">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:mx-0 md:justify-self-end">
            <AppModernizationContactForm form={content.form} />
          </div>

          <div className="md:hidden grid grid-cols-3 gap-3 mt-6">
            {content.statBadges?.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl bg-white/8 border border-white/10 p-3 text-center backdrop-blur-[9.3506498336792px]"
                >
                  {item.value && (
                    <div className="text-white text-[18px] md:text-[20px] font-semibold leading-none">
                      {item.value}
                    </div>
                  )}

                  <div className="text-white text-[15px] font-medium mt-1">
                    {item.title}
                  </div>

                  {item.description && (
                    <p className="text-[#DBE4F2] text-[12px] mt-auto">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
