import type { KubevirtServicePageData } from "@/app/types/kubevirt-service";
import AdoptionHighlightsSection from "@/components/kubevirt-service/AdoptionHighlightsSection";
import CommercialCtaSection from "@/components/kubevirt-service/CommercialCtaSection";

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
  adoptionContent,
}: {
  content: KubevirtServicePageData["servicesSectionData"];
  adoptionContent: KubevirtServicePageData["adoptionSectionData"];
}) {
  return (
    <section className="bg-[#020617] font-lexend text-white">
      <div className="mx-auto max-w-[1280px] px-[8px] pb-10 md:px-8 md:py-10 xl:max-w-[1330px] xl:px-4">
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
        <div className="mx-auto max-w-[340px] md:max-w-[1170px] mt-10 md:mt-14 xl:max-w-[1170px]">
          <CommercialCtaSection content={content.commercialCta} />
          <AdoptionHighlightsSection content={adoptionContent} />
        </div>
      </div>
    </section>
  );
}
