// app/ajuda/page.tsx
import { MapPin, ArrowLeft, User, PawPrint, Phone } from "lucide-react";
import Link from "next/link";

export default function AjudaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-emerald-950">
      {/* Header Elegante */}
      <div className="border-b border-emerald-100 bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-3 text-emerald-700 hover:text-emerald-800 transition-all group"
          >
            <div className="w-9 h-9 rounded-2xl bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <span className="font-medium">Voltar ao site</span>
          </Link>
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-emerald-700 text-white rounded-2xl flex items-center justify-center">
              🌿
            </div>
            <span className="text-2xl font-bold tracking-tighter text-emerald-900">EsporoGuia</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 md:px-6 pt-12 pb-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white shadow-sm border border-emerald-100 px-6 py-3 rounded-3xl mb-8">
            <MapPin className="w-6 h-6 text-emerald-600" />
            <span className="font-semibold text-lg text-emerald-700">Onde buscar atendimento</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight text-emerald-950 mb-6">
            Encontre ajuda<br className="hidden md:block" /> profissional
          </h1>
          <p className="text-xl text-emerald-700 max-w-2xl mx-auto">
            Não espere. Quanto antes buscar atendimento, melhor o prognóstico para você e seu animal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Para Humanos */}
          <div className="bg-white border border-emerald-100 rounded-3xl p-10 md:p-12 shadow-sm hover:shadow-xl transition-all group">
            <div className="flex items-start gap-5 mb-10">
              <div className="w-20 h-20 bg-emerald-100 rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <User className="w-11 h-11 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-4xl font-semibold text-emerald-900 mb-2">Para Humanos</h2>
                <p className="text-emerald-600 text-lg">Rede pública e especializada</p>
              </div>
            </div>

            <div className="space-y-7 text-emerald-800 text-[17px] leading-relaxed">
              <p>
                Comece pela <strong>Unidade Básica de Saúde (UBS)</strong> mais próxima ou um hospital da rede pública. 
                Eles estão preparados para avaliar, tratar e encaminhar quando necessário.
              </p>
              <p>
                Em casos que precisem de maior especialização, busque atendimento em serviços de infectologia, 
                dermatologia ou o <strong>Centro de Controle de Zoonoses (CCZ)</strong>.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-emerald-100">
              <a 
                href="https://www.google.com/maps/search/UBS+ou+hospital+perto+de+mim" 
                target="_blank"
                className="w-full inline-flex items-center justify-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-8 py-4 rounded-2xl transition-all active:scale-[0.985]"
              >
                <MapPin className="w-5 h-5" />
                Buscar UBS ou Hospital mais próximo
              </a>
            </div>
          </div>

          {/* Para Gatos */}
          <div className="bg-white border border-emerald-100 rounded-3xl p-10 md:p-12 shadow-sm hover:shadow-xl transition-all group">
            <div className="flex items-start gap-5 mb-10">
              <div className="w-20 h-20 bg-amber-100 rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <PawPrint className="w-11 h-11 text-amber-600" />
              </div>
              <div>
                <h2 className="text-4xl font-semibold text-emerald-900 mb-2">Para Gatos</h2>
                <p className="text-emerald-600 text-lg">Atendimento veterinário urgente</p>
              </div>
            </div>

            <div className="space-y-7 text-emerald-800 text-[17px] leading-relaxed">
              <p>
                Leve seu gato ao veterinário <strong>imediatamente</strong> ao notar lesões, feridas ou alterações de comportamento.
              </p>
              
              <div>
                <p className="font-medium text-emerald-700 mb-4">Onde buscar atendimento:</p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="text-emerald-600 mt-1">•</div>
                    <div>Clínicas veterinárias particulares</div>
                  </li>
                  <li className="flex gap-4">
                    <div className="text-emerald-600 mt-1">•</div>
                    <div>Hospitais veterinários</div>
                  </li>
                  <li className="flex gap-4">
                    <div className="text-emerald-600 mt-1">•</div>
                    <div>Centro de Controle de Zoonoses (CCZ) da sua cidade</div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-emerald-100">
              <a 
                href="https://www.google.com/maps/search/veterinario+ou+CCZ+perto+de+mim" 
                target="_blank"
                className="w-full inline-flex items-center justify-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-8 py-4 rounded-2xl transition-all active:scale-[0.985]"
              >
                <MapPin className="w-5 h-5" />
                Buscar Veterinário ou CCZ mais próximo
              </a>
            </div>
          </div>
        </div>

        {/* Dica Final */}
        <div className="mt-16 bg-white border border-emerald-100 rounded-3xl p-8 md:p-10 text-center">
          <div className="flex justify-center mb-4">
            <Phone className="w-8 h-8 text-emerald-600" />
          </div>
          <p className="text-emerald-700">
            Procure o serviço de saúde ou veterinário mais próximo.
          </p>
        </div>
      </div>
    </div>
  );
}