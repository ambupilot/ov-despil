// components/Header.jsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-20">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-700">
          Oudervereniging
        </Link>

        <nav className="flex gap-6 text-gray-700">
          <Link href="/ouderbijdrage">Ouderbijdrage</Link>
          <Link href="/budget-overzicht">Budget</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
