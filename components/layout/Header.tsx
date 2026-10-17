"use client";
import { JSX, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { MegaMenu } from "@/components/navigation/MegaMenu";
import {
  products,
  services,
  company,
  offeringsMenuContent,
} from "@/components/navigation/menuData";
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
  const isHome = usePathname() === "/";
  const tHeader = useTranslations("Header");
  const [openMenu, setOpenMenu] = useState<OpenMenuState>(null);
  const [activeItem, setActiveItem] = useState<MegaItem | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSections, setMobileSections] = useState<Set<MenuKey>>(new Set());
  const [mobileOfferingsView, setMobileOfferingsView] = useState<
    "product" | "productResellers"
  >("product");
  const tMega = useTranslations("Header.megaMenu");
  const tHomeSolutions = useTranslations(
    "Home.content.cloudServicesSectionData.services",
  );

  const items = openMenu ? menuMap[openMenu] : null;
  const trainingUrl =
    process.env.NEXT_PUBLIC_TRAINING_URL ?? "https://training.hawkstack.com/";
  const closeMegaMenu = () => {
    setOpenMenu(null);
    setActiveItem(null);
  };
  const toggleMobileSection = (key: MenuKey) => {
    setMobileSections((current) => {
      const next = new Set(current);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <header
      className={`sticky top-0 z-[60] w-full font-lexend ${isHome ? "bg-[#020d22]" : "bg-gradient-to-r from-[#0A1B3F] via-[#0B2458] to-[#0A1B3F]"}`}
    >
      <nav
        className={`relative w-full max-w-[1440px] mx-auto h-[70px] lg:h-[70px] px-4 md:px-8 lg:px-10 flex items-center ${isHome ? "xl:px-[72px]" : "xl:px-24"}`}
      >
        {/* LOGO */}
        <Link href="/" className="cursor-default">
          <div
            className={`w-[85.96px] h-[28.28px] md:w-[120px] md:h-[36px] lg:w-[152px] lg:h-[42px] rounded-[5.66px] md:rounded-[7px] lg:rounded-[7.92px] xl:rounded-[9px] border border-white bg-white flex items-center justify-center ${isHome ? "xl:w-[144px] xl:h-[40px]" : "xl:w-[170px] xl:h-[45px]"}`}
          >
            <Image
              src="/images/hawkstack-registered-logo.svg"
              alt="HawkStack Logo"
              width={150}
              height={44}
              priority
              className="h-full w-full object-contain"
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
          className="ml-auto flex size-11 items-center justify-center rounded-md text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={tHeader("toggleMenu")}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          <span aria-hidden="true" className="relative block h-5 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-current transition-transform duration-200 motion-reduce:transition-none ${mobileOpen ? "translate-y-[9px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[9px] h-0.5 w-6 rounded-full bg-current transition-opacity duration-200 motion-reduce:transition-none ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-6 rounded-full bg-current transition-transform duration-200 motion-reduce:transition-none ${mobileOpen ? "-translate-y-[9px] -rotate-45" : ""}`}
            />
          </span>
        </button>

        {/* DESKTOP MEGA MENU */}
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
        <div
          id="mobile-navigation"
          className="lg:hidden max-h-[calc(100dvh-70px)] w-full overflow-y-auto overscroll-contain bg-[#0B2458] px-6 pb-6"
        >
          <ul className="flex flex-col gap-4 pt-6">
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
                      <>
                        <button
                          type="button"
                          aria-expanded={mobileSections.has(item)}
                          aria-controls={`mobile-submenu-${item}`}
                          onClick={() => toggleMobileSection(item)}
                          className="flex min-h-10 w-full items-center justify-between text-left text-[16px] text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                          {tHeader(item)}
                          <span
                            aria-hidden="true"
                            className={`ml-4 transition-transform ${mobileSections.has(item) ? "rotate-180" : ""}`}
                          >
                            ⌄
                          </span>
                        </button>
                        {mobileSections.has(item) && (
                          <div
                            id={`mobile-submenu-${item}`}
                            className="ml-3 mt-2 border-l border-white/25 pl-4"
                          >
                            {item === "products" ? (
                              <>
                                <div className="mb-3 flex gap-2">
                                  {(
                                    ["product", "productResellers"] as const
                                  ).map((view) => (
                                    <button
                                      key={view}
                                      type="button"
                                      onClick={() =>
                                        setMobileOfferingsView(view)
                                      }
                                      aria-pressed={
                                        mobileOfferingsView === view
                                      }
                                      className={`rounded-full border px-3 py-2 text-sm ${mobileOfferingsView === view ? "border-[#7C8CFF] text-white" : "border-white/25 text-white/75"}`}
                                    >
                                      {tMega(
                                        `products.tabs.${offeringsMenuContent.tabs[view]}`,
                                      )}
                                    </button>
                                  ))}
                                </div>
                                {mobileOfferingsView === "product" ? (
                                  <Link
                                    href={
                                      offeringsMenuContent.featured.primaryHref
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={() => setMobileOpen(false)}
                                    className="block py-2 text-sm text-white"
                                  >
                                    {tMega(
                                      `products.${offeringsMenuContent.featured.translationKey}.title`,
                                    )}
                                  </Link>
                                ) : (
                                  offeringsMenuContent.resellers.map(
                                    (reseller) => (
                                      <Link
                                        key={reseller.id}
                                        href={reseller.href ?? "/get-started"}
                                        onClick={() => setMobileOpen(false)}
                                        className="block py-2 text-sm text-white"
                                      >
                                        {tMega(
                                          `products.resellers.${reseller.translationKey}.title`,
                                        )}
                                      </Link>
                                    ),
                                  )
                                )}
                              </>
                            ) : (
                              menuMap[item]?.map((subitem) => (
                                <Link
                                  key={subitem.id}
                                  href={subitem.href ?? "/get-started"}
                                  onClick={() => setMobileOpen(false)}
                                  className="block py-2 text-sm leading-5 text-white/90 hover:text-white"
                                >
                                  {item === "services"
                                    ? tHomeSolutions(
                                        `${subitem.translationKey}.title`,
                                      )
                                    : tMega(
                                        `company.${subitem.translationKey}.label`,
                                      )}
                                </Link>
                              ))
                            )}
                          </div>
                        )}
                      </>
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
