import { RedHatProductsSectionData } from "@/app/types/product-reseller/red-hat";
import Image from "next/image";

interface Props {
  data: RedHatProductsSectionData;
}

const RedHatProductsSection = ({ data }: Props) => {
  return (
    <section className="relative text-white py-16 px-6 lg:px-16 overflow-hidden">
      <Image
        src="/images/product-seller/redhat-bg.webp"
        alt="background"
        fill
        className="object-cover object-left pointer-events-none"
        priority
      />
      <div className="relative z-10">
        <div className="max-w-6xl border-y border-gray-800 mx-auto">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-1">
              <h2 className="text-[48px] font-semibold leading-none max-w-[100px]">
                {data.heading}
              </h2>

              <h3 className="text-[42px] font-semibold text-[#EE0000] mt-2 leading-none">
                {data.highlightText}
              </h3>

              <div className="w-12 h-[2px] bg-[#EE0000] mt-5"></div>

              <p className="text-gray-400 text-base leading-tight mt-2 max-w-[190px]">
                {data.description}
              </p>
            </div>

            {/* RIGHT GRID */}
            <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-x border-gray-800">
              {data.products.map((item, i) => (
                <div
                  key={i}
                  className={`
                p-4 border-[#FFFFFF29] relative
                ${i !== 3 ? "lg:border-r" : ""}
                ${i < 2 ? "md:border-b lg:border-b-0" : ""}
                border-b md:border-b-0
              `}
                >
                  {/* TOP DOT */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full border border-[#EE0000] flex items-center justify-center bg-black">
                    <div className="w-2 h-2 bg-[#EE0000] rounded-full"></div>
                  </div>

                  {/* ICON */}
                  <div className="mb-4">
                    <Image src={item.icon} alt="" width={60} height={60} />
                  </div>

                  {/* TITLE */}
                  <h4 className="text-lg leading-tight font-semibold mb-2 min-h-[50px]">
                    {item.title}
                  </h4>

                  {/* RED LINE */}
                  <div className="w-8 h-[2px] bg-[#EE0000] mb-3"></div>

                  {/* DESC */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 min-h-[110px]">
                    {item.description}
                  </p>

                  {/* BUTTON */}
                  <button className="border border-[#EE0000] text-sm px-5 py-1 transition">
                    Explore product →
                  </button>

                  {/* AVAILABLE ON */}
                  <div className="w-[156px] h-[1px] bg-[#FFFFFF29] my-2"></div>

                  {/* TEXT */}
                  <p className="text-[11px] text-gray-400">Available on</p>
                  <div className="flex flex-wrap items-center gap-2">
                    {item.availableOn.map((cloud) => (
                      <Image
                        key={cloud.name}
                        src={cloud.logo}
                        alt={cloud.name}
                        width={80}
                        height={24}
                        quality={100}
                        className="h-[27px] w-auto object-contain"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BUTTON */}
        <div className="flex justify-center mt-10">
          <button className="border border-[#EE0000] px-6 py-3 text-sm transition">
            See all products →
          </button>
        </div>
      </div>
    </section>
  );
};

export default RedHatProductsSection;
