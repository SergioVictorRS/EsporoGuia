// app/sections/Environment.tsx
"use client";

import { Leaf, ThermometerSun, Droplet, Building2 } from "lucide-react";

type EnvironmentProps = {
  id?: string;
};

export function Environment({ id }: EnvironmentProps) {
  return (
    <section 
      id={id} 
      className="py-16 md:py-24 bg-gradient-to-b from-emerald-50 via-white to-emerald-50/70 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 text-emerald-700 mb-4">
            <div className="w-9 h-9 rounded-2xl bg-emerald-100 flex items-center justify-center">
              <Leaf className="w-5 h-5" />
            </div>
            <span className="uppercase tracking-[4px] text-sm font-semibold">Meio Ambiente</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-emerald-950 mb-4">
            Esporotricose e o Meio Ambiente
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Como as mudanças climáticas e o desequilíbrio ambiental favorecem a proliferação do fungo
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="group bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-emerald-100/80">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <ThermometerSun className="w-9 h-9 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-emerald-950">Aumento da Temperatura</h3>
            <p className="text-gray-600 leading-relaxed">
              O <strong>Sporothrix brasiliensis</strong> se desenvolve melhor em temperaturas entre 25°C e 30°C. 
              Com o aquecimento global, o fungo encontra condições ideais para se proliferar durante mais meses do ano.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-emerald-100/80">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <Droplet className="w-9 h-9 text-amber-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-emerald-950">Umidade e Chuvas</h3>
            <p className="text-gray-600 leading-relaxed">
              Alta umidade e períodos chuvosos prolongados favorecem a sobrevivência do fungo no solo, 
              em plantas e matéria orgânica em decomposição.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-emerald-100/80">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <Building2 className="w-9 h-9 text-teal-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-emerald-950">Urbanização Desordenada</h3>
            <p className="text-gray-600 leading-relaxed">
              O crescimento descontrolado das cidades aumenta o contato entre gatos de rua, 
              lixo orgânico e humanos, criando um ciclo perfeito para a transmissão do fungo.
            </p>
          </div>
        </div>

        {/* Highlight Banner */}
        <div className="mt-16 md:mt-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          {/* Subtle decorative background */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:30px_30px] opacity-40" />
          
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 leading-tight">
              O desequilíbrio ambiental afeta diretamente a saúde humana e animal
            </h3>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-emerald-100 leading-relaxed">
              A esporotricose é um exemplo clássico de <strong>doença emergente</strong> influenciada pelas mudanças climáticas 
              e pela interferência humana no meio ambiente.
            </p>
          </div>
        </div>

        {/* Source */}
        <div className="text-center mt-10 text-xs md:text-sm text-gray-500">
          Fonte: Estudos da Fiocruz e literatura científica sobre doenças fúngicas emergentes
        </div>
      </div>
    </section>
  );
}