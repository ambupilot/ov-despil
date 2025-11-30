// components/Breadcrumbs.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (!pathname || pathname === "/") return null;

  const { crumbs } = generateBreadcrumbs(pathname);

  return (
<nav className="breadcrumbs mb-6">
      <ol className="flex gap-1 flex-wrap">
        {/* Home */}
        <li className="flex items-center gap-1">
          <Link
            href="/"
            className="hover:text-[var(--brand-primary-strong)]"
          >
            Home
          </Link>
          {crumbs.length > 0 && <span className="sep">/</span>}
        </li>

        {/* Overige crumbs */}
        {crumbs.map((c, i) => (
          <li key={c.href} className="flex items-center gap-1">
            <Link
              href={c.href}
              className="capitalize hover:text-[var(--brand-primary-strong)]"
            >
              {c.label}
            </Link>
            {i < crumbs.length - 1 && <span className="sep">/</span>}
          </li>
        ))}
      </ol>
    </nav>  );
}
