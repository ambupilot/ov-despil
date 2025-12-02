"use client";

import { useEffect, useState } from "react";

// ----------------------------------------
// Progressbar kleuren op basis van type + percentage
// ----------------------------------------
function getProgressColor(type, percentage) {
  // Uitgaven: hoe voller, hoe kritischer
  if (type === "uitgaven") {
    if (percentage < 50) return "#55B24F"; // groen
    if (percentage < 80) return "#17A2B8"; // cyan
    return "rgba(165,147,124,1)"; // bruin als het echt vol loopt
  }

  // Inkomsten: hoe voller, hoe beter
  if (type === "inkomsten") {
    if (percentage < 50) return "rgba(165,147,124,1)"; // bruin = begin
    if (percentage < 80) return "#17A2B8"; // cyan
    return "#55B24F"; // groen = doel in zicht / gehaald
  }

  return "#6b7280";
}

// Percentage veilig opnieuw berekenen in de client
function computePercentage(w) {
  const totaal = Number(w.totaalBudget) || 0;
  const uitgaven = Number(w.uitgaven) || 0;
  const inkomsten = Number(w.inkomsten) || 0;

  if (totaal <= 0) return 0;

  if (w.type === "uitgaven") {
    const pct = (uitgaven / totaal) * 100;
    return Math.max(0, Math.min(100, Math.round(pct)));
  }

  if (w.type === "inkomsten") {
    const pct = (inkomsten / totaal) * 100;
    return Math.max(0, Math.min(100, Math.round(pct)));
  }

  return 0;
}

// ----------------------------------------
// Filter & sort helpers
// ----------------------------------------
const FILTERS = {
  ALLES: "alles",
  UITGAVEN: "uitgaven",
  INKOMSTEN: "inkomsten",
};

const SORTS = {
  ALFA: "alphabet",
  PERCENT: "percentage",
  REST: "resterend",
};

export default function BudgetOverviewClient() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [filter, setFilter] = useState(FILTERS.ALLES);
  const [sort, setSort] = useState(SORTS.ALFA);

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

  // ----------------------------------------
  // BASIS ERROR & LOADING UI
  // ----------------------------------------

  if (loading) {
    return (
      <section className="card">
        <p>Budgetgegevens laden…</p>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section className="card">
        <p>{error || "Onbekende fout bij laden."}</p>
      </section>
    );
  }

  const { werkgroepen } = data;

  // ----------------------------------------
  // Totalen (bovenaan)
  // ----------------------------------------

  const totaalUitgavenBudget = werkgroepen
    .filter((w) => w.type === "uitgaven")
    .reduce((s, w) => s + (Number(w.totaalBudget) || 0), 0);

  const totaalUitgaven = werkgroepen
    .filter((w) => w.type === "uitgaven")
    .reduce((s, w) => s + (Number(w.uitgaven) || 0), 0);

  const totaalInkomstenDoel = werkgroepen
    .filter((w) => w.type === "inkomsten")
    .reduce((s, w) => s + (Number(w.totaalBudget) || 0), 0);

  const totaalInkomsten = werkgroepen
    .filter((w) => w.type === "inkomsten")
    .reduce((s, w) => s + (Number(w.inkomsten) || 0), 0);

  // ----------------------------------------
  // FILTEREN
  // ----------------------------------------

  let result = [...werkgroepen];

  if (filter === FILTERS.UITGAVEN) {
    result = result.filter((w) => w.type === "uitgaven");
  }

  if (filter === FILTERS.INKOMSTEN) {
    result = result.filter((w) => w.type === "inkomsten");
  }

  // ----------------------------------------
  // SORTEREN
  // ----------------------------------------

  if (sort === SORTS.ALFA) {
    result.sort((a, b) => a.groep.localeCompare(b.groep));
  }

  if (sort === SORTS.PERCENT) {
    result.sort(
      (a, b) => computePercentage(b) - computePercentage(a)
    );
  }

  if (sort === SORTS.REST) {
    result.sort(
      (a, b) => (Number(a.resterend) || 0) - (Number(b.resterend) || 0)
    );
  }

  // ----------------------------------------
  // RENDER
  // ----------------------------------------

  return (
    <section className="space-y-10">
      {/* TOTALEN OVERZICHT */}
      {/*}
      <section className="card space-y-4">
        <h1>Budgetoverzicht</h1>
        <p>Hieronder vind je een samenvatting van alle posten.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          <div className="p-4 rounded-xl bg-[var(--surface-muted)]">
            <h3 className="font-semibold text-sm text-[var(--text-secondary)]">
              Uitgavenbudget
            </h3>
            <p className="text-xl font-bold">
              €{totaalUitgavenBudget.toFixed(2)}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[var(--surface-muted)]">
            <h3 className="text-sm font-semibold text-[var(--text-secondary)]">
              Uitgaven (t/m nu)
            </h3>
            <p className="text-xl font-bold">
              €{totaalUitgaven.toFixed(2)}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[var(--surface-muted)]">
            <h3 className="text-sm font-semibold text-[var(--text-secondary)]">
              Inkomsten doel
            </h3>
            <p className="text-xl font-bold">
              €{totaalInkomstenDoel.toFixed(2)}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[var(--surface-muted)]">
            <h3 className="text-sm font-semibold text-[var(--text-secondary)]">
              Inkomsten (t/m nu)
            </h3>
            <p className="text-xl font-bold">
              €{totaalInkomsten.toFixed(2)}
            </p>
          </div>
        </div>
      </section>*/}

      {/* FILTERS + SORTERING */}
      <section className="flex flex-wrap gap-4 card">
        <div className="flex gap-2">
          <button
            onClick={() => setFilter(FILTERS.ALLES)}
            className={`px-3 py-1 rounded-md text-sm ${
              filter === FILTERS.ALLES
                ? "bg-[var(--brand-primary-soft)] text-[var(--brand-primary-strong)]"
                : "bg-[var(--surface-muted)]"
            }`}
          >
            Alles
          </button>

          <button
            onClick={() => setFilter(FILTERS.UITGAVEN)}
            className={`px-3 py-1 rounded-md text-sm ${
              filter === FILTERS.UITGAVEN
                ? "bg-red-100 text-red-700"
                : "bg-[var(--surface-muted)]"
            }`}
          >
            Uitgaven
          </button>

          <button
            onClick={() => setFilter(FILTERS.INKOMSTEN)}
            className={`px-3 py-1 rounded-md text-sm ${
              filter === FILTERS.INKOMSTEN
                ? "bg-green-100 text-green-700"
                : "bg-[var(--surface-muted)]"
            }`}
          >
            Inkomsten
          </button>
        </div>

        <div className="flex gap-2 ml-auto">
          <select
            onChange={(e) => setSort(e.target.value)}
            value={sort}
            className="px-3 py-1 rounded-md bg-[var(--surface-muted)] text-sm"
          >
            <option value={SORTS.ALFA}>Sorteer: alfabetisch</option>
            <option value={SORTS.PERCENT}>Sorteer: percentage</option>
            <option value={SORTS.REST}>Sorteer: resterend</option>
          </select>
        </div>
      </section>

      {/* WERKGROEPEN LIJST */}
      <section className="space-y-6">
        {result.map((w) => {
          const percentage = computePercentage(w);

          return (
            <article key={w.groep} className="card space-y-4">
              <div className="flex justify-between items-start">
                <h2>{w.groep}</h2>
                <span
                  className="text-xs px-2 py-1 rounded-md"
                  style={{
                    backgroundColor:
                      w.type === "uitgaven"
                        ? "rgba(255, 0, 0, 0.1)"
                        : "rgba(0, 128, 0, 0.1)",
                    color: w.type === "uitgaven" ? "#dc2626" : "#15803d",
                  }}
                >
                  {w.type === "uitgaven" ? "Uitgavenpost" : "Inkomstenpost"}
                </span>
              </div>

              {w.type === "uitgaven" ? (
                <p className="text-sm">
                  Besteed: €{(Number(w.uitgaven) || 0).toFixed(2)} · Resterend: €
                  {(Number(w.resterend) || 0).toFixed(2)}
                </p>
              ) : (
                <p className="text-sm">
                  Inkomsten: €{(Number(w.inkomsten) || 0).toFixed(2)} · Nog nodig: €
                  {(Number(w.resterend) || 0).toFixed(2)}
                </p>
              )}

              {/* Progressbar */}
              <div className="budget-bar-track">
  <div
    className="budget-bar-fill"
    style={{
      width: `${percentage}%`,
      backgroundColor: getProgressColor(w.type, percentage),
    }}
  />
</div>


              <p className="text-xs text-[var(--text-subtle)]">
                {percentage}% van het doel is{" "}
                {w.type === "uitgaven" ? "besteed" : "behaald"}.
              </p>
            </article>
          );
        })}
      </section>
    </section>
  );
}
