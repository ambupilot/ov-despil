// app/page.jsx
import WebPageSchema from "@/components/WebPageSchema";
import Link from "next/link";


export const metadata = {
  title: "Oudervereniging Basisschool De spil - Nijmegen",
  description:
    "Officiële website van de oudervereniging van basisschool De Spil in Nijmegen. Samen zorgen we voor een fijne, veilige en betrokken schoolomgeving voor alle kinderen.",
};

export default function HomePage() {
  return (
    <>
      <WebPageSchema
        title={metadata.title}
        description={metadata.description}
        type="WebPage"
      />

<section className="bg-white py-10 md:py-14">
      <div className="page-section">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-condensed text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Samen maken we de schooltijd van uw kind nóg mooier
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-700">
            De oudervereniging (OV) bestaat uit een groep betrokken ouders die zich vrijwillig inzet
            om van elk schooljaar een leuke, leerzame en feestelijke periode te maken. We
            ondersteunen de school bij het organiseren van activiteiten, vieringen en bijzondere
            momenten die bijdragen aan een warm en rijk schoolklimaat voor alle kinderen.
          </p>

          <p className="mt-3 text-base leading-relaxed text-gray-700">
            Denk aan evenementen zoals Sinterklaas, de Kerstviering, Carnaval, de Koningsspelen, de
            Kinderboekenweek, de jaarafsluiting én natuurlijk de schoolreisjes. Deze activiteiten
            worden niet door de overheid vergoed; dankzij de inzet van de oudervereniging en de
            vrijwillige ouderbijdrage kunnen ze wél plaatsvinden.
          </p>

          <h3 className="mt-6 font-condensed text-xl font-semibold tracking-tight text-gray-900">
            Wat doet de oudervereniging?
          </h3>

          <ul className="mt-3 space-y-2 text-base text-gray-700 list-disc list-inside">
            <li>Organiseren en ondersteunen van feestdagen en themaweken</li>
            <li>Beheren van de vrijwillige ouderbijdrage</li>
            <li>Mogelijk maken van schoolreisjes en excursies</li>
            <li>Stimuleren van een goede samenwerking tussen ouders en school</li>
            <li>Bijdragen aan een fijne, veilige en inclusieve sfeer op school</li>
          </ul>

          <h3 className="mt-6 font-condensed text-xl font-semibold tracking-tight text-gray-900">
            Wil je meedenken of meedoen?
          </h3>

          <p className="mt-3 text-base leading-relaxed text-gray-700">
            De oudervereniging is altijd op zoek naar enthousiaste ouders die graag een steentje
            willen bijdragen. Heb je ideeën, wil je helpen bij activiteiten, of wil je plaatsnemen
            in de oudervereniging?
          </p>

          <p className="mt-3 text-base leading-relaxed text-gray-700">
            Neem dan gerust contact met ons op via de{" "}
            <Link
              href="/contact"
              className="font-medium text-blue-700 underline underline-offset-2 hover:text-blue-900"
            >
              contactpagina
            </Link>
            .
          </p>

          <p className="mt-3 text-sm text-gray-600">
            Noot: alleen ouders/verzorgers van kinderen die op onze school zitten, kunnen
            plaatsnemen in de oudervereniging.
          </p>

          <p className="mt-4 text-base font-medium text-gray-800">
            Samen zorgen we voor bijzondere momenten die kinderen nooit meer vergeten.
          </p>
        </div>
      </div>
    </section>    </>
  );
}
