import { RedHatProductsSectionData } from "@/app/types/product-reseller/product-redhat/product-redhat";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data: RedHatProductsSectionData;
}

const RedHatProductsSection = ({ data }: Props) => {
  return (
    <section
      id="redhat-products"
      className="relative text-white py-16 px-6 lg:px-14 xl:px-16 overflow-hidden"
    >
      <Image
        src="/images/product-reseller/redhat-bg.webp"
        alt="background"
        fill
        className="object-cover object-center md:object-left pointer-events-none"
        priority
      />

      <div className="relative z-10">
        <div className="max-w-6xl border-b xl:border-y border-gray-800 mx-auto">
          {/* FIXED GRID */}
          <div className="grid gap-12 xl:grid-cols-5">
            {/* LEFT CONTENT */}
            <div className="xl:col-span-1 xl:max-w-[400px] text-center xl:text-left">
              <h2 className="text-[24px] md:text-[36px] xl:text-[48px] font-semibold leading-none xl:max-w-[100px]">
                {data.heading}
              </h2>

              <h3 className=" text-[24px] md:text-[36px] xl:text-[42px] font-semibold text-[#EE0000] mt-2 leading-none">
                {data.highlightText}
              </h3>

              <div className="w-12 h-[2px] bg-[#EE0000] mt-5 hidden xl:block"></div>

              <p className="text-gray-400 text-base leading-tight mt-2 xl:max-w-[190px]">
                {data.description}
              </p>
            </div>

            {/* RIGHT GRID */}
            <div className="xl:col-span-4 relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:border-x md:border-r border-gray-800">
              {/* TOP RED LINE (md + lg only) */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-[#EE0000] block xl:hidden"></div>

              {/* MIDDLE RED LINE (between rows) */}
              {data.products.map((item, i) => (
                <div
                  key={i}
                  className={`
                  p-4 border-[#EE0000] md:border-[#FFFFFF29] relative
                  ${i % 2 !== 1 ? "md:border-r" : ""} 
                  ${i !== 3 ? "xl:border-r" : ""}
                  ${i < 2 ? "md:border-b xl:border-b-0" : ""}
                  border-b md:border-b-0
                  `}
                >
                  {/* MIDDLE RED LINE (only 2nd row cards) */}
                  <div
                    className={`
                    absolute left-0 top-0 w-full h-[1px] bg-[#EE0000]
                    hidden md:block xl:hidden
                    ${i < 2 ? "hidden" : ""}
                    `}
                  />
                  {/* TOP DOT */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full border border-[#EE0000] flex items-center justify-center bg-black">
                    <div className="w-2 h-2 bg-[#EE0000] rounded-full"></div>
                  </div>

                  {/* ICON */}
                  <div className="mb-4">
                    <Image
                      src={item.icon}
                      alt=""
                      width={60}
                      height={60}
                      className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[55px] lg:h-[55px] xl:w-[60px] xl:h-[60px]"
                    />
                  </div>

                  {/* TITLE */}
                  <h4 className="text-lg leading-tight font-semibold mb-2 xl:min-h-[50px]">
                    {item.title}
                  </h4>

                  {/* RED LINE */}
                  <div className="w-8 h-[2px] bg-[#EE0000] mb-3"></div>

                  {/* DESC */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 lg:w-[280px] xl:w-full xl:min-h-[110px]">
                    {item.description}
                  </p>

                  {/* BUTTON */}
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="inline-block border border-[#EE0000] text-sm px-5 py-1 transition hover:bg-[#EE0000]"
                    >
                      Explore product -&gt;
                    </Link>
                  ) : (
                    <button className="border border-[#EE0000] text-sm px-5 py-1 transition hover:bg-[#EE0000]">
                      Explore product -&gt;
                    </button>
                  )}

                  {/* AVAILABLE ON */}
                  <div className="w-[156px] h-[1px] bg-[#FFFFFF29] my-3 xl:my-2"></div>

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
          <Link
            href="/product-reseller/redhat-products"
            className="border border-[#EE0000] px-6 py-3 text-sm transition hover:bg-[#EE0000]"
          >
            See all products -&gt;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RedHatProductsSection;
