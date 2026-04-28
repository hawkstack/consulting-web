"use client";

import Image from "next/image";
import Link from "next/link";
import { JSX, useState } from "react";

import { offeringsMenuContent } from "./menuData";
import { MegaItem } from "./types";

type Props = {
  items: MegaItem[];
  activeItem: MegaItem;
  onHoverItem: (item: MegaItem) => void;
  onClose: () => void;
  menuKey?: "products" | "services" | "company" | "training";
};

export function MegaMenu({
  items,
  activeItem,
  onHoverItem,
  onClose,
  menuKey,
}: Props): JSX.Element {
  const [offeringsView, setOfferingsView] = useState<
    "product" | "productResellers"
  >("product");

  if (menuKey === "products") {
    return (
      <div
        className="absolute left-1/2 top-full -translate-x-1/2 w-[1100px] lg:w-[1000px] xl:h-[464px] xl:w-[1221px]"
        onMouseLeave={onClose}
      >
        <div className="relative overflow-hidden rounded-b-[20px] bg-[#2B3859]/90 p-10 shadow-2xl backdrop-blur-md">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_center,rgba(29,120,255,0.12),transparent_34%)]" />

          <div className="relative flex gap-8">
            <ul className="space-y-6 pr-8 pl-14 py-4">
              <li>
                <button
                  type="button"
                  onMouseEnter={() => setOfferingsView("product")}
                  className={`flex items-center justify-between font-lexend text-[18px] font-normal leading-tight tracking-[-0.03em] transition-colors duration-200 ${
                    offeringsView === "product"
                      ? "text-[#5272FF]"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  <span className="min-w-[150px] text-left">
                    {offeringsMenuContent.tabs.product}
                  </span>
                  <span className="pl-6 text-[17px] font-medium leading-none">
                    {offeringsView === "product" ? "→" : "›"}
                  </span>
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onMouseEnter={() => setOfferingsView("productResellers")}
                  className={`flex items-center justify-between font-lexend text-[18px] font-normal leading-tight tracking-[-0.03em] transition-colors duration-200 ${
                    offeringsView === "productResellers"
                      ? "text-[#5272FF]"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  <span className="min-w-[150px] text-left">
                    {offeringsMenuContent.tabs.productResellers}
                  </span>
                  <span className="pl-6 text-[17px] font-medium leading-none">
                    {offeringsView === "productResellers" ? "→" : "›"}
                  </span>
                </button>
              </li>
            </ul>

            <div className="my-[-2px] w-[1px] self-stretch bg-white/100" />

            <div className="flex-1 pt-0">
              {offeringsView === "product" ? (
                <div className="max-w-[585px]">
                  <h3 className="mb-6 font-lexend text-[16px] font-medium leading-[150%] tracking-[-0.03em] text-[#FFFFFF] md:text-[18px] lg:text-[20px]">
                    {offeringsMenuContent.featured.title}
                  </h3>

                  <p className="max-w-[555px] font-lexend text-[12px] font-light leading-[1.6] tracking-[-0.01em] text-[#D1D5DC] md:text-[14px] lg:text-[16px]">
                    {offeringsMenuContent.featured.description}
                  </p>

                  <div className="relative mt-6 mb-6 h-[86px] w-[312px] overflow-hidden rounded-2xl">
                    <div className="relative h-full w-full">
                      <Image
                        src={offeringsMenuContent.featured.image}
                        alt={offeringsMenuContent.featured.title}
                        fill
                        className="object-contain"
                        sizes="412px"
                      />
                    </div>
                  </div>

                  <Link
                    href={offeringsMenuContent.featured.href ?? "/get-started"}
                    className="inline-flex text-[12px] font-medium text-[#56A8FF] transition hover:text-white"
                  >
                    {"Know More ->"}
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-3">
                  {offeringsMenuContent.resellers.map((item, index) => (
                    <div
                      key={item.id}
                      className={`border-white/10 px-4 py-2 ${
                        index < offeringsMenuContent.resellers.length - 3
                          ? "border-b"
                          : ""
                      } ${index % 3 !== 2 ? "border-r" : ""} ${
                        index % 3 === 0 ? "pl-0" : ""
                      } ${index % 3 === 2 ? "pr-0" : ""}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-[20px] font-medium leading-none text-white">
                            {item.title}
                          </h3>
                          <p className="mt-2 max-w-[180px] text-[11px] leading-[1.6] text-[#D9E2F3]">
                            {item.description}
                          </p>
                          <Link
                            href={item.href ?? "/get-started"}
                            className="mt-2 inline-flex text-[11px] font-medium text-[#56A8FF] transition hover:text-white"
                          >
                            {"Know More ->"}
                          </Link>
                        </div>

                        {item.image ? (
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
                            <Image
                              src={item.image}
                              alt={item.title}
                              width={30}
                              height={30}
                              className="h-7 w-7 object-contain"
                            />
                          </div>
                        ) : (
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[14px] font-semibold text-[#0C4D9E]">
                            {item.badge}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="absolute left-1/2 top-full -translate-x-1/2 w-[1100px] lg:w-[1000px] xl:h-[464px] xl:w-[1221px]"
      onMouseLeave={onClose}
    >
      <div className="overflow-hidden rounded-[20px] bg-[#2B3859]/90 p-12 shadow-2xl backdrop-blur-md">
        <div className="relative flex gap-16">
          <ul className="space-y-6 pr-8 pl-14 py-4">
            {items.map((item) => {
              const isActive = activeItem.id === item.id;

              return (
                <li
                  key={item.id}
                  onMouseEnter={() => onHoverItem(item)}
                  onClick={() => {
                    if (item.href) {
                      window.location.href = item.href;
                    }
                  }}
                  className={`flex gap-10 items-center justify-between font-lexend text-[18px] font-normal leading-tight tracking-[-0.03em] cursor-pointer transition-colors duration-200 ${
                    isActive ? "text-[#5272FF]" : "text-white/90 hover:text-white"
                  }`}
                >
                  <span className="min-w-[150px] text-left">{item.label}</span>
                  <span className="inline-flex w-8 shrink-0 justify-center text-[17px] font-medium leading-none">
                    {isActive ? "→" : "›"}
                  </span>
                </li>
              );
            })}
          </ul>

          <div className="my-[-20px] w-[1px] self-stretch bg-white/100" />

          <div className="flex-1 ">
            <h3 className="mb-6 font-lexend text-[16px] font-medium leading-[150%] tracking-[-0.03em] text-[#FFFFFF] md:text-[18px] lg:text-[20px]">
              {activeItem.title}
            </h3>

            <div className="relative mb-6 h-[195px] w-[312px] overflow-hidden rounded-2xl">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-cover"
                sizes="312px"
              />
            </div>

            <p className="max-w-[555px] font-lexend text-[12px] font-light leading-[1.6] tracking-[-0.01em] text-[#D1D5DC] md:text-[14px] lg:text-[16px]">
              {activeItem.description}
            </p>

            {menuKey === "services" && activeItem.href ? (
              <Link
                href={activeItem.href}
                className="mt-2 inline-flex text-[12px] font-medium text-[#56A8FF] transition hover:text-white"
              >
                {"Know More ->"}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
