import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import type { BuildYourCareerData } from "../types/BuildYourCareer.types";

export default function BuildYourCareer() {
  const t = useTranslations("BuildYourCareer");
  const direction = useLocale() === "ar" ? "rtl" : "ltr";
  const features = t.raw("card.features") as BuildYourCareerData["card"]["features"];
  return (
    <section
      aria-labelledby="build-career-title"
      className="bg-[#eff6ff] px-5 py-12 font-lexend sm:px-8 md:px-12 xl:px-[68px]"
    >
      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-9 lg:grid-cols-[1.05fr_1fr] lg:gap-[54px]">
        <div className="min-w-0">
          <p dir={direction} className="text-[11px] font-semibold tracking-[0.18em] text-[#1760ee]">
            {t("eyebrow")}
          </p>
          <h2
            id="build-career-title"
            className="mt-1 max-w-[510px] text-[clamp(34px,3.5vw,44px)] font-semibold leading-[1.16] tracking-[-0.8px] text-[#08152f]"
          >
            {t("title")}
          </h2>
          <p dir={direction} className="mt-3 max-w-[560px] text-[15px] leading-[1.65] text-[#40577b]">
            {t("description")}
          </p>
          <Link
            href="/career"
            className="mt-5 inline-flex min-h-[50px] items-center justify-center rounded-full bg-[linear-gradient(110deg,#00aa91,#1760ee)] px-10 text-sm font-medium text-white transition-[filter] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1760ee]"
          >
            {t("buttonText")}
          </Link>
        </div>
        <div className="relative min-w-0 overflow-hidden rounded-[22px] bg-[linear-gradient(115deg,#03152c,#0a2d56)] p-6 text-white shadow-[0_14px_28px_#0b254126] sm:p-7 lg:p-[26px]">
          <div
            aria-hidden="true"
            className="absolute -right-8 -top-20 size-52 rounded-full bg-[#087ac0]/25"
          />
          <div className="relative">
            <p dir={direction} className="text-[9px] font-semibold tracking-[0.16em] text-[#26b5ff]">
              {t("card.eyebrow")}
            </p>
            <h3 dir={direction} className="mt-2 text-[22px] font-semibold leading-tight sm:text-[23px]">
              {t("card.title")}
            </h3>
            <p dir={direction} className="mt-1 text-[12px] leading-[1.5] text-[#a9c0db]">
              {t("card.description")}
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <article
                  key={feature.id}
                  className="flex min-h-[72px] min-w-0 items-center gap-3 rounded-[14px] border border-[#15558a] bg-[#102d4f] px-3 py-3"
                >
                  <span
                    aria-hidden="true"
                    className="flex size-9 shrink-0 items-center justify-center rounded-[12px] bg-[#0c416b] text-[10px] font-semibold text-[#28b9ff]"
                  >
                    {feature.number}
                  </span>
                  <div className="min-w-0">
                    <h4 dir={direction} className="text-[13px] font-semibold leading-tight">
                      {feature.title}
                    </h4>
                    <p dir={direction} className="mt-1 text-[10px] leading-[1.45] text-[#a9c0db]">
                      {feature.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
