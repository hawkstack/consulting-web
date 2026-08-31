type KeyTopicIconProps = {
  className?: string;
};

const KeyTopicIcon = ({ className = "" }: KeyTopicIconProps) => (
  <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" className={className}>
    <circle cx="6" cy="6" r="3.75" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="m4.35 6 1.05 1.05L7.8 4.7"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default KeyTopicIcon;
