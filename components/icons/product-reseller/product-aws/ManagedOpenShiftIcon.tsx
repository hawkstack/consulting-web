type IconProps = {
  className?: string;
};

const ManagedOpenShiftIcon = ({ className = "" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g stroke="currentColor" strokeWidth="1.8">
      <rect x="5" y="5" width="5" height="5" rx=".5" />
      <rect x="14" y="5" width="5" height="5" rx=".5" />
      <rect x="5" y="14" width="5" height="5" rx=".5" />
      <rect x="14" y="14" width="5" height="5" rx=".5" />
    </g>
  </svg>
);

export default ManagedOpenShiftIcon;
