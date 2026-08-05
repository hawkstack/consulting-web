"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { AppLocale, localeNames, locales } from "@/i18n/config";

export function LanguageSwitcher() {
  const locale = useLocale() as AppLocale;
  const tLanguageSwitcher = useTranslations("LanguageSwitcher");
  const [isPending, setIsPending] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeOnOutsideClick(event: PointerEvent) {
      if (!switcherRef.current?.contains(event.target as Node))
        setIsOpen(false);
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  async function changeLocale(nextLocale: AppLocale) {
    setIsOpen(false);
    if (nextLocale === locale) return;
    setIsPending(true);

    try {
      // `/api/*` is reserved for the upstream backend in production, so this
      // Next.js route deliberately lives outside that proxy namespace.
      const response = await fetch("/locale", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale: nextLocale }),
      });

      if (!response.ok) throw new Error("Could not update language");
      // A full navigation makes the next request read the newly saved locale
      // cookie. This also avoids serving a stale RSC payload from a production
      // cache after a client-side refresh.
      window.location.reload();
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div ref={switcherRef} className="relative w-[124px] max-w-full">
      <button
        type="button"
        aria-label={tLanguageSwitcher("label")}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-busy={isPending}
        disabled={isPending}
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-11 w-full min-w-0 items-center justify-between gap-3 rounded-xl border border-white/40 bg-white/5 px-3 text-left text-sm text-white outline-none transition-colors hover:border-white/70 hover:bg-white/10 focus-visible:border-white focus-visible:ring-2 focus-visible:ring-white/40 disabled:cursor-wait disabled:opacity-60 lg:h-[38px]"
      >
        <span className="truncate">{localeNames[locale]}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            d="m6 8 4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-label={tLanguageSwitcher("label")}
          className="absolute left-0 right-0 top-[calc(100%+6px)] z-[70] overflow-hidden rounded-xl border border-white/20 bg-[#0A1B3F] p-1.5 shadow-2xl shadow-black/30"
        >
          {locales.map((item) => (
            <button
              key={item}
              type="button"
              role="menuitemradio"
              aria-checked={item === locale}
              onClick={() => changeLocale(item)}
              className={`flex min-h-10 w-full items-center rounded-lg px-3 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
                item === locale
                  ? "bg-[#7C8CFF] font-medium text-white"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {localeNames[item]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
