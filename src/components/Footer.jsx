// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="border-t mt-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-10 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Oudervereniging Basisschool De Spil - Nijmegen.</p>
        <p className="mt-2">Samen voor een fijne schoolomgeving.</p>
      </div>
    </footer>
  );
}
