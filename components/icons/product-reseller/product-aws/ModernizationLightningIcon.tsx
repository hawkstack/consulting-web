type IconProps = {
  className?: string;
};

const ModernizationLightningIcon = ({ className = "" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="m13.4 2.8-6 10.1h4.8l-1.3 8.3 5.7-10.4h-4.5l1.3-8Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ModernizationLightningIcon;
