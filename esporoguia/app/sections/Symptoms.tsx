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
    <section id="sintomas" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tight text-emerald-950 mb-4">
            Sintomas
          </h2>
          <p className="text-xl text-gray-600">Como a doença se manifesta em gatos e humanos</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-2xl p-1">
            <button
              onClick={() => setActiveTab("cat")}
              className={`flex items-center gap-3 px-8 py-4 rounded-xl font-medium transition-all ${
                activeTab === "cat" 
                  ? "bg-white shadow text-emerald-700" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Cat size={24} />
              Em Gatos
            </button>
            
            <button
              onClick={() => setActiveTab("human")}
              className={`flex items-center gap-3 px-8 py-4 rounded-xl font-medium transition-all ${
                activeTab === "human" 
                  ? "bg-white shadow text-emerald-700" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <User size={24} />
              Em Humanos
            </button>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Coluna da esquerda - Imagem + Título */}
            <div className="flex flex-col items-center text-center">
              <div className="text-[180px] mb-6 opacity-90">
                {activeTab === "cat" ? "🐱" : "🧍‍♂️"}
              </div>
              <h3 className="text-3xl font-semibold mb-4">
                {activeTab === "cat" ? "Sintomas em Gatos" : "Sintomas em Humanos"}
              </h3>
              <p className="text-emerald-600 font-medium">
                {activeTab === "cat" 
                  ? "Mais comum em machos não castrados" 
                  : "Mais comum em pessoas que lidam com gatos"}
              </p>
            </div>

            {/* Lista de sintomas */}
            <div className="space-y-4">
              {(activeTab === "cat" ? catSymptoms : humanSymptoms).map((symptom, index) => (
                <div 
                  key={index}
                  className="card-breathe bg-emerald-50 border border-emerald-100 rounded-2xl p-6 flex gap-4 hover:border-emerald-300 transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center text-emerald-600 font-bold mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">{symptom}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-sm text-gray-500">
          ⚠️ Importante: Em ambos os casos, quanto mais cedo o diagnóstico, melhor o tratamento.
        </div>
      </div>
    </section>
  );
}