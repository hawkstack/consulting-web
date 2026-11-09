import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { getCloudEcosystemContent } from "@/components/distribution-channel/data/distributionChannelData";

export default function CloudEcosystemSection() {
  const t = useTranslations("DistributionChannel");
  const direction = useLocale() === "ar" ? "rtl" : "ltr";
  const content = getCloudEcosystemContent(t);
  return (
    <section
      dir="ltr"
      className="bg-[#07172f] px-5 py-10 font-lexend text-white sm:px-8 lg:min-h-[284px] lg:px-12 lg:py-10 xl:px-[6%]"
    >
      <div className="mx-auto grid max-w-[1170px] items-center gap-7 md:grid-cols-[120px_minmax(0,1fr)] md:gap-[26px]">
        <div className="flex items-center md:justify-start">
          <Image
            src={content.logo}
            alt={t("common.logoAlt", { brand: t("common.brands.cncf") })}
            width={88}
            height={88}
            className="h-[72px] w-[72px] object-contain sm:h-[88px] sm:w-[88px]"
          />
        </div>

        <div className="min-w-0">
          <p
            dir={direction}
            className="text-left text-[10px] font-bold tracking-[0.14em] text-[#69dced]"
          >
            {content.eyebrow}
          </p>
          <h2
            dir={direction}
            className="text-left mt-[18px] text-[27px] font-semibold leading-[1.2] tracking-[-0.02em] sm:text-[32px] xl:text-[34px]"
          >
            {content.heading}
          </h2>
          <p
            dir={direction}
            className="text-left mt-[24px] max-w-[1010px] text-[14px] leading-[1.75] text-[#b8c7dc] sm:text-[15px]"
          >
            {content.description}
          </p>
          <p
            dir="ltr"
            className="text-left mt-[24px] flex flex-wrap items-center gap-x-[10px] text-[11px] font-medium leading-[1.5] text-[#69dced] md:flex-nowrap"
          >
            {content.supportingText.map((phrase, index) => (
              <span
                key={phrase}
                className="inline-flex items-center gap-[10px] whitespace-nowrap"
              >
                {index > 0 && <span aria-hidden="true">/</span>}
                <bdi dir={direction}>{phrase}</bdi>
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
