// app/sections/Myths.tsx
"use client";

import { useState } from "react";
import { AlertTriangle, CheckCircle } from "lucide-react";

type Myth = {
  id: number;
  myth: string;
  truth: string;
  isDangerous: boolean;
};

type MythsProps = {
  id?: string;
};

export function Myths({ id }: MythsProps) {
  const [openCard, setOpenCard] = useState<number | null>(null);

  const myths: Myth[] = [
    {
      id: 1,
      myth: "Só pega se o gato tiver ferida visível",
      truth: "O fungo pode estar presente nas unhas e saliva mesmo sem lesões aparentes.",
      isDangerous: true
    },
    {
      id: 2,
      myth: "Esporotricose é uma doença nova",
      truth: "Existe há décadas, mas tem aumentado muito nos últimos anos no Brasil, especialmente no Rio de Janeiro e São Paulo.",
      isDangerous: false
    },
    {
      id: 3,
      myth: "Se o gato está dentro de casa, não tem risco",
      truth: "Gatos que saem ou têm contato com gatos de rua podem trazer o fungo para dentro de casa.",
      isDangerous: true
    },
    {
      id: 4,
      myth: "Só passa de gato para humano, não entre humanos",
      truth: "A transmissão direta entre humanos é extremamente rara. O principal vetor são os gatos.",
      isDangerous: false
    },
    {
      id: 5,
      myth: "Antibiótico resolve o problema",
      truth: "É uma infecção fúngica. Antibióticos não funcionam. Precisa de antifúngicos específicos.",
      isDangerous: true
    },
    {
      id: 6,
      myth: "Se melhorar um pouco, já pode parar o tratamento",
      truth: "O tratamento deve continuar por vários meses mesmo após o desaparecimento das lesões para evitar recidiva.",
      isDangerous: true
    }
  ];

  const toggleCard = (id: number) => {
    setOpenCard(openCard === id ? null : id);
  };

  return (
    <section id={id} className="py-16 md:py-24 bg-[#f8f4ed]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-2xl mb-6">
            <AlertTriangle className="text-amber-500" size={24} />
            <span className="uppercase tracking-widest text-sm font-semibold text-amber-700">Atenção</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-emerald-950 mb-4">
            Mitos × Verdades
          </h2>
          <p className="text-lg md:text-xl text-gray-600 px-2">
            Muita desinformação circula sobre essa doença. Vamos esclarecer?
          </p>
        </div>

        <div className="space-y-4 md:space-y-5">
          {myths.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-transparent hover:border-amber-200 transition-all shadow-sm"
            >
              {/* Mito (Cabeçalho clicável) */}
              <button
                onClick={() => toggleCard(item.id)}
                className="w-full px-6 py-6 md:px-8 md:py-7 text-left flex items-start gap-5 md:gap-6 group active:bg-amber-50 transition-colors"
              >
                <div className="mt-0.5 flex-shrink-0">
                  <div className={`w-8 h-8 md:w-9 md:h-9 rounded-2xl flex items-center justify-center transition-colors ${
                    item.isDangerous ? "bg-red-100 text-red-600" : "bg-amber-100 text-amber-600"
                  }`}>
                    {item.isDangerous ? "⚠️" : "❔"}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-lg md:text-xl font-medium text-gray-800 leading-tight pr-2">
                      {item.myth}
                    </p>
                    <span className="text-3xl text-gray-300 group-hover:text-amber-300 transition-colors flex-shrink-0 mt-0.5">
                      {openCard === item.id ? "−" : "+"}
                    </span>
                  </div>
                </div>
              </button>

              {/* Verdade (Conteúdo expansível) */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openCard === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 md:px-8 pb-8">
                  <div className="pl-12 md:pl-14 border-l-2 border-emerald-300">
                    <div className="flex items-center gap-3 text-emerald-700 mb-3">
                      <CheckCircle className="w-6 h-6 flex-shrink-0" />
                      <span className="font-semibold uppercase text-sm tracking-widest">A Verdade</span>
                    </div>
                    <p className="text-base md:text-lg leading-relaxed text-gray-700">
                      {item.truth}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 md:mt-16 text-center text-sm md:text-base text-gray-500 px-4">
          Sempre busque informações de fontes confiáveis como o Ministério da Saúde, Fiocruz ou veterinários.
        </div>
      </div>
    </section>
  );
}