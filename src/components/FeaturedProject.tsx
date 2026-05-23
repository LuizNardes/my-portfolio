import { Zap, CheckCircle2, ExternalLink } from "lucide-react";

export default function FeaturedProject() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto w-full">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-8 flex items-center gap-2">
        <Zap className="text-emerald-400 w-8 h-8" />
        Projeto em Destaque
      </h2>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8 shadow-xl">
        <div className="flex-1 space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-50 mb-2">
              WhatsApp Lead Capture
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Sistema automatizado que captura mensagens de novos contatos no WhatsApp e registra os leads diretamente em uma planilha do Google Sheets — sem nenhuma entrada manual. Ideal para times de vendas que precisam de agilidade e organização no primeiro contato.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">
              Stack Utilizada
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "TypeScript", "Express", "Z-API", "Google Sheets API", "Railway"].map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-800 text-emerald-400 px-3 py-1 rounded-md text-sm font-medium border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Captura automática de nome, telefone, mensagem e timestamp no primeiro contato.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Deduplicação por número de telefone e filtros para grupos e mensagens enviadas.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Integração via webhook com Z-API e planilha pronta para uso imediato.</span>
            </li>
          </ul>

          <a
            href="https://github.com/LuizNardes/whatsapp-lead-capture"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Ver no GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="flex-1 bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl border border-slate-800 flex items-center justify-center min-h-[280px] p-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors duration-500" />

          <div className="relative z-10 w-full max-w-xs space-y-3 font-mono text-sm">
            <div className="bg-slate-800/80 rounded-lg p-4 border border-slate-700">
              <p className="text-slate-500 text-xs mb-2">webhook recebido</p>
              <p className="text-emerald-400">&#123; phone: <span className="text-sky-400">&quot;5511...&quot;</span> &#125;</p>
            </div>
            <div className="flex items-center gap-2 px-2">
              <div className="h-px flex-1 bg-slate-700" />
              <span className="text-slate-600 text-xs">processando</span>
              <div className="h-px flex-1 bg-slate-700" />
            </div>
            <div className="bg-slate-800/80 rounded-lg p-4 border border-slate-700">
              <p className="text-slate-500 text-xs mb-2">Google Sheets</p>
              <p className="text-slate-300">Lead salvo <span className="text-emerald-400">✓</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
