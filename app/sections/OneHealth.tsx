// app/sections/OneHealth.tsx
"use client";

import { Heart, Users, PawPrint, Globe } from "lucide-react";

export function OneHealth() {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-950 to-teal-950 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 text-emerald-400">
            <Globe className="w-9 h-9" />
            <span className="font-mono tracking-[4px] uppercase text-sm">Conceito Global</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
            One Health
          </h2>
          <p className="text-2xl text-emerald-300 max-w-3xl mx-auto">
            Uma só saúde: humana, animal e ambiental
          </p>
        </div>

        {/* Círculo Conceitual */}
        <div className="flex justify-center mb-20">
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 border-2 border-dashed border-emerald-700 rounded-full"></div>
            
            {/* Centro */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="text-4xl">🌍</div>
                <p className="text-xs font-semibold text-emerald-950 mt-1">ONE HEALTH</p>
              </div>
            </div>

            {/* Humano */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur rounded-3xl flex items-center justify-center text-5xl mb-3 mx-auto border border-white/30">🧍‍♂️</div>
              <p className="text-sm font-medium">Saúde Humana</p>
            </div>

            {/* Animal */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur rounded-3xl flex items-center justify-center text-5xl mb-3 mx-auto border border-white/30">🐱</div>
              <p className="text-sm font-medium">Saúde Animal</p>
            </div>

            {/* Meio Ambiente */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur rounded-3xl flex items-center justify-center text-5xl mb-3 mx-auto border border-white/30">🌿</div>
              <p className="text-sm font-medium">Meio Ambiente</p>
            </div>

            {/* Conexão */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur rounded-3xl flex items-center justify-center text-5xl mb-3 mx-auto border border-white/30">🔄</div>
              <p className="text-sm font-medium">Interconexão</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10">
            <div className="flex items-center gap-4 mb-6">
              <PawPrint className="w-9 h-9 text-amber-400" />
              <h3 className="text-2xl font-semibold">Na Esporotricose</h3>
            </div>
            <p className="text-emerald-100 leading-relaxed text-lg">
              Este é um exemplo clássico da abordagem <strong>One Health</strong>. 
              O fungo afeta gatos (saúde animal), humanos (saúde humana) e se espalha 
              mais facilmente devido ao desequilíbrio ambiental.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10">
            <div className="flex items-center gap-4 mb-6">
              <Heart className="w-9 h-9 text-rose-400" />
              <h3 className="text-2xl font-semibold">Por que isso importa?</h3>
            </div>
            <ul className="space-y-4 text-emerald-100">
              <li className="flex gap-3">
                <span className="text-emerald-400">•</span>
                <span>Proteger os gatos ajuda a proteger as pessoas</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">•</span>
                <span>Cuidar do meio ambiente reduz o risco de novas doenças</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">•</span>
                <span>A colaboração entre médicos, veterinários e ambientalistas é essencial</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-xl text-emerald-300 max-w-2xl mx-auto leading-relaxed">
            “A saúde dos seres humanos, dos animais e dos ecossistemas está interligada. 
            Não podemos salvar uma sem salvar as outras.”
          </p>
          <p className="text-emerald-500 mt-6 text-sm">— Princípio One Health</p>
        </div>
      </div>
    </section>
  );
}