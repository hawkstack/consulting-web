import type { KubevirtUseCasesSectionContent } from "@/app/types/kubevirt-service";

function UseCaseIcon() {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DCE9FF] md:h-9 md:w-9">
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M8.06408 16.1124L8.20756e-05 8.06445L8.06408 0.000444412L16.1121 8.06445L8.06408 16.1124ZM8.06408 14.6564L14.6561 8.06445L8.06408 1.45644L1.47208 8.06445L8.06408 14.6564ZM8.06408 11.4084L4.70408 8.06445L8.06408 4.70444L11.4241 8.06445L8.06408 11.4084Z"
          fill="#020617"
        />
      </svg>
    </span>
  );
}

type UseCasesSectionProps = {
  content: KubevirtUseCasesSectionContent;
};

export default function UseCasesSection({ content }: UseCasesSectionProps) {
  return (
    <section className="bg-[#F8F8F8] font-lexend">
      <div className="mx-auto max-w-[1280px] px-4 py-12 md:px-8 md:py-14 xl:px-6 xl:py-16">
        <div className="mx-auto max-w-[1160px]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#0AB7E8] md:text-[11px]">
            {content.badge}
          </p>

          <h2 className="mt-3 max-w-[720px] text-[24px] font-semibold leading-[1.08] tracking-[-0.05em] text-[#090F22] md:text-[37px] xl:text-[50px]">
            {content.title}
          </h2>

          <div className="mt-6 grid grid-cols-2 gap-3 md:mt-8 md:gap-4 xl:mt-8 xl:grid-cols-3 xl:gap-5">
            {content.items.map((item) => (
              <article
                key={item.title}
                className="min-h-[120px] rounded-[14px] border border-[#E4E7EC] bg-white px-3 py-3 shadow-[0_8px_22px_rgba(15,23,42,0.04)] md:min-h-[120px] md:rounded-[18px] md:px-4 md:py-4 xl:min-h-[82px] xl:px-4 xl:py-4"
              >
                <UseCaseIcon />
                <h3 className="mt-4 max-w-[220px] text-[14px] font-semibold leading-[1.3] tracking-[-0.03em] text-[#111827] md:mt-5 md:max-w-[280px] md:text-[16px] xl:mt-4 xl:max-w-[280px] xl:text-[17px]">
                  {item.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
