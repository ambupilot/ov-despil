// app/page.jsx
import WebPageSchema from "@/components/WebPageSchema";

export const metadata = {
  title: "Oudervereniging [Schoolnaam] – Samen voor de school",
  description:
    "Officiële website van de oudervereniging van [Schoolnaam]. Met nieuws, activiteiten en informatie voor ouders.",
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
