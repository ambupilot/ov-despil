// app/contact/page.jsx
import WebPageSchema from "@/components/WebPageSchema";

export const metadata = {
  title: "Contact – Oudervereniging Basisschool De Spil - Nijmegen",
  description:
    "Neem contact op met de oudervereniging van [Schoolnaam].",
};

export default function ContactPage() {
  return (
    <>
      <WebPageSchema
        title={metadata.title}
        description={metadata.description}
        type="ContactPage"
      />

      <h1 className="text-3xl font-bold mb-4">Contact</h1>

      <p className="text-lg text-gray-700">
        Heb je vragen, ideeën of wil je meedenken? Neem dan gerust contact met
        ons op.
      </p>

      <div className="mt-6 space-y-2 text-gray-700">
        <p>
          <strong>E-mail:</strong> oudervereniging@school.nl
        </p>
        <p>
          <strong>Adres:</strong> [Schoolnaam], Voorbeeldstraat 1, 1234 AB
          Nijmegen
        </p>
      </div>
    </>
  );
}
