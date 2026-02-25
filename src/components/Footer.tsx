import { Heart, Github, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-800/60 bg-slate-950/50 backdrop-blur-md mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Lado Esquerdo: Créditos */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-slate-400 text-sm flex items-center gap-1.5">
            <span>Powered with</span>
            <Heart className="w-4 h-4 text-emerald-500 animate-pulse" />
            <span>by</span>
            <span className="text-slate-50 font-semibold tracking-wide">Luiz Nardes</span>
          </p>
          <p className="text-slate-500 text-xs">
            © {currentYear} • Desenvolvedor Full Stack
          </p>
        </div>

        {/* Lado Direito: Links Sociais */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/LuizNardes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 p-2 rounded-full transition-all duration-300"
            aria-label="Meu GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/luiz-nardes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 p-2 rounded-full transition-all duration-300"
            aria-label="Meu LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        
      </div>
    </footer>
  );
}