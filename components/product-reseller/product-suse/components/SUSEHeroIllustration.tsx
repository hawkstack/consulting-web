import type { SusePageData } from "@/lib/product-reseller/getLocalizedSusePageData";
import type { SuseIllustrationNode } from "../types/suseHero";

function NodeIcon({ id }: { id: SuseIllustrationNode["id"] }) {
  if (id === "linux")
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          d="m3 8 9-4 9 4-9 4-9-4Zm0 4 9 4 9-4M3 16l9 4 9-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    );
  if (id === "kubernetes")
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <circle
          cx="12"
          cy="12"
          r="9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="m9 9 6 6m0-6-6 6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="1.2" fill="currentColor" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <rect
        x="3"
        y="4"
        width="18"
        height="7"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <rect
        x="3"
        y="13"
        width="18"
        height="7"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="7" cy="7.5" r=".9" fill="currentColor" />
      <circle cx="7" cy="16.5" r=".9" fill="currentColor" />
    </svg>
  );
}

export default function SUSEHeroIllustration({
  content,
}: {
  content: SusePageData["hero"];
}) {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[470px] select-none"
      aria-label={content.illustrationLabel}
      role="img"
    >
      <div className="absolute inset-[8%] rounded-full border border-[#c5d9d2]" />
      <div className="absolute inset-[19%] rounded-full border border-[#d1e1dc]" />
      <div className="absolute left-1/2 top-1/2 flex h-[45%] w-[45%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[#a8dac5] text-[#103347] shadow-[0_12px_40px_rgba(25,132,96,0.1)]">
        <span className="text-[clamp(22px,2.2vw,31px)] font-bold tracking-[-0.04em]">
          {content.brand}
        </span>
        <span className="mt-0.5 text-[7px] font-medium tracking-[0.22em] text-[#55796f]">
          {content.brandTagline}
        </span>
      </div>
      {content.nodes.map((node) => {
        const position =
          node.id === "linux"
            ? "left-1/2 top-[10%] -translate-x-1/2"
            : node.id === "kubernetes"
              ? "right-[2%] top-[39%]"
              : "bottom-[16%] left-[8%]";
        return (
          <div
            key={node.id}
            className={`absolute z-10 flex flex-col items-center ${position}`}
          >
            <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#d4e2dd] bg-white text-[#205f4d] shadow-[0_3px_12px_rgba(31,91,72,0.09)] before:absolute before:h-[54px] before:w-[54px] before:rounded-full before:border before:border-[#dce8e4]">
              <NodeIcon id={node.id} />
            </div>
            <span className="mt-2 whitespace-nowrap text-[8px] font-semibold tracking-[0.14em] text-[#719187]">
              {node.label}
            </span>
          </div>
        );
      })}
      <span className="pointer-events-none absolute left-[1%] top-[4%] h-11 w-11 rotate-[-8deg] rounded-xl border border-[#ddf1e9]" />
      <span className="pointer-events-none absolute right-[1%] top-[19%] h-10 w-10 rotate-[-8deg] rounded-xl border border-[#ddf1e9]" />
      <span className="pointer-events-none absolute bottom-[18%] right-[12%] h-7 w-7 rotate-[-8deg] rounded-lg border border-[#ddf1e9]" />
    </div>
  );
}
