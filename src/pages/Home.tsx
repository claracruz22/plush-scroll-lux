import { Link } from "react-router-dom";
import { ArrowRight, Scissors, Award, Leaf } from "lucide-react";

const categories = [
  { name: "Alfaiataria", desc: "Linhas precisas, cortes escultóricos.", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=80" },
  { name: "Vestidos", desc: "Silhuetas fluidas em sedas nobres.", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=80" },
  { name: "Tricô & Cashmere", desc: "Texturas suaves, conforto absoluto.", img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=900&q=80" },
  { name: "Acessórios", desc: "Detalhes que definem o gesto.", img: "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?w=900&q=80" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1800&q=80')" }}
        />
        <div className="absolute inset-0 bg-ivory/40" />
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.4em] uppercase text-ink/70 mb-6">Coleção Outono · MMXXVI</p>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] font-light mb-8">
              A elegância<br />do essencial.
            </h1>
            <p className="text-lg text-ink/80 mb-10 leading-relaxed">
              Peças desenhadas para durar gerações. Tecidos nobres, costuras artesanais, silhuetas atemporais.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#colecoes" className="group inline-flex items-center gap-3 bg-ink text-ivory px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold transition-colors">
                Explorar coleção <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link to="/sob-medida" className="inline-flex items-center gap-3 border border-ink px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-ink hover:text-ivory transition-colors">
                Atelier sob medida
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofia */}
      <section id="filosofia" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6">Nossa Filosofia</p>
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
            Luxo é tempo, atenção e matéria nobre.
          </h2>
          <p className="text-lg text-ink/70 leading-relaxed">
            Cada peça nasce de um diálogo entre tradição e modernidade. Trabalhamos com pequenos ateliês europeus e artesãos locais para criar roupas que carregam história — e a sua.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 mt-20">
          {[
            { icon: Scissors, t: "Feito à mão", d: "Costura artesanal em cada peça." },
            { icon: Award, t: "Materiais raros", d: "Seda, cashmere e linho de origem." },
            { icon: Leaf, t: "Produção lenta", d: "Pequenos lotes, zero excesso." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="text-center">
              <Icon size={28} className="mx-auto mb-4 text-gold" strokeWidth={1.2} />
              <h3 className="text-xl mb-2">{t}</h3>
              <p className="text-sm text-ink/60">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categorias */}
      <section id="categorias" className="py-32 px-6 bg-bone/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Categorias</p>
              <h2 className="text-4xl md:text-5xl font-light">Explore por linha.</h2>
            </div>
            <a href="#colecoes" className="text-xs tracking-[0.3em] uppercase border-b border-ink pb-1 hover:text-gold hover:border-gold">Ver tudo</a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((c) => (
              <div key={c.name} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden bg-ink/5 mb-5">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-2xl mb-1">{c.name}</h3>
                <p className="text-sm text-ink/60">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coleções destaque */}
      <section id="colecoes" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200&q=80" alt="Coleção" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6">Edição limitada</p>
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
              A série<br /><em className="font-light">Noir Lumière</em>
            </h2>
            <p className="text-lg text-ink/70 leading-relaxed mb-10">
              Doze peças exclusivas que celebram o contraste entre estrutura e movimento. Crepe de seda francês, alfaiataria milanesa, acabamentos feitos um a um.
            </p>
            <Link to="/sob-medida" className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase border-b border-ink pb-1 hover:text-gold hover:border-gold">
              Solicitar peça sob medida <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Sob Medida */}
      <section className="py-32 px-6 bg-ink text-ivory">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6">Atelier Privado</p>
          <h2 className="text-4xl md:text-5xl font-light mb-8">Uma peça única, sua.</h2>
          <p className="text-lg text-ivory/70 mb-10 leading-relaxed">
            Receba consultoria pessoal com nossos alfaiates e estilistas para criar uma peça desenhada exclusivamente para você.
          </p>
          <Link to="/sob-medida" className="inline-flex items-center gap-3 bg-ivory text-ink px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-ivory transition-colors">
            Iniciar encomenda <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
