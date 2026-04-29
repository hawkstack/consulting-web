import { RedHatOverviewData } from "@/app/types/product-reseller/red-hat";

interface Props {
  data: RedHatOverviewData;
}

const RedHatOverviewSection = ({ data }: Props) => {
  const { badge, title, highlightTitle, description } = data;

  return (
    <section className="w-full bg-[#f5f5f5] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="relative inline-block text-sm font-bold text-[#EE0000] tracking-wide mb-3">
            {badge}
            <span className="absolute left-0 -bottom-2 w-10 h-[2px] bg-[#EE0000]"></span>
          </p>

          <h2 className="text-xl md:text-2xl lg:text-[24px] xl:text-[48px] font-bold leading-none text-gray-900 md:w-[200px] lg:w-[200px] xl:w-[460px] text-center md:text-left">
            {title}
          </h2>

          <h2 className="text-xl md:text-2xl lg:text-[24px] xl:text-[48px] font-bold text-[#EE0000] mt-1 text-center md:text-left">
            {highlightTitle}
          </h2>
        </div>

        {/* VERTICAL DIVIDER */}
        <div className="hidden lg:block w-px h-34 bg-[#CFD3D5] mx-auto"></div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-[#272D30] text-base md:text-lg leading-relaxed max-w-md">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default RedHatOverviewSection;
