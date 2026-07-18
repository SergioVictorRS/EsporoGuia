"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, Info } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50 pt-16 pb-12 md:pb-0">
      {/* Background sutil decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b98115_1px,transparent_1px)] [background-size:40px_40px] opacity-60" />

      <div className="max-w-5xl mx-auto px-5 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Badge Premium */}
          <div className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-md border border-emerald-100 rounded-full px-5 py-2 text-sm font-medium text-emerald-700 mb-8 shadow-sm">
            <Leaf className="w-4 h-4" />
            Site educativo sobre uma zoonose emergente no Brasil
          </div>

          {/* Título Principal */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-bold tracking-[-2.5px] text-emerald-950 leading-[1.05] mb-6">
            Esporo<span className="text-amber-600">tricose</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl md:text-2xl text-emerald-800/75 max-w-3xl mx-auto leading-relaxed mb-12 px-2">
            Uma doença causada por fungo conectada à saúde humana, animal e ambiental.{" "}
            <span className="hidden sm:inline">Entenda de forma clara.</span>
          </p>

          {/* Botões - Melhoria Desktop */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg md:max-w-2xl mx-auto">
            {/* Botão Principal */}
            <motion.a 
              href="#transmissao"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white px-10 py-4 rounded-3xl text-lg font-semibold transition-all shadow-lg shadow-emerald-900/20 hover:shadow-xl flex-1 sm:flex-none min-w-[220px]"
            >
              Começar agora
              <ArrowRight className="group-hover:translate-x-1 transition w-5 h-5" />
            </motion.a>

            {/* Botão Secundário */}
            <motion.a 
              href="#o-que-e" 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-emerald-200 hover:border-emerald-300 hover:bg-white px-9 py-4 rounded-3xl text-lg font-medium transition-all flex-1 sm:flex-none min-w-[200px]"
            >
              O que é a doença?
            </motion.a>

            {/* Sobre o Projeto */}
            <motion.a 
              href="/about" 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-emerald-200 hover:border-emerald-300 hover:bg-white px-8 py-4 rounded-3xl text-lg font-medium transition-all flex-1 sm:flex-none min-w-[200px]"
            >
              <Info className="w-5 h-5" />
              Sobre o projeto
            </motion.a>
          </div>

          {/* Trust / Legenda fina */}
          <p className="text-xs text-emerald-600/70 mt-10 tracking-wider px-4">
            BASEADO EM EVIDÊNCIAS CIENTÍFICAS e literatura especializada
          </p>
        </motion.div>
      </div>

      {/* Elemento decorativo elegante - Desktop */}
      <div className="absolute bottom-0 right-0 md:right-12 lg:right-20 opacity-10 pointer-events-none hidden md:block">
        <div className="text-[260px] leading-none">🐱</div>
      </div>

      {/* Elemento decorativo mobile */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none md:hidden">
        <div className="text-[140px]">🐾</div>
      </div>

      {/* Linha suave no final */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
    </section>
  );
}