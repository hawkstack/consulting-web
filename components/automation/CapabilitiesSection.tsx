import Image from "next/image";
import type {
  AutomationCapabilitiesSectionContent,
  AutomationCapabilityItem,
} from "@/app/types/automation";

const ICON_SRC: Record<AutomationCapabilityItem["icon"], string> = {
  infrastructure: "/icons/automation/infrastructure.svg",
  deployments: "/icons/automation/deployments.svg",
  operations: "/icons/automation/operations.svg",
  platform: "/icons/automation/platform.svg",
};

function sortServices(
  services: AutomationCapabilityItem[],
  mode: "mobileOrder" | "tabletOrder" | "desktopOrder",
) {
  return [...services].sort((a, b) => {
    const aOrder =
      a[mode] ?? a.tabletOrder ?? a.mobileOrder ?? a.desktopOrder ?? 0;
    const bOrder =
      b[mode] ?? b.tabletOrder ?? b.mobileOrder ?? b.desktopOrder ?? 0;

    return aOrder - bOrder;
  });
}

function CapabilityIcon({
  icon,
}: {
  icon: AutomationCapabilityItem["icon"];
}) {
  return (
    <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[14px] bg-[#CFE0FF]">
      <Image
        src={ICON_SRC[icon]}
        alt=""
        width={32}
        height={32}
        aria-hidden="true"
        className="h-[32px] w-[32px]"
      />
    </div>
  );
}

function AutomationCard({
  service,
  centered = false,
}: {
  service: AutomationCapabilityItem;
  centered?: boolean;
}) {
  return (
    <article
      className={`rounded-[22px] bg-white px-6 py-6 shadow-[0_18px_35px_rgba(142,197,255,0.48)] ring-1 ring-[#EAF2FF] ${
        centered
          ? "flex flex-col items-center text-center"
          : "flex flex-col items-start text-left"
      } md:min-h-[230px] md:px-7 md:py-7 xl:min-h-[214px] xl:px-6 xl:py-6`}
    >
      <CapabilityIcon icon={service.icon} />

      <h3 className="mt-3 mb-2 max-w-[240px] md:max-w-[400px] text-[19px] font-semibold leading-[1.4] tracking-[-0.03em] text-[#111827] md:text-[20px] lg:text-[21px]">
        {service.title}
      </h3>

      <p className="mt-auto max-w-[260px] md:max-w-[360px] text-[13px] leading-[1.8] text-[#374151] md:text-[14px] lg:text-[16px] lg:leading-[1.75]">
        {service.description}
      </p>
    </article>
  );
}

export default function CapabilitiesSection({
  content,
}: {
  content: AutomationCapabilitiesSectionContent;
}) {
  const mobileServices = sortServices(content.services, "mobileOrder");
  const tabletServices = sortServices(content.services, "tabletOrder");
  const desktopServices = sortServices(content.services, "desktopOrder");

  return (
    <section className="bg-[#ffff] font-lexend">
      <div className="px-4 py-12 md:px-14 md:py-16 lg:px-20 lg:py-24 xl:px-24 xl:py-20">
        <div className="mx-auto max-w-7xl">
          {content.badge || content.title ? (
            <div className="mx-auto max-w-[420px] text-center md:max-w-[560px]">
              {content.badge ? (
                <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#008DFF] md:text-[13px]">
                  {content.badge}
                </span>
              ) : null}

              {content.title ? (
                <h2 className="mt-3 text-[24px] font-semibold leading-[1.12] tracking-[-0.04em] text-[#20283A] md:text-[24px] lg:text-[31px]">
                  {content.title}
                </h2>
              ) : null}
            </div>
          ) : null}

          <div className="grid grid-cols-1 gap-6 md:hidden">
            {mobileServices.map((service) => (
              <AutomationCard
                key={`mobile-${service.title}`}
                service={service}
                centered
              />
            ))}
          </div>

          <div className="hidden grid-cols-2 gap-6 md:grid xl:hidden">
            {tabletServices.map((service) => (
              <AutomationCard key={`tablet-${service.title}`} service={service} />
            ))}
          </div>

          <div className="hidden grid-cols-4 gap-4 xl:grid">
            {desktopServices.map((service) => (
              <AutomationCard key={`desktop-${service.title}`} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
