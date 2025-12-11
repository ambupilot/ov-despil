// src/app/ouderbijdrage/page.jsx
import Image from "next/image";
import WebPageSchema from "@/components/WebPageSchema";
import { ouderbijdrageConfig } from "@/data/ouderbijdrageConfig";
import OuderbijdrageButton from "@/components/OuderbijdrageButton";


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

      <section className="two-column-layout">
        {/* Links: tekst (blijft zoals je had) */}
        <article className="card space-y-4">
          <h1>
          Vrijwillige ouderbijdrage – helpt u mee?</h1>
<p>
Beste ouders/verzorgers,<br/><br/>
            
De oudervereniging organiseert jaarlijks activiteiten die niet door de overheid worden gefinancierd. Denk aan Sinterklaas, Kerst, de Koningsspelen én de schoolreisjes. Daarom vragen wij een vrijwillige ouderbijdrage van €45 per kind per jaar.</p>

<h3>Hoe besteden wij de ouderbijdrage?</h3>
<p>We splisten het bedrag op in een bedrag voor de schoolreisjes, en een bedrag voor de activiteiten.</p>
<p>
<strong>€25 voor schoolreisjes (sparen over 8 jaar)</strong><br/>
Kinderen gaan vier keer op schoolreisje tijdens hun basisschoolperiode:</p>
<ul className="ov-list">
<li>Groep 1–2 → €15</li>

<li>Groep 3–4 → €25</li>

<li>Groep 5–6 → €45</li>

<li>Groep 7–8 → €45</li>
</ul>
<p>
Omdat de hogere groepen duurder zijn, sparen we elk jaar een vast bedrag.<br/>
Het totaal van het gespaarde bedrag is € 200,- over 8 jaar. <br/>
In werkelijkheid wordt voor ongeveer 65% van de kinderen de ouderbijdrage betaald. En daar moeten we rekening mee houden.<br/>
Gemiddeld per kind (want ALLE kinderen gaan mee op de schoolreisjes) betekent dat er dus eigenlijk een budget is voor € 130,- per 8 schooljaren.</p>

<p>
  <strong>€20 voor activiteiten en feesten</strong><br/>
  Hiermee bekostigen we o.a.: Sinterklaas, Kerst, Carnaval, Kinderboekenweek, Koningsspelen, jaarafsluiting, Avondvierdaagse, attenties voor leerkrachten en leerlingen (zoals een lekker ijsje in de zomer).
</p>


  <h3><strong>Waarom uw bijdrage zo belangrijk is:</strong></h3>
 <p> 
  Zonder de ouderbijdragen kunnen we de schoolreisjes en activiteiten simpelweg niet organiseren. Uw bijdrage komt volledig en direct ten goede aan uw kind en zijn/haar klasgenoten.
</p>
<h3>
❤️&nbsp; Waarom uw bijdrage telt</h3>

<ul className="ov-list">
  <li>Maakt de schoolreisjes voor <strong>ALLE</strong> kinderen mogelijk</li>
  
  <li>Zorgt voor gelijke kansen</li>
  
  <li>Maakt het schooljaar feestelijk én leerzaam</li>
  
  <li>Houdt activiteiten betaalbaar en continu</li>
  
  <li>Uw bijdrage komt volledig ten goede aan de kinderen</li>
</ul>
<br/>
<h3><strong>Dank voor uw steun!</strong></h3>
        </article>



      <div className="space-y-6">
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
            <OuderbijdrageButton showAmount />
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
        <br/>
<aside className="card space-y-4">
<h4>Wat hebben we zoal gedaan, afgelopen jaar?</h4>
<p>We hebben natuurlijk de schoolopening gevierd. Met wat gespaard geld hebben we een popcornmachine kunnen kopen.<br/>
Deze machine gebruiken we een aantal keer door het jaar heen. Popcorn voor alle kinderen!<br/>
Wist u dat voor de schoolbeloning de kinderen hebben gestemd voor een film kijken... met popcorn! Hoe leuk is dat?</p>
<p>Ook zijn we bezig met alle oude en kapotte versiering (Sinterklaas, Kerst, Carnaval) te vervangen voor nieuwe artikelen die jaren mee kunnen. <br/>
Mooie tafelkleden voor kerst en pasen bijvoorbeeld. Geen tafellopers meer van papier, maar van stof. Ook nog eens lekker duurzaam!</p>
<p>Elke klas heeft nu een eigen bak met kerstversiering. Lampjes, raamversiering enz. enz. De leerlingen kunnen met de leerkracht zo hun eigen klas extra gezellig maken!</p>
<h4>Wat hebben NIET gedaan, afgelopen jaar?</h4>
<p>Helaas horen we nog eens wat <i>misverstanden</i>. Zo hoorde ik (Martijn, penningmeester) onlangs bij het ophalen van mijn kinderen: <i>"Daar gaan 'zij' met z'n allen lekker van uit eten".</i> (Refererend aan de ouderbijdrage)<br/>
Ik kan u verzekeren: alle leden van de oudervereniging zetten zich <strong>belangenloos</strong> in. En van uit-eten op kosten van de kinderen... zal nooit sprake zijn.</p>
<p>Mocht je vragen of verbeterpunten hebben, spreek een van de leden gewoon aan. Een mailtje sturen kan natuurlijk ook.</p>


</aside>

        </div>
  
        </section>
    </>
  );
}
