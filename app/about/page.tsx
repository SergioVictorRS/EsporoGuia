// app/about/page.tsx
import Link from "next/link";
import { ArrowLeft, Heart, Users, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-[#fdfaf7] text-emerald-950">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg z-50 border-b border-emerald-100">
        <div className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 hover:text-emerald-700 transition">
            <ArrowLeft size={22} />
            <span className="font-medium">Voltar ao site</span>
          </Link>
          
          <div className="font-semibold text-xl tracking-tight">EsporoGuia</div>
        </div>
      </nav>

      <main className="pt-28 pb-24 max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-7xl mb-6">🌿</div>
          <h1 className="text-6xl font-bold tracking-tighter mb-6">Sobre o Projeto</h1>
          <p className="text-2xl text-emerald-700">EsporoGuia — Educação sobre Esporotricose</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            Este site foi elaborado como produto do Programa de Mestrado Profissional em 
            Saúde Única da Universidade Federal Rural de Pernambuco (PMPSU-UFRPE), com o objetivo 
            de oferecer informações confiáveis e acessíveis sobre a doença, contribuindo para sua 
            prevenção, diagnóstico precoce e tratamento adequado.
          </p>

          <h2 className="text-3xl font-semibold mt-12 mb-6 text-emerald-900">Nossa Missão</h2>
          <p>
            A esporotricose é uma zoonose emergente no Brasil. Nosso objetivo é contribuir para a conscientização 
            da população, ajudando tutores de gatos, profissionais da saúde e veterinários a atuarem de forma mais informada.
          </p>

          <h2 className="text-3xl font-semibold mt-12 mb-6 text-emerald-900">Tecnologias Utilizadas</h2>
          <div className="grid grid-cols-2 gap-y-3 text-base mt-6">
            <div>• Next.js 16 + TypeScript</div>
            <div>• Tailwind CSS</div>
            <div>• GSAP + Framer Motion</div>
            <div>• Lucide Icons</div>
            <div>• Design System Orgânico</div>
            <div>• Mobile First</div>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-emerald-200 flex flex-col items-center">
          <p className="flex items-center gap-2 text-emerald-600 mb-8 text-lg">
            <Heart className="text-rose-500" fill="currentColor" /> Feito para proteger humanos e animais
          </p>
          
          <div className="flex gap-8 text-emerald-600">
            <a href="#" className="hover:text-emerald-700 transition flex items-center gap-2">
              <Users size={28} />
              <span>Colabore</span>
            </a>
            <a href="#" className="hover:text-emerald-700 transition flex items-center gap-2">
              <Globe size={28} />
              <span>Compartilhe</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}