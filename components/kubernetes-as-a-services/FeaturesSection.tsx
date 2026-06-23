import { FeaturesData } from "@/app/types/kubernetes-as-a-services";
interface Props {
  data: FeaturesData;
}

const FeaturesSection = ({ data }: Props) => {
  const { header, items } = data;

  return (
    <section className="bg-[#020617] text-white py-12 md:py-16 lg:py-24 xl:py-20 px-4 md:px-14 lg:px-20 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center md:text-start max-w-6xl mb-8 lg:mb-10">
          {header.tag && (
            <p className="text-[#22D3EE] text-xs xl:text-sm tracking-[2px] font-semibold mb-3 lg:mb-4">
              {header.tag}
            </p>
          )}

          <h2 className="text-[22px] md:text-[24px] lg:text-[24px] xl:text-[42px] font-bold leading-none">
            {header.title}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 grid-cols-2 md:grid-cols-4 gap-2 lg:gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-white/10 bg-[#1a2032] p-3 lg:p-4 xl:p-5 hover:border-white/20 transition-all duration-300"
            >
              <p
                className="text-xs xl:text-sm font-semibold mb-1"
                style={{ color: data.idColor || "#22D3EE" }}
              >
                {item.id}
              </p>

              <h3 className=" text-sm xl:text-xl font-semibold mb-1">
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

export default FeaturesSection;
