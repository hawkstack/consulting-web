import {
  ConsultingIcon,
  IntegrationIcon,
  JourneyBulbIcon,
  JourneyGearIcon,
  JourneyNetworkIcon,
  SolutionDesignIcon,
  TrainingIcon,
} from "@/components/icons/Home/digital-transformation/DigitalTransformationIcons";
import Image from "next/image";
import {
  cloudPartners,
  coverageItems,
  enterprisePartners,
  membershipCards,
  technologyCategories,
  technologyJourney,
} from "../data/TechnologyCoverage.data";
import type {
  CoverageItem,
  TechnologyJourneyItem,
  TechnologyPartner,
} from "../types/TechnologyCoverage.types";

const journeyIcons = {
  consulting: JourneyNetworkIcon,
  architecture: JourneyBulbIcon,
  integration: JourneyGearIcon,
  training: TrainingIcon,
};
const coverageIcons = {
  platform: SolutionDesignIcon,
  cloud: ConsultingIcon,
  infrastructure: IntegrationIcon,
};

function Journey({
  item,
  index,
}: {
  item: TechnologyJourneyItem;
  index: number;
}) {
  const Icon = journeyIcons[item.icon];
  return (
    <div className="relative flex min-w-0 items-center gap-3 pr-5">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#EFF6FF] text-[#0066FF]">
        <Icon className="h-6 w-6" />
      </span>
      <span className="max-w-48 text-sm font-medium leading-snug text-[#1E293B]">
        {item.label}
      </span>
      {index < technologyJourney.length - 1 && (
        <span
          aria-hidden="true"
          className="absolute left-[calc(88%-12px)] top-1/2 hidden h-px w-12 bg-[#0066FF] lg:block"
        />
      )}
    </div>
  );
}

function PartnerCard({ partner }: { partner: TechnologyPartner }) {
  const marks: Record<string, string | undefined> = {
    "red-hat": "/images/home/product-reseller/Redhat.webp",
    suse: "/images/home/product-reseller/Suse.webp",
    mirantis: "/images/home/product-reseller/Mirantis.webp",
    aws: "/images/home/product-reseller/AWS.webp",
    azure: "/images/home/product-reseller/Azure.webp",
    "google-cloud": "/images/home/product-reseller/google-cloud.webp",
  };
  const mark = marks[partner.id];
  const showBrandName = partner.id !== "aws";
  const contents =
    partner.id === "suse" ? (
      <span className="flex items-center justify-center gap-2 xl:gap-2.5">
        <Image
          src="/images/home/product-reseller/Suse.webp"
          alt=""
          aria-hidden="true"
          width={160}
          height={64}
          className="h-8 w-8 object-contain xl:h-9 xl:w-9"
        />
        <span className="text-xl font-bold tracking-tight text-[#00a86b] xl:text-2xl">
          SUSE
        </span>
      </span>
    ) : (
      <span className="flex items-center justify-center gap-2 xl:gap-2.5">
        {mark && (
          <Image
            src={mark}
            alt=""
            aria-hidden="true"
            width={160}
            height={64}
            className={`object-contain ${partner.id === "aws" ? "h-11 w-24 xl:h-12 xl:w-28" : "h-8 w-8 xl:h-9 xl:w-9"}`}
          />
        )}
        {showBrandName && (
          <span
            className={`font-semibold text-slate-900 ${partner.id === "mirantis" ? "text-sm tracking-[0.04em] xl:text-[22px]" : "text-xs xl:text-[17px]"}`}
          >
            {partner.name}
          </span>
        )}
      </span>
    );
  const style =
    "flex h-[88px] items-center justify-center rounded-xl border border-slate-200 bg-white px-4 shadow-[0_4px_14px_rgba(15,45,85,0.06)] lg:h-[50px] lg:rounded-lg lg:px-2 lg:shadow-[0_2px_4px_rgba(15,23,42,0.12)] xl:h-[86px] xl:rounded-[9px] xl:px-4 xl:shadow-[0_2px_5px_rgba(15,23,42,0.12)]";
  return partner.href ? (
    <a
      href={partner.href}
      target={partner.external ? "_blank" : undefined}
      rel={partner.external ? "noopener noreferrer" : undefined}
      aria-label={`Verify ${partner.name} partnership`}
      className={`${style} transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-blue-500`}
    >
      {contents}
    </a>
  ) : (
    <div className={style}>{contents}</div>
  );
}

function CoverageRow({ item }: { item: CoverageItem }) {
  const Icon = coverageIcons[item.icon];
  return (
    <div className="flex items-center gap-3 rounded-xl border-l-[3px] border-[#0066FF] bg-white px-4 py-3 shadow-sm lg:h-[39px] lg:gap-2 lg:rounded-md lg:px-2.5 lg:py-1 xl:h-[69px] xl:gap-4 xl:rounded-[11px] xl:px-5 xl:py-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600 lg:h-5 lg:w-5 lg:rounded-none lg:bg-transparent xl:h-9 xl:w-9">
        <Icon className="h-5 w-5 lg:h-3.5 lg:w-3.5 xl:h-7 xl:w-7" />
      </span>
      <div>
        <h3 className="text-sm font-semibold text-slate-800 lg:text-[9px] lg:leading-[11px] xl:text-[14px] xl:leading-[18px]">
          {item.title}
        </h3>
        <p className="mt-0.5 text-xs leading-relaxed text-slate-500 lg:mt-0 lg:text-[7px] lg:leading-[9px] xl:mt-0.5 xl:text-[11px] xl:leading-[15px]">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function TechnologyCoverage() {
  return (
    <section className="bg-white px-5 py-14 font-lexend text-slate-900 sm:px-8 lg:px-12 lg:py-20 xl:px-16">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#137DD3]">
              Strategic Technology Ecosystem
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl xl:text-[46px] text-[#0A182E]">
              End to End Expertise for
              <br className="hidden sm:block" /> Your Digital Transformation.
            </h2>
          </div>
          <p className="rounded-3xl bg-[#EFF8FF] px-6 py-5 text-sm leading-relaxed text-[#0066FF] sm:text-base">
            From strategy to execution, HawkStack connects consulting,
            platforms, infrastructure and enablement through one integrated
            approach.
          </p>
        </div>
        <div className="mt-9 grid gap-5 border-y border-slate-100 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {technologyJourney.map((item, index) => (
            <Journey key={item.id} item={item} index={index} />
          ))}
        </div>
        <div className="mt-8 rounded-[28px] bg-[#EFF8FF] p-5 sm:p-7 lg:rounded-[20px] lg:p-4 xl:mt-10 xl:min-h-[402px] xl:rounded-[24px] xl:p-6">
          <div className="grid gap-8 lg:grid-cols-[0.52fr_1fr] lg:items-stretch lg:gap-6 xl:gap-[6.5%]">
            <div className="lg:py-0.5 xl:flex xl:flex-col xl:justify-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#137DD3] lg:text-[7px] lg:leading-[9px] lg:tracking-[0.2em] xl:text-[10px] xl:leading-4">
                Coverage
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl lg:mt-1 lg:text-[16px] lg:leading-5 xl:mt-1.5 xl:text-[28px] xl:leading-[34px] text-[#0A182E] ">
                Technology coverage
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#475569] lg:mt-1.5 lg:max-w-[230px] lg:text-[8px] lg:leading-[10px] xl:mt-2 xl:max-w-[390px] xl:text-[13px] xl:leading-[17px]">
                A unified ecosystem of leading partners across platforms,
                infrastructure and cloud native technologies to accelerate your
                outcomes.
              </p>
              <div className="mt-6 space-y-3 lg:mt-2.5 lg:space-y-1 xl:mt-4 xl:space-y-[5px]">
                {coverageItems.map((item) => (
                  <CoverageRow key={item.id} item={item} />
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-white p-4 lg:rounded-[15px] lg:px-3 lg:py-3 xl:flex xl:min-h-[352px] xl:flex-col xl:justify-between xl:rounded-[24px] xl:px-5 xl:py-8">
              <PartnerGroup
                title="Enterprise Platforms"
                partners={enterprisePartners}
              />
              <PartnerGroup title="Cloud Platforms" partners={cloudPartners} />
            </div>
          </div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {membershipCards.map((card) => (
            <div key={card.id} className="relative pt-5">
              <span
                className={`absolute left-1/2 top-0 z-10 max-w-[calc(100%-24px)] -translate-x-1/2 whitespace-nowrap rounded-t-md px-4 py-1 text-center text-[7px] font-semibold uppercase tracking-[0.12em] text-white sm:px-6 sm:text-[8px] sm:tracking-[0.16em] xl:text-[9px] ${card.id === "cncf" ? "bg-[#9B49ED]" : "bg-[#0066FF]"}`}
              >
                {card.badge}
              </span>
              <article
                className={`grid min-h-[98px] grid-cols-[minmax(0,36%)_minmax(0,1fr)] items-stretch rounded-[20px] border border-slate-100 border-t-2 bg-[#FEFFFF] px-3 shadow-[0_3px_4px_rgba(15,23,42,0.14)] sm:px-6 ${card.id === "cncf" ? "border-t-[#9B49ED]" : "border-t-[#0066FF]"}`}
              >
                <div className="flex min-w-0 items-center justify-center border-r border-[#D5E2F5] pr-3 sm:pr-4">
                  {card.logo && (
                    <Image
                      src={card.logo}
                      alt={`${card.name} logo`}
                      width={220}
                      height={72}
                      className="h-12 w-full max-w-[205px] object-contain"
                    />
                  )}
                </div>
                <div className="flex min-w-0 flex-col justify-center pl-3 sm:pl-5">
                  <h3 className="text-sm font-semibold leading-snug text-[#0A182E] sm:text-base xl:text-[19px]">
                    {card.name}
                  </h3>
                  <p className="mt-0.5 text-[11px] leading-relaxed text-[#526782] sm:text-xs xl:text-[13px]">
                    {card.description}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
        <nav
          aria-label="Technology sectors"
          className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-slate-100 pt-6 text-xs font-medium text-slate-600 sm:gap-x-4 sm:text-sm"
        >
          {technologyCategories.map((category, index) => (
            <span key={category} className="contents">
              <span>{category}</span>
              {index < technologyCategories.length - 1 && (
                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-blue-500"
                />
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}

function PartnerGroup({
  title,
  partners,
}: {
  title: string;
  partners: TechnologyPartner[];
}) {
  return (
    <div className="text-center [&+&]:mt-7 lg:[&+&]:mt-2.5 xl:[&+&]:mt-0">
      <span className="inline-flex rounded-full bg-[#e7f1ff] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#137DD3] lg:px-2.5 lg:py-0.5 lg:text-[6px] lg:leading-[8px] lg:tracking-[0.18em] xl:px-4 xl:py-1.5 xl:text-[11px] xl:leading-3 xl:tracking-[0.16em]">
        {title}
      </span>
      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:mt-2 lg:gap-1.5 xl:mt-5 xl:gap-3">
        {partners.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </div>
    </div>
  );
}
