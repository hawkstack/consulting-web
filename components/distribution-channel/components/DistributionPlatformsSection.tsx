import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { getDistributionPlatformsContent } from "@/components/distribution-channel/data/distributionChannelData";

export default function DistributionPlatformsSection() {
  const t = useTranslations("DistributionChannel");
  const direction = useLocale() === "ar" ? "rtl" : "ltr";
  const content = getDistributionPlatformsContent(t);
  return (
    <section
      dir="ltr"
      className="bg-white px-5 py-10 font-lexend text-[#172a47] sm:px-8 lg:min-h-[1050px] lg:px-12 lg:py-[44px] xl:px-[5%]"
    >
      <div className="mx-auto max-w-[1180px]">
        <p
          dir={direction}
          className="text-left text-[10px] font-bold tracking-[0.12em] text-[#3454ff]"
        >
          {content.eyebrow}
        </p>
        <div className="mt-3 grid gap-6 md:grid-cols-[1.2fr_.88fr] md:items-center">
          <h2
            dir={direction}
            className="text-left text-[32px] font-semibold leading-[1.22] tracking-[-0.02em] sm:text-[32px] xl:text-[38px]"
          >
            {content.heading[0]}
            <br />
            {content.heading[1]}
          </h2>
          <p
            dir={direction}
            className="text-left max-w-[540px] text-[14px] leading-[1.65] text-[#40536f] md:text-right"
          >
            {content.introduction}
          </p>
        </div>

        <div className="mt-7 space-y-4 sm:mt-5 lg:mt-4">
          {content.items.map((platform, index) => (
            <article
              key={platform.brand}
              className={`grid gap-x-7 gap-y-6 rounded-[12px] px-6 py-7 sm:px-8 md:grid-cols-[.48fr_1.08fr_1.22fr] md:items-center md:gap-x-10 md:px-10 lg:min-h-[258px] lg:px-10 lg:py-8 ${
                index % 2 === 0 ? "bg-[#f3f7fd]" : "bg-white"
              }`}
            >
              <div className="min-w-0">
                <Image
                  src={platform.logo}
                  alt={t("common.logoAlt", { brand: platform.brand })}
                  width={112}
                  height={52}
                  className="h-[46px] w-[90px] object-contain object-left"
                />
                <h3
                  dir={direction}
                  className="text-left mt-3 text-[19px] font-semibold leading-tight"
                >
                  {platform.brand}
                </h3>
                <p
                  dir={direction}
                  className="text-left mt-5 max-w-[190px] text-[10px] font-bold leading-[1.5] tracking-[0.11em] text-[#3454ff]"
                >
                  {platform.category}
                </p>
              </div>

              <div className="min-w-0">
                <h4
                  dir={direction}
                  className="text-left text-[23px] font-semibold leading-[1.35] tracking-[-0.01em]"
                >
                  {platform.heading}
                </h4>
                <p
                  dir={direction}
                  className="text-left mt-5 text-[13px] leading-[1.65] text-[#40536f]"
                >
                  {platform.description}
                </p>
                <a
                  dir="ltr"
                  href={platform.discussionHref}
                  className="mt-7 inline-flex items-center gap-2 text-[11px] font-medium text-[#304cff] hover:underline"
                >
                  <span dir={direction}>{platform.discussionLabel}</span>
                  <span aria-hidden="true">{"→"}</span>
                </a>
              </div>

              <div className="grid min-w-0 gap-5 sm:grid-cols-2 md:grid-cols-1 md:gap-6">
                <div>
                  <p
                    dir={direction}
                    className="text-left text-[10px] font-bold tracking-[0.13em] text-[#3454ff]"
                  >
                    {t("common.keyTechnologies")}
                  </p>
                  <p
                    dir={direction}
                    className="text-left mt-2 text-[11px] leading-[1.55] text-[#40536f]"
                  >
                    {platform.technologies}
                  </p>
                </div>
                <div>
                  <p
                    dir={direction}
                    className="text-left text-[10px] font-bold tracking-[0.13em] text-[#3454ff]"
                  >
                    {t("common.howHawkStackHelps")}
                  </p>
                  <p
                    dir={direction}
                    className="text-left mt-2 text-[11px] leading-[1.55] text-[#40536f]"
                  >
                    {platform.hawkstackHelps}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
