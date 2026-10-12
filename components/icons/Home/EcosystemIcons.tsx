import type { SVGProps } from "react";

export function EcosystemBenefitIcon({ icon, ...props }: SVGProps<SVGSVGElement> & { icon: "platform" | "shield" | "growth" }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {icon === "platform" && <><ellipse cx="16" cy="7" rx="11" ry="3.5" /><path d="M5 7v6c0 2 5 3.5 11 3.5s11-1.5 11-3.5V7M5 13v6c0 2 5 3.5 11 3.5S27 21 27 19v-6M5 19v6c0 2 5 3.5 11 3.5S27 27 27 25v-6M21 7h1M21 13h1M21 19h1" /></>}
      {icon === "shield" && <><path d="m16 3 11 4v9c0 6-5 11-11 14C10 27 5 22 5 16V7l11-4Z" /><path d="m11 16 4 4 7-8" /></>}
      {icon === "growth" && <><path d="M4 21h5v9H4zM12 15h5v15h-5zM20 9h5v21h-5z" fill="currentColor" stroke="none" /><path d="m8 14 18-11M18 3h8v8" /></>}
    </svg>
  );
}

export function EcosystemAwsMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 60 40" fill="none" aria-hidden="true" {...props}>
      <text x="2" y="25" fill="white" fontFamily="Arial, sans-serif" fontSize="29" letterSpacing="-1">aws</text>
      <path d="M3 30c13 8 31 9 47-1M45 29l8-1-2 7" stroke="#ff9900" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function EcosystemDellMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 42 42" fill="none" aria-hidden="true" {...props}>
      <circle cx="21" cy="21" r="19" stroke="#007db8" />
      <text x="21" y="21" fill="#007db8" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="700" textAnchor="middle">DELL</text>
      <text x="21" y="28" fill="#007db8" fontFamily="Arial, sans-serif" fontSize="4" textAnchor="middle">TECHNOLOGIES</text>
    </svg>
  );
}

export function EcosystemMoreArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M2 8h15m-6-6 6 6-6 6" />
    </svg>
  );
}
