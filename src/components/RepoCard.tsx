"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// Tipagem espelhada da API para o Card
interface RepoCardProps {
  repo: {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
  };
}

export default function RepoCard({ repo }: RepoCardProps) {
  // Lógica de destaque para suas Core Skills
  const isHighlight = ["PHP", "TypeScript", "JavaScript", "React", "Angular"].includes(
    repo.language || ""
  );

  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      // Animação de entrada e hover tátil
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group bg-slate-900 border rounded-xl p-6 h-48 flex flex-col justify-between transition-colors duration-300 shadow-sm ${
        isHighlight
          ? "border-emerald-500/50 hover:border-emerald-400 hover:shadow-emerald-900/20"
          : "border-slate-800 hover:border-slate-700 hover:bg-slate-800/50"
      }`}
    >
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-lg text-slate-50 line-clamp-1 transition-colors duration-200 group-hover:text-emerald-400">
            {repo.name}
          </h3>
          <ExternalLink className="w-4 h-4 text-slate-500 shrink-0 transition-colors duration-200 group-hover:text-emerald-400" />
        </div>
        <p className="text-sm text-slate-400 line-clamp-2">
          {repo.description || "Sem descrição disponível."}
        </p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-slate-600 shadow-sm" />
          <span className="text-sm font-medium text-slate-300">
            {repo.language || "Markdown"}
          </span>
        </div>
        
        {isHighlight && (
          <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20 font-medium">
            Core Skill
          </span>
        )}
      </div>
    </motion.a>
  );
}