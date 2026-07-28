type IconProps = { className?: string };

const GridIcon = ({ className = "" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="4"
      y="4"
      width="6"
      height="6"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <rect
      x="14"
      y="4"
      width="6"
      height="6"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <rect
      x="4"
      y="14"
      width="6"
      height="6"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <rect
      x="14"
      y="14"
      width="6"
      height="6"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.8"
    />
  </svg>
);

export default GridIcon;
