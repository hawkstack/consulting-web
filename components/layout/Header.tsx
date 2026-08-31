"use client";
import { JSX, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { MegaMenu } from "@/components/navigation/MegaMenu";
import { products, services, company } from "@/components/navigation/menuData";
import { MegaItem } from "@/components/navigation/types";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";

type MenuKey = "products" | "services" | "company";

const menuMap: Record<MenuKey, MegaItem[] | null> = {
  products,
  services,
  company,
};

type OpenMenuState = MenuKey | null;

export function Header(): JSX.Element {
  const tHeader = useTranslations("Header");
  const [openMenu, setOpenMenu] = useState<OpenMenuState>(null);
  const [activeItem, setActiveItem] = useState<MegaItem | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const items = openMenu ? menuMap[openMenu] : null;
  const trainingUrl =
    process.env.NEXT_PUBLIC_TRAINING_URL ?? "https://training.hawkstack.com/";
  const closeMegaMenu = () => {
    setOpenMenu(null);
    setActiveItem(null);
  };

  return (
    <header className="sticky top-0 z-[60] w-full bg-gradient-to-r from-[#0A1B3F] via-[#0B2458] to-[#0A1B3F] font-lexend">
      <nav className="relative w-full max-w-[1440px] mx-auto h-[72px] lg:h-[90px] px-4 md:px-8 lg:px-10  xl:px-24 flex items-center">
        {/* LOGO */}
        <Link href="/" className="cursor-default">
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
        "
          >
            <Image
              src="/images/hawkstack-logo.webp"
              alt="HawkStack Logo"
              width={170}
              height={40}
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="ml-auto hidden lg:flex items-center gap-14">
          <li>
            <Link href="/" className="text-white">
              {tHeader("home")}
            </Link>
          </li>

          {(["products", "services", "company"] as MenuKey[]).map((key) => {
            const label = tHeader(key);

            return (
              <li
                key={key}
                onMouseEnter={() => {
                  setOpenMenu(key);
                  setActiveItem(menuMap[key]?.[0] || null);
                }}
                className="cursor-pointer text-white hover:text-[#7C8CFF] capitalize"
              >
                {label}
              </li>
            );
          })}
        </ul>

        {/* DESKTOP CTA */}
        <div className="ml-8 hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href={trainingUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center w-[124px] h-[38.4px] rounded-[14px] border border-white text-white"
          >
            {tHeader("training")}
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="ml-auto lg:hidden text-white text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={tHeader("toggleMenu")}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>

        {/* ✅ MEGA MENU — SAME AS PEHLE (CENTERED) */}
        {items && activeItem && openMenu && (
          <div
            className="absolute left-1/2 top-full z-[70] hidden -translate-x-1/2 lg:block"
            onMouseEnter={() => setOpenMenu(openMenu)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <MegaMenu
              items={items}
              activeItem={activeItem}
              onHoverItem={setActiveItem}
              onClose={closeMegaMenu}
              menuKey={openMenu}
            />
          </div>
        )}
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden w-full bg-[#0B2458] px-6 pb-6">
          <ul className="flex flex-col gap-6 pt-6">
            {(["home", "products", "services", "company"] as const).map(
              (item) => {
                const isHome = item === "home";

                return (
                  <li key={item}>
                    {isHome ? (
                      <Link
                        href="/"
                        onClick={() => setMobileOpen(false)}
                        className="text-white text-[16px]"
                      >
                        {tHeader(item)}
                      </Link>
                    ) : (
                      <span className="text-white text-[16px] cursor-default">
                        {tHeader(item)}
                      </span>
                    )}
                  </li>
                );
              },
            )}
          </ul>

          <div className="mt-6 w-[124px] max-w-full">
            <LanguageSwitcher />
          </div>

          <a
            href={trainingUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-6 inline-flex h-[44px] w-[124px] max-w-full items-center justify-center rounded-[14px] border border-white text-[14px] text-white"
          >
            {tHeader("training")}
          </a>
        </div>
      )}
    </header>
  );
}
