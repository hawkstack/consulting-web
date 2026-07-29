type IconProps = { className?: string };

const AutomationArmIcon = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M6 20H18M9 20V16.5L12.5 14L10 10L13 7L16 10M16 10L18.5 7.5M16 10L18.5 12.5M12 5V3M10 16.5H15.5V20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="10" r="1.2" fill="currentColor" />
  </svg>
);

export default AutomationArmIcon;
