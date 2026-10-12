import type { SVGProps } from "react";

export function SolutionListArrow({
  active,
  ...props
}: SVGProps<SVGSVGElement> & { active: boolean }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      {active ? (
        <path
          d="m7 3 7 7-7 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="m5 5 9 1 1 9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

export function SolutionDiscussionArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 14" fill="none" aria-hidden="true" {...props}>
      <path
        d="M2 7h15m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
