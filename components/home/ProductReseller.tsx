import React from 'react';
import Link from 'next/link';
import { ProductsSectionData } from "@/types/home/home";

type Props = {
  data: ProductsSectionData;
}

export default function ProductGrid({data}: Props) {
    const { products } = data;
    const whiteBgLogos = ["Azure", "AWS", "GCP"];

  return (
    <section className="bg-[#020B1C] py-15 px-6 md:px-15 lg:px-6 xl:px-25 font-lexend">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-white text-[24px] md:text-[32px] xl:text-[40px] font-semibold mb-4">
          {data.title}
        </h2>
        <p className="hidden md:block text-[#C3C3C3] md:text-[16px] xl:text-[20px] mx-auto">
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
            className="relative group bg-[#0A1628] border border-white/10 p-4 md:p-6 xl:p-8 rounded-2xl"
          >
            {/* Top Row: Logo and Number */}
            <div className="flex justify-between items-start mb-5">
              <div className={`w-[80px] h-[80px] rounded-lg flex items-center justify-center p-2
              ${isWhiteBg ? "bg-[#E5E5E5]" : "bg-[linear-gradient(135deg,rgba(19,49,173,0.125)_0%,rgba(19,49,173,0.063)_100%)] border border-[#1331AD]/40"}
                `}>
                <img src={product.logo} alt={product.title} className="w-full h-full object-contain" />
              </div>
                <span className="flex items-center justify-center text-[#1344AD] text-[14px] font-bold bg-[#1331AD]/20 rounded-full border border-[#1331AD]/40 w-[30px] h-[30px] md:w-[48px] md:h-[48px]">
                    {product.count}
                </span>            
            </div>

            {/* Content */}
            <h4 className="text-[#1647C3] text-[11px] md:text-[12px] font-semibold tracking-widest mb-1">
              {product.category}
            </h4>
            <h3 className="text-white text-[25px] md:text-[36px] font-bold mb-4">{product.title}</h3>
            <p className="hidden md:block text-[#99A1AF] text-[14px] leading-relaxed mb-5 max-w-[85%]">
              {product.description}
            </p>

            {/* CTA */}
            <Link 
              href={product.link}
              className="inline-flex items-center text-[#1647C3] text-[14px] font-semibold"
            >
              Learn More 
              <span className="ml-2">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.33464 0.667969L8.66797 4.0013M8.66797 4.0013L5.33464 7.33464M8.66797 4.0013H0.667969" stroke="#1647C3" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </div>
        );
        })}
      </div>
    </section>
  );
}
