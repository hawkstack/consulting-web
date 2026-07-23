import type { SVGProps } from "react";

type MicrosoftSolutionsIconProps = SVGProps<SVGSVGElement>;

export default function MicrosoftSolutionsIcon({
  className = "h-6 w-6 text-[#0B3D91]",
  ...props
}: MicrosoftSolutionsIconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M10 10H18V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H10V10ZM10 8V0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V8H10ZM8 8H0V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H8V8ZM8 10V18H2C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V10H8Z"
        fill="#003CA3"
      />
    </svg>
  );
}
