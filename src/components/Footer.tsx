import { Heart, Linkedin } from "lucide-react";
import { SiGithub, SiWhatsapp } from "@icons-pack/react-simple-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-800/60 bg-slate-950/50 backdrop-blur-md mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col items-center justify-center gap-8">
        
        {/* Bloco de Redes Sociais - Ícones maiores (w-7 h-7) e centralizados */}
        <div className="flex items-center gap-8">
          <a
            href="https://github.com/LuizNardes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-50 transition-colors duration-300 hover:-translate-y-1 transform"
            aria-label="Meu GitHub"
          >
            <SiGithub className="w-7 h-7" />
          </a>
          
          <a
            href="https://linkedin.com/in/luiz-nardes"
            target="_blank"
            rel="noopener noreferrer"
            // #0A66C2 é a cor oficial do LinkedIn
            className="text-slate-400 hover:text-[#0A66C2] transition-colors duration-300 hover:-translate-y-1 transform"
            aria-label="Meu LinkedIn"
          >
            <Linkedin className="w-7 h-7" />
          </a>

          <a
            // Substitua pelo seu DDD e número
            href="https://wa.me/5547988052485?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!"
            target="_blank"
            rel="noopener noreferrer"
            // #25D366 é a cor oficial do WhatsApp
            className="text-slate-400 hover:text-[#25D366] transition-colors duration-300 hover:-translate-y-1 transform"
            aria-label="Meu WhatsApp"
          >
            <SiWhatsapp className="w-7 h-7" />
          </a>
        </div>

        {/* Bloco de Créditos - A última coisa da página */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-slate-500 text-xs">
            © {currentYear} • Desenvolvedor Full Stack
          </p>
          
          <p className="text-slate-400 text-sm flex items-center gap-1.5">
            <span>Powered with</span>
            <Heart className="w-4 h-4 text-emerald-500 animate-pulse fill-emerald-500/20" />
            <span>by</span>
            <span className="text-slate-50 font-semibold tracking-wide">Luiz Nardes</span>
          </p>
        </div>
        
      </div>
    </footer>
  );
}