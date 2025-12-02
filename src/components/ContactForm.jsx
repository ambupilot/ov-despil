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

  // === SUCCES-MODAL GEDRAG ===
  useEffect(() => {
    if (status !== "success") return;

    // DEV: modal blijft permanent staan
    if (process.env.NODE_ENV === "development") {
      setShowModal(true);
      return;
    }

    // PROD: modal 3 seconden tonen
    setShowModal(true);
    const timeout = setTimeout(() => {
      setShowModal(false);
      setStatus("idle");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [status]);

  return (
    <>
      {/* Succes-modal: inline styles zodat hij altijd gecentreerd en groen is */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <div
            style={{
              maxWidth: "28rem",
              width: "100%",
              padding: "1.25rem 1.5rem",
              borderRadius: "1rem",
              border: "2px solid #15803d", // donkergroen
              backgroundColor: "#dcfce7", // lichtgroen
              boxShadow: "0 20px 45px rgba(0,0,0,0.18)",
              textAlign: "center",
              color: "#14532d",
            }}
          >
            <div
              style={{
                margin: "0 auto 0.75rem",
                width: "3rem",
                height: "3rem",
                borderRadius: "9999px",
                backgroundColor: "#bbf7d0", // iets donkerder groen
                border: "1px solid #4ade80",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.75rem",
                fontWeight: 700,
              }}
            >
              ✓
            </div>

            <h2
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                marginBottom: "0.25rem",
              }}
            >
              Bericht verzonden
            </h2>

            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.5,
              }}
            >
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
<br />
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
<br />
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
<br />
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
<br />
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
