"use client";

import { useEffect, useMemo, useState } from "react";
import { ouderbijdrageConfig } from "@/data/ouderbijdrageConfig";

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function OuderbijdrageButton({ className = "" }) {
  const urls = ouderbijdrageConfig?.paymentUrls || [];
  const hasUrls = urls.length > 0;

  const storageKey = useMemo(() => "ovdespil_ouderbijdrage_payurl", []);
  const [payUrl, setPayUrl] = useState(null);

  useEffect(() => {
    if (!hasUrls) return;

    const existing = sessionStorage.getItem(storageKey);
    if (existing && urls.includes(existing)) {
      setPayUrl(existing);
      return;
    }

    const chosen = pickRandom(urls);
    sessionStorage.setItem(storageKey, chosen);
    setPayUrl(chosen);
  }, [hasUrls, storageKey, urls]);

  if (!hasUrls) {
    return <span>geen url ingesteld</span>;
  }

  return (
    <a
      href={payUrl || urls[0]}
      className={`button-primary ${className}`}
      target="_blank"
      rel="noreferrer"
    >
      {ouderbijdrageConfig.buttonLabel || "Betaal"}
    </a>
  );
}