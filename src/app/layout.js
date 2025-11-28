// app/layout.jsx
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import BreadcrumbsSchema from "@/components/BreadcrumbsSchema";
import JsonLd from "@/components/JsonLd";

const baseUrl = "https://oudervereniging-school.nl";

export const metadata = {
  title: "Oudervereniging [Schoolnaam]",
  description: "Officiële website van de oudervereniging van [Schoolnaam].",
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Oudervereniging [Schoolnaam]",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: baseUrl,
    name: "Oudervereniging [Schoolnaam]",
  };

  return (
    <html lang="nl">
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body>
        <Header />

        <main className="page-shell">
          <Breadcrumbs />
          <BreadcrumbsSchema />
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
