// src/components/SponsoractieButton.jsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { sponsoractieConfig } from "@/data/sponsoractieConfig";

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function SponsoractieButton({ className = "" }) {
  const urls = sponsoractieConfig?.paymentUrls || [];

  // fallback: als er (nog) geen links zijn gezet
  const hasUrls = urls.length > 0;

  const storageKey = useMemo(() => "ovdespil_sponsoractie_payurl", []);
  const [payUrl, setPayUrl] = useState(null);

  useEffect(() => {
    if (!hasUrls){
        <p>Geen URL's ingesteld</p>
    } return;

    // Houd dezelfde link gedurende de browser-sessie aan (stabieler bij refresh)
    const existing = sessionStorage.getItem(storageKey);
    if (existing && urls.includes(existing)) {
      setPayUrl(existing);
      return;
    }

    const chosen = pickRandom(urls);
    sessionStorage.setItem(storageKey, chosen);
    setPayUrl(chosen);
  }, [hasUrls, storageKey, urls]);

  if (!hasUrls) return null;

  return (
    <a
      href={payUrl || urls[0]}
      className={`button-primary ${className}`}
      target="_blank"
      rel="noreferrer"
    >
      {sponsoractieConfig.buttonLabel || "Doneer"}
    </a>
  );
}