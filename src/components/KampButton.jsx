"use client";

import { useEffect, useMemo, useState } from "react";
import { kampConfig } from "@/data/kampConfig";

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function KampButton({ className = "" }) {
  const urls = kampConfig?.paymentUrls || [];
  const hasUrls = urls.length > 0;

  const storageKey = useMemo(() => "ovdespil_sponsoractie_payurl", []);
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
      {kampConfig.buttonLabel || "Doneer"}
    </a>
  );
}