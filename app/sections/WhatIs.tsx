export function WhatIs() {
  return (
    <section id="o-que-e" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Título */}
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 text-gray-900 tracking-tight">
          O que é a Esporotricose?
        </h2>

        <div className="max-w-3xl mx-auto space-y-12">
          {/* Frase de impacto */}
          <blockquote className="text-2xl md:text-3xl font-medium text-center text-rose-700 leading-tight italic border-l-4 border-rose-600 pl-8 py-4 bg-rose-50 rounded-r-2xl">
            “Uma pequena ferida pode representar um grande desafio para a saúde”
          </blockquote>

          {/* Conteúdo principal com texto justificado */}
          <div className="prose prose-lg prose-gray mx-auto max-w-none">
            <div className="space-y-8 text-justify">
              <p>
                Tudo pode começar com um pequeno machucado no focinho de um gato ou 
                com uma ferida na pele que demora a cicatrizar. Muitas vezes, esses 
                sinais passam despercebidos, atrasando o diagnóstico e aumentando o 
                risco de transmissão da esporotricose.
              </p>

              <p>
                Por ser uma doença silenciosa no início, a atenção aos primeiros sintomas 
                é fundamental tanto para tutores de gatos quanto para as pessoas.
              </p>

              <p>
                A esporotricose é uma doença que afeta tanto animais quanto seres humanos 
                e, por isso, deve ser compreendida pela abordagem da <strong>Saúde Única (One Health)</strong>. 
                Essa visão integrada considera a estreita conexão entre saúde humana, saúde animal 
                e saúde ambiental.
              </p>

              {/* Caixa de destaque */}
              <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8 md:p-10 my-12 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                    ⚠️
                  </div>
                  <h3 className="text-2xl font-semibold text-amber-900">
                    Informações importantes
                  </h3>
                </div>

                <ul className="space-y-5 text-amber-800">
                  <li className="flex gap-3">
                    <span className="font-semibold text-amber-900 mt-0.5">•</span>
                    <span>
                      É uma <strong>micose subcutânea</strong> causada por fungos que afeta principalmente 
                      a pele e tecidos subcutâneos, podendo em casos mais graves atingir outros órgãos.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-amber-900 mt-0.5">•</span>
                    <span>
                      No Brasil, a espécie predominante nos surtos urbanos é o 
                      <strong> Sporothrix brasiliensis</strong>, altamente transmissível entre gatos e humanos.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-amber-900 mt-0.5">•</span>
                    <span>
                      Os gatos são <strong>amplificadores importantes</strong> da doença nas áreas urbanas, 
                      mas <strong>não são a origem</strong> do fungo — eles também se contaminam no ambiente.
                    </span>
                  </li>
                </ul>
              </div>

              <p>
                Os fungos do gênero <em>Sporothrix</em> vivem naturalmente no meio ambiente: solo, 
                plantas, madeira em decomposição e matéria orgânica. Eles fazem parte do ecossistema 
                e estão presentes em diversas regiões do mundo.
              </p>

              <p>
                Nas cidades brasileiras, especialmente em áreas urbanas, os gatos com acesso à rua 
                desempenham um papel fundamental na manutenção e disseminação da doença. Eles podem 
                se infectar ao arranhar ou morder outros gatos infectados ou ao explorar solo e vegetação contaminados.
              </p>

              <p className="font-medium text-gray-700">
                É importante reforçar: <strong>os gatos não são os culpados</strong>. Assim como os humanos, 
                eles também são vítimas do fungo presente no ambiente. A esporotricose é uma zoonose, 
                e seu controle depende de conscientização, prevenção e cuidados integrados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}