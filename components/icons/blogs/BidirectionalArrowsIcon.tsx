type IconProps = { className?: string };

const BidirectionalArrowsIcon = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M5 8H18M18 8L15 5M18 8L15 11M19 16H6M6 16L9 13M6 16L9 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default BidirectionalArrowsIcon;
