// src/components/layout/Header.tsx
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} HawkStack Technologies. All rights reserved.</p>
          <ul className="flex space-x-6">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
    </footer>
  )
}
