import { suseServicesContent as content } from "../data/suseServices";
import type { SuseServiceIcon } from "../types/suseServices";

const iconPaths: Record<SuseServiceIcon, string> = {
  subscription:
    "M14 2H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h6M14 2l6 6M14 2v6h6v6m-6 5 3 3 5-5",
  linux: "m12 2 10 5-10 5L2 7l10-5ZM2 12l10 5 10-5M2 17l10 5 10-5",
  kubernetes: "M9 2h6v6H9zM2 16h6v6H2zM16 16h6v6h-6zM12 8v4M5 16v-4h14v4",
  virtualization:
    "M3 2h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1ZM3 14h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1ZM6 6h.01M6 18h.01",
  security: "m12 2 8 3v7c0 5-4 8-8 10-4-2-8-5-8-10V5l8-3Zm-4 10 3 3 5-6",
  support:
    "M14.5 6.5a6 6 0 0 0-7.8 7.8L2 19a2.1 2.1 0 0 0 3 3l9.7-9.7a6 6 0 0 0 7.8-7.8L18 9l-3-3 4.5-4.5a6 6 0 0 0-5 5Z",
};

export default function SUSEServices() {
  return (
    <section
      id="suse-services"
      aria-labelledby="suse-services-heading"
      className="bg-white text-[#162b28]"
    >
      <div className="mx-auto w-full max-w-[1180px] px-6 py-12 sm:px-9 lg:px-10 lg:py-16 xl:px-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.025em] text-[#14965c]">
          {content.eyebrow}
        </p>
        <h2
          id="suse-services-heading"
          className="mt-5 text-[clamp(28px,3vw,38px)] font-bold leading-[1.2] tracking-[-0.02em]"
        >
          {content.heading}
        </h2>
        <ul className="mt-7 grid grid-cols-1 gap-x-12 md:grid-cols-2">
          {content.services.map((service) => (
            <li
              key={service.icon}
              className="flex min-w-0 items-start gap-6 border-b border-[#d7e3dc] py-6 md:min-h-[89px]"
            >
              <svg
                aria-hidden="true"
                className="mt-0.5 size-6 shrink-0 text-[#14965c]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={iconPaths[service.icon]} />
              </svg>
              <p className="text-[15px] leading-[1.7]">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
