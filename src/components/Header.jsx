"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
      <div className="page-shell py-3">
        {/* Flex container die op desktop in 2 kolommen werkt via basis-1/3 & basis-2/3 */}
        <div className="header-inner flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
          {/* LINKERKOLOM – altijd logo + tekst */}
          <div className="md:basis-1/3">
            <Link href="/" className="flex items-center gap-3 nav-brand">
              <Image
                src="/images/logo_de_spil.jpg"
                alt="Logo De Spil"
                width={100}
                height={100}
                className="h-10 w-auto rounded-full"
                priority
              />
              <span>Oudervereniging<br/>Basisschool De Spil</span>
            </Link>
          </div>

          {/* RECHTERKOLOM – 2 rijen */}
          <div className="md:basis-2/3 flex flex-col gap-2 md:items-end w-full">
            {/* Rij 1: desktop betaalknop rechts uitgelijnd */}
            <div className="hidden md:flex w-full justify-end">
              <OuderbijdrageButton size="small" showAmount={false} />
            </div>

            {/* Rij 2:
                - mobiel: links betaalknop, rechts menuknop
                - desktop: rechts menu (nav) */}
            <div className="flex w-full items-center justify-between md:justify-end gap-3">
              {/* Mobiele betaalknop (links) */}
              <div className="md:hidden">
                <OuderbijdrageButton
                  size="small"
                  showAmount={false}
                />
              </div>

              {/* Desktop menu (rechts onder, rechts uitgelijnd) */}
              <nav className="hidden md:flex header-nav-desktop">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="nav-link">
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Mobiele menuknop – rechts uitgelijnd */}
              <button
                type="button"
                className="btn-ghost header-menu-button md:hidden"
                onClick={() => setOpen((prev) => !prev)}
                aria-label="Navigatie openen of sluiten"
                aria-expanded={open}
              >
                Menu
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobiele nav-panel */}
      {open && (
        <nav className="md:hidden border-t border-[var(--border-subtle)] bg-white/95">
          <div className="page-shell py-4 flex flex-col gap-1 items-stretch">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-nav-link"
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
