"use client";

import { useEffect, useState } from "react";

export default function ContactSuccessModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Toon modal als we via /contact#success binnenkomen
    if (window.location.hash === "#success") {
      const showHandle = requestAnimationFrame(() => setVisible(true));

      const timeout = setTimeout(() => {
        setVisible(false);

        // Hash uit de URL halen, zodat je bij refresh niet opnieuw de modal krijgt
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname + window.location.search
        );
      }, 3000); // 3 seconden zichtbaar

      return () => {
        cancelAnimationFrame(showHandle);
        clearTimeout(timeout);
      };
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center pt-24 px-4">
      <div className="max-w-md w-full rounded-xl border border-green-600 bg-green-50 shadow-lg px-5 py-4">
        <h2 className="text-green-800 font-semibold mb-1">
          Bericht verzonden
        </h2>
        <p className="text-sm text-green-900">
          Dank je wel voor je bericht. We nemen zo snel mogelijk contact met je op.
        </p>
      </div>
    </div>
  );
}
