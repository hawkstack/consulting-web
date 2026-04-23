import type {
  ConsultingClientOutcomeItem,
  ConsultingServicesHowWeHelpSectionContent,
} from "@/app/types/consulting-services";

import ClientOutcomePill from "@/components/consulting-services/ClientOutcomePill";

function sortOutcomes(
  outcomes: ConsultingClientOutcomeItem[],
  mode: "mobileOrder" | "tabletOrder" | "desktopOrder",
) {
  return [...outcomes].sort((a, b) => {
    const aOrder =
      a[mode] ?? a.tabletOrder ?? a.mobileOrder ?? a.desktopOrder ?? 0;
    const bOrder =
      b[mode] ?? b.tabletOrder ?? b.mobileOrder ?? b.desktopOrder ?? 0;

    return aOrder - bOrder;
  });
}

export default function HowWeHelpClientsSection({
  content,
}: {
  content: ConsultingServicesHowWeHelpSectionContent;
}) {
  const mobileOutcomes = sortOutcomes(content.outcomes, "mobileOrder");
  const tabletOutcomes = sortOutcomes(content.outcomes, "tabletOrder");
  const desktopOutcomes = sortOutcomes(content.outcomes, "desktopOrder");

  return (
    <section className="bg-[#F6F8FC] font-lexend">
      <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 md:px-8 md:py-14 lg:px-12 lg:py-16 xl:py-20">
        <div className="mx-auto max-w-[1140px]">
          <div className="xl:grid xl:grid-cols-[minmax(0,480px)_minmax(0,1fr)] xl:items-center xl:gap-[40px]">
            <div className="mx-auto max-w-[760px] text-center xl:mx-0 xl:max-w-[580px] xl:text-left">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#0A8BFF] md:text-[11px] lg:text-[11px] xl:text-[12px]">
                {content.badge}
              </p>

              <h2 className="mt-3 text-[22px] font-semibold leading-[1.1] tracking-[-0.05em] text-[#1A2238] md:mx-auto md:max-w-[720px] md:text-[34px] lg:max-w-[600px] lg:text-[28px] xl:mx-0 xl:max-w-[320px] xl:text-[46px]">
                {content.title}
              </h2>

              <p className="mx-auto mt-4 max-w-[740px] text-[13px] leading-[1.85] text-[#5A677D]  md:max-w-[700px] md:text-[14px] lg:max-w-[700px] xl:mx-0 xl:max-w-[600px] xl:text-[18px]">
                {content.description}
              </p>
            </div>

            <div className="mt-8 rounded-[22px] bg-white p-5 shadow-[0_28px_60px_rgba(181,196,221,0.42)] ring-1 ring-[#E6ECF5] md:mx-auto md:mt-8 md:max-w-[760px] md:rounded-[24px] md:p-6 lg:mt-9 lg:max-w-[820px] lg:p-6 xl:mt-0 xl:max-w-none xl:rounded-[24px] xl:p-6">
              <h3 className="text-[22px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#1E2A3F] md:text-[28px] lg:text-[26px] xl:text-[22px]">
                {content.cardTitle}
              </h3>

              <p className="mt-3 max-w-[620px] text-[12px] leading-[1.75] text-[#5F6C82] md:text-[14px] lg:text-[14px] xl:max-w-[520px] xl:text-[16px]">
                {content.cardDescription}
              </p>

              <ul className="mt-5 space-y-3 md:hidden">
                {mobileOutcomes.map((outcome) => (
                  <ClientOutcomePill
                    key={`mobile-${outcome.text}`}
                    text={outcome.text}
                  />
                ))}
              </ul>

              <ul className="mt-5 hidden space-y-3 lg:block xl:hidden">
                {tabletOutcomes.map((outcome) => (
                  <ClientOutcomePill
                    key={`tablet-${outcome.text}`}
                    text={outcome.text}
                  />
                ))}
              </ul>

              <ul className="mt-5 hidden space-y-3 md:block lg:hidden xl:block">
                {desktopOutcomes.map((outcome) => (
                  <ClientOutcomePill
                    key={`desktop-${outcome.text}`}
                    text={outcome.text}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
