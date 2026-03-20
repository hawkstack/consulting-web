"use client";
import { DELIVERABLE_ITEMS } from "@/constants/unified/whatYouWillReceive";
import type { DeliverableItem } from "@/app/types/deliverables";
import Image from "next/image";

const WhatYouWillReceive: React.FC = () => {
  return (
    <section className=" bg-white px-4 md:px-[41px] py-10 font-lexend lg:px-[20px] ">
      {/* Header */}
      <div className="text-center mb-8 lg:mb-10">
        <h2 className="text-[20px] font-medium text-black md:text-[30px] md:font-medium lg:text-[40px]">
          What You’ll Receive
        </h2>
        <p className="text-[9px] font-normal text-black/60 mt-1 md:text-[10px] md:font-normal lg:text-[12px]">
         (End of Pilot Deliverables)
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-full md:w-[855px] lg:w-[1200px] lg:h-[450px] mx-auto justify-items-center">
        {DELIVERABLE_ITEMS.map((item: DeliverableItem, idx: number) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-2xl hover:shadow-[0_50px_60px_rgba(0,0,8,0.20)] flex flex-row md:flex-col gap-4 items-start w-[400px] max-w-full md:w-[325px] p-[18px] md:pt-[12px] md:pr-[6px] md:pb-[16px] md:pl-[16px] lg:w-[368px] lg:px-10">
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0b1e3a] to-[#132f5e] flex items-center justify-center shrink-0 overflow-hidden p-1">
              <Image
                src={item.icon}
                alt={item.title}
                width={120}
                height={80}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Text */}
            <div className="overflow-hidden ">
              <h3 className="text-[14px] font-medium text-black mb-1 leading-tight md:text-[15px] md:font-medium lg:text-20px">
                {item.title}
              </h3>
              <p className="text-[9px] font-normal text-black/70 leading-relaxed md:text-[10px] md:font-normal lg:text-14px">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatYouWillReceive;
