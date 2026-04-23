import type { KubevirtServicePageData } from "@/app/types/kubevirt-service";

function AdoptionCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="mx-auto flex min-h-[136px] w-full max-w-[288px] flex-col rounded-[18px] border border-[#E4ECF7] bg-white px-5 py-5 shadow-[0_14px_28px_rgba(165,195,224,0.32)] max-w-none">
      <h3 className="max-w-[280px] text-[18px] mx-auto text-center  xl:text-start font-semibold leading-[1.15] tracking-[-0.03em] text-[#101828] md:max-w-[260px] md:text-[18px] xl:max-w-[400px] lg:max-w-[280px] lg:text-[18px] xl:text-[18px]">
        {title}
      </h3>
      <p className="mt-3 max-w-[280px] text-[14px] mx-auto text-center xl:text-start leading-[1.7] text-[#475467] md:max-w-[300px] md:text-[15px] lg:max-w-[340px] lg:text-[16px] xl:max-w-[300px] xl:text-[14px]">
        {description}
      </p>
    </article>
  );
}
export default function WhyKubevirtSection({
  content,
}: {
  content: KubevirtServicePageData["adoptionSectionData"];
}) {
  return (
    <section className="bg-[linear-gradient(180deg,_#F7FBFF_0%,_#FFFFFF_30%,_#FFFFFF_100%)] font-lexend">
      <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 md:px-8 md:py-14 lg:px-12 xl:py-16">
        <div className="mx-auto max-w-[1190px]">
          <div className="mx-auto max-w-[760px] text-center xl:mx-0 xl:max-w-[990px] xl:text-left">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#009FE3] md:text-[11px]">
              {content.badge}
            </p>

            <h2 className="mt-3 text-[22px] font-semibold leading-[1.02] tracking-[-0.05em] text-[#0B1328] md:text-[28px] xl:max-w-[880px] xl:text-[49px]">
              {content.title}
            </h2>

            <p className="mx-auto mt-4 max-w-[320px] text-[12px] leading-[1.8] text-[#4A5565] md:max-w-[620px] md:text-[14px] xl:mx-0 xl:max-w-[850px] xl:text-[16px]">
              {content.description}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:mt-7 md:grid-cols-2 md:gap-6 xl:mt-8 xl:grid-cols-4 xl:gap-4">
            {content.cards.map((card) => (
              <AdoptionCard
                key={card.title}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



