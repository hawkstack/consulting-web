import type { KubevirtAdoptionSectionContent } from "@/app/types/kubevirt-service";

type AdoptionHighlightsSectionProps = {
  content: KubevirtAdoptionSectionContent;
};

export default function AdoptionHighlightsSection({
  content,
}: AdoptionHighlightsSectionProps) {
  return (
    <div className=" md:mt-14 xl:mt-22 ">
      <div className="md:flex md:items-start md:justify-between md:gap-1 xl:gap-[88px]">
        <div className="mx-auto max-w-[760px] text-center md:mx-0 md:max-w-[380px] md:flex-shrink-0 md:text-left xl:max-w-[668px] lg:max-w-[528px]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#56D9FF] md:text-[11px]">
            {content.badge}
          </p>

          <h2 className="mt-3 text-[22px] font-semibold leading-[1.02] tracking-[-0.05em] text-white md:mt-4 md:max-w-[330px] md:text-[28px] md:leading-[1.06] xl:max-w-[430px] xl:text-[48px] lg:max-w-[530px] lg:text-[42px]">
            {content.title}
          </h2>

          <p className="mx-auto mt-4 max-w-[320px] text-[12px] leading-[1.8] text-[#CBD5E1] md:mx-0 md:mt-5 md:max-w-[385px] md:text-[13px] md:leading-[1.8] xl:mt-6 xl:max-w-[590px] xl:text-[16px] lg:max-w-[590px] lg:text-[16px]">
            {content.description}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:mt-0 md:w-[306px] md:flex-shrink-0 md:gap-[14px] xl:w-[500px] lg:w-[400px] xl:mt-10">
          {content.cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[16px] border border-white/8 bg-[#131A2B] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] md:min-h-[78px] md:px-[14px] md:py-[14px] xl:min-h-[90px] xl:rounded-[18px] xl:px-4 xl:pb-8 xl:pt-4"
            >
              <div className="h-[6px] w-[40px] rounded-full bg-[#56D9FF]" />
              <h3 className="mt-3 max-w-[220px] text-[16px] font-semibold leading-[1.12] tracking-[-0.03em] text-white md:max-w-[150px] md:text-[12px] md:leading-[1.15] xl:max-w-[226px] xl:text-[16px]">
                {card.title}
              </h3>
              {card.description ? (
                <p className="mt-3 max-w-[260px] text-[13px] leading-[1.65] text-[#C9D3E3] md:text-[11px] xl:text-[14px]">
                  {card.description}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
