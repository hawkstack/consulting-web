import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { getLocalizedTechnologyEcosystemData } from "../data/getLocalizedTechnologyEcosystemData";
import type { EcosystemPartner, TechnologyEcosystemCopy } from "../types/TechnologyCoverage.types";
import { EcosystemAwsMark, EcosystemBenefitIcon, EcosystemDellMark, EcosystemMoreArrow } from "@/components/icons/Home/EcosystemIcons";

function PartnerCard({ partner }: { partner: EcosystemPartner }) {
  const brand = (
    <>
      {partner.kind === "aws" && <EcosystemAwsMark className="h-8 w-12 shrink-0" />}
      {partner.kind === "dell" && <EcosystemDellMark className="size-10 shrink-0" />}
      {partner.kind === "lenovo" && <span aria-hidden="true" className="shrink-0 bg-[#e2231a] px-1.5 py-0.5 text-xs font-semibold text-white">Lenovo</span>}
      {partner.kind === "image" && partner.logo && <Image src={partner.logo} alt="" width={44} height={36} className={`h-8 shrink-0 object-contain ${partner.id === "suse" || partner.id === "mirantis" ? "w-10" : "w-8"}`} />}
      <span className="min-w-0">
        <span className={`block font-medium leading-tight ${partner.id === "cncf" ? "text-sm" : "text-[11px] xl:text-xs"}`}>{partner.name}</span>
        {partner.subtitle && <span className="block text-[7px] leading-tight text-[#c4d3e5]">{partner.subtitle}</span>}
      </span>
    </>
  );
  const classes = "flex h-[76px] min-w-0 flex-col items-center justify-center gap-1 sm:h-[50px] sm:flex-row sm:gap-3 xl:h-[58px] rounded-md border border-white/[0.025] bg-[#142b47] px-3 text-white shadow-[0_4px_9px_#0004]";
  return partner.href ? (
    <a dir="ltr" href={partner.href} target={partner.external ? "_blank" : undefined} rel={partner.external ? "noopener noreferrer" : undefined} aria-label={partner.name} className={classes + " transition-colors hover:bg-[#193855] focus-visible:outline-2 focus-visible:outline-[#35aaff]"}>{brand}</a>
  ) : <div dir="ltr" className={classes}>{brand}</div>;
}

export default function TechnologyCoverage() {
  const t = useTranslations("TechnologyEcosystem");
  const locale = useLocale();
  const copy = (t.has("content") ? t.raw("content") : {}) as Partial<TechnologyEcosystemCopy>;
  const data = getLocalizedTechnologyEcosystemData(copy);
  return (
    <section dir={locale === "ar" ? "rtl" : "ltr"} id="technology-ecosystem" aria-labelledby="technology-ecosystem-title" className="scroll-mt-[70px] overflow-hidden bg-[#041222] px-5 py-8 md:flex md:min-h-[calc(100svh-70px)] md:items-center font-lexend text-[#f0f4fc] sm:px-8 md:px-12 min-[900px]:px-[60px] xl:px-[68px]">
      <div className="mx-auto w-full max-w-[1240px]">
        <h2 id="technology-ecosystem-title" className="text-[clamp(24px,2.8vw,36px)] font-medium leading-[1.25] tracking-[-0.6px]">
          {data.title} <span className="text-[#279dff]">{data.highlight}</span>
        </h2>
        <div className="mt-6 grid items-start gap-4 md:grid-cols-[minmax(0,31.5%)_minmax(0,1fr)]">
          <div className="min-w-0">
            <p className="max-w-[350px] text-xs leading-[1.7] text-[#9cacbf] xl:text-[13px]">{data.description}</p>
            <div className="mt-4 grid gap-[18px] sm:grid-cols-3 md:grid-cols-1">
              {data.benefits.map((benefit) => (
                <article key={benefit.id} className="relative flex min-h-[80px] min-w-0 xl:min-h-[92px] items-center gap-4 overflow-hidden rounded-lg border border-[#29435e] bg-[#142b47] px-4 py-3 before:absolute before:inset-y-0 before:start-0 before:w-[3px] before:bg-[#299eff]">
                  <EcosystemBenefitIcon icon={benefit.icon} className="size-8 shrink-0 text-[#389fff]" />
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-semibold leading-[1.2]">{benefit.title[0]}<br />{benefit.title[1]}</h3>
                    <p className="mt-1 text-[10px] leading-[1.5] text-[#b3c2d5] xl:text-xs">{benefit.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <div className="rounded-[22px] bg-[#0e2239] p-4">
              <div className="relative grid grid-cols-3 gap-2 sm:gap-4">
                <div aria-hidden="true" className="absolute left-[10%] right-[10%] top-[22px] hidden h-px bg-[#24618e] sm:block" />
                {data.groups.map((group) => (
                  <div key={group.id} className="relative min-w-0">
                    <h3 className="relative z-10 mb-4 flex min-h-11 items-center justify-center rounded-full bg-[#132f50] px-2 text-center text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.03em] text-[#50acff] xl:text-[11px]">{group.title}</h3>
                    <div className="grid gap-2 xl:gap-2.5">{group.partners.map((partner) => <PartnerCard key={partner.id} partner={partner} />)}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-3 items-center gap-2 rounded-[16px] border border-[#155477] bg-[linear-gradient(110deg,#071c30,#0d2a43)] p-2.5 xl:p-3 sm:grid-cols-[minmax(0,1.65fr)_repeat(3,minmax(0,1fr))]">
                <div className="col-span-3 min-w-0 border-s-[3px] sm:col-span-1 border-[#03bfff] ps-3">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.04em] text-[#26d2f2]">{data.distribution.eyebrow}</p>
                  <h3 className="mt-0.5 text-sm font-semibold">{data.distribution.title}</h3>
                  <p className="mt-0.5 text-[8px] text-[#96b0c7]">{data.distribution.description}</p>
                </div>
                {data.distribution.partners.map((partner) => (
                  <div dir="ltr" key={partner.id} aria-label={partner.name} className={`flex h-[45px] min-w-0 xl:h-[54px] items-center justify-center gap-1 rounded-xl border bg-[#142b47] px-2 ${partner.id === "redington" ? "border-[#298056]" : partner.id === "ingram" ? "border-[#347caa]" : "border-[#435b75]"}`}>
                    {partner.emblem && <Image src={partner.emblem} alt="" width={18} height={30} className="h-7 w-4 shrink-0 object-contain" />}
                    <Image src={partner.logo} alt={partner.name} width={160} height={48} className={`h-9 min-w-0 object-contain ${partner.emblem ? "w-[75px] [filter:invert(1)_hue-rotate(180deg)_brightness(1.3)] mix-blend-screen" : "w-full"}`} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-3 flex justify-center">
              <Link href={data.cta.href} className="inline-flex items-center gap-2 rounded-lg bg-[linear-gradient(110deg,#087ae5,#09bddd)] px-6 py-2 text-sm font-medium text-white shadow-[0_5px_16px_#078aec33] transition-[filter] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40c8ff]">{data.cta.label}<EcosystemMoreArrow className="h-4 w-5 rtl:rotate-180" /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
