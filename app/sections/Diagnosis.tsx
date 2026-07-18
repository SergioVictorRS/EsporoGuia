// app/sections/Diagnosis.tsx
"use client";

import { useState } from "react";
import { Stethoscope, TestTube, Pill, ChevronLeft, ChevronRight } from "lucide-react";

const sections = [
  {
    id: "diagnosis",
    title: "Diagnóstico",
    icon: <TestTube className="w-10 h-10 text-emerald-700" />,
    color: "emerald",
    content: (
      <ul className="space-y-6">
        <li className="flex gap-4">
          <span className="text-emerald-600 font-bold text-xl">01</span>
          <div>
            <p className="font-medium">Exame Clínico</p>
            <p className="text-sm text-gray-600">Avaliação das lesões características</p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="text-emerald-600 font-bold text-xl">02</span>
          <div>
            <p className="font-medium">Citologia</p>
            <p className="text-sm text-gray-600">Exame direto das secreções das lesões</p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="text-emerald-600 font-bold text-xl">03</span>
          <div>
            <p className="font-medium">Cultura Fúngica</p>
            <p className="text-sm text-gray-600">Confirmação laboratorial (padrão ouro)</p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="text-emerald-600 font-bold text-xl">04</span>
          <div>
            <p className="font-medium">Biópsia (quando necessário)</p>
          </div>
        </li>
      </ul>
    ),
  },
  {
    id: "cats",
    title: "Tratamento em Gatos",
    icon: <span className="text-5xl">🐱</span>,
    color: "amber",
    content: (
      <div className="space-y-6">
        <div className="flex gap-4">
          <Pill className="w-7 h-7 text-amber-600 mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium">Itraconazol (principal medicamento)</p>
            <p className="text-sm text-gray-600">Administrado por 2 a 6 meses ou mais</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Pill className="w-7 h-7 text-amber-600 mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium">Terbinafina ou Fluconazol (alternativas)</p>
          </div>
        </div>
        <div className="pt-6 border-t text-sm text-amber-700 bg-amber-50 p-5 rounded-2xl">
          ⚠️ O tratamento em gatos deve ser acompanhado por um veterinário. 
          Interromper cedo pode causar recidiva.
        </div>
      </div>
    ),
  },
  {
    id: "humans",
    title: "Tratamento em Humanos",
    icon: <span className="text-5xl">🧍‍♂️</span>,
    color: "emerald",
    content: (
      <div className="space-y-6">
        <div className="flex gap-4">
          <Pill className="w-7 h-7 text-emerald-600 mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium">Itraconazol oral</p>
            <p className="text-sm text-gray-600">Tratamento de 3 a 6 meses</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Pill className="w-7 h-7 text-emerald-600 mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium">Satura de Iodeto de Potássio (em alguns casos)</p>
          </div>
        </div>
        <div className="pt-6 text-sm bg-emerald-50 p-5 rounded-2xl">
          <strong>Importante:</strong> Procure um médico infectologista ou dermatologista ao notar lesões persistentes após contato com gatos.
        </div>
      </div>
    ),
  },
];

export function Diagnosis() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = sections[currentIndex];

  const next = () => setCurrentIndex((prev) => (prev + 1) % sections.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + sections.length) % sections.length);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-emerald-950 mb-4">
            Diagnóstico e Tratamento
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Quanto mais cedo identificado, mais rápido e eficaz é o tratamento
          </p>
        </div>

        {/* Navegação dos flashcards */}
        <div className="flex justify-center gap-3 mb-8">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => setCurrentIndex(index)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all ${
                currentIndex === index
                  ? "bg-emerald-700 text-white shadow-lg"
                  : "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Card principal (Flashcard) */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xl min-h-[420px] flex flex-col relative">
            {/* Cabeçalho do card */}
            <div className="flex items-center gap-4 mb-10">
              <div className={`w-16 h-16 rounded-2xl bg-${current.color}-100 flex items-center justify-center`}>
                {current.icon}
              </div>
              <h3 className="text-3xl font-semibold text-emerald-950">{current.title}</h3>
            </div>

            {/* Conteúdo */}
            <div className="flex-1">{current.content}</div>

            {/* Navegação inferior */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t">
              <button
                onClick={prev}
                className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                Anterior
              </button>

              <div className="flex gap-2">
                {sections.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === currentIndex ? "bg-emerald-700 scale-125" : "bg-emerald-200"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                Próximo
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Banner final */}
        <div className="mt-12 md:mt-16 p-6 md:p-8 bg-gradient-to-r from-emerald-700 to-teal-700 text-white rounded-3xl text-center max-w-2xl mx-auto">
          <p className="text-lg md:text-xl font-medium">
            O tratamento é eficaz, mas exige paciência e disciplina.
          </p>
          <p className="mt-3 opacity-90 text-base">
            Nunca se automedique. Consulte sempre um profissional.
          </p>
        </div>
      </div>
    </section>
  );
}