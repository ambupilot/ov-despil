// app/budget-overzicht/page.jsx
import WebPageSchema from "@/components/WebPageSchema";

export const metadata = {
  title: "Budgetoverzicht – Oudervereniging Basisschool De Spil - Nijmegen",
  description:
    "Inzicht in het jaarlijkse budget van de oudervereniging en de besteding van de ouderbijdrage.",
};

export default function BudgetOverzichtPage() {
  return (
    <>
      <WebPageSchema
        title={metadata.title}
        description={metadata.description}
        type="WebPage"
      />

      <h1 className="text-3xl font-bold mb-4">Budgetoverzicht</h1>
      <p className="text-lg text-gray-700 mb-6">
        Hieronder vind je het jaarlijkse budgetoverzicht van de
        oudervereniging. Transparantie is belangrijk – daarom delen we graag hoe
        de ouderbijdrage wordt ingezet.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Inkomsten</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Ouderbijdrage totaal</li>
          <li>Sponsoring &amp; donaties</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Uitgaven</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Schoolreisjes &amp; excursies</li>
          <li>Feestdagen &amp; vieringen</li>
          <li>Sport en spel</li>
          <li>Projectmateriaal</li>
          <li>Onvoorzien</li>
        </ul>
      </section>
    </>
  );
}
