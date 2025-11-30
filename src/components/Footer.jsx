// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] footer-surface-muted mt-12">
      <div className="page-shell text-center text-sm text-[var(--text-subtle)]">
        <p><strong>© {new Date().getFullYear()} Oudervereniging De Spil</strong></p>
        <p className="mt-2">Samen voor een fijne schooltijd</p>
      </div>
    </footer>
  );
}
