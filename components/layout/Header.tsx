// src/components/layout/Header.tsx
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">Logo</Link>
        <ul className="flex space-x-6">
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/solutions">Solutions</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
