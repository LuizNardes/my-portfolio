import { Code2 } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import RepoCard from "./RepoCard";

// Mesma tipagem do passo anterior
interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
}

// Mesma função de fetch do passo anterior
async function getRepositories(): Promise<Repository[] | null> {
  try {
    const res = await fetch(
      "https://api.github.com/users/LuizNardes/repos?sort=updated&per_page=6",
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) throw new Error(`Erro na API: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("Falha ao buscar repositórios:", error);
    return null;
  }
}

export default async function GithubShowcase() {
  const repos = await getRepositories();

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto w-full">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-50 flex items-center gap-2">
          <Code2 className="text-emerald-400 w-8 h-8" />
          Repositórios Recentes
        </h2>
      </div>

      {!repos ? (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center flex flex-col items-center gap-4">
          <p className="text-slate-400 text-lg">
            Repositórios carregando... Visite meu GitHub diretamente.
          </p>
          <a
            href="https://github.com/SEU_USUARIO_AQUI"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-800 text-slate-50 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 hover:bg-slate-700"
          >
            <SiGithub className="w-5 h-5" />
            <span>Acessar Perfil no GitHub</span>
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </section>
  );
}