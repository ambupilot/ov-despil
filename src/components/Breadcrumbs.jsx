// components/Breadcrumbs.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export default function Breadcrumbs() {
  const pathname = usePathname() || "/";

  if (pathname === "/") return null;

  const { crumbs } = generateBreadcrumbs(pathname);

  return (
    <nav className="text-sm text-gray-500 mb-4">
      <ol className="flex gap-2 flex-wrap">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span> /</span>
        </li>
        {crumbs.map((crumb, index) => (
          <li key={crumb.href}>
            <Link href={crumb.href} className="capitalize hover:underline">
              {crumb.label}
            </Link>
            {index < crumbs.length - 1 && <span> /</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
