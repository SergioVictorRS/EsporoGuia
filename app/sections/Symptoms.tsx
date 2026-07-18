// app/sections/Symptoms.tsx
"use client";

import { useState } from "react";
import { Cat, User } from "lucide-react";

export function Symptoms() {
  const [activeTab, setActiveTab] = useState<"cat" | "human">("cat");

  const catSymptoms = [
    "Lesões nodulares na pele (principalmente na cabeça e membros)",
    "Úlceras e feridas que não cicatrizam",
    "Perda de pelos ao redor das lesões",
    "Inflamação no nariz e olhos (em casos mais graves)",
    "Apatia e perda de apetite",
  ];

  const humanSymptoms = [
    "Nódulos ou úlceras na pele (geralmente nos braços e mãos)",
    "Lesões que seguem o trajeto dos linfáticos (forma linfangítica)",
    "Vermelhidão e inchaço ao redor das lesões",
    "Dor local",
    "Febre e mal-estar (em casos disseminados)",
  ];

  return (
    <section id="sintomas" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-emerald-950 mb-4">
            Sintomas
          </h2>
          <p className="text-lg md:text-xl text-gray-600 px-2">
            Como a doença se manifesta em gatos e humanos
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 md:mb-12">
          <div className="inline-flex bg-gray-100 rounded-2xl p-1.5 w-full max-w-xs">
            <button
              onClick={() => setActiveTab("cat")}
              className={`flex-1 flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl font-medium transition-all text-sm sm:text-base ${
                activeTab === "cat"
                  ? "bg-white shadow text-emerald-700"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Cat size={22} />
              Em Gatos
            </button>

            <button
              onClick={() => setActiveTab("human")}
              className={`flex-1 flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl font-medium transition-all text-sm sm:text-base ${
                activeTab === "human"
                  ? "bg-white shadow text-emerald-700"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <User size={22} />
              Em Humanos
            </button>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Coluna da Imagem - Quadro Melhorado */}
            <div className="flex flex-col items-center text-center md:sticky md:top-8">
              <div className="relative w-full max-w-[310px] sm:max-w-[350px] md:max-w-[320px] overflow-hidden rounded-3xl shadow-2xl border border-emerald-100 bg-white">
                <img
                  src={
                    activeTab === "cat"
                      ? "/attachments/esporogato.png"
                      : "/attachments/esporohumano.png"
                  }
                  alt={
                    activeTab === "cat"
                      ? "Ilustração de gato com esporotricose"
                      : "Ilustração de lesões de esporotricose em braço humano"
                  }
                  className="w-full h-auto object-contain p-3 sm:p-6 transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold mt-8 mb-3">
                {activeTab === "cat" ? "Sintomas em Gatos" : "Sintomas em Humanos"}
              </h3>
              <p className="text-emerald-600 font-medium text-sm md:text-base">
                {activeTab === "cat"
                  ? "Mais comum em machos não castrados"
                  : "Mais comum em pessoas que lidam com gatos"}
              </p>
            </div>

            {/* Lista de Sintomas */}
            <div className="space-y-4 md:space-y-5">
              {(activeTab === "cat" ? catSymptoms : humanSymptoms).map((symptom, index) => (
                <div
                  key={index}
                  className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 md:p-6 flex gap-4 hover:border-emerald-300 transition-all hover:shadow-md"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-600 font-bold text-lg mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-[17px] leading-relaxed text-gray-700">{symptom}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 md:mt-16 text-center text-sm md:text-base text-gray-500 px-4">
          ⚠️ Importante: Em ambos os casos, quanto mais cedo o diagnóstico, melhor o tratamento.
        </div>
      </div>
    </section>
  );
}