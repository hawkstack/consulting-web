import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const ServiceIcon = ({ children, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    {children}
  </svg>
);

export const ConsultingIcon = (props: IconProps) => (
  <ServiceIcon {...props}>
    <path
      d="M8 5h8l3 3v8l-3 3H8l-3-3V8l3-3Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="m9 14 2-2 2 1 2-3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </ServiceIcon>
);
export const SolutionDesignIcon = (props: IconProps) => (
  <ServiceIcon {...props}>
    <path
      d="M5 6.5 12 3l7 3.5v8L12 21l-7-6.5v-8Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="m8.5 10 3.5 2 3.5-2M12 12v4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </ServiceIcon>
);
export const IntegrationIcon = (props: IconProps) => (
  <ServiceIcon {...props}>
    <path
      d="M8 8h3V5m2 11H8v3m-3-8h3m8 2h3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M8 5H5v3m11 8v3h3v-3M19 8V5h-3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </ServiceIcon>
);
export const TrainingIcon = (props: IconProps) => (
  <ServiceIcon {...props}>
    <path
      d="M4 8 12 4l8 4-8 4-8-4Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M7 10.5V15c2.8 1.7 7.2 1.7 10 0v-4.5M20 8v5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </ServiceIcon>
);
