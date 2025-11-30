"use client";

import { useState } from "react";
import WebPageSchema from "@/components/WebPageSchema";

export const metadata = {
  title: "Contact – Oudervereniging De Spil",
  description:
    "Neem contact op met de oudervereniging van De Spil voor vragen, ideeën of hulp.",
};

export default function ContactPage() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error("Netlify Forms gaf een fout");
      }

      form.reset();
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

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

        {/* Contactformulier */}
        <section className="card space-y-4">
          <h2>Stuur ons een bericht</h2>
          <p className="text-sm text-[var(--ov-text-secondary)]">
            Velden met een * zijn verplicht.
          </p>

          
        </section>
      </section>
    </>
  );
}
