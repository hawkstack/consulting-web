import type { SVGProps } from "react";

export function ProductReadinessCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M14.8 8.3A6 6 0 1 1 11 3.4" />
      <path d="m6.5 8.5 2.1 2.1L15 4.3M12 4.3h3v3" />
    </svg>
  );
}
