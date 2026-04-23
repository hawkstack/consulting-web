import { SolutionData } from "@/app/types/kubernetes-as-a-services";

interface Props {
  data: SolutionData;
}

const SolutionSection = ({ data }: Props) => {
  const { header, items } = data;

  return (
    <section className="bg-[#0c1020] text-white py-12 md:py-16 lg:py-24 xl:py-20 px-4 md:px-14 lg:px-20 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center md:text-start max-w-5xl mb-8 lg:mb-10">
          <p className="text-[#22D3EE] text-xs xl:text-sm tracking-[2px] font-semibold mb-3 lg:mb-4">
            {header.tag}
          </p>

          <h2 className="text-[22px] md:text-[24px] lg:text-[28px] xl:text-[42px] font-bold leading-none md:max-w-[600px] lg:max-w-[700px] xl:max-w-full">
            {header.title}
          </h2>

          <p className="text-[#9BA3AF] text-xs lg:text-sm xl:text-base mt-4 max-w-3xl">
            {header.description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-[#1a2032] p-4 md:p-3 lg:p-5 xl:p-6 hover:border-white/20 transition-all duration-300"
            >
              <h3 className="text-sm xl:text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-xs xl:text-base text-[#CBD5E1] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
