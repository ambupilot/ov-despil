// app/page.jsx
import WebPageSchema from "@/components/WebPageSchema";

export const metadata = {
  title: "Oudervereniging Basisschool De Spil - Nijmegen",
  description:
    "Officiële website van de oudervereniging van Basisschool De Spil."
};

export default function HomePage() {
  return (
    <>
      <WebPageSchema
        title={metadata.title}
        description={metadata.description}
        type="WebPage"
      />

      <h1 className="text-3xl font-bold mb-4">
        Welkom bij de Oudervereniging
      </h1>
      <p className="text-lg text-gray-700">
        Samen zorgen we voor een fijne, veilige en betrokken schoolomgeving
        voor alle kinderen. Op deze website vind je informatie over activiteiten,
        de ouderbijdrage en ons jaarlijkse budgetoverzicht.
      </p>
    </>
  );
}
