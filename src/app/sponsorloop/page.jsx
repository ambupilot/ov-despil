// src/app/sponsorloop/page.jsx
import WebPageSchema from "@/components/WebPageSchema";
import { sponsoractieConfig } from "@/data/sponsoractieConfig";
import SponsoractieButton from "@/components/SponsoractieButton";


export const metadata = {
  title: "Sponsorloop 2026 – Oudervereniging De Spil",
  description:
    "Doneer eenvoudig via iDEAL. U kiest zelf het bedrag; de opbrengst gaat naar activiteiten voor de kinderen.",
};

export default function SponsoractiePage() {
  const {
  } = sponsoractieConfig;

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
          Sponsorloop 2026 – helpt u mee?</h1>
<p>
Beste ouders/verzorgers,<br/><br/>
            
De oudervereniging organiseert jaarlijks activiteiten die niet door de overheid worden gefinancierd. Denk aan Sinterklaas, Kerst, de Koningsspelen én de schoolreisjes. 
Dit jaar is er helaas niet genoeg geld opgehaald met de ouderbijdrage. </p>

<h3>H3 titel</h3>
<p>tekst.</p>



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
            <h2>Uw sponsorbijdrage betalen</h2>
            <SponsoractieButton />
          </header>

          <div>
          </div>

          <div className="mt-4 space-y-2">
            <p className="text-sm font-medium text-[var(--text-primary)]">
              Liever scannen? Gebruik de QR-code:
            </p>
            <div className="inline-block rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-muted)] p-3">
             
            </div>
           

          </div>
        </aside>
        <br/>


        </div>
  
        </section>
    </>
  );
}
