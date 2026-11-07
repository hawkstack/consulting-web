import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { getInfrastructurePlatformsContent } from "@/components/distribution-channel/data/distributionChannelData";

export default function InfrastructurePlatformsSection() {
  const t = useTranslations("DistributionChannel");
  const direction = useLocale() === "ar" ? "rtl" : "ltr";
  const content = getInfrastructurePlatformsContent(t);
  return (
    <section
      dir="ltr"
      className="bg-[#eaf2fd] px-5 py-10 font-lexend text-[#172a47] sm:px-8 lg:min-h-[650px] lg:px-12 lg:py-[40px] xl:px-[5%]"
    >
      <div className="mx-auto max-w-[1170px]">
        <p
          dir={direction}
          className="text-left text-[10px] font-bold tracking-[0.12em] text-[#3454ff]"
        >
          {content.eyebrow}
        </p>
        <h2
          dir={direction}
          className="text-left mt-3 text-[28px] font-semibold leading-[1.25] tracking-[-0.02em] sm:text-[32px] xl:text-[34px]"
        >
          {content.heading}
        </h2>

        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:mt-[34px] lg:gap-7">
          {content.items.map((platform) => (
            <article
              key={platform.brand}
              className="flex min-w-0 flex-col rounded-[13px] bg-white px-6 py-7 sm:px-8 lg:min-h-[450px] lg:px-7 lg:py-7"
            >
              <div className="flex min-h-[38px] items-center gap-4">
                <Image
                  src={platform.logo}
                  alt={t("common.logoAlt", { brand: platform.brand })}
                  width={120}
                  height={48}
                  className="h-8 w-[72px] shrink-0 object-contain object-left"
                />
                <h3
                  dir={direction}
                  className="text-left text-[17px] font-semibold leading-tight"
                >
                  {platform.brand}
                </h3>
              </div>
              <p
                dir={direction}
                className="text-left mt-2 text-[10px] xl:text-[11px] font-bold leading-[1.5] tracking-[0.12em] text-[#3454ff]"
              >
                {platform.category}
              </p>

              <h4
                dir={direction}
                className="text-left mt-8 text-[20px] font-semibold leading-[1.35] tracking-[-0.01em]"
              >
                {platform.heading}
              </h4>
              <p
                dir={direction}
                className="text-left mt-4 text-[12px] xl:text-[13px] leading-[1.65] text-[#40536f]"
              >
                {platform.description}
              </p>

              <div className="mt-5">
                <p
                  dir={direction}
                  className="text-left text-[9px] xl:text-[11px] font-bold tracking-[0.13em] text-[#3454ff]"
                >
                  {t("common.keyTechnologies")}
                </p>
                <p
                  dir={direction}
                  className="text-left mt-2 text-[11px] xl:text-[13px] leading-[1.6] text-[#40536f]"
                >
                  {platform.technologies.join(" · ")}
                </p>
              </div>

              <div className="mt-4">
                <p
                  dir={direction}
                  className="text-left text-[9px] xl:text-[11px] font-bold tracking-[0.13em] text-[#3454ff]"
                >
                  {t("common.howHawkStackHelps")}
                </p>
                <p
                  dir={direction}
                  className="text-left mt-2 text-[11px] xl:text-[13px] leading-[1.6] text-[#40536f]"
                >
                  {platform.hawkstackHelps.join(
                    direction === "rtl" ? "، " : ", ",
                  )}
                </p>
              </div>

              <a
                dir="ltr"
                href={platform.discussionHref}
                className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-[10px] xl:text-[11px] font-medium text-[#304cff] hover:underline"
              >
                <span dir={direction}>{platform.discussionLabel}</span>
                <span aria-hidden="true">{"→"}</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
