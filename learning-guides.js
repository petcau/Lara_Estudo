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
      { titulo: "Sujeito determinado", tom: "roxo", texto: "É possível reconhecer o sujeito. Ele é simples quando possui um núcleo, composto quando possui dois ou mais e oculto quando não está escrito, mas pode ser recuperado.", termos: ["simples = 1 núcleo", "composto = 2 ou mais", "oculto = identificável"], exemplos: ["A turma chegou cedo. → sujeito simples; núcleo: turma", "Lia e Beto chegaram. → sujeito composto; núcleos: Lia + Beto", "Chegamos cedo. → sujeito oculto: nós"] },
      { titulo: "Indeterminado x inexistente", tom: "azul", texto: "No indeterminado, alguém pratica a ação, mas não sabemos quem. Na oração sem sujeito, nenhum ser pratica a ação: o verbo é impessoal.", termos: ["3ª pessoa do plural", "verbo + se", "verbo impessoal"], exemplos: ["Bateram à porta. → sujeito indeterminado", "Precisa-se de ajuda. → sujeito indeterminado", "Choveu ontem. → oração sem sujeito; verbo impessoal"] },
      { titulo: "Verbos impessoais", tom: "amarelo", texto: "Haver com sentido de existir, fazer indicando tempo e fenômenos naturais em sentido literal formam oração sem sujeito e ficam no singular.", termos: ["há = existe", "faz = tempo decorrido", "clima literal"], exemplos: ["Havia muitas pessoas. → oração sem sujeito; haver impessoal", "Faz dois anos que estudo aqui. → oração sem sujeito; fazer impessoal", "Anoiteceu cedo. → oração sem sujeito; fenômeno natural"] },
      { titulo: "Armadilha frequente", tom: "verde", texto: "O núcleo é a palavra central do sujeito, não necessariamente o substantivo mais perto do verbo. Confirme pela concordância.", termos: ["núcleo", "concordância", "termos acessórios"], exemplos: ["Os livros da estante caíram. → sujeito simples; núcleo: livros"] },
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
      { titulo: "Predicado verbal", tom: "roxo", texto: "O núcleo é um verbo significativo, que expressa ação, acontecimento ou processo.", termos: ["núcleo = verbo", "ação/processo"], exemplos: ["Os atletas treinaram. → predicado verbal; núcleo: treinaram"] },
      { titulo: "Predicado nominal", tom: "verde", texto: "O núcleo é um nome que atribui estado ou característica ao sujeito. Um verbo de ligação une as duas partes.", termos: ["verbo de ligação", "predicativo do sujeito"], exemplos: ["A praça permanece tranquila. → predicado nominal; núcleo: tranquila"] },
      { titulo: "Predicado verbo-nominal", tom: "laranja", texto: "Possui dois núcleos: um verbo significativo e um predicativo, que indica estado do sujeito ou do objeto.", termos: ["ação + característica", "dois núcleos"], exemplos: ["Os atletas voltaram cansados. → predicado verbo-nominal; núcleos: voltaram + cansados", "Julgaram o plano arriscado. → predicado verbo-nominal; núcleos: julgaram + arriscado"] },
      { titulo: "Teste de decisão", tom: "azul", texto: "Se o verbo apenas liga o sujeito a uma qualidade, é nominal. Se há ação completa e também uma qualidade, é verbo-nominal.", termos: ["apenas ligação?", "há ação?", "há predicativo?"], exemplos: ["Ela está contente. → predicado nominal", "Ela saiu contente. → predicado verbo-nominal"] },
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
      { titulo: "Intransitivo e transitivo direto", tom: "roxo", texto: "O verbo intransitivo (VI) tem sentido completo. O transitivo direto (VTD) exige complemento sem preposição obrigatória.", termos: ["VI = sentido completo", "VTD = objeto direto"], exemplos: ["A criança dormiu. → dormiu é verbo intransitivo (VI)", "A criança abriu a janela. → abriu é VTD; a janela é objeto direto"] },
      { titulo: "Transitivo indireto e direto-indireto", tom: "azul", texto: "O transitivo indireto (VTI) exige complemento com preposição. O direto e indireto (VTDI) pede dois complementos: um sem e outro com preposição.", termos: ["VTI = preposição exigida", "VTDI = OD + OI"], exemplos: ["Ela confia nos amigos. → confia é VTI; nos amigos é objeto indireto", "Ela enviou o recado ao grupo. → enviou é VTDI; o recado é OD; ao grupo é OI"] },
      { titulo: "Verbo de ligação", tom: "verde", texto: "Não apresenta uma ação principal. Ele conecta o sujeito a um estado, qualidade ou condição chamada predicativo.", termos: ["ser", "estar", "parecer", "permanecer", "ficar"], exemplos: ["O céu ficou escuro. → ficou é verbo de ligação; escuro é predicativo"] },
      { titulo: "O contexto decide", tom: "amarelo", texto: "O mesmo verbo pode mudar de classificação conforme o significado e a construção. Nunca classifique um verbo isolado.", termos: ["sentido da frase", "regência", "contexto"], exemplos: ["Ela aspirou o perfume. → aspirou é verbo transitivo direto (VTD)", "Ela aspirou ao cargo. → aspirou é verbo transitivo indireto (VTI)"] },
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
      { titulo: "Objeto direto (OD)", tom: "roxo", texto: "Completa um verbo transitivo direto sem preposição obrigatória. Pode ser substituído por o, a, os ou as.", termos: ["sem preposição exigida", "o/a/os/as"], exemplos: ["Rafa comprou um mapa. → um mapa é objeto direto (OD)", "Rafa o comprou. → o é pronome com função de objeto direto"] },
      { titulo: "Objeto indireto (OI)", tom: "azul", texto: "Completa um verbo transitivo indireto por meio da preposição que o próprio verbo exige.", termos: ["a, de, em, com...", "lhe/lhes em alguns casos"], exemplos: ["Confiamos na equipe. → na equipe é objeto indireto (OI)", "Obedeceu ao regulamento. → ao regulamento é objeto indireto (OI)"] },
      { titulo: "Dois objetos", tom: "laranja", texto: "Um verbo transitivo direto e indireto recebe, na mesma oração, um objeto direto e um objeto indireto.", termos: ["OD = coisa", "OI = destinatário"], exemplos: ["Entreguei o relatório ao diretor. → o relatório (OD) + ao diretor (OI)"] },
      { titulo: "Preposição não basta", tom: "amarelo", texto: "Nem todo termo preposicionado é objeto indireto. Se ele apenas acrescenta lugar, tempo, modo ou causa, pode ser adjunto adverbial.", termos: ["o verbo exige?", "ou só acrescenta circunstância?"], exemplos: ["Ela precisa de descanso. → de descanso é objeto indireto (OI)", "Ela mora no interior. → no interior é adjunto adverbial de lugar"] },
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
      { titulo: "Voz ativa", tom: "roxo", texto: "O sujeito é agente: ele pratica a ação expressa pelo verbo.", termos: ["sujeito agente", "verbo", "objeto paciente"], exemplos: ["A equipe preparou o evento. → voz ativa; a equipe é o sujeito agente"] },
      { titulo: "Passiva analítica", tom: "azul", texto: "O sujeito é paciente: recebe a ação. A estrutura apresenta verbo ser + particípio; o agente pode aparecer depois.", termos: ["sujeito paciente", "ser + particípio", "agente da passiva"], exemplos: ["O evento foi preparado pela equipe. → passiva analítica; o evento é o sujeito paciente"] },
      { titulo: "Passiva sintética", tom: "verde", texto: "Usa verbo transitivo direto ou direto e indireto acompanhado do pronome apassivador se. O verbo concorda com o sujeito paciente.", termos: ["verbo + se", "concordância", "transformação possível"], exemplos: ["Vendem-se livros. → passiva sintética; livros é o sujeito paciente"] },
      { titulo: "Reflexiva e agente", tom: "laranja", texto: "Na reflexiva, o sujeito pratica e recebe a ação. Na passiva, agente da passiva é o termo que pratica a ação, geralmente iniciado por por, pelo ou pela.", termos: ["reflexiva = agente e paciente", "por/pelo/pela"], exemplos: ["A menina se penteou. → voz reflexiva; a menina age sobre si", "A ponte foi projetada pelos engenheiros. → pelos engenheiros é o agente da passiva"] },
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
      { titulo: "Da frase ao período", tom: "roxo", texto: "Frase é um enunciado com sentido. Oração contém verbo ou locução verbal. Período é a frase organizada em uma ou mais orações.", termos: ["frase = sentido", "oração = verbo", "período = uma ou mais orações"], exemplos: ["Silêncio! → frase sem oração", "A aula começou. → período simples com uma oração"] },
      { titulo: "Coordenação", tom: "verde", texto: "As orações são sintaticamente independentes: uma não funciona como termo da outra. Podem estar unidas por conjunção ou pontuação.", termos: ["independência sintática", "ideias lado a lado"], exemplos: ["A aula terminou e todos saíram. → período composto por coordenação"] },
      { titulo: "Subordinação", tom: "azul", texto: "Uma oração depende da principal porque exerce nela uma função de substantivo, adjetivo ou advérbio.", termos: ["oração principal", "função sintática", "dependência"], exemplos: ["Espero que todos participem. → período composto por subordinação; a segunda oração completa espero", "Quando anoiteceu, voltamos. → período composto por subordinação; a primeira oração indica tempo"] },
      { titulo: "Período misto", tom: "laranja", texto: "Pode haver coordenação e subordinação no mesmo período. Analise cada conexão, em vez de dar uma única classificação ao período inteiro.", termos: ["mais de uma relação", "análise por pares"], exemplos: ["Quando anoiteceu, voltamos e fechamos as janelas. → período misto: subordinação + coordenação"] },
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
      { titulo: "Assindética e aditiva", tom: "roxo", texto: "Assindética não apresenta conjunção. A sindética aditiva soma fatos ou ideias.", termos: ["sem conjunção", "e", "nem", "mas também"], exemplos: ["Cheguei, sentei, esperei. → orações coordenadas assindéticas", "Leu e fez anotações. → oração coordenada sindética aditiva"] },
      { titulo: "Adversativa e alternativa", tom: "azul", texto: "A adversativa cria contraste ou oposição. A alternativa apresenta escolha, revezamento ou possibilidades.", termos: ["mas/porém/contudo", "ou... ou/ora... ora"], exemplos: ["Estudou, mas ficou nervoso. → oração coordenada sindética adversativa", "Ou você liga, ou envia uma mensagem. → oração coordenada sindética alternativa"] },
      { titulo: "Conclusiva", tom: "verde", texto: "Apresenta uma conclusão ou consequência lógica construída a partir da oração anterior.", termos: ["logo", "portanto", "por isso", "pois deslocado"], exemplos: ["Estudou bastante; foi, portanto, aprovado. → oração coordenada sindética conclusiva"] },
      { titulo: "Explicativa", tom: "laranja", texto: "Explica ou justifica a ideia anterior, muito comum depois de ordem, pedido, conselho ou hipótese.", termos: ["porque", "que", "pois antes do verbo"], exemplos: ["Feche a janela, pois está frio. → oração coordenada sindética explicativa"] },
      { titulo: "O caso de pois", tom: "amarelo", texto: "Antes do verbo e explicando uma ideia, pois costuma ser explicativo. Deslocado entre vírgulas e retomando uma razão anterior, costuma ser conclusivo.", termos: ["pois + verbo = explicação", "verbo, pois, = conclusão"], exemplos: ["Não saia, pois chove. → oração coordenada explicativa", "Chove; ficarei, pois, em casa. → oração coordenada conclusiva"] },
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
      { titulo: "Subjetiva", tom: "roxo", texto: "A oração subordinada funciona como sujeito da oração principal. É comum a principal apresentar expressões como é necessário, convém ou sabe-se.", termos: ["isso é necessário", "isso convém", "sabe-se isso"], exemplos: ["É necessário que todos colaborem. → que todos colaborem é oração subordinada substantiva subjetiva"] },
      { titulo: "Objetiva direta", tom: "azul", texto: "Completa um verbo sem preposição obrigatória; por isso, exerce função de objeto direto.", termos: ["verbo + isso", "sem preposição"], exemplos: ["Desejo que você participe. → que você participe é oração subordinada substantiva objetiva direta"] },
      { titulo: "Objetiva indireta", tom: "verde", texto: "Completa um verbo que exige preposição; por isso, exerce função de objeto indireto.", termos: ["verbo + preposição + isso"], exemplos: ["Duvido de que ele venha. → de que ele venha é oração subordinada substantiva objetiva indireta"] },
      { titulo: "Completiva nominal", tom: "laranja", texto: "Completa o sentido de um nome — substantivo, adjetivo ou advérbio — por meio de preposição.", termos: ["nome incompleto", "preposição + isso"], exemplos: ["Tenho certeza de que dará certo. → de que dará certo é oração subordinada substantiva completiva nominal"] },
      { titulo: "Predicativa", tom: "amarelo", texto: "Funciona como predicativo do sujeito, normalmente depois de verbo de ligação.", termos: ["sujeito + verbo de ligação + isso"], exemplos: ["Meu desejo é que haja paz. → que haja paz é oração subordinada substantiva predicativa"] },
      { titulo: "Apositiva", tom: "cinza", texto: "Explica ou especifica um termo anterior. É comum aparecer depois de dois-pontos.", termos: ["termo anterior: explicação", "dois-pontos"], exemplos: ["Só peço isto: que tenham calma. → que tenham calma é oração subordinada substantiva apositiva"] },
      { titulo: "Não decore apenas o “que”", tom: "azul", texto: "A conjunção integrante introduz muitas dessas orações, mas não informa sozinha a classificação. A função sintática é que decide.", termos: ["substitua por isso", "analise a função"], exemplos: ["Quero que venha. → que venha é objetiva direta", "Tenho certeza de que virá. → de que virá é completiva nominal"] },
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

const exemplosVisuaisPortugues = {
  "Tipos de sujeito": {
    fundamentos: ["Lia estudou. → estudou é o verbo", "Lia estudou. → Lia é o sujeito", "Os alunos da sala chegaram. → alunos é o núcleo"],
    conceitos: ["A turma chegou. → sujeito simples", "Lia e Beto chegaram. → sujeito composto", "Chegamos cedo. → sujeito oculto: nós", "Bateram à porta. → sujeito indeterminado", "Choveu ontem. → oração sem sujeito"],
  },
  "Tipos de predicado": {
    fundamentos: ["Lia venceu a corrida. → venceu a corrida é o predicado", "Lia correu. → correu é o núcleo", "Lia está feliz. → feliz é o predicativo"],
    conceitos: ["Os atletas treinaram. → predicado verbal", "A praça está tranquila. → predicado nominal", "Os atletas voltaram cansados. → predicado verbo-nominal", "A praça está tranquila. → tranquila é o predicativo"],
  },
  "Transitividade verbal": {
    fundamentos: ["A criança dormiu. → dormiu tem sentido completo", "Ela comprou um livro. → um livro completa comprou", "Ela gosta de música. → de liga o verbo ao complemento"],
    conceitos: ["O bebê dormiu. → verbo intransitivo", "Rafa leu o livro. → verbo transitivo direto", "Rafa gosta de livros. → verbo transitivo indireto", "Rafa entregou o livro à professora. → verbo transitivo direto e indireto", "Rafa está feliz. → verbo de ligação"],
  },
  "Complementos verbais": {
    fundamentos: ["Ela abriu a janela. → a janela completa abriu", "Ela precisa de ajuda. → de liga o complemento", "Gostar pede de. → gostar de algo"],
    conceitos: ["Ela comprou o caderno. → o caderno é objeto direto", "Ela precisa de ajuda. → de ajuda é objeto indireto", "Ela entregou o livro ao colega. → livro é OD; ao colega é OI", "Ela mora no centro. → no centro é adjunto de lugar"],
  },
  "Vozes verbais — agente da passiva": {
    fundamentos: ["A equipe fez o cartaz. → a equipe é o agente", "O cartaz foi feito. → o cartaz é o paciente", "O cartaz foi feito. → feito é o particípio"],
    conceitos: ["A equipe fez o cartaz. → voz ativa", "O cartaz foi feito pela equipe. → passiva analítica", "Vendem-se livros. → passiva sintética", "A menina se penteou. → voz reflexiva", "O cartaz foi feito pela equipe. → pela equipe é o agente da passiva"],
  },
  "Período composto por coordenação e subordinação": {
    fundamentos: ["Silêncio! → frase sem verbo", "A aula começou. → oração com o verbo começou", "A aula começou e todos entraram. → período com duas orações"],
    conceitos: ["Silêncio! → frase", "A aula começou. → oração", "Cheguei e sentei. → coordenação", "Espero que você venha. → subordinação", "Quando cheguei, sentei e esperei. → período misto"],
  },
  "Orações coordenadas — classificação": {
    fundamentos: ["Estudou e aprendeu. → e é conjunção", "Cheguei e sentei. → orações independentes", "Estudou, mas errou. → relação de contraste"],
    conceitos: ["Cheguei, sentei. → coordenadas assindéticas", "Leu e anotou. → coordenada aditiva", "Estudou, mas errou. → coordenada adversativa", "Ou liga, ou escreve. → coordenada alternativa", "Estudou; portanto, passou. → coordenada conclusiva", "Feche a janela, pois está frio. → coordenada explicativa"],
  },
  "Orações subordinadas substantivas": {
    fundamentos: ["Espero que você venha. → espero está na oração principal", "Espero que você venha. → que você venha é a subordinada", "Desejo isso. → isso funciona como objeto direto"],
    conceitos: ["É preciso que todos ajudem. → subordinada subjetiva", "Desejo que você participe. → objetiva direta", "Duvido de que ele venha. → objetiva indireta", "Tenho certeza de que virá. → completiva nominal", "Meu desejo é que haja paz. → predicativa", "Só peço isto: que tenham calma. → apositiva"],
  },
};

const guiasGeometria = {
  "Triângulos: classificação, propriedades, congruência e área": criarGuiaAprender(
    "Triângulos: lados, ângulos, congruência e área",
    "Triângulo é um polígono de três lados. Antes de calcular, identifique quais medidas foram dadas e o que a questão pede.",
    ["Observe os lados", "Observe os ângulos", "Marque os dados", "Escolha a propriedade", "Calcule e confira"],
    [
      { titulo: "Classificação pelos lados", texto: "Equilátero tem três lados iguais; isósceles tem dois; escaleno tem os três diferentes.", exemplos: ["5, 5 e 5 cm → equilátero", "4, 4 e 7 cm → isósceles", "3, 4 e 5 cm → escaleno"] },
      { titulo: "Classificação pelos ângulos", texto: "Acutângulo tem três ângulos menores que 90°; retângulo tem um de 90°; obtusângulo tem um maior que 90°.", exemplos: ["45°, 45° e 90° → triângulo retângulo"] },
      { titulo: "Regras essenciais", texto: "Os ângulos internos somam 180°. Para três lados formarem triângulo, o maior deve ser menor que a soma dos outros dois.", exemplos: ["50° + 60° + x = 180° → x = 70°", "3, 4 e 5 → 5 < 3 + 4, então existe"] },
      { titulo: "Área e congruência", texto: "Área é base × altura ÷ 2. Triângulos congruentes têm mesma forma e tamanho; casos comuns são LLL, LAL e ALA.", exemplos: ["b = 8 e h = 5 → área = 20", "dois lados e o ângulo entre eles iguais → caso LAL"] },
    ],
  ),
  "Segmentos e pontos notáveis nos triângulos": criarGuiaAprender(
    "Linhas e centros importantes do triângulo",
    "Cada segmento nasce de uma regra diferente. Pergunte de onde ele parte, onde termina e se divide lado, ângulo ou forma 90°.",
    ["Veja o ponto de partida", "Veja onde termina", "Procure metade ou 90°", "Nomeie o segmento", "Ligue ao ponto notável"],
    [
      { titulo: "Quatro segmentos", texto: "Mediana vai ao ponto médio; altura forma 90°; bissetriz divide o ângulo; mediatriz corta um lado ao meio em 90°.", exemplos: ["vértice → ponto médio do lado → mediana", "lado dividido ao meio em 90° → mediatriz"] },
      { titulo: "Quatro pontos", texto: "Medianas encontram-se no baricentro; alturas no ortocentro; bissetrizes no incentro; mediatrizes no circuncentro.", exemplos: ["bissetrizes → incentro", "mediatrizes → circuncentro"] },
      { titulo: "O que cada centro faz", texto: "Baricentro é centro de equilíbrio; incentro centra a circunferência inscrita; circuncentro centra a circunferência que passa pelos vértices.", exemplos: ["mesma distância dos lados → incentro", "mesma distância dos vértices → circuncentro"] },
      { titulo: "Razão do baricentro", texto: "O baricentro divide a mediana em 2:1. Do vértice até ele há 2/3 da mediana; dele até o lado há 1/3.", exemplos: ["mediana de 15 cm → 10 cm + 5 cm"] },
    ],
  ),
  "Quadriláteros: propriedades, classificação e áreas": criarGuiaAprender(
    "Quadriláteros: compare propriedades",
    "Quadrilátero possui quatro lados e ângulos internos que somam 360°. Para identificar a figura, examine paralelismo, medidas dos lados, ângulos e diagonais.",
    ["Conte os lados", "Marque os paralelos", "Compare lados e ângulos", "Observe as diagonais", "Aplique a área"],
    [
      { titulo: "Família dos paralelogramos", texto: "Paralelogramo tem lados opostos paralelos. Retângulo acrescenta quatro ângulos retos; losango, quatro lados iguais; quadrado possui as duas propriedades.", exemplos: ["4 lados iguais + 4 ângulos retos → quadrado"] },
      { titulo: "Trapézio", texto: "Possui um par de lados paralelos, chamados bases. Sua área usa a média das bases multiplicada pela altura.", exemplos: ["B = 10, b = 6, h = 4 → área = 32"] },
      { titulo: "Fórmulas de área", texto: "Retângulo, quadrado e paralelogramo partem de base × altura. Losango usa diagonal maior × diagonal menor ÷ 2.", exemplos: ["losango: D = 10 e d = 6 → área = 30"] },
      { titulo: "Diagonais", texto: "No retângulo são iguais; no losango são perpendiculares; no quadrado são iguais, perpendiculares e bissetam os ângulos.", exemplos: ["diagonais iguais, mas não necessariamente perpendiculares → retângulo"] },
    ],
  ),
  "Polígonos: classificação, ângulos, diagonais e construções": criarGuiaAprender(
    "Polígonos: lados, ângulos e diagonais",
    "Polígono é uma figura plana fechada formada por segmentos. Em um polígono regular, todos os lados e todos os ângulos são iguais.",
    ["Conte os lados", "Veja se é regular", "Escolha a fórmula", "Substitua n", "Confira a unidade"],
    [
      { titulo: "Nomes e forma", texto: "Triângulo tem 3 lados; quadrilátero 4; pentágono 5; hexágono 6; heptágono 7; octógono 8; decágono 10. O convexo não tem reentrância; o não convexo tem.", exemplos: ["6 lados → hexágono", "uma reentrância → polígono não convexo"] },
      { titulo: "Ângulos internos", texto: "A soma é S = (n − 2) × 180°. Em um polígono regular, divida essa soma por n para obter cada ângulo.", exemplos: ["hexágono: S = 4 × 180° = 720°; cada ângulo = 120°"] },
      { titulo: "Diagonais e ângulos externos", texto: "O número de diagonais é D = n(n − 3)/2. Os ângulos externos, um por vértice, sempre somam 360°.", exemplos: ["pentágono: D = 5 × 2 ÷ 2 = 5"] },
      { titulo: "Construções com régua e compasso", texto: "Retas perpendiculares formam 90°. O triângulo equilátero fornece 60°; a bissetriz de 60° fornece 30° e a bissetriz de 90° fornece 45°. No hexágono inscrito, o lado é igual ao raio.", exemplos: ["90° dividido pela bissetriz → 45°", "raio de 4 cm → hexágono com seis lados de 4 cm"] },
    ],
  ),
  "Áreas, capacidade e volume": criarGuiaAprender(
    "Área, volume e capacidade sem confusão",
    "Área mede superfície e usa unidade quadrada. Volume mede espaço ocupado e usa unidade cúbica. Capacidade indica quanto cabe em um recipiente.",
    ["Identifique a grandeza", "Converta as unidades", "Escolha a fórmula", "Calcule", "Escreva a unidade"],
    [
      { titulo: "Área", texto: "Retângulo: b × h; triângulo: b × h ÷ 2; círculo: πr². Figuras compostas podem ser divididas e depois somadas ou subtraídas.", exemplos: ["retângulo 10 × 6 + triângulo 6 × 4 ÷ 2 → 72 m²"] },
      { titulo: "Volume", texto: "No bloco retangular, multiplique comprimento, largura e altura. As três medidas devem estar na mesma unidade.", exemplos: ["5 × 4 × 3 cm → 60 cm³"] },
      { titulo: "Capacidade", texto: "As equivalências fundamentais são 1 L = 1 dm³, 1 L = 1.000 cm³ e 1 m³ = 1.000 L.", exemplos: ["60.000 cm³ → 60 L"] },
      { titulo: "Estratégia", texto: "Escreva os dados, converta antes de calcular e confira se a resposta pede comprimento, área, volume ou litros.", exemplos: ["22,5 m³ × 1.000 → 22.500 L"] },
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
  if (questao.materia === "Português — 8º ano") {
    const guia = guiasPortugues[questao.conteudo];
    if (!guia) return undefined;
    const exemplos = exemplosVisuaisPortugues[questao.conteudo] || { fundamentos: [], conceitos: [] };
    return {
      ...guia,
      fundamentos: (fundamentosPortugues[questao.conteudo] || []).map((item, index) => ({
        ...item,
        exemplo: exemplos.fundamentos[index],
      })),
      conceitos: guia.conceitos.map((item, index) => ({
        ...item,
        exemplo: exemplos.conceitos[index],
      })),
    };
  }
  if (questao.materia === "Geometria — 8º ano") return guiasGeometria[questao.conteudo];
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
