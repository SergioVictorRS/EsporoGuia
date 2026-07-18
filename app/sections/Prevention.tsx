// app/sections/Prevention.tsx
"use client";

import { useState } from "react";
import { Check, Shield, Heart } from "lucide-react";

type PreventionTip = {
  id: number;
  title: string;
  desc: string;
  icon: string;
};

type PreventionProps = {
  id?: string;
};

export function Prevention({ id }: PreventionProps) {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const preventionTips: PreventionTip[] = [
    {
      id: 1,
      title: "Castrar e vacinar seus gatos",
      desc: "A castração reduz brigas e a circulação do fungo na população felina.",
      icon: "⚕️"
    },
    {
      id: 2,
      title: "Evitar contato com gatos de rua",
      desc: "Não deixe seus gatos saírem livremente, especialmente machos não castrados.",
      icon: "🏠"
    },
    {
      id: 3,
      title: "Usar luvas ao manusear gatos doentes",
      desc: "Sempre use proteção ao tratar feridas ou dar medicamento.",
      icon: "🧤"
    },
    {
      id: 4,
      title: "Higiene após contato com gatos",
      desc: "Lave bem as mãos com água e sabão após acariciar ou cuidar de gatos.",
      icon: "🧼"
    },
    {
      id: 5,
      title: "Manter feridas protegidas",
      desc: "Qualquer corte ou arranhão na pele deve ser limpo e protegido.",
      icon: "🩹"
    },
    {
      id: 6,
      title: "Consultar veterinário regularmente",
      desc: "Faça check-ups periódicos e leve o gato ao vet ao notar qualquer lesão.",
      icon: "🐾"
    }
  ];

  const toggleCheck = (id: number) => {
    if (checkedItems.includes(id)) {
      setCheckedItems(checkedItems.filter(item => item !== id));
    } else {
      setCheckedItems([...checkedItems, id]);
    }
  };

  const progress = Math.round((checkedItems.length / preventionTips.length) * 100);
  const checkedCount = checkedItems.length;

  const getProgressMessage = (progress: number): string => {
    if (progress === 0) return "Vamos começar?";
    if (progress <= 17) return "Tem bastante a melhorar";
    if (progress <= 33) return "Bom começo!";
    if (progress <= 50) return "Na metade do caminho!";
    if (progress <= 67) return "Muito bem!";
    if (progress <= 83) return "Quase lá!";
    return "Excelente! Você está se protegendo muito bem!";
  };

  const progressMessage = getProgressMessage(progress);

  return (
    <section id={id} className="py-16 md:py-24 bg-emerald-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full mb-6">
            <Shield className="text-emerald-600" size={20} />
            <span className="font-semibold text-emerald-700">PREVENÇÃO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-emerald-950 mb-4">
            Como prevenir a esporotricose
          </h2>
          <p className="text-lg md:text-xl text-emerald-700">Pequenas ações fazem grande diferença</p>
        </div>

        {/* Progresso Melhorado */}
        <div className="max-w-lg mx-auto mb-12 md:mb-16">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-emerald-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="text-2xl">🌱</div>
                <div>
                  <p className="font-semibold text-emerald-800 text-lg">{progressMessage}</p>
                  <p className="text-xs text-emerald-600">
                    {checkedCount} de {preventionTips.length} ações marcadas
                  </p>
                </div>
              </div>
              <div className="text-3xl font-bold text-emerald-600 tabular-nums">{progress}<span className="text-xl">%</span></div>
            </div>

            <div className="relative h-4 bg-emerald-100 rounded-full overflow-hidden shadow-inner">
              <div 
                className="absolute h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 transition-all duration-700 ease-out rounded-full"
                style={{ width: `${progress}%` }}
              />
              <div 
                className="absolute h-full w-12 bg-white/30 rounded-full blur-sm transition-all duration-700"
                style={{ left: `${Math.max(0, progress - 8)}%` }}
              />
            </div>

            <p className="text-center text-xs text-emerald-600 mt-4">
              Marque as ações que você já pratica
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {preventionTips.map((tip) => (
            <div
              key={tip.id}
              onClick={() => toggleCheck(tip.id)}
              className={`card-breathe group bg-white rounded-3xl p-6 md:p-8 cursor-pointer border transition-all duration-300 active:scale-[0.985] ${
                checkedItems.includes(tip.id) 
                  ? "border-emerald-500 shadow-md" 
                  : "border-transparent hover:border-emerald-200 hover:shadow"
              }`}
            >
              <div className="flex gap-5">
                <div className="text-4xl flex-shrink-0">{tip.icon}</div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-lg md:text-xl text-emerald-900 mb-2 pr-4">
                      {tip.title}
                    </h3>
                    <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                      checkedItems.includes(tip.id) 
                        ? "bg-emerald-600 border-emerald-600" 
                        : "border-gray-300 group-hover:border-emerald-400"
                    }`}>
                      {checkedItems.includes(tip.id) && <Check size={16} className="text-white" />}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-[15px] md:text-base">
                    {tip.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 bg-white rounded-3xl p-8 md:p-10 text-center border border-emerald-100 shadow-sm">
          <div className="flex justify-center mb-6">
            <Heart className="text-rose-500" size={48} />
          </div>
          <h3 className="text-2xl font-semibold mb-3">Proteja quem você ama</h3>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            A prevenção é a melhor forma de proteger seus gatos, sua família e toda a comunidade.
          </p>
        </div>
      </div>
    </section>
  );
}