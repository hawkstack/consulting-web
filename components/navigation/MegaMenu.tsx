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
      className="absolute left-1/2 top-full -translate-x-1/2 w-[1100px] xl:w-[1200px] 2xl:w-[1300px]"
      onMouseLeave={onClose}
    >
      {/* Hover buffer */}
      <div className="absolute -top-4 left-0 right-0 h-4"></div>

      <div className="rounded-b-[20px] bg-[#2C3A5C] p-10 shadow-2xl">
        <div className="grid grid-cols-[300px_1fr] gap-10">
          {/* LEFT LIST */}
          <ul className="border-r border-white/20 pr-8 space-y-6">
            {items.map((item) => (
              <li
                key={item.id}
                onMouseEnter={() => onHoverItem(item)}
                className={`flex items-center justify-between font-lexend text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-[150%] tracking-[-0.03em]cursor-pointer
                  ${
                    activeItem.id === item.id
                      ? "text-[#5272FF]"
                      : "text-[#FFFFFF]"
                  }`}
              >
                {item.label}
                <span>›</span>
              </li>
            ))}
          </ul>

          {/* RIGHT CONTENT */}
          <div>
            <h3 className="font-lexend text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-[150%] tracking-[-0.03em] text-[#FFFFFF] mb-6">
              {activeItem.title}
            </h3>

            <Image
              src={activeItem.image}
              alt={activeItem.title}
              width={420}
              height={240}
              className="rounded-xl mb-6"
            />

            <p className="font-lexend text-[12px] md:text-[14px] lg:text-[16px] font-normal leading-[150%] tracking-[-0.03em] text-[#D1D5DC] max-w-[520px]">
              {activeItem.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
