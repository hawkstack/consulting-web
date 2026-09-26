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

export const JourneyNetworkIcon = (props: IconProps) => (
  <ServiceIcon {...props}>
    <path
      d="m8.4 10 5.2-3M8.4 14l5.2 3"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <circle cx="6.5" cy="12" r="2.7" stroke="currentColor" strokeWidth="1.6" />
    <circle
      cx="16.5"
      cy="5.5"
      r="2.7"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <circle
      cx="16.5"
      cy="18.5"
      r="2.7"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  </ServiceIcon>
);

export const JourneyBulbIcon = (props: IconProps) => (
  <ServiceIcon {...props}>
    <path
      d="M9 15.2a6 6 0 1 1 6 0c-.9.6-1.2 1.3-1.3 2.3h-3.4c-.1-1-.4-1.7-1.3-2.3Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.4 20h3.2M12 2v1.5M4.9 5l1.1 1.1M19.1 5 18 6.1"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </ServiceIcon>
);

export const JourneyGearIcon = (props: IconProps) => (
  <ServiceIcon {...props}>
    <path
      d="m10.1 3.9.4-1.2h3l.4 1.2a8 8 0 0 1 1.7.7l1.1-.6 2.1 2.1-.6 1.1c.3.5.6 1.1.7 1.7l1.2.4v3l-1.2.4a8 8 0 0 1-.7 1.7l.6 1.1-2.1 2.1-1.1-.6a8 8 0 0 1-1.7.7l-.4 1.2h-3l-.4-1.2a8 8 0 0 1-1.7-.7l-1.1.6-2.1-2.1.6-1.1a8 8 0 0 1-.7-1.7L3.9 12v-3l1.2-.4a8 8 0 0 1 .7-1.7l-.6-1.1 2.1-2.1 1.1.6a8 8 0 0 1 1.7-.7Z"
      stroke="currentColor"
      strokeWidth="1.45"
      strokeLinejoin="round"
    />
    <circle
      cx="12"
      cy="10.5"
      r="2.5"
      stroke="currentColor"
      strokeWidth="1.45"
    />
  </ServiceIcon>
);
