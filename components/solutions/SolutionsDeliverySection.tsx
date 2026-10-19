import type { SolutionDeliveryContent } from "@/data/solutions/types";

type SolutionsDeliverySectionProps = {
  content: SolutionDeliveryContent;
  textDirection?: "ltr" | "rtl";
};

export default function SolutionsDeliverySection({
  content,
  textDirection = "ltr",
}: SolutionsDeliverySectionProps) {
  return (
    <section
      aria-labelledby="solutions-delivery-heading"
      className="mx-auto w-full max-w-[1440px] bg-[#03172c] px-5 py-16 text-center text-white sm:px-8 sm:py-20 xl:h-[508px] xl:px-0 xl:py-0"
    >
      <div className="mx-auto max-w-[1160px] xl:pt-[96px]">
        <h2
          id="solutions-delivery-heading"
          dir={textDirection}
          className="font-lexend text-[clamp(27px,2.7vw,38px)] font-semibold leading-[1.15] tracking-[-0.025em]"
        >
          {content.heading}
        </h2>
        <p dir={textDirection} className="mx-auto mt-3 max-w-[720px] font-lexend text-sm leading-[1.4] text-[#d2dbea] sm:text-base">
          {content.description}
        </p>

        <ol className="mt-12 grid grid-cols-1 gap-9 sm:grid-cols-2 xl:mt-[58px] xl:grid-cols-4 xl:gap-5">
          {content.steps.map((step) => (
            <li key={step.number} className="flex flex-col items-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#08659b] font-lexend text-2xl font-semibold text-white sm:h-16 sm:w-16">
                {step.number}
              </span>
              <h3 dir={textDirection} className="mt-4 font-lexend text-lg font-semibold leading-tight sm:text-xl">
                {step.title}
              </h3>
              <p dir={textDirection} className="mt-2 max-w-[285px] font-lexend text-sm leading-[1.4] text-[#c3cedd] sm:text-base">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
