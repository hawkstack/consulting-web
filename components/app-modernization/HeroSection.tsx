import Link from "next/link";
import type { AppModernizationHeroContent } from "@/app/types/app-modernization";
import AppModernizationContactForm from "@/components/app-modernization/ContactForm";

export default function AppModernizationHeroSection({
  content,
}: {
  content: AppModernizationHeroContent;
}) {
  return (
    <section className="relative overflow-hidden bg-[#070D21] font-lexend text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(19,167,243,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(19,167,243,0.12),_transparent_28%)]" />

      <div className="relative mx-auto flex min-h-[100dvh] max-w-[1280px] items-center px-4 py-10 sm:px-6 md:min-h-[720px] md:px-8 lg:px-12">
        <div className="grid w-full items-center gap-10 md:grid-cols-[minmax(0,1fr)_360px] md:gap-8 lg:grid-cols-[minmax(0,1fr)_396px] lg:gap-12">
          <div className="mx-auto flex max-w-[640px] flex-col items-center text-center md:mx-0 md:items-start md:text-left">
            <span className="inline-flex rounded-full border border-[#13A7F3] bg-[rgba(19,167,243,0.08)] px-4 py-1 text-[10px] font-normal text-[#7FCFFF] shadow-[0_0_0_1px_rgba(19,167,243,0.1)] md:text-[11px]">
              {content.badge}
            </span>

            <h1 className="mt-5 max-w-[620px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] md:text-[56px] lg:text-[62px]">
              {content.title}
            </h1>

            <p className="mt-5 max-w-[620px] text-[14px] leading-7 text-[#D0D5E3] md:text-[18px] md:leading-8">
              {content.description}
            </p>

            <div className="mt-7 flex w-full flex-col items-center gap-3 sm:flex-row md:items-start">
              {content.buttons.map((button) => (
                <Link
                  key={button.label}
                  href={button.href}
                  className={`inline-flex min-h-11 items-center justify-center rounded-[10px] border px-6 text-[13px] font-medium transition ${
                    button.variant === "primary"
                      ? "border-[#1D6DFF] bg-[#1D6DFF] text-white hover:bg-[#1656c8]"
                      : "border-[#1D6DFF] bg-transparent text-[#53A9FF] hover:bg-[#0E1735]"
                  }`}
                >
                  {button.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full md:mx-0 md:justify-self-end">
            <AppModernizationContactForm form={content.form} />
          </div>
        </div>
      </div>
    </section>
  );
}
