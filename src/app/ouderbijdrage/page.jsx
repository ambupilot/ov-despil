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
          <h1>
          Vrijwillige ouderbijdrage – helpt u mee?</h1>
<p>
Beste ouders/verzorgers,<br/><br/>

De oudervereniging organiseert jaarlijks activiteiten die niet door de overheid worden gefinancierd. Denk aan Sinterklaas, Kerst, de Koningsspelen én de schoolreisjes. Daarom vragen wij een vrijwillige ouderbijdrage van €45 per kind per jaar.</p>

<h3>Waar gaat uw bijdrage naartoe?</h3>
<p>
€25 voor schoolreisjes (sparen over 8 jaar)<br/>
Kinderen gaan vier keer op schoolreisje tijdens hun basisschoolperiode:
<ul>
<li>Groep 1–2 → €15</li>

<li>Groep 3–4 → €25</li>

<li>Groep 5–6 → €45</li>

<li>Groep 7–8 → €45</li>
</ul>

Omdat de hogere groepen duurder zijn, sparen we elk jaar een vast bedrag.<br/>
Het totaal van het gespaarde bedrag is € 200,- over 8 jaar. <br/>
In werkelijkheid wordt voor ongeveer 65% van de kinderen de ouderbijdrage betaald. En daar moeten we rekening mee houden.<br/>
Gemiddeld per kind betekent dat er dus eigenlijk een budget is voor € 130,- per 8 schooljaren.</p>

<p>
  €20 voor activiteiten en feesten<br/>
  Hiermee bekostigen we o.a.: Sinterklaas, Kerst, Carnaval, Kinderboekenweek, Koningsspelen, jaarafsluiting, Avondvierdaagse, attenties voor leerkrachten en onvoorziene kosten.
</p>

<p>
  <strong>Waarom uw bijdrage zo belangrijk is:</strong><br/>
  
  Zonder de ouderbijdragen kunnen we de schoolreisjes en activiteiten simpelweg niet organiseren. Uw bijdrage komt volledig en direct ten goede aan uw kind en zijn/haar klasgenoten.
</p>
<h3>
❤️ Waarom uw bijdrage telt</h3>

<ul>
  <li>Maakt de schoolreisjes voor <strong>ALLE</strong> kinderen mogelijk</li>
  
  <li>Zorgt voor gelijke kansen</li>
  
  <li>Maakt het schooljaar feestelijk én leerzaam</li>
  
  <li>Houdt activiteiten betaalbaar en continu</li>
  
  <li>Uw bijdrage komt volledig ten goede aan uw kind</li>
</ul>

<p><strong>Dank voor uw steun!</strong></p>
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
                {/* {paymentNote} */}
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
