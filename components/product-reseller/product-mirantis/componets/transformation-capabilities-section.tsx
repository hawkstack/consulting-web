import { MirantisTransformationCapabilityIcon } from "@/components/product-reseller/product-mirantis/icons";
import type { ProductMirantisTransformationCapability } from "@/components/product-reseller/product-mirantis/types/product-mirantis";

type ProductMirantisTransformationCapabilitiesSectionProps = {
  capabilities: ProductMirantisTransformationCapability[];
};

export default function ProductMirantisTransformationCapabilitiesSection({
  capabilities,
}: ProductMirantisTransformationCapabilitiesSectionProps) {
  return (
    <section className="rounded-b-[30px] bg-[#E5F5FF] px-5 py-10 font-lexend text-[#0B1020] md:px-8 md:py-9 lg:px-12 lg:py-11 xl:px-24 xl:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 text-center md:grid-cols-3 md:gap-8 md:text-left xl:gap-16">
        {capabilities.map((capability) => (
          <article key={capability.title}>
            <div className="flex items-center justify-center gap-1.5 md:justify-start xl:gap-2">
              <span className="text-[#0976A8]">
                <MirantisTransformationCapabilityIcon
                  icon={capability.icon}
                  className="size-3.5 md:size-4 xl:size-5"
                />
              </span>
              <h3 className="text-[12px] font-extrabold leading-tight md:text-[14px] lg:text-[15px] xl:text-[20px]">
                {capability.title}
              </h3>
            </div>
            <p className="mx-auto mt-3 max-w-[250px] text-[9px] font-medium leading-[1.45] md:mx-0 md:max-w-[220px] md:text-[10px] lg:max-w-[260px] lg:text-[11px] xl:max-w-[350px] xl:text-[15px]">
              {capability.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
