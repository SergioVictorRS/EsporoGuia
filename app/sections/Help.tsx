// app/sections/Help.tsx
"use client";

import { Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";

type HelpProps = {
  id?: string;
};

export function Help({ id }: HelpProps) {
  return (
    <section id={id} className="py-24 bg-emerald-950 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tight mb-4">
            Quando procurar ajuda?
          </h2>
          <p className="text-emerald-300 text-xl max-w-2xl mx-auto">
            Não espere as lesões piorarem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Para Humanos */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-5xl">🧍‍♂️</div>
              <div>
                <h3 className="text-3xl font-semibold text-white">Em Humanos</h3>
                <p className="text-emerald-400">Procure atendimento médico se:</p>
              </div>
            </div>

            <ul className="space-y-6 text-emerald-100">
              <li className="flex gap-4">
                <div className="text-emerald-400 mt-1">•</div>
                <div>
                  Apareceram nódulos ou feridas que não cicatrizam após contato com gato
                </div>
              </li>
              <li className="flex gap-4">
                <div className="text-emerald-400 mt-1">•</div>
                <div>
                  As lesões estão se espalhando pelo braço ou corpo
                </div>
              </li>
              <li className="flex gap-4">
                <div className="text-emerald-400 mt-1">•</div>
                <div>
                  Você tem febre, cansaço ou os gânglios linfáticos inchados
                </div>
              </li>
            </ul>

            <div className="mt-10 pt-8 border-t border-white/20 flex items-center gap-3 text-emerald-400">
              <Phone className="w-5 h-5" />
              <span className="font-medium">Procure um Infectologista ou Dermatologista</span>
            </div>
          </div>

          {/* Para Gatos */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-5xl">🐱</div>
              <div>
                <h3 className="text-3xl font-semibold text-white">Em Gatos</h3>
                <p className="text-emerald-400">Leve ao veterinário imediatamente se notar:</p>
              </div>
            </div>

            <ul className="space-y-6 text-emerald-100">
              <li className="flex gap-4">
                <div className="text-emerald-400 mt-1">•</div>
                <div>
                  Feridas ou nódulos na cabeça, orelhas ou patas
                </div>
              </li>
              <li className="flex gap-4">
                <div className="text-emerald-400 mt-1">•</div>
                <div>
                  Perda de pelo ao redor de lesões
                </div>
              </li>
              <li className="flex gap-4">
                <div className="text-emerald-400 mt-1">•</div>
                <div>
                  O gato está apático, não come ou emagrecendo
                </div>
              </li>
            </ul>

            <div className="mt-10 pt-8 border-t border-white/20 flex items-center gap-3 text-emerald-400">
              <Phone className="w-5 h-5" />
              <span className="font-medium">Consulte um Veterinário o quanto antes</span>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-12 text-center">
          <div className="max-w-xl mx-auto">
            <Clock className="w-12 h-12 mx-auto mb-6 text-white/90" />
            <h3 className="text-3xl font-semibold mb-4 text-white">
              Não deixe para depois
            </h3>
            <p className="text-lg text-white/90 mb-8">
              A esporotricose tem excelente resposta ao tratamento quando diagnosticada cedo.
            </p>
            
            <Link 
              href="/ajuda"
              className="inline-block bg-white text-emerald-950 hover:bg-amber-100 font-semibold px-10 py-4 rounded-2xl text-lg transition"
            >
              Encontrar ajuda perto de mim →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}