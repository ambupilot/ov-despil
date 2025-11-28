// netlify/functions/budget.js

export default async function handler(req, res) {
  const sheetUrl = process.env.BUDGET_SHEET_CSV_URL;

  if (!sheetUrl) {
    return res.status(500).json({
      error: "BUDGET_SHEET_CSV_URL is niet ingesteld in Netlify.",
    });
  }

  try {
    const response = await fetch(sheetUrl);
    if (!response.ok) {
      throw new Error(`Sheet fetch failed: ${response.status}`);
    }

    const csvText = await response.text();

    // CSV parsen (heel eenvoudig, voldoende voor deze use case)
    const lines = csvText.trim().split(/\r?\n/);
    const [headerLine, ...dataLines] = lines;
    const headers = headerLine.split(",");

    const idxGroep = headers.indexOf("groep");
    const idxTotaal = headers.indexOf("totaal_budget");
    const idxUitgaven = headers.indexOf("uitgaven");
    const idxInkomsten = headers.indexOf("inkomsten");

    const werkgroepen = dataLines
      .map((line) => line.split(","))
      .filter((cols) => cols[idxGroep]) // filter lege regels
      .map((cols) => {
        const groep = cols[idxGroep];
        const totaalBudget = parseFloat(cols[idxTotaal] || "0");
        const uitgaven = parseFloat(cols[idxUitgaven] || "0");
        const inkomsten = parseFloat(cols[idxInkomsten] || "0");

        const nettoBesteed = Math.max(0, uitgaven - inkomsten);
        const beschikbaar = totaalBudget + inkomsten;
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
          resterend: beschikbaar - uitgaven,
          percentage: Math.round(percentage),
        };
      });

    const totaalBudget = werkgroepen.reduce(
      (sum, w) => sum + w.totaalBudget,
      0
    );
    const totaalUitgaven = werkgroepen.reduce(
      (sum, w) => sum + w.uitgaven,
      0
    );
    const totaalInkomsten = werkgroepen.reduce(
      (sum, w) => sum + w.inkomsten,
      0
    );

    return res.status(200).json({
      totaalBudget,
      totaalUitgaven,
      totaalInkomsten,
      werkgroepen,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: "Kon budgetgegevens niet ophalen.",
    });
  }
}
