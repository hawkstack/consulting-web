import type { SVGProps } from "react";
import type { AboutCapabilityIcon as IconName } from "@/types/home/about";

export function AboutCapabilityIcon({ icon, ...props }: SVGProps<SVGSVGElement> & { icon: IconName }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {icon === "foundation" && <><path d="m12 3 9 4.5-9 4.5-9-4.5L12 3ZM3 12l9 4.5 9-4.5M3 16.5l9 4.5 9-4.5" /></>}
      {icon === "platforms" && <><rect x="9" y="2" width="6" height="6" rx="1" /><rect x="2" y="16" width="6" height="6" rx="1" /><rect x="16" y="16" width="6" height="6" rx="1" /><path d="M12 8v4M5 16v-4h14v4" /></>}
      {icon === "ai" && <><rect x="6" y="6" width="12" height="12" rx="3" /><path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4M18 9h4m-4 6h4m-12-3 2-2 2 2-2 2-2-2Z" /></>}
      {icon === "teams" && <><path d="M11 5C8 3 5 3 2 4v15c3-1 6-1 9 1m0-15v15m0-15c2-1.5 4-1.8 6-1.4M11 20c3-2 6-2 9-1v-7m-5-4 2 2 5-5" /></>}
    </svg>
  );
}

export function OverviewArrow(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M3 10h13m-5-5 5 5-5 5" /></svg>;
}
