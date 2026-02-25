import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luiz Gustavo | Full Stack Developer",
  description: "Portfólio profissional destacando projetos web e mobile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-slate-950 text-slate-50 min-h-screen flex flex-col antialiased`}>
        {/* Espaço reservado para o Header */}
        
        <main className="flex-1 flex flex-col">
          {children}
        </main>

        {/* Espaço reservado para o Footer */}
      </body>
    </html>
  );
}