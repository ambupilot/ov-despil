// app/page.jsx
import WebPageSchema from "@/components/WebPageSchema";

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

      <section className="card space-y-4">
        <h1>Welkom bij de Oudervereniging</h1>
        <p>
          Samen zorgen we voor een fijne, veilige en betrokken schoolomgeving
          voor alle kinderen. Op deze website vind je informatie over
          activiteiten, de ouderbijdrage en ons jaarlijkse budgetoverzicht.
        </p>
      </section>
    </>
  );
}
