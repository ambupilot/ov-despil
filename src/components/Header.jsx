// components/Header.jsx
"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { href: "/ouderbijdrage", label: "Ouderbijdrage" },
  { href: "/budget-overzicht", label: "Budget" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border-subtle bg-white/80 backdrop-blur sticky top-0 z-20">
      <div className="page-shell py-4 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link href="/" className="nav-brand">
          Oudervereniging
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden btn-ghost"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Navigatie openen of sluiten"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 rounded-full bg-text-primary transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-4 rounded-full bg-text-primary transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-text-primary transition-transform ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <nav className="md:hidden border-t border-border-subtle bg-white">
          <div className="page-shell py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
