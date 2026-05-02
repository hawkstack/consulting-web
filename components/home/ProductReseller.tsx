import Link from 'next/link';
import { ProductsSectionData } from "@/types/home/home";
import { StraightArrow } from "@/components/icons/Home/Home";

type Props = {
  data: ProductsSectionData;
}

export default function ProductGrid({data}: Props) {
    const { products } = data;
    const whiteBgLogos = ["Azure", "AWS", "GCP"];

  return (
    <section id="our-solutions" className="bg-[#FFFFFF] py-15 px-6 md:px-15 lg:px-6 xl:px-25 font-lexend z-10 relative md:scroll-mt-2 lg:scroll-mt-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-[#011235] text-[24px] md:text-[32px] xl:text-[40px] font-semibold mb-4">
          {data.title}
        </h2>
        <p className="hidden md:block text-[#767676] md:text-[16px] xl:text-[20px] mx-auto">
          {data.subtitle}
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-8 md:gap-x-5 md:gap-y-10 max-w-7xl mx-auto">
        {products.map((product) => {
            const isWhiteBg = whiteBgLogos.includes(product.title);
            return (
          <div 
            key={product.id}
            className="relative group bg-[#FFFFFF]/5 border border-white/10 p-4 md:p-5 xl:p-8 rounded-2xl shadow-[2px_4px_4px_0px_#0271B52E]"
          >
            {/* Top Row: Logo and Number */}
            <div className="flex justify-between items-start mb-5">
              <div className={`w-[80px] h-[80px] rounded-lg flex items-center justify-center p-2
              ${isWhiteBg ? "bg-[#E5E5E5]" : "bg-[linear-gradient(135deg,_rgba(19,49,173,0.125)_0%,_rgba(19,49,173,0.063)_100%)] border border-[#1331AD]/25"}
                `}>
                <img src={product.logo} alt={product.title} className="w-full h-full object-contain" />
              </div>
                <span className="flex items-center justify-center text-[#1344AD] text-[14px] font-bold bg-[#1331AD]/20 rounded-full border border-[#1331AD]/40 w-[30px] h-[30px] md:w-[48px] md:h-[48px]">
                    {product.count}
                </span>            
            </div>

            {/* Content */}
            <h4 className="text-[#1344AD] text-[11px] md:text-[12px] font-semibold tracking-widest mb-1">
              {product.category}
            </h4>
            <h3 className="text-[#000000] text-[25px] md:text-[36px] font-bold mb-1">{product.title}</h3>
            <p className="hidden md:block text-[#616161] text-[12px] leading-relaxed mb-5 ">
              {product.description}
            </p>

            {/* CTA */}
            {/* TODO : Implement CTA link */}
            {/* <Link 
              href={product.link}
              className="inline-flex items-center text-[#1344AD] text-[14px] font-semibold"
            >
              Learn More 
              <span className="ml-2">
                <StraightArrow className = "text-[#1344AD]"/>
              </span>
            </Link> */}
          </div>
        );
        })}
      </div>
    </section>
  );
}
