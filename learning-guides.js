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

const criarGuiaGeometriaFocado = (titulo, introducao, ideia, metodo, exemplo, cuidado, diagrama, termos = []) =>
  criarGuiaAprender(
    titulo,
    introducao,
    diagrama,
    [
      { titulo: "A ideia que você precisa", tom: "roxo", texto: ideia, termos },
      { titulo: "Como pensar passo a passo", tom: "verde", texto: metodo },
      { titulo: "Exemplo parecido", tom: "azul", texto: "Use outros dados para treinar o mesmo raciocínio.", exemplos: [exemplo] },
      { titulo: "Cuidado com esta armadilha", tom: "amarelo", texto: cuidado },
    ],
  );

const guiasGeometriaFocados = {
  ladosTriangulo: criarGuiaGeometriaFocado("Classifique o triângulo comparando os lados", "Esta questão cobra apenas a comparação entre as medidas dos três lados.", "Três lados iguais, dois lados iguais e três lados diferentes recebem nomes distintos. A posição ou a aparência do desenho não muda a classificação.", "Anote as três medidas, agrupe as que são iguais e só depois escolha o nome correspondente.", "Lados 6 cm, 6 cm e 9 cm → há exatamente duas medidas iguais", "Não use os ângulos para responder uma pergunta que pede classificação pelos lados.", ["Compare", "Conte os iguais", "Classifique"], ["3 iguais", "2 iguais", "nenhum igual"]),
  angulosTriangulo: criarGuiaGeometriaFocado("Classifique o triângulo observando os ângulos", "Aqui, o que importa é saber se existe ângulo reto, obtuso ou somente ângulos agudos.", "Um ângulo reto mede 90°; um obtuso é maior que 90°; um agudo é menor que 90°. Um triângulo pode ter no máximo um ângulo reto ou obtuso.", "Procure primeiro algum ângulo igual ou maior que 90°. Se não houver, verifique se os três são menores que 90°.", "Ângulos 35°, 55° e 90° → existe um ângulo reto", "Escaleno, isósceles e equilátero classificam lados, não ângulos.", ["Procure 90°", "Compare com 90°", "Classifique"], ["agudo < 90°", "reto = 90°", "obtuso > 90°"]),
  somaTriangulo: criarGuiaGeometriaFocado("Use a soma dos ângulos internos do triângulo", "A questão depende da relação fixa entre os três ângulos internos.", "Ao juntar os três ângulos internos de qualquer triângulo, forma-se um ângulo raso. Por isso, existe um total fixo, qualquer que seja o formato do triângulo.", "Some os ângulos conhecidos, represente o desconhecido por x e subtraia a soma conhecida do total.", "Em outro triângulo: 40° + 75° + x = 180° → x = 65°", "Não some um ângulo externo como se ele fosse um dos três internos.", ["Some os conhecidos", "Compare com 180°", "Encontre o que falta"], ["3 ângulos internos", "total = 180°"]),
  areaTriangulo: criarGuiaGeometriaFocado("Entenda a área de um triângulo", "Esta questão exige relacionar base, altura perpendicular e a metade de um paralelogramo.", "Dois triângulos iguais podem formar um paralelogramo. Assim, um triângulo ocupa metade do produto entre uma base e sua altura perpendicular.", "Identifique base e altura, multiplique as duas medidas e divida o resultado em duas partes iguais. Para descobrir uma medida ausente, faça as operações inversas.", "Base 10 cm e altura 6 cm → 10 × 6 = 60; metade = 30 cm²", "A altura deve formar 90° com a base. Um lado inclinado nem sempre é a altura.", ["Base e altura", "Multiplique", "Tome a metade", "Use unidade²"], ["base", "altura perpendicular", "metade"]),
  congruencia: criarGuiaGeometriaFocado("Compare triângulos por correspondência", "A questão trata de congruência: sobrepor duas figuras e verificar se todos os elementos coincidem.", "Figuras congruentes mantêm forma e tamanho. Nos triângulos, certos conjuntos de lados e ângulos correspondentes bastam para garantir isso, como LLL, LAL e ALA.", "Marque os elementos correspondentes na mesma ordem. Depois identifique se os dados formam um caso válido de congruência.", "Dois lados de 5 cm e 7 cm com o ângulo entre eles igual → verificação do tipo lado–ângulo–lado", "Ângulos iguais podem indicar semelhança, mas sozinhos não garantem o mesmo tamanho.", ["Ache correspondentes", "Confira posição", "Identifique o caso"], ["LLL", "LAL", "ALA"]),
  existenciaTriangulo: criarGuiaGeometriaFocado("Verifique se três segmentos formam um triângulo", "Nem todo conjunto de três medidas consegue fechar uma figura triangular.", "Para existir triângulo, cada lado precisa ser menor que a soma dos outros dois. Na prática, basta comparar o maior lado com a soma dos dois menores.", "Ordene as medidas, some as duas menores e compare o resultado com a maior. A soma precisa ser estritamente maior.", "Segmentos 4, 7 e 9 → 4 + 7 > 9, então a figura consegue fechar", "Se a soma for igual ao maior lado, os segmentos ficam alinhados e não formam triângulo.", ["Ache o maior", "Some os menores", "Compare"], ["maior lado", "soma dos menores", "desigualdade"]),
  classificacaoDupla: criarGuiaGeometriaFocado("Faça duas classificações independentes", "Algumas questões descrevem lados e ângulos ao mesmo tempo.", "Todo triângulo recebe uma classificação pelos lados e outra pelos ângulos. Uma não substitui a outra.", "Primeiro observe repetições entre lados ou ângulos; depois procure se há ângulo de 90°, maior que 90° ou somente menores.", "Ângulos 30°, 75° e 75° → dois ângulos iguais indicam dois lados iguais; todos são agudos", "Não escolha apenas uma característica quando a alternativa combina duas classificações.", ["Classifique os lados", "Classifique os ângulos", "Combine"], ["lados", "ângulos", "duas respostas"]),
  isoscelesAngulos: criarGuiaGeometriaFocado("Use a simetria do triângulo isósceles", "O ângulo do vértice e os dois ângulos da base têm papéis diferentes.", "Em um isósceles, os dois lados congruentes ficam opostos a dois ângulos também congruentes. Esses são os ângulos da base.", "Retire o ângulo do vértice do total dos ângulos internos e divida o restante igualmente entre os dois ângulos da base.", "Vértice de 50° → restam 130°; cada ângulo da base mede 65°", "Não divida o total por três: apenas os dois ângulos da base são necessariamente iguais.", ["Retire o vértice", "Divida o restante por 2", "Confira"], ["vértice", "base", "ângulos iguais"]),
  anguloExternoTriangulo: criarGuiaGeometriaFocado("Relacione o ângulo externo aos internos", "A questão usa o ângulo formado pelo prolongamento de um lado do triângulo.", "O ângulo externo é suplementar ao interno vizinho e equivale à soma dos dois ângulos internos não adjacentes.", "Identifique o interno ao lado do externo. Você pode completar 180° ou somar os dois internos afastados.", "Internos não adjacentes de 45° e 70° → o externo correspondente mede 115°", "Não some o ângulo interno vizinho; ele forma um par suplementar com o externo.", ["Ache o externo", "Ignore o adjacente", "Some os afastados"], ["externo", "não adjacentes", "suplementares"]),
  isoscelesPerimetro: criarGuiaGeometriaFocado("Distribua o perímetro no triângulo isósceles", "O perímetro é a soma da base com os dois lados congruentes.", "Se cada lado igual mede x e a base mede b, o perímetro pode ser representado por b + 2x.", "Subtraia a base do perímetro e divida o restante igualmente entre os dois lados congruentes.", "Perímetro 38 cm e base 12 cm → sobram 26 cm; cada lado igual mede 13 cm", "Não divida o perímetro inteiro por três, pois a base pode ter medida diferente.", ["Retire a base", "Divida por 2", "Some para conferir"], ["perímetro", "base", "2 lados iguais"]),
  segmentosNotaveis: criarGuiaGeometriaFocado("Diferencie mediana, altura, bissetriz e mediatriz", "A resposta depende do ponto de partida e da propriedade criada pelo segmento.", "Mediana liga vértice ao ponto médio; altura sai do vértice e forma 90°; bissetriz divide um ângulo; mediatriz é perpendicular a um lado em seu ponto médio.", "Pergunte: parte de um vértice? termina no ponto médio? forma 90°? divide um ângulo? A combinação identifica o segmento.", "Uma linha parte do vértice e chega ao meio do lado oposto → observe a ideia de metade do lado", "A mediatriz não precisa partir de um vértice; essa diferença evita confundi-la com a mediana.", ["Veja a origem", "Veja o destino", "Procure metade ou 90°"], ["mediana", "altura", "bissetriz", "mediatriz"]),
  pontosNotaveis: criarGuiaGeometriaFocado("Associe cada encontro ao ponto notável", "Cada família de três segmentos concorrentes recebe um nome próprio.", "Medianas encontram-se no baricentro; alturas no ortocentro; bissetrizes no incentro; mediatrizes no circuncentro.", "Primeiro descubra qual segmento aparece no enunciado. Depois faça a associação com seu ponto de encontro.", "Se o desenho mostra três bissetrizes, procure o centro que fica à mesma distância dos lados", "Não associe pelo lugar onde o ponto aparece no desenho; use os segmentos que o formam.", ["Nomeie o segmento", "Use a associação", "Confira a propriedade"], ["medianas ↔ baricentro", "alturas ↔ ortocentro", "bissetrizes ↔ incentro", "mediatrizes ↔ circuncentro"]),
  medianaMetade: criarGuiaGeometriaFocado("Use o ponto médio criado pela mediana", "A mediana divide o lado oposto em dois segmentos congruentes.", "Ponto médio significa exatamente duas partes com a mesma medida.", "Pegue a medida total do lado e divida por dois. As duas parcelas devem voltar ao total quando somadas.", "Um lado de 18 cm dividido pela mediana → duas partes de 9 cm", "A mediana não divide necessariamente o ângulo do vértice; isso é função da bissetriz.", ["Ache o lado", "Divida por 2", "Confira a soma"], ["mediana", "ponto médio", "partes iguais"]),
  bissetrizMetade: criarGuiaGeometriaFocado("Divida um ângulo com a bissetriz", "Bissetar significa separar um ângulo em duas medidas iguais.", "A bissetriz parte do vértice e cria dois ângulos congruentes.", "Divida a medida original por dois e confira se as duas partes somam o ângulo inicial.", "Um ângulo de 110° bissetado → duas partes de 55°", "A bissetriz divide o ângulo, não necessariamente o lado oposto ao meio.", ["Leia o ângulo", "Divida por 2", "Confira"], ["bissetriz", "duas partes iguais"]),
  centrosCircunferencias: criarGuiaGeometriaFocado("Escolha o centro pela distância indicada", "Circunferência inscrita e circunscrita usam centros diferentes.", "O incentro fica à mesma distância dos lados e centra a circunferência inscrita. O circuncentro fica à mesma distância dos vértices e centra a circunscrita.", "Veja se a circunferência toca os lados ou passa pelos vértices; isso determina qual centro procurar.", "Uma circunferência tangencia os três lados do triângulo → seu centro é obtido pelo encontro das bissetrizes", "Não troque lados por vértices: essa única palavra muda o centro notável.", ["Toca os lados?", "Passa nos vértices?", "Escolha o centro"], ["incentro ↔ lados", "circuncentro ↔ vértices"]),
  coincidenciaEquilatero: criarGuiaGeometriaFocado("Use a simetria do triângulo equilátero", "No equilátero, a simetria faz diferentes segmentos ocuparem a mesma linha.", "Como os três lados e os três ângulos são iguais, a linha que sai de um vértice para o lado oposto pode, ao mesmo tempo, dividir lado, ângulo e formar 90°.", "Imagine dobrar a figura ao meio a partir de um vértice. A dobra revela as propriedades que coincidem.", "Num equilátero de lado 8 cm, a linha de simetria chega ao lado oposto em duas partes de 4 cm e forma 90°", "Os nomes não deixam de existir; são segmentos diferentes que coincidem na mesma reta.", ["Observe a simetria", "Dobre mentalmente", "Compare as funções"], ["equilátero", "simetria", "segmentos coincidentes"]),
  posicaoCentros: criarGuiaGeometriaFocado("Localize ortocentro e circuncentro pelo tipo de triângulo", "A posição de alguns pontos notáveis muda conforme os ângulos do triângulo.", "No acutângulo, ortocentro e circuncentro ficam dentro. No retângulo, o ortocentro está no vértice reto e o circuncentro no meio da hipotenusa. No obtusângulo, ambos ficam fora.", "Classifique primeiro o triângulo pelos ângulos e só então aplique a regra de localização do centro pedido.", "Em um triângulo retângulo, os catetos já funcionam como duas alturas e se encontram no vértice de 90°", "Não suponha que todo ponto notável fica dentro da figura.", ["Classifique o triângulo", "Identifique o centro", "Localize"], ["acutângulo", "retângulo", "obtusângulo"]),
  baricentroRazao: criarGuiaGeometriaFocado("Divida a mediana na razão do baricentro", "O baricentro não fica no meio da mediana: ele cria duas partes na razão 2 para 1.", "Do vértice ao baricentro há dois terços da mediana; do baricentro ao ponto médio do lado há um terço.", "Descubra se o trecho dado representa 2/3, 1/3 ou o total. Converta para três partes iguais antes de calcular.", "Mediana de 21 cm → 14 cm do vértice ao baricentro e 7 cm até o lado", "Não use metade: a divisão do baricentro é 2:1, e não 1:1.", ["Identifique o trecho", "Use 2:1", "Reconstrua o total"], ["2/3 junto ao vértice", "1/3 junto ao lado"]),
  construirMediatriz: criarGuiaGeometriaFocado("Construa a mediatriz com arcos", "Os arcos precisam cruzar-se acima e abaixo do segmento para determinar a reta.", "Com a mesma abertura, trace arcos a partir das duas extremidades. A abertura maior que a metade permite duas interseções; a reta por elas é perpendicular e passa no meio.", "Mantenha a abertura do compasso, marque duas interseções e una esses pontos com a régua.", "Num segmento de 8 cm, uma abertura de 5 cm permite que os arcos das extremidades se cruzem", "Se a abertura for menor que a metade, os arcos não se encontram.", ["Abra mais da metade", "Trace dois pares de arcos", "Una as interseções"], ["mesma abertura", "duas interseções", "90°"]),
  propriedadeMediatriz: criarGuiaGeometriaFocado("Use a equidistância da mediatriz", "Todo ponto da mediatriz mantém a mesma distância das duas extremidades do segmento.", "A mediatriz é o conjunto dos pontos equidistantes dos extremos de um segmento.", "Ligue o ponto às duas extremidades e reconheça que os comprimentos formados são iguais.", "Se P pertence à mediatriz de CD e PC mede 7 cm → PD também mede 7 cm", "Estar na mediatriz não obriga a formar um triângulo equilátero; garante apenas duas distâncias iguais.", ["Confirme que está na mediatriz", "Ligue aos extremos", "Iguale as distâncias"], ["equidistância", "extremidades"]),
  quadrilaterosConceitos: criarGuiaGeometriaFocado("Reconheça os quadriláteros pelas propriedades", "A identificação deve considerar lados paralelos, lados iguais e ângulos retos.", "Quadrado reúne quatro lados iguais e quatro ângulos retos; retângulo exige quatro ângulos retos; losango exige quatro lados iguais; trapézio possui um par de lados paralelos.", "Monte uma lista das propriedades dadas e elimine as figuras que não cumprem todas elas.", "Quatro ângulos retos e somente lados opostos iguais → a propriedade decisiva são os ângulos", "Uma figura pode pertencer a mais de uma família; escolha o nome mais específico pedido.", ["Marque paralelos", "Compare lados", "Procure 90°"], ["quadrado", "retângulo", "losango", "trapézio"]),
  somaQuadrilatero: criarGuiaGeometriaFocado("Use a soma dos ângulos do quadrilátero", "Uma diagonal divide qualquer quadrilátero simples em dois triângulos.", "Como cada triângulo soma 180°, os quatro ângulos internos do quadrilátero correspondem a dois desses totais.", "Some os ângulos conhecidos e subtraia do total do quadrilátero para encontrar o quarto.", "Ângulos 70°, 85° e 115° → soma 270°; o quarto completa o total", "Não use o total de um triângulo quando a figura possui quatro lados.", ["Divida em 2 triângulos", "Some os conhecidos", "Complete o total"], ["4 lados", "2 triângulos"]),
  areaRetanguloParalelogramo: criarGuiaGeometriaFocado("Relacione base e altura na área", "Retângulos e paralelogramos com a mesma base e a mesma altura ocupam a mesma área.", "No paralelogramo, uma ponta pode ser recortada e deslocada para formar um retângulo, sem alterar a área. A altura é a distância perpendicular entre as bases.", "Multiplique a base pela altura perpendicular. Se a questão pedir comparação, use o mesmo cálculo nas duas figuras.", "Base 11 cm e altura 4 cm → área de 44 cm² em qualquer paralelogramo com esses dados", "Não use o lado inclinado como altura, a menos que ele seja perpendicular à base.", ["Ache a base", "Ache a altura perpendicular", "Multiplique"], ["base", "altura", "mesma área"]),
  areaQuadrado: criarGuiaGeometriaFocado("Calcule a área do quadrado pelo lado", "Como base e altura têm a mesma medida, o produto repete o valor do lado.", "A área é lado multiplicado por lado, também escrita como lado ao quadrado.", "Identifique a medida do lado, multiplique-a por ela mesma e registre unidade quadrada.", "Lado 9 cm → 9 × 9 = 81 cm²", "Não confunda área com perímetro, que soma os quatro lados.", ["Leia o lado", "Multiplique por ele mesmo", "Use unidade²"], ["lado × lado", "unidade quadrada"]),
  areaLosango: criarGuiaGeometriaFocado("Use as duas diagonais do losango", "As diagonais perpendiculares dividem o losango em quatro triângulos.", "A área depende do produto da diagonal maior pela menor, tomado pela metade.", "Identifique D e d, multiplique e divida por dois. Se as diagonais forem ampliadas, analise o efeito em cada fator.", "Diagonais 14 cm e 8 cm → 14 × 8 ÷ 2 = 56 cm²", "Não some as diagonais e não suponha que elas tenham a mesma medida.", ["Ache D e d", "Multiplique", "Divida por 2"], ["diagonal maior", "diagonal menor", "metade"]),
  areaTrapezio: criarGuiaGeometriaFocado("Calcule a área do trapézio pelas duas bases", "O trapézio usa a média das bases paralelas multiplicada pela altura.", "Somar as bases e dividir por dois produz a base média. Multiplicar pela altura fornece a área.", "Some B e b, multiplique pela altura e divida por dois. Para achar a altura, isole-a com operações inversas.", "Bases 12 cm e 8 cm, altura 5 cm → (12 + 8) × 5 ÷ 2 = 50 cm²", "Use somente os lados paralelos como bases e uma altura perpendicular.", ["Some as bases", "Multiplique pela altura", "Divida por 2"], ["base maior", "base menor", "altura"]),
  propriedadesDiagonais: criarGuiaGeometriaFocado("Compare as diagonais dos quadriláteros", "As diagonais ajudam a distinguir retângulo, losango e quadrado.", "No retângulo elas têm a mesma medida; no losango são perpendiculares; no quadrado possuem as duas propriedades. Em todos os paralelogramos, cortam-se ao meio.", "Separe as palavras-chave: iguais, perpendiculares ou bissetam ângulos. Depois associe à figura.", "Diagonais que se cruzam em 90°, mas podem ter medidas diferentes → observe a propriedade típica do losango", "Perpendicular não significa automaticamente igual.", ["São iguais?", "Formam 90°?", "Cortam-se ao meio?"], ["iguais", "perpendiculares", "ponto médio"]),
  areaEPerimetroRetangulo: criarGuiaGeometriaFocado("Passe da área ao perímetro do retângulo", "Primeiro descubra a dimensão ausente; depois some o contorno.", "Área multiplica base e altura. Perímetro soma duas bases e duas alturas.", "Divida a área pela dimensão conhecida para achar a outra. Em seguida, some base + altura e dobre.", "Área 70 cm² e base 10 cm → altura 7 cm; perímetro = 2 × (10 + 7)", "Não use o valor da área diretamente na fórmula do perímetro; são grandezas diferentes.", ["Ache a outra dimensão", "Some os lados diferentes", "Dobre"], ["área", "dimensão", "perímetro"]),
  escalaArea: criarGuiaGeometriaFocado("Analise como a área muda quando medidas dobram", "Área resulta do produto de duas medidas lineares.", "Se duas medidas usadas na fórmula são multiplicadas por um fator k, a área é multiplicada por k².", "Marque quantos fatores foram alterados e multiplique os efeitos. Dobrar dois fatores significa 2 × 2.", "Se base e altura triplicam, a nova área fica 3 × 3 = 9 vezes a antiga", "Não aplique apenas um fator quando duas medidas da fórmula mudaram.", ["Veja o fator", "Conte as medidas alteradas", "Multiplique os efeitos"], ["fator linear", "fator de área"]),
  nomesPoligonos: criarGuiaGeometriaFocado("Associe o número de lados ao nome do polígono", "O nome vem da quantidade de segmentos que formam o contorno fechado.", "Triângulo tem 3 lados; quadrilátero 4; pentágono 5; hexágono 6; heptágono 7; octógono 8; decágono 10.", "Conte cada lado uma única vez e associe o total ao prefixo correto.", "Uma figura fechada com oito segmentos → relacione o número 8 ao prefixo octo", "Não conte diagonais ou linhas internas como lados do polígono.", ["Conte o contorno", "Associe o prefixo", "Confira se é fechado"], ["penta = 5", "hexa = 6", "octo = 8"]),
  poligonoRegular: criarGuiaGeometriaFocado("Entenda o que torna um polígono regular", "Regularidade exige duas condições simultâneas.", "Um polígono regular é equilátero e equiângulo: todos os lados têm a mesma medida e todos os ângulos internos também.", "Confira separadamente os lados e os ângulos. Só considere regular quando as duas verificações forem positivas.", "Um pentágono com cinco lados iguais, mas ângulos diferentes → não satisfaz as duas condições", "Ter apenas lados iguais não basta para todo polígono ser regular.", ["Compare os lados", "Compare os ângulos", "Exija as duas condições"], ["equilátero", "equiângulo"]),
  diagonaisPoligono: criarGuiaGeometriaFocado("Entenda e conte diagonais de um polígono", "Diagonal une vértices não vizinhos e não pertence ao contorno.", "De cada vértice saem n − 3 diagonais possíveis; ao contar todos os vértices, cada diagonal aparece duas vezes. Por isso o total usa n(n − 3) ÷ 2.", "Substitua n pelo número de lados, faça a multiplicação e divida por dois. Em problema inverso, teste valores inteiros de n.", "Hexágono: 6 × (6 − 3) ÷ 2 = 9 diagonais", "Não conte os dois lados vizinhos nem o próprio vértice como destinos de diagonais.", ["Identifique n", "Calcule n − 3", "Multiplique e divida por 2"], ["vértices não consecutivos", "n(n−3)/2"]),
  somaPoligono: criarGuiaGeometriaFocado("Calcule a soma dos ângulos internos", "Traçando diagonais de um vértice, um polígono de n lados vira n − 2 triângulos.", "Cada triângulo contribui com 180°. Assim, a soma depende de quantos triângulos cabem na figura.", "Subtraia 2 do número de lados e multiplique o resultado por 180°. No problema inverso, divida por 180° e some 2.", "Octógono: (8 − 2) × 180° = 1080°", "Não use n × 180°, pois a decomposição produz n − 2 triângulos.", ["Ache n", "Faça n − 2", "Multiplique por 180°"], ["n lados", "n−2 triângulos"]),
  angulosExternos: criarGuiaGeometriaFocado("Use uma volta completa nos ângulos externos", "Um ângulo externo em cada vértice representa as mudanças de direção ao contornar o polígono.", "Ao completar o percurso, a direção girou uma volta inteira. Em um polígono regular, cada externo é essa volta dividida pelo número de lados.", "Para achar cada externo, divida 360° por n. Para descobrir n, divida 360° pela medida de um externo.", "Num hexágono regular, cada externo mede 360° ÷ 6 = 60°", "A soma dos externos não depende da quantidade de lados; o que muda é o tamanho de cada um.", ["Uma volta", "Divida por n", "Confira a soma"], ["total externo = 360°", "regular: 360°/n"]),
  anguloInternoRegular: criarGuiaGeometriaFocado("Encontre o ângulo interno de um polígono regular", "Todos os ângulos internos são iguais, então a soma pode ser repartida igualmente.", "Você pode calcular (n − 2) × 180° e dividir por n, ou usar interno + externo = 180°.", "Escolha a rota mais curta conforme os dados: se conhece n, use a fórmula; se conhece um externo, complete 180°.", "Pentágono regular: soma 540°; cada interno mede 540° ÷ 5 = 108°", "Não confunda a soma de todos os ângulos com a medida de apenas um.", ["Calcule a soma", "Divida por n", "Ou complete 180°"], ["regular", "ângulo interno", "ângulo externo"]),
  convexidade: criarGuiaGeometriaFocado("Diferencie polígono convexo e não convexo", "A presença de uma reentrância é a pista visual principal.", "No convexo, todo segmento entre dois pontos internos permanece dentro da figura. No não convexo, existe ao menos uma reentrância e alguma diagonal passa por fora.", "Procure um vértice apontando para dentro ou um ângulo interno maior que 180°.", "Uma figura em forma de ponta de flecha possui uma reentrância → teste uma diagonal perto dessa região", "Ter muitos lados não torna um polígono não convexo; a reentrância é o que importa.", ["Procure reentrância", "Observe diagonais", "Classifique"], ["convexo", "não convexo", "ângulo > 180°"]),
  construcoesAngulos: criarGuiaGeometriaFocado("Construa ângulos usando perpendicular e bissetriz", "Ângulos notáveis podem ser obtidos a partir de construções básicas com régua e compasso.", "Retas perpendiculares criam 90°. O equilátero cria 60°. A bissetriz divide qualquer um desses ângulos ao meio, produzindo 45° ou 30°.", "Identifique o ângulo de partida e veja quantas divisões ao meio são necessárias.", "Construa 90° com uma perpendicular e trace sua bissetriz → surgem dois ângulos de 45°", "Medir visualmente não é uma construção geométrica; preserve a abertura do compasso e use arcos.", ["Crie o ângulo-base", "Trace a bissetriz", "Confira a metade"], ["perpendicular = 90°", "equilátero = 60°", "bissetriz = metade"]),
  hexagonoInscrito: criarGuiaGeometriaFocado("Construa o hexágono regular na circunferência", "Seis ângulos centrais de 60° completam a volta.", "No hexágono regular inscrito, cada triângulo formado pelo centro e dois vértices consecutivos é equilátero. Por isso, o lado do hexágono e o raio têm a mesma medida.", "Mantenha no compasso a abertura do raio e marque seis arcos consecutivos sobre a circunferência.", "Circunferência de raio 5 cm → a mesma abertura marca os seis vértices do hexágono", "Não altere a abertura do compasso entre as marcações.", ["Use o raio", "Marque 6 vezes", "Una os pontos"], ["6 setores de 60°", "lado = raio"]),
  unidadesGeometricas: criarGuiaGeometriaFocado("Escolha a unidade pela grandeza medida", "Comprimento, área, volume e capacidade usam tipos de unidade diferentes.", "Comprimento usa unidade linear; área usa unidade ao quadrado; volume usa unidade ao cubo; capacidade costuma usar litro ou mililitro.", "Pergunte se está medindo contorno, superfície, espaço ocupado ou quanto cabe. Depois escolha o expoente ou a unidade de capacidade.", "Piso de uma sala → superfície → medida em metros quadrados", "Não escolha cm³ para uma superfície nem cm² para o espaço interno de uma caixa.", ["Identifique a grandeza", "Escolha a unidade", "Confira o expoente"], ["comprimento", "área²", "volume³", "capacidade"]),
  conversaoCapacidade: criarGuiaGeometriaFocado("Converta volume e capacidade", "Litros podem ser relacionados diretamente a decímetros e centímetros cúbicos.", "As relações fundamentais são 1 L = 1 dm³ = 1000 cm³ e 1 m³ = 1000 L.", "Escreva a equivalência, veja se precisa multiplicar ou dividir por 1000 e confira se a unidade ficou maior ou menor.", "45 000 cm³ ÷ 1000 = 45 L", "Ao passar de m³ para litros, multiplica-se por 1000; não se divide.", ["Escreva a equivalência", "× ou ÷ 1000", "Confira a unidade"], ["1 L = 1 dm³", "1 L = 1000 cm³", "1 m³ = 1000 L"]),
  volumeBloco: criarGuiaGeometriaFocado("Calcule o volume de blocos e recipientes", "O volume conta quantos cubos unitários cabem no espaço tridimensional.", "Em um bloco retangular, multiplique comprimento, largura e altura. No cubo, as três medidas são iguais.", "Converta todas as dimensões para a mesma unidade, multiplique as três e escreva unidade cúbica.", "Bloco 6 cm × 3 cm × 4 cm → 72 cm³", "Não pare após multiplicar apenas duas dimensões; isso daria área, não volume.", ["Iguale as unidades", "Multiplique 3 dimensões", "Use unidade³"], ["comprimento", "largura", "altura"]),
  areaCirculo: criarGuiaGeometriaFocado("Calcule a área do círculo pelo raio", "A área do círculo depende do quadrado do raio e do valor de π indicado.", "O raio vai do centro à borda. Ele é elevado ao quadrado e multiplicado por π.", "Identifique o raio, calcule raio × raio, multiplique por π e use unidade quadrada.", "Com π = 3,14 e raio 3 cm → 3,14 × 9 = 28,26 cm²", "Se o enunciado fornecer o diâmetro, divida-o por dois antes de usar a fórmula.", ["Ache o raio", "Eleve ao quadrado", "Multiplique por π"], ["raio", "π", "unidade²"]),
  areaRetangulo: criarGuiaGeometriaFocado("Calcule a superfície retangular", "A área de um retângulo resulta do número de unidades que cabem em suas linhas e colunas.", "Multiplicar base por altura conta todos os quadradinhos que cobrem a superfície.", "Garanta que base e altura estão na mesma unidade, multiplique-as e escreva a unidade ao quadrado.", "Terreno de 12 m por 7 m → 12 × 7 = 84 m²", "Não some base e altura; essa operação não calcula a superfície.", ["Leia as dimensões", "Multiplique", "Use unidade²"], ["base", "altura", "área"]),
  areaComRetirada: criarGuiaGeometriaFocado("Calcule uma área útil por subtração", "Quando uma parte não será coberta, pintada ou usada, retire sua área do total.", "Área útil é a área da figura maior menos a soma das regiões excluídas.", "Calcule primeiro toda a superfície, calcule separadamente a parte retirada e faça a subtração.", "Parede 5 m × 4 m com janela de 3 m² → 20 − 3 = 17 m²", "Não subtraia uma medida linear de uma área; as duas parcelas devem estar em unidade quadrada.", ["Área total", "Área excluída", "Subtraia"], ["superfície total", "recorte", "área útil"]),
  volumeParaLitros: criarGuiaGeometriaFocado("Calcule o volume e converta para litros", "Problemas de capacidade costumam exigir duas etapas: volume geométrico e conversão.", "Multiplique as três dimensões para obter o volume. Depois use a equivalência adequada: 1000 cm³ por litro ou 1000 litros por metro cúbico.", "Calcule o volume, escreva a unidade cúbica e só então converta para litros.", "Recipiente 40 cm × 20 cm × 25 cm → 20 000 cm³ → 20 L", "Não misture centímetros com metros no mesmo produto; converta antes.", ["Calcule o volume", "Escolha a equivalência", "Converta"], ["3 dimensões", "cm³ ou m³", "litros"]),
  areaComposta: criarGuiaGeometriaFocado("Divida uma figura composta em partes simples", "Uma figura irregular pode ser resolvida separando-a em formas conhecidas.", "Calcule a área de cada parte sem sobreposição e some quando as regiões se juntam; subtraia quando uma região foi retirada.", "Desenhe uma linha de separação, nomeie cada forma, calcule individualmente e combine os resultados.", "Retângulo 8 × 5 unido a triângulo de base 4 e altura 3 → 40 + 6 = 46 unidades²", "Confira se as partes se sobrepõem para não contar a mesma região duas vezes.", ["Separe as formas", "Calcule cada área", "Some ou subtraia"], ["decomposição", "sem sobreposição"]),
  porcentagemCapacidade: criarGuiaGeometriaFocado("Aplique uma porcentagem à capacidade total", "Primeiro descubra quanto cabe no recipiente inteiro; depois calcule a fração ocupada.", "Uma porcentagem representa partes de 100. Por exemplo, 75% equivale a 3/4 ou 0,75.", "Calcule e converta a capacidade total. Em seguida, multiplique pela forma decimal da porcentagem.", "Um tanque de 40 L com 60% ocupado → 40 × 0,60 = 24 L", "Não aplique a porcentagem antes de terminar e converter o volume total.", ["Capacidade total", "Converta a porcentagem", "Multiplique"], ["100% = total", "percentual ocupado"]),
  compararAreas: criarGuiaGeometriaFocado("Compare áreas calculando na mesma unidade", "Figuras diferentes exigem fórmulas diferentes, mas seus resultados podem ser comparados quando usam a mesma unidade.", "Calcule cada área separadamente, mantenha o mesmo valor de π indicado e compare os números finais.", "Monte duas linhas de cálculo, uma para cada figura, e depois encontre qual valor é maior e por quanto.", "Círculo de raio 5 com π = 3 e quadrado de lado 8 → compare 75 unidades² com 64 unidades²", "Não compare apenas raio e lado; compare as áreas resultantes.", ["Calcule a figura A", "Calcule a figura B", "Compare"], ["mesma unidade", "duas fórmulas"]),
};

const mapaGuiasGeometria = {
  1: "ladosTriangulo", 2: "ladosTriangulo", 3: "ladosTriangulo", 4: "angulosTriangulo", 5: "somaTriangulo",
  6: "areaTriangulo", 7: "angulosTriangulo", 8: "congruencia", 9: "somaTriangulo", 10: "areaTriangulo",
  11: "existenciaTriangulo", 12: "classificacaoDupla", 13: "congruencia", 14: "isoscelesAngulos", 15: "areaTriangulo",
  16: "anguloExternoTriangulo", 17: "somaTriangulo", 18: "areaTriangulo", 19: "congruencia", 20: "isoscelesPerimetro",
  21: "segmentosNotaveis", 22: "segmentosNotaveis", 23: "segmentosNotaveis", 24: "segmentosNotaveis",
  25: "pontosNotaveis", 26: "pontosNotaveis", 27: "pontosNotaveis", 28: "pontosNotaveis",
  29: "medianaMetade", 30: "bissetrizMetade", 31: "centrosCircunferencias", 32: "centrosCircunferencias",
  33: "coincidenciaEquilatero", 34: "posicaoCentros", 35: "baricentroRazao", 36: "construirMediatriz",
  37: "baricentroRazao", 38: "baricentroRazao", 39: "posicaoCentros", 40: "propriedadeMediatriz",
  41: "somaQuadrilatero", 42: "quadrilaterosConceitos", 43: "quadrilaterosConceitos", 44: "quadrilaterosConceitos",
  45: "quadrilaterosConceitos", 46: "areaRetanguloParalelogramo", 47: "areaRetanguloParalelogramo", 48: "propriedadesDiagonais",
  49: "areaRetangulo", 50: "areaQuadrado", 51: "areaLosango", 52: "areaTrapezio", 53: "somaQuadrilatero",
  54: "quadrilaterosConceitos", 55: "quadrilaterosConceitos", 56: "propriedadesDiagonais", 57: "areaTrapezio",
  58: "areaEPerimetroRetangulo", 59: "escalaArea", 60: "areaRetanguloParalelogramo",
  61: "nomesPoligonos", 62: "nomesPoligonos", 63: "poligonoRegular", 64: "diagonaisPoligono",
  65: "somaPoligono", 66: "angulosExternos", 67: "construcoesAngulos", 68: "hexagonoInscrito",
  69: "somaPoligono", 70: "construcoesAngulos", 71: "anguloInternoRegular", 72: "diagonaisPoligono",
  73: "convexidade", 74: "angulosExternos", 75: "construcoesAngulos", 76: "construcoesAngulos",
  77: "somaPoligono", 78: "angulosExternos", 79: "diagonaisPoligono", 80: "anguloInternoRegular",
  81: "unidadesGeometricas", 82: "unidadesGeometricas", 83: "conversaoCapacidade", 84: "conversaoCapacidade",
  85: "volumeBloco", 86: "areaCirculo", 87: "volumeBloco", 88: "conversaoCapacidade", 89: "volumeBloco",
  90: "conversaoCapacidade", 91: "conversaoCapacidade", 92: "areaCirculo", 93: "areaRetangulo", 94: "areaComRetirada",
  95: "volumeParaLitros", 96: "conversaoCapacidade", 97: "volumeParaLitros", 98: "areaComposta",
  99: "porcentagemCapacidade", 100: "compararAreas",
};

const quadroGeometria = (titulo, texto, exemplo, tom) => ({ titulo, texto, exemplo, tom });

const quadrosVisuaisGeometria = {
  "triangulo-lados": [
    quadroGeometria("Equilátero", "Possui os três lados com a mesma medida. Seus três ângulos internos medem 60°.", "5 cm · 5 cm · 5 cm → equilátero", "roxo"),
    quadroGeometria("Isósceles", "Possui exatamente dois lados com a mesma medida. Os ângulos opostos a esses lados também são iguais.", "7 cm · 7 cm · 4 cm → isósceles", "verde"),
    quadroGeometria("Escaleno", "Possui os três lados com medidas diferentes. Seus três ângulos também são diferentes.", "4 cm · 5 cm · 6 cm → escaleno", "laranja"),
  ],
  "triangulo-angulos": [
    quadroGeometria("Acutângulo", "Os três ângulos são agudos, isto é, todos são menores que 90°.", "50° · 60° · 70° → acutângulo", "verde"),
    quadroGeometria("Retângulo", "Possui um ângulo reto, de exatamente 90°. O lado oposto é a hipotenusa.", "30° · 60° · 90° → retângulo", "azul"),
    quadroGeometria("Obtusângulo", "Possui um ângulo obtuso, maior que 90°. Os outros dois precisam ser agudos.", "25° · 35° · 120° → obtusângulo", "laranja"),
  ],
  "triangulo-soma": [
    quadroGeometria("Regra fixa", "A soma dos três ângulos internos de qualquer triângulo é 180°.", "45° + 55° + 80° → 180°", "roxo"),
    quadroGeometria("Ângulo desconhecido", "Some os conhecidos e retire o resultado de 180°.", "35° + 65° = 100°; falta 80°", "verde"),
  ],
  "triangulo-area": [
    quadroGeometria("Base", "Pode ser qualquer lado escolhido como apoio. A altura usada precisa corresponder a essa base.", "base = 8 cm", "roxo"),
    quadroGeometria("Altura", "É a distância perpendicular entre a base e o vértice oposto; forma 90° com a base.", "altura = 6 cm e forma 90°", "verde"),
    quadroGeometria("Cálculo", "Multiplique base por altura e divida por 2, pois o triângulo é metade de um paralelogramo.", "b = 8 e h = 6 → área = 24", "azul"),
    quadroGeometria("Unidade", "Área sempre usa unidade ao quadrado: cm², m², km² e semelhantes.", "8 cm × 6 cm ÷ 2 → 24 cm²", "amarelo"),
  ],
  "triangulo-congruencia": [
    quadroGeometria("LLL", "Os três lados de um triângulo são respectivamente iguais aos três lados do outro.", "3, 4 e 5 cm nos dois triângulos → LLL", "roxo"),
    quadroGeometria("LAL", "Dois lados e o ângulo compreendido entre eles são respectivamente iguais.", "5 cm, 60° e 7 cm nos dois → LAL", "verde"),
    quadroGeometria("ALA", "Um lado e os dois ângulos junto a ele são respectivamente iguais.", "45°, 8 cm e 70° nos dois → ALA", "azul"),
    quadroGeometria("O que congruência garante", "Mesma forma e mesmo tamanho; lados e ângulos correspondentes possuem medidas iguais.", "6, 8 e 10 cm → mesma forma e tamanho", "laranja"),
  ],
  "triangulo-existencia": [
    quadroGeometria("Condição", "O maior lado precisa ser menor que a soma dos outros dois.", "8 < 5 + 6 → consegue fechar", "verde"),
    quadroGeometria("Não forma", "Se o maior for igual ou maior que a soma dos menores, não existe região triangular.", "9 ≥ 4 + 5 → fica alinhado ou aberto", "laranja"),
    quadroGeometria("Atalho seguro", "Ordene as três medidas e teste apenas o maior lado contra os dois menores.", "2, 7, 6 → teste 7 < 2 + 6", "azul"),
  ],
  "triangulo-classificacao": [
    quadroGeometria("Pelos lados", "Equilátero: três iguais; isósceles: dois iguais; escaleno: três diferentes.", "6, 6 e 9 → isósceles", "roxo"),
    quadroGeometria("Pelos ângulos", "Acutângulo: todos menores que 90°; retângulo: um de 90°; obtusângulo: um maior que 90°.", "45°, 45° e 90° → retângulo", "verde"),
    quadroGeometria("Classificação completa", "Uma característica de cada grupo pode aparecer ao mesmo tempo.", "dois lados iguais + um ângulo de 90° → isósceles e retângulo", "azul"),
  ],
  "triangulo-isosceles": [
    quadroGeometria("Lados congruentes", "Os dois lados iguais encontram-se no ângulo do vértice.", "lado 7 cm = lado 7 cm", "roxo"),
    quadroGeometria("Ângulos da base", "Ficam opostos aos lados iguais e, por isso, também possuem a mesma medida.", "65° e 65° na base", "verde"),
    quadroGeometria("Como calcular", "Retire o ângulo do vértice de 180° e divida o restante por dois.", "vértice 40° → base: 70° e 70°", "azul"),
  ],
  "triangulo-externo": [
    quadroGeometria("Par suplementar", "O externo e o interno vizinho formam uma linha reta e somam 180°.", "interno 70° → externo 110°", "roxo"),
    quadroGeometria("Teorema do externo", "O ângulo externo equivale à soma dos dois internos não adjacentes.", "45° + 65° → externo 110°", "verde"),
  ],
  "triangulo-perimetro": [
    quadroGeometria("Perímetro", "É a soma dos três lados. No isósceles, pode ser escrito como base + 2 × lado congruente.", "b + x + x = b + 2x", "roxo"),
    quadroGeometria("Descobrir os lados iguais", "Retire a base do perímetro e divida o restante por dois.", "P = 30 e b = 8 → cada lado igual mede 11", "verde"),
  ],
  "triangulo-segmentos": [
    quadroGeometria("Mediana", "Parte de um vértice e chega ao ponto médio do lado oposto.", "lado 12 cm → 6 cm + 6 cm", "roxo"),
    quadroGeometria("Altura", "Parte de um vértice e encontra o lado oposto, ou seu prolongamento, formando 90°.", "altura 8 cm e encontro de 90°", "verde"),
    quadroGeometria("Bissetriz", "Parte de um vértice e divide aquele ângulo em duas medidas iguais.", "80° vira 40° + 40°", "azul"),
    quadroGeometria("Mediatriz", "Não precisa partir de vértice: corta um lado no ponto médio e forma 90°.", "segmento 10 cm → 5 cm + 5 cm e 90°", "laranja"),
  ],
  "triangulo-centros": [
    quadroGeometria("Baricentro", "Encontro das medianas. É o centro de equilíbrio e divide cada mediana na razão 2:1.", "mediana 18 cm → 12 cm + 6 cm", "roxo"),
    quadroGeometria("Ortocentro", "Encontro das alturas ou de seus prolongamentos.", "altura 8 cm e encontro a 90°", "verde"),
    quadroGeometria("Incentro", "Encontro das bissetrizes. Fica à mesma distância dos lados e centra a circunferência inscrita.", "ângulo 70° → 35° + 35°", "azul"),
    quadroGeometria("Circuncentro", "Encontro das mediatrizes. Fica à mesma distância dos vértices e centra a circunferência circunscrita.", "raio 5 cm → 5 cm até cada vértice", "laranja"),
  ],
  "triangulo-baricentro": [
    quadroGeometria("Razão 2:1", "O trecho entre o vértice e o baricentro é duas vezes o trecho entre o baricentro e o lado.", "10 cm e 5 cm → razão 2:1", "roxo"),
    quadroGeometria("Do vértice ao centro", "Corresponde a 2/3 do comprimento total da mediana.", "mediana 18 cm → trecho 12 cm", "verde"),
    quadroGeometria("Do centro ao lado", "Corresponde a 1/3 do comprimento total da mediana.", "mediana 18 cm → trecho 6 cm", "azul"),
  ],
  mediatriz: [
    quadroGeometria("Ponto médio", "A mediatriz passa exatamente no meio do segmento.", "AB = 12 cm → 6 cm de cada lado", "roxo"),
    quadroGeometria("Perpendicular", "Forma um ângulo de 90° com o segmento.", "AB = 12 cm e cruzamento = 90°", "verde"),
    quadroGeometria("Equidistância", "Qualquer ponto sobre a mediatriz está à mesma distância das duas extremidades.", "PA = 7 cm e PB = 7 cm", "azul"),
  ],
  "quadrilateros-tipos": [
    quadroGeometria("Quadrado", "Quatro lados iguais, quatro ângulos de 90° e dois pares de lados paralelos.", "lado 5 cm e quatro ângulos de 90°", "roxo"),
    quadroGeometria("Retângulo", "Quatro ângulos de 90° e lados opostos iguais e paralelos.", "base 8 cm, altura 5 cm e ângulos de 90°", "verde"),
    quadroGeometria("Losango", "Quatro lados iguais; ângulos opostos iguais. Não precisa ter ângulos retos.", "lado 5 cm; diagonais 12 cm e 8 cm", "azul"),
    quadroGeometria("Trapézio", "Possui um par de lados paralelos, chamados base maior e base menor.", "bases 10 cm e 6 cm; altura 4 cm", "laranja"),
  ],
  "quadrilatero-angulos": [
    quadroGeometria("Soma interna", "Os quatro ângulos internos de qualquer quadrilátero somam 360°.", "90° + 90° + 90° + 90° = 360°", "roxo"),
    quadroGeometria("Encontrar o quarto", "Some três ângulos e retire o resultado de 360°.", "80° + 100° + 110° = 290°; falta 70°", "verde"),
  ],
  "quadrilatero-area": [
    quadroGeometria("Retângulo", "Área = base × altura.", "8 × 5 → 40 cm²", "roxo"),
    quadroGeometria("Paralelogramo", "Também usa base × altura perpendicular; o lado inclinado não é a altura.", "10 × 4 → 40 cm²", "verde"),
    quadroGeometria("Mesma base e altura", "Retângulo e paralelogramo com base e altura iguais possuem a mesma área.", "b = 10 e h = 4 → ambos têm 40 cm²", "azul"),
  ],
  "quadrado-area": [
    quadroGeometria("Área", "Multiplique o lado por ele mesmo: A = lado².", "lado 6 cm → 36 cm²", "roxo"),
    quadroGeometria("Perímetro", "Some os quatro lados: P = 4 × lado.", "lado 6 cm → 24 cm", "verde"),
  ],
  losango: [
    quadroGeometria("Lados", "Os quatro lados possuem a mesma medida.", "quatro lados de 5 cm", "roxo"),
    quadroGeometria("Diagonais", "São perpendiculares, cortam-se ao meio e bissetam os ângulos do losango.", "D = 12 cm e d = 8 cm; cruzamento de 90°", "verde"),
    quadroGeometria("Área", "Multiplique a diagonal maior pela menor e divida por 2.", "D = 12 e d = 8 → área 48", "azul"),
  ],
  trapezio: [
    quadroGeometria("Bases", "São os dois lados paralelos: base maior B e base menor b.", "B = 10 cm e b = 6 cm", "roxo"),
    quadroGeometria("Altura", "É a distância perpendicular entre as bases.", "h = 4 cm e forma 90° com as bases", "verde"),
    quadroGeometria("Área", "Some as bases, multiplique pela altura e divida por 2.", "B = 10, b = 6, h = 4 → área 32", "azul"),
  ],
  "escala-area": [
    quadroGeometria("Uma medida dobra", "Se apenas uma dimensão dobra, mantendo a outra, a área dobra.", "2b × h → 2A", "roxo"),
    quadroGeometria("Duas medidas dobram", "Se as duas dimensões dobram, a área fica quatro vezes maior.", "2b × 2h → 4A", "verde"),
    quadroGeometria("Regra geral", "Multiplicar todas as medidas lineares por k multiplica a área por k².", "k = 3 → área 9 vezes maior", "azul"),
  ],
  "poligonos-nomes": [
    quadroGeometria("3 e 4 lados", "Triângulo tem 3 lados; quadrilátero tem 4.", "triângulo = 3; quadrilátero = 4", "roxo"),
    quadroGeometria("5 e 6 lados", "Pentágono tem 5 lados; hexágono tem 6.", "penta = 5; hexa = 6", "verde"),
    quadroGeometria("7 e 8 lados", "Heptágono tem 7 lados; octógono tem 8.", "hepta = 7; octo = 8", "azul"),
    quadroGeometria("9 e 10 lados", "Eneágono tem 9 lados; decágono tem 10.", "enea = 9; deca = 10", "laranja"),
  ],
  "poligono-regular": [
    quadroGeometria("Equilátero", "Todos os lados têm a mesma medida.", "hexágono com seis lados de 4 cm", "roxo"),
    quadroGeometria("Equiângulo", "Todos os ângulos internos têm a mesma medida.", "hexágono com seis ângulos de 120°", "verde"),
    quadroGeometria("Regular", "Precisa ser equilátero e equiângulo ao mesmo tempo.", "lado 4 cm + ângulo 120° em todos", "azul"),
  ],
  "poligono-diagonais": [
    quadroGeometria("O que é diagonal", "Segmento que une dois vértices não consecutivos.", "pentágono: 5 lados e 5 diagonais", "roxo"),
    quadroGeometria("De um vértice", "Não liga ao próprio vértice nem aos dois vizinhos: restam n − 3 diagonais.", "hexágono → 3 por vértice", "verde"),
    quadroGeometria("Total", "D = n(n − 3)/2, pois cada diagonal seria contada duas vezes.", "pentágono → 5 diagonais", "azul"),
  ],
  "poligono-angulos": [
    quadroGeometria("Soma dos internos", "S = (n − 2) × 180°, pois o polígono se divide em n − 2 triângulos.", "hexágono → 720°", "roxo"),
    quadroGeometria("Cada interno regular", "Divida a soma interna por n.", "hexágono regular → 120°", "verde"),
    quadroGeometria("Ângulos externos", "A soma é sempre 360°. No regular, cada externo mede 360° ÷ n.", "octógono regular → 45°", "azul"),
  ],
  "poligono-convexidade": [
    quadroGeometria("Convexo", "Não possui reentrância; todos os ângulos internos são menores que 180° e as diagonais ficam dentro.", "pentágono: cinco ângulos menores que 180°", "verde"),
    quadroGeometria("Não convexo", "Possui reentrância, ao menos um ângulo interno maior que 180° e alguma diagonal passa fora.", "ponta de flecha com reentrância de 270°", "laranja"),
  ],
  "construcao-angulos": [
    quadroGeometria("90°", "Construa duas retas perpendiculares.", "quatro ângulos de 90° no encontro", "roxo"),
    quadroGeometria("60°", "Use a construção de um triângulo equilátero.", "cada ângulo interno mede 60°", "verde"),
    quadroGeometria("45°", "Construa 90° e trace sua bissetriz.", "90° ÷ 2 = 45°", "azul"),
    quadroGeometria("30°", "Construa 60° e trace sua bissetriz.", "60° ÷ 2 = 30°", "laranja"),
  ],
  "hexagono-inscrito": [
    quadroGeometria("Seis setores", "A volta de 360° fica dividida em seis ângulos centrais de 60°.", "360° ÷ 6 = 60°", "roxo"),
    quadroGeometria("Lado igual ao raio", "Cada setor forma um triângulo equilátero; por isso lado e raio têm a mesma medida.", "raio 4 cm → lado 4 cm", "verde"),
    quadroGeometria("Construção", "Mantenha a abertura do raio e marque seis pontos consecutivos na circunferência.", "raio 4 cm → seis aberturas de 4 cm", "azul"),
  ],
  unidades: [
    quadroGeometria("Comprimento", "Mede uma dimensão: cm, m, km.", "parede com 5 m de comprimento", "roxo"),
    quadroGeometria("Área", "Mede superfície: cm², m², km².", "piso 5 m × 4 m → 20 m²", "verde"),
    quadroGeometria("Volume", "Mede espaço tridimensional: cm³, dm³, m³.", "caixa 5 × 4 × 3 cm → 60 cm³", "azul"),
    quadroGeometria("Capacidade", "Mede quanto cabe: mL e L.", "reservatório com capacidade de 20 L", "laranja"),
  ],
  "volume-capacidade": [
    quadroGeometria("Bloco retangular", "Volume = comprimento × largura × altura.", "5 × 4 × 3 → 60 cm³", "roxo"),
    quadroGeometria("Cubo", "As três dimensões são iguais: volume = aresta³.", "aresta 3 cm → 27 cm³", "verde"),
    quadroGeometria("Litro e decímetro", "1 L corresponde exatamente a 1 dm³.", "5 dm³ → 5 L", "azul"),
    quadroGeometria("Conversões", "1 L = 1000 cm³ e 1 m³ = 1000 L.", "20 000 cm³ → 20 L", "laranja"),
  ],
  "circulo-area": [
    quadroGeometria("Raio", "Segmento do centro até a borda. É metade do diâmetro.", "diâmetro 10 cm → raio 5 cm", "roxo"),
    quadroGeometria("Área", "A = π × r². Primeiro eleve o raio ao quadrado.", "r = 3 e π = 3,14 → 28,26 cm²", "verde"),
    quadroGeometria("Circunferência", "É apenas o contorno e usa C = 2πr; não confunda com a área interna.", "r = 3 cm → C = 18,84 cm", "azul"),
  ],
  "area-composta": [
    quadroGeometria("Decompor", "Divida a figura em retângulos, triângulos, círculos ou outras formas conhecidas.", "14 × 8 menos o recorte 4 × 2", "roxo"),
    quadroGeometria("Somar", "Some áreas quando as partes se juntam sem sobreposição.", "10 × 6 + 4 × 3 → 72 cm²", "verde"),
    quadroGeometria("Subtrair", "Retire áreas de portas, janelas, recortes ou regiões vazias.", "parede 8 × 4 menos janela 2,5 × 2 → 27 m²", "laranja"),
  ],
  "comparar-areas": [
    quadroGeometria("Calcule separadamente", "Aplique a fórmula correta a cada figura e mantenha a mesma unidade.", "quadrado lado 6 → 36 cm²; círculo r = 3 → 28,26 cm²", "roxo"),
    quadroGeometria("Compare os resultados", "O maior lado ou raio não garante, sozinho, a maior área.", "36 cm² > 28,26 cm² → quadrado maior", "verde"),
  ],
};

function obterGuiaGeometriaFocado(questao) {
  const tiposCalculo = {
    "triangulo-angulos-calculo": ["somaTriangulo", "triangulo-soma"],
    "triangulo-area": ["areaTriangulo", "triangulo-area"],
    "triangulo-lados-calculo": ["existenciaTriangulo", "triangulo-existencia"],
    "triangulo-externo": ["anguloExternoTriangulo", "triangulo-externo"],
    mediana: ["medianaMetade", "triangulo-segmentos"],
    bissetriz: ["bissetrizMetade", "triangulo-segmentos"],
    baricentro: ["baricentroRazao", "triangulo-baricentro"],
    mediatriz: ["propriedadeMediatriz", "mediatriz"],
    retangulo: ["areaRetanguloParalelogramo", "quadrilatero-area"],
    quadrado: ["areaQuadrado", "quadrado-area"],
    "trapezio-calculo": ["areaTrapezio", "trapezio"],
    "losango-calculo": ["areaLosango", "losango"],
    "quadrilatero-angulos-calculo": ["somaQuadrilatero", "quadrilatero-angulos"],
    paralelogramo: ["areaRetanguloParalelogramo", "quadrilatero-area"],
    bloco: questao.pergunta.includes("litros")
      ? ["volumeParaLitros", "volume-capacidade"]
      : ["volumeBloco", "volume-capacidade"],
    cubo: ["volumeBloco", "volume-capacidade"],
    "circulo-calculo": ["areaCirculo", "circulo-area"],
    "area-composta-calculo": ["areaComRetirada", "area-composta"],
    reservatorio: ["porcentagemCapacidade", "volume-capacidade"],
  };
  if (questao.calculo && questao.diagrama) {
    let calculo = tiposCalculo[questao.diagrama.tipo];
    if (questao.diagrama.tipo === "triangulo-isosceles") {
      calculo = questao.pergunta.includes("perímetro")
        ? ["isoscelesPerimetro", "triangulo-perimetro"]
        : ["isoscelesAngulos", "triangulo-isosceles"];
    }
    if (questao.diagrama.tipo === "poligono-calculo") {
      if (questao.pergunta.includes("diagonais")) calculo = ["diagonaisPoligono", "poligono-diagonais"];
      else if (questao.pergunta.includes("externo")) calculo = ["angulosExternos", "poligono-angulos"];
      else if (questao.pergunta.includes("interno") && questao.pergunta.includes("cada")) calculo = ["anguloInternoRegular", "poligono-angulos"];
      else calculo = ["somaPoligono", "poligono-angulos"];
    }
    if (calculo) {
      const [chaveCalculo, visualCalculo] = calculo;
      const guiaCalculo = guiasGeometriaFocados[chaveCalculo] || guiasGeometria[questao.conteudo];
      return { ...guiaCalculo, visual: visualCalculo, quadro: quadrosVisuaisGeometria[visualCalculo] || [] };
    }
  }
  const numero = Number(String(questao.aprenderId || "").replace("geo-", ""));
  const chave = mapaGuiasGeometria[numero];
  const visuais = {
    ladosTriangulo: "triangulo-lados", angulosTriangulo: "triangulo-angulos", somaTriangulo: "triangulo-soma",
    areaTriangulo: "triangulo-area", congruencia: "triangulo-congruencia", existenciaTriangulo: "triangulo-existencia",
    classificacaoDupla: "triangulo-classificacao", isoscelesAngulos: "triangulo-isosceles", anguloExternoTriangulo: "triangulo-externo",
    isoscelesPerimetro: "triangulo-perimetro",
    segmentosNotaveis: "triangulo-segmentos", pontosNotaveis: "triangulo-segmentos", medianaMetade: "triangulo-segmentos",
    bissetrizMetade: "triangulo-segmentos", centrosCircunferencias: "triangulo-centros", coincidenciaEquilatero: "triangulo-segmentos",
    posicaoCentros: "triangulo-centros", baricentroRazao: "triangulo-baricentro", construirMediatriz: "mediatriz",
    propriedadeMediatriz: "mediatriz", quadrilaterosConceitos: "quadrilateros-tipos", somaQuadrilatero: "quadrilatero-angulos",
    areaRetanguloParalelogramo: "quadrilatero-area", areaQuadrado: "quadrado-area",
    areaLosango: "losango", areaTrapezio: "trapezio", propriedadesDiagonais: "losango", areaEPerimetroRetangulo: "quadrilatero-area",
    escalaArea: "escala-area", nomesPoligonos: "poligonos-nomes", poligonoRegular: "poligono-regular",
    diagonaisPoligono: "poligono-diagonais", somaPoligono: "poligono-angulos",
    angulosExternos: "poligono-angulos", anguloInternoRegular: "poligono-angulos", construcoesAngulos: "construcao-angulos",
    hexagonoInscrito: "hexagono-inscrito", convexidade: "poligono-convexidade", unidadesGeometricas: "unidades", conversaoCapacidade: "volume-capacidade",
    volumeBloco: "volume-capacidade", areaCirculo: "circulo-area", areaRetangulo: "quadrilatero-area",
    areaComRetirada: "area-composta", volumeParaLitros: "volume-capacidade", areaComposta: "area-composta",
    porcentagemCapacidade: "volume-capacidade", compararAreas: "comparar-areas",
  };
  const guia = guiasGeometriaFocados[chave] || guiasGeometria[questao.conteudo];
  const visual = visuais[chave] || "triangulo-angulos";
  return { ...guia, visual, quadro: quadrosVisuaisGeometria[visual] || [] };
}

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
  if (questao.materia === "Geometria — 8º ano") return obterGuiaGeometriaFocado(questao);
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
