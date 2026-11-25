const criarQuestaoInglesExtra = (
  capitulo,
  conteudo,
  pagina,
  pergunta,
  alternativas,
  correta,
  explicacao,
  textoBase = "",
) => ({
  materia: "Inglês",
  capitulo,
  conteudo,
  pagina,
  pergunta,
  alternativas,
  correta,
  explicacao,
  ...(textoBase ? { textoBase } : {}),
});

const EXTRA_C1 = "Capítulo 1 — On vacation";
const EXTRA_C4 = "Capítulo 4 — Big issues";
const EXTRA_C7 = "Capítulo 7 — Bucket list";
const qe = criarQuestaoInglesExtra;

const TEXTO_YOSEMITE = `Yosemite National Park is one of the biggest parks in the U.S. It is home to some of the largest trees in the world. One of the most beautiful animals in the park is the mountain lion, or cougar. Summer is the busiest time at the park. The best times to visit are in May and September.`;

const TEXTO_HOTEIS = `Hotels in Yosemite:
Mountain Lion Lodge — room: 11.5 m²; price: $85 a night; food: 2 stars.
Lake Hotel — room: 51 m²; price: $130 a night; food: 1 star.
Yosemite View Hotel — room: 37 m²; price: $380 a night; food: 4 stars.`;

const TEXTO_BIG_ISSUES = `Did you know?
The longest heat wave was in Marble Bar, Australia, in 1924. It was hotter than 100°F (37.8°C) for five months.
The Three Hundred and Thirty-Five Years' War lasted from 1651 until 1986.
One of the longest droughts was in Australia, from 1996 until 2010.
A wildfire can travel up to 20 km/h.
As a result of climate change, ice in the Arctic is disappearing.`;

const TEXTO_OCEAN_CLEANUP = `Boyan Slat's The Ocean Cleanup project focuses on the Great Pacific Garbage Patch, an enormous area of plastic in the Pacific Ocean. Research tells us that a piece of plastic entering the Pacific is probably going to reach the garbage patch. Photos indicate that the patch isn't going to disappear. A report also said that it is going to grow bigger.`;

const TEXTO_CHLOE = `Chloe: Look at Ashley's post about her bedroom. She's decorated it!
Ben: It looks great! She said she hasn't decorated anything before.
Chloe: I've never decorated anything!
Ben: I've done it a few times. My bedroom walls have had three different colors on them!
Chloe: OK! Will you help me?
Ben: Sure!`;

const TEXTO_ANTONIO = `Antonio: Have you ever heard of Mario Rigby?
Juliana: No, I haven't. Who is he?
Antonio: He's a travel vlogger. He's walked across the whole continent of Africa.
Juliana: Has he ever visited any other continents?
Antonio: Yes, he has! He's cycled across Canada, too!`;

perguntas.push(
  // Capítulo 1 — Feelings
  qe(EXTRA_C1, "Feelings: adjetivos e preposições", 16, "Complete: “She is ___ her brother because he broke her phone.”", ["angry with", "proud of", "interested in", "surprised by"], 0, "Angry with significa estar com raiva de alguém. A preposição usada depois de angry, nesse padrão, é with."),
  qe(EXTRA_C1, "Feelings: adjetivos e preposições", 16, "Qual expressão significa “estar entediado com algo”?", ["scared of", "bored of", "happy about", "crazy about"], 1, "Bored of indica que algo deixou a pessoa entediada ou sem interesse."),
  qe(EXTRA_C1, "Feelings: adjetivos e preposições", 16, "Complete: “I love discovering new places. I'm ___ sightseeing.”", ["disappointed with", "nervous about", "crazy about", "angry with"], 2, "Crazy about significa gostar muito ou ser apaixonado por algo."),
  qe(EXTRA_C1, "Feelings: adjetivos e preposições", 16, "Qual combinação expressa decepção com o hotel?", ["disappointed with the hotel", "proud of the hotel", "scared of the hotel", "interested in the hotel"], 0, "Disappointed with significa decepcionado com. O material usa essa combinação para avaliar uma experiência ruim."),
  qe(EXTRA_C1, "Feelings: adjetivos e preposições", 16, "Complete: “He's ___ being on vacation.”", ["bored of", "happy about", "angry with", "scared of"], 1, "Happy about indica felicidade por uma situação ou acontecimento."),
  qe(EXTRA_C1, "Feelings: adjetivos e preposições", 16, "Complete: “She's ___ the magazine article.”", ["interested in", "surprised by", "nervous about", "proud of"], 0, "Interested in significa interessado em. Depois de interested, usamos in."),
  qe(EXTRA_C1, "Feelings: adjetivos e preposições", 16, "Que expressão completa “I'm ___ flying” para indicar ansiedade antes de um voo?", ["proud of", "nervous about", "happy about", "bored of"], 1, "Nervous about significa nervoso ou ansioso em relação a algo."),
  qe(EXTRA_C1, "Feelings: adjetivos e preposições", 16, "Um pai satisfeito com a conquista da filha pode dizer: “I'm ___ my daughter.”", ["angry with", "crazy about", "proud of", "disappointed with"], 2, "Proud of significa orgulhoso de alguém ou de alguma realização."),
  qe(EXTRA_C1, "Feelings: adjetivos e preposições", 16, "Complete: “He's ___ surfing because the waves are high.”", ["scared of", "interested in", "happy about", "surprised by"], 0, "Scared of significa ter medo de algo. A preposição usada é of."),
  qe(EXTRA_C1, "Feelings: adjetivos e preposições", 16, "Qual expressão indica que algo inesperado causou surpresa?", ["bored of", "surprised by", "angry with", "nervous about"], 1, "Surprised by significa surpreso por algo que aconteceu ou foi percebido."),
  qe(EXTRA_C1, "Feelings: adjetivos e preposições", 16, "Complete: “My dad is ___ me. I ordered my meal in Portuguese!”", ["proud of", "bored of", "scared of", "disappointed with"], 0, "A conquista de falar em português deixa o pai orgulhoso; por isso usamos proud of."),
  qe(EXTRA_C1, "Feelings: adjetivos e preposições", 16, "Complete: “I'm ___ trying new food. Last time I got sick!”", ["happy about", "interested in", "nervous about", "crazy about"], 2, "A experiência anterior causou preocupação; nervous about é a combinação adequada."),

  // Capítulo 1 — Superlatives
  qe(EXTRA_C1, "Superlative adjectives", 17, "Como formamos normalmente o superlativo de um adjetivo curto como old?", ["more + adjective", "the + adjective + -est", "as + adjective + as", "adjective + -er"], 1, "Para muitos adjetivos curtos, usamos the + adjetivo + -est: old → the oldest."),
  qe(EXTRA_C1, "Superlative adjectives", 17, "Qual é o superlativo correto de large?", ["the larger", "the most large", "the largest", "the largeest"], 2, "Como large já termina em e, acrescentamos apenas -st: the largest."),
  qe(EXTRA_C1, "Superlative adjectives", 17, "Qual é a forma superlativa correta de busy?", ["the busyest", "the most busy", "the busiest", "the busier"], 2, "Em busy, trocamos o y por i e acrescentamos -est: the busiest."),
  qe(EXTRA_C1, "Superlative adjectives", 17, "Por que big vira the biggest?", ["Porque recebe most", "Porque a consoante final é duplicada antes de -est", "Porque o g é retirado", "Porque é irregular"], 1, "Em big, duplicamos a consoante final e acrescentamos -est: big → the biggest."),
  qe(EXTRA_C1, "Superlative adjectives", 17, "Qual é o superlativo correto de beautiful?", ["the beautifulest", "the more beautiful", "the most beautiful", "the beautifullest"], 2, "Com adjetivos longos, usamos the most + adjetivo: the most beautiful."),
  qe(EXTRA_C1, "Superlative adjectives", 17, "Quais são os superlativos irregulares de good e bad?", ["the goodest e the baddest", "the better e the worse", "the best e the worst", "the most good e the most bad"], 2, "Good e bad são irregulares: good → the best; bad → the worst."),
  qe(EXTRA_C1, "Leitura: Yosemite National Park", 17, "Segundo o texto, como Yosemite é descrito em relação aos parques dos Estados Unidos?", ["One of the smallest parks", "One of the biggest parks", "The most expensive park", "The oldest park"], 1, "O texto diz que Yosemite é one of the biggest parks in the U.S.", TEXTO_YOSEMITE),
  qe(EXTRA_C1, "Leitura: Yosemite National Park", 17, "Qual animal é citado como um dos mais bonitos do parque?", ["The mountain lion", "The polar bear", "The elephant", "The dolphin"], 0, "O texto apresenta o mountain lion, também chamado cougar, como um dos animais mais bonitos do parque.", TEXTO_YOSEMITE),
  qe(EXTRA_C1, "Leitura: Yosemite National Park", 17, "Qual é a época mais movimentada em Yosemite?", ["Winter", "Spring", "Summer", "Autumn"], 2, "Summer is the busiest time at the park: o verão é a época mais movimentada.", TEXTO_YOSEMITE),
  qe(EXTRA_C1, "Leitura: Yosemite National Park", 17, "Quais meses o texto recomenda como os melhores para visitar Yosemite?", ["January and February", "May and September", "June and July", "October and December"], 1, "O texto afirma que the best times to visit are in May and September.", TEXTO_YOSEMITE),
  qe(EXTRA_C1, "Comparação de hotéis", 17, "Qual hotel tem os maiores quartos?", ["Mountain Lion Lodge", "Lake Hotel", "Yosemite View Hotel", "Todos têm o mesmo tamanho"], 1, "O Lake Hotel tem quartos de 51 m², maiores que os de 37 m² e 11,5 m² dos outros hotéis.", TEXTO_HOTEIS),
  qe(EXTRA_C1, "Comparação de hotéis", 17, "Qual hotel é o mais caro?", ["Lake Hotel", "Mountain Lion Lodge", "Yosemite View Hotel", "Nenhum deles"], 2, "Yosemite View Hotel custa $380 por noite, o maior preço da tabela.", TEXTO_HOTEIS),
  qe(EXTRA_C1, "Comparação de hotéis", 17, "Qual hotel tem a melhor avaliação de comida?", ["Yosemite View Hotel", "Lake Hotel", "Mountain Lion Lodge", "Os três têm quatro estrelas"], 0, "Yosemite View Hotel tem quatro estrelas para comida, a melhor avaliação apresentada.", TEXTO_HOTEIS),
  qe(EXTRA_C1, "Comparação de hotéis", 17, "Complete corretamente: “Mountain Lion Lodge is ___ hotel.”", ["the more cheap", "the cheapest", "the most cheap", "cheaper"], 1, "Com cheap, um adjetivo curto, usamos the cheapest. O preço de $85 também confirma que ele é o mais barato.", TEXTO_HOTEIS),

  // Capítulo 4 — Big issues vocabulary
  qe(EXTRA_C4, "Problemas naturais e causados pelo ser humano", 45, "Qual expressão em inglês significa “onda de calor”?", ["heat wave", "wildfire", "flood", "drought"], 0, "Heat wave é um período prolongado de calor muito intenso."),
  qe(EXTRA_C4, "Problemas naturais e causados pelo ser humano", 45, "Qual palavra significa “doença”?", ["war", "disease", "pollution", "earthquake"], 1, "Disease significa doença ou enfermidade."),
  qe(EXTRA_C4, "Problemas naturais e causados pelo ser humano", 45, "Como se diz “seca” em inglês?", ["flood", "drought", "heat wave", "climate change"], 1, "Drought é um longo período com pouca ou nenhuma chuva."),
  qe(EXTRA_C4, "Problemas naturais e causados pelo ser humano", 45, "Qual palavra nomeia a contaminação do ar, da água ou do solo?", ["overpopulation", "pollution", "war", "disease"], 1, "Pollution significa poluição, a contaminação prejudicial do ambiente."),
  qe(EXTRA_C4, "Problemas naturais e causados pelo ser humano", 45, "Qual termo descreve uma população grande demais para os recursos disponíveis?", ["overpopulation", "earthquake", "wildfire", "heat wave"], 0, "Overpopulation significa superpopulação."),
  qe(EXTRA_C4, "Problemas naturais e causados pelo ser humano", 45, "Como se chama um incêndio que se espalha pela vegetação?", ["flood", "wildfire", "drought", "war"], 1, "Wildfire é um incêndio florestal ou em área de vegetação."),
  qe(EXTRA_C4, "Problemas naturais e causados pelo ser humano", 45, "Qual palavra corresponde a “inundação”?", ["flood", "disease", "pollution", "earthquake"], 0, "Flood significa enchente ou inundação."),
  qe(EXTRA_C4, "Problemas naturais e causados pelo ser humano", 45, "Qual palavra em inglês significa “guerra”?", ["drought", "war", "heat wave", "climate change"], 1, "War significa guerra ou conflito armado."),
  qe(EXTRA_C4, "Problemas naturais e causados pelo ser humano", 45, "Como se diz “terremoto” em inglês?", ["wildfire", "earthquake", "overpopulation", "flood"], 1, "Earthquake significa terremoto."),
  qe(EXTRA_C4, "Problemas naturais e causados pelo ser humano", 45, "Qual expressão corresponde a “mudança climática”?", ["climate change", "heat wave", "air disease", "weather war"], 0, "Climate change significa mudança climática."),
  qe(EXTRA_C4, "Leitura: Did you know?", 45, "Onde ocorreu a onda de calor mais longa citada?", ["Canada", "Australia", "The Netherlands", "Japan"], 1, "O texto localiza a onda de calor em Marble Bar, na Austrália.", TEXTO_BIG_ISSUES),
  qe(EXTRA_C4, "Leitura: Did you know?", 45, "Quanto tempo durou a onda de calor de Marble Bar?", ["Five days", "Five weeks", "Five months", "Five years"], 2, "O texto informa que a temperatura ficou acima de 100°F durante cinco meses.", TEXTO_BIG_ISSUES),
  qe(EXTRA_C4, "Leitura: Did you know?", 45, "Qual problema durou de 1651 a 1986?", ["A drought", "A heat wave", "A war", "A flood"], 2, "A Three Hundred and Thirty-Five Years' War ocorreu entre 1651 e 1986.", TEXTO_BIG_ISSUES),
  qe(EXTRA_C4, "Leitura: Did you know?", 45, "Qual problema ocorreu na Austrália entre 1996 e 2010?", ["A drought", "An earthquake", "A disease", "A war"], 0, "O texto cita uma das secas mais longas, de 1996 a 2010.", TEXTO_BIG_ISSUES),
  qe(EXTRA_C4, "Leitura: Did you know?", 45, "A que velocidade um wildfire pode se deslocar, segundo o texto?", ["Até 2 km/h", "Até 20 km/h", "Até 200 km/h", "Exatamente 100 km/h"], 1, "O texto afirma que um incêndio florestal pode avançar até 20 km/h.", TEXTO_BIG_ISSUES),
  qe(EXTRA_C4, "Leitura: Did you know?", 45, "O que está desaparecendo no Ártico como resultado da mudança climática?", ["The forests", "The cities", "The ice", "The mountains"], 2, "O texto diz que o gelo do Ártico está desaparecendo.", TEXTO_BIG_ISSUES),

  // Capítulo 4 — Future predictions
  qe(EXTRA_C4, "Be going to: previsões", 49, "Quando usamos be going to para fazer uma previsão?", ["Quando há evidência presente", "Somente para fatos passados", "Apenas para dar ordens", "Quando não existe nenhum indício"], 0, "O material usa be going to para previsões baseadas em evidências observáveis no presente."),
  qe(EXTRA_C4, "Be going to: previsões", 49, "Qual frase afirmativa está corretamente formada?", ["The patch going to grow.", "The patch is going to grow.", "The patch is go to grow.", "The patch going grow."], 1, "A estrutura afirmativa é sujeito + am/is/are + going to + verbo na forma base."),
  qe(EXTRA_C4, "Be going to: previsões", 49, "Qual frase negativa com be going to está correta?", ["It not going to disappear.", "It doesn't going to disappear.", "It isn't going to disappear.", "It isn't go disappear."], 2, "A negativa é formada com am not, isn't ou aren't antes de going to."),
  qe(EXTRA_C4, "Be going to: previsões", 49, "Qual pergunta está corretamente formada?", ["Is she going to recycle the bottles?", "Does she going to recycle the bottles?", "She is going to recycle the bottles?", "Is going she to recycle the bottles?"], 0, "Na pergunta, colocamos am/is/are antes do sujeito: Is she going to...?"),
  qe(EXTRA_C4, "Leitura: The Ocean Cleanup", 49, "O que o relatório prevê sobre a mancha de lixo do Pacífico?", ["It is going to grow bigger.", "It is going to become a city.", "It will disappear tomorrow.", "It is going to move to the Atlantic."], 0, "O texto afirma que a mancha vai aumentar: it is going to grow bigger.", TEXTO_OCEAN_CLEANUP),
  qe(EXTRA_C4, "Leitura: The Ocean Cleanup", 49, "O que as fotos indicam sobre a mancha de lixo?", ["It is going to disappear.", "It isn't going to disappear.", "It is going to freeze.", "It isn't going to contain plastic."], 1, "As fotos indicam que a mancha não vai desaparecer.", TEXTO_OCEAN_CLEANUP),
  qe(EXTRA_C4, "Leitura: The Ocean Cleanup", 49, "Segundo a pesquisa, o que provavelmente acontecerá com um pedaço de plástico que entra no Pacífico?", ["It is going to reach the garbage patch.", "It is going to become glass.", "It is going to leave the ocean immediately.", "It is going to reach Europe."], 0, "A pesquisa prevê que o plástico provavelmente chegará à mancha de lixo.", TEXTO_OCEAN_CLEANUP),
  qe(EXTRA_C4, "Be going to: previsões", 49, "Ao observar um vulcão soltando muita fumaça, qual previsão combina com a evidência?", ["The volcano is going to erupt.", "The volcano will be a hotel.", "The volcano has erupted every day.", "The volcano isn't a mountain."], 0, "A fumaça é uma evidência presente; por isso usamos is going to erupt."),
  qe(EXTRA_C4, "Be going to: previsões", 49, "Complete: “The temperature on Earth ___ increase.”", ["are going to", "is going to", "going", "is go to"], 1, "Temperature é singular, então usamos is going to increase."),
  qe(EXTRA_C4, "Be going to: previsões", 49, "Complete: “These people ___ clean up the beach.”", ["is going to", "are going to", "are go to", "going to"], 1, "These people é plural, por isso usamos are going to."),
  qe(EXTRA_C4, "Be going to: previsões", 49, "Há apenas três rinocerontes-brancos-do-norte. Complete: “They ___ become extinct.”", ["is going to", "are going to", "are going", "will to"], 1, "Com they usamos are going to; o pequeno número de animais é a evidência para a previsão."),
  qe(EXTRA_C4, "Be going to: previsões", 49, "Complete a previsão: “The traffic ___ get worse.”", ["is going to", "does going to", "are going to", "is go to"], 0, "Traffic é singular; por isso a forma correta é is going to get worse."),
  qe(EXTRA_C4, "Be going to: previsões", 49, "Complete: “We ___ recycle our old clothes.”", ["am going to", "is going to", "are going to", "are going"], 2, "Com we usamos are going to + verbo base: are going to recycle."),
  qe(EXTRA_C4, "Will x be going to", 49, "Olhe para a chuva forte. Qual previsão é mais adequada?", ["There is going to be a flood.", "There will to be a flood.", "There going to a flood.", "There has a flood."], 0, "A chuva é uma evidência presente, então usamos be going to."),
  qe(EXTRA_C4, "Will x be going to", 49, "Complete uma opinião: “I believe that humans ___ live for hundreds of years.”", ["are going", "will", "is going to", "will to"], 1, "O material usa will para previsões baseadas em opinião, como I believe..."),
  qe(EXTRA_C4, "Will x be going to", 49, "Mom está juntando garrafas plásticas. Qual pergunta usa a evidência presente corretamente?", ["Will she going to recycle them?", "Does she going to recycle them?", "Is she going to recycle them?", "She is recycle them?"], 2, "Como as garrafas reunidas são uma evidência, usamos Is she going to recycle them?"),

  // Capítulo 7 — Experiences vocabulary
  qe(EXTRA_C7, "Experiências e bucket list", 79, "Qual experiência significa participar de um programa de televisão?", ["appear on TV", "write my own novel", "go snorkeling", "camp under the stars"], 0, "Appear on TV significa aparecer ou participar de algo na televisão."),
  qe(EXTRA_C7, "Experiências e bucket list", 79, "Qual expressão significa tocar ou cantar com uma banda ao vivo?", ["make a viral dance video", "perform with a live band", "interview a YouTuber", "race across a desert"], 1, "Perform with a live band significa se apresentar com uma banda ao vivo."),
  qe(EXTRA_C7, "Experiências e bucket list", 79, "Qual atividade envolve fazer perguntas a um criador de vídeos de quem você gosta?", ["decorate my bedroom", "interview my favorite YouTuber", "sail around the world", "dye my hair"], 1, "Interview my favorite YouTuber significa entrevistar meu YouTuber favorito."),
  qe(EXTRA_C7, "Experiências e bucket list", 79, "Complete: “We don't want to spend much money, so we're going to ___.”", ["go backpacking", "appear on TV", "write a novel", "perform with a band"], 0, "Go backpacking descreve uma viagem de mochila, geralmente simples e econômica."),
  qe(EXTRA_C7, "Experiências e bucket list", 79, "Qual experiência permite observar peixes usando máscara e snorkel?", ["go snorkeling", "race across a desert", "camp under the stars", "appear on TV"], 0, "Go snorkeling é praticar mergulho de superfície com máscara e tubo."),
  qe(EXTRA_C7, "Experiências e bucket list", 79, "Qual expressão significa atravessar um deserto em uma corrida?", ["sail around the world", "race across a desert", "go backpacking", "perform with a band"], 1, "Race across a desert significa participar de uma corrida atravessando um deserto."),
  qe(EXTRA_C7, "Experiências e bucket list", 79, "Em uma noite quente e sem nuvens, qual plano combina com o material?", ["Camp under the stars", "Interview a YouTuber", "Appear on TV", "Decorate a bedroom"], 0, "Camp under the stars significa acampar ao ar livre sob as estrelas."),
  qe(EXTRA_C7, "Experiências e bucket list", 79, "Qual atividade tem o objetivo de alcançar muitas visualizações na internet?", ["make a viral dance video", "write my own novel", "go snorkeling", "dye my hair"], 0, "Make a viral dance video significa criar um vídeo de dança que se espalhe rapidamente na internet."),
  qe(EXTRA_C7, "Experiências e bucket list", 79, "A pessoa ama água e barcos. Qual intenção faz sentido?", ["I'm going to race across a desert.", "I'm going to sail around the world.", "I'm going to decorate my bedroom.", "I'm going to appear on TV."], 1, "Sail around the world significa velejar ao redor do mundo e combina com o interesse por água e barcos."),
  qe(EXTRA_C7, "Experiências e bucket list", 79, "Qual expressão significa escrever o próprio romance?", ["read a whole novel", "write my own novel", "make a travel vlog", "perform a novel"], 1, "Write my own novel significa escrever meu próprio romance."),

  // Capítulo 7 — Present perfect affirmative and negative
  qe(EXTRA_C7, "Present perfect: afirmativa e negativa", 81, "Qual é a estrutura afirmativa do present perfect?", ["Sujeito + did + verbo", "Sujeito + have/has + particípio", "Sujeito + am/is/are + -ing", "Sujeito + will + particípio"], 1, "O present perfect afirmativo usa have ou has seguido do particípio passado."),
  qe(EXTRA_C7, "Present perfect: afirmativa e negativa", 81, "Complete: “Ashley ___ decorated her bedroom.”", ["have", "has", "is", "did"], 1, "Com Ashley, terceira pessoa do singular, usamos has + decorated."),
  qe(EXTRA_C7, "Present perfect: afirmativa e negativa", 81, "O que Ben diz sobre Ashley?", ["She hasn't decorated anything before.", "She hasn't seen the bedroom.", "She has painted three houses.", "She doesn't like decorating."], 0, "Ben afirma que Ashley não tinha decorado nada antes.", TEXTO_CHLOE),
  qe(EXTRA_C7, "Present perfect: afirmativa e negativa", 81, "Quantas vezes Chloe já decorou algo?", ["Many times", "Once", "Never", "Three times"], 2, "Chloe diz I've never decorated anything, portanto nunca decorou nada.", TEXTO_CHLOE),
  qe(EXTRA_C7, "Present perfect: afirmativa e negativa", 81, "Complete a fala de Ben: “My bedroom walls ___ had three different colors.”", ["has", "have", "did", "are"], 1, "Walls é plural; por isso usamos have had.", TEXTO_CHLOE),
  qe(EXTRA_C7, "Present perfect: particípios", 81, "Qual é o particípio passado de write?", ["wrote", "written", "writed", "writing"], 1, "Write é irregular: write, wrote, written."),
  qe(EXTRA_C7, "Present perfect: particípios", 81, "Complete: “I've ___ food from around the world.”", ["ate", "eaten", "eat", "eating"], 1, "Depois de have usamos o particípio: o particípio de eat é eaten."),

  // Capítulo 7 — Present perfect questions
  qe(EXTRA_C7, "Present perfect: perguntas e respostas", 83, "Qual é a estrutura correta para perguntar sobre uma experiência de you?", ["Did you ever + particípio?", "Have you ever + particípio?", "Has you ever + verbo?", "Are you ever + particípio?"], 1, "Com you, usamos Have you ever + particípio passado?"),
  qe(EXTRA_C7, "Present perfect: perguntas e respostas", 83, "Complete: “___ she ever been to the U.S.?”", ["Have", "Did", "Has", "Does"], 2, "Com she usamos has: Has she ever been...?"),
  qe(EXTRA_C7, "Present perfect: perguntas e respostas", 83, "Qual resposta curta completa “Have you ever heard of Mario Rigby?”", ["No, I didn't.", "No, I haven't.", "No, I don't.", "No, I'm not."], 1, "Perguntas iniciadas por Have you recebem respostas curtas com have ou haven't.", TEXTO_ANTONIO),
  qe(EXTRA_C7, "Present perfect: perguntas e respostas", 83, "Qual resposta curta Antonio dá para “Has he ever visited any other continents?”", ["Yes, he did.", "Yes, he is.", "Yes, he has.", "Yes, he have."], 2, "Com he, a resposta curta afirmativa é Yes, he has.", TEXTO_ANTONIO),
  qe(EXTRA_C7, "Present perfect: been e gone", 83, "Qual é a diferença apresentada entre been e gone?", ["Been indica ida e volta; gone indica que a pessoa ainda está lá", "Been é presente; gone é futuro", "Been é usado apenas com she", "Não existe diferença"], 0, "Been indica que a pessoa foi e voltou. Gone indica que foi e ainda está no lugar."),
  qe(EXTRA_C7, "Present perfect: perguntas e respostas", 83, "O que Mario Rigby fez na África?", ["He has sailed around it.", "He has walked across the continent.", "He has flown over it.", "He has written a book there."], 1, "Antonio diz que Mario has walked across the whole continent of Africa.", TEXTO_ANTONIO),
  qe(EXTRA_C7, "Present perfect: perguntas e respostas", 83, "Que outra experiência de Mario é citada?", ["He's cycled across Canada.", "He's raced across Australia.", "He's lived in Japan.", "He's climbed Everest."], 0, "O diálogo informa que Mario pedalou através do Canadá.", TEXTO_ANTONIO),
);
