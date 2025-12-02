"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "ovdespil_cookie_banner_dismissed_v1";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const dismissed = window.localStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  function handleDismiss() {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, "true");
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner-wrapper">
      <div className="page-shell pb-4">
        <div className="cookie-banner">
          <div className="cookie-text">
            <p>
              We gebruiken alleen functionele cookies en vergelijkbare technieken
              om deze website goed te laten werken. Er worden geen
              tracking- of marketingcookies geplaatst.
            </p>
            <p className="cookie-sub">
              Meer informatie vind je in onze{" "}
              <Link href="/privacy" className="cookie-link">
                privacy- en cookieverklaring
              </Link>
              .
            </p>
          </div>
          <div className="cookie-actions">
            <button
              type="button"
              onClick={handleDismiss}
              className="button-primary"
            >
              Oké, duidelijk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
