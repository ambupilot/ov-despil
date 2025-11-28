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
    <nav className="text-sm text-gray-500 mb-6">
      <ol className="flex gap-2 flex-wrap">
        <li>
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <span> /</span>
        </li>
        {crumbs.map((c, i) => (
          <li key={c.href}>
            <Link href={c.href} className="capitalize hover:text-gray-700">
              {c.label}
            </Link>
            {i < crumbs.length - 1 && <span> /</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
