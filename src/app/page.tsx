import HeroSection from "@/components/HeroSection";
import FeaturedProject from "@/components/FeaturedProject";
import GithubShowcase from "@/components/GithubShowcase";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start w-full pb-20">
      <HeroSection />
      
      {/* Divisor sutil */}
      <div className="w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent my-8" />
      
      <FeaturedProject />
      <GithubShowcase />
    </div>
  );
}