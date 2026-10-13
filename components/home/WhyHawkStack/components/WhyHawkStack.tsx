import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import data from "../data/WhyHawkStack.data.json";
import type { WhyHawkStackData } from "../types/WhyHawkStack.types";

export default function WhyHawkStack() {
  const t = useTranslations("WhyHawkStack");
  const direction = useLocale() === "ar" ? "rtl" : "ltr";
  const principles = t.raw("principles") as WhyHawkStackData["principles"];
  return (
    <section
      aria-labelledby="why-hawkstack-title"
      className="bg-white px-5 py-12 font-lexend sm:px-8 md:px-12 xl:px-[68px]"
    >
      <div className="mx-auto grid w-full max-w-[1240px] gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-[54px]">
        <div className="min-w-0">
          <p dir={direction} className="text-[11px] font-semibold tracking-[0.18em] text-[#1760ee]">
            {t("eyebrow")}
          </p>
          <h2
            id="why-hawkstack-title"
            className="mt-1 max-w-[610px] text-[clamp(30px,3.2vw,40px)] font-semibold leading-[1.22] tracking-[-0.7px] text-[#08152f]"
          >
            {t("title")}
          </h2>
          <Image
            src={data.image}
            alt={t("imageAlt")}
            width={900}
            height={480}
            sizes="(max-width: 1023px) 100vw, 48vw"
            className="mt-7 aspect-[1.87] w-full rounded-[20px] object-cover"
          />
        </div>
        <div className="min-w-0 lg:pt-7">
          <p dir={direction} className="max-w-[370px] text-[15px] leading-[1.6] text-[#40577b] lg:ml-auto">
            {t("intro")}
          </p>
          <div className="mt-8">
            {principles.map((item) => (
              <article
                key={item.id}
                className="grid min-h-[108px] grid-cols-[72px_minmax(0,1fr)] items-center gap-4 border-t border-[#d5e0f1] py-4 sm:grid-cols-[90px_minmax(0,1fr)] sm:gap-4"
              >
                <span
                  aria-hidden="true"
                  className="text-[clamp(36px,3.4vw,44px)] font-medium leading-none text-[#a0aec3]"
                >
                  {item.number}
                </span>
                <div className="min-w-0">
                  <h3 dir={direction} className="text-[17px] font-semibold leading-tight text-[#08152f]">
                    {item.title}
                  </h3>
                  <p dir={direction} className="mt-2 max-w-[420px] text-[13px] leading-[1.6] text-[#40577b]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
