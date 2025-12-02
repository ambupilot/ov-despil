"use client";

import { useEffect, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [showModal, setShowModal] = useState(false);

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

  // Toon de succes-modal 3 seconden bij status "success"
  useEffect(() => {
    if (status !== "success") return;

    setShowModal(true);
    const timeout = setTimeout(() => {
      setShowModal(false);
      setStatus("idle");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [status]);

  return (
    <>
      {/* Succes-modal */}
      {showModal && (
        <div className="fixed inset-0 z-[80] flex items-start justify-center pt-28 px-4">
          <div className="max-w-md w-full rounded-xl border border-green-700 bg-green-50 shadow-xl px-5 py-4">
            <h2 className="text-green-800 font-semibold mb-1">
              Bericht verzonden
            </h2>
            <p className="text-sm text-green-900">
              Bedankt voor je bericht. We nemen zo snel mogelijk contact met je
              op.
            </p>
          </div>
        </div>
      )}

      <section className="card space-y-4">
        <h2>Stuur ons een bericht</h2>
        <p className="text-sm text-[var(--text-secondary)]">
          Velden met een * zijn verplicht.
        </p>

        <form name="contact" onSubmit={handleSubmit} className="space-y-4">
          {/* Moet overeenkomen met static form in __forms.html */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot tegen bots */}
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
                className="rounded-md border border-[var(--border-subtle)] px-3 py-2 text-sm bg-white"
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
                className="rounded-md border border-[var(--border-subtle)] px-3 py-2 text-sm bg-white"
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
              className="rounded-md border border-[var(--border-subtle)] px-3 py-2 text-sm bg-white"
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
              className="rounded-md border border-[var(--border-subtle)] px-3 py-2 text-sm bg-white resize-vertical"
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

            {status === "error" && (
              <p className="text-xs text-red-600">
                Er ging iets mis bij het versturen. Probeer het later nog een
                keer.
              </p>
            )}
          </div>
        </form>
      </section>
    </>
  );
}
