// app/sections/OneHealth.tsx
"use client";

import { Heart, Users, PawPrint, Globe, Leaf } from "lucide-react";

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

        {/* Círculo Conceitual Melhorado */}
        <div className="flex justify-center mb-20">
          <div className="relative w-[420px] h-[420px] flex items-center justify-center">
            {/* Círculo principal */}
            <div className="absolute inset-0 border-4 border-dashed border-emerald-700/70 rounded-full"></div>
            
            {/* Centro */}
            <div className="relative z-10 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-emerald-600">
              <div className="text-center">
                <div className="text-6xl mb-1">🌍</div>
                <p className="text-xs font-bold tracking-widest text-emerald-950">ONE HEALTH</p>
              </div>
            </div>

            {/* Linhas de conexão */}
            <div className="absolute inset-0">
              <svg className="w-full h-full -rotate-45" viewBox="0 0 400 400">
                <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 8" className="text-emerald-700/50" />
              </svg>
            </div>

            {/* Saúde Humana */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-center">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-emerald-900/70 backdrop-blur-md rounded-2xl flex items-center justify-center text-5xl mb-3 border border-emerald-400/30 shadow-xl">
                  👤
                </div>
                <p className="font-semibold text-lg text-emerald-100">Saúde Humana</p>
              </div>
            </div>

            {/* Saúde Animal */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-center">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-emerald-900/70 backdrop-blur-md rounded-2xl flex items-center justify-center text-5xl mb-3 border border-emerald-400/30 shadow-xl">
                  🐱
                </div>
                <p className="font-semibold text-lg text-emerald-100">Saúde Animal</p>
              </div>
            </div>

            {/* Meio Ambiente */}
            <div className="absolute left-[-60px] top-1/2 -translate-y-1/2 text-center">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-emerald-900/70 backdrop-blur-md rounded-2xl flex items-center justify-center text-5xl mb-3 border border-emerald-400/30 shadow-xl">
                  🌿
                </div>
                <p className="font-semibold text-lg text-emerald-100">Meio Ambiente</p>
              </div>
            </div>

            {/* Interconexão (opcional, mantido para completar o conceito) */}
            <div className="absolute right-[-50px] top-1/2 -translate-y-1/2 text-center opacity-75">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center text-4xl border border-white/30">
                  🔄
                </div>
                <p className="text-sm font-medium mt-2 text-emerald-400">Interconexão</p>
              </div>
            </div>
          </div>
        </div>

        {/* Resto do conteúdo permanece igual (apenas pequenas melhorias visuais) */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-3xl font-semibold text-center mb-8 text-emerald-200">
            Por que a esporotricose é um problema de saúde única?
          </h3>
          <div className="prose prose-invert max-w-none text-emerald-100 leading-relaxed text-lg">
            <p>
              A esporotricose não afeta apenas uma pessoa ou um animal. Ela envolve a interação entre diferentes componentes do nosso cotidiano. 
              Quando um gato adoece, toda a família pode ser impactada. Da mesma forma, ambientes contaminados e a falta de informação dificultam o controle da doença.
            </p>
            <p>
              Por isso, o enfrentamento da esporotricose depende da atuação conjunta de profissionais de diferentes áreas e da participação da população.
            </p>
            
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 my-10">
              <p className="font-medium text-emerald-200 mb-4">A Saúde Única reconhece que:</p>
              <ul className="space-y-3 text-emerald-100">
                <li className="flex gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>A saúde das pessoas depende da saúde dos animais.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>A saúde dos animais depende de um ambiente saudável.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Um ambiente saudável protege toda a comunidade.</span>
                </li>
              </ul>
            </div>

            <p className="text-center text-lg">
              Quando esses três elementos trabalham juntos, reduzimos a transmissão da doença e promovemos mais qualidade de vida para todos.
            </p>
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