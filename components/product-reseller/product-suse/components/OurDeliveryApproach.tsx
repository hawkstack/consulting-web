import { suseDeliverySteps } from "../data/suseDeliveryApproach";

export default function OurDeliveryApproach() {
  return (
    <section
      aria-labelledby="suse-delivery-heading"
      className="bg-white text-[#142B28]"
    >
      <div className="mx-auto max-w-[1170px] px-6 py-12 sm:px-9 lg:py-[62px] xl:px-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#318D60]">
          A clear path forward
        </p>
        <h2
          id="suse-delivery-heading"
          className="mt-5 text-[34px] font-bold leading-[1.2] tracking-[-0.02em] lg:text-[38px] text-[#142725"
        >
          Our Delivery Approach
        </h2>
        <ol className="mt-11 grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2 xl:grid-cols-4 xl:gap-x-9">
          {suseDeliverySteps.map((step) => (
            <li key={step.number} className="min-w-0">
              <div className="flex items-center gap-6">
                <span className="text-[29px] font-semibold leading-none tracking-[0.01em] text-[#318D60] lg:text-[30px]">
                  {step.number}
                </span>
                <span
                  aria-hidden="true"
                  className="flex min-w-0 flex-1 items-center text-[#318D60]"
                >
                  <span className="h-px flex-1 bg-[#D8E4DD]" />
                  <svg
                    className="ml-1 h-4 w-4 shrink-0"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M2 8h10M8 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="mt-7 text-[18px] font-semibold leading-[1.35] text-[#142725]">
                {step.title}
              </h3>
              <p className="mt-4 text-[14px] leading-[1.65] text-[#637871]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
