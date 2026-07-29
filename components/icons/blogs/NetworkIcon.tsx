import React from 'react'

const NetworkIcon = ({ className = "" }) => {
  return (
    <svg
    aria-hidden="true"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="4"
    className={className}
  >
    <path d="M32 32 18 20m14 12 14-12M32 32 18 45m14-13 14 13" />
    <circle cx="32" cy="32" r="6" fill="currentColor" />
    <circle cx="18" cy="20" r="5" />
    <circle cx="46" cy="20" r="5" />
    <circle cx="18" cy="45" r="5" />
    <circle cx="46" cy="45" r="5" />
  </svg>
  )
}

export default NetworkIcon
