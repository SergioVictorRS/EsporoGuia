"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-emerald-50 via-amber-50 to-white pt-16 pb-16 md:pb-12">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 text-sm mb-6 border border-emerald-100 mx-auto">
            🌱 Doença emergente no Brasil
          </div>

          {/* Título */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-emerald-950 leading-none mb-6">
            Esporo<strong className="text-amber-600">tr</strong>icose
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl lg:text-2xl text-emerald-800/80 max-w-2xl mx-auto mb-10 px-4">
            Uma doença causada por fungo que afeta gatos e humanos.<br className="hidden sm:block" />
            Entenda em poucos minutos.
          </p>

          {/* Botões - Versão corrigida */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <a 
              href="#transmissao"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-2xl text-base md:text-lg font-medium transition-all active:scale-[0.97] whitespace-nowrap"
            >
              Começar agora
              <ArrowRight className="group-hover:translate-x-1 transition w-5 h-5" />
            </a>
            
            <a 
              href="#o-que-e" 
              className="w-full sm:w-auto inline-flex items-center justify-center border border-emerald-300 hover:bg-white/70 px-8 py-4 rounded-2xl text-base md:text-lg font-medium transition whitespace-nowrap"
            >
              Saiba mais
            </a>

            <a 
              href="/about" 
              className="w-full sm:w-auto inline-flex items-center justify-center border border-emerald-300 hover:bg-white/70 px-8 py-4 rounded-2xl text-base md:text-lg font-medium transition whitespace-nowrap"
            >
              Sobre o Projeto
            </a>
          </div>
        </motion.div>
      </div>

      {/* Ilustração decorativa */}
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 opacity-10 pointer-events-none hidden sm:block">
        <div className="text-[120px] md:text-[160px] lg:text-[180px]">🐱</div>
      </div>

      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-7xl opacity-5 sm:hidden">
        🐾
      </div>
    </section>
  );
}