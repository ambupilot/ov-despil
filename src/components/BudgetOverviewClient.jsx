// src/components/BudgetOverviewClient.jsx
"use client";

import { useEffect, useState } from "react";

export default function BudgetOverviewClient() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/.netlify/functions/budget");
        if (!res.ok) throw new Error("Request failed");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
        setError("Kon budgetgegevens niet laden.");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) {
    return (
      <section className="card">
        <p>Budgetgegevens worden geladen…</p>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section className="card">
        <p>{error || "Er is een onbekende fout opgetreden."}</p>
      </section>
    );
  }

  const { totaalBudget, totaalUitgaven, totaalInkomsten, werkgroepen } = data;

  return (
    <section className="space-y-8">
      {/* Totaaloverzicht */}
      <section className="card space-y-2">
        <h1>Budgetoverzicht</h1>
        <p>
          Hieronder zie je het totale budget van de oudervereniging en de
          verdeling per werkgroep.
        </p>
        <p>
          <strong>Totaal budget:</strong> €{totaalBudget.toFixed(2)}
        </p>
        <p>
          <strong>Totaal uitgaven:</strong> €{totaalUitgaven.toFixed(2)}
        </p>
        <p>
          <strong>Totaal inkomsten:</strong> €{totaalInkomsten.toFixed(2)}
        </p>
        <p>
          <strong>Netto besteed:</strong> €
          {(totaalUitgaven - totaalInkomsten).toFixed(2)}
        </p>
      </section>

      {/* Per werkgroep */}
      <section className="space-y-4">
        {werkgroepen.map((w) => (
          <article key={w.groep} className="card space-y-2">
            <h2>{w.groep}</h2>
            <p>
              Budget: €{w.totaalBudget.toFixed(2)} · Uitgaven: €
              {w.uitgaven.toFixed(2)} · Inkomsten: €
              {w.inkomsten.toFixed(2)}
            </p>
            <p>
              Netto besteed: €{w.nettoBesteed.toFixed(2)} · Resterend: €
              {w.resterend.toFixed(2)}
            </p>

            {/* Progressbalk */}
            <div className="h-2 rounded-full bg-[var(--ov-surface-muted)] overflow-hidden">
              <div
                className="h-full"
                style={{
                  width: `${w.percentage}%`,
                  background:
                    "linear-gradient(90deg, var(--ov-brand-primary-soft), var(--ov-brand-primary-strong))",
                }}
              />
            </div>
            <p className="text-xs text-[var(--ov-text-subtle)]">
              {w.percentage}% van het beschikbare budget is netto besteed
              (uitgaven minus inkomsten).
            </p>
          </article>
        ))}
      </section>
    </section>
  );
}
