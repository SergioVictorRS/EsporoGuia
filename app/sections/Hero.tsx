"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-emerald-50 via-amber-50 to-white">
      {/* Partículas sutis podem ser adicionadas com canvas ou GSAP */}
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 text-sm mb-6 border border-emerald-100">
            🌱 Doença emergente no Brasil
          </div>

          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter text-emerald-950 leading-none mb-6">
            Esporo<strong className="text-amber-600">tr</strong>icose
          </h1>

          <p className="text-2xl text-emerald-800/80 max-w-2xl mx-auto mb-10">
            Uma doença causada por fungo que afeta gatos e humanos.<br />
            Entenda em 5 minutos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#transmissao"
              className="group inline-flex items-center justify-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white px-10 py-4 rounded-2xl text-lg font-medium transition-all active:scale-95"
            >
              Começar agora
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </a>
            
            <a href="#o-que-e" className="inline-flex items-center justify-center border border-emerald-300 hover:bg-white/70 px-8 py-4 rounded-2xl text-lg font-medium">
              Saiba mais
            </a>

            <a href="/about"  className="inline-flex items-center justify-center border border-emerald-300 hover:bg-white/70 px-8 py-4 rounded-2xl text-lg font-medium transition">
              Sobre o Projeto
            </a>
          </div>
        </motion.div>
      </div>

      {/* Ilustração decorativa */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="text-[180px] opacity-10">🐱</div>
      </div>
    </section>
  );
}