type IconProps = {
  className?: string;
};

const ArchitectureCheckIcon = ({ className = "" }: IconProps) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.1" />
    <path
      d="m6.5 10.1 2.2 2.2 4.8-4.8"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArchitectureCheckIcon;
