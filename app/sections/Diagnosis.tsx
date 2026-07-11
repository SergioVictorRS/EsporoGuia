// app/sections/Diagnosis.tsx
"use client";

import { Stethoscope, TestTube, Pill } from "lucide-react";

export function Diagnosis() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tight text-emerald-950 mb-4">
            Diagnóstico e Tratamento
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quanto mais cedo identificado, mais rápido e eficaz é o tratamento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Diagnóstico */}
          <div className="bg-emerald-50 rounded-3xl p-10 group hover:bg-emerald-100 transition-all">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <TestTube className="w-9 h-9 text-emerald-700" />
            </div>
            
            <h3 className="text-2xl font-semibold mb-6">Diagnóstico</h3>
            
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-emerald-600 font-bold">01</span>
                <div>
                  <p className="font-medium">Exame Clínico</p>
                  <p className="text-sm text-gray-600">Avaliação das lesões características</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-600 font-bold">02</span>
                <div>
                  <p className="font-medium">Citologia</p>
                  <p className="text-sm text-gray-600">Exame direto das secreções das lesões</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-600 font-bold">03</span>
                <div>
                  <p className="font-medium">Cultura Fúngica</p>
                  <p className="text-sm text-gray-600">Confirmação laboratorial (padrão ouro)</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-600 font-bold">04</span>
                <div>
                  <p className="font-medium">Biópsia (quando necessário)</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Tratamento em Gatos */}
          <div className="bg-white border border-amber-200 rounded-3xl p-10 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-5xl">🐱</div>
              <div>
                <h3 className="text-2xl font-semibold">Em Gatos</h3>
                <p className="text-amber-600 font-medium">Tratamento longo</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Pill className="w-6 h-6 text-amber-600 mt-1" />
                <div>
                  <p className="font-medium">Itraconazol (principal medicamento)</p>
                  <p className="text-sm text-gray-600">Administrado por 2 a 6 meses ou mais</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Pill className="w-6 h-6 text-amber-600 mt-1" />
                <div>
                  <p className="font-medium">Terbinafina ou Fluconazol (alternativas)</p>
                </div>
              </div>
              <div className="pt-4 border-t text-sm text-gray-500">
                ⚠️ O tratamento em gatos deve ser acompanhado por um veterinário. 
                Interromper cedo pode causar recidiva.
              </div>
            </div>
          </div>

          {/* Tratamento em Humanos */}
          <div className="bg-white border border-emerald-200 rounded-3xl p-10 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-5xl">🧍‍♂️</div>
              <div>
                <h3 className="text-2xl font-semibold">Em Humanos</h3>
                <p className="text-emerald-600 font-medium">Boa resposta ao tratamento</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Pill className="w-6 h-6 text-emerald-600 mt-1" />
                <div>
                  <p className="font-medium">Itraconazol oral</p>
                  <p className="text-sm text-gray-600">Tratamento de 3 a 6 meses</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Pill className="w-6 h-6 text-emerald-600 mt-1" />
                <div>
                  <p className="font-medium">Satura de Iodeto de Potássio (em alguns casos)</p>
                </div>
              </div>
              <div className="pt-6 text-sm bg-emerald-50 p-5 rounded-2xl">
                <strong>Importante:</strong> Procure um médico infectologista ou dermatologista ao notar lesões persistentes após contato com gatos.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-emerald-700 to-teal-700 text-white rounded-3xl text-center">
          <p className="text-xl font-medium">
            O tratamento é eficaz, mas exige paciência e disciplina.
          </p>
          <p className="mt-2 opacity-90">
            Nunca se automedique. Consulte sempre um profissional.
          </p>
        </div>
      </div>
    </section>
  );
}