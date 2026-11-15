const criarQuestao = (capitulo, conteudo, pagina, pergunta, alternativas, correta, explicacao) => ({
  materia: "Inglês",
  capitulo,
  conteudo,
  pagina,
  pergunta,
  alternativas,
  correta,
  explicacao,
});

const U7 = "Capítulo 7 — Bucket list";
const U8 = "Capítulo 8 — Creativity";

const perguntas = [
  // Capítulo 7 — página 1
  criarQuestao(U7, "Lugares e natureza", 1, "Qual palavra em inglês significa “cachoeira”?", ["Waterfall", "Mountain", "Forest", "River"], 0, "Waterfall significa cachoeira. Water é água e fall, nesse contexto, indica a queda da água."),
  criarQuestao(U7, "Lugares e natureza", 1, "Qual opção nomeia uma grande elevação natural do terreno?", ["Lake", "Beach", "Mountain", "Ocean"], 2, "Mountain significa montanha, uma grande elevação natural do terreno."),
  criarQuestao(U7, "Lugares e natureza", 1, "Qual palavra corresponde a “floresta”?", ["River", "Forest", "Volcano", "Beach"], 1, "Forest é a palavra inglesa para floresta, uma área extensa coberta por árvores."),
  criarQuestao(U7, "Lugares e natureza", 1, "Na frase “I’ve never seen a waterfall in real life”, o que a pessoa nunca viu pessoalmente?", ["Um vulcão", "Uma praia", "Uma cachoeira", "Um lago"], 2, "A expressão waterfall significa cachoeira, e in real life significa na vida real ou pessoalmente."),

  // Capítulo 7 — página 2
  criarQuestao(U7, "Experiências e planos", 2, "Qual expressão significa “viajar com mochila”, geralmente de maneira econômica?", ["Go backpacking", "Write a novel", "Appear on TV", "Dye my hair"], 0, "Go backpacking significa viajar levando uma mochila, normalmente de forma simples e econômica."),
  criarQuestao(U7, "Experiências e planos", 2, "Complete: “One day, I’m going to ___ around the world.”", ["decorate", "sail", "interview", "camp"], 1, "Sail around the world significa velejar ao redor do mundo. Depois de going to usamos o verbo na forma base."),
  criarQuestao(U7, "Experiências e planos", 2, "Qual atividade envolve nadar usando máscara e tubo para observar a vida marinha?", ["Race across a desert", "Go snorkeling", "Make a viral video", "Camp under the stars"], 1, "Go snorkeling é praticar mergulho de superfície usando máscara e snorkel para observar o ambiente subaquático."),
  criarQuestao(U7, "Experiências e planos", 2, "A expressão “dye my hair a different color” significa:", ["Cortar meu cabelo", "Pentear meu cabelo", "Pintar meu cabelo de outra cor", "Deixar meu cabelo crescer"], 2, "Dye é tingir ou pintar. A expressão completa indica mudar a cor do cabelo."),

  // Capítulo 7 — página 3
  criarQuestao(U7, "Leitura: Budget bucket list", 3, "Como Ashley mudou a cor do cabelo gastando pouco?", ["Foi a um salão caro", "Fez sozinha em casa", "Pediu a uma amiga cabeleireira", "Usou uma peruca"], 1, "No texto, Ashley diz “I did it myself at home”, ou seja, ela mesma pintou o cabelo em casa."),
  criarQuestao(U7, "Leitura: Budget bucket list", 3, "O que Ashley reutilizou para decorar o quarto?", ["Caixas e garrafas", "Roupas antigas", "Tinta velha e prateleiras da irmã", "Móveis de uma loja"], 2, "Ela usou old paint e her sister’s old shelves: tinta que já tinha e prateleiras antigas da irmã."),
  criarQuestao(U7, "Leitura: Budget bucket list", 3, "Onde Ashley e os amigos acamparam sem gastar dinheiro?", ["Em um parque nacional", "No quintal de uma amiga", "Em uma praia", "Em uma montanha"], 1, "O texto afirma que eles acamparam no backyard da amiga. Backyard significa quintal dos fundos."),
  criarQuestao(U7, "Leitura: Budget bucket list", 3, "Qual atividade Ashley fez com outras pessoas?", ["Escreveu metade de um romance", "Pintou o cabelo", "Fez um vídeo de dança com amigos", "Decorou o quarto sozinha"], 2, "Ashley diz que ela e alguns amigos fizeram um vídeo de dança e o publicaram no YouTube."),

  // Capítulo 7 — página 4
  criarQuestao(U7, "FOMO e JOMO", 4, "O que significa a sigla FOMO?", ["Fear of Missing Out", "Feeling of Meeting Others", "Freedom of Modern Options", "Fear of Making Offers"], 0, "FOMO significa Fear of Missing Out: medo de estar perdendo algo que outras pessoas estão vivendo."),
  criarQuestao(U7, "FOMO e JOMO", 4, "O que significa JOMO no texto?", ["A preocupação com as redes sociais", "A alegria de não participar de tudo", "O desejo de ir a todas as festas", "O medo de ficar sem celular"], 1, "JOMO é Joy of Missing Out: a alegria de não participar de tudo e aproveitar o próprio tempo."),
  criarQuestao(U7, "FOMO e JOMO", 4, "Que mudança ajudou Grace a sentir JOMO?", ["Ela passou mais tempo nas redes sociais", "Ela começou a organizar mais festas", "Ela passou a sair apenas ocasionalmente e dedicar tempo aos interesses", "Ela comprou um celular novo"], 2, "Grace diz que agora só sai occasionally e usa mais tempo para seus próprios interesses."),
  criarQuestao(U7, "FOMO e JOMO", 4, "Segundo a Dra. Taylor, o que pode ajudar a diminuir o FOMO?", ["Comparar-se mais com outras pessoas", "Lembrar que controlamos nossa própria vida", "Assistir televisão o dia inteiro", "Nunca conversar com amigos"], 1, "A psicóloga recomenda lembrar que você está no controle da própria vida e valorizar hobbies de que gosta."),

  // Capítulo 7 — página 5
  criarQuestao(U7, "Present perfect: perguntas", 5, "Qual pergunta está corretamente formada no present perfect?", ["Have you ever ridden a horse?", "Did you ever ridden a horse?", "Has you ever ride a horse?", "Have you ever rode a horse?"], 0, "A estrutura é Have + sujeito + ever + particípio. O particípio de ride é ridden."),
  criarQuestao(U7, "Present perfect: perguntas", 5, "Complete: “___ she ever appeared on TV?”", ["Have", "Did", "Has", "Does"], 2, "Com she usamos has no present perfect: Has she ever appeared on TV?"),
  criarQuestao(U7, "Present perfect: perguntas", 5, "Qual é uma resposta curta correta para “Have you ever sung on stage?”", ["Yes, I did.", "Yes, I have.", "Yes, I am.", "Yes, I sing."], 1, "Perguntas com Have you...? recebem respostas curtas com have: Yes, I have ou No, I haven’t."),
  criarQuestao(U7, "Present perfect: perguntas", 5, "Qual é o particípio passado de “meet”?", ["Meet", "Meeting", "Met", "Meeted"], 2, "Meet é irregular: meet no presente, met no passado simples e met no particípio."),

  // Capítulo 7 — página 6
  criarQuestao(U7, "Phrasal verbs de movimento", 6, "Qual phrasal verb usamos para “entrar” em um ônibus ou trem?", ["Get off", "Get on", "Go away", "Stay in"], 1, "Get on significa entrar ou embarcar em transportes como ônibus, trem e avião."),
  criarQuestao(U7, "Phrasal verbs de movimento", 6, "Complete: “She ___ the train at the wrong station.”", ["got off", "stayed in", "went out", "got back"], 0, "Got off é o passado de get off e significa desceu ou desembarcou do trem."),
  criarQuestao(U7, "Phrasal verbs de movimento", 6, "Se alguém decide não sair de casa, qual expressão é adequada?", ["Get back", "Go out", "Stay in", "Get on"], 2, "Stay in significa ficar em casa, em vez de sair."),
  criarQuestao(U7, "Phrasal verbs de movimento", 6, "Qual expressão significa “voltar” para um lugar?", ["Get back", "Get off", "Go away", "Go out"], 0, "Get back significa retornar ou voltar. Por exemplo: I got back home late."),

  // Capítulo 7 — página 7
  criarQuestao(U7, "Present perfect: afirmação e negação", 7, "Complete: “She ___ decorated her bedroom.”", ["have", "has", "is", "did"], 1, "Com she usamos has + particípio: She has decorated her bedroom."),
  criarQuestao(U7, "Present perfect: afirmação e negação", 7, "Qual frase negativa está correta?", ["I not have written a novel.", "I haven’t written a novel.", "I didn’t written a novel.", "I hasn’t wrote a novel."], 1, "A negativa com I é haven’t + particípio. O particípio de write é written."),
  criarQuestao(U7, "Present perfect: afirmação e negação", 7, "Qual é o particípio passado de “make”?", ["Maked", "Made", "Make", "Making"], 1, "Make é irregular; tanto o passado simples quanto o particípio são made."),
  criarQuestao(U7, "Present perfect: afirmação e negação", 7, "Complete: “My bedroom walls ___ had three different colors.”", ["has", "have", "did", "was"], 1, "Walls está no plural, portanto usamos have. Had é o particípio do verbo have."),

  // Capítulo 7 — página 8
  criarQuestao(U7, "Leitura: FOMO e JOMO", 8, "Qual é a ideia principal do artigo sobre FOMO e JOMO?", ["Devemos viajar de trem", "Podemos aprender a controlar melhor nosso tempo e bem-estar", "Todas as festas são importantes", "Celulares devem ser proibidos"], 1, "O artigo mostra como reconhecer o FOMO e desenvolver JOMO, valorizando escolhas e interesses pessoais."),
  criarQuestao(U7, "Leitura: FOMO e JOMO", 8, "Segundo o artigo, aproximadamente quantos adolescentes dizem sentir FOMO?", ["Cerca de 10%", "Cerca de 25%", "Cerca de 50%", "Cerca de 75%"], 1, "O texto informa que about 25% of teenagers say that they have this feeling."),
  criarQuestao(U7, "Leitura: FOMO e JOMO", 8, "O que Grace percebeu sobre sua vida?", ["Precisava controlar melhor a própria vida", "Precisava ir a mais festas", "Não gostava de nenhum hobby", "Deveria parar de escrever"], 0, "Grace percebeu que precisava organizar a própria vida, não viver em função dos planos de outras pessoas."),
  criarQuestao(U7, "Leitura: FOMO e JOMO", 8, "Qual conselho combina com o JOMO?", ["Passe todo o tempo verificando o celular", "Dedique tempo aos hobbies de que gosta", "Compare sua vida com a dos outros", "Aceite todos os convites"], 1, "JOMO envolve aproveitar conscientemente o próprio tempo, inclusive com hobbies e atividades pessoais."),

  // Capítulo 7 — página 9
  criarQuestao(U7, "Experiências: present perfect e simple past", 9, "Qual pergunta pede uma experiência geral, sem indicar quando aconteceu?", ["When did you sail?", "Have you ever participated in a big sports event?", "How long did the journey take?", "Where did you go?"], 1, "Usamos o present perfect para perguntar sobre experiências gerais quando o momento não é especificado."),
  criarQuestao(U7, "Experiências: present perfect e simple past", 9, "Depois de saber que a experiência aconteceu, qual tempo usamos para perguntar detalhes como “quando”?", ["Present continuous", "Simple present", "Simple past", "Future with will"], 2, "O simple past é usado para detalhes de uma experiência concluída: quando, onde, como e quanto tempo durou."),
  criarQuestao(U7, "Experiências: present perfect e simple past", 9, "O que Mr. Fry fez cerca de quinze anos antes da entrevista?", ["Atravessou o Atlântico a vela", "Correu em um deserto", "Viajou de trem pelo mundo", "Escalou uma montanha"], 0, "No diálogo, Mr. Fry conta que sailed across the Atlantic Ocean about 15 years ago."),
  criarQuestao(U7, "Experiências: present perfect e simple past", 9, "Quanto tempo levou a viagem de Mr. Fry?", ["Quatro dias", "Duas semanas", "Quatro semanas", "Quatro meses"], 2, "Ele responde “It took about four weeks”, isto é, a viagem levou aproximadamente quatro semanas."),

  // Capítulo 7 — página 10
  criarQuestao(U7, "Viagens e aventura", 10, "A expressão “the trip of a lifetime” descreve:", ["Uma viagem diária para a escola", "Uma viagem muito especial e inesquecível", "Uma viagem de trabalho curta", "Uma viagem cancelada"], 1, "Trip of a lifetime é uma viagem extraordinária, possivelmente a mais marcante da vida."),
  criarQuestao(U7, "Viagens e aventura", 10, "Qual atividade significa viajar de bicicleta por outro país?", ["Cycle across a foreign country", "Sail around the world", "Go snorkeling", "Visit a monument"], 0, "Cycle across a foreign country significa atravessar ou percorrer um país estrangeiro de bicicleta."),
  criarQuestao(U7, "Viagens e aventura", 10, "Qual palavra nomeia uma área muito fria formada por grande massa de gelo?", ["Desert", "Beach", "Glacier", "Forest"], 2, "Glacier significa geleira, uma grande massa de gelo que se move lentamente."),
  criarQuestao(U7, "Viagens e aventura", 10, "Em fala espontânea, palavras como “um”, “well” e “kind of” são chamadas de:", ["Relative pronouns", "Filler words", "Phrasal verbs", "Past participles"], 1, "Filler words são palavras de preenchimento usadas enquanto a pessoa pensa no que dizer."),

  // Capítulo 7 — página 22
  criarQuestao(U7, "Revisão do capítulo 7", 22, "Qual experiência significa “acampar sob as estrelas”?", ["Decorate my bedroom", "Camp under the stars", "Race across a desert", "Appear on TV"], 1, "Camp under the stars significa acampar ao ar livre, sob as estrelas."),
  criarQuestao(U7, "Revisão do capítulo 7", 22, "Complete: “We ___ away last summer.”", ["go", "went", "gone", "going"], 1, "Went é o passado simples de go. A expressão went away indica que as pessoas viajaram ou foram embora."),
  criarQuestao(U7, "Revisão do capítulo 7", 22, "Complete: “We got ___ the plane at 9 a.m.”", ["off", "back", "in", "away"], 0, "Get off é usado para sair ou desembarcar de avião, ônibus ou trem."),
  criarQuestao(U7, "Revisão do capítulo 7", 22, "Complete: “Tonight, I’m staying ___.”", ["on", "out", "in", "away"], 2, "Stay in significa ficar em casa. Com am, usamos staying para formar o present continuous."),

  // Capítulo 8 — página 11
  criarQuestao(U8, "Cosplay e atividades criativas", 11, "O que é cosplay no contexto da página?", ["Uma competição de culinária", "A criação e o uso de fantasias de personagens", "Uma técnica de pintura de rua", "Um tipo de viagem"], 1, "Cosplay envolve criar e vestir uma fantasia para representar um personagem."),
  criarQuestao(U8, "Cosplay e atividades criativas", 11, "Por que Sophie gosta de cosplay?", ["Porque sempre vence concursos", "Porque gosta de aprender novas habilidades", "Porque não precisa fazer fantasias", "Porque viaja gratuitamente"], 1, "A atividade destaca que Sophie enjoys cosplay because she likes learning new skills."),
  criarQuestao(U8, "Cosplay e atividades criativas", 11, "Quanto tempo Sophie levou para fazer a fantasia mostrada?", ["Dois dias", "Uma semana", "Duas semanas", "Dois meses"], 2, "A resposta apresentada na página é “It took two weeks”: levou duas semanas."),
  criarQuestao(U8, "Cosplay e atividades criativas", 11, "Qual substantivo inglês significa “fantasia” usada por um personagem?", ["Contest", "Costume", "Skill", "Material"], 1, "Costume significa fantasia ou traje, especialmente o usado para representar um personagem."),

  // Capítulo 8 — página 12
  criarQuestao(U8, "Adjetivos para descrever arte", 12, "Qual adjetivo significa “completamente novo”?", ["Ancient", "Brand new", "Recycled", "Old-fashioned"], 1, "Brand new significa completamente novo, recém-fabricado ou nunca usado."),
  criarQuestao(U8, "Adjetivos para descrever arte", 12, "Qual adjetivo descreve algo com milhares de anos?", ["Tiny", "Modern", "Ancient", "Enjoyable"], 2, "Ancient significa antigo ou ancestral e é usado para coisas de um passado muito distante."),
  criarQuestao(U8, "Adjetivos para descrever arte", 12, "Uma obra feita com materiais usados novamente pode ser chamada de:", ["Recycled", "Delicate", "Enormous", "Successful"], 0, "Recycled descreve algo produzido pela reutilização ou transformação de materiais."),
  criarQuestao(U8, "Adjetivos para descrever arte", 12, "Qual palavra significa “muito pequeno”?", ["Original", "Strange", "Tiny", "Smart"], 2, "Tiny significa minúsculo ou muito pequeno."),

  // Capítulo 8 — página 13
  criarQuestao(U8, "Leitura: But is it art?", 13, "Que material Ben Wilson usa como base para suas pequenas pinturas?", ["Folhas secas", "Chiclete descartado", "Pedaços de madeira", "Latas recicladas"], 1, "Ben Wilson transforma chicletes jogados na calçada em pequenas pinturas coloridas."),
  criarQuestao(U8, "Leitura: But is it art?", 13, "Como Jolanda Stokkermans combina arte e culinária?", ["Ela pinta quadros de restaurantes", "Ela cria imagens com alimentos e molhos", "Ela esculpe panelas", "Ela fotografa cozinheiros"], 1, "Jolanda usa vegetables and different sauces para montar imagens artísticas com comida."),
  criarQuestao(U8, "Leitura: But is it art?", 13, "Quem é Ai-Da?", ["Uma pintora do século XIX", "Uma cozinheira belga", "Uma artista robô", "Uma fotógrafa de rua"], 2, "Ai-Da é descrita como an artist who is a robot e produz desenhos e pinturas."),
  criarQuestao(U8, "Leitura: But is it art?", 13, "Onde Ai-Da realizou sua primeira exposição pública?", ["Oxford, Inglaterra", "Bruxelas, Bélgica", "Nova York, EUA", "Paris, França"], 0, "O texto informa que Ai-Da held her first exhibition in Oxford, England."),

  // Capítulo 8 — página 14
  criarQuestao(U8, "Pronomes relativos", 14, "Qual pronome relativo usamos principalmente para pessoas?", ["Which", "Who", "Whose", "Where"], 1, "Who retoma pessoas: The artist who painted this picture."),
  criarQuestao(U8, "Pronomes relativos", 14, "Qual pronome relativo indica posse?", ["Who", "That", "Which", "Whose"], 3, "Whose indica posse: an artist whose sculptures are famous."),
  criarQuestao(U8, "Pronomes relativos", 14, "Complete: “A drawing is a picture ___ you make with a pencil.”", ["who", "whose", "which", "where"], 2, "Picture é uma coisa, por isso which é adequado. That também poderia ser usado nesse tipo de frase."),
  criarQuestao(U8, "Pronomes relativos", 14, "Complete: “Michelangelo was an artist ___ sculptures and paintings are famous.”", ["whose", "which", "who", "where"], 0, "Whose liga o artista às obras que pertencem a ele: suas esculturas e pinturas."),

  // Capítulo 8 — página 15
  criarQuestao(U8, "Verbos de criatividade", 15, "Qual verbo completa “___ a new computer game”?", ["Compose", "Program", "Sew", "Paint"], 1, "Program a computer game significa programar um jogo de computador."),
  criarQuestao(U8, "Verbos de criatividade", 15, "Qual verbo usamos para “compor música”?", ["Build", "Compose", "Direct", "Discover"], 1, "Compose music significa compor ou criar uma peça musical."),
  criarQuestao(U8, "Verbos de criatividade", 15, "Quem projetou a Sydney Opera House?", ["Oscar Niemeyer", "Jørn Utzon", "Leonardo da Vinci", "Tim Berners-Lee"], 1, "A página apresenta Jørn Utzon como o arquiteto que projetou a Sydney Opera House."),
  criarQuestao(U8, "Verbos de criatividade", 15, "Quem inventou a World Wide Web?", ["Steve Jobs", "Albert Einstein", "Tim Berners-Lee", "Igor Sikorsky"], 2, "Tim Berners-Lee é o inventor da World Wide Web, sistema que tornou possível navegar por páginas interligadas."),

  // Capítulo 8 — página 16
  criarQuestao(U8, "Leitura: Teen creators", 16, "Que problema a invenção de Hannah Herbst buscava resolver?", ["A falta de despertadores", "A falta de energia elétrica em uma comunidade", "O excesso de lixo eletrônico", "A ausência de transporte"], 1, "Hannah decidiu ajudar uma comunidade etíope que não tinha uma fonte confiável de eletricidade."),
  criarQuestao(U8, "Leitura: Teen creators", 16, "Qual fonte de energia a máquina Beacon usa?", ["Vento do deserto", "Energia das ondas do oceano", "Carvão", "Luz de velas"], 1, "Beacon usa energy from the ocean e pode fornecer energia para iluminação e outras necessidades."),
  criarQuestao(U8, "Leitura: Teen creators", 16, "Por que Guillaume Rolland criou o SensorWake?", ["Queria acordar de maneira mais agradável", "Queria medir a temperatura", "Precisava iluminar o quarto", "Queria ouvir música alta"], 0, "Ele odiava o despertador barulhento e desejava acordar de forma mais agradável."),
  criarQuestao(U8, "Leitura: Teen creators", 16, "Como o SensorWake desperta uma pessoa?", ["Com água fria", "Com luz muito forte", "Com diferentes aromas", "Com vibração no travesseiro"], 2, "O relógio libera cheiros como limão, maçã, chocolate ou grama para acordar o usuário."),

  // Capítulo 8 — página 17
  criarQuestao(U8, "Compreensão e paráfrase", 17, "Na frase “Hannah discovered that science was very enjoyable”, qual palavra pode substituir “enjoyable”?", ["Expensive", "Fun", "Difficult", "Ancient"], 1, "Enjoyable e fun transmitem a ideia de algo agradável ou divertido; isso é uma paráfrase."),
  criarQuestao(U8, "Compreensão e paráfrase", 17, "Por que o projeto Beacon não custa muito para ser produzido?", ["Usa materiais baratos e um design simples", "É vendido apenas pela internet", "Não produz energia", "É feito por uma grande fábrica"], 0, "O texto informa que a máquina usa energia do oceano e costs only $12 to make, mostrando baixo custo de produção."),
  criarQuestao(U8, "Compreensão e paráfrase", 17, "Antes do SensorWake, onde Guillaume desenvolveu seu relógio?", ["No laboratório da escola", "Na garagem dos pais", "Em uma universidade", "Em uma loja"], 1, "O texto diz que Guillaume started working in his parents’ garage."),
  criarQuestao(U8, "Compreensão e paráfrase", 17, "Qual resultado Guillaume alcançou com o SensorWake?", ["Tornou-se um empresário bem-sucedido", "Abandonou o projeto", "Passou a fabricar telefones", "Criou uma banda"], 0, "O SensorWake tornou Guillaume a successful businessman, um empresário bem-sucedido."),

  // Capítulo 8 — página 18
  criarQuestao(U8, "Subject e object questions", 18, "Em qual pergunta “who” é o sujeito da ação?", ["Who designed the cathedral?", "Who did Oscar call?", "Who did you meet?", "Who does she admire?"], 0, "Em Who designed the cathedral?, who pratica a ação de projetar; por isso não usamos did."),
  criarQuestao(U8, "Subject e object questions", 18, "Qual pergunta está correta para descobrir o objeto de “Rembrandt drew the portrait”?", ["Who drew the portrait?", "What did Rembrandt draw?", "What Rembrandt drew?", "Who did draw the portrait?"], 1, "Queremos saber o que Rembrandt desenhou. Como perguntamos pelo objeto, usamos did + sujeito + verbo base."),
  criarQuestao(U8, "Subject e object questions", 18, "Complete: “Who ___ the first helicopter that could fly?”", ["did design", "designed", "does designed", "was design"], 1, "Who é o sujeito da pergunta, então usamos diretamente o verbo no passado: Who designed...?"),
  criarQuestao(U8, "Subject e object questions", 18, "Qual pergunta corresponde à resposta “Marie Curie discovered radioactivity”?", ["What did Marie Curie discover?", "Who did discover radioactivity?", "What Marie Curie discovered?", "Who Marie Curie discover?"], 0, "Radioactivity é o objeto. Perguntamos What did Marie Curie discover?, com did e o verbo na forma base."),

  // Capítulo 8 — página 19
  criarQuestao(U8, "Gostos, opiniões e comparações", 19, "Qual expressão indica que alguém gosta muito de algo?", ["I’m really into it.", "It’s not for me.", "I’m not a fan of it.", "It’s too boring."], 0, "I’m really into it é uma forma informal de dizer que a pessoa gosta muito ou tem grande interesse."),
  criarQuestao(U8, "Gostos, opiniões e comparações", 19, "Qual expressão comunica uma opinião negativa de maneira educada?", ["I love it!", "It’s just not for me.", "I’m really into it.", "It’s the best."], 1, "It’s just not for me significa que aquilo não combina com o gosto da pessoa, sem atacar diretamente a obra."),
  criarQuestao(U8, "Gostos, opiniões e comparações", 19, "Complete: “It sounds a bit ___ Lewis Capaldi.”", ["like", "as", "than", "of"], 0, "Sounds like é usado para dizer que algo tem um som parecido com outra pessoa ou coisa."),
  criarQuestao(U8, "Gostos, opiniões e comparações", 19, "Na conversa, por que Eduardo não gosta da música?", ["Ela é curta demais", "Ela não é original o suficiente e é entediante", "Ela é muito antiga", "Ela não tem voz"], 1, "Eduardo diz que a música isn’t original enough e is too boring."),

  // Capítulo 8 — página 20
  criarQuestao(U8, "Revisão do capítulo 8", 20, "Quem construiu a Torre Eiffel?", ["Os franceses", "Os italianos", "Os britânicos", "Os americanos"], 0, "A pergunta da revisão usa “the French” como sujeito: os franceses construíram a Torre Eiffel."),
  criarQuestao(U8, "Revisão do capítulo 8", 20, "Qual verbo completa “Bell ___ the telephone”?", ["composed", "invented", "painted", "sewed"], 1, "Invented significa inventou. Alexander Graham Bell é associado à invenção do telefone."),
  criarQuestao(U8, "Revisão do capítulo 8", 20, "O que Igor Sikorsky projetou?", ["A World Wide Web", "O primeiro helicóptero capaz de voar", "A Sydney Opera House", "O jogo Pokémon"], 1, "A revisão associa Sikorsky ao first helicopter that could fly."),
  criarQuestao(U8, "Revisão do capítulo 8", 20, "O que Satoshi Tajiri criou?", ["Pokémon", "O telefone", "A radioatividade", "A Torre Eiffel"], 0, "Satoshi Tajiri é o criador de Pokémon."),

  // Capítulo 8 — página 21
  criarQuestao(U8, "Graffiti e street art", 21, "O que significa “street art”?", ["Arte produzida ou exibida em espaços públicos", "Arte encontrada apenas em museus", "Uma aula de desenho técnico", "Uma apresentação musical"], 0, "Street art é arte de rua, criada em muros, edifícios e outros espaços públicos."),
  criarQuestao(U8, "Graffiti e street art", 21, "Qual termo descreve palavras e imagens pintadas em uma parede ou local público por diferentes pessoas?", ["Portrait", "Graffiti", "Sculpture", "Costume"], 1, "Graffiti é a inscrição ou imagem feita em uma parede ou superfície pública."),
  criarQuestao(U8, "Graffiti e street art", 21, "No passado, muitas pessoas consideravam o graffiti uma forma de:", ["Vandalism", "Advertising", "Teamwork", "Personality"], 0, "A página afirma que, no passado, a maioria das pessoas pensava que graffiti was vandalism."),
  criarQuestao(U8, "Graffiti e street art", 21, "Segundo a página, uma oficina de graffiti pode ajudar os alunos a desenvolver:", ["Somente velocidade", "Trabalho em equipe e expressão artística", "Técnicas de viagem", "Conhecimentos de culinária"], 1, "O texto destaca que atividades artísticas são divertidas e que a oficina reúne as pessoas como uma equipe."),
];
