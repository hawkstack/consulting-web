"use client";

import Image from "next/image";
import { MegaItem } from "./types";
import { JSX } from "react";

type Props = {
  items: MegaItem[];
  activeItem: MegaItem;
  onHoverItem: (item: MegaItem) => void;
  onClose: () => void;
};

export function MegaMenu({
  items,
  activeItem,
  onHoverItem,
  onClose,
}: Props): JSX.Element {
  return (
    <div
      className="absolute left-1/2 top-full -translate-x-1/2 w-[1100px] lg:w-[1000px] xl:w-[1221px] xl:h-[464px]"
      onMouseLeave={onClose}
    >
     
      <div className="rounded-[20px] bg-[#2B3859]/90 backdrop-blur-md p-12 shadow-2xl overflow-hidden">
        <div className="flex gap-16 relative">
          {/* LEFT LIST */}
          <ul className=" pr-8 pl-14 py-4 space-y-6">
            {items.map((item) => {
              const isActive = activeItem.id === item.id;
              return (
                <li
                  key={item.id}
                  onMouseEnter={() => onHoverItem(item)}
                  className={`flex items-center justify-between font-lexend text-[18px] font-normal leading-tight tracking-[-0.03em] cursor-pointer transition-colors duration-200
                    ${isActive ? "text-[#5272FF]" : "text-white/90 hover:text-white"}`}
                >
                  <span>{item.label}</span>
                  <span className="text-[16px] pl-8 font-semibold">
                    {isActive ? "→" : "›"}
                  </span>
                </li>
              );
            })}
          </ul>

          {/* VERTICAL DIVIDER */}
          <div className="w-[1px] bg-white/100 self-stretch my-[-20px]" />

          {/* RIGHT CONTENT */}
          <div className="flex-1 pl-30 pt-4 ">
            <h3 className="font-lexend text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-[150%] tracking-[-0.03em] text-[#FFFFFF] mb-6">
              {activeItem.title}
            </h3>

            <div className="w-[312px] h-[195px] rounded-2xl overflow-hidden mb-6 relative">
              <Image
              src={activeItem.image}
              alt={activeItem.title}
              fill
              className="object-cover"
              sizes="312px"
              />
            </div>

            <p className="font-lexend text-[12px] md:text-[14px] justify-between lg:text-[16px] font-light leading-[1.6] tracking-[-0.01em] text-[#D1D5DC] max-w-[555px]">
              {activeItem.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
