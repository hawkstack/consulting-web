"use client";

import { JSX, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Navlink = {
  name: string;
  href: string;
};

const navLinks: Navlink[] = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/solutions" },
  { name: "Services", href: "/services" },
  { name: "Company", href: "/company" },
  { name: "Training", href: "/training" },
];

export function Header(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="w-full bg-gradient-to-r from-[#0A1B3F] via-[#0B2458] to-[#0A1B3F] relative z-50">
      <nav className="max-w-[1440px] mx-auto h-[105px] px-4 lg:px-24 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center justify-center w-[152px] h-[41.74px] rounded-[7.92px] border border-white bg-white">
          <Image
            src="/images/Hawkstack.logo.webp"
            alt="HawkStack Logo"
            width={124}
            height={38}
            priority
            className="object-contain"
          />
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-14 ml-auto">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="font-lexend text-[18px] font-normal leading-[150%] tracking-[-0.03em] text-white hover:text-[#7C8CFF] transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* DESKTOP CTA */}
        <div className="hidden lg:block ml-16">
          <Link
            href="/get-started"
            className="inline-flex items-center justify-center w-[124px] h-[38.4px] rounded-[14px] border border-white bg-transparent font-lexend text-[14px] font-normal text-white hover:bg-white/10 transition-all duration-200"
          >
            Get Started
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden text-white text-2xl"
          aria-label="Open Menu"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE OVERLAY */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* MOBILE SLIDE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-[320px]
        bg-white/20 backdrop-blur-xxl z-50
        transform transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        lg:hidden`}
      >
        <div className="p-6 flex flex-col h-full">

          {/* CLOSE */}
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-xl mb-10 self-end"
            aria-label="Close Menu"
          >
            ✕
          </button>

          {/* NAV LINKS */}
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-lexend text-[18px] text-white hover:text-[#7C8CFF] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="mt-auto">
            <Link
              href="/get-started"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center w-full h-[44px] rounded-[14px] border border-white text-white hover:bg-white/10 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
