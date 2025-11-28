// lib/breadcrumbs.js

const baseUrl = "https://ovdespil.nl";

export function generateBreadcrumbs(pathname) {
  if (!pathname) pathname = "/";

  const segments = pathname.split("/").filter(Boolean);

  // Voor de visuele breadcrumbs
  const crumbs = segments.map((seg, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    return {
      label: seg.replace(/-/g, " "),
      href,
    };
  });

  // Voor de JSON-LD schema breadcrumbs
  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: baseUrl,
    },
    ...segments.map((seg, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: seg.replace(/-/g, " "),
      item: `${baseUrl}/${segments.slice(0, index + 1).join("/")}`,
    })),
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };

  return { crumbs, schema };
}
