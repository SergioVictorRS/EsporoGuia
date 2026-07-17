// app/sections/Environment.tsx
"use client";

import { Leaf, ThermometerSun, Droplet } from "lucide-react";

type EnvironmentProps = {
  id?: string;
};

export function Environment({ id }: EnvironmentProps) {
  return (
    <section id={id} className="py-24 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 text-emerald-600 mb-4">
            <Leaf className="w-8 h-8" />
            <span className="uppercase tracking-[3px] font-medium">Meio Ambiente</span>
          </div>
          <h2 className="text-5xl font-bold tracking-tight text-emerald-950 mb-4">
            Esporotricose e o Meio Ambiente
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Como as mudanças climáticas e o desequilíbrio ambiental favorecem a proliferação do fungo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Fator 1 */}
          <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition-all group">
            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <ThermometerSun className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Aumento da Temperatura</h3>
            <p className="text-gray-600 leading-relaxed">
              O <strong>Sporothrix brasiliensis</strong> se desenvolve melhor em temperaturas entre 25°C e 30°C. 
              Com o aquecimento global, o fungo encontra condições ideais para se proliferar durante mais meses do ano.
            </p>
          </div>

          {/* Fator 2 */}
          <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition-all group">
            <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <Droplet className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Umidade e Chuvas</h3>
            <p className="text-gray-600 leading-relaxed">
              Alta umidade e períodos chuvosos prolongados favorecem a sobrevivência do fungo no solo, 
              em plantas e matéria orgânica em decomposição.
            </p>
          </div>

          {/* Fator 3 */}
          <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition-all group">
            <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
              🏙️
            </div>
            <h3 className="text-2xl font-semibold mb-4">Urbanização Desordenada</h3>
            <p className="text-gray-600 leading-relaxed">
              O crescimento descontrolado das cidades aumenta o contato entre gatos de rua, 
              lixo orgânico e humanos, criando um ciclo perfeito para a transmissão do fungo.
            </p>
          </div>
        </div>

        <div className="mt-20 bg-emerald-900 text-white rounded-3xl p-12 md:p-16 text-center">
          <h3 className="text-3xl font-semibold mb-6">
            O desequilíbrio ambiental afeta diretamente a saúde humana e animal
          </h3>
          <p className="text-lg max-w-3xl mx-auto text-emerald-200">
            A esporotricose é um exemplo clássico de <strong>doença emergente</strong> influenciada pelas mudanças climáticas 
            e pela interferência humana no meio ambiente.
          </p>
        </div>

        <div className="text-center mt-12 text-sm text-gray-500">
          Fonte: Estudos da Fiocruz e literatura científica sobre doenças fúngicas emergentes
        </div>
      </div>
    </section>
  );
}