"use client";
import { JSX, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { MegaMenu } from "@/components/navigation/MegaMenu";
import {
  solutions,
  services,
  company,
  training,
} from "@/components/navigation/menuData";
import { MegaItem } from "@/components/navigation/types";

type MenuKey = "solutions" | "services" | "company" | "training" | any;

const menuMap: Record<MenuKey, MegaItem[] | null> = {
  solutions,
  services,
  company,
  training,
};

export function Header(): JSX.Element {
  const [openMenu, setOpenMenu] = useState<MenuKey>();
  const [activeItem, setActiveItem] = useState<MegaItem | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const items = openMenu ? menuMap[openMenu] : null;

  const handleTrainingClick = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    key: MenuKey
  ) => {
    if (key === "training") {
      e.stopPropagation();
      window.open(
        process.env.NEXT_PUBLIC_TRAINING_URL as string,
        "_blank"
      );
    }
  }

  return (
    <header className="sticky top-0 z-51 w-full bg-gradient-to-r from-[#0A1B3F] via-[#0B2458] to-[#0A1B3F]">
      <nav className="relative w-full max-w-[1440px] mx-auto h-[72px] lg:h-[105px] px-4 md:px-8 lg:px-10  xl:px-24 flex items-center">
        {/* LOGO */}
        <div
          className="
          w-[85.96px] h-[28.28px]
          md:w-[120px] md:h-[36px]
          lg:w-[152px] lg:h-[42px]
          xl:w-[170px] xl:h-[45px]
          rounded-[5.66px]
          md:rounded-[7px]
          lg:rounded-[7.92px]
          xl:rounded-[9px]
          border border-white bg-white
          flex items-center justify-center
        ">
          <Image
            src="/images/hawkstack-logo.webp"
            alt="HawkStack Logo"
            width={170}
            height={40}
            priority
            className="object-contain"
          />
        </div>

        {/* DESKTOP MENU */}
        <ul className="ml-auto hidden lg:flex items-center gap-14">
          <li>
            <Link href="/" className="text-white">
              Home
            </Link>
          </li>

          {(["solutions", "services", "company", "training"] as MenuKey[]).map(
            (key) => {
              const isTraining = key === "training";

              return (
                <li
                  key={key}
                  onMouseEnter={() => {
                    setOpenMenu(key);
                    setActiveItem(menuMap[key]?.[0] || null);
                  }}
                  onClick={(e) => handleTrainingClick(e, key)} 
                  className={
                    isTraining
                      ? "inline-flex items-center justify-center w-[124px] h-[38.4px] rounded-[14px] px-5 py-2 bg-[#5272FF] text-white capitalize cursor-pointer"
                      : "cursor-pointer text-white hover:text-[#7C8CFF] capitalize"
                  }>
                  {key}
                </li>
              );
            },
          )}
        </ul>

        {/* DESKTOP CTA */}
        <div className="ml-4 hidden lg:block">
          <Link
            href="/get-started"
            className="inline-flex items-center justify-center w-[124px] h-[38.4px] rounded-[14px] border border-white text-white">
            Get Started
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="ml-auto lg:hidden text-white text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu">
          {mobileOpen ? "✕" : "☰"}
        </button>

        {/* ✅ MEGA MENU — SAME AS PEHLE (CENTERED) */}
        {items && activeItem && openMenu && (
          <div
            className="absolute left-1/2 top-full -translate-x-1/2 hidden lg:block"
            onMouseEnter={() => setOpenMenu(openMenu)}
            onMouseLeave={() => setOpenMenu(null)}>
            <MegaMenu
              items={items}
              activeItem={activeItem}
              onHoverItem={setActiveItem}
              onClose={() => setOpenMenu(null)}
            />
          </div>
        )}
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden w-full bg-[#0B2458] px-6 pb-6">
          <ul className="flex flex-col gap-6 pt-6">
            {["Home", "Solutions", "Services", "Company", "Training"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={() => setMobileOpen(false)}
                    className="text-white text-[16px]">
                    {item}
                  </Link>
                </li>
              ),
            )}
          </ul>

          <Link
            href="/get-started"
            onClick={() => setMobileOpen(false)}
            className="mt-6 inline-flex items-center justify-center w-full h-[44px] rounded-[14px] border border-white text-white text-[14px]">
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
