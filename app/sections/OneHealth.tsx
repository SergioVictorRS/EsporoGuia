// app/sections/OneHealth.tsx
"use client";

import { Heart, Users, PawPrint, Globe, Leaf } from "lucide-react";

type OneHealthProps = {
  id?: string;
};

export function OneHealth({ id }: OneHealthProps) {
  return (
    <section 
      id={id} 
      className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100 text-emerald-950 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-6 text-emerald-600">
            <Globe className="w-9 h-9" />
            <span className="font-mono tracking-[4px] uppercase text-sm">Conceito Global</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-emerald-900">
            One Health
          </h2>
          <p className="text-xl md:text-2xl text-emerald-700 max-w-3xl mx-auto">
            Uma só saúde: humana, animal e ambiental
          </p>
        </div>

        {/* Círculo Conceitual Responsivo */}
        <div className="flex justify-center mb-16 md:mb-20">
          <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
            {/* Círculo principal */}
            <div className="absolute inset-0 border-4 border-dashed border-emerald-300 rounded-full"></div>
            
            {/* Centro */}
            <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-emerald-600">
              <div className="text-center">
                <Globe className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-1 text-emerald-700" />
                <p className="text-[10px] md:text-xs font-bold tracking-widest text-emerald-800">ONE HEALTH</p>
              </div>
            </div>

            {/* Posições responsivas */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-center md:-top-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white shadow-lg rounded-2xl flex items-center justify-center mb-3 border border-emerald-200">
                  <Users className="w-9 h-9 md:w-11 md:h-11 text-emerald-600" />
                </div>
                <p className="font-semibold text-sm md:text-lg text-emerald-800">Saúde Humana</p>
              </div>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center md:-bottom-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white shadow-lg rounded-2xl flex items-center justify-center mb-3 border border-emerald-200">
                  <PawPrint className="w-9 h-9 md:w-11 md:h-11 text-amber-600" />
                </div>
                <p className="font-semibold text-sm md:text-lg text-emerald-800">Saúde Animal</p>
              </div>
            </div>

            <div className="absolute left-2 top-1/2 -translate-y-1/2 text-center md:-left-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white shadow-lg rounded-2xl flex items-center justify-center mb-3 border border-emerald-200">
                  <Leaf className="w-9 h-9 md:w-11 md:h-11 text-teal-600" />
                </div>
                <p className="font-semibold text-sm md:text-lg text-emerald-800">Meio Ambiente</p>
              </div>
            </div>

            <div className="absolute right-2 top-1/2 -translate-y-1/2 text-center md:-right-12">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white/90 backdrop-blur rounded-2xl flex items-center justify-center border border-emerald-300 shadow">
                  <span className="text-3xl">🔄</span>
                </div>
                <p className="text-xs md:text-sm font-medium mt-2 text-emerald-600">Interconexão</p>
              </div>
            </div>
          </div>
        </div>

        {/* Explicação */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-emerald-800 px-4">
            Por que a esporotricose é um problema de saúde única?
          </h3>
          
          <div className="prose prose-emerald max-w-none text-emerald-800 leading-relaxed text-base md:text-lg px-2">
            <p>
              A esporotricose não afeta apenas uma pessoa ou um animal. Ela envolve a interação entre diferentes componentes do nosso cotidiano. 
              Quando um gato adoece, toda a família pode ser impactada.
            </p>
            <p>
              Por isso, o enfrentamento da doença depende da atuação conjunta de profissionais de diferentes áreas e da participação da população.
            </p>

            <div className="bg-white shadow-sm border border-emerald-100 rounded-3xl p-8 my-10">
              <p className="font-medium text-emerald-700 mb-4">A Saúde Única reconhece que:</p>
              <ul className="space-y-3 text-emerald-800">
                <li className="flex gap-3">
                  <span className="text-emerald-600 mt-1 text-xl leading-none">•</span>
                  <span>A saúde das pessoas depende da saúde dos animais.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 mt-1 text-xl leading-none">•</span>
                  <span>A saúde dos animais depende de um ambiente saudável.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 mt-1 text-xl leading-none">•</span>
                  <span>Um ambiente saudável protege toda a comunidade.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dois Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white shadow-sm border border-emerald-100 rounded-3xl p-8 md:p-10 hover:shadow-xl transition-all">
            <div className="flex items-center gap-4 mb-6">
              <PawPrint className="w-9 h-9 text-amber-600" />
              <h3 className="text-2xl font-semibold text-emerald-900">Na Esporotricose</h3>
            </div>
            <p className="text-emerald-700 leading-relaxed text-base md:text-lg">
              Este é um exemplo clássico da abordagem <strong>One Health</strong>. 
              O fungo afeta gatos (saúde animal), humanos (saúde humana) e se espalha 
              mais facilmente devido ao desequilíbrio ambiental.
            </p>
          </div>

          <div className="bg-white shadow-sm border border-emerald-100 rounded-3xl p-8 md:p-10 hover:shadow-xl transition-all">
            <div className="flex items-center gap-4 mb-6">
              <Heart className="w-9 h-9 text-rose-600" />
              <h3 className="text-2xl font-semibold text-emerald-900">Por que isso importa?</h3>
            </div>
            <ul className="space-y-4 text-emerald-700 text-base md:text-lg">
              <li className="flex gap-3">
                <span className="text-emerald-600">•</span>
                <span>Proteger os gatos ajuda a proteger as pessoas</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600">•</span>
                <span>Cuidar do meio ambiente reduz o risco de novas doenças</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600">•</span>
                <span>A colaboração entre médicos, veterinários e ambientalistas é essencial</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Citação Final */}
        <div className="mt-20 text-center px-6">
          <p className="text-lg md:text-xl text-emerald-700 max-w-2xl mx-auto leading-relaxed">
            “A saúde dos seres humanos, dos animais e dos ecossistemas está interligada. 
            Não podemos salvar uma sem salvar as outras.”
          </p>
          <p className="text-emerald-600 mt-6 text-sm">— Princípio One Health</p>
        </div>
      </div>
    </section>
  );
}