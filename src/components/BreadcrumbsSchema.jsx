// components/BreadcrumbsSchema.jsx
"use client";

import { usePathname } from "next/navigation";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";
import JsonLd from "./JsonLd";

export default function BreadcrumbsSchema() {
  const pathname = usePathname() || "/";

  // Als je geen schema op de homepage wilt, kun je deze regel gebruiken:
  // if (pathname === "/") return null;

  const { schema } = generateBreadcrumbs(pathname);

  return <JsonLd data={schema} />;
}
