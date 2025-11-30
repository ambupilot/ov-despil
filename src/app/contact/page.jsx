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

          <form
            name="contact"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Moet overeenkomen met static form in __forms.html */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Honeypot tegen bots (zelfde naam als in __forms.html) */}
            <p className="hidden">
              <label>
                Laat dit veld leeg als je een mens bent:{" "}
                <input name="bot-field" />
              </label>
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {/* Naam */}
              <div className="flex flex-col gap-1">
                <label htmlFor="naam" className="text-sm font-medium">
                  Naam *
                </label>
                <input
                  id="naam"
                  name="naam"
                  type="text"
                  required
                  className="rounded-md border border-[var(--ov-border-subtle)] px-3 py-2 text-sm bg-white"
                />
              </div>

              {/* Telefoon */}
              <div className="flex flex-col gap-1">
                <label htmlFor="telefoon" className="text-sm font-medium">
                  Telefoon
                </label>
                <input
                  id="telefoon"
                  name="telefoon"
                  type="tel"
                  className="rounded-md border border-[var(--ov-border-subtle)] px-3 py-2 text-sm bg-white"
                />
              </div>
            </div>

            {/* E-mail */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm font-medium">
                E-mail *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-md border border-[var(--ov-border-subtle)] px-3 py-2 text-sm bg-white"
              />
            </div>

            {/* Bericht */}
            <div className="flex flex-col gap-1">
              <label htmlFor="bericht" className="text-sm font-medium">
                Bericht *
              </label>
              <textarea
                id="bericht"
                name="bericht"
                rows={5}
                required
                className="rounded-md border border-[var(--ov-border-subtle)] px-3 py-2 text-sm bg-white resize-vertical"
              />
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                type="submit"
                className="button-primary"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Versturen…" : "Verstuur bericht"}
              </button>

              {status === "success" && (
                <p className="text-xs text-green-600">
                  Bedankt! Je bericht is verzonden.
                </p>
              )}
              {status === "error" && (
                <p className="text-xs text-red-600">
                  Er ging iets mis bij het versturen. Probeer het later nog
                  een keer.
                </p>
              )}
            </div>
          </form>
        </section>
      </section>
    </>
  );
}
