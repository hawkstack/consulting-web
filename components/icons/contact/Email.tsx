const Email = ({ className = "" }) => {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="38" height="38" rx="19" fill="#35D07F" />
      <path
        d="M25.668 12.3335H12.3346C11.4142 12.3335 10.668 13.0797 10.668 14.0002V24.0002C10.668 24.9206 11.4142 25.6668 12.3346 25.6668H25.668C26.5884 25.6668 27.3346 24.9206 27.3346 24.0002V14.0002C27.3346 13.0797 26.5884 12.3335 25.668 12.3335Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.3346 14.8335L19.8596 19.5835C19.6024 19.7447 19.3049 19.8302 19.0013 19.8302C18.6977 19.8302 18.4002 19.7447 18.143 19.5835L10.668 14.8335"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Email;
