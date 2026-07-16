// app/sections/Prevention.tsx
"use client";

import { useState } from "react";
import { Check, Shield, Heart } from "lucide-react";

export function Prevention() {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const preventionTips = [
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


  const getProgressMessage = (progress: number) => {
    if (progress === 0) return "Cuidado!";
    if (progress <= 17) return "Precisa de mais cuidados!";
    if (progress <= 33) return "Ainda não é o suficiente!";
    if (progress <= 50) return "Nada mal!";
    if (progress <= 67) return "Continue assim!";
    if (progress <= 83) return "Muito bom!";
    return "Perfeito!";
  };

  const progressMessage = getProgressMessage(progress);

  return (
    <section id="prevencao" className="py-24 bg-emerald-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full mb-6">
            <Shield className="text-emerald-600" />
            <span className="font-semibold text-emerald-700">PREVENÇÃO</span>
          </div>
          <h2 className="text-5xl font-bold tracking-tight text-emerald-950 mb-4">
            Como prevenir a esporotricose
          </h2>
          <p className="text-xl text-emerald-700">Pequenas ações fazem grande diferença</p>
        </div>

        {/* Progress Bar com mensagem dinâmica */}
        <div className="max-w-md mx-auto mb-12">
          <div className="flex justify-between text-sm mb-2 text-emerald-700">
            <span className="font-medium">{progressMessage}</span>
            <span className="font-semibold">{progress}%</span>
          </div>
          <div className="h-3 bg-white rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center text-xs text-emerald-600 mt-2">
            Marque as ações que você já pratica
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {preventionTips.map((tip) => (
            <div
              key={tip.id}
              onClick={() => toggleCheck(tip.id)}
              className={`card-breathe group bg-white rounded-3xl p-8 cursor-pointer border transition-all duration-300 ${
                checkedItems.includes(tip.id) 
                  ? "border-emerald-500 shadow-md" 
                  : "border-transparent hover:border-emerald-200 hover:shadow"
              }`}
            >
              <div className="flex gap-5">
                <div className="text-4xl">{tip.icon}</div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-xl text-emerald-900 mb-2 pr-6">
                      {tip.title}
                    </h3>
                    <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 transition-all ${
                      checkedItems.includes(tip.id) 
                        ? "bg-emerald-600 border-emerald-600" 
                        : "border-gray-300 group-hover:border-emerald-400"
                    }`}>
                      {checkedItems.includes(tip.id) && <Check size={16} className="text-white" />}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-10 text-center border border-emerald-100">
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