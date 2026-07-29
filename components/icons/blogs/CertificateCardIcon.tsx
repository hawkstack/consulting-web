type IconProps = { className?: string };

const CertificateCardIcon = ({ className = "" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="3.5" y="5" width="17" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M7.5 9H16.5M7.5 12H12.5M15.5 14.5L17 16L19.5 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default CertificateCardIcon;
