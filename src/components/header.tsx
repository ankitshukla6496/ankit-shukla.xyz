"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 glass">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold text-text"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Ankit Shukla
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link text-sm font-medium transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-accent"
                    : "text-text-muted hover:text-text"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-text-secondary transition-transform duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-text-secondary transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-text-secondary transition-transform duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-bg-subtle border-t border-border px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-base font-medium transition-colors ${
                    pathname === link.href ? "text-accent" : "text-text-secondary hover:text-text"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
