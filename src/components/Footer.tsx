import { Instagram, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-bone/40 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-serif text-2xl tracking-[0.2em] mb-4">MAISON</h3>
          <p className="text-sm text-ink/70 leading-relaxed">Alta costura contemporânea. Peças atemporais para uma vida com intenção.</p>
        </div>
        <div className="text-sm text-ink/70 space-y-3">
          <p className="flex items-center gap-2"><MapPin size={14} /> Rua Oscar Freire, 1500 — São Paulo</p>
          <p className="flex items-center gap-2"><Mail size={14} /> atelier@maison.com</p>
          <p className="flex items-center gap-2"><Instagram size={14} /> @maison.luxe</p>
        </div>
        <div className="text-xs tracking-widest uppercase text-ink/50 md:text-right self-end">
          © {new Date().getFullYear()} Maison Luxe
        </div>
      </div>
    </footer>
  );
}
