// src/app/budget-overzicht/page.jsx
import WebPageSchema from "@/components/WebPageSchema";
import BudgetOverviewClient from "@/components/BudgetOverviewClient";

export const metadata = {
  title: "Budgetoverzicht – Oudervereniging De Spil",
  description:
    "Inzicht in het budget van de werkgroepen en de besteding van de ouderbijdrage.",
};

export default function BudgetOverzichtPage() {
  return (
    <>
      <WebPageSchema
        title={metadata.title}
        description={metadata.description}
        type="WebPage"
      />

      <BudgetOverviewClient />
    </>
  );
}
