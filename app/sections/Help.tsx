// app/sections/Help.tsx
"use client";

import { Phone, Clock, User, PawPrint } from "lucide-react";
import Link from "next/link";

type HelpProps = {
  id?: string;
};

export function Help({ id }: HelpProps) {
  return (
    <section 
      id={id} 
      className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 via-amber-50 to-white text-emerald-950"
    >
      <div className="max-w-5xl mx-auto px-5 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-emerald-950">
            Quando procurar ajuda?
          </h2>
          <p className="text-emerald-700 text-lg md:text-xl max-w-2xl mx-auto">
            Não espere as lesões piorarem. Ação precoce salva vidas.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Para Humanos */}
          <div className="bg-white shadow-sm border border-emerald-100 rounded-3xl p-8 md:p-10 hover:shadow-xl transition-all duration-500 group">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                <User className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-emerald-900">Em Humanos</h3>
                <p className="text-emerald-600">Procure atendimento médico se:</p>
              </div>
            </div>

            <ul className="space-y-6 text-emerald-800">
              <li className="flex gap-4">
                <div className="text-emerald-600 mt-1.5 text-xl leading-none">•</div>
                <div className="leading-relaxed">
                  Apareceram nódulos ou feridas que não cicatrizam após contato com gato
                </div>
              </li>
              <li className="flex gap-4">
                <div className="text-emerald-600 mt-1.5 text-xl leading-none">•</div>
                <div className="leading-relaxed">
                  As lesões estão se espalhando pelo braço ou corpo
                </div>
              </li>
              <li className="flex gap-4">
                <div className="text-emerald-600 mt-1.5 text-xl leading-none">•</div>
                <div className="leading-relaxed">
                  Você tem febre, cansaço ou os gânglios linfáticos inchados
                </div>
              </li>
            </ul>

            <div className="mt-10 pt-8 border-t border-emerald-100 flex items-center gap-3 text-emerald-600">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium">Procure um Infectologista ou Dermatologista</span>
            </div>
          </div>

          {/* Para Gatos */}
          <div className="bg-white shadow-sm border border-emerald-100 rounded-3xl p-8 md:p-10 hover:shadow-xl transition-all duration-500 group">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                <PawPrint className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-emerald-900">Em Gatos</h3>
                <p className="text-emerald-600">Leve ao veterinário imediatamente se notar:</p>
              </div>
            </div>

            <ul className="space-y-6 text-emerald-800">
              <li className="flex gap-4">
                <div className="text-emerald-600 mt-1.5 text-xl leading-none">•</div>
                <div className="leading-relaxed">
                  Feridas ou nódulos na cabeça, orelhas ou patas
                </div>
              </li>
              <li className="flex gap-4">
                <div className="text-emerald-600 mt-1.5 text-xl leading-none">•</div>
                <div className="leading-relaxed">
                  Perda de pelo ao redor de lesões
                </div>
              </li>
              <li className="flex gap-4">
                <div className="text-emerald-600 mt-1.5 text-xl leading-none">•</div>
                <div className="leading-relaxed">
                  O gato está apático, não come ou emagrecendo
                </div>
              </li>
            </ul>

            <div className="mt-10 pt-8 border-t border-emerald-100 flex items-center gap-3 text-emerald-600">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium">Consulte um Veterinário o quanto antes</span>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-16 md:mt-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff20_1px,transparent_1px)] [background-size:25px_25px]" />
          
          <div className="relative max-w-xl mx-auto">
            <Clock className="w-12 h-12 mx-auto mb-6 text-white/90" />
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
              Não deixe para depois
            </h3>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              A esporotricose tem excelente resposta ao tratamento quando diagnosticada cedo.
            </p>
            
            <Link 
              href="/ajuda"
              className="inline-block bg-white hover:bg-amber-100 text-emerald-950 font-semibold px-10 py-4 rounded-2xl text-lg transition-all active:scale-95"
            >
              Encontrar ajuda perto de mim →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}