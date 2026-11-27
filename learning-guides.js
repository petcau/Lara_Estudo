const criarGuiaAprender = (titulo, introducao, diagrama, secoes, conceitos = []) => ({
  titulo,
  introducao,
  diagrama,
  secoes,
  conceitos,
});

const guiasPortugues = {
  "Tipos de sujeito": criarGuiaAprender(
    "Tipos de sujeito: descubra de quem se fala",
    "Sujeito é o termo sobre o qual o predicado declara algo. O caminho seguro é partir do verbo, verificar a concordância e só então classificar.",
    ["Marque o verbo", "Pergunte quem/o quê", "Ache o núcleo", "Conte os núcleos", "Verifique casos especiais"],
    [
      { titulo: "Sujeito determinado", tom: "roxo", texto: "É possível reconhecer o sujeito. Ele é simples quando possui um núcleo, composto quando possui dois ou mais e oculto quando não está escrito, mas pode ser recuperado.", termos: ["simples = 1 núcleo", "composto = 2 ou mais", "oculto = identificável"], exemplos: ["A turma chegou cedo. → núcleo: turma", "Lia e Beto chegaram. → núcleos: Lia + Beto", "Chegamos cedo. → sujeito oculto: nós"] },
      { titulo: "Indeterminado x inexistente", tom: "azul", texto: "No indeterminado, alguém pratica a ação, mas não sabemos quem. Na oração sem sujeito, nenhum ser pratica a ação: o verbo é impessoal.", termos: ["3ª pessoa do plural", "verbo + se", "verbo impessoal"], exemplos: ["Bateram à porta. → alguém bateu", "Precisa-se de ajuda. → não se identifica quem precisa", "Choveu ontem. → fenômeno da natureza"] },
      { titulo: "Verbos impessoais", tom: "amarelo", texto: "Haver com sentido de existir, fazer indicando tempo e fenômenos naturais em sentido literal formam oração sem sujeito e ficam no singular.", termos: ["há = existe", "faz = tempo decorrido", "clima literal"], exemplos: ["Havia muitas pessoas.", "Faz dois anos que estudo aqui.", "Anoiteceu cedo."] },
      { titulo: "Armadilha frequente", tom: "verde", texto: "O núcleo é a palavra central do sujeito, não necessariamente o substantivo mais perto do verbo. Confirme pela concordância.", termos: ["núcleo", "concordância", "termos acessórios"], exemplos: ["Os livros da estante caíram. → livros é o núcleo"] },
    ],
    [
      { termo: "Simples", resumo: "um núcleo", tom: "roxo" }, { termo: "Composto", resumo: "dois ou mais núcleos", tom: "azul" },
      { termo: "Oculto", resumo: "não aparece, mas é recuperável", tom: "verde" }, { termo: "Indeterminado", resumo: "existe, porém não é identificado", tom: "laranja" },
      { termo: "Sem sujeito", resumo: "verbo impessoal", tom: "amarelo" },
    ],
  ),
  "Tipos de predicado": criarGuiaAprender(
    "Tipos de predicado: ação, estado ou os dois",
    "Predicado é aquilo que se declara sobre o sujeito. Para classificá-lo, descubra qual informação funciona como núcleo: verbo de ação, nome ou ambos.",
    ["Separe o sujeito", "Localize o verbo", "Procure estado/qualidade", "Ache o núcleo", "Classifique"],
    [
      { titulo: "Predicado verbal", tom: "roxo", texto: "O núcleo é um verbo significativo, que expressa ação, acontecimento ou processo.", termos: ["núcleo = verbo", "ação/processo"], exemplos: ["Os atletas treinaram. → treinaram é o núcleo"] },
      { titulo: "Predicado nominal", tom: "verde", texto: "O núcleo é um nome que atribui estado ou característica ao sujeito. Um verbo de ligação une as duas partes.", termos: ["verbo de ligação", "predicativo do sujeito"], exemplos: ["A praça permanece tranquila. → tranquila é o núcleo"] },
      { titulo: "Predicado verbo-nominal", tom: "laranja", texto: "Possui dois núcleos: um verbo significativo e um predicativo, que indica estado do sujeito ou do objeto.", termos: ["ação + característica", "dois núcleos"], exemplos: ["Os atletas voltaram cansados. → voltaram + cansados", "Julgaram o plano arriscado. → julgaram + arriscado"] },
      { titulo: "Teste de decisão", tom: "azul", texto: "Se o verbo apenas liga o sujeito a uma qualidade, é nominal. Se há ação completa e também uma qualidade, é verbo-nominal.", termos: ["apenas ligação?", "há ação?", "há predicativo?"], exemplos: ["Ela está contente. → nominal", "Ela saiu contente. → verbo-nominal"] },
    ],
    [
      { termo: "Verbal", resumo: "núcleo = verbo de ação", tom: "roxo" }, { termo: "Nominal", resumo: "núcleo = nome/predicativo", tom: "verde" },
      { termo: "Verbo-nominal", resumo: "ação + predicativo", tom: "laranja" }, { termo: "Predicativo", resumo: "estado ou qualidade", tom: "azul" },
    ],
  ),
  "Transitividade verbal": criarGuiaAprender(
    "Transitividade: o verbo precisa de quê?",
    "A transitividade descreve a relação do verbo com seus complementos. Analise sempre o sentido que o verbo possui naquela frase.",
    ["Encontre o verbo", "Teste o sentido", "Faça a pergunta", "Veja a preposição", "Classifique"],
    [
      { titulo: "Intransitivo e transitivo direto", tom: "roxo", texto: "O verbo intransitivo (VI) tem sentido completo. O transitivo direto (VTD) exige complemento sem preposição obrigatória.", termos: ["VI = sentido completo", "VTD = objeto direto"], exemplos: ["A criança dormiu. → verbo intransitivo", "A criança abriu a janela. → abriu o quê?"] },
      { titulo: "Transitivo indireto e direto-indireto", tom: "azul", texto: "O transitivo indireto (VTI) exige complemento com preposição. O direto e indireto (VTDI) pede dois complementos: um sem e outro com preposição.", termos: ["VTI = preposição exigida", "VTDI = OD + OI"], exemplos: ["Ela confia nos amigos. → confia em quem?", "Ela enviou o recado ao grupo. → o quê? a quem?"] },
      { titulo: "Verbo de ligação", tom: "verde", texto: "Não apresenta uma ação principal. Ele conecta o sujeito a um estado, qualidade ou condição chamada predicativo.", termos: ["ser", "estar", "parecer", "permanecer", "ficar"], exemplos: ["O céu ficou escuro. → liga céu a escuro"] },
      { titulo: "O contexto decide", tom: "amarelo", texto: "O mesmo verbo pode mudar de classificação conforme o significado e a construção. Nunca classifique um verbo isolado.", termos: ["sentido da frase", "regência", "contexto"], exemplos: ["Ela aspirou o perfume. → VTD", "Ela aspirou ao cargo. → VTI"] },
    ],
    [
      { termo: "VI · intransitivo", resumo: "não exige complemento", tom: "verde" }, { termo: "VTD · transitivo direto", resumo: "complemento sem preposição", tom: "roxo" },
      { termo: "VTI · transitivo indireto", resumo: "complemento com preposição", tom: "azul" }, { termo: "VTDI · direto e indireto", resumo: "dois complementos", tom: "laranja" },
      { termo: "VL · ligação", resumo: "liga sujeito a uma característica", tom: "amarelo" },
    ],
  ),
  "Complementos verbais": criarGuiaAprender(
    "Complementos verbais: OD ou OI?",
    "Objeto direto e objeto indireto completam verbos transitivos. A diferença central é saber se a preposição é exigida pelo verbo.",
    ["Ache o verbo", "Descubra sua regência", "Faça a pergunta", "Veja a preposição", "Confirme com pronome"],
    [
      { titulo: "Objeto direto (OD)", tom: "roxo", texto: "Completa um verbo transitivo direto sem preposição obrigatória. Pode ser substituído por o, a, os ou as.", termos: ["sem preposição exigida", "o/a/os/as"], exemplos: ["Rafa comprou um mapa. → comprou o quê?", "Rafa o comprou. → o retoma mapa"] },
      { titulo: "Objeto indireto (OI)", tom: "azul", texto: "Completa um verbo transitivo indireto por meio da preposição que o próprio verbo exige.", termos: ["a, de, em, com...", "lhe/lhes em alguns casos"], exemplos: ["Confiamos na equipe. → confiamos em quem?", "Obedeceu ao regulamento. → obedeceu a quê?"] },
      { titulo: "Dois objetos", tom: "laranja", texto: "Um verbo transitivo direto e indireto recebe, na mesma oração, um objeto direto e um objeto indireto.", termos: ["OD = coisa", "OI = destinatário"], exemplos: ["Entreguei o relatório ao diretor. → o relatório (OD) + ao diretor (OI)"] },
      { titulo: "Preposição não basta", tom: "amarelo", texto: "Nem todo termo preposicionado é objeto indireto. Se ele apenas acrescenta lugar, tempo, modo ou causa, pode ser adjunto adverbial.", termos: ["o verbo exige?", "ou só acrescenta circunstância?"], exemplos: ["Ela precisa de descanso. → OI", "Ela mora no interior. → circunstância de lugar"] },
    ],
    [
      { termo: "Objeto direto (OD)", resumo: "sem preposição obrigatória", tom: "roxo" }, { termo: "Objeto indireto (OI)", resumo: "com preposição exigida", tom: "azul" },
      { termo: "OD + OI", resumo: "verbo com dois complementos", tom: "laranja" }, { termo: "Adjunto", resumo: "circunstância não exigida", tom: "amarelo" },
    ],
  ),
  "Vozes verbais — agente da passiva": criarGuiaAprender(
    "Vozes verbais: quem age e quem recebe?",
    "A voz verbal revela a posição do sujeito diante da ação. Primeiro identifique o sujeito; depois verifique se ele pratica, recebe ou pratica e recebe a ação.",
    ["Marque o verbo", "Ache o sujeito", "Identifique o agente", "Identifique o paciente", "Observe a estrutura"],
    [
      { titulo: "Voz ativa", tom: "roxo", texto: "O sujeito é agente: ele pratica a ação expressa pelo verbo.", termos: ["sujeito agente", "verbo", "objeto paciente"], exemplos: ["A equipe preparou o evento. → a equipe age"] },
      { titulo: "Passiva analítica", tom: "azul", texto: "O sujeito é paciente: recebe a ação. A estrutura apresenta verbo ser + particípio; o agente pode aparecer depois.", termos: ["sujeito paciente", "ser + particípio", "agente da passiva"], exemplos: ["O evento foi preparado pela equipe. → o evento recebe"] },
      { titulo: "Passiva sintética", tom: "verde", texto: "Usa verbo transitivo direto ou direto e indireto acompanhado do pronome apassivador se. O verbo concorda com o sujeito paciente.", termos: ["verbo + se", "concordância", "transformação possível"], exemplos: ["Vendem-se livros. → Livros são vendidos."] },
      { titulo: "Reflexiva e agente", tom: "laranja", texto: "Na reflexiva, o sujeito pratica e recebe a ação. Na passiva, agente da passiva é o termo que pratica a ação, geralmente iniciado por por, pelo ou pela.", termos: ["reflexiva = agente e paciente", "por/pelo/pela"], exemplos: ["A menina se penteou. → agiu sobre si", "A ponte foi projetada pelos engenheiros. → agente"] },
    ],
    [
      { termo: "Ativa", resumo: "sujeito pratica", tom: "roxo" }, { termo: "Passiva analítica", resumo: "ser + particípio", tom: "azul" },
      { termo: "Passiva sintética", resumo: "verbo + se", tom: "verde" }, { termo: "Reflexiva", resumo: "pratica e recebe", tom: "laranja" },
      { termo: "Agente da passiva", resumo: "pratica a ação na passiva", tom: "amarelo" },
    ],
  ),
  "Período composto por coordenação e subordinação": criarGuiaAprender(
    "Período composto: como as orações se conectam",
    "Cada verbo ou locução verbal normalmente marca uma oração. No período composto, duas ou mais orações podem ser independentes ou exercer uma função umas nas outras.",
    ["Conte os verbos", "Separe as orações", "Ache os conectivos", "Teste a dependência", "Classifique cada ligação"],
    [
      { titulo: "Da frase ao período", tom: "roxo", texto: "Frase é um enunciado com sentido. Oração contém verbo ou locução verbal. Período é a frase organizada em uma ou mais orações.", termos: ["frase = sentido", "oração = verbo", "período = uma ou mais orações"], exemplos: ["Silêncio! → frase sem oração", "A aula começou. → uma oração"] },
      { titulo: "Coordenação", tom: "verde", texto: "As orações são sintaticamente independentes: uma não funciona como termo da outra. Podem estar unidas por conjunção ou pontuação.", termos: ["independência sintática", "ideias lado a lado"], exemplos: ["A aula terminou e todos saíram. → duas estruturas independentes"] },
      { titulo: "Subordinação", tom: "azul", texto: "Uma oração depende da principal porque exerce nela uma função de substantivo, adjetivo ou advérbio.", termos: ["oração principal", "função sintática", "dependência"], exemplos: ["Espero que todos participem. → a segunda completa espero", "Quando anoiteceu, voltamos. → indica tempo"] },
      { titulo: "Período misto", tom: "laranja", texto: "Pode haver coordenação e subordinação no mesmo período. Analise cada conexão, em vez de dar uma única classificação ao período inteiro.", termos: ["mais de uma relação", "análise por pares"], exemplos: ["Quando anoiteceu, voltamos e fechamos as janelas. → subordinação + coordenação"] },
    ],
    [
      { termo: "Frase", resumo: "enunciado com sentido", tom: "amarelo" }, { termo: "Oração", resumo: "estrutura com verbo", tom: "roxo" },
      { termo: "Coordenação", resumo: "orações independentes", tom: "verde" }, { termo: "Subordinação", resumo: "uma oração exerce função na outra", tom: "azul" },
      { termo: "Misto", resumo: "as duas relações no período", tom: "laranja" },
    ],
  ),
  "Orações coordenadas — classificação": criarGuiaAprender(
    "Orações coordenadas: qual relação existe?",
    "Orações coordenadas são independentes na estrutura, mas estabelecem relações de sentido. A classificação depende da ideia criada no contexto, não apenas da conjunção.",
    ["Separe as orações", "Ache a conjunção", "Leia a relação", "Troque por conectivo equivalente", "Classifique"],
    [
      { titulo: "Assindética e aditiva", tom: "roxo", texto: "Assindética não apresenta conjunção. A sindética aditiva soma fatos ou ideias.", termos: ["sem conjunção", "e", "nem", "mas também"], exemplos: ["Cheguei, sentei, esperei. → assindéticas", "Leu e fez anotações. → adição"] },
      { titulo: "Adversativa e alternativa", tom: "azul", texto: "A adversativa cria contraste ou oposição. A alternativa apresenta escolha, revezamento ou possibilidades.", termos: ["mas/porém/contudo", "ou... ou/ora... ora"], exemplos: ["Estudou, mas ficou nervoso. → contraste", "Ou você liga, ou envia uma mensagem. → escolha"] },
      { titulo: "Conclusiva", tom: "verde", texto: "Apresenta uma conclusão ou consequência lógica construída a partir da oração anterior.", termos: ["logo", "portanto", "por isso", "pois deslocado"], exemplos: ["Estudou bastante; foi, portanto, aprovado. → conclusão"] },
      { titulo: "Explicativa", tom: "laranja", texto: "Explica ou justifica a ideia anterior, muito comum depois de ordem, pedido, conselho ou hipótese.", termos: ["porque", "que", "pois antes do verbo"], exemplos: ["Feche a janela, pois está frio. → justificativa da ordem"] },
      { titulo: "O caso de pois", tom: "amarelo", texto: "Antes do verbo e explicando uma ideia, pois costuma ser explicativo. Deslocado entre vírgulas e retomando uma razão anterior, costuma ser conclusivo.", termos: ["pois + verbo = explicação", "verbo, pois, = conclusão"], exemplos: ["Não saia, pois chove. → explicativa", "Chove; ficarei, pois, em casa. → conclusiva"] },
    ],
    [
      { termo: "Assindética", resumo: "sem conjunção", tom: "cinza" }, { termo: "Aditiva", resumo: "soma", tom: "roxo" },
      { termo: "Adversativa", resumo: "contraste", tom: "azul" }, { termo: "Alternativa", resumo: "escolha", tom: "amarelo" },
      { termo: "Conclusiva", resumo: "conclusão", tom: "verde" }, { termo: "Explicativa", resumo: "justificativa", tom: "laranja" },
    ],
  ),
  "Orações subordinadas substantivas": criarGuiaAprender(
    "Subordinadas substantivas: a oração que vale por “isso”",
    "Uma oração subordinada substantiva exerce uma função típica de substantivo. Substitua toda a oração por “isso” e descubra que função esse pronome teria na oração principal.",
    ["Marque os verbos", "Isole a subordinada", "Troque por isso", "Ache o termo incompleto", "Descubra a função"],
    [
      { titulo: "Subjetiva", tom: "roxo", texto: "A oração subordinada funciona como sujeito da oração principal. É comum a principal apresentar expressões como é necessário, convém ou sabe-se.", termos: ["isso é necessário", "isso convém", "sabe-se isso"], exemplos: ["É necessário que todos colaborem. → Isso é necessário."] },
      { titulo: "Objetiva direta", tom: "azul", texto: "Completa um verbo sem preposição obrigatória; por isso, exerce função de objeto direto.", termos: ["verbo + isso", "sem preposição"], exemplos: ["Desejo que você participe. → Desejo isso."] },
      { titulo: "Objetiva indireta", tom: "verde", texto: "Completa um verbo que exige preposição; por isso, exerce função de objeto indireto.", termos: ["verbo + preposição + isso"], exemplos: ["Duvido de que ele venha. → Duvido disso."] },
      { titulo: "Completiva nominal", tom: "laranja", texto: "Completa o sentido de um nome — substantivo, adjetivo ou advérbio — por meio de preposição.", termos: ["nome incompleto", "preposição + isso"], exemplos: ["Tenho certeza de que dará certo. → certeza disso"] },
      { titulo: "Predicativa", tom: "amarelo", texto: "Funciona como predicativo do sujeito, normalmente depois de verbo de ligação.", termos: ["sujeito + verbo de ligação + isso"], exemplos: ["Meu desejo é que haja paz. → Meu desejo é isso."] },
      { titulo: "Apositiva", tom: "cinza", texto: "Explica ou especifica um termo anterior. É comum aparecer depois de dois-pontos.", termos: ["termo anterior: explicação", "dois-pontos"], exemplos: ["Só peço isto: que tenham calma. → a oração explica isto"] },
      { titulo: "Não decore apenas o “que”", tom: "azul", texto: "A conjunção integrante introduz muitas dessas orações, mas não informa sozinha a classificação. A função sintática é que decide.", termos: ["substitua por isso", "analise a função"], exemplos: ["Quero que venha. / Tenho certeza de que virá. → funções diferentes"] },
    ],
    [
      { termo: "Subjetiva", resumo: "funciona como sujeito", tom: "roxo" }, { termo: "Objetiva direta", resumo: "completa verbo sem preposição", tom: "azul" },
      { termo: "Objetiva indireta", resumo: "completa verbo com preposição", tom: "verde" }, { termo: "Completiva nominal", resumo: "completa um nome", tom: "laranja" },
      { termo: "Predicativa", resumo: "predicativo do sujeito", tom: "amarelo" }, { termo: "Apositiva", resumo: "explica um termo", tom: "cinza" },
    ],
  ),
};

const fundamentosPortugues = {
  "Tipos de sujeito": [
    { termo: "Verbo", significado: "palavra que indica ação, estado ou fenômeno: correr, estar, chover" },
    { termo: "Sujeito", significado: "pessoa, ser ou assunto sobre o qual a frase fala" },
    { termo: "Núcleo", significado: "palavra principal do sujeito; as outras apenas a acompanham" },
  ],
  "Tipos de predicado": [
    { termo: "Predicado", significado: "tudo o que a frase informa sobre o sujeito" },
    { termo: "Núcleo", significado: "informação mais importante dentro do predicado" },
    { termo: "Predicativo", significado: "palavra que dá uma característica ou estado a alguém ou algo" },
  ],
  "Transitividade verbal": [
    { termo: "Sentido completo", significado: "a ideia do verbo já fica clara sem outra informação" },
    { termo: "Complemento", significado: "informação necessária para terminar a ideia do verbo" },
    { termo: "Preposição", significado: "palavra pequena que liga termos: a, de, em, com, para, por" },
  ],
  "Complementos verbais": [
    { termo: "Complemento", significado: "parte que completa o sentido de um verbo" },
    { termo: "Preposição", significado: "palavra de ligação como a, de, em, com, para ou por" },
    { termo: "Regência", significado: "modo como o verbo pede seu complemento, com ou sem preposição" },
  ],
  "Vozes verbais — agente da passiva": [
    { termo: "Agente", significado: "quem pratica a ação" },
    { termo: "Paciente", significado: "quem recebe ou sofre a ação" },
    { termo: "Particípio", significado: "forma verbal comum em palavras como feito, escrito, vendido e preparado" },
  ],
  "Período composto por coordenação e subordinação": [
    { termo: "Frase", significado: "mensagem com sentido, mesmo quando não possui verbo" },
    { termo: "Oração", significado: "parte da frase organizada em torno de um verbo ou locução verbal" },
    { termo: "Período", significado: "frase que começa com letra maiúscula e termina em pontuação final" },
  ],
  "Orações coordenadas — classificação": [
    { termo: "Conjunção", significado: "palavra que conecta ideias, como e, mas, ou, portanto e porque" },
    { termo: "Independente", significado: "oração que não funciona como uma peça sintática da outra" },
    { termo: "Relação de sentido", significado: "ideia de soma, contraste, escolha, conclusão ou explicação" },
  ],
  "Orações subordinadas substantivas": [
    { termo: "Oração principal", significado: "parte que contém o termo que será completado ou explicado" },
    { termo: "Subordinada", significado: "oração que trabalha como uma peça dentro da oração principal" },
    { termo: "Função", significado: "papel realizado na frase: sujeito, objeto, complemento, predicativo ou aposto" },
  ],
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
  if (questao.materia === "Português — 8º ano") {
    const guia = guiasPortugues[questao.conteudo];
    return guia ? { ...guia, fundamentos: fundamentosPortugues[questao.conteudo] || [] } : undefined;
  }
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
