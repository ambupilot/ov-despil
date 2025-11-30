"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import OuderbijdrageButton from "@/components/OuderbijdrageButton";


const navItems = [
  { href: "/ouderbijdrage", label: "Ouderbijdrage" },
  { href: "/budget-overzicht", label: "Budget" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header-bar">
      <div className="page-shell py-3 header-inner">
        {/* Logo + titel links */}
        <Link href="/" className="flex items-center gap-3 nav-brand">
          <Image
            src="/images/logo_de_spil.jpg"
            alt="Logo De Spil"
            width={120}
            height={80}
            className="h-10 w-auto rounded-full"
            priority
          />
          <span>Oudervereniging De Spil</span>
        </Link>

        {/* Alles rechts uitlijnen */}
        <div className="ml-auto flex items-center gap-4">
          {/* Desktop navigatie */}
          <nav className="header-nav-desktop">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
             {/* Extra call-to-action rechts in de header */}
  <OuderbijdrageButton
    size="small"
    showAmount={false}
    className="ml-4"
  />
          </nav>

          {/* Mobiele hamburger (alleen zichtbaar op small screens via CSS) */}
          <button
            type="button"
            className="btn-ghost header-menu-button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Navigatie openen of sluiten"
            aria-expanded={open}
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span
                className="burger-line"
                style={
                  open
                    ? { transform: "translateY(6px) rotate(45deg)" }
                    : undefined
                }
              />
              <span
                className="burger-line"
                style={open ? { opacity: 0 } : undefined}
              />
              <span
                className="burger-line"
                style={
                  open
                    ? { transform: "translateY(-6px) rotate(-45deg)" }
                    : undefined
                }
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobiele nav-panel */}
      {open && (
        <nav className="md:hidden border-t border-[var(--ov-border-subtle)] bg-white/95">
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
