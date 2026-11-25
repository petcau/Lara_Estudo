const criarQuestaoComTexto = (capitulo, conteudo, pagina, textoBase, pergunta, alternativas, correta, explicacao) => ({
  materia: "Inglês",
  capitulo,
  conteudo,
  pagina,
  textoBase,
  pergunta,
  alternativas,
  correta,
  explicacao,
});

const qt = criarQuestaoComTexto;
const TXT_C1 = "Capítulo 1 — On vacation";
const TXT_C4 = "Capítulo 4 — Big issues";
const TXT_C7 = "Capítulo 7 — Bucket list";

const FERIAS_SENTIMENTOS = `The Jones family is on vacation. Dad is nervous about driving, and Mom is disappointed with their hotel. Daisy is bored of sightseeing, but she is interested in a magazine article. Aiden is crazy about swimming. After Daisy tries a difficult dive, Dad is proud of her. Later, Daisy is surprised by a huge ice cream. Mom becomes angry with Dad because he isn't listening to her. Even with these problems, the children are happy about the vacation.`;

const GUIA_YOSEMITE = `Yosemite National Park is one of the biggest parks in the U.S. It has some of the largest trees in the world. The mountain lion is one of the most beautiful animals in the park. Summer is the busiest season there. May and September are the best times to visit.`;

const TABELA_HOTEIS = `Hotel comparison:
Mountain Lion Lodge — 11.5 m² room; $85 a night; food: 2 stars.
Lake Hotel — 51 m² room; $130 a night; food: 1 star.
Yosemite View Hotel — 37 m² room; $380 a night; food: 4 stars.`;

const NOTAS_PROBLEMAS = `Eight news notes:
A. The temperature stayed extremely high for several weeks.
B. Many people became sick.
C. There was almost no rain for years.
D. Smoke and waste contaminated the air and water.
E. Too many people lived in an area with limited resources.
F. A large fire spread through the forest.
G. Water covered streets and entered buildings.
H. The ground moved and damaged buildings.`;

const FATOS_GLOBAIS = `In Marble Bar, Australia, a heat wave in 1924 stayed above 100°F (37.8°C) for five months. The Three Hundred and Thirty-Five Years' War was between the British Scilly Isles and the Netherlands and lasted from 1651 until 1986. One of Australia's longest droughts lasted from 1996 until 2010, and the government paid $4.5 billion to farmers who had no water. A wildfire can travel up to 20 km/h. Because of climate change, Arctic ice is disappearing.`;

const LIMPEZA_OCEANO = `Boyan Slat's The Ocean Cleanup project focuses on the Great Pacific Garbage Patch, an enormous area of plastic in the Pacific Ocean. Research says that plastic entering the Pacific is probably going to reach the patch. Photos show that the patch isn't going to disappear. A report says that it is going to grow bigger. Boyan Slat is working to protect the planet.`;

const CENAS_PREVISOES = `Present evidence:
A. A volcano is producing a lot of smoke.
B. A graph shows Earth's temperature rising.
C. People with bags are collecting trash on a beach.
D. A sign says there are only three northern white rhinos in the world.
E. Cars are stopped in a long traffic line.
F. Two people are collecting old clothes.
G. Heavy rain is filling the streets with water.
H. A student says, "I believe humans will live for hundreds of years."`;

const SONHOS_BUCKET_LIST = `Leo and Mia are talking about their bucket lists. Leo is training to become an actor, so he is going to appear on TV. He loves music and wants to perform with a live band. He also wants an inexpensive trip, so he is going to go backpacking and camp under the stars. Mia loves the ocean. She wants to go snorkeling and sail around the world. She is also going to interview her favorite YouTuber. One day, she wants to write her own novel.`;

const POST_QUARTO = `Chloe: Ashley has decorated her bedroom. It looks great!
Ben: She said she hasn't decorated anything before.
Chloe: I've never decorated anything.
Ben: I've done it a few times. My bedroom walls have had three different colors.

Brian's bucket list:
I've written half a novel. I've eaten food from around the world. I've made my own movie. I've read Frankenstein. I haven't gone to Africa.`;

const MARIO_VIAJANTE = `Antonio: Have you ever heard of Mario Rigby?
Juliana: No, I haven't. Who is he?
Antonio: He's a travel vlogger. He's walked across the whole continent of Africa.
Juliana: Has he ever visited any other continents?
Antonio: Yes, he has. He's cycled across Canada, too.

Grammar note: been means that someone went to a place and came back. Gone means that someone went and is still there.`;

perguntas.push(
  // Capítulo 1 — texto sobre sentimentos (8)
  qt(TXT_C1, "Leitura contextual: feelings", 16, FERIAS_SENTIMENTOS, "Como Dad se sente em relação a dirigir?", ["He is proud of driving.", "He is nervous about driving.", "He is bored of driving.", "He is surprised by driving."], 1, "O texto afirma que Dad is nervous about driving."),
  qt(TXT_C1, "Leitura contextual: feelings", 16, FERIAS_SENTIMENTOS, "Por que Mom está disappointed?", ["Because of the hotel", "Because of the magazine", "Because of the ice cream", "Because of the swimming pool"], 0, "Mom is disappointed with their hotel: ela está decepcionada com o hotel."),
  qt(TXT_C1, "Leitura contextual: feelings", 16, FERIAS_SENTIMENTOS, "O que deixa Daisy entediada?", ["Swimming", "Driving", "Sightseeing", "Reading"], 2, "Daisy is bored of sightseeing, isto é, está entediada com os passeios turísticos."),
  qt(TXT_C1, "Leitura contextual: feelings", 16, FERIAS_SENTIMENTOS, "Em que Daisy demonstra interesse?", ["A magazine article", "A live band", "A hotel room", "A map"], 0, "O texto usa interested in a magazine article."),
  qt(TXT_C1, "Leitura contextual: feelings", 16, FERIAS_SENTIMENTOS, "Qual atividade Aiden adora?", ["Driving", "Swimming", "Sightseeing", "Reading"], 1, "Aiden is crazy about swimming significa que ele gosta muito de nadar."),
  qt(TXT_C1, "Leitura contextual: feelings", 16, FERIAS_SENTIMENTOS, "Depois do mergulho de Daisy, qual sentimento Dad demonstra?", ["He is angry with her.", "He is disappointed with her.", "He is proud of her.", "He is scared of her."], 2, "Dad is proud of Daisy depois que ela realiza um mergulho difícil."),
  qt(TXT_C1, "Leitura contextual: feelings", 16, FERIAS_SENTIMENTOS, "O que surpreende Daisy?", ["A huge ice cream", "A small room", "A long trip", "A difficult map"], 0, "Daisy is surprised by a huge ice cream."),
  qt(TXT_C1, "Leitura contextual: feelings", 16, FERIAS_SENTIMENTOS, "Qual frase resume o sentimento final das crianças?", ["They are angry with the vacation.", "They are happy about the vacation.", "They are scared of the vacation.", "They are bored of the vacation."], 1, "Apesar dos problemas, o texto diz que as crianças estão felizes com as férias."),

  // Capítulo 1 — texto sobre Yosemite (8)
  qt(TXT_C1, "Texto e gramática: superlatives", 17, GUIA_YOSEMITE, "A expressão one of the biggest indica que Yosemite está entre:", ["os menores parques", "os parques mais caros", "os maiores parques", "os parques menos visitados"], 2, "Biggest é o superlativo de big e significa maior ou maiores."),
  qt(TXT_C1, "Texto e gramática: superlatives", 17, GUIA_YOSEMITE, "Qual adjetivo origina largest no texto?", ["long", "large", "little", "late"], 1, "Large recebe -st e forma the largest."),
  qt(TXT_C1, "Texto e gramática: superlatives", 17, GUIA_YOSEMITE, "Por que o texto usa the most beautiful em vez de beautifulest?", ["Porque beautiful é um adjetivo longo", "Porque beautiful é irregular", "Porque o sujeito está no plural", "Porque a frase está no passado"], 0, "Com adjetivos longos, o superlativo é formado com the most + adjetivo."),
  qt(TXT_C1, "Texto e gramática: superlatives", 17, GUIA_YOSEMITE, "Qual palavra do texto segue a regra de trocar y por i antes de -est?", ["largest", "biggest", "busiest", "best"], 2, "Busy vira busiest: retiramos o y, acrescentamos i e depois -est."),
  qt(TXT_C1, "Texto e gramática: superlatives", 17, GUIA_YOSEMITE, "Best é o superlativo irregular de qual adjetivo?", ["bad", "busy", "beautiful", "good"], 3, "Good tem formas irregulares: good, better, the best."),
  qt(TXT_C1, "Texto e gramática: superlatives", 17, GUIA_YOSEMITE, "Que árvores o parque possui, segundo o guia?", ["Some of the smallest trees", "Some of the largest trees", "The least beautiful trees", "The busiest trees"], 1, "O guia diz that Yosemite has some of the largest trees in the world."),
  qt(TXT_C1, "Texto e gramática: superlatives", 17, GUIA_YOSEMITE, "Qual frase sobre o verão corresponde ao texto?", ["Summer is the worst season.", "Summer is the quietest season.", "Summer is the busiest season.", "Summer is the coldest season."], 2, "O verão é descrito como the busiest season."),
  qt(TXT_C1, "Texto e gramática: superlatives", 17, GUIA_YOSEMITE, "Se alguém quiser seguir a recomendação do guia, quando deve visitar?", ["In May or September", "Only in July", "In January or February", "Only in December"], 0, "O texto aponta maio e setembro como as melhores épocas."),

  // Capítulo 1 — tabela de hotéis (10)
  qt(TXT_C1, "Interpretação de tabela: hotéis", 17, TABELA_HOTEIS, "Qual hotel tem o menor quarto?", ["Lake Hotel", "Yosemite View Hotel", "Mountain Lion Lodge", "Todos têm quartos iguais"], 2, "Mountain Lion Lodge tem 11,5 m², o menor tamanho da tabela."),
  qt(TXT_C1, "Interpretação de tabela: hotéis", 17, TABELA_HOTEIS, "Complete: “Lake Hotel has ___ rooms.”", ["the smallest", "the biggest", "the most expensive", "the worst"], 1, "Os quartos do Lake Hotel têm 51 m² e são os maiores."),
  qt(TXT_C1, "Interpretação de tabela: hotéis", 17, TABELA_HOTEIS, "Qual é a diária mais barata?", ["$85", "$130", "$380", "$51"], 0, "A menor diária é $85, do Mountain Lion Lodge."),
  qt(TXT_C1, "Interpretação de tabela: hotéis", 17, TABELA_HOTEIS, "Qual frase usa corretamente o superlativo de expensive?", ["Yosemite View Hotel is the expensivest.", "Yosemite View Hotel is the more expensive.", "Yosemite View Hotel is the most expensive.", "Yosemite View Hotel is most expensiver."], 2, "Expensive é um adjetivo longo; usamos the most expensive."),
  qt(TXT_C1, "Interpretação de tabela: hotéis", 17, TABELA_HOTEIS, "Qual hotel tem a pior avaliação de comida?", ["Lake Hotel", "Mountain Lion Lodge", "Yosemite View Hotel", "Os três"], 0, "Lake Hotel recebeu apenas uma estrela, a menor avaliação."),
  qt(TXT_C1, "Interpretação de tabela: hotéis", 17, TABELA_HOTEIS, "Complete: “Yosemite View Hotel has ___ food rating.”", ["the bad", "the better", "the best", "the goodest"], 2, "Quatro estrelas representam a melhor avaliação; o superlativo de good é the best."),
  qt(TXT_C1, "Interpretação de tabela: hotéis", 17, TABELA_HOTEIS, "Qual hotel combina quartos maiores que os do Mountain Lion Lodge com preço menor que $200?", ["Lake Hotel", "Yosemite View Hotel", "Nenhum", "Somente Mountain Lion Lodge"], 0, "Lake Hotel tem quartos de 51 m² e custa $130, atendendo aos dois critérios."),
  qt(TXT_C1, "Interpretação de tabela: hotéis", 17, TABELA_HOTEIS, "Quantas estrelas a comida do Mountain Lion Lodge recebeu?", ["One", "Two", "Three", "Four"], 1, "A tabela mostra duas estrelas para a comida do Mountain Lion Lodge."),
  qt(TXT_C1, "Interpretação de tabela: hotéis", 17, TABELA_HOTEIS, "Qual comparação está correta?", ["Lake Hotel is more expensive than Yosemite View Hotel.", "Mountain Lion Lodge is more expensive than Lake Hotel.", "Yosemite View Hotel is more expensive than Lake Hotel.", "All hotels have the same price."], 2, "$380 é maior que $130; por isso Yosemite View Hotel é mais caro que Lake Hotel."),
  qt(TXT_C1, "Interpretação de tabela: hotéis", 17, TABELA_HOTEIS, "Qual frase está de acordo com todos os dados?", ["The cheapest hotel has the smallest rooms.", "The most expensive hotel has the biggest rooms.", "The hotel with the best food is the cheapest.", "The biggest rooms have the best food rating."], 0, "Mountain Lion Lodge é o mais barato e também tem os menores quartos."),

  // Capítulo 4 — notas de problemas (8)
  qt(TXT_C4, "Textos curtos: big issues", 45, NOTAS_PROBLEMAS, "Qual problema corresponde à nota A?", ["A heat wave", "A flood", "A drought", "An earthquake"], 0, "Temperaturas extremamente altas durante semanas caracterizam uma heat wave."),
  qt(TXT_C4, "Textos curtos: big issues", 45, NOTAS_PROBLEMAS, "A nota B descreve qual problema?", ["Pollution", "Disease", "War", "Overpopulation"], 1, "Many people became sick descreve a ocorrência de uma doença, disease."),
  qt(TXT_C4, "Textos curtos: big issues", 45, NOTAS_PROBLEMAS, "Quase nenhuma chuva por anos, como na nota C, indica:", ["a flood", "a wildfire", "a drought", "a heat wave"], 2, "Drought significa seca, um período prolongado sem chuva suficiente."),
  qt(TXT_C4, "Textos curtos: big issues", 45, NOTAS_PROBLEMAS, "Qual palavra resume a nota D?", ["Pollution", "Earthquake", "War", "Disease"], 0, "A contaminação do ar e da água é pollution."),
  qt(TXT_C4, "Textos curtos: big issues", 45, NOTAS_PROBLEMAS, "A situação E é um exemplo de:", ["climate change", "overpopulation", "wildfire", "flood"], 1, "Muitas pessoas para recursos limitados descrevem overpopulation."),
  qt(TXT_C4, "Textos curtos: big issues", 45, NOTAS_PROBLEMAS, "Qual termo corresponde ao grande incêndio da nota F?", ["Wildfire", "Heat wave", "Drought", "Pollution"], 0, "Um fogo que se espalha pela floresta é um wildfire."),
  qt(TXT_C4, "Textos curtos: big issues", 45, NOTAS_PROBLEMAS, "A água cobrindo ruas e entrando em prédios descreve:", ["a disease", "a war", "a flood", "an earthquake"], 2, "Flood significa enchente ou inundação."),
  qt(TXT_C4, "Textos curtos: big issues", 45, NOTAS_PROBLEMAS, "Qual problema aparece na nota H?", ["An earthquake", "A drought", "A heat wave", "Overpopulation"], 0, "O movimento do solo que danifica construções é um earthquake."),

  // Capítulo 4 — fatos globais (8)
  qt(TXT_C4, "Leitura ampliada: fatos globais", 45, FATOS_GLOBAIS, "Em que ano ocorreu a onda de calor de Marble Bar?", ["1651", "1924", "1986", "2010"], 1, "O texto situa a onda de calor no ano de 1924."),
  qt(TXT_C4, "Leitura ampliada: fatos globais", 45, FATOS_GLOBAIS, "A temperatura ficou acima de qual marca durante a onda de calor?", ["20°F", "37°F", "100°F", "1924°F"], 2, "O texto informa uma temperatura superior a 100°F, equivalente a 37,8°C."),
  qt(TXT_C4, "Leitura ampliada: fatos globais", 45, FATOS_GLOBAIS, "Por quantos meses o calor extremo continuou?", ["Three months", "Five months", "Ten months", "Twelve months"], 1, "A onda de calor durou cinco meses."),
  qt(TXT_C4, "Leitura ampliada: fatos globais", 45, FATOS_GLOBAIS, "Quais lados participaram da guerra citada?", ["Australia and Canada", "The British Scilly Isles and the Netherlands", "Japan and the U.S.", "Marble Bar and the Arctic"], 1, "O texto cita as ilhas britânicas Scilly e os Países Baixos."),
  qt(TXT_C4, "Leitura ampliada: fatos globais", 45, FATOS_GLOBAIS, "Quando terminou a Three Hundred and Thirty-Five Years' War?", ["In 1651", "In 1924", "In 1986", "In 2010"], 2, "O conflito durou de 1651 até 1986."),
  qt(TXT_C4, "Leitura ampliada: fatos globais", 45, FATOS_GLOBAIS, "Por que o governo australiano pagou dinheiro aos agricultores?", ["They had no water.", "They wanted new hotels.", "They had too much ice.", "They were building a park."], 0, "A seca deixou os agricultores sem água, segundo o texto."),
  qt(TXT_C4, "Leitura ampliada: fatos globais", 45, FATOS_GLOBAIS, "Qual afirmação sobre wildfire aparece no texto?", ["It can travel up to 20 km/h.", "It always lasts five months.", "It happens only in the Arctic.", "It cannot move quickly."], 0, "O texto informa que um wildfire pode avançar até 20 km/h."),
  qt(TXT_C4, "Leitura ampliada: fatos globais", 45, FATOS_GLOBAIS, "Que relação de causa e efeito o texto apresenta?", ["Floods cause all wars.", "Climate change causes Arctic ice to disappear.", "Droughts create hotel rooms.", "Earthquakes cause overpopulation."], 1, "O desaparecimento do gelo ártico é apresentado como resultado da mudança climática."),

  // Capítulo 4 — Ocean Cleanup (8)
  qt(TXT_C4, "Texto e previsões: Ocean Cleanup", 49, LIMPEZA_OCEANO, "Quem está associado ao projeto The Ocean Cleanup?", ["Mario Rigby", "Boyan Slat", "Brian Jones", "Antonio Rigby"], 1, "O texto identifica Boyan Slat como responsável pelo projeto."),
  qt(TXT_C4, "Texto e previsões: Ocean Cleanup", 49, LIMPEZA_OCEANO, "Em qual oceano fica a mancha descrita?", ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], 2, "A Great Pacific Garbage Patch fica no oceano Pacífico."),
  qt(TXT_C4, "Texto e previsões: Ocean Cleanup", 49, LIMPEZA_OCEANO, "O que forma a enorme área mencionada?", ["Plastic", "Ice", "Trees", "Hotels"], 0, "A mancha é descrita como uma enorme área de plástico."),
  qt(TXT_C4, "Texto e previsões: Ocean Cleanup", 49, LIMPEZA_OCEANO, "Qual previsão é baseada na pesquisa?", ["Plastic is going to reach the patch.", "Plastic is going to become ice.", "The Pacific is going to disappear.", "The project is going to build hotels."], 0, "A pesquisa indica que o plástico provavelmente chegará à mancha."),
  qt(TXT_C4, "Texto e previsões: Ocean Cleanup", 49, LIMPEZA_OCEANO, "Qual evidência sustenta a previsão de que a mancha não desaparecerá?", ["A personal dream", "Photos of its size", "A hotel table", "A music video"], 1, "O texto diz que as fotos do tamanho da mancha indicam que ela não vai desaparecer."),
  qt(TXT_C4, "Texto e previsões: Ocean Cleanup", 49, LIMPEZA_OCEANO, "Em “it isn't going to disappear”, qual palavra cria a negativa?", ["it", "going", "isn't", "disappear"], 2, "Isn't é a contração de is not e forma a negativa."),
  qt(TXT_C4, "Texto e previsões: Ocean Cleanup", 49, LIMPEZA_OCEANO, "Complete conforme o relatório: “The patch ___ grow bigger.”", ["is going to", "are going to", "going", "will to"], 0, "Patch é singular; a forma usada no texto é is going to grow bigger."),
  qt(TXT_C4, "Texto e previsões: Ocean Cleanup", 49, LIMPEZA_OCEANO, "Por que be going to é apropriado nas previsões do texto?", ["Porque elas descrevem hábitos passados", "Porque são baseadas em evidências atuais", "Porque são ordens", "Porque não usam verbos"], 1, "Pesquisa, fotos e relatórios fornecem evidências presentes para as previsões."),

  // Capítulo 4 — cenas de previsão (8)
  qt(TXT_C4, "Situações: will e be going to", 49, CENAS_PREVISOES, "Qual previsão corresponde à cena A?", ["The volcano is going to erupt.", "The volcano is going to freeze.", "The volcano will become a hotel.", "The volcano isn't going to smoke."], 0, "A fumaça funciona como evidência de que o vulcão vai entrar em erupção."),
  qt(TXT_C4, "Situações: will e be going to", 49, CENAS_PREVISOES, "Complete a previsão da cena B: “Earth's temperature ___.”", ["are going to increase", "is going to increase", "is going increase", "will to increase"], 1, "Temperature é singular: is going to increase."),
  qt(TXT_C4, "Situações: will e be going to", 49, CENAS_PREVISOES, "O que as pessoas da cena C vão fazer?", ["They are going to clean up the beach.", "They are going to pollute the beach.", "They will build a hotel.", "They aren't carrying bags."], 0, "As sacolas e a coleta de lixo indicam que elas vão limpar a praia."),
  qt(TXT_C4, "Situações: will e be going to", 49, CENAS_PREVISOES, "Qual previsão se relaciona à cena D?", ["The rhinos are going to become extinct.", "The rhinos are going to become hotels.", "The rhinos will clean the beach.", "The rhinos aren't rare."], 0, "A existência de apenas três animais é a evidência para a previsão de extinção."),
  qt(TXT_C4, "Situações: will e be going to", 49, CENAS_PREVISOES, "A longa fila de carros da cena E sugere que:", ["the traffic is going to get worse", "the traffic is going to disappear", "the cars are going to swim", "the road will become a forest"], 0, "Os carros parados fornecem evidência de que o trânsito vai piorar."),
  qt(TXT_C4, "Situações: will e be going to", 49, CENAS_PREVISOES, "Complete sobre a cena F: “They ___ recycle the old clothes.”", ["is going to", "are going to", "are going", "will to"], 1, "Com they, usamos are going to + verbo base."),
  qt(TXT_C4, "Situações: will e be going to", 49, CENAS_PREVISOES, "Qual forma é adequada para a cena G, que mostra evidência de enchente?", ["There will to be a flood.", "There is going to be a flood.", "There going be a flood.", "There are a flood."], 1, "A chuva e a água nas ruas são evidências; usamos is going to be."),
  qt(TXT_C4, "Situações: will e be going to", 49, CENAS_PREVISOES, "Por que a fala H usa will?", ["Porque descreve uma opinião iniciada por I believe", "Porque mostra uma foto como evidência", "Porque é uma pergunta no passado", "Porque will significa reciclar"], 0, "O material usa will para previsões baseadas em opiniões, como I believe..."),

  // Capítulo 7 — bucket lists (8)
  qt(TXT_C7, "Leitura contextual: bucket lists", 79, SONHOS_BUCKET_LIST, "Qual objetivo de Leo está ligado à carreira de ator?", ["Go snorkeling", "Appear on TV", "Write a novel", "Sail around the world"], 1, "Como está treinando para ser ator, Leo pretende aparecer na televisão."),
  qt(TXT_C7, "Leitura contextual: bucket lists", 79, SONHOS_BUCKET_LIST, "O que Leo quer fazer por gostar de música?", ["Perform with a live band", "Interview a YouTuber", "Race across a desert", "Decorate a bedroom"], 0, "O texto relaciona seu amor pela música ao desejo de se apresentar com uma banda ao vivo."),
  qt(TXT_C7, "Leitura contextual: bucket lists", 79, SONHOS_BUCKET_LIST, "Por que Leo escolhe go backpacking?", ["He wants an expensive hotel.", "He wants an inexpensive trip.", "He is scared of travel.", "He wants to stay home."], 1, "Viajar de mochila combina com o desejo de fazer uma viagem econômica."),
  qt(TXT_C7, "Leitura contextual: bucket lists", 79, SONHOS_BUCKET_LIST, "Qual experiência de Leo acontece durante a noite?", ["Camp under the stars", "Appear on TV", "Interview a YouTuber", "Go snorkeling"], 0, "Camp under the stars é acampar sob as estrelas."),
  qt(TXT_C7, "Leitura contextual: bucket lists", 79, SONHOS_BUCKET_LIST, "Quais dois planos de Mia estão diretamente ligados ao oceano?", ["Go snorkeling and sail around the world", "Appear on TV and write a novel", "Camp and perform with a band", "Interview and decorate"], 0, "Mia quer praticar snorkeling e velejar ao redor do mundo."),
  qt(TXT_C7, "Leitura contextual: bucket lists", 79, SONHOS_BUCKET_LIST, "Quem Mia pretende entrevistar?", ["A hotel manager", "Her favorite YouTuber", "A mountain lion", "A farmer"], 1, "O texto afirma que ela vai entrevistar seu YouTuber favorito."),
  qt(TXT_C7, "Leitura contextual: bucket lists", 79, SONHOS_BUCKET_LIST, "Qual projeto de escrita aparece na lista de Mia?", ["Write her own novel", "Write a hotel review", "Write a climate report", "Write a song for Leo"], 0, "Mia deseja escrever seu próprio romance."),
  qt(TXT_C7, "Leitura contextual: bucket lists", 79, SONHOS_BUCKET_LIST, "Qual frase resume corretamente os planos?", ["Leo only wants water activities.", "Mia doesn't like the ocean.", "Both have several future experiences on their bucket lists.", "Neither person has future plans."], 2, "Os dois personagens apresentam várias experiências que pretendem realizar."),

  // Capítulo 7 — post do quarto e lista de Brian (8)
  qt(TXT_C7, "Texto e gramática: present perfect", 81, POST_QUARTO, "Quem decorou o quarto recentemente?", ["Chloe", "Ashley", "Brian", "Mario"], 1, "Chloe diz Ashley has decorated her bedroom."),
  qt(TXT_C7, "Texto e gramática: present perfect", 81, POST_QUARTO, "A frase “she hasn't decorated anything before” está em qual forma?", ["Afirmativa", "Interrogativa", "Negativa", "Imperativa"], 2, "Hasn't é a contração de has not, portanto a frase é negativa."),
  qt(TXT_C7, "Texto e gramática: present perfect", 81, POST_QUARTO, "Qual personagem nunca decorou nada?", ["Ashley", "Chloe", "Ben", "Brian"], 1, "Chloe afirma I've never decorated anything."),
  qt(TXT_C7, "Texto e gramática: present perfect", 81, POST_QUARTO, "Quantas cores diferentes as paredes do quarto de Ben já tiveram?", ["Two", "Three", "Four", "Five"], 1, "Ben diz que as paredes já tiveram três cores diferentes."),
  qt(TXT_C7, "Texto e gramática: present perfect", 81, POST_QUARTO, "Complete com a informação de Brian: “He has ___ half a novel.”", ["wrote", "written", "write", "writing"], 1, "O particípio de write é written."),
  qt(TXT_C7, "Texto e gramática: present perfect", 81, POST_QUARTO, "Qual particípio completa a experiência de comer alimentos do mundo todo?", ["ate", "eaten", "eating", "eated"], 1, "O present perfect usa eaten: I've eaten food from around the world."),
  qt(TXT_C7, "Texto e gramática: present perfect", 81, POST_QUARTO, "Qual destas experiências Brian ainda não teve?", ["Making a movie", "Reading Frankenstein", "Going to Africa", "Writing half a novel"], 2, "A lista diz I haven't gone to Africa."),
  qt(TXT_C7, "Texto e gramática: present perfect", 81, POST_QUARTO, "Qual frase sobre Brian está correta?", ["He hasn't read Frankenstein.", "He has made his own movie.", "He has never eaten international food.", "He hasn't written anything."], 1, "Brian afirma I've made my own movie."),

  // Capítulo 7 — Mario Rigby (8)
  qt(TXT_C7, "Diálogo: present perfect questions", 83, MARIO_VIAJANTE, "Qual auxiliar inicia a primeira pergunta de Antonio?", ["Did", "Has", "Have", "Does"], 2, "A pergunta é Have you ever heard...?"),
  qt(TXT_C7, "Diálogo: present perfect questions", 83, MARIO_VIAJANTE, "A resposta “No, I haven't” indica que Juliana:", ["já ouviu falar de Mario", "nunca ouviu falar de Mario", "viajou com Mario", "está no Canadá"], 1, "No, I haven't é a resposta negativa à pergunta sobre essa experiência."),
  qt(TXT_C7, "Diálogo: present perfect questions", 83, MARIO_VIAJANTE, "Qual é a profissão ou atividade de Mario?", ["Travel vlogger", "Hotel manager", "Farmer", "Musician"], 0, "Antonio apresenta Mario como a travel vlogger."),
  qt(TXT_C7, "Diálogo: present perfect questions", 83, MARIO_VIAJANTE, "Como Mario atravessou o continente africano?", ["By sailing", "By walking", "By driving", "By flying"], 1, "He's walked across the whole continent significa que ele atravessou caminhando."),
  qt(TXT_C7, "Diálogo: present perfect questions", 83, MARIO_VIAJANTE, "Qual pergunta de Juliana usa corretamente has?", ["Have he ever visited other continents?", "Has he ever visited other continents?", "Did he ever visited other continents?", "Has he ever visit other continents?"], 1, "Com he usamos Has he ever + particípio: visited."),
  qt(TXT_C7, "Diálogo: present perfect questions", 83, MARIO_VIAJANTE, "Qual experiência ocorreu no Canadá?", ["Mario has cycled across it.", "Mario has sailed around it.", "Juliana has walked across it.", "Antonio has camped there."], 0, "O diálogo informa He's cycled across Canada."),
  qt(TXT_C7, "Diálogo: present perfect questions", 83, MARIO_VIAJANTE, "Se Mario foi ao Canadá e voltou, qual palavra descreve essa experiência?", ["gone", "been", "going", "went"], 1, "Segundo a nota, been indica ida e volta."),
  qt(TXT_C7, "Diálogo: present perfect questions", 83, MARIO_VIAJANTE, "Se alguém foi a um lugar e ainda está lá, qual particípio deve ser usado?", ["been", "gone", "did", "visited"], 1, "Gone indica que a pessoa foi e permanece no lugar."),
);
