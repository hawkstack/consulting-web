import type {
  AppModernizationCapabilitiesSectionContent,
  AppModernizationCapabilityItem,
} from "@/app/types/app-modernization";

function sortServices(
  services: AppModernizationCapabilityItem[],
  mode: "mobileOrder" | "tabletOrder" | "desktopOrder"
) {
  return [...services].sort((a, b) => {
    const aOrder =
      a[mode] ?? a.tabletOrder ?? a.mobileOrder ?? a.desktopOrder ?? 0;
    const bOrder =
      b[mode] ?? b.tabletOrder ?? b.mobileOrder ?? b.desktopOrder ?? 0;

    return aOrder - bOrder;
  });
}

export default function CapabilitiesSection({
  content,
}: {
  content: AppModernizationCapabilitiesSectionContent;
}) {
  const mobileServices = sortServices(content.services, "mobileOrder");
  const tabletServices = sortServices(content.services, "tabletOrder");
  const desktopServices = sortServices(content.services, "desktopOrder");

  const renderCard = (
    service: AppModernizationCapabilityItem,
    key: string
  ) => (
    <article
      key={key}
      className="rounded-[14px] border border-[#DCE3EC] bg-white px-[10px] py-[10px] text-center shadow-[0_2px_6px_rgba(15,23,42,0.05)] md:min-h-[120px] md:px-[12px] md:py-[12px] md:text-left lg:min-h-[102px]"
    >
      <h3 className="text-[18px] font-semibold text-[#111827] md:text-[18px] lg:text-[18px]">
        {service.title}
      </h3>
      <p className="mt-[10px] text-[12px] font-normal leading-[1.35] text-[#2F3747] md:max-w-[250px] md:text-[12px] lg:max-w-none lg:text-[12px]">
        {service.description}
      </p>
    </article>
  );

  return (
    <section className="bg-[#F8F9FB] font-lexend">
      <div className="mx-auto max-w-[1280px] px-4 py-12 md:px-8 md:py-14 xl:px-6 xl:py-16">
        <div className="mx-auto max-w-[300px] md:max-w-[1116px] xl:max-w-[1160px]">
          <div className="mx-auto max-w-[420px] text-center md:max-w-[560px] lg:mx-0 lg:max-w-[560px] lg:text-left">
            <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#008DFF] md:text-[13px]">
              {content.badge}
            </span>

            <h2 className="mt-3 text-[24px] font-semibold leading-[1.12] tracking-[-0.04em] text-[#20283A] md:text-[24px] lg:max-w-[620px] lg:text-[31px]">
              {content.title}
            </h2>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-[12px] md:hidden">
            {mobileServices.map((service, index) =>
              renderCard(service, `mobile-${service.title}-${index}`)
            )}
          </div>

          <div className="mt-6 hidden grid-cols-2 gap-[14px] md:grid lg:hidden">
            {tabletServices.map((service, index) =>
              renderCard(service, `tablet-${service.title}-${index}`)
            )}
          </div>

          <div className="mt-7 hidden grid-cols-4 gap-[10px] lg:grid">
            {desktopServices.map((service, index) =>
              renderCard(service, `desktop-${service.title}-${index}`)
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
