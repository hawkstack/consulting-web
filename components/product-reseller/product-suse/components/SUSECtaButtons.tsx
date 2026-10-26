import Link from "next/link";
import type { SuseHeroContent } from "../types/suseHero";

export default function SUSECtaButtons({
  actions,
}: {
  actions: SuseHeroContent["actions"];
}) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      {actions.map((action) => (
        <Link
          key={action.label}
          href={action.href}
          className={`inline-flex h-12 min-w-[188px] items-center justify-center rounded-md px-6 text-[12px] font-semibold transition-colors ${action.variant === "primary" ? "bg-[#4BCD87] text-[#112B23] hover:bg-[#22b97b]" : "border border-[#c4d6d0] bg-white/50 text-[#112B23] hover:bg-white"}`}
        >
          {action.label}
        </Link>
      ))}
    </div>
  );
}
