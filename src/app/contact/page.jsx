import WebPageSchema from "@/components/WebPageSchema";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact – Oudervereniging De Spil",
  description:
    "Neem contact op met de oudervereniging van De Spil voor vragen, ideeën of hulp.",
};

export default function ContactPage() {
  return (
    <>
      <WebPageSchema
        title={metadata.title}
        description={metadata.description}
        type="ContactPage"
      />

      <section className="space-y-8">
        {/* Intro + contactinfo */}
        <section className="card space-y-4">
          <h1>Contact met de oudervereniging</h1>
          <p>
            Heb je vragen, ideeën of wil je meehelpen bij activiteiten? Neem dan
            gerust contact met ons op via het formulier hieronder.
          </p>

          <div className="mt-4 space-y-1 text-sm text-[var(--ov-text-secondary)]">
            <p>
              <strong>E-mail:</strong> oudervereniging@despil.nl
            </p>
            <p>
              <strong>School:</strong> Basisschool De Spil
            </p>
          </div>
        </section>

        <ContactForm />
      </section>
    </>
  );
}
