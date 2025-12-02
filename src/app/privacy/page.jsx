import WebPageSchema from "@/components/WebPageSchema";

export const metadata = {
  title: "Privacy Verklaring – Oudervereniging De Spil",
  description:
    "Lees hier de privacy verklaring van OV De Spil",
};

export default function PrivacyPage() {
  return (
    <>
      <WebPageSchema
        title={metadata.title}
        description={metadata.description}
        type="WebPage"
      />

      <section className="space-y-8">
        {/* Intro + contactinfo */}
        <section className="card space-y-4">

<article>
  <h1>Privacy- en cookieverklaring – Oudervereniging De Spil</h1>

  <p><strong>Versie:</strong> 1.0<br/>
     <strong>Datum:</strong> 01 december 2025</p>

  <h2>1. Wie zijn wij?</h2>

  <p>Deze website wordt beheerd door de Oudervereniging van basisschool De Spil (hierna: “wij” of “de oudervereniging”).<br/>
  Via deze site informeren wij ouders/verzorgers over activiteiten, de vrijwillige ouderbijdrage en de besteding van gelden.</p>

  <p>Bij vragen over deze verklaring kun je contact opnemen via:</p>

  <p>
    <strong>E-mail: </strong>
    <a href="mailto:hallo@ovdespil.nl">hallo@ovdespil.nl</a><br/>
    <strong>Schooladres:</strong><br />
    Basisschool De Spil (t.a.v. oudervereniging), Weezenhof 40-02, Nijmegen
  </p>

  <h2>2. Welke gegevens verwerken wij?</h2>

  <p>Op deze website verwerken wij alleen persoonsgegevens die jij zelf actief aan ons doorgeeft, bijvoorbeeld via:</p>

  <ul>
    <li>Het contactformulier</li>
    <li>Een e-mail die je naar ons stuurt</li>
  </ul>

  <p>Het gaat dan om gegevens zoals:</p>

  <ul>
    <li>Naam</li>
    <li>E-mailadres</li>
    <li>(Eventueel) telefoonnummer</li>
    <li>De inhoud van je bericht</li>
  </ul>

  <p>Deze gegevens gebruiken wij uitsluitend om:</p>

  <ul>
    <li>Je vraag te beantwoorden</li>
    <li>Contact met je op te nemen over activiteiten of de ouderbijdrage, als je daarom vraagt</li>
  </ul>

  <p>Wij verzamelen via deze website geen bijzondere persoonsgegevens (zoals medische gegevens of geloofsovertuiging) en vragen je die ook niet via het formulier met ons te delen.</p>

  <h2>3. Contactformulier en Netlify Forms</h2>

  <p>Het contactformulier op deze site wordt technisch verwerkt via Netlify Forms (de dienst van onze hostingprovider). Wanneer je het formulier invult:</p>

  <ul>
    <li>Wordt je bericht veilig naar de oudervereniging doorgestuurd</li>
    <li>Worden de gegevens tijdelijk opgeslagen in de Netlify Forms-omgeving</li>
  </ul>

  <p>We gebruiken deze gegevens uitsluitend om jouw bericht te lezen en te beantwoorden.
  We blijven verantwoordelijk voor de zorgvuldige omgang met je gegevens; Netlify treedt hierbij op als verwerker.</p>

  <h2>4. Budgetoverzicht en Google Sheets</h2>

  <p>Op de pagina met het budgetoverzicht tonen we gegevens uit een Google Sheet (alleen bedragen en namen van werkgroepen). Deze gegevens zijn:</p>

  <ul>
    <li>Geen persoonsgegevens, maar pure budgetinformatie</li>
    <li>Alleen bedoeld om ouders inzicht te geven in inkomsten en uitgaven</li>
  </ul>

  <p>Er worden via deze koppeling geen IP-adressen of andere bezoekersgegevens doorgegeven aan derden, behalve wat je browser standaard meestuurt bij het opvragen van de pagina.</p>

  <h2>5. Cookies en vergelijkbare technieken</h2>

  <p>Op deze website gebruiken wij uitsluitend:</p>

  <h3>Functionele/technische cookies</h3>

  <p>Deze zijn nodig om de website goed te laten werken.</p>

  <p>Voorbeelden:</p>
  <ul>
    <li>Cookies/technieken van onze hostingpartij (Netlify) om de site stabiel en veilig aan te bieden.</li>
    <li>Een kleine opslag in je browser (localStorage) om te onthouden dat je de cookie-melding hebt weggeklikt.</li>
  </ul>

  <h3>Geen analytische of marketingcookies</h3>

  <ul>
    <li>We gebruiken op dit moment géén Google Analytics, geen Meta-pixel, geen tracking- of advertentiecookies.</li>
    <li>Er vindt via de site geen bezoekersprofilering plaats.</li>
  </ul>

  <p>Omdat we alleen functionele cookies en vergelijkbare technieken gebruiken, is er volgens de wet geen expliciete cookietoestemming nodig. We informeren je met deze verklaring over het gebruik.</p>

  <h2>6. Hoe lang bewaren we gegevens?</h2>

  <p>We bewaren je gegevens niet langer dan nodig is:</p>

  <h3>Contactformulier / e-mail</h3>
  <p>
    <strong>Bewaartermijn:</strong> zolang dat nodig is om je vraag af te handelen en voor een korte periode daarna
    (bijvoorbeeld één schooljaar) als naslag.
  </p>

  <h3>Cookie-banner instelling (localStorage)</h3>
  <p>
    Wordt lokaal in je browser opgeslagen, alleen om de banner niet steeds opnieuw te tonen.<br />
    Je kunt dit zelf verwijderen door de browsergeschiedenis/cookies/localStorage te wissen.
  </p>

  <h2>7. Delen we gegevens met derden?</h2>

  <p>We delen je gegevens alleen met derden als dat noodzakelijk is voor het functioneren van de website of het beantwoorden van je bericht, bijvoorbeeld:</p>

  <ul>
    <li>Netlify – hostingprovider van de website en verwerker van het contactformulier.</li>
    <li>Eventueel een e-maildienst / mailserver van de oudervereniging of de school.</li>
  </ul>

  <p>Met deze partijen zijn (of worden) verwerkersafspraken gemaakt waar dat nodig is.
  We verkopen je gegevens nooit en verstrekken ze niet aan derden voor marketingdoeleinden.</p>

  <h2>8. Jouw rechten</h2>

  <p>Op basis van de privacywetgeving (AVG) heb je het recht om:</p>

  <ul>
    <li>Inzage te vragen in de persoonsgegevens die wij van je hebben</li>
    <li>Een correctie te laten doen als gegevens onjuist zijn</li>
    <li>In sommige gevallen te vragen om verwijdering van je gegevens</li>
    <li>Bezwaar te maken tegen bepaalde vormen van gebruik</li>
  </ul>

  <p>Je kunt een verzoek doen via:
    <a href="mailto:hallo@ovdespil.nl"> hallo@ovdespil.nl</a>
  </p>

  <p>Om misbruik te voorkomen, kunnen we je vragen om jezelf te identificeren voordat we het verzoek uitvoeren.</p>

  <h2>9. Wijzigingen in deze verklaring</h2>

  <p>We kunnen deze privacy- en cookieverklaring aanpassen als de site wijzigt (bijvoorbeeld wanneer we wél analytische cookies gaan gebruiken).
  De meest recente versie vind je altijd op deze pagina.</p>
</article>


        </section>

      </section>
    </>
  );
}
