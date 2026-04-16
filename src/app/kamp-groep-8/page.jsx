// src/app/sponsorloop/page.jsx
import WebPageSchema from "@/components/WebPageSchema";
import { kampConfig } from "@/data/kampConfig";
import KampButton from "@/components/KampButton";


export const metadata = {
  title: "Kamp groep 8 - 2026 – Oudervereniging De Spil",
  description:
    "Betaal de bijdrage van het kamp eenvoudig via iDEAL.",
};

export default function KampPage() {
  const {
  } = kampConfig;

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
          Kamp groep 8 – bijdrage</h1>

          <p>
            <KampButton />
          </p>
<p><br/>
Ook dit jaar gaan de kinderen van groep 8 weer op kamp. Een bijzondere
        en onvergetelijke afsluiting van hun basisschooltijd, vol leuke
        activiteiten, samenzijn en mooie herinneringen.</p>
  <p>
        Om dit kamp mogelijk te maken, vragen we een eigen bijdrage van{" "}
        <span className="font-semibold text-gray-900">€75 per kind</span>.
      </p>      
<p>
        Op deze pagina kun je deze bijdrage eenvoudig en veilig betalen.
      </p>

      <p>
        De bijdrage wordt gebruikt voor onder andere:
      </p>

      <ul className="list-disc space-y-2 pl-6">
        <li>- de huur van de accommodatie</li>
        <li>- boodschappen en maaltijden</li>
        <li>- activiteiten en uitstapjes</li>
        <li>- overige organisatiekosten</li>
      </ul>


<br/>
<h3><strong>Namens alle kinderen van groep 8: Wij hebben er zin in!</strong></h3>
        </article>



      <div className="space-y-6">
        {/* Rechts: dynamisch betaalblok */}
        <aside className="card space-y-4">
          <header>
            <h2>Uw bijdrage betalen</h2>
            <KampButton />
          </header>

          <div>
          </div>

          <div className="mt-4 space-y-2">

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
