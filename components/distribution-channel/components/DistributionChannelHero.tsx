import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { getDistributionChannelContent } from "@/components/distribution-channel/data/distributionChannelData";

export default function DistributionChannelHero() {
  const t = useTranslations("DistributionChannel");
  const direction = useLocale() === "ar" ? "rtl" : "ltr";
  const content = getDistributionChannelContent(t);
  return (
    <section
      dir="ltr"
      id="technology-ecosystem"
      className="bg-white px-5 py-12 font-lexend text-[#132440] sm:px-8 lg:px-12 lg:py-16 xl:px-[6.8%]"
    >
      <div className="mx-auto grid max-w-[1214px] items-center gap-12 lg:grid-cols-[1.18fr_.92fr] lg:gap-[6.2%]">
        <div className="py-1">
          <p
            dir={direction}
            className="text-left text-[11px] font-bold tracking-[0.13em] text-[#3d50ff]"
          >
            {content.eyebrow}
          </p>
          <h1
            dir={direction}
            className="text-left mt-5 text-[clamp(36px,3.55vw,48px)] font-bold leading-[1.22] tracking-[-0.025em]"
          >
            <span dir={direction} className="text-left block">
              {content.heading[0]}
            </span>
            <span dir={direction} className="text-left block text-[#4053ff]">
              {content.heading[1]}
            </span>
          </h1>
          <p
            dir={direction}
            className="text-left mt-6 text-[17px] font-semibold leading-[1.55]"
          >
            {content.subheading.map((line) => (
              <span dir={direction} className="text-left block" key={line}>
                {line}
              </span>
            ))}
          </p>
          <p
            dir={direction}
            className="text-left mt-5 max-w-[535px] text-[14px] leading-[1.7] text-[#40536f]"
          >
            {content.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3.5">
            {content.actions.map((action) => (
              <a
                dir="ltr"
                key={action.label}
                href={action.href}
                className={`inline-flex h-[46px] items-center justify-center rounded-[9px] px-9 text-[12px] font-semibold transition-colors ${action.variant === "primary" ? "bg-[#4053ff] text-white hover:bg-[#3043ed]" : "border border-[#d6e0ef] bg-white text-[#132440] hover:bg-[#f7f9ff]"}`}
              >
                <span dir={direction}>{action.label}</span>
              </a>
            ))}
          </div>
          <p
            dir={direction}
            className="text-left mt-5 text-[11px] font-semibold tracking-[0.12em] text-[#4b5d78]"
          >
            {content.audience}
          </p>
        </div>

        <div className="relative isolate min-h-[421px] overflow-hidden rounded-[17px] bg-[linear-gradient(118deg,#17366f_0%,#244b91_58%,#1b3c79_100%)] px-7 pb-5 pt-7 text-white sm:px-[30px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          >
            <span className="absolute -right-4 -top-10 h-[330px] w-[76px] rotate-[28deg] bg-white/[0.035]" />
            <span className="absolute right-[29%] -top-10 h-[330px] w-[76px] rotate-[28deg] bg-white/[0.045]" />
            <span className="absolute right-[8%] -top-10 h-[330px] w-[76px] rotate-[28deg] bg-white/[0.035]" />
          </div>
          <p
            dir={direction}
            className="text-left text-[11px] font-bold tracking-[0.12em] text-[#b9d2fa]"
          >
            {content.cardEyebrow}
          </p>
          <h2
            dir={direction}
            className="text-left mt-5 text-[32px] font-semibold leading-[1.27] tracking-[-0.02em]"
          >
            {content.cardHeading.map((line) => (
              <span dir={direction} className="text-left block" key={line}>
                {line}
              </span>
            ))}
          </h2>
          <div className="relative mt-4 border-l border-[#8cb2ef]/40 pl-[14px]">
            {content.steps.map((step, index) => (
              <div
                key={step.number}
                className={`grid min-h-[45px] grid-cols-[28px_122px_1fr] items-center gap-2 border-t border-white/[0.11] ${index === content.steps.length - 1 ? "border-b" : ""}`}
              >
                <span
                  dir={direction}
                  className="text-left text-[11px] font-medium text-[#9ec3ff]"
                >
                  {step.number}
                </span>
                <span
                  dir={direction}
                  className="text-left text-[14px] font-semibold"
                >
                  {step.title}
                </span>
                <span
                  dir={direction}
                  className="text-left text-[11px] leading-[1.4] text-[#d3e0f6]"
                >
                  {step.description}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-[39px] rounded-[9px] bg-white px-[13px] py-[12px] text-[#4c617e]">
            <p
              dir={direction}
              className="text-left text-[10px] font-bold tracking-[0.06em]"
            >
              {content.logoPanelHeading}
            </p>
            <div className="mt-2 flex min-h-[22px] items-center justify-between gap-3">
              {content.logos.map((logo) =>
                logo.src ? (
                  <Image
                    key={logo.name}
                    src={logo.src}
                    alt={logo.name}
                    width={100}
                    height={42}
                    className={`${logo.className ?? "h-6 w-auto"} object-contain`}
                  />
                ) : (
                  <span key={logo.name} className={logo.className}>
                    {logo.name}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
