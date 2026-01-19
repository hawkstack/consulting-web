"use client";

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
  return (
    <header className="w-full bg-gradient-to-r from-[#0A1B3F] via-[#0B2458] to-[#0A1B3F]">
      <nav className="max-w-[1440px] mx-auto h-[105px] px-24 flex items-center">
        {/* Logo */}
        <div className="flex items-center justify-center w-[152px] h-[41.74px] rounded-[7.92px] border border-white bg-white">
          <Image
            src="/images/hawkstack-logo.webp"
            alt="HawkStack Logo"
            width={124}
            height={38}
            priority
            className="object-contain"
          />
        </div>

        {/* Menu */}
        <ul className="ml-auto flex items-center gap-14">
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

        {/* CTA */}
        <div className="ml-16">
          <Link
            href="/get-started"
            className="inline-flex items-center justify-center w-[124px] h-[38.4px] rounded-[14px] border border-white bg-transparent font-lexend text-[14px] font-normal text-white hover:bg-white/10 transition-all duration-200"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
