// src/app/ouderbijdrage/page.jsx
import Image from "next/image";
import WebPageSchema from "@/components/WebPageSchema";
import { ouderbijdrageConfig } from "@/data/ouderbijdrageConfig";

export const metadata = {
  title: "Ouderbijdrage – Oudervereniging De Spil",
  description:
    "Uitleg over de vrijwillige ouderbijdrage en hoe u deze eenvoudig kunt betalen via uw bank of QR-code.",
};

export default function OuderbijdragePage() {
  const {
    paymentUrl,
    paymentButtonLabel,
    qrImageSrc,
    contributionAmount,
    qrValidUntilText,
    paymentNote,
  } = ouderbijdrageConfig;

  return (
    <>
      <WebPageSchema
        title={metadata.title}
        description={metadata.description}
        type="WebPage"
      />

      <section className="grid gap-8 md:grid-cols-[minmax(0,1.8fr)_minmax(0,1.2fr)] items-start">
        {/* Links: tekst (blijft zoals je had) */}
        <article className="card space-y-4">
          <h1>Ouderbijdrage</h1>
          {/* ... jouw tekst ... */}
        </article>

        {/* Rechts: dynamisch betaalblok */}
        <aside className="card space-y-4">
          <header>
            <h2>Ouderbijdrage betalen</h2>
            {contributionAmount && (
              <p className="mt-1 font-medium text-[var(--text-primary)]">
                Bijdrage: {contributionAmount}
              </p>
            )}
          </header>

          <div>
            <a
              href={paymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              {paymentButtonLabel}
            </a>
            {paymentNote && (
              <p className="mt-2 text-sm text-[var(--text-subtle)]">
                {paymentNote}
              </p>
            )}
          </div>

          <div className="mt-4 space-y-2">
            <p className="text-sm font-medium text-[var(--text-primary)]">
              Liever scannen? Gebruik de QR-code:
            </p>
            <div className="inline-block rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-muted)] p-3">
              <Image
                src={qrImageSrc}
                alt="QR-code voor betaling van de ouderbijdrage"
                width={200}
                height={200}
                className="block h-auto w-48"
              />
            </div>
            {qrValidUntilText && (
              <p className="text-xs text-[var(--text-subtle)]">
                {qrValidUntilText}
              </p>
            )}
          </div>
        </aside>
      </section>
    </>
  );
}
