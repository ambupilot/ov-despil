// src/app/not-found.jsx
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-section flex min-h-[60vh] items-center justify-center">
        <div className="mx-auto max-w-2xl text-center">
          {/* Kleine label */}
          <p className="font-condensed text-xs uppercase tracking-[0.2em] text-pf-nav-subtitle">
            Pagina niet gevonden
          </p>

          {/* Grote 404 */}
          <h1 className="mt-3 font-condensed text-5xl font-semibold tracking-tight text-pf-emphasis md:text-6xl">
            404 – Oeps, deze pagina bestaat niet
          </h1>

          {/* Korte uitleg */}
          <p className="mt-4 text-sm md:text-base text-pf-text">
            De pagina die je zoekt is verplaatst, verwijderd of nooit aangemaakt.
            Dat kan gebeuren – maar je bent natuurlijk nog steeds welkom bij de Oudervereniging van Baisschool De Spil.
          </p>

          {/* Visueel blokje met “camera / sessie”-sfeer */}
          <div className="mt-8 inline-flex max-w-md flex-col items-center gap-3 rounded-md border border-gray-200 bg-white px-6 py-5 text-left shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                <span className="text-lg">?</span>
              </div>
              <div>
                <p className="font-condensed text-sm font-semibold uppercase tracking-[0.16em] text-pf-emphasis">
                  Toch verder kijken?
                </p>
                <p className="text-xs text-pf-text">
                  Klik op een van de knoppen hieronder om terug te keren naar de homepage of om contact met ons op te nemen.
                </p>
              </div>
            </div>
          </div>

          {/* CTA knoppen */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-black px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-pf-emphasis"
            >
              Terug naar de homepage
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-black px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-black transition-colors hover:bg-black hover:text-white"
            >
              Neem contact op
            </Link>
          </div>

          {/* Kleine extra links */}
          <div className="mt-6 text-xs text-pf-nav-subtitle">
            <span>Of ga direct naar </span>
            <Link
              href="/ouderbijdrage"
              className="underline-offset-2 hover:underline"
            >
              Ouderbijdrage
            </Link>
            <span> · </span>
            <Link
              href="/budget"
              className="underline-offset-2 hover:underline"
            >
              Budget
            </Link>
            <span> · </span>
            
          </div>
        </div>
      </section>
  );
}
