// components/WebPageSchema.jsx
"use client";

import { usePathname } from "next/navigation";
import JsonLd from "./JsonLd";

const baseUrl = "https://oudervereniging-school.nl";

export default function WebPageSchema({
  title,
  description,
  type = "WebPage",
}) {
  const pathname = usePathname() || "/";

  const url =
    pathname === "/" ? baseUrl : `${baseUrl}${pathname}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    url,
    name: title,
    description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return <JsonLd data={schema} />;
}
