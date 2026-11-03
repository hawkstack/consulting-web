"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import {
  AboutCapabilityIcon,
  OverviewArrow,
} from "@/components/icons/Home/AboutIcons";
import type { AboutSectionCopy, AboutSectionData } from "@/types/home/about";
import styles from "./AboutHawkStack.module.css";
import { scrollToSection } from "@/lib/scrollToSection";

export default function AboutHawkStack({ data }: { data: AboutSectionData }) {
  const t = useTranslations("AboutHawkStack");
  const locale = useLocale();
  const textDirection = locale === "ar" ? "rtl" : "ltr";
  const capabilities = t.raw(
    "capabilities",
  ) as AboutSectionCopy["capabilities"];

  return (
    <section
      lang={locale}
      dir="ltr"
      aria-labelledby="about-hawkstack-title"
      className="relative isolate overflow-hidden px-5 pb-8 pt-6 font-lexend text-[#132440] md:px-10 xl:px-[68px]"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 560 377"
        fill="none"
        className="pointer-events-none absolute left-0 top-1/2 -z-10 h-[377px] w-[560px] max-w-full -translate-y-1/2"
      >
        <path
          d="M130 376.794C367.482 376.794 560 260.702 560 117.495C560 -25.7121 367.482 -141.804 130 -141.804C-107.482 -141.804 -300 -25.7121 -300 117.495C-300 260.702 -107.482 376.794 130 376.794Z"
          fill="url(#about-hawkstack-radial-glow)"
        />
        <defs>
          <radialGradient
            id="about-hawkstack-radial-glow"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(130 117.495) scale(430 259.299)"
          >
            <stop stopColor="#DFEAFF" stopOpacity="0.8" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 800 120"
        fill="none"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[120px] w-[min(800px,100%)]"
      >
        <path
          d="M0 119.717C330 103.51 530 -30.1907 800 6.27326V119.717H0Z"
          fill="url(#about-hawkstack-wave)"
        />
        <defs>
          <linearGradient
            id="about-hawkstack-wave"
            x1="-640"
            y1="-273.283"
            x2="800"
            y2="-273.283"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EDF4FF" stopOpacity="0" />
            <stop offset="1" stopColor="#DCEAFF" stopOpacity="0.55" />
          </linearGradient>
        </defs>
      </svg>
      <div className={styles.layout}>
        <div className="min-w-0">
          <p
            dir={textDirection}
            className="text-left text-[16px] font-semibold uppercase leading-[1.3] tracking-[0.1em] text-[#2675ff]"
          >
            {t("eyebrow")}
          </p>
          <h2
            dir={textDirection}
            id="about-hawkstack-title"
            className={`${styles.heading} mt-3 text-left font-semibold leading-[1.28] tracking-[-0.7px]`}
          >
            {t("title")}
          </h2>
          <p
            dir={textDirection}
            className="mt-3 max-w-[430px] text-left text-[15px] leading-[1.65] text-[#344e74]"
          >
            {t("description")}
          </p>
          <p
            dir={textDirection}
            className="mt-3 max-w-[420px] border-l-2 border-[#8faaff] pl-3 text-left text-[13px] leading-[1.65] text-[#48658a]"
          >
            {t("supportingCopy")}
          </p>
          <Link
            href={data.action.href}
            onClick={(event) => {
              event.preventDefault();
              scrollToSection(data.action.href.slice(1));
            }}
            className={`${styles.primaryAction} mt-4 inline-flex items-center justify-center gap-3 rounded-[9px] bg-[#536bff] px-6 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-[#4056e8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#536bff]`}
          >
            <span dir={textDirection}>{t("actionLabel")}</span>
            <OverviewArrow className="size-4" />
          </Link>
        </div>
        <div className="min-w-0">
          <ul className="grid gap-4 sm:grid-cols-2">
            {data.capabilities.map((item, index) => {
              const copy = capabilities[index] ?? item;
              return (
                <li key={item.id} className={styles.capabilityCard}>
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#e9eeff] text-[#536bff]">
                      <AboutCapabilityIcon
                        icon={item.icon}
                        className="size-5"
                      />
                    </span>
                    <h3
                      dir={textDirection}
                      className="text-left text-[14px] font-semibold leading-[1.45]"
                    >
                      {copy.title}
                    </h3>
                  </div>
                  <p
                    dir={textDirection}
                    className="mt-2 max-w-[300px] text-left text-[11px] leading-[1.6] text-[#48658a]"
                  >
                    {copy.description}
                  </p>
                </li>
              );
            })}
          </ul>
          <p
            dir={textDirection}
            className="mt-[14px] text-left text-[8px] font-semibold uppercase tracking-[0.04em] text-[#48658a]"
          >
            {t("technologiesLabel")}
          </p>
          <div
            className="mt-2 overflow-hidden"
            role="group"
            aria-label={t("technologiesLabel")}
          >
            <div className="about-logo-marquee-track">
              {[false, true].map((duplicate) => (
                <ul
                  key={duplicate ? "duplicate" : "primary"}
                  aria-hidden={duplicate || undefined}
                  className="about-logo-marquee-sequence"
                >
                  {data.technologies.map((technology) => (
                    <li
                      key={technology.name}
                      className="flex w-[72px] shrink-0 flex-col items-center gap-1.5"
                    >
                      <div className="flex h-7 w-full items-center justify-center">
                        <Image
                          src={technology.logo}
                          alt=""
                          width={60}
                          height={28}
                          className={
                            technology.wordmark
                              ? "h-auto max-h-7 w-[52px] max-w-full object-contain"
                              : "h-6 w-9 object-contain"
                          }
                        />
                      </div>
                      <span className="text-center text-[6px] leading-tight text-[#48658a]">
                        {technology.name}
                      </span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
