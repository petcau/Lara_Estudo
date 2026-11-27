let proximoGuiaGeometria = 1;

const criarQuestaoGeometria = (capitulo, conteudo, dificuldade, pergunta, alternativas, correta, explicacao, textoBase = "") => ({
  materia: "Geometria — 8º ano",
  aprenderId: `geo-${proximoGuiaGeometria++}`,
  capitulo,
  conteudo,
  pagina: "Prova Final",
  dificuldade,
  pergunta,
  alternativas,
  correta,
  explicacao,
  ...(textoBase ? { textoBase } : {}),
});

const gq = criarQuestaoGeometria;
const G8 = "Capítulo 8 — Triângulos";
const G9 = "Capítulo 9 — Segmentos e pontos notáveis nos triângulos";
const G10 = "Capítulo 10 — Quadriláteros";
const G12 = "Capítulo 12 — Polígonos";
const GR = "Revisão complementar — Áreas, capacidade e volume";

perguntas.push(
  // Capítulo 8 — 8 fáceis
  gq(G8, "Triângulos: classificação, propriedades, congruência e área", "Fácil", "Um triângulo com três lados de mesma medida é:", ["Escaleno", "Isósceles", "Equilátero", "Retângulo"], 2, "Equilátero significa três lados congruentes. Ele também possui três ângulos de 60°."),
  gq(G8, "Triângulos: classificação, propriedades, congruência e área", "Fácil", "Um triângulo com exatamente dois lados de mesma medida é:", ["Isósceles", "Equilátero", "Escaleno", "Obtusângulo"], 0, "O triângulo isósceles possui dois lados congruentes e, por consequência, dois ângulos da base iguais."),
  gq(G8, "Triângulos: classificação, propriedades, congruência e área", "Fácil", "Como se chama o triângulo que possui os três lados com medidas diferentes?", ["Acutângulo", "Escaleno", "Equilátero", "Isósceles"], 1, "Escaleno é o triângulo cujos três lados têm medidas diferentes."),
  gq(G8, "Triângulos: classificação, propriedades, congruência e área", "Fácil", "Um triângulo que possui um ângulo de 90° é:", ["Acutângulo", "Obtusângulo", "Retângulo", "Equilátero"], 2, "Triângulo retângulo é aquele que possui um ângulo reto, isto é, de 90°."),
  gq(G8, "Triângulos: classificação, propriedades, congruência e área", "Fácil", "A soma dos ângulos internos de qualquer triângulo é:", ["90°", "180°", "270°", "360°"], 1, "A soma dos três ângulos internos de qualquer triângulo é sempre 180°."),
  gq(G8, "Triângulos: classificação, propriedades, congruência e área", "Fácil", "Qual expressão calcula a área de um triângulo?", ["base × altura", "base + altura", "base × altura ÷ 2", "2 × base + 2 × altura"], 2, "A área do triângulo é metade da área de um paralelogramo de mesma base e altura: A = b × h ÷ 2."),
  gq(G8, "Triângulos: classificação, propriedades, congruência e área", "Fácil", "Um triângulo com todos os ângulos menores que 90° é:", ["Acutângulo", "Retângulo", "Obtusângulo", "Escaleno"], 0, "Acutângulo possui três ângulos agudos, todos menores que 90°."),
  gq(G8, "Triângulos: classificação, propriedades, congruência e área", "Fácil", "Triângulos congruentes possuem:", ["Somente a mesma área", "Mesma forma e mesmas medidas", "Apenas os mesmos ângulos", "Sempre a mesma posição"], 1, "Congruência significa mesma forma e mesmo tamanho. Lados e ângulos correspondentes têm medidas iguais."),
  // Capítulo 8 — 8 médias
  gq(G8, "Triângulos: classificação, propriedades, congruência e área", "Médio", "Dois ângulos de um triângulo medem 50° e 60°. Quanto mede o terceiro?", ["60°", "70°", "80°", "90°"], 1, "Some os conhecidos: 50° + 60° = 110°. Depois faça 180° − 110° = 70°."),
  gq(G8, "Triângulos: classificação, propriedades, congruência e área", "Médio", "Um triângulo tem base de 12 cm e altura de 5 cm. Qual é sua área?", ["17 cm²", "30 cm²", "60 cm²", "120 cm²"], 1, "A = 12 × 5 ÷ 2 = 60 ÷ 2 = 30 cm²."),
  gq(G8, "Triângulos: classificação, propriedades, congruência e área", "Médio", "Quais medidas podem formar um triângulo?", ["2 cm, 3 cm e 6 cm", "4 cm, 4 cm e 9 cm", "5 cm, 6 cm e 8 cm", "1 cm, 2 cm e 4 cm"], 2, "O maior lado deve ser menor que a soma dos outros dois. Apenas 8 < 5 + 6 satisfaz essa condição."),
  gq(G8, "Triângulos: classificação, propriedades, congruência e área", "Médio", "Um triângulo possui ângulos de 45°, 45° e 90°. Ele é classificado como:", ["Escaleno e acutângulo", "Isósceles e retângulo", "Equilátero e retângulo", "Isósceles e obtusângulo"], 1, "Dois ângulos iguais indicam dois lados iguais: isósceles. O ângulo de 90° o torna retângulo."),
  gq(G8, "Triângulos: classificação, propriedades, congruência e área", "Médio", "Se dois triângulos têm os três lados correspondentes iguais, qual caso garante a congruência?", ["AAA", "LLL", "AL", "Somente área igual"], 1, "O caso LLL (lado-lado-lado) garante congruência quando os três pares de lados correspondentes são iguais."),
  gq(G8, "Triângulos: classificação, propriedades, congruência e área", "Médio", "Um triângulo isósceles tem ângulo do vértice de 40°. Quanto mede cada ângulo da base?", ["40°", "60°", "70°", "80°"], 2, "Sobram 180° − 40° = 140°. Como os ângulos da base são iguais, cada um mede 140° ÷ 2 = 70°."),
  gq(G8, "Triângulos: classificação, propriedades, congruência e área", "Médio", "A área de um triângulo é 36 cm² e sua base mede 9 cm. Qual é a altura?", ["4 cm", "6 cm", "8 cm", "12 cm"], 2, "36 = 9 × h ÷ 2. Multiplicando por 2: 72 = 9h; portanto, h = 8 cm."),
  gq(G8, "Triângulos: classificação, propriedades, congruência e área", "Médio", "Um ângulo externo de um triângulo é igual:", ["À soma dos dois ângulos internos não adjacentes", "À metade do ângulo interno vizinho", "Sempre a 90°", "À soma dos três ângulos internos"], 0, "O ângulo externo corresponde à soma dos dois ângulos internos que não estão ao lado dele."),
  // Capítulo 8 — 4 difíceis
  gq(G8, "Triângulos: classificação, propriedades, congruência e área", "Difícil", "Os ângulos de um triângulo medem x, 2x e 3x. Qual é o maior ângulo?", ["30°", "60°", "90°", "120°"], 2, "x + 2x + 3x = 180°, então 6x = 180° e x = 30°. O maior é 3x = 90°."),
  gq(G8, "Triângulos: classificação, propriedades, congruência e área", "Difícil", "Um terreno triangular tem área de 84 m² e altura de 12 m. Qual é a base?", ["7 m", "12 m", "14 m", "21 m"], 2, "84 = b × 12 ÷ 2 = 6b. Logo, b = 84 ÷ 6 = 14 m."),
  gq(G8, "Triângulos: classificação, propriedades, congruência e área", "Difícil", "Em dois triângulos, são iguais dois lados e o ângulo compreendido entre eles. Qual caso de congruência foi usado?", ["LLL", "LAL", "ALA", "AAA"], 1, "LAL significa lado-ângulo-lado. O ângulo citado precisa estar entre os dois lados correspondentes."),
  gq(G8, "Triângulos: classificação, propriedades, congruência e área", "Difícil", "Um triângulo isósceles tem perímetro de 32 cm e base de 10 cm. Quanto mede cada lado congruente?", ["10 cm", "11 cm", "12 cm", "16 cm"], 1, "Retire a base: 32 − 10 = 22 cm. Divida igualmente entre os dois lados: 22 ÷ 2 = 11 cm."),

  // Capítulo 9 — 8 fáceis
  gq(G9, "Segmentos e pontos notáveis nos triângulos", "Fácil", "O segmento que liga um vértice ao ponto médio do lado oposto é a:", ["Altura", "Mediana", "Bissetriz", "Mediatriz"], 1, "Mediana parte do vértice e termina no ponto médio do lado oposto."),
  gq(G9, "Segmentos e pontos notáveis nos triângulos", "Fácil", "O segmento que parte de um vértice e forma 90° com o lado oposto é a:", ["Altura", "Mediana", "Bissetriz", "Diagonal"], 0, "A altura é perpendicular ao lado oposto ou ao seu prolongamento."),
  gq(G9, "Segmentos e pontos notáveis nos triângulos", "Fácil", "A bissetriz de um ângulo:", ["Divide o lado ao meio", "Forma sempre 90°", "Divide o ângulo em duas partes iguais", "Liga dois pontos médios"], 2, "A bissetriz divide um ângulo em dois ângulos congruentes."),
  gq(G9, "Segmentos e pontos notáveis nos triângulos", "Fácil", "A mediatriz de um lado:", ["Parte obrigatoriamente do vértice", "Corta o lado ao meio formando 90°", "Divide um ângulo ao meio", "É paralela ao lado"], 1, "A mediatriz é perpendicular ao segmento e passa por seu ponto médio; não precisa passar por um vértice."),
  gq(G9, "Segmentos e pontos notáveis nos triângulos", "Fácil", "O encontro das três medianas chama-se:", ["Incentro", "Ortocentro", "Baricentro", "Circuncentro"], 2, "As três medianas encontram-se no baricentro, centro de equilíbrio do triângulo."),
  gq(G9, "Segmentos e pontos notáveis nos triângulos", "Fácil", "O encontro das três alturas é o:", ["Ortocentro", "Incentro", "Baricentro", "Circuncentro"], 0, "As alturas, ou seus prolongamentos, encontram-se no ortocentro."),
  gq(G9, "Segmentos e pontos notáveis nos triângulos", "Fácil", "O encontro das três bissetrizes internas é o:", ["Baricentro", "Incentro", "Ortocentro", "Circuncentro"], 1, "O incentro é o encontro das bissetrizes e fica à mesma distância dos três lados."),
  gq(G9, "Segmentos e pontos notáveis nos triângulos", "Fácil", "O encontro das mediatrizes dos lados é o:", ["Circuncentro", "Baricentro", "Incentro", "Ortocentro"], 0, "O circuncentro é equidistante dos três vértices e é o centro da circunferência circunscrita."),
  // Capítulo 9 — 8 médias
  gq(G9, "Segmentos e pontos notáveis nos triângulos", "Médio", "Uma mediana chega a um lado de 14 cm. Em quais medidas ela divide esse lado?", ["5 cm e 9 cm", "6 cm e 8 cm", "7 cm e 7 cm", "4 cm e 10 cm"], 2, "A mediana termina no ponto médio. Portanto, divide 14 cm em duas partes de 7 cm."),
  gq(G9, "Segmentos e pontos notáveis nos triângulos", "Médio", "Uma bissetriz divide um ângulo de 80°. Quanto mede cada parte?", ["20°", "40°", "60°", "80°"], 1, "Bissetar é dividir em duas partes iguais: 80° ÷ 2 = 40°."),
  gq(G9, "Segmentos e pontos notáveis nos triângulos", "Médio", "Qual ponto notável é o centro da circunferência inscrita no triângulo?", ["Ortocentro", "Baricentro", "Incentro", "Circuncentro"], 2, "A circunferência inscrita toca os lados. Seu centro é o incentro, encontro das bissetrizes."),
  gq(G9, "Segmentos e pontos notáveis nos triângulos", "Médio", "Qual ponto notável está à mesma distância dos três vértices?", ["Circuncentro", "Incentro", "Baricentro", "Ortocentro"], 0, "O circuncentro é o centro da circunferência que passa pelos três vértices."),
  gq(G9, "Segmentos e pontos notáveis nos triângulos", "Médio", "No triângulo equilátero, mediana, altura, bissetriz e mediatriz:", ["Nunca coincidem", "Coincidem em cada direção", "Existem apenas duas", "São sempre paralelas"], 1, "A simetria do equilátero faz esses quatro segmentos coincidirem em cada vértice."),
  gq(G9, "Segmentos e pontos notáveis nos triângulos", "Médio", "Em um triângulo retângulo, onde fica o ortocentro?", ["No ponto médio da hipotenusa", "No vértice do ângulo reto", "Sempre fora do triângulo", "No incentro"], 1, "Os dois catetos já são alturas e se encontram no vértice do ângulo de 90°."),
  gq(G9, "Segmentos e pontos notáveis nos triângulos", "Médio", "O baricentro divide cada mediana na razão:", ["1:1", "2:1, com a parte maior junto ao vértice", "3:1", "1:2, com a parte menor junto ao lado"], 1, "Do vértice ao baricentro há 2/3 da mediana; do baricentro ao lado há 1/3. A razão é 2:1."),
  gq(G9, "Segmentos e pontos notáveis nos triângulos", "Médio", "Para construir a mediatriz de um segmento com compasso, os arcos devem ter abertura:", ["Menor que a metade do segmento", "Maior que a metade do segmento", "Igual a zero", "Obrigatoriamente igual ao segmento"], 1, "A abertura maior que a metade permite que os arcos traçados a partir das extremidades se cruzem em dois pontos."),
  // Capítulo 9 — 4 difíceis
  gq(G9, "Segmentos e pontos notáveis nos triângulos", "Difícil", "Do vértice ao baricentro, uma mediana mede 10 cm. Qual é o comprimento total da mediana?", ["12 cm", "15 cm", "18 cm", "20 cm"], 1, "O trecho do vértice ao baricentro corresponde a 2/3 da mediana. Se 2/3 = 10, o total é 10 × 3 ÷ 2 = 15 cm."),
  gq(G9, "Segmentos e pontos notáveis nos triângulos", "Difícil", "Uma mediana mede 18 cm. Quanto mede o trecho entre o baricentro e o ponto médio do lado?", ["6 cm", "9 cm", "12 cm", "15 cm"], 0, "Do baricentro ao lado há 1/3 da mediana: 18 ÷ 3 = 6 cm."),
  gq(G9, "Segmentos e pontos notáveis nos triângulos", "Difícil", "Em qual tipo de triângulo o circuncentro fica fora da figura?", ["Acutângulo", "Retângulo", "Obtusângulo", "Equilátero"], 2, "No obtusângulo, o encontro das mediatrizes ocorre fora. No retângulo fica no ponto médio da hipotenusa."),
  gq(G9, "Segmentos e pontos notáveis nos triângulos", "Difícil", "Um ponto está sobre a mediatriz do segmento AB. O que se pode afirmar?", ["Está mais perto de A", "Está mais perto de B", "Está à mesma distância de A e B", "Forma sempre um triângulo equilátero"], 2, "Todo ponto da mediatriz é equidistante das extremidades do segmento: PA = PB."),

  // Capítulo 10 — 8 fáceis
  gq(G10, "Quadriláteros: propriedades, classificação e áreas", "Fácil", "A soma dos ângulos internos de um quadrilátero é:", ["180°", "270°", "360°", "540°"], 2, "Todo quadrilátero pode ser dividido em dois triângulos: 2 × 180° = 360°."),
  gq(G10, "Quadriláteros: propriedades, classificação e áreas", "Fácil", "Qual quadrilátero possui quatro lados iguais e quatro ângulos retos?", ["Losango", "Retângulo", "Quadrado", "Trapézio"], 2, "O quadrado reúne as propriedades de retângulo e losango: quatro ângulos retos e quatro lados iguais."),
  gq(G10, "Quadriláteros: propriedades, classificação e áreas", "Fácil", "Qual quadrilátero possui quatro ângulos retos, sem exigir quatro lados iguais?", ["Retângulo", "Losango", "Trapézio", "Deltoide"], 0, "O retângulo possui quatro ângulos de 90° e lados opostos congruentes."),
  gq(G10, "Quadriláteros: propriedades, classificação e áreas", "Fácil", "Um losango sempre possui:", ["Quatro lados iguais", "Quatro ângulos retos", "Apenas um par de lados paralelos", "Diagonais iguais"], 0, "O losango é um paralelogramo com quatro lados congruentes. Seus ângulos não precisam ser retos."),
  gq(G10, "Quadriláteros: propriedades, classificação e áreas", "Fácil", "Um trapézio possui:", ["Nenhum lado paralelo", "Um par de lados paralelos", "Quatro lados iguais", "Quatro ângulos retos obrigatoriamente"], 1, "A característica central do trapézio é possuir um par de lados paralelos, chamados bases."),
  gq(G10, "Quadriláteros: propriedades, classificação e áreas", "Fácil", "A área de um retângulo de base b e altura h é:", ["b + h", "2b + 2h", "b × h", "b × h ÷ 2"], 2, "A área do retângulo é o produto da base pela altura: A = b × h."),
  gq(G10, "Quadriláteros: propriedades, classificação e áreas", "Fácil", "A fórmula da área do paralelogramo é:", ["base × altura", "diagonal maior × diagonal menor", "base + altura", "lado² ÷ 2"], 0, "Recortando e deslocando uma parte, o paralelogramo forma um retângulo de mesma base e altura: A = b × h."),
  gq(G10, "Quadriláteros: propriedades, classificação e áreas", "Fácil", "As diagonais de um retângulo são sempre:", ["Perpendiculares", "Congruentes", "Bissetrizes dos ângulos", "Paralelas"], 1, "No retângulo, as diagonais têm a mesma medida e se cortam ao meio."),
  // Capítulo 10 — 8 médias
  gq(G10, "Quadriláteros: propriedades, classificação e áreas", "Médio", "Um retângulo mede 8 cm por 5 cm. Qual é sua área?", ["13 cm²", "26 cm²", "40 cm²", "80 cm²"], 2, "A = 8 × 5 = 40 cm²."),
  gq(G10, "Quadriláteros: propriedades, classificação e áreas", "Médio", "Um quadrado possui lado de 7 cm. Qual é sua área?", ["14 cm²", "28 cm²", "49 cm²", "56 cm²"], 2, "A área do quadrado é lado²: 7 × 7 = 49 cm²."),
  gq(G10, "Quadriláteros: propriedades, classificação e áreas", "Médio", "Um losango tem diagonais de 10 cm e 6 cm. Qual é sua área?", ["16 cm²", "30 cm²", "60 cm²", "120 cm²"], 1, "A = D × d ÷ 2 = 10 × 6 ÷ 2 = 30 cm²."),
  gq(G10, "Quadriláteros: propriedades, classificação e áreas", "Médio", "Um trapézio tem bases 10 cm e 6 cm e altura 4 cm. Qual é sua área?", ["24 cm²", "30 cm²", "32 cm²", "64 cm²"], 2, "A = (B + b) × h ÷ 2 = (10 + 6) × 4 ÷ 2 = 32 cm²."),
  gq(G10, "Quadriláteros: propriedades, classificação e áreas", "Médio", "Três ângulos de um quadrilátero medem 80°, 90° e 100°. O quarto mede:", ["80°", "90°", "100°", "110°"], 1, "A soma conhecida é 270°. Como o total é 360°, falta 360° − 270° = 90°."),
  gq(G10, "Quadriláteros: propriedades, classificação e áreas", "Médio", "Qual propriedade distingue o losango do quadrado?", ["O losango não precisa ter ângulos retos", "O losango não possui lados iguais", "O quadrado não tem lados paralelos", "O quadrado não é paralelogramo"], 0, "Ambos têm quatro lados iguais, mas somente o quadrado é obrigado a ter quatro ângulos retos."),
  gq(G10, "Quadriláteros: propriedades, classificação e áreas", "Médio", "Em todo paralelogramo, os lados opostos são:", ["Perpendiculares e diferentes", "Paralelos e congruentes", "Sempre diagonais", "Sem relação"], 1, "Lados opostos de um paralelogramo são paralelos e possuem a mesma medida."),
  gq(G10, "Quadriláteros: propriedades, classificação e áreas", "Médio", "As diagonais de um losango:", ["São sempre iguais", "São perpendiculares e se cortam ao meio", "Nunca se cruzam", "São lados da figura"], 1, "As diagonais do losango são perpendiculares e as duas se dividem ao meio. Elas não precisam ser congruentes."),
  // Capítulo 10 — 4 difíceis
  gq(G10, "Quadriláteros: propriedades, classificação e áreas", "Difícil", "Um trapézio tem área de 72 cm², bases de 10 cm e 14 cm. Qual é sua altura?", ["3 cm", "6 cm", "8 cm", "12 cm"], 1, "72 = (10 + 14) × h ÷ 2 = 12h. Portanto, h = 6 cm."),
  gq(G10, "Quadriláteros: propriedades, classificação e áreas", "Difícil", "Um retângulo tem área de 96 cm² e base de 12 cm. Qual é seu perímetro?", ["20 cm", "32 cm", "40 cm", "48 cm"], 2, "A altura é 96 ÷ 12 = 8 cm. O perímetro é 2 × (12 + 8) = 40 cm."),
  gq(G10, "Quadriláteros: propriedades, classificação e áreas", "Difícil", "As diagonais de um losango medem 16 cm e 12 cm. Se ambas dobrarem, a área será multiplicada por:", ["2", "3", "4", "8"], 2, "A = Dd/2. Dobrar as duas diagonais produz (2D × 2d)/2, isto é, quatro vezes a área original."),
  gq(G10, "Quadriláteros: propriedades, classificação e áreas", "Difícil", "Um paralelogramo e um retângulo possuem base 9 cm e altura 4 cm. Compare suas áreas.", ["A do retângulo é maior", "A do paralelogramo é maior", "São iguais: 36 cm²", "Não é possível comparar"], 2, "Ambos usam A = b × h. Assim, 9 × 4 = 36 cm² para cada figura."),

  // Capítulo 12 — 8 fáceis
  gq(G12, "Polígonos: classificação, ângulos, diagonais e construções", "Fácil", "Um polígono de cinco lados chama-se:", ["Quadrilátero", "Pentágono", "Hexágono", "Heptágono"], 1, "Penta indica cinco; portanto, um polígono de cinco lados é um pentágono."),
  gq(G12, "Polígonos: classificação, ângulos, diagonais e construções", "Fácil", "Um polígono de seis lados chama-se:", ["Pentágono", "Hexágono", "Octógono", "Decágono"], 1, "Hexa indica seis; por isso, a figura é um hexágono."),
  gq(G12, "Polígonos: classificação, ângulos, diagonais e construções", "Fácil", "Em um polígono regular:", ["Somente os lados são iguais", "Lados e ângulos são congruentes", "Não existem diagonais", "Todos os ângulos são retos"], 1, "Regular significa possuir todos os lados e todos os ângulos internos congruentes."),
  gq(G12, "Polígonos: classificação, ângulos, diagonais e construções", "Fácil", "Uma diagonal liga:", ["Dois vértices não consecutivos", "Dois lados paralelos", "Um vértice ao centro", "Dois pontos do mesmo lado"], 0, "Diagonal é o segmento que une dois vértices não vizinhos do polígono."),
  gq(G12, "Polígonos: classificação, ângulos, diagonais e construções", "Fácil", "Qual fórmula fornece a soma dos ângulos internos de um polígono de n lados?", ["n × 180°", "(n − 2) × 180°", "(n + 2) × 90°", "360° ÷ n"], 1, "Traçando diagonais de um vértice, o polígono é dividido em n − 2 triângulos. Cada um soma 180°."),
  gq(G12, "Polígonos: classificação, ângulos, diagonais e construções", "Fácil", "A soma dos ângulos externos, um em cada vértice de um polígono convexo, é:", ["180°", "270°", "360°", "Depende do número de lados"], 2, "Uma volta completa corresponde a 360°, independentemente da quantidade de lados."),
  gq(G12, "Polígonos: classificação, ângulos, diagonais e construções", "Fácil", "Para construir um ângulo de 90°, deve-se traçar:", ["Duas retas perpendiculares", "Duas retas paralelas", "Uma diagonal qualquer", "Um círculo sem centro"], 0, "Retas perpendiculares encontram-se formando quatro ângulos retos de 90°."),
  gq(G12, "Polígonos: classificação, ângulos, diagonais e construções", "Fácil", "Ao construir um hexágono regular inscrito em uma circunferência, o lado tem medida igual:", ["Ao diâmetro", "Ao raio", "À metade do raio", "Ao comprimento da circunferência"], 1, "No hexágono regular inscrito, cada lado é uma corda com a mesma medida do raio."),
  // Capítulo 12 — 8 médias
  gq(G12, "Polígonos: classificação, ângulos, diagonais e construções", "Médio", "Qual é a soma dos ângulos internos de um pentágono?", ["360°", "540°", "720°", "900°"], 1, "S = (5 − 2) × 180° = 3 × 180° = 540°."),
  gq(G12, "Polígonos: classificação, ângulos, diagonais e construções", "Médio", "Como construir um ângulo de 45° a partir de um ângulo reto?", ["Somando 45° ao ângulo reto", "Traçando a bissetriz do ângulo de 90°", "Dividindo 90° em três partes", "Traçando uma reta paralela"], 1, "A bissetriz divide o ângulo de 90° em duas partes iguais: 90° ÷ 2 = 45°."),
  gq(G12, "Polígonos: classificação, ângulos, diagonais e construções", "Médio", "Quanto mede cada ângulo interno de um hexágono regular?", ["60°", "90°", "120°", "135°"], 2, "A soma é 720°. Como os seis ângulos são iguais, 720° ÷ 6 = 120°."),
  gq(G12, "Polígonos: classificação, ângulos, diagonais e construções", "Médio", "Quantas diagonais possui um pentágono?", ["3", "5", "7", "10"], 1, "D = n(n − 3)/2 = 5 × 2 ÷ 2 = 5 diagonais."),
  gq(G12, "Polígonos: classificação, ângulos, diagonais e construções", "Médio", "O que diferencia um polígono não convexo de um convexo?", ["O não convexo tem uma reentrância e algum ângulo interno maior que 180°", "O convexo sempre possui quatro lados", "O não convexo possui lados curvos", "O convexo não possui diagonais"], 0, "No polígono não convexo existe uma reentrância; pelo menos um ângulo interno é maior que 180°."),
  gq(G12, "Polígonos: classificação, ângulos, diagonais e construções", "Médio", "Quanto mede cada ângulo externo de um octógono regular?", ["30°", "45°", "60°", "90°"], 1, "Em um polígono regular, cada ângulo externo mede 360° ÷ n. Assim, 360° ÷ 8 = 45°."),
  gq(G12, "Polígonos: classificação, ângulos, diagonais e construções", "Médio", "Como obter um ângulo de 30° depois de construir um de 60°?", ["Traçando sua bissetriz", "Dobrando sua medida", "Somando 90°", "Traçando uma paralela"], 0, "A bissetriz divide 60° em duas partes iguais: 60° ÷ 2 = 30°."),
  gq(G12, "Polígonos: classificação, ângulos, diagonais e construções", "Médio", "Para construir um ângulo de 60° com régua e compasso, usa-se diretamente a propriedade do:", ["Quadrado", "Triângulo equilátero", "Retângulo", "Trapézio"], 1, "Todo ângulo interno de um triângulo equilátero mede 60°. A construção usa arcos de mesmo raio."),
  // Capítulo 12 — 4 difíceis
  gq(G12, "Polígonos: classificação, ângulos, diagonais e construções", "Difícil", "A soma dos ângulos internos de um polígono é 1260°. Quantos lados ele possui?", ["7", "8", "9", "10"], 2, "(n − 2) × 180 = 1260. Então n − 2 = 7 e n = 9."),
  gq(G12, "Polígonos: classificação, ângulos, diagonais e construções", "Difícil", "Cada ângulo externo de um polígono regular mede 30°. Quantos lados ele tem?", ["10", "12", "15", "18"], 1, "O total externo é 360°. Logo, n = 360° ÷ 30° = 12 lados."),
  gq(G12, "Polígonos: classificação, ângulos, diagonais e construções", "Difícil", "Um polígono possui 20 diagonais. Quantos lados ele tem?", ["7", "8", "9", "10"], 1, "Use n(n − 3)/2 = 20. Para n = 8: 8 × 5 ÷ 2 = 20."),
  gq(G12, "Polígonos: classificação, ângulos, diagonais e construções", "Difícil", "Cada ângulo interno de um polígono regular mede 150°. Quantos lados ele possui?", ["10", "12", "15", "18"], 1, "O externo correspondente mede 180° − 150° = 30°. Assim, n = 360° ÷ 30° = 12."),

  // Revisão complementar — 8 fáceis
  gq(GR, "Áreas, capacidade e volume", "Fácil", "Qual é a unidade adequada para medir a área de uma sala?", ["Metro", "Metro quadrado", "Metro cúbico", "Litro"], 1, "Área mede superfície e usa unidades quadradas, como m²."),
  gq(GR, "Áreas, capacidade e volume", "Fácil", "Qual é a unidade adequada para o volume de uma caixa?", ["cm", "cm²", "cm³", "L²"], 2, "Volume ocupa três dimensões e usa unidades cúbicas, como cm³."),
  gq(GR, "Áreas, capacidade e volume", "Fácil", "Um litro corresponde a:", ["1 cm³", "10 cm³", "1 dm³", "1 m³"], 2, "A equivalência fundamental é 1 L = 1 dm³."),
  gq(GR, "Áreas, capacidade e volume", "Fácil", "Um metro cúbico corresponde a:", ["10 L", "100 L", "1.000 L", "10.000 L"], 2, "Como 1 m = 10 dm, então 1 m³ = 1.000 dm³ = 1.000 L."),
  gq(GR, "Áreas, capacidade e volume", "Fácil", "A fórmula do volume de um bloco retangular é:", ["comprimento + largura + altura", "comprimento × largura × altura", "base × altura ÷ 2", "2 × comprimento × largura"], 1, "Multiplicam-se as três dimensões: V = comprimento × largura × altura."),
  gq(GR, "Áreas, capacidade e volume", "Fácil", "A área de um círculo de raio r é calculada por:", ["2πr", "πr²", "πd", "r² ÷ 2"], 1, "A fórmula da área é A = πr². Não confunda com o comprimento da circunferência, 2πr."),
  gq(GR, "Áreas, capacidade e volume", "Fácil", "Um cubo de aresta 2 cm possui volume de:", ["4 cm³", "6 cm³", "8 cm³", "12 cm³"], 2, "V = 2 × 2 × 2 = 8 cm³."),
  gq(GR, "Áreas, capacidade e volume", "Fácil", "Uma caixa com volume de 5 dm³ comporta:", ["0,5 L", "5 L", "50 L", "500 L"], 1, "Como 1 dm³ = 1 L, então 5 dm³ = 5 L."),
  // Revisão complementar — 8 médias
  gq(GR, "Áreas, capacidade e volume", "Médio", "Uma caixa mede 5 cm × 4 cm × 3 cm. Qual é seu volume?", ["12 cm³", "20 cm³", "60 cm³", "120 cm³"], 2, "V = 5 × 4 × 3 = 60 cm³."),
  gq(GR, "Áreas, capacidade e volume", "Médio", "Um reservatório possui 2 m³. Quantos litros ele comporta?", ["200 L", "1.000 L", "2.000 L", "20.000 L"], 2, "Cada metro cúbico corresponde a 1.000 L. Portanto, 2 m³ = 2.000 L."),
  gq(GR, "Áreas, capacidade e volume", "Médio", "Uma caixa comporta 12 L. Qual é seu volume em dm³?", ["1,2 dm³", "12 dm³", "120 dm³", "1.200 dm³"], 1, "A equivalência é direta: 1 L = 1 dm³; logo, 12 L = 12 dm³."),
  gq(GR, "Áreas, capacidade e volume", "Médio", "Use π = 3,14. Qual é a área de um círculo de raio 2 cm?", ["6,28 cm²", "12,56 cm²", "18,84 cm²", "25,12 cm²"], 1, "A = πr² = 3,14 × 2² = 3,14 × 4 = 12,56 cm²."),
  gq(GR, "Áreas, capacidade e volume", "Médio", "Um terreno retangular mede 15 m por 8 m. Qual é sua área?", ["23 m²", "46 m²", "120 m²", "240 m²"], 2, "A = 15 × 8 = 120 m²."),
  gq(GR, "Áreas, capacidade e volume", "Médio", "Uma parede retangular de 6 m por 3 m possui uma porta de 2 m². Qual área será pintada?", ["14 m²", "16 m²", "18 m²", "20 m²"], 1, "A parede tem 6 × 3 = 18 m². Retirando a porta: 18 − 2 = 16 m²."),
  gq(GR, "Áreas, capacidade e volume", "Médio", "Um aquário mede 50 cm × 30 cm × 40 cm. Qual é o volume?", ["6.000 cm³", "12.000 cm³", "60.000 cm³", "120.000 cm³"], 2, "V = 50 × 30 × 40 = 60.000 cm³."),
  gq(GR, "Áreas, capacidade e volume", "Médio", "60.000 cm³ correspondem a quantos litros?", ["6 L", "60 L", "600 L", "6.000 L"], 1, "1 L = 1.000 cm³. Então, 60.000 ÷ 1.000 = 60 L."),
  // Revisão complementar — 4 difíceis
  gq(GR, "Áreas, capacidade e volume", "Difícil", "Uma piscina mede 5 m × 3 m × 1,5 m. Quantos litros cabem nela?", ["2.250 L", "7.500 L", "15.000 L", "22.500 L"], 3, "V = 5 × 3 × 1,5 = 22,5 m³. Multiplicando por 1.000: 22.500 L."),
  gq(GR, "Áreas, capacidade e volume", "Difícil", "Um terreno é formado por um retângulo de 10 m × 6 m e um triângulo de base 6 m e altura 4 m, sem sobreposição. Qual é a área total?", ["66 m²", "72 m²", "84 m²", "96 m²"], 1, "Retângulo: 10 × 6 = 60 m². Triângulo: 6 × 4 ÷ 2 = 12 m². Total: 72 m²."),
  gq(GR, "Áreas, capacidade e volume", "Difícil", "Uma caixa de 40 cm × 25 cm × 20 cm está com 75% de sua capacidade. Quantos litros há nela?", ["10 L", "15 L", "20 L", "25 L"], 1, "Volume total: 40 × 25 × 20 = 20.000 cm³ = 20 L. 75% de 20 L é 15 L."),
  gq(GR, "Áreas, capacidade e volume", "Difícil", "Um círculo de raio 4 m e um quadrado de lado 7 m têm áreas aproximadas. Use π = 3. Qual figura tem maior área?", ["O círculo, com 48 m²", "O quadrado, com 49 m²", "São iguais", "Não é possível calcular"], 1, "Círculo: 3 × 4² = 48 m². Quadrado: 7² = 49 m². O quadrado é maior por 1 m²."),
);
