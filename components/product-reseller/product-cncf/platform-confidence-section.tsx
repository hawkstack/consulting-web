import type { ProductCncfPlatformConfidenceContent } from "@/app/types/product-reseller/product-cncf/product-cncf";
import Image from "next/image";

type ProductCncfPlatformConfidenceSectionProps = {
  content: ProductCncfPlatformConfidenceContent;
};

const featureIcons = [
  <svg
    key="chart"
    width="61"
    height="64"
    viewBox="0 0 61 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 md:h-8 md:w-8 lg:h-10 lg:w-10"
    aria-hidden="true"
  >
    <path d="M7.05859 52.7031H48.4704" stroke="currentColor" strokeWidth="2.35294" strokeLinecap="round" />
    <path d="M18.3516 45.1774V35.7656" stroke="currentColor" strokeWidth="2.35294" strokeLinecap="round" />
    <path d="M29.1758 45.1756V28.2344" stroke="currentColor" strokeWidth="2.35294" strokeLinecap="round" />
    <path d="M40 45.1737V20.7031" stroke="currentColor" strokeWidth="2.35294" strokeLinecap="round" />
    <path d="M11.7656 25.886L22.1186 16.4743L30.1186 22.5919L46.5892 7.0625" stroke="currentColor" strokeWidth="2.35294" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M38.5898 7.0625H46.5898V15.0625" stroke="currentColor" strokeWidth="2.35294" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg
    key="rocket"
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 md:h-8 md:w-8 lg:h-10 lg:w-10"
    aria-hidden="true"
  >
    <path d="M29.5312 39.8438L20.1562 30.4688C24.8438 18.2812 34.6875 10.3125 48.75 8.90625C47.3438 22.9688 39.375 32.8125 29.5312 39.8438Z" stroke="currentColor" strokeWidth="2.34375" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20.1562 30.4688L11.7188 31.875L9.375 41.25L18.75 38.9062" stroke="currentColor" strokeWidth="2.34375" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M29.5312 39.8438L28.125 48.2812L18.75 50.625L21.0938 41.25" stroke="currentColor" strokeWidth="2.34375" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M37.0312 18.2812C37.0312 19.8345 38.2905 21.0938 39.8438 21.0938C41.397 21.0938 42.6562 19.8345 42.6562 18.2812C42.6562 16.728 41.397 15.4688 39.8438 15.4688C38.2905 15.4688 37.0312 16.728 37.0312 18.2812Z" stroke="currentColor" strokeWidth="2.34375" />
    <path d="M10.3125 49.6875L16.4062 43.5938" stroke="currentColor" strokeWidth="2.34375" strokeLinecap="round" />
  </svg>,
  <svg
    key="shield"
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 md:h-8 md:w-8 lg:h-10 lg:w-10"
    aria-hidden="true"
  >
    <path d="M30 6.5625C35.625 12.6562 41.7188 15.4688 48.75 16.875V29.0625C48.75 41.25 40.7812 50.1562 30 54.375C19.2188 50.1562 11.25 41.25 11.25 29.0625V16.875C18.2812 15.4688 24.375 12.6562 30 6.5625Z" stroke="currentColor" strokeWidth="2.34375" strokeLinejoin="round" />
    <path d="M20.1562 30L27.1875 37.0312L41.25 22.9688" stroke="currentColor" strokeWidth="2.34375" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export default function ProductCncfPlatformConfidenceSection({
  content,
}: ProductCncfPlatformConfidenceSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#050A17] font-lexend text-white">
      <div className="relative mx-auto max-w-[948px] px-6 py-5 sm:px-8 md:px-10 md:py-16 lg:max-w-[1220px] lg:px-14 lg:py-10">
        <div className="grid gap-9 md:grid-cols-[minmax(0,1fr)_minmax(380px,340px)] md:items-start md:justify-between md:gap-8 lg:grid-cols-[minmax(0,460px)_minmax(380px,400px)] lg:gap-12 xl:grid-cols-[minmax(0,620px)_minmax(460px,1fr)] xl:gap-16">
          <div className="relative z-10">
            <h2 className="mx-auto max-w-[230px] text-center text-[18px] font-semibold leading-[1.06] tracking-[-0.02em] sm:max-w-[280px] sm:text-[22px] md:mx-0 md:max-w-[340px] md:text-left md:text-[28px] lg:max-w-[430px] xl:max-w-[480px] lg:text-[42px] xl:text-[48px]">
              Less tool chaos.
              <span className="text-[#83E9FF]"> More platform confidence.</span>
            </h2>
            <p className="mt-5 hidden max-w-[360px] text-[13px] leading-[1.55] text-[#F3F7FF] sm:text-[14px] md:block md:text-[12px] lg:max-w-[430px] xl:max-w-[580px] lg:text-[16px] xl:text-[16px]">
              {content.description}
            </p>

            <div className="mt-5 hidden max-w-[500px] grid-cols-[2px_minmax(120px,140px)_minmax(160px,1fr)] items-center gap-3 sm:gap-5 md:grid md:max-w-[340px] md:grid-cols-[2px_120px_1fr] md:gap-4 lg:max-w-[430px] xl:max-w-[580px] lg:grid-cols-[2px_160px_1fr] xl:grid-cols-[2px_240px_1fr]">
              <div className="h-[90px] w-[3px] bg-[#66E7FF] md:h-[80px] lg:h-[110px] xl:h-[106px]" />
              <p className="text-[10px] leading-[1.35] text-[#E7F0FF] sm:text-[11px] md:text-[9px] lg:text-[12px] xl:text-[14px]">
                For organizations modernizing virtualization, HawkStack also operates a dedicated domain kubevirtstack.com focused on KubeVirt-led VM and container convergence.
              </p>
              <div className="relative h-[100px] min-w-0 md:h-[100px] lg:h-[140px] xl:h-[140px]">
                <Image
                  src="/images/products/cncf-platform-confidence.webp"
                  alt=""
                  fill
                  className="object-contain object-center opacity-70 scale-132 transition group-hover:scale-[1.02]"
                  sizes="240px"
                  priority={false}
                />
              </div>
            </div>
          </div>

          <div className="relative z-10 grid gap-2.5 md:w-full md:max-w-[420px] md:justify-self-end md:gap-4 lg:w-[460px] lg:gap-4">
            {content.cards.map((card, index) => (
              <article
                key={card.title}
                className="group relative overflow-hidden rounded-[18px] border border-[#4A7BA7]/60 bg-[#0B1429] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_16px_36px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-0.5 md:min-h-auto md:rounded-[18px] md:px-5 md:py-4 lg:min-h-auto lg:px-6 lg:py-5"
              >
                <div className={`absolute inset-y-0 left-0 w-[3px] ${index === 1 ? 'bg-[#0086FF]' : 'bg-[#68E8FF]'}`} />
                <div className="relative flex items-start gap-4 text-left md:gap-3 lg:gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#7CE0FF]/20 bg-[#0D1F38] text-[#7CE0FF] md:h-12 md:w-12 lg:h-14 lg:w-14">
                    {featureIcons[index]}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[13px] font-semibold leading-tight text-white sm:text-[14px] md:text-[14px] lg:text-[16px]">
                      {card.title}
                    </h3>
                    <p className="mt-2 max-w-[330px] text-[11px] leading-[1.5] text-[#C8D4EA] sm:text-[11px] md:mt-1.5 md:max-w-none md:text-[11px] lg:max-w-[350px] lg:text-[13px]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
