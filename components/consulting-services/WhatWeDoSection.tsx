import type {
  ConsultingServicesWhatWeDoSectionContent,
  ConsultingServiceItem,
} from "@/app/types/consulting-services";

import ServiceCard from "@/components/consulting-services/ServiceCard";

function sortServices(
  services: ConsultingServiceItem[],
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

export default function WhatWeDoSection({
  content,
}: {
  content: ConsultingServicesWhatWeDoSectionContent;
}) {
  const mobileServices = sortServices(content.services, "mobileOrder");
  const tabletServices = sortServices(content.services, "tabletOrder");
  const desktopServices = sortServices(content.services, "desktopOrder");

  return (
    <section className="bg-white font-lexend">
      <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-6 md:px-8 md:py-16 lg:px-12 xl:py-18">
        <div className="mx-auto max-w-[1140px] ">
          <div className="mx-auto max-w-[760px] text-center xl:mx-0 xl:max-w-[820px] xl:text-left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0A8BFF] md:text-[12px] xl:text-[12px]">
              {content.badge}
            </p>
            <h2 className="mt-4 text-[34px] font-semibold leading-[1.14] tracking-[-0.04em] text-[#18233A] md:text-[42px] xl:max-w-[780px] xl:text-[42px]">
              {content.title}
            </h2>
            <p className="mx-auto mt-4 max-w-[690px] text-[13px] leading-[1.9] text-[#5F6B80] md:text-[14px] xl:mx-0 xl:max-w-[780px] xl:text-[18px]">
              {content.description}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:hidden">
            {mobileServices.map((service) => (
              <ServiceCard key={`mobile-${service.title}`} service={service} />
            ))}
          </div>

          <div className="mt-12 hidden grid-cols-2 gap-6 md:grid xl:hidden">
            {tabletServices.map((service) => (
              <ServiceCard key={`tablet-${service.title}`} service={service} />
            ))}
          </div>

          <div className="mt-8 hidden grid-cols-4 gap-4 xl:grid">
            {desktopServices.map((service) => (
              <ServiceCard key={`desktop-${service.title}`} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
