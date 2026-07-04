import type { ProductAwsEnterpriseCapabilitiesContent } from "../types/product-aws";

type EnterpriseCapabilitiesSectionProps = {
  content: ProductAwsEnterpriseCapabilitiesContent;
};

const EnterpriseCapabilitiesSection = ({
  content,
}: EnterpriseCapabilitiesSectionProps) => {
  return (
    <section className="bg-white px-5 py-12 md:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="text-center">
          <h2 className="text-[26px] font-bold leading-tight tracking-[-0.02em] text-[#111827] xl:text-[32px]">
            {content.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[670px] text-[14px] leading-[1.6] text-[#4B5563] xl:text-[16px]">
            {content.description}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3">
          {content.capabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <article
                key={capability.title}
                className={`py-8 md:min-h-[220px] md:px-12 md:py-4 ${
                  index > 0
                    ? "border-t border-[#D6DCE5] md:border-l md:border-t-0"
                    : ""
                }`}
              >
                <Icon className="h-7 w-7 text-[#0051D5]" />
                <h3 className="mt-6 text-[16px] font-bold leading-tight text-[#111827] xl:text-[18px]">
                  {capability.title}
                </h3>
                <p className="mt-4 text-[13px] leading-[1.65] text-[#4B5563] xl:text-[14px]">
                  {capability.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseCapabilitiesSection;
