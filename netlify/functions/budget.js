// netlify/functions/budget.js

export default async function handler(event, context) {
  const sheetUrl = process.env.BUDGET_SHEET_CSV_URL;

  if (!sheetUrl) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "BUDGET_SHEET_CSV_URL is niet ingesteld in Netlify.",
      }),
    };
  }

  try {
    const response = await fetch(sheetUrl);
    if (!response.ok) {
      throw new Error(`Sheet fetch failed: ${response.status}`);
    }

    const csvText = await response.text();

    // CSV parsen
    const lines = csvText.trim().split(/\r?\n/);
    const [headerLine, ...dataLines] = lines;
    const headers = headerLine.split(",");

    const idxGroep = headers.indexOf("groep");
    const idxTotaal = headers.indexOf("totaal_budget");
    const idxUitgaven = headers.indexOf("uitgaven");
    const idxInkomsten = headers.indexOf("inkomsten");

    const werkgroepen = dataLines
      .map((line) => line.split(","))
      .filter((cols) => cols[idxGroep])
      .map((cols) => {
        const groep = cols[idxGroep];
        const totaalBudget = parseFloat(cols[idxTotaal] || "0");
        const uitgaven = parseFloat(cols[idxUitgaven] || "0");
        const inkomsten = parseFloat(cols[idxInkomsten] || "0");

        const nettoBesteed = Math.max(0, uitgaven - inkomsten);
        const beschikbaar = totaalBudget + inkomsten;
        const resterend = beschikbaar - uitgaven;

        const percentage =
          beschikbaar > 0
            ? Math.min(100, (nettoBesteed / beschikbaar) * 100)
            : 0;

        return {
          groep,
          totaalBudget,
          uitgaven,
          inkomsten,
          nettoBesteed,
          resterend,
          percentage: Math.round(percentage),
        };
      });

    const totaalBudget = werkgroepen.reduce(
      (s, w) => s + w.totaalBudget,
      0
    );
    const totaalUitgaven = werkgroepen.reduce(
      (s, w) => s + w.uitgaven,
      0
    );
    const totaalInkomsten = werkgroepen.reduce(
      (s, w) => s + w.inkomsten,
      0
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        totaalBudget,
        totaalUitgaven,
        totaalInkomsten,
        werkgroepen,
      }),
      headers: { "Content-Type": "application/json" },
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Kon budgetgegevens niet ophalen.",
      }),
      headers: { "Content-Type": "application/json" },
    };
  }
}
