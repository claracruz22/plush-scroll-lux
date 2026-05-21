import { useState } from "react";
import { Check, Scissors } from "lucide-react";

export default function Bespoke() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <Scissors size={28} className="mx-auto mb-6 text-gold" strokeWidth={1.2} />
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Atelier Sob Medida</p>
          <h1 className="text-5xl md:text-6xl font-light mb-6">Encomende sua peça.</h1>
          <p className="text-lg text-ink/70 max-w-2xl mx-auto leading-relaxed">
            Compartilhe sua visão. Nossa equipe entrará em contato em até 48 horas para agendar uma consulta privada.
          </p>
        </div>

        {sent ? (
          <div className="max-w-xl mx-auto text-center border border-gold/40 bg-bone/40 p-12">
            <Check size={36} className="mx-auto mb-6 text-gold" strokeWidth={1.2} />
            <h2 className="text-3xl mb-4">Pedido recebido.</h2>
            <p className="text-ink/70">Entraremos em contato em breve para iniciar sua jornada sob medida.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid gap-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Nome completo" name="nome" required />
              <Field label="E-mail" name="email" type="email" required />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Telefone" name="telefone" />
              <Field label="Cidade" name="cidade" />
            </div>
            <div>
              <label className="block text-xs tracking-[0.3em] uppercase text-ink/60 mb-3">Tipo de peça</label>
              <select required name="tipo" className="w-full bg-transparent border-b border-ink/30 pb-3 focus:outline-none focus:border-gold">
                <option value="">Selecione</option>
                <option>Alfaiataria</option>
                <option>Vestido</option>
                <option>Tricô / Cashmere</option>
                <option>Casaco</option>
                <option>Outro</option>
              </select>
            </div>
            <div>
              <label className="block text-xs tracking-[0.3em] uppercase text-ink/60 mb-3">Descreva sua peça</label>
              <textarea required name="descricao" rows={5} className="w-full bg-transparent border border-ink/20 p-4 focus:outline-none focus:border-gold resize-none" placeholder="Tecido, ocasião, inspirações, prazo desejado..." />
            </div>
            <button type="submit" className="bg-ink text-ivory px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold transition-colors justify-self-start">
              Enviar pedido
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs tracking-[0.3em] uppercase text-ink/60 mb-3">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-ink/30 pb-3 focus:outline-none focus:border-gold"
      />
    </div>
  );
}
