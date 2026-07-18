export function WhatIs() {
  return (
    <section id="o-que-e" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-900">
          O que é a Esporotricose?
        </h2>

        <div className="max-w-3xl mx-auto space-y-10">
          {/* Frase de impacto */}
          <blockquote className="text-2xl md:text-3xl font-medium text-center text-rose-700 leading-tight border-l-4 border-rose-600 pl-6 py-2">
            “Uma pequena ferida pode representar um grande desafio para a saúde”
          </blockquote>

          {/* Conteúdo principal - expandido */}
          <div className="prose prose-lg text-gray-600 mx-auto space-y-8">
            <p>
              Tudo pode começar com um pequeno machucado no focinho de um gato ou 
              com uma ferida na pele que demora a cicatrizar. Muitas vezes, esses 
              sinais passam despercebidos, atrasando o diagnóstico e aumentando o 
              risco de transmissão da esporotricose. Por ser uma doença silenciosa no 
              início, a atenção aos primeiros sintomas é fundamental tanto para tutores 
              de gatos quanto para as pessoas.
            </p>

            <p>
              A esporotricose é uma doença que afeta tanto animais quanto seres humanos 
              e, por isso, deve ser compreendida a partir da abordagem da <strong>Saúde Única </strong> 
                (One Health). Essa visão integrada considera a estreita conexão entre a 
              saúde humana, a saúde animal e a saúde ambiental, reconhecendo que o 
              bem-estar de um afeta diretamente o dos outros.
            </p>

            {/* Caixa de destaque mantida */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 my-10 shadow-sm">
              <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center gap-2">
                ⚠️ Informações importantes
              </h3>
              <ul className="space-y-3 text-amber-800">
                <li><strong>A esporotricose é uma micose subcutânea</strong>, ou seja, uma infecção causada por fungos que afeta principalmente a pele e os tecidos subcutâneos. Em casos menos comuns, pode atingir outros órgãos.</li>
                <li>
                  No Brasil, a espécie predominante nos surtos urbanos é o 
                  <strong> Sporothrix brasiliensis</strong>, conhecida por sua alta capacidade 
                  de transmissão entre gatos e humanos.
                </li>
                <li>
                  Os gatos atuam como <strong>amplificadores importantes</strong> da doença nas áreas urbanas, 
                  mas <strong>não são a origem</strong> do fungo — eles também se contaminam no ambiente, 
                  assim como as pessoas.
                </li>
              </ul>
            </div>

            <p>
              Os fungos do gênero <em>Sporothrix</em> são encontrados naturalmente no meio ambiente, 
              especialmente no solo, em plantas, madeira em decomposição e matéria orgânica. 
              Eles fazem parte do ecossistema e estão presentes em diversas regiões do mundo. 
              No entanto, em algumas áreas urbanas do Brasil, o fungo encontrou condições 
              ideais para se proliferar de forma mais intensa.
            </p>

            <p>
              Nas cidades brasileiras, os gatos — especialmente os que têm acesso à rua — 
              desempenham um papel fundamental na manutenção e disseminação da cadeia de 
              transmissão. Eles podem se infectar ao arranhar ou morder outros gatos infectados, 
              ou ao explorar o solo e a vegetação contaminada.
            </p>

            <p>
              É muito importante destacar que os gatos <strong>não são os culpados</strong> pela doença. 
              Assim como os seres humanos, eles também são vítimas do fungo presente no ambiente. 
              A esporotricose é uma zoonose, ou seja, uma doença que pode ser transmitida entre 
              animais e pessoas, e seu controle depende de ações conjuntas de conscientização, 
              prevenção e cuidados veterinários e médicos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}