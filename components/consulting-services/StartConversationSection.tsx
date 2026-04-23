import type { ConsultingServicesConversationSectionContent } from "@/app/types/consulting-services";

import ConsultingConversationForm from "@/components/consulting-services/ConsultingConversationForm";

export default function StartConversationSection({
  content,
}: {
  content: ConsultingServicesConversationSectionContent;
}) {
  return (
    <section className="bg-[#081120] font-lexend text-white">
      <div className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6 md:px-8 md:py-12 lg:px-12 lg:py-14 xl:px-10 xl:py-8">
        <div className="mx-auto max-w-[1160px] xl:max-w-[1160px]">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_400px] xl:items-start xl:gap-[18px]">
            <div className="mx-auto max-w-[320px] text-center md:max-w-[760px] xl:mx-0 xl:max-w-[640px] xl:text-left">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#6BD0FF] md:text-[12px] xl:text-[12px] xl:mb-4">
                {content.badge}
              </p>

              <h2 className="mt-2 text-[22px] font-semibold leading-[1.08] tracking-[-0.05em] text-white md:text-[42px] md:leading-[1.02] lg:text-[46px] lg:max-w-[820px] xl:mt-1 xl:max-w-[470px] xl:text-[40px]">
                {content.title}
              </h2>

              <p className="mx-auto mt-3 max-w-[300px] text-[13px] leading-[1.75] text-[#D0D7E2] md:max-w-[620px] md:text-[16px] xl:mx-0 xl:mt-2 xl:max-w-[455px] lg:max-w-[820px] xl:text-[18px]">
                {content.description}
              </p>

              <div className="mt-6 space-y-3 md:mx-auto md:max-w-[620px] xl:mx-0 xl:mt-6 xl:max-w-[655px] xl:space-y-3">
                {content.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-[14px] border border-[#263244] bg-[#182332] px-4 py-4 text-left text-[12px] leading-[1.65] text-[#DDE6F2] shadow-[0_12px_32px_rgba(4,13,26,0.14)] md:px-5 md:py-4 md:text-[14px] xl:rounded-[12px] xl:px-4 xl:py-2.5 xl:text-[14px] xl:leading-[1.55]"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto w-full max-w-[320px] md:max-w-[420px] xl:mt-[20px] xl:max-w-[400px]">
              <ConsultingConversationForm content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
