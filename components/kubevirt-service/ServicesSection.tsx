import Link from "next/link";

import type { KubevirtServicePageData } from "@/app/types/kubevirt-service";

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-[16px] border border-white/8 bg-[#1C2233] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] md:min-h-[101px] md:px-4 md:py-[15px] xl:min-h-[93px] xl:rounded-[15px] xl:px-[14px] xl:py-[12px]">
      <h3 className="text-[16px] font-semibold leading-[1.25] tracking-[-0.03em] text-white md:text-[13px] xl:text-[18px]">
        {title}
      </h3>
      <p className="mt-2.5 text-[13px] leading-[1.7] tracking-[-0.01em] text-[#C2CAD9] md:mt-2 md:text-[11px] md:leading-[1.65] xl:mt-[9px] xl:text-[15px] xl:leading-[1.65]">
        {description}
      </p>
    </article>
  );
}

export default function ServicesSection({
  content,
}: {
  content: KubevirtServicePageData["servicesSectionData"];
}) {
  return (
    <section className="bg-[#020617] font-lexend text-white">
      <div className="mx-auto max-w-[1280px] px-[8px] py-0 md:px-5 md:py-10 xl:max-w-[1330px] xl:px-4">
        <div className="overflow-hidden px-[10px] py-[18px] md:rounded-[16px] md:border md:border-white/10 md:bg-[#202638] md:px-8 md:py-[40px] md:shadow-[0_22px_56px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.05)] xl:rounded-none xl:border-0 xl:bg-transparent xl:px-[66px] xl:py-[52px] xl:shadow-none">
          <div className="mx-auto max-w-[1110px] xl:max-w-[1210px]">
            <div className="xl:flex xl:items-end xl:justify-start xl:gap-4">
              <div className="max-w-[800px]">
                <p className="text-center text-[10px] font-semibold uppercase tracking-[0.32em] text-[#6BE6FF] md:text-left md:text-[9px] xl:text-[10px]">
                  {content.badge}
                </p>
                <h2 className="mt-[8px] text-center text-[18px] font-semibold leading-[1.05] tracking-[-0.05em] text-white md:mt-3 md:max-w-[330px] md:text-left md:text-[24px] xl:mt-[10px] xl:max-w-[460px] xl:text-[49px]">
                  {content.title}
                </h2>
                <p className="mx-auto mt-[10px] max-w-[335px] text-center text-[11px] leading-[1.65] tracking-[-0.01em] text-[#C3CBD8] md:mx-0 md:mt-3 md:max-w-[648px] md:text-left md:text-[10px] md:leading-[1.7] xl:mt-4 xl:max-w-[740px] xl:text-[16px] xl:leading-[1.7]">
                  {content.description}
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-[16px] border border-white/8 bg-[rgba(255,255,255,0.03)] p-[10px] shadow-[0_16px_34px_rgba(0,0,0,0.18)] md:mt-6 md:border-0 md:bg-transparent md:p-0 md:shadow-none xl:mt-[24px]">
              <div className="grid grid-cols-1 gap-[10px] md:grid-cols-2 md:gap-[10px] xl:grid-cols-3 xl:gap-[12px]">
                {content.cards.map((card) => (
                  <ServiceCard
                    key={card.title}
                    title={card.title}
                    description={card.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[1110px] xl:max-w-[1180px]">
        <div className="mt-8 pb-20 md:mt-10 md:pb-0 xl:mt-12 xl:mb-10 ">
          <div className="rounded-[28px] border border-[#21435A] bg-[linear-gradient(90deg,_#07243A_0%,_#0C2342_38%,_#132B55_72%,_#203663_100%)] px-6 py-7 shadow-[0_20px_45px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.04)] md:flex md:items-center md:justify-between md:gap-8 md:px-7 md:py-8 xl:gap-10 xl:rounded-[32px] xl:px-[48px] xl:py-[20px]">
            <div className="md:max-w-[410px] xl:max-w-[620px] lg:max-w-[820px]">
              <p className="text-center text-[11px] font-semibold uppercase tracking-[0.34em] text-[#64EAFF] md:text-left xl:text-[12px]">
                {content.commercialCta.badge}
              </p>
              <h3 className="mt-3 text-center text-[18px] font-semibold leading-[1.12] tracking-[-0.04em] text-white md:mt-4 md:max-w-[360px] md:text-left md:text-[28px] md:leading-[1.1] xl:mt-4 xl:max-w-[560px] xl:text-[48px] lg:max-w-[690px] lg:text-[30px]">
                {content.commercialCta.title}
              </h3>
              <p className="mx-auto mt-3 max-w-[330px] text-center text-[13px] leading-[1.7] tracking-[-0.01em] text-[#D2D8E5] md:mx-0 md:mt-3 md:max-w-[420px] md:text-left md:text-[15px] md:leading-[1.75] xl:max-w-[610px] xl:text-[16px] lg:max-w-[690px] lg:text-[20px]">
                {content.commercialCta.description}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 md:mt-0 md:w-[230px] md:flex-shrink-0 xl:w-[380px] lg:w-[350px] xl:flex-shrink-0">
              <Link
                href={content.commercialCta.primaryHref}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-6 text-center text-[15px] font-semibold tracking-[-0.02em] text-[#0F172A] transition-transform hover:scale-[1.01] mb-1">
                {content.commercialCta.primaryLabel}
              </Link>
              <Link
                href={content.commercialCta.secondaryHref}
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/10 bg-transparent px-6 text-center text-[15px] font-semibold tracking-[-0.02em] text-white transition-colors hover:bg-white/5">
                {content.commercialCta.secondaryLabel}
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
