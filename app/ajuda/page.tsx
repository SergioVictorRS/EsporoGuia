// app/ajuda/page.tsx
import { MapPin, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AjudaPage() {
  return (
    <div className="min-h-screen bg-emerald-50 text-emerald-950">
      {/* Header */}
      <div className="border-b border-emerald-100 bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-3 text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Voltar</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <div className="text-2xl">🌿</div>
            <span className="text-xl font-semibold tracking-tight text-emerald-800">EsporoGuia</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-emerald-100 text-emerald-700 px-6 py-3 rounded-3xl mb-6">
            <MapPin className="w-6 h-6" />
            <span className="font-medium text-lg">Onde buscar atendimento</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight text-emerald-900">
            Encontre ajuda<br />profissional
          </h1>
          <p className="text-xl text-emerald-700 max-w-2xl mx-auto">
            Não espere. Quanto antes buscar atendimento, melhor o prognóstico.
          </p>
        </div>

        {/* Conteúdo sequencial (um abaixo do outro) */}

        {/* Humanos */}
        <div className="mb-16">
          <div className="bg-white border border-emerald-100 rounded-3xl p-10 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0">
                🧍‍♂️
              </div>
              <div>
                <h2 className="text-4xl font-semibold mb-1 text-emerald-900">Para Humanos</h2>
                <p className="text-emerald-600 text-lg">Rede pública e especializada</p>
              </div>
            </div>

            <div className="space-y-6 text-emerald-800 text-[17px] leading-relaxed">
              <p>
                Procure uma unidade de saúde mais próxima, como as <strong>Unidades Básicas de Saúde (UBS)</strong> 
                ou hospitais da rede pública municipal e estadual.
              </p>
              <p>
                Esses serviços estão preparados para avaliar os sintomas, realizar o encaminhamento necessário 
                e iniciar o tratamento adequado.
              </p>
              <p>
                Em situações que demandem investigação mais específica, os serviços especializados em doenças 
                infecciosas ou os <strong>Centros de Controle de Zoonoses (CCZ)</strong> podem oferecer 
                orientação complementar e apoio técnico.
              </p>

              <div className="pt-8">
                <a 
                  href="https://www.google.com/maps/search/UBS+ou+hospital+perto+de+mim" 
                  target="_blank"
                  className="inline-flex items-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-8 py-4 rounded-2xl transition"
                >
                  <MapPin className="w-5 h-5" />
                  Buscar UBS ou Hospital mais próximo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Gatos */}
        <div>
          <div className="bg-white border border-emerald-100 rounded-3xl p-10 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0">
                🐱
              </div>
              <div>
                <h2 className="text-4xl font-semibold mb-1 text-emerald-900">Para Gatos</h2>
                <p className="text-emerald-600 text-lg">Atendimento veterinário urgente</p>
              </div>
            </div>

            <div className="space-y-6 text-emerald-800 text-[17px] leading-relaxed">
              <p>
                Se o seu animal apresentar lesões na pele, feridas que não cicatrizam ou secreções, 
                procure atendimento veterinário <strong>imediatamente</strong>.
              </p>
              
              <div className="mt-6">
                <p className="font-medium text-emerald-700 mb-4 text-lg">Onde buscar:</p>
                <ul className="space-y-4 text-[17px]">
                  <li className="flex gap-4">
                    <div className="text-emerald-600 mt-1 text-xl">•</div>
                    <div>Clínicas veterinárias particulares</div>
                  </li>
                  <li className="flex gap-4">
                    <div className="text-emerald-600 mt-1 text-xl">•</div>
                    <div>Hospitais veterinários</div>
                  </li>
                  <li className="flex gap-4">
                    <div className="text-emerald-600 mt-1 text-xl">•</div>
                    <div>Unidades ou serviços públicos de controle de zoonoses (CCZ)</div>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <a 
                  href="https://www.google.com/maps/search/veterinario+ou+CCZ+perto+de+mim" 
                  target="_blank"
                  className="inline-flex items-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-8 py-4 rounded-2xl transition"
                >
                  <MapPin className="w-5 h-5" />
                  Buscar Veterinário ou CCZ mais próximo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}