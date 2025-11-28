// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface-muted mt-12">
      <div className="page-shell text-center text-sm text-text-subtle">
        <p>© {new Date().getFullYear()} Oudervereniging [Schoolnaam]</p>
        <p className="mt-2">Samen voor een fijne schoolomgeving</p>
      </div>
    </footer>
  );
}
