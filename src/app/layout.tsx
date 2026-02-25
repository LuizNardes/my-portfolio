import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Luiz Gustavo | Desenvolvedor Full Stack",
  description: "Portfólio profissional especializado em criar soluções robustas e escaláveis, do ecossistema web a aplicações mobile nativas.",
  openGraph: {
    title: "Luiz Gustavo | Desenvolvedor Full Stack",
    description: "Construindo soluções robustas de ponta a ponta. Explore meus projetos em desenvolvimento web e mobile.",
    url: "https://luiznardes.vercel.app/",
    siteName: "Portfólio de Luiz Gustavo",
    images: [
      {
        url: "/images/projects/og.png", 
        width: 1200,
        height: 630,
        alt: "Preview do Portfólio Full Stack",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

const inter = Inter({ subsets: ["latin"] });

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

        <Footer />
      </body>
    </html>
  );
}