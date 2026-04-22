import { BenefitsData } from "@/app/types/kubernetes-as-a-services";

interface Props {
  data: BenefitsData;
}

const BenefitsSection: React.FC<Props> = ({ data }) => {
  return (
    <section className="bg-[#0b1225] text-white py-16 px-6 md:px-12 lg:px-24 xl:px-24">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row gap-10 lg:gap-20 items-start">
        {/* LEFT */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-[#22D3EE] text-xs xl:text-sm tracking-[2px] font-semibold mb-4">
            {data.subtitle}
          </p>

          <h2 className="text-[20px] md:text-[24px] lg:text-[28px] xl:text-[44px] font-bold  xl:leading-none md:max-w-[230px] lg:max-w-[250px] xl:max-w-[480px] mx-auto md:mx-0">
            {data.title}
          </h2>
        </div>

        <div className="flex-1 w-full flex flex-col md:gap-2 lg:gap-4 items-start">
          {data.items.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-[520px] bg-[#1a2032] border border-white/10 rounded-2xl pl-5 pr-8 md:py-2 lg:py-4 text-xs xl:text-base text-gray-300 leading-relaxed backdrop-blur-md hover:border-white/20 transition-all"
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
