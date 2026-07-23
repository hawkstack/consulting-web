import type { SVGProps } from "react";

type EnterpriseSoftwareIconProps = SVGProps<SVGSVGElement>;

export default function EnterpriseSoftwareIcon({
  className = "h-6 w-6 text-[#0B3D91]",
  ...props
}: EnterpriseSoftwareIconProps) {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M0 18V0H10V4H20V18H0ZM2 16H8V14H2V16ZM2 12H8V10H2V12ZM2 8H8V6H2V8ZM2 4H8V2H2V4ZM10 16H18V6H10V16ZM12 10V8H16V10H12ZM12 14V12H16V14H12Z"
        fill="#003CA3"
      />
    </svg>
  );
}
