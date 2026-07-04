type IconProps = {
  className?: string;
};

const HybridCloudIcon = ({ className = "" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="7" r="2" />
      <circle cx="6" cy="16" r="2" />
      <circle cx="18" cy="16" r="2" />
      <path d="M10.4 8.2 7.5 14M13.6 8.2l2.9 5.8M8 16h8" />
    </g>
  </svg>
);

export default HybridCloudIcon;
