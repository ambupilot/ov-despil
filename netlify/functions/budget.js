// netlify/functions/budget.js

export default async function handler(event, context) {
  const sheetUrl = process.env.BUDGET_SHEET_CSV_URL;

  if (!sheetUrl) {
    return new Response(
      JSON.stringify({
        error: "BUDGET_SHEET_CSV_URL is niet ingesteld in Netlify.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const response = await fetch(sheetUrl);
    const csvText = await response.text();

    const lines = csvText.trim().split(/\r?\n/);
    const [headerLine, ...dataLines] = lines;
    const headers = headerLine.split(",");

    const idxType = headers.indexOf("type");
    const idxGroep = headers.indexOf("groep");
    const idxTotaal = headers.indexOf("totaal_budget");
    const idxUitgaven = headers.indexOf("uitgaven");
    const idxInkomsten = headers.indexOf("inkomsten");

    const werkgroepen = dataLines
      .map((line) => line.split(","))
      .filter((cols) => cols[idxGroep])
      .map((cols) => {
        const type = cols[idxType] || "uitgaven";
        const groep = cols[idxGroep];
        const totaalBudget = parseFloat(cols[idxTotaal] || "0");
        const uitgaven = parseFloat(cols[idxUitgaven] || "0");
        const inkomsten = parseFloat(cols[idxInkomsten] || "0");

        let percentage = 0;
        let resterend = 0;
        let netto = 0;

        if (type === "uitgaven") {
          netto = uitgaven;
          resterend = totaalBudget - uitgaven;
          percentage =
            totaalBudget > 0
              ? Math.min(100, (uitgaven / totaalBudget) * 100)
              : 0;
        }

        if (type === "inkomsten") {
          netto = inkomsten;
          resterend = totaalBudget - inkomsten;
          percentage =
            totaalBudget > 0
              ? Math.min(100, (inkomsten / totaalBudget) * 100)
              : 0;
        }

        return {
          type,
          groep,
          totaalBudget,
          uitgaven,
          inkomsten,
          netto,
          resterend,
          percentage: Math.round(percentage),
        };
      });

    return new Response(JSON.stringify({ werkgroepen }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Kon budgetgegevens niet ophalen." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
