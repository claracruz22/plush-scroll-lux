import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const links = [
    { href: "/#colecoes", label: "Coleções" },
    { href: "/#categorias", label: "Categorias" },
    { href: "/#filosofia", label: "Filosofia" },
    { href: "/sob-medida", label: "Sob Medida" },
  ];
  return (
    <header className="sticky top-0 z-40 bg-ivory/80 backdrop-blur border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl tracking-[0.3em]">MAISON</Link>
        <nav className="hidden md:flex gap-10 text-sm tracking-widest uppercase">
          {links.map((l) =>
            l.href.startsWith("/#") && pathname === "/" ? (
              <a key={l.href} href={l.href.slice(1)} className="hover:text-gold transition-colors">{l.label}</a>
            ) : (
              <Link key={l.href} to={l.href} className="hover:text-gold transition-colors">{l.label}</Link>
            )
          )}
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-ink/10 bg-ivory">
          <div className="px-6 py-4 flex flex-col gap-4 text-sm tracking-widest uppercase">
            {links.map((l) => (
              <Link key={l.href} to={l.href.startsWith("/#") ? "/" : l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
