"use client";

import {useLocale, useTranslations} from "next-intl";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {
  AppLocale,
  localeNames,
  locales,
} from "@/i18n/config";

export function LanguageSwitcher() {
  const locale = useLocale() as AppLocale;
  const t = useTranslations("LanguageSwitcher");
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  async function changeLocale(nextLocale: AppLocale) {
    if (nextLocale === locale) return;
    setIsPending(true);

    try {
      const response = await fetch("/api/locale", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({locale: nextLocale}),
      });

      if (!response.ok) throw new Error("Could not update language");
      router.refresh();
    } finally {
      setIsPending(false);
    }
  }

  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">{t("label")}</span>
      <select
        aria-label={t("label")}
        value={locale}
        disabled={isPending}
        onChange={(event) => changeLocale(event.target.value as AppLocale)}
        className="h-[38px] max-w-[120px] cursor-pointer rounded-xl border border-white/70 bg-[#0B2458] px-3 text-sm text-white outline-none focus:ring-2 focus:ring-[#7C8CFF] disabled:opacity-60"
      >
        {locales.map((item) => (
          <option key={item} value={item}>
            {localeNames[item]}
          </option>
        ))}
      </select>
    </label>
  );
}
