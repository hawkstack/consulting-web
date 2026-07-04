import Link from "next/link";
import type { ProductMirantisHeroContent } from "@/components/product-reseller/product-mirantis/types/product-mirantis";

type ProductMirantisHeroSectionProps = {
  content: ProductMirantisHeroContent;
};

export default function ProductMirantisHeroSection({
  content,
}: ProductMirantisHeroSectionProps) {
  const {
    badge,
    title,
    description,
    actions,
    platform,
    floatingCards: { operations, supplyChain },
  } = content;

  return (
    <section className="relative overflow-hidden bg-[#FDFEFF] font-lexend text-[#10182B]">
      <div className="pointer-events-none absolute right-[-10%] top-[-18%] hidden aspect-square w-[52%] rounded-full bg-[radial-gradient(circle,rgba(234,241,255,0.96)_0%,rgba(234,241,255,0.72)_48%,rgba(234,241,255,0)_74%)] md:block" />
      <div className="relative mx-auto grid min-h-[360px] max-w-[1250px] items-center gap-9 px-5 py-14 sm:px-8 md:min-h-[390px] md:grid-cols-[minmax(0,0.86fr)_minmax(330px,0.78fr)] md:gap-7 md:px-8 md:py-10 lg:min-h-[560px] lg:grid-cols-[minmax(0,500px)_minmax(520px,1fr)] lg:gap-12 lg:px-10 lg:py-14 xl:px-14">

        <div className="relative z-10 mx-auto max-w-[760px] text-center md:mx-0 md:max-w-[580px] md:text-left">
          <span className="inline-flex min-h-8 items-center gap-2 rounded-full bg-[#EFF5FF] px-5 text-[11px] font-semibold leading-none text-[#245DFF] md:min-h-6 md:px-4 md:text-[9px] lg:min-h-7 lg:text-[11px]">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-[#245DFF]"
            />
            {badge}
          </span>

          <h1 className="mx-auto mt-5 max-w-[720px] text-[25px] font-semibold leading-[1.16] tracking-normal text-[#111827] sm:text-[31px] md:mx-0 md:mt-4 md:max-w-[430px] md:text-[26px] md:leading-[1.15] lg:max-w-[500px] lg:text-[42px] xl:text-[52px] lg:leading-[1.17]">
            {title}
          </h1>

          <p className="mx-auto mt-4 max-w-[700px] text-[13px] leading-[1.55] text-[#66708B] md:mx-0 md:max-w-[520px] md:text-[10px] md:leading-[1.65] lg:mt-5 lg:text-[14px] lg:leading-[1.72]">
            <span className="md:hidden">
              {
                "HawkStack helps organizations design, deploy, and operate secure Kubernetes environments using Mirantis container technologies and enterprise Linux practices."
              }
            </span>
            <span className="hidden md:inline">{description}</span>
          </p>

          <div className="mt-7 flex items-stretch justify-center gap-3 md:mt-5 md:justify-start lg:mt-7">
            {actions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                aria-label={action.ariaLabel}
                className={`inline-flex min-h-12 flex-1 items-center justify-center rounded-[8px] px-4 text-[12px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3164FF] sm:flex-none sm:px-7 sm:text-[13px] md:min-h-9 md:px-5 md:text-[10px] lg:min-h-12 lg:px-7 lg:text-[12px] ${
                  action.variant === "primary"
                    ? "bg-[#3164FF] text-white shadow-[0_10px_22px_rgba(49,100,255,0.22)] hover:bg-[#2458F0]"
                    : "border border-[#D9E1EE] bg-white text-[#111827] hover:border-[#B9C8DD]"
                }`}
              >
                {action.label}
                {action.variant === "primary" ? (
                  <span aria-hidden="true" className="ml-2">
                    &rarr;
                  </span>
                ) : null}
              </Link>
            ))}
          </div>
        </div>

        <div
          aria-label="Mirantis Kubernetes platform highlights"
          className="relative z-10 hidden min-h-[310px] md:block lg:min-h-[430px]"
        >
          <div className="absolute left-[8%] top-0 w-[260px] rounded-[14px] border border-[#E7EDF7] bg-white p-4 shadow-[0_4px_28px_rgba(15,23,42,0.13)] md:left-[-11%] md:top-[-18%] lg:left-[1%] lg:top-[-12%] lg:w-[330px] lg:rounded-[18px] lg:p-6 z-10">
            <h2 className="text-[11px] font-semibold text-[#111827] lg:text-[14px]">
              {supplyChain.title}
            </h2>
            <p className="mt-2 text-[8px] leading-[1.55] text-[#66708B] lg:mt-3 lg:text-[11px]">
              {supplyChain.description}
            </p>
          </div>

          <div className="absolute right-[2%] top-[19%] w-[310px] rounded-[18px] bg-white p-5 shadow-[0_30px_72px_rgba(15,23,42,0.12)] md:right-[6%] md:top-[10%] lg:right-[10%]  lg:top-[15%] lg:w-[400px] lg:rounded-[22px] lg:p-8">
            <span className="inline-flex min-h-6 items-center gap-2 rounded-full bg-[#EFF5FF] px-4 text-[8px] font-semibold text-[#245DFF] lg:text-[10px]">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[#245DFF]"
              />
              {platform.badge}
            </span>
            <h2 className="mt-3 text-[13px] font-semibold text-[#111827] lg:mt-4 lg:text-[19px]">
              {platform.title}
            </h2>

            <div className="mt-4 grid grid-cols-2 gap-3 lg:mt-7 lg:gap-4">
              {platform.metrics.map((metric) => (
                <div
                  key={metric.value}
                  className="min-h-[66px] rounded-[10px] border border-[#E2E8F2] bg-[#F8FBFF] p-4 lg:min-h-[92px] lg:rounded-[12px] lg:p-5"
                >
                  <p className="text-[16px] font-bold leading-none text-[#245DFF] lg:text-[27px]">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-[8px] leading-[1.35] text-[#66708B] lg:text-[10px]">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-[2%] right-[-2%] w-[350px] rounded-[14px] border border-[#E7EDF7] bg-white p-4 shadow-[0_28px_64px_rgba(15,23,42,0.13)]  md:bottom-[-20%] md:right-[-15%]  lg:bottom-[-24%] lg:right-[-11%] lg:w-[430px] lg:rounded-[16px] lg:p-6">
            <h2 className="text-[12px] font-semibold text-[#111827] lg:text-[16px]">
              {operations.title}
            </h2>
            <p className="mt-2 text-[8px] leading-[1.55] text-[#66708B] lg:mt-3 lg:text-[11px]">
              {operations.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
