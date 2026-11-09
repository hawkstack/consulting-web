import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { getCloudPlatformsContent } from "@/components/distribution-channel/data/distributionChannelData";

export default function CloudPlatformsSection() {
  const t = useTranslations("DistributionChannel");
  const direction = useLocale() === "ar" ? "rtl" : "ltr";
  const content = getCloudPlatformsContent(t);
  return (
    <section
      dir="ltr"
      className="bg-white px-5 py-10 font-lexend text-[#172a47] sm:px-8 lg:px-12 lg:py-[34px] xl:px-[5%]"
    >
      <div className="mx-auto max-w-[1170px]">
        <p
          dir={direction}
          className="text-left text-[10px] font-bold tracking-[0.12em] text-[#3454ff]"
        >
          {content.eyebrow}
        </p>
        <div className="mt-3 grid gap-5 md:grid-cols-[1.2fr_.88fr] md:items-end">
          <h2
            dir={direction}
            className="text-left text-[28px] font-semibold leading-[1.25] tracking-[-0.02em] sm:text-[32px] xl:text-[34px]"
          >
            {content.heading[0]}
            <br />
            {content.heading[1]}
          </h2>
          <p
            dir={direction}
            className="max-w-[410px] text-[14px] leading-[1.65] text-[#40536f] md:justify-self-end text-left md:text-right"
          >
            {content.introduction}
          </p>
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:mt-[24px] lg:grid-cols-3 lg:gap-[26px]">
          {content.items.map((platform, index) => (
            <article
              key={platform.brand}
              className={`flex min-w-0 flex-col rounded-[16px] px-6 py-6 sm:px-7 lg:min-h-[400px] lg:px-[26px] lg:py-[19px] ${
                index === 1 ? "bg-[#f0f5fd]" : "bg-[#f6f9fd]"
              }`}
            >
              <Image
                src={platform.logo}
                alt={t("common.logoAlt", { brand: platform.brand })}
                width={90}
                height={40}
                className="h-[32px] w-[58px] object-contain object-left"
              />
              <h3
                dir={direction}
                className="text-left mt-[13px] text-[18px] font-semibold leading-tight text-[#3454ff]"
              >
                {platform.brand}
              </h3>
              <h4
                dir={direction}
                className="text-left mt-[9px] text-[18px] font-semibold leading-[1.35] tracking-[-0.01em]"
              >
                {platform.heading}
              </h4>
              <p
                dir={direction}
                className="text-left mt-[11px] text-[12px] leading-[1.45] text-[#40536f]"
              >
                {platform.description}
              </p>

              <div className="mt-[7px]">
                <p
                  dir={direction}
                  className="text-left text-[10px] font-bold tracking-[0.13em] text-[#3454ff]"
                >
                  {t("common.keyTechnologies")}
                </p>
                <p
                  dir={direction}
                  className="text-left mt-[6px] text-[11px] leading-[1.55] text-[#40536f]"
                >
                  {platform.technologies.join(" · ")}
                </p>
              </div>

              <div className="mt-[9px]">
                <p
                  dir={direction}
                  className="text-left text-[10px] font-bold tracking-[0.13em] text-[#3454ff]"
                >
                  {t("common.howHawkStackHelps")}
                </p>
                <p
                  dir={direction}
                  className="text-left mt-[6px] text-[11px] leading-[1.55] text-[#40536f]"
                >
                  {platform.hawkstackHelps.join(
                    direction === "rtl" ? "، " : ", ",
                  )}
                </p>
              </div>

              <a
                dir="ltr"
                href={platform.discussionHref}
                className="mt-auto inline-flex w-fit items-center gap-2 pt-3 text-[11px] font-medium text-[#304cff] hover:underline"
              >
                <span dir={direction}>{platform.discussionLabel}</span>
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
