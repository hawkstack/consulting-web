import type { DigitalTransformationSectionData } from "@/types/home/home";

type Props = {
  data: DigitalTransformationSectionData;
};

const accentClasses = {
  red: "border-t-red-500",
  green: "border-t-emerald-400",
  blue: "border-t-blue-400",
};

export default function DigitalTransformation({ data }: Props) {
  return (
    <section className="bg-[#070d19] px-5 py-10 font-lexend text-slate-100 sm:px-8 md:py-14 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-7 lg:grid-cols-[1.7fr_1fr] lg:items-start">
          <div>
            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl xl:text-[43px]">
              {data.title}
            </h2>
            <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-xs xl:text-sm text-slate-400">
              {data.highlights.map((highlight, index) => (
                <span key={highlight} className="flex items-center gap-3">
                  {highlight}
                  {index < data.highlights.length - 1 && (
                    <i className="h-1 w-1 rounded-full bg-blue-400" />
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-slate-700/70 bg-[#0a1425]/75 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.15)]">
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {data.services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="flex items-center gap-2 text-[11px] xl:text-[13px] text-slate-200"
                  >
                    <span className="flex h-5 w-5 xl:h-6 xl:w-6 items-center justify-center rounded border border-blue-500/40 bg-blue-500/10 text-blue-400">
                      <Icon className="h-3 w-3 xl:h-4 xl:w-4" />
                    </span>
                    {service.title}
                  </div>
                );
              })}
            </div>
            <p className="mt-4 border-t border-slate-700/60 pt-3 text-[9px] xl:text-[12px] text-slate-500">
              {data.servicesCaption}
            </p>
          </div>
        </div>

        <div className="my-8 h-px bg-linear-to-r from-transparent via-blue-500/70 to-transparent" />

        <div className="grid gap-4 md:grid-cols-2">
          {data.primaryPartners.map((partner) => {
            const badgeClass =
              partner.accent === "red"
                ? "rounded-full border border-red-400/40 bg-red-600/10 px-2 py-1 text-[6px] xl:text-[8px] xl:text-[10px] uppercase tracking-wider text-red-300"
                : partner.accent === "green"
                  ? "rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2 py-1 text-[6px] xl:text-[8px] xl:text-[10px] uppercase tracking-wider text-emerald-300"
                  : "rounded-full border border-blue-400/40 bg-blue-500/10 px-2 py-1 text-[6px] xl:text-[8px] xl:text-[10px] uppercase tracking-wider text-blue-300";

            return (
              <article
                key={partner.id}
                className={`group relative overflow-hidden rounded-lg border border-slate-700/70 border-t-2 bg-[#0a1425]/75 p-5 ${accentClasses[partner.accent]} transition-transform duration-200 hover:scale-[1.03] hover:shadow-lg`}
              >
                <div className="flex items-start justify-between gap-2 sm:gap-3">
                  <div className="flex min-w-0 flex-1 items-center gap-3">
                    <img
                      src={partner.image}
                      alt={`${partner.name} logo`}
                      className="h-10 w-10 shrink-0 rounded-lg object-contain"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-base font-semibold xl:text-2xl">
                        {partner.name}
                      </h3>
                      <p className="mt-0.5 truncate text-[10px] text-slate-400 xl:text-[13px]">
                        {partner.caption}
                      </p>
                    </div>
                  </div>
                  {partner.badge && (
                    <span
                      className={`${badgeClass} inline-flex shrink-0 items-center whitespace-nowrap self-start`}
                    >
                      • {partner.badge}
                    </span>
                  )}
                </div>
                {partner.description && (
                  <p className="mt-5 min-h-9 text-[11px] leading-relaxed text-slate-400 xl:text-[13px]">
                    {partner.description}
                  </p>
                )}
                {(partner.footerLabel || partner.partnerAccount) && (
                  <div className="mt-1 flex flex-col gap-2 border-t border-slate-700/50 pt-3 sm:flex-row sm:items-start sm:justify-between">
                    {partner.footerLabel && (
                      <div className="pt-1 text-[10px] text-[#0DA2FF] xl:text-[12px]">
                        {partner.footerLink ? (
                          <a
                            href={partner.footerLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="wrap-break-word hover:underline"
                          >
                            {partner.footerLabel}
                          </a>
                        ) : (
                          partner.footerLabel
                        )}
                      </div>
                    )}
                    {partner.partnerAccount && (
                      <div className="w-full max-w-36 rounded-md border border-slate-700/70 bg-[#101b31] px-2 py-1 text-[8px] leading-tight xl:text-[10px] sm:w-36">
                        <p className="text-slate-300">
                          {partner.partnerAccount.label}
                        </p>
                        <p className="text-[#0DA2FF]">
                          {partner.partnerAccount.number}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {partner.secondaryBadge && (
                  <div className="mt-4 flex justify-end sm:absolute sm:bottom-4 sm:right-4 sm:mt-0 sm:justify-start">
                    <div className="flex items-center gap-2 rounded-md border border-yellow-600/30 bg-[#071018] px-3 py-1 text-xs text-[#FFD27A] shadow-sm">
                      <span className="text-[#FFD27A]">★</span>
                      <span className="text-[12px] font-medium">
                        {partner.secondaryBadge}
                      </span>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <h3 className="mt-6 text-[9px] xl:text-[13px] uppercase tracking-[0.25em] text-slate-500">
          {data.ecosystemTitle}
        </h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {data.ecosystemPartners.map((partner) => {
            return (
              <article
                key={partner.id}
                className="rounded-md border border-slate-700/70 bg-[#0a1425]/75 p-3"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={partner.image}
                    alt={`${partner.name} logo`}
                    className="h-5 w-5 rounded object-contain"
                  />
                  <h4 className="text-[11px] xl:text-[14px] font-medium">
                    {partner.name}
                  </h4>
                </div>
                <p className="mt-2 text-[9px] xl:text-[12px] text-slate-500">
                  {partner.caption}
                </p>
                <p className="mt-2 text-[8px] xl:text-[10px] uppercase tracking-wider text-[#5FA8FF]">
                  • {partner.footerLabel}
                </p>
              </article>
            );
          })}
        </div>

        <p className="mt-5 border-t border-slate-800 pt-5 text-xs xl:text-base text-slate-300">
          {data.footerText}
        </p>
      </div>
    </section>
  );
}
