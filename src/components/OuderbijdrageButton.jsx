// src/components/OuderbijdrageButton.jsx
import { ouderbijdrageConfig } from "@/data/ouderbijdrageConfig";

export default function OuderbijdrageButton({
  size = "default",      // "default" | "small"
  showAmount = false,    // toon "€45,-" naast label
  className = "",        // extra classes (bv. voor header)
}) {
  const {
    paymentUrl,
    paymentButtonLabel,
    contributionAmount,
  } = ouderbijdrageConfig || {};

  if (!paymentUrl) {
    // Niks renderen als de URL niet is ingesteld
    return null;
  }

  let extraSizeClasses = "";
  if (size === "small") {
    extraSizeClasses = "px-3 py-1 text-xs"; // beetje compacter voor in header
  }

  return (
    <a
      href={paymentUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`button-primary ${extraSizeClasses} ${className}`}
    >
      {paymentButtonLabel || "Betaal de ouderbijdrage"}
    </a>
  );
}
