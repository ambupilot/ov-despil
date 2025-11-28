// app/ouderbijdrage/page.jsx
import WebPageSchema from "@/components/WebPageSchema";

export const metadata = {
  title: "Ouderbijdrage – Oudervereniging Basisschool De Spil - Nijmegen",
  description:
    "Uitleg over de vrijwillige ouderbijdrage en waarvoor deze wordt gebruikt.",
};

export default function OuderbijdragePage() {
  return (
    <>
      <WebPageSchema
        title={metadata.title}
        description={metadata.description}
        type="WebPage"
      />

      <h1 className="text-3xl font-bold mb-4">Ouderbijdrage</h1>
      <p className="text-lg text-gray-700 mb-4">
        De ouderbijdrage is een vrijwillige bijdrage waarmee de oudervereniging
        activiteiten mogelijk maakt die niet door de overheid worden
        gefinancierd.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Waarvoor wordt de bijdrage gebruikt?
      </h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Schoolreisjes en excursies</li>
        <li>Kerst- en Sinterklaasactiviteiten</li>
        <li>Sportdagen en buitenspeeldagen</li>
        <li>Extra materialen voor projecten</li>
      </ul>
    </>
  );
}
