import type { RedHatProductsHeroData } from "@/app/types/product-reseller/product-redhat/redhat-products/redhat-products-hero";

interface RedHatProductsHeroSectionProps {
  data: RedHatProductsHeroData;
}

const RedHatProductsHeroSection = ({
  data,
}: RedHatProductsHeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0d] px-5 py-10 text-white sm:px-10 md:py-20 lg:px-16 xl:px-25">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_22%,rgba(238,0,0,0.36),transparent_34%),linear-gradient(112deg,#09090a_0%,#161616_45%,#3d0707_100%)]" />
      <div className="absolute right-[17%] top-[38%] hidden h-[118px] w-[118px] rounded-full bg-[radial-gradient(circle_at_35%_30%,#ff3a3a_0%,#ee0000_44%,#7a0000_100%)] shadow-[0_0_55px_rgba(238,0,0,0.65)] md:block xl:h-[140px] xl:w-[140px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1180px] items-center gap-0 md:gap-8 md:grid-cols-[0.95fr_0.9fr] lg:grid-cols-[1fr_0.92fr] xl:gap-0">
        <div className="max-w-[680px] text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#6c1b1b] bg-[#260808]/85 px-3 py-2 text-[8px] font-bold text-white shadow-[0_0_26px_rgba(238,0,0,0.2)] sm:text-[10px]">
            <span className="h-2 w-2 rounded-full bg-[#ee0000] shadow-[0_0_12px_rgba(238,0,0,0.9)]" />
            {data.badge}
          </div>

          <h1 className="mx-auto mt-4 max-w-[300px] text-[24px] font-bold leading-[0.95] tracking-[-0.01em] text-white sm:max-w-[420px] sm:text-[34px] md:mx-0 md:mt-6 md:max-w-[710px] md:text-[40px] md:leading-[1.02] lg:text-[48px] xl:text-[56px]">
            {data.title}{" "}
            <span className="text-[#ff4b55]">{data.highlightedTitle}</span>
          </h1>

          <p className="mx-auto mt-[310px] max-w-[280px] text-center text-[10px] leading-4 text-white/72 sm:mt-[340px] sm:max-w-[560px] sm:text-xs sm:leading-5 md:mx-0 md:mt-5 md:text-left md:text-base md:leading-7">
            {data.description}
          </p>

          <div className="mt-5 grid grid-cols-3 justify-items-center gap-x-3 text-[8px] leading-tight text-white/78 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-5 sm:gap-y-3 sm:text-[11px] md:mt-7 md:justify-start md:text-xs">
            {data.highlights.map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <span className="text-[#ff4b55]">{"\u2713"}</span>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute left-1/2 top-[118px] min-h-[290px] w-[260px] -translate-x-1/2 md:relative md:left-auto md:top-auto md:min-h-[300px] md:w-auto md:translate-x-0 lg:min-h-[420px]">
          <div className="absolute left-[80px] top-[96px] h-[104px] w-[104px] rounded-full bg-[radial-gradient(circle_at_35%_30%,#ff3535_0%,#ee0000_45%,#640000_100%)] shadow-[0_0_75px_rgba(238,0,0,0.55)] md:hidden" />

          <div className="grid gap-4 sm:grid-cols-3 md:block">
            {data.cards.map((card) => (
              <article
                key={card.title}
                className={`rounded-[9px] border border-white/16 bg-white/[0.12] p-3 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl md:absolute md:w-[190px] md:rounded-[16px] md:p-4 lg:w-[260px] lg:rounded-[22px] lg:p-6 xl:w-[270px] ${card.className}`}
              >
                <h2 className="text-[10px] font-bold text-white md:text-sm lg:text-lg xl:text-xl">
                  {card.title}
                </h2>
                <p className="mt-2 text-[8px] leading-[1.35] text-white/72 md:mt-3 md:text-[10px] md:leading-5 lg:mt-4 lg:text-xs lg:leading-6">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedHatProductsHeroSection;
