import { useLocale, useTranslations } from "next-intl";
import { getDistributionChannelContent } from "@/components/distribution-channel/data/distributionChannelData";

export default function DistributionOutcomesSection() {
  const t = useTranslations("DistributionChannel");
  const direction = useLocale() === "ar" ? "rtl" : "ltr";
  const { outcomes } = getDistributionChannelContent(t);
  return (
    <section
      dir="ltr"
      className="bg-[#07182e] px-5 py-12 font-lexend text-[#f2f6ff] sm:px-8 lg:px-12 lg:py-[48px] xl:px-[6.8%]"
    >
      <div className="mx-auto max-w-[1214px]">
        <p
          dir={direction}
          className="text-left text-[11px] font-bold tracking-[0.13em] text-[#78b8ff]"
        >
          {outcomes.eyebrow}
        </p>
        <h2
          dir={direction}
          className="text-left mt-1 text-[26px] font-semibold leading-[1.3] tracking-[-0.025em] sm:text-[28px]"
        >
          {outcomes.heading}
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:mt-[41px] lg:grid-cols-4">
          {outcomes.items.map((item, index) => (
            <article
              key={item.number}
              className={`min-w-0 py-5 sm:px-5 lg:min-h-[195px] lg:px-4 lg:py-2 ${
                index === 0 ? "lg:pl-0" : "lg:border-l lg:border-[#28405c]"
              } ${index % 2 === 0 ? "sm:pl-0" : "sm:border-l sm:border-[#28405c]"} ${
                index >= 2
                  ? "sm:border-t sm:border-[#28405c] lg:border-t-0"
                  : ""
              }`}
            >
              <p
                dir={direction}
                className="text-left text-[44px] font-semibold leading-none tracking-[-0.03em] text-[#78b8ff]"
              >
                {item.number}
              </p>
              <h3
                dir={direction}
                className="text-left mt-7 text-[18px] font-semibold leading-[1.35]"
              >
                {item.title}
              </h3>
              <p
                dir={direction}
                className="text-left mt-4 max-w-[280px] text-[13px] leading-[1.6] text-[#bfd0e4]"
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
