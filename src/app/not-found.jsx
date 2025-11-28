// src/app/not-found.jsx
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="card space-y-4">
      <h1>Pagina niet gevonden</h1>
      <p>
        De pagina die je probeert te openen bestaat niet (meer) of is verplaatst.
      </p>

      <p>
        Controleer de URL, of ga terug naar de startpagina van de
        oudervereniging.
      </p>

      <div className="pt-2">
        <Link href="/" className="button-primary">
          Terug naar de startpagina
        </Link>
      </div>
    </section>
  );
}
