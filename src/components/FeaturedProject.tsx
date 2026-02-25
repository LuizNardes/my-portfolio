import { Smartphone, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function FeaturedProject() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto w-full">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-8 flex items-center gap-2">
        <Smartphone className="text-emerald-400 w-8 h-8" />
        Projeto em Destaque
      </h2>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8 shadow-xl">
        <div className="flex-1 space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-50 mb-2">
              Aplicativo de Vistorias Imobiliárias
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Uma solução mobile desenvolvida para otimizar o processo de inspeção de imóveis para corretores. O aplicativo digitaliza todo o fluxo de vistoria, permitindo o registro de dados e fotos de forma ágil, substituindo pranchetas e processos manuais demorados.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">
              Stack Utilizada
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Flutter", "Dart", "Node.js", "PostgreSQL"].map((tech) => (
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
                <span>Interface fluida e responsiva multiplataforma.</span>
             </li>
             <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Foco em usabilidade para o trabalho em campo.</span>
             </li>
          </ul>
        </div>

        <div className="flex-1 bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl border border-slate-800 flex items-center justify-center min-h-[300px] p-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors duration-500" />
          
          <Image
            src="/images/projects/app_icon.png" 
            alt="Ícone do aplicativo de vistorias imobiliárias"
            width={180}
            height={180}
            quality={100}
            className="rounded-3xl shadow-2xl drop-shadow-[0_0_25px_rgba(52,211,153,0.15)] transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}