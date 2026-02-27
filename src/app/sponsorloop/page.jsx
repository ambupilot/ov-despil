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
            <SponsoractieButton />
          </p>
<p><br/>
Onze kinderen rennen zich in het zweet tijdens de sponsorloop!<br/>
Met jouw bijdrage helpt de Oudervereniging De Spil om extra activiteiten en materialen mogelijk te maken die niet uit het reguliere budget betaald worden. </p>

<h3>Hoe werkt het?</h3>

<ul className="ov-list">
<li>Je kiest zelf het bedrag (elk bedrag helpt!)</li>
<li>Je rekent veilig af met iDEAL</li>
<li>De volledige opbrengst gaat naar activiteiten voor de kinderen</li>
</ul>
<br/>
<h3><strong>Namens alle kinderen: Dank voor de steun!</strong></h3>
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
