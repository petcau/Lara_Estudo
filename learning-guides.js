const criarGuiaAprender = (titulo, introducao, diagrama, secoes) => ({
  titulo,
  introducao,
  diagrama,
  secoes,
});

const guiasPortugues = {
  "Tipos de sujeito": criarGuiaAprender(
    "Como reconhecer o sujeito",
    "O sujeito é o termo sobre o qual se declara alguma coisa. Para encontrá-lo, localize o verbo e pergunte quem ou o que participa daquele fato.",
    ["Localize o verbo", "Faça a pergunta", "Ache o núcleo", "Observe a forma"],
    [
      { titulo: "Os cinco casos", texto: "Simples tem um núcleo; composto tem dois ou mais; oculto é recuperado pela terminação verbal; indeterminado não pode ser identificado; oração sem sujeito ocorre com verbos impessoais.", exemplos: ["A turma chegou cedo. → um núcleo", "Lia e Beto chegaram cedo. → dois núcleos", "Chegamos cedo. → o pronome está implícito"] },
      { titulo: "Atenção ao verbo", texto: "Haver com sentido de existir e fazer indicando tempo são impessoais. Nesses casos, o verbo fica na terceira pessoa do singular.", exemplos: ["Havia muitas pessoas no local.", "Faz três meses que viajamos."] },
      { titulo: "Estratégia", texto: "Não escolha o primeiro substantivo automaticamente. Descubra quem concorda com o verbo e qual palavra é o centro do sujeito.", exemplos: ["Os livros da estante caíram. → livros é o núcleo"] },
    ],
  ),
  "Tipos de predicado": criarGuiaAprender(
    "O que o predicado informa",
    "Predicado é tudo o que se declara sobre o sujeito. Sua classificação depende do núcleo: ação, característica ou os dois juntos.",
    ["Separe o sujeito", "Observe o verbo", "Procure uma característica", "Identifique o núcleo"],
    [
      { titulo: "Três tipos", texto: "No verbal, o núcleo é um verbo de ação. No nominal, o núcleo é uma característica ligada ao sujeito. No verbo-nominal, aparecem ação e característica ao mesmo tempo.", exemplos: ["Os atletas treinaram. → ação", "A praça permanece tranquila. → característica", "Os atletas voltaram cansados. → ação + estado"] },
      { titulo: "Predicativo", texto: "Predicativo é a palavra que atribui estado ou qualidade ao sujeito ou ao objeto. Verbos como ser, estar, parecer e permanecer costumam funcionar como ligação.", exemplos: ["O caminho parece longo.", "Consideraram o projeto útil."] },
      { titulo: "Teste rápido", texto: "Se retirar a característica e ainda restar uma ação completa, pode haver predicado verbo-nominal. Se o verbo apenas liga o sujeito à característica, o predicado é nominal.", exemplos: ["Ela saiu contente. → saiu + contente"] },
    ],
  ),
  "Transitividade verbal": criarGuiaAprender(
    "O verbo precisa de complemento?",
    "A transitividade mostra se um verbo tem sentido completo ou se precisa de uma informação para completar sua ideia.",
    ["Encontre o verbo", "Leia sem o complemento", "Faça a pergunta", "Observe a preposição"],
    [
      { titulo: "Mapa dos verbos", texto: "Verbo intransitivo tem sentido completo. Transitivo direto pede complemento sem preposição obrigatória. Transitivo indireto exige preposição. Direto e indireto recebe os dois tipos.", exemplos: ["A criança dormiu.", "A criança abriu a janela.", "A criança confia nos amigos.", "Ela enviou o recado ao grupo."] },
      { titulo: "Verbo de ligação", texto: "Ele não expressa uma ação principal: liga o sujeito a um estado ou qualidade.", exemplos: ["O céu ficou escuro.", "A resposta parece correta."] },
      { titulo: "O contexto manda", texto: "Um mesmo verbo pode mudar de transitividade quando muda de sentido. Sempre analise a frase inteira.", exemplos: ["Aspirou o perfume. / Aspirou à liderança."] },
    ],
  ),
  "Complementos verbais": criarGuiaAprender(
    "Objeto direto e objeto indireto",
    "Complementos verbais terminam o sentido de verbos transitivos. O ponto principal é observar se o verbo exige ou não uma preposição.",
    ["Ache o verbo", "Pergunte o quê/quem", "Procure preposição", "Classifique o complemento"],
    [
      { titulo: "Objeto direto", texto: "Liga-se ao verbo sem preposição obrigatória. Pode ser retomado, em muitos casos, pelos pronomes o, a, os e as.", exemplos: ["Rafa comprou um mapa.", "Rafa o comprou ontem."] },
      { titulo: "Objeto indireto", texto: "Vem acompanhado da preposição exigida pelo verbo. Os pronomes lhe e lhes podem retomar complementos introduzidos por a.", exemplos: ["Nós confiamos em nossa equipe.", "Entreguei-lhe um convite."] },
      { titulo: "Não confunda", texto: "Nem todo termo com preposição é objeto indireto. Uma expressão pode indicar lugar, tempo ou modo; verifique se o verbo realmente exige aquela informação.", exemplos: ["Ela mora no interior. → indicação de lugar", "Ela precisa de descanso. → complemento exigido"] },
    ],
  ),
  "Vozes verbais — agente da passiva": criarGuiaAprender(
    "Quem pratica e quem recebe a ação",
    "As vozes verbais mostram a relação entre o sujeito e a ação: ele pode praticá-la, recebê-la ou praticá-la sobre si mesmo.",
    ["Encontre a ação", "Identifique o sujeito", "Veja quem age", "Veja quem recebe"],
    [
      { titulo: "Ativa e passiva", texto: "Na ativa, o sujeito pratica a ação. Na passiva, o sujeito recebe a ação. A passiva analítica usa uma forma de ser mais particípio.", exemplos: ["A equipe preparou o evento.", "O evento foi preparado pela equipe."] },
      { titulo: "Agente da passiva", texto: "É o termo que pratica a ação dentro de uma oração passiva. Costuma aparecer introduzido por por, pelo ou pela.", exemplos: ["A ponte foi projetada pelos engenheiros."] },
      { titulo: "Passiva com se", texto: "Na passiva sintética, o verbo concorda com o sujeito paciente. Um bom teste é transformar a frase em ser + particípio.", exemplos: ["Publicam-se histórias. → Histórias são publicadas."] },
    ],
  ),
  "Período composto por coordenação e subordinação": criarGuiaAprender(
    "Como separar as orações",
    "Cada verbo ou locução verbal normalmente indica uma oração. Um período composto apresenta duas ou mais orações relacionadas.",
    ["Circule os verbos", "Separe as orações", "Teste a independência", "Observe o conectivo"],
    [
      { titulo: "Coordenação", texto: "As orações têm estrutura sintática independente. Uma não ocupa uma função dentro da outra.", exemplos: ["A aula terminou e todos saíram."] },
      { titulo: "Subordinação", texto: "Uma oração depende da outra e exerce uma função nela, como complemento, característica ou circunstância.", exemplos: ["Espero que todos participem.", "Quando a aula terminou, todos saíram."] },
      { titulo: "Período misto", texto: "Um mesmo período pode ter coordenação e subordinação. Analise cada ligação separadamente.", exemplos: ["Quando anoiteceu, voltamos e fechamos as janelas."] },
    ],
  ),
  "Orações coordenadas — classificação": criarGuiaAprender(
    "As relações entre ideias independentes",
    "Orações coordenadas são independentes na estrutura, mas estabelecem relações de sentido por meio da pontuação e das conjunções.",
    ["Separe as orações", "Localize a conjunção", "Entenda a relação", "Classifique"],
    [
      { titulo: "Sem ou com conjunção", texto: "A coordenada assindética não tem conjunção. A sindética tem conectivo e recebe uma classificação de sentido.", exemplos: ["Abriu o livro, começou a leitura.", "Abriu o livro e começou a leitura."] },
      { titulo: "Relações principais", texto: "Aditiva soma; adversativa opõe; alternativa apresenta escolha; conclusiva traz conclusão; explicativa justifica uma ideia ou ordem.", exemplos: ["Treinou, mas não competiu.", "Faça silêncio, pois a apresentação começou."] },
      { titulo: "Leia o sentido", texto: "Não classifique apenas decorando uma palavra. Pois, por exemplo, pode mudar de valor conforme a posição e a relação entre as ideias.", exemplos: ["Estudou; foi, pois, aprovado."] },
    ],
  ),
  "Orações subordinadas substantivas": criarGuiaAprender(
    "Quando uma oração vale por um substantivo",
    "A oração subordinada substantiva ocupa uma função que poderia ser exercida por um substantivo. O teste inicial é substituir toda a oração por isso.",
    ["Isole a oração", "Troque por isso", "Descubra a função", "Classifique"],
    [
      { titulo: "Funções ligadas ao verbo", texto: "Pode funcionar como sujeito, objeto direto ou objeto indireto. A presença de preposição ajuda a distinguir os objetos.", exemplos: ["É necessário que todos colaborem. → Isso é necessário.", "Desejo que você participe. → Desejo isso."] },
      { titulo: "Funções ligadas a nomes", texto: "Pode completar um nome, funcionar como predicativo ou explicar um termo anterior como aposto.", exemplos: ["Tenho certeza de que dará certo.", "Meu desejo é que haja paz.", "Só peço isto: que tenham calma."] },
      { titulo: "Pergunta-chave", texto: "Descubra qual termo está incompleto e qual função a oração exerce em relação a ele. A conjunção que sozinha não define a classificação.", exemplos: ["Duvido de que ele venha. → completa um verbo com preposição"] },
    ],
  ),
};

const guiasCiencias = {
  "Digestão: funções e tipos": criarGuiaAprender("Transformação dos alimentos", "A digestão quebra os alimentos em partículas que o organismo consegue absorver e utilizar.", ["Alimento", "Quebra mecânica", "Quebra química", "Nutrientes"], [
    { titulo: "Duas formas de digestão", texto: "A mecânica reduz e mistura o alimento; a química usa enzimas e outras substâncias para transformar moléculas.", exemplos: ["Mastigação: processo mecânico", "Ação da amilase: processo químico"] },
    { titulo: "Objetivo", texto: "Moléculas grandes precisam virar unidades menores capazes de atravessar a parede intestinal.", exemplos: ["Proteínas são desdobradas em aminoácidos."] },
  ]),
  "Caminho e órgãos da digestão": criarGuiaAprender("A viagem do alimento", "O tubo digestório é um caminho contínuo. Órgãos anexos produzem ou armazenam substâncias que ajudam a digestão.", ["Boca", "Esôfago", "Estômago", "Intestinos"], [
    { titulo: "Caminho principal", texto: "O alimento passa por boca, faringe, esôfago, estômago, intestino delgado, intestino grosso, reto e ânus.", exemplos: ["O peristaltismo empurra o bolo alimentar."] },
    { titulo: "Órgãos anexos", texto: "Glândulas salivares, fígado e pâncreas participam produzindo secreções, mas o alimento não passa dentro deles.", exemplos: ["O fígado produz a bile; o pâncreas libera suco pancreático."] },
  ]),
  "Intestinos e absorção": criarGuiaAprender("Absorver e aproveitar", "Depois da digestão, os nutrientes atravessam a parede intestinal e chegam ao sangue ou à linfa.", ["Nutriente", "Vilosidade", "Sangue/linfa", "Células"], [
    { titulo: "Intestino delgado", texto: "É o principal local de digestão final e absorção. Dobras, vilosidades e microvilosidades aumentam muito a área de contato.", exemplos: ["Maior superfície permite absorver mais nutrientes."] },
    { titulo: "Intestino grosso", texto: "Reabsorve água e sais, abriga parte da microbiota e participa da formação das fezes.", exemplos: ["A retirada de água deixa o resíduo mais consistente."] },
  ]),
  "Nutrientes": criarGuiaAprender("Combustível e construção do corpo", "Cada grupo de nutrientes desempenha funções importantes; uma alimentação equilibrada combina diferentes fontes.", ["Alimento", "Nutriente", "Função", "Uso pelo corpo"], [
    { titulo: "Principais grupos", texto: "Carboidratos fornecem energia rápida; lipídios armazenam energia; proteínas constroem e reparam; vitaminas e minerais regulam processos.", exemplos: ["Arroz: fonte de carboidrato", "Feijão: fonte de proteínas e minerais"] },
    { titulo: "Água e fibras", texto: "A água participa de reações e transporte. Fibras ajudam o trânsito intestinal e alimentam a microbiota.", exemplos: ["Frutas e verduras costumam oferecer água e fibras."] },
  ]),
  "Sistemas excretor e urinário": criarGuiaAprender("Equilíbrio e eliminação", "A excreção remove resíduos do metabolismo. O sistema urinário filtra o sangue e ajuda a controlar água, sais e acidez.", ["Sangue", "Rins", "Urina", "Eliminação"], [
    { titulo: "Caminho da urina", texto: "Os rins formam a urina; os ureteres a levam à bexiga; a uretra conduz a urina para fora.", exemplos: ["Rim → ureter → bexiga → uretra"] },
    { titulo: "Mais que eliminar", texto: "Os rins também participam do equilíbrio interno do organismo, ajustando a quantidade de água e sais.", exemplos: ["Em falta de água, o organismo tende a produzir urina mais concentrada."] },
  ]),
  "Respiração celular e mecânica": criarGuiaAprender("Duas ideias chamadas respiração", "Respiração pulmonar movimenta o ar e realiza trocas gasosas; respiração celular libera energia dentro das células.", ["Ventilação", "Troca gasosa", "Transporte", "Energia celular"], [
    { titulo: "Ventilação", texto: "Na inspiração, o volume da caixa torácica aumenta e o ar entra. Na expiração, o volume diminui e o ar sai.", exemplos: ["O diafragma participa da mudança de volume do tórax."] },
    { titulo: "Nas células", texto: "Nutrientes e oxigênio podem ser usados para liberar energia, produzindo também água e gás carbônico.", exemplos: ["A energia liberada sustenta atividades celulares."] },
  ]),
  "Caminho do ar e anatomia": criarGuiaAprender("Da entrada do ar aos pulmões", "As vias respiratórias conduzem, filtram, aquecem e umidificam o ar antes das trocas gasosas.", ["Nariz", "Faringe/laringe", "Traqueia", "Brônquios"], [
    { titulo: "Sequência", texto: "O ar passa por cavidades nasais, faringe, laringe, traqueia, brônquios e bronquíolos até chegar aos alvéolos.", exemplos: ["A traqueia se ramifica em dois brônquios principais."] },
    { titulo: "Proteção", texto: "Muco, cílios e pelos ajudam a reter partículas; a epiglote ajuda a impedir a entrada de alimento nas vias respiratórias.", exemplos: ["Os cílios deslocam muco e impurezas."] },
  ]),
  "Alvéolos, trocas gasosas e proteção": criarGuiaAprender("Onde o ar encontra o sangue", "Alvéolos são pequenas bolsas cercadas por capilares. Suas paredes finas favorecem a difusão dos gases.", ["Ar alveolar", "Parede fina", "Capilar", "Difusão"], [
    { titulo: "Troca gasosa", texto: "O oxigênio tende a passar dos alvéolos para o sangue; o gás carbônico faz o caminho oposto.", exemplos: ["A diferença de concentração orienta a difusão."] },
    { titulo: "Estrutura eficiente", texto: "Muitos alvéolos criam grande área de contato, enquanto a rede de capilares mantém o sangue próximo ao ar.", exemplos: ["Grande área + pequena distância facilitam as trocas."] },
  ]),
  "Sistema cardiovascular e sangue": criarGuiaAprender("Transporte dentro do organismo", "O sistema cardiovascular distribui gases, nutrientes, hormônios e calor, além de recolher resíduos.", ["Coração", "Vasos", "Sangue", "Tecidos"], [
    { titulo: "Componentes do sangue", texto: "Plasma transporta substâncias; hemácias carregam grande parte do oxigênio; leucócitos atuam na defesa; plaquetas ajudam na coagulação.", exemplos: ["A hemoglobina das hemácias liga-se ao oxigênio."] },
    { titulo: "Circuito", texto: "O coração impulsiona o sangue através de artérias, capilares e veias.", exemplos: ["Nos capilares ocorrem trocas com os tecidos."] },
  ]),
  "Coração, vasos e circulação": criarGuiaAprender("Uma bomba e dois circuitos", "O coração mantém o sangue em movimento. A circulação pulmonar passa pelos pulmões; a sistêmica atende o restante do corpo.", ["Coração direito", "Pulmões", "Coração esquerdo", "Corpo"], [
    { titulo: "Vasos", texto: "Artérias levam sangue para fora do coração; veias trazem sangue de volta; capilares permitem trocas.", exemplos: ["O nome do vaso depende do sentido do fluxo, não da quantidade de oxigênio."] },
    { titulo: "Câmaras", texto: "Átrios recebem sangue e ventrículos o impulsionam. Válvulas ajudam a evitar o refluxo.", exemplos: ["O ventrículo esquerdo bombeia para a circulação sistêmica."] },
  ]),
};

const guiasIngles = {
  leitura: criarGuiaAprender("Como compreender um texto em inglês", "Não é preciso traduzir cada palavra. Primeiro entenda o assunto, depois procure evidências para a informação pedida.", ["Título e imagens", "Ideia principal", "Palavras-chave", "Evidência no texto"], [
    { titulo: "Leitura em camadas", texto: "Faça uma leitura rápida para captar o tema. Depois volte ao trecho relacionado à pergunta e compare ideias, não apenas palavras iguais.", exemplos: ["because costuma introduzir uma razão; however sinaliza contraste."] },
    { titulo: "Contexto", texto: "Use palavras conhecidas, cognatos e a frase ao redor para inferir termos novos. Desconfie de falsos cognatos.", exemplos: ["different lembra diferente; actually significa na verdade."] },
  ]),
  presentPerfect: criarGuiaAprender("Present perfect e experiências", "O present perfect conecta passado e presente. É formado por have ou has mais o particípio do verbo.", ["Sujeito", "have/has", "particípio", "complemento"], [
    { titulo: "Forma", texto: "Use have com I, you, we e they; use has com he, she e it. Na negativa, acrescente not.", exemplos: ["They have visited Chile.", "She has not tried surfing."] },
    { titulo: "Experiências", texto: "Ever aparece muito em perguntas; never indica nenhuma vez. Been sugere ida e volta; gone pode indicar que a pessoa ainda está fora.", exemplos: ["Have you ever climbed a mountain?", "He has never slept outdoors."] },
    { titulo: "Particípios", texto: "Regulares costumam terminar em -ed; irregulares precisam ser aprendidos.", exemplos: ["play → played", "write → written", "see → seen"] },
  ]),
  future: criarGuiaAprender("Previsões com will e be going to", "As duas formas falam do futuro, mas a escolha depende da base da previsão.", ["Há evidência agora?", "Sim: be going to", "É opinião?", "Sim: will"], [
    { titulo: "Be going to", texto: "Use am/is/are going to quando há sinais presentes ou uma intenção já formada.", exemplos: ["Look at those clouds! It is going to rain."] },
    { titulo: "Will", texto: "Use will para opiniões, previsões sem evidência visível, decisões imediatas e promessas.", exemplos: ["I think cities will become greener."] },
  ]),
  superlative: criarGuiaAprender("Comparar um elemento com todo o grupo", "O superlativo destaca o grau máximo ou mínimo dentro de um conjunto e normalmente aparece com the.", ["Defina o grupo", "Veja o adjetivo", "Forme o superlativo", "Complete a comparação"], [
    { titulo: "Adjetivos curtos", texto: "Geralmente recebem -est. Algumas grafias mudam: big dobra a consoante; busy troca y por i.", exemplos: ["small → the smallest", "big → the biggest", "busy → the busiest"] },
    { titulo: "Adjetivos longos e irregulares", texto: "Adjetivos longos usam the most. Alguns têm formas próprias.", exemplos: ["the most interesting", "good → the best", "bad → the worst"] },
  ]),
  feelings: criarGuiaAprender("Feelings e preposições", "Muitos adjetivos de sentimento formam combinações fixas com preposições. Aprenda a expressão como um bloco.", ["Pessoa", "Sentimento", "Preposição", "Motivo ou alvo"], [
    { titulo: "Combinações úteis", texto: "Alguns padrões comuns são interested in, proud of, scared of, happy about e angry with.", exemplos: ["Mia is proud of her project.", "They are interested in astronomy."] },
    { titulo: "Sentido", texto: "Observe se o complemento indica assunto, causa ou pessoa. Isso ajuda a escolher a combinação natural.", exemplos: ["angry with a person", "nervous about an event"] },
  ]),
  experiences: criarGuiaAprender("Experiências e planos", "Vocabulário de experiências combina ações com lugares e objetivos. Observe o verbo principal e as expressões que costumam acompanhá-lo.", ["Ação", "Experiência", "Tempo", "Detalhe"], [
    { titulo: "Blocos de vocabulário", texto: "Aprenda expressões completas, não palavras isoladas.", exemplos: ["go backpacking", "camp under the stars", "sail around the world", "perform with a band"] },
    { titulo: "Experiência ou plano", texto: "Present perfect fala do que alguém já viveu sem marcar um tempo terminado; be going to pode apresentar uma intenção futura.", exemplos: ["I have tried snorkeling.", "I am going to camp next weekend."] },
  ]),
  issues: criarGuiaAprender("Problemas globais e meio ambiente", "Para compreender esse tema, relacione cada problema às suas causas, consequências e possíveis ações.", ["Problema", "Causa", "Consequência", "Solução"], [
    { titulo: "Vocabulário-chave", texto: "Climate change, pollution, drought, flood, wildfire e overpopulation descrevem desafios diferentes.", exemplos: ["A drought is a long period with very little rain.", "A flood covers normally dry land with water."] },
    { titulo: "Linguagem de causa", texto: "because apresenta causa; as a result e so apresentam consequência.", exemplos: ["The temperature rose, so the ice melted faster."] },
  ]),
  relative: criarGuiaAprender("Pronomes relativos", "Pronomes relativos conectam informações e evitam repetição de um nome.", ["Nome anterior", "Pronome relativo", "Informação adicional", "Frase unida"], [
    { titulo: "Escolha pelo referente", texto: "Who costuma retomar pessoas; which, coisas e animais; that pode retomar pessoas ou coisas em muitos contextos; where retoma lugares.", exemplos: ["The artist who painted this is young.", "This is the studio where she works."] },
    { titulo: "Função na oração", texto: "Observe se o pronome realiza ou recebe a ação dentro da oração relativa.", exemplos: ["The film that we watched was creative."] },
  ]),
  questions: criarGuiaAprender("Subject questions e object questions", "A estrutura da pergunta muda conforme a informação desconhecida seja o sujeito ou o objeto da ação.", ["Quem é desconhecido?", "Pratica a ação?", "Subject question", "Recebe a ação? Object question"], [
    { titulo: "Pergunta sobre o sujeito", texto: "Quando who ou what representa quem pratica a ação, não usamos do ou does.", exemplos: ["Who created this sculpture?"] },
    { titulo: "Pergunta sobre o objeto", texto: "Quando perguntamos quem ou o que recebeu a ação, usamos o auxiliar adequado.", exemplos: ["What did the students create?"] },
  ]),
  phrasal: criarGuiaAprender("Phrasal verbs", "Um phrasal verb combina verbo e partícula para criar um sentido próprio. Traduza o conjunto, não cada palavra separadamente.", ["Verbo", "+ partícula", "Novo sentido", "Contexto"], [
    { titulo: "Aprenda em frases", texto: "A mesma partícula pode produzir sentidos diferentes. O contexto mostra a ação real.", exemplos: ["She got on the bus.", "They set off early.", "He came back at noon."] },
    { titulo: "Movimento", texto: "Em viagens, partículas como on, off, back e away frequentemente indicam direção ou mudança de posição.", exemplos: ["get off a train", "go away for the weekend"] },
  ]),
  art: criarGuiaAprender("Arte, criatividade e opinião", "Textos sobre arte misturam descrição, materiais, processo criativo e opinião. Separe fatos do que alguém pensa.", ["Obra", "Material/técnica", "Descrição", "Opinião"], [
    { titulo: "Vocabulário", texto: "Adjetivos ajudam a descrever aparência e efeito; verbos indicam o processo de criação.", exemplos: ["colorful, unusual, realistic", "paint, design, perform, decorate"] },
    { titulo: "Opiniões e comparações", texto: "Expressões como I think, in my opinion e more... than revelam avaliação ou comparação.", exemplos: ["In my opinion, the second design is more original."] },
  ]),
  travel: criarGuiaAprender("Lugares, viagens e natureza", "Identifique características do lugar, atividades possíveis e palavras que expressam comparação ou localização.", ["Lugar", "Característica", "Atividade", "Comparação"], [
    { titulo: "Descrição", texto: "Adjetivos descrevem tamanho, beleza, movimento e sensação; preposições localizam elementos.", exemplos: ["a quiet lake", "a trail through the forest", "a hotel near the park"] },
    { titulo: "Informações práticas", texto: "Tabelas e anúncios exigem comparar dados como preço, tamanho, distância e avaliação.", exemplos: ["Room A is cheaper than Room B."] },
  ]),
  fomo: criarGuiaAprender("FOMO, JOMO e hábitos digitais", "FOMO é a preocupação de estar perdendo algo; JOMO valoriza escolher ficar de fora e aproveitar o momento.", ["Situação digital", "Sentimento", "Escolha", "Bem-estar"], [
    { titulo: "Contraste de ideias", texto: "Procure palavras que mostram oposição entre ansiedade de acompanhar tudo e satisfação com uma escolha mais tranquila.", exemplos: ["She turned off notifications and enjoyed a quiet evening."] },
    { titulo: "Leitura crítica", texto: "Diferencie o que o texto afirma, o exemplo apresentado e a opinião de uma personagem.", exemplos: ["however marca contraste; for example introduz ilustração."] },
  ]),
};

function normalizarConteudoGuia(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function obterGuiaAprender(questao) {
  if (questao.materia === "Português — 9º ano") return guiasPortugues[questao.conteudo];
  if (questao.materia === "Ciências") return guiasCiencias[questao.conteudo];

  const conteudo = normalizarConteudoGuia(`${questao.conteudo} ${questao.capitulo}`);
  if (conteudo.includes("present perfect") || conteudo.includes("been e gone")) return guiasIngles.presentPerfect;
  if (conteudo.includes("superlative") || conteudo.includes("comparacao") || conteudo.includes("comparacoes") || conteudo.includes("hoteis")) return guiasIngles.superlative;
  if (conteudo.includes("feeling")) return guiasIngles.feelings;
  if (conteudo.includes("will") || conteudo.includes("going to") || conteudo.includes("previs")) return guiasIngles.future;
  if (conteudo.includes("fomo") || conteudo.includes("jomo")) return guiasIngles.fomo;
  if (conteudo.includes("phrasal")) return guiasIngles.phrasal;
  if (conteudo.includes("pronome") || conteudo.includes("relative")) return guiasIngles.relative;
  if (conteudo.includes("subject") || conteudo.includes("object question")) return guiasIngles.questions;
  if (conteudo.includes("problema") || conteudo.includes("big issue") || conteudo.includes("ocean cleanup") || conteudo.includes("fatos globais")) return guiasIngles.issues;
  if (conteudo.includes("arte") || conteudo.includes("art") || conteudo.includes("criativ") || conteudo.includes("cosplay") || conteudo.includes("graffiti") || conteudo.includes("creator")) return guiasIngles.art;
  if (conteudo.includes("experien") || conteudo.includes("bucket") || conteudo.includes("capitulo 7")) return guiasIngles.experiences;
  if (conteudo.includes("viagem") || conteudo.includes("aventura") || conteudo.includes("lugar") || conteudo.includes("natureza") || conteudo.includes("yosemite")) return guiasIngles.travel;
  return guiasIngles.leitura;
}
