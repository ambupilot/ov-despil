import BudgetOverviewClient from "@/components/BudgetOverviewClient";
import WebPageSchema from "@/components/WebPageSchema";

export const metadata = {
  title: "Budgetoverzicht – Oudervereniging De Spil",
  description:
    "Inzicht in de uitgavenposten en inkomstenacties van de oudervereniging.",
};

export default function BudgetOverzichtPage() {
  return (
    <>
      <WebPageSchema
        title={metadata.title}
        description={metadata.description}
        type="WebPage"
      />
      <h3>Budget overzicht 2026 - 2027</h3>
      <section className="page-shell space-y-10">
        <BudgetOverviewClient />
      </section>
    </>
  );
}
