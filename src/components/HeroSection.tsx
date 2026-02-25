"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SiGithub, SiWhatsapp } from "@icons-pack/react-simple-icons";

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between py-20 px-4 max-w-5xl mx-auto gap-12">
      
      {/* Coluna de Texto (Esquerda no Desktop, Baixo no Mobile) */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="flex-1 space-y-8 text-center md:text-left"
      >
        <div className="space-y-4">
          <motion.h1
            variants={itemAnim}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-50"
          >
            Desenvolvedor Full Stack
          </motion.h1>
          
          <motion.p
            variants={itemAnim}
            className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            Construindo soluções robustas de ponta a ponta. Da concepção de arquiteturas web escaláveis até a entrega de experiências nativas e fluidas no mobile.
          </motion.p>
        </div>

        <motion.div variants={itemAnim} className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
          <a
            href="https://github.com/LuizNardes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-slate-50 text-slate-950 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 hover:bg-slate-200 w-full sm:w-auto"
          >
            <SiGithub className="w-5 h-5" />
            <span>Explorar GitHub</span>
          </a>
          
          <a
            href="https://wa.me/5547988052485?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-slate-50 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 hover:bg-[#1EBE5A] shadow-lg shadow-[#25D366]/20 w-full sm:w-auto"
          >
            <SiWhatsapp className="w-5 h-5" />
            <span>Chamar no WhatsApp</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="relative w-56 h-56 md:w-80 md:h-80 shrink-0 group"
      >
        <div className="absolute inset-0 bg-emerald-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />

        <div className="relative w-full h-full rounded-full border-4 border-slate-800 overflow-hidden shadow-2xl">
          <Image
            src="/images/dev/luiz_nardes.jpeg"
            alt="Foto de perfil de Luiz Gustavo"
            fill
            sizes="(max-width: 768px) 224px, 320px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </div>
      </motion.div>
      
    </section>
  );
}