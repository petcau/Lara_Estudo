(() => {
  const subject = "Geometria — 8º ano";
  const chapters = {
    triangles: "Capítulo 8 — Triângulos",
    segments: "Capítulo 9 — Segmentos e pontos notáveis nos triângulos",
    quadrilaterals: "Capítulo 10 — Quadriláteros",
    polygons: "Capítulo 12 — Polígonos",
    review: "Revisão complementar — Áreas, capacidade e volume",
  };
  const contents = {
    triangles: "Triângulos: classificação, propriedades, congruência e área",
    segments: "Segmentos e pontos notáveis nos triângulos",
    quadrilaterals: "Quadriláteros: propriedades, classificação e áreas",
    polygons: "Polígonos: classificação, ângulos, diagonais e construções",
    review: "Áreas, capacidade e volume",
  };
  let calculationSequence = 0;

  function valueLabel(value, unit = "") {
    return `${String(value).replace(".", ",")}${unit}`;
  }

  function addCalculationQuestion({ chapter, content, difficulty, prompt, answer, distractors, unit = "", explanation, diagram }) {
    calculationSequence += 1;
    const answerText = valueLabel(answer, unit);
    const choices = distractors.map((value) => valueLabel(value, unit));
    const correctIndex = (calculationSequence - 1) % 4;
    choices.splice(correctIndex, 0, answerText);
    perguntas.push({
      id: `geometry-calculation-${calculationSequence}`,
      materia: subject,
      aprenderId: `geo-calc-${calculationSequence}`,
      capitulo: chapter,
      conteudo: content,
      pagina: "Prova Final",
      dificuldade: difficulty,
      pergunta: prompt,
      alternativas: choices,
      correta: correctIndex,
      explicacao: explanation,
      diagrama: diagram,
      calculo: true,
    });
  }

  // Capítulo 8 — Triângulos: 8 fáceis, 8 médias e 4 difíceis.
  [
    [35, 65, 80], [42, 73, 65], [28, 92, 60], [55, 45, 80], [64, 71, 45], [30, 105, 45],
  ].forEach(([left, right, answer], index) => addCalculationQuestion({
    chapter: chapters.triangles, content: contents.triangles, difficulty: "Fácil",
    prompt: "Calcule o ângulo x indicado no triângulo.", answer, distractors: [answer - 10, answer + 10, 180 - answer], unit: "°",
    explanation: `Os ângulos internos somam 180°. Assim, x = 180° − ${left}° − ${right}° = ${answer}°.`,
    diagram: { tipo: "triangulo-angulos-calculo", angulos: [`${left}°`, "x", `${right}°`], forma: [left, answer, right] },
  }));
  [[12, 5, 30], [9, 8, 36]].forEach(([base, height, answer]) => addCalculationQuestion({
    chapter: chapters.triangles, content: contents.triangles, difficulty: "Fácil",
    prompt: "Qual é a área do triângulo representado?", answer, distractors: [base + height, base * height, answer + 20], unit: " cm²",
    explanation: `Use A = base × altura ÷ 2. A = ${base} × ${height} ÷ 2 = ${answer} cm².`,
    diagram: { tipo: "triangulo-area", base: `${base} cm`, altura: `${height} cm` },
  }));
  [[47, 68, 65], [75, 35, 70]].forEach(([left, right, answer]) => addCalculationQuestion({
    chapter: chapters.triangles, content: contents.triangles, difficulty: "Médio",
    prompt: "Determine o valor de x.", answer, distractors: [answer - 15, answer + 15, left + right], unit: "°",
    explanation: `x completa os 180° do triângulo: x = 180° − (${left}° + ${right}°) = ${answer}°.`,
    diagram: { tipo: "triangulo-angulos-calculo", angulos: [`${left}°`, "x", `${right}°`], forma: [left, answer, right] },
  }));
  [[15, 6, 45], [18, 7, 63]].forEach(([base, height, answer]) => addCalculationQuestion({
    chapter: chapters.triangles, content: contents.triangles, difficulty: "Médio",
    prompt: "Calcule a área da região triangular.", answer, distractors: [base * height, answer - 9, answer + 15], unit: " cm²",
    explanation: `A = ${base} × ${height} ÷ 2 = ${base * height} ÷ 2 = ${answer} cm².`,
    diagram: { tipo: "triangulo-area", base: `${base} cm`, altura: `${height} cm` },
  }));
  [[48, 12, 8], [70, 14, 10]].forEach(([area, base, answer]) => addCalculationQuestion({
    chapter: chapters.triangles, content: contents.triangles, difficulty: "Médio",
    prompt: `A área é ${area} cm². Encontre a altura x.`, answer, distractors: [area / base, answer + 2, answer * 2], unit: " cm",
    explanation: `${area} = ${base} × x ÷ 2. Logo, ${base}x = ${area * 2} e x = ${answer} cm.`,
    diagram: { tipo: "triangulo-area", base: `${base} cm`, altura: "x" },
  }));
  [[40, 70], [32, 74]].forEach(([vertex, answer]) => addCalculationQuestion({
    chapter: chapters.triangles, content: contents.triangles, difficulty: "Médio",
    prompt: "O triângulo é isósceles. Quanto mede cada ângulo x da base?", answer, distractors: [vertex, 90 - vertex, answer + 10], unit: "°",
    explanation: `Os dois ângulos da base são iguais. Restam 180° − ${vertex}° = ${180 - vertex}°; dividindo por 2, x = ${answer}°.`,
    diagram: { tipo: "triangulo-isosceles", vertice: `${vertex}°`, esquerda: "x", direita: "x" },
  }));
  [[1, 2, 3, 30, 90], [2, 3, 4, 20, 80]].forEach(([a, b, c, x, answer]) => addCalculationQuestion({
    chapter: chapters.triangles, content: contents.triangles, difficulty: "Difícil",
    prompt: `Os ângulos medem ${a}x, ${b}x e ${c}x. Qual é o maior ângulo?`, answer, distractors: [x, b * x, answer + x], unit: "°",
    explanation: `${a}x + ${b}x + ${c}x = 180°. Então ${a + b + c}x = 180° e x = ${x}°. O maior ângulo é ${c}x = ${answer}°.`,
    diagram: { tipo: "triangulo-angulos-calculo", angulos: [`${a}x`, `${b}x`, `${c}x`], forma: [a * x, b * x, c * x] },
  }));
  addCalculationQuestion({ chapter: chapters.triangles, content: contents.triangles, difficulty: "Difícil",
    prompt: "O ângulo externo x é igual à soma dos dois internos não adjacentes. Calcule x.", answer: 123, distractors: [57, 67, 113], unit: "°",
    explanation: "Ângulo externo = 48° + 75° = 123°.", diagram: { tipo: "triangulo-externo", internos: ["48°", "75°"], externo: "x" } });
  addCalculationQuestion({ chapter: chapters.triangles, content: contents.triangles, difficulty: "Difícil",
    prompt: "O perímetro do triângulo isósceles é 38 cm. Calcule cada lado x.", answer: 14, distractors: [10, 19, 24], unit: " cm",
    explanation: "Retire a base: 38 − 10 = 28 cm. Os dois lados iguais medem 28 ÷ 2 = 14 cm.", diagram: { tipo: "triangulo-isosceles", esquerda: "x", direita: "x", base: "10 cm · P = 38 cm" } });

  // Capítulo 9 — Segmentos e pontos notáveis: 8 fáceis, 8 médias e 4 difíceis.
  [[12, 6], [18, 9], [24, 12], [30, 15]].forEach(([total, answer]) => addCalculationQuestion({
    chapter: chapters.segments, content: contents.segments, difficulty: "Fácil", prompt: `A mediana encontra o ponto médio de um lado de ${total} cm. Quanto mede x?`,
    answer, distractors: [answer - 2, answer + 2, total], unit: " cm", explanation: `A mediana divide o lado ao meio: ${total} ÷ 2 = ${answer} cm.`,
    diagram: { tipo: "mediana", partes: ["x", "x"], total: `${total} cm` },
  }));
  [[64, 32], [78, 39], [96, 48], [110, 55]].forEach(([total, answer]) => addCalculationQuestion({
    chapter: chapters.segments, content: contents.segments, difficulty: "Fácil", prompt: `A bissetriz divide um ângulo de ${total}°. Calcule x.`,
    answer, distractors: [answer - 10, answer + 10, total], unit: "°", explanation: `A bissetriz divide em duas partes iguais: x = ${total}° ÷ 2 = ${answer}°.`,
    diagram: { tipo: "bissetriz", partes: ["x", "x"], total: `${total}°` },
  }));
  [[18, 12, 6], [24, 16, 8], [30, 20, 10], [21, 14, 7]].forEach(([total, vg, gm], index) => addCalculationQuestion({
    chapter: chapters.segments, content: contents.segments, difficulty: "Médio",
    prompt: index % 2 === 0 ? `A mediana inteira mede ${total} cm. Calcule o trecho do baricentro ao ponto médio.` : `A mediana inteira mede ${total} cm. Calcule o trecho do vértice ao baricentro.`,
    answer: index % 2 === 0 ? gm : vg, distractors: index % 2 === 0 ? [vg, total / 2, gm + 7] : [gm, total / 2, vg + 4], unit: " cm",
    explanation: index % 2 === 0 ? `Do baricentro ao ponto médio há 1/3 da mediana: ${total} ÷ 3 = ${gm} cm.` : `Do vértice ao baricentro há 2/3 da mediana: ${total} × 2 ÷ 3 = ${vg} cm.`,
    diagram: { tipo: "baricentro", vg: index % 2 === 0 ? "2 partes" : "x", gm: index % 2 === 0 ? "x" : "1 parte", total: `${total} cm` },
  }));
  [[8, 12], [10, 15], [14, 21], [16, 24]].forEach(([gm, total]) => addCalculationQuestion({
    chapter: chapters.segments, content: contents.segments, difficulty: "Médio", prompt: `O trecho do baricentro ao ponto médio mede ${gm} cm. Qual é a mediana inteira?`,
    answer: total, distractors: [gm * 2, gm + 2, gm * 4], unit: " cm", explanation: `Esse trecho é 1/3 da mediana. Portanto, a mediana mede ${gm} × 3 = ${total} cm.`,
    diagram: { tipo: "baricentro", vg: "2x", gm: `${gm} cm` },
  }));
  [
    ["2x + 3", "x + 10", 7], ["3x − 2", "x + 12", 7], ["4x − 5", "2x + 9", 7], ["5x − 8", "3x + 10", 9],
  ].forEach(([pa, pb, answer]) => addCalculationQuestion({
    chapter: chapters.segments, content: contents.segments, difficulty: "Difícil", prompt: "O ponto P está na mediatriz de AB, portanto PA = PB. Calcule x.",
    answer, distractors: [answer - 2, answer + 2, answer * 2], unit: "", explanation: `Iguale as distâncias: ${pa} = ${pb}. Resolvendo a equação, x = ${answer}.`,
    diagram: { tipo: "mediatriz", distancias: [pa, pb] },
  }));

  // Capítulo 10 — Quadriláteros: 8 fáceis, 8 médias e 4 difíceis.
  [[8, 5, 40], [12, 4, 48], [9, 7, 63], [15, 6, 90]].forEach(([base, height, answer]) => addCalculationQuestion({
    chapter: chapters.quadrilaterals, content: contents.quadrilaterals, difficulty: "Fácil", prompt: "Calcule a área do retângulo.", answer,
    distractors: [base + height, 2 * (base + height), answer * 2], unit: " cm²", explanation: `A = base × altura = ${base} × ${height} = ${answer} cm².`, diagram: { tipo: "retangulo", base: `${base} cm`, altura: `${height} cm` },
  }));
  [[6, 36], [9, 81]].forEach(([side, answer]) => addCalculationQuestion({
    chapter: chapters.quadrilaterals, content: contents.quadrilaterals, difficulty: "Fácil", prompt: "Calcule a área do quadrado.", answer,
    distractors: [side * 2, side * 4, answer + side], unit: " cm²", explanation: `A = lado² = ${side} × ${side} = ${answer} cm².`, diagram: { tipo: "quadrado", lado: `${side} cm` },
  }));
  [[70, 110, 70, 110], [82, 98, 82, 98]].forEach(([a, b, c, answer]) => addCalculationQuestion({
    chapter: chapters.quadrilaterals, content: contents.quadrilaterals, difficulty: "Fácil", prompt: "A soma interna do quadrilátero é 360°. Calcule x.", answer,
    distractors: [answer - 10, answer + 10, 360 - answer], unit: "°", explanation: `x = 360° − (${a}° + ${b}° + ${c}°) = ${answer}°.`, diagram: { tipo: "quadrilatero-angulos-calculo", angulos: [`${a}°`, `${b}°`, `${c}°`, "x"] },
  }));
  [[14, 8, 5, 55], [18, 10, 6, 84], [20, 12, 7, 112], [16, 6, 8, 88]].forEach(([big, small, height, answer]) => addCalculationQuestion({
    chapter: chapters.quadrilaterals, content: contents.quadrilaterals, difficulty: "Médio", prompt: "Calcule a área do trapézio.", answer,
    distractors: [big * height, small * height, answer * 2], unit: " cm²", explanation: `A = (${big} + ${small}) × ${height} ÷ 2 = ${answer} cm².`, diagram: { tipo: "trapezio-calculo", baseMaior: `${big} cm`, baseMenor: `${small} cm`, altura: `${height} cm` },
  }));
  [[12, 8, 48], [16, 10, 80], [18, 12, 108], [20, 14, 140]].forEach(([big, small, answer]) => addCalculationQuestion({
    chapter: chapters.quadrilaterals, content: contents.quadrilaterals, difficulty: "Médio", prompt: "Calcule a área do losango pelas diagonais.", answer,
    distractors: [big + small, big * small, answer + small], unit: " cm²", explanation: `A = D × d ÷ 2 = ${big} × ${small} ÷ 2 = ${answer} cm².`, diagram: { tipo: "losango-calculo", diagonalMaior: `${big} cm`, diagonalMenor: `${small} cm` },
  }));
  addCalculationQuestion({ chapter: chapters.quadrilaterals, content: contents.quadrilaterals, difficulty: "Difícil", prompt: "A área do retângulo é 108 cm². Encontre a altura x.", answer: 9, distractors: [6, 12, 18], unit: " cm", explanation: "108 = 12 × x. Logo, x = 108 ÷ 12 = 9 cm.", diagram: { tipo: "retangulo", base: "12 cm", altura: "x", interno: "A = 108 cm²" } });
  addCalculationQuestion({ chapter: chapters.quadrilaterals, content: contents.quadrilaterals, difficulty: "Difícil", prompt: "A área do trapézio é 96 cm². Calcule a altura x.", answer: 8, distractors: [4, 6, 12], unit: " cm", explanation: "96 = (16 + 8) × x ÷ 2 = 12x. Portanto, x = 8 cm.", diagram: { tipo: "trapezio-calculo", baseMaior: "16 cm", baseMenor: "8 cm", altura: "x" } });
  addCalculationQuestion({ chapter: chapters.quadrilaterals, content: contents.quadrilaterals, difficulty: "Difícil", prompt: "A área do losango é 120 cm² e a diagonal maior mede 20 cm. Calcule a diagonal x.", answer: 12, distractors: [6, 10, 24], unit: " cm", explanation: "120 = 20 × x ÷ 2 = 10x. Assim, x = 12 cm.", diagram: { tipo: "losango-calculo", diagonalMaior: "20 cm", diagonalMenor: "x" } });
  addCalculationQuestion({ chapter: chapters.quadrilaterals, content: contents.quadrilaterals, difficulty: "Difícil", prompt: "O paralelogramo tem área de 126 cm². Calcule a base x.", answer: 18, distractors: [9, 14, 21], unit: " cm", explanation: "126 = x × 7. Portanto, x = 126 ÷ 7 = 18 cm.", diagram: { tipo: "paralelogramo", base: "x", altura: "7 cm" } });

  // Capítulo 12 — Polígonos: 8 fáceis, 8 médias e 4 difíceis.
  [[5, 540], [6, 720], [7, 900], [8, 1080]].forEach(([n, answer]) => addCalculationQuestion({
    chapter: chapters.polygons, content: contents.polygons, difficulty: "Fácil", prompt: `Calcule a soma dos ângulos internos do polígono de ${n} lados.`, answer,
    distractors: [answer - 180, answer + 180, n * 180], unit: "°", explanation: `S = (n − 2) × 180° = (${n} − 2) × 180° = ${answer}°.`, diagram: { tipo: "poligono-calculo", n, centro: `${n} lados`, detalhe: "S = ?" },
  }));
  [[5, 72], [6, 60], [8, 45], [10, 36]].forEach(([n, answer]) => addCalculationQuestion({
    chapter: chapters.polygons, content: contents.polygons, difficulty: "Fácil", prompt: `Quanto mede cada ângulo externo do polígono regular de ${n} lados?`, answer,
    distractors: [answer - 12, answer + 18, 180 - answer], unit: "°", explanation: `Cada externo = 360° ÷ ${n} = ${answer}°.`, diagram: { tipo: "poligono-calculo", n, centro: `${n} lados`, detalhe: "externo = x" },
  }));
  [[5, 108], [6, 120], [8, 135], [10, 144]].forEach(([n, answer]) => addCalculationQuestion({
    chapter: chapters.polygons, content: contents.polygons, difficulty: "Médio", prompt: `Calcule cada ângulo interno do polígono regular de ${n} lados.`, answer,
    distractors: [180 - answer, answer - 18, answer + 18], unit: "°", explanation: `O externo mede 360° ÷ ${n} = ${360 / n}°. O interno é 180° − ${360 / n}° = ${answer}°.`, diagram: { tipo: "poligono-calculo", n, centro: `${n} lados`, detalhe: "interno = x" },
  }));
  [[5, 5], [6, 9], [7, 14], [9, 27]].forEach(([n, answer]) => addCalculationQuestion({
    chapter: chapters.polygons, content: contents.polygons, difficulty: "Médio", prompt: `Quantas diagonais possui o polígono de ${n} lados?`, answer,
    distractors: [answer - 2, n * (n - 3), answer + n + 1], unit: " diagonais", explanation: `D = n(n − 3) ÷ 2 = ${n} × ${n - 3} ÷ 2 = ${answer}.`, diagram: { tipo: "poligono-calculo", n, centro: `${n} lados`, detalhe: "D = ?" },
  }));
  addCalculationQuestion({ chapter: chapters.polygons, content: contents.polygons, difficulty: "Difícil", prompt: "A soma interna é 1.260°. Quantos lados tem o polígono?", answer: 9, distractors: [7, 8, 10], unit: " lados", explanation: "(n − 2) × 180 = 1.260. Então n − 2 = 7 e n = 9.", diagram: { tipo: "poligono-calculo", n: 9, ocultarLados: true, centro: "n lados", detalhe: "S = 1.260°" } });
  addCalculationQuestion({ chapter: chapters.polygons, content: contents.polygons, difficulty: "Difícil", prompt: "Cada ângulo externo mede 24°. Quantos lados tem o polígono regular?", answer: 15, distractors: [12, 18, 24], unit: " lados", explanation: "n = 360° ÷ 24° = 15 lados.", diagram: { tipo: "poligono-calculo", n: 15, ocultarLados: true, centro: "n lados", detalhe: "externo = 24°" } });
  addCalculationQuestion({ chapter: chapters.polygons, content: contents.polygons, difficulty: "Difícil", prompt: "Cada ângulo interno mede 156°. Quantos lados tem o polígono regular?", answer: 15, distractors: [12, 18, 24], unit: " lados", explanation: "O externo mede 180° − 156° = 24°. Logo, n = 360° ÷ 24° = 15.", diagram: { tipo: "poligono-calculo", n: 15, ocultarLados: true, centro: "n lados", detalhe: "interno = 156°" } });
  addCalculationQuestion({ chapter: chapters.polygons, content: contents.polygons, difficulty: "Difícil", prompt: "O polígono possui 35 diagonais. Quantos lados ele tem?", answer: 10, distractors: [8, 9, 12], unit: " lados", explanation: "Resolva n(n − 3) ÷ 2 = 35. Para n = 10: 10 × 7 ÷ 2 = 35.", diagram: { tipo: "poligono-calculo", n: 10, ocultarLados: true, centro: "n lados", detalhe: "D = 35" } });

  // Revisão — Áreas, capacidade e volume: 8 fáceis, 8 médias e 4 difíceis.
  [[5, 4, 3, 60], [8, 3, 2, 48], [6, 5, 4, 120], [10, 4, 2, 80]].forEach(([length, width, height, answer]) => addCalculationQuestion({
    chapter: chapters.review, content: contents.review, difficulty: "Fácil", prompt: "Calcule o volume do bloco retangular.", answer,
    distractors: [length * width, length + width + height, answer * 2], unit: " cm³", explanation: `V = ${length} × ${width} × ${height} = ${answer} cm³.`, diagram: { tipo: "bloco", comprimento: `${length} cm`, largura: `${width} cm`, altura: `${height} cm` },
  }));
  [[3, 27], [4, 64]].forEach(([edge, answer]) => addCalculationQuestion({
    chapter: chapters.review, content: contents.review, difficulty: "Fácil", prompt: "Calcule o volume do cubo.", answer,
    distractors: [edge * edge, edge * 5, answer + edge], unit: " cm³", explanation: `V = aresta³ = ${edge} × ${edge} × ${edge} = ${answer} cm³.`, diagram: { tipo: "cubo", aresta: `${edge} cm` },
  }));
  [[3, 28.26], [5, 78.5]].forEach(([radius, answer]) => addCalculationQuestion({
    chapter: chapters.review, content: contents.review, difficulty: "Fácil", prompt: "Use π = 3,14 e calcule a área do círculo.", answer,
    distractors: [radius * 6.28, radius * radius, answer * 2], unit: " cm²", explanation: `A = πr² = 3,14 × ${radius}² = ${valueLabel(answer)} cm².`, diagram: { tipo: "circulo-calculo", raio: `r = ${radius} cm` },
  }));
  [[50, 30, 20, 30], [40, 25, 20, 20], [60, 40, 25, 60], [80, 50, 25, 100]].forEach(([length, width, height, answer]) => addCalculationQuestion({
    chapter: chapters.review, content: contents.review, difficulty: "Médio", prompt: "Calcule a capacidade da caixa em litros.", answer,
    distractors: [answer / 10, answer * 10, answer + 20], unit: " L", explanation: `Volume = ${length} × ${width} × ${height} = ${length * width * height} cm³. Dividindo por 1.000, obtemos ${answer} L.`, diagram: { tipo: "bloco", comprimento: `${length} cm`, largura: `${width} cm`, altura: `${height} cm` },
  }));
  [[4, 50.24], [6, 113.04], [8, 200.96], [10, 314]].forEach(([radius, answer]) => addCalculationQuestion({
    chapter: chapters.review, content: contents.review, difficulty: "Médio", prompt: "Use π = 3,14 e encontre a área do círculo.", answer,
    distractors: [radius * 6.28, answer / 2 + 1, answer + 31.4], unit: " cm²", explanation: `A = 3,14 × ${radius}² = ${valueLabel(answer)} cm².`, diagram: { tipo: "circulo-calculo", raio: `r = ${radius} cm` },
  }));
  addCalculationQuestion({ chapter: chapters.review, content: contents.review, difficulty: "Difícil", prompt: "Uma placa retangular possui um recorte. Calcule a área restante.", answer: 104, distractors: [96, 112, 120], unit: " cm²", explanation: "Área externa: 14 × 8 = 112 cm². Recorte: 4 × 2 = 8 cm². Restante: 112 − 8 = 104 cm².", diagram: { tipo: "area-composta-calculo", base: "14 cm", altura: "8 cm", recorte: "4 × 2 cm" } });
  addCalculationQuestion({ chapter: chapters.review, content: contents.review, difficulty: "Difícil", prompt: "Calcule a área da parede que será pintada, descontando a abertura.", answer: 27, distractors: [24, 30, 33], unit: " m²", explanation: "Parede: 8 × 4 = 32 m². Abertura: 2,5 × 2 = 5 m². Área pintada: 32 − 5 = 27 m².", diagram: { tipo: "area-composta-calculo", base: "8 m", altura: "4 m", recorte: "2,5 × 2 m" } });
  addCalculationQuestion({ chapter: chapters.review, content: contents.review, difficulty: "Difícil", prompt: "O reservatório de 80 L está 75% cheio. Quantos litros há nele?", answer: 60, distractors: [20, 40, 75], unit: " L", explanation: "75% = 0,75. Então 0,75 × 80 = 60 L.", diagram: { tipo: "reservatorio", nivelY: 75, percentual: "75%", capacidade: "capacidade: 80 L" } });
  addCalculationQuestion({ chapter: chapters.review, content: contents.review, difficulty: "Difícil", prompt: "O reservatório de 120 L está 40% cheio. Quantos litros faltam para completar?", answer: 72, distractors: [48, 60, 80], unit: " L", explanation: "Há 40% de 120 = 48 L. Faltam 120 − 48 = 72 L.", diagram: { tipo: "reservatorio", nivelY: 138, percentual: "40%", capacidade: "capacidade: 120 L" } });

  if (calculationSequence !== 100) {
    throw new Error(`Esperadas 100 questões de cálculo de geometria; foram criadas ${calculationSequence}.`);
  }
  const calculationQuestions = perguntas.filter((question) => question.id?.startsWith("geometry-calculation-"));
  calculationQuestions.forEach((question) => {
    if (!question.diagrama) throw new Error(`${question.id}: questão de cálculo sem desenho.`);
    if (question.alternativas.length !== 4 || new Set(question.alternativas).size !== 4) {
      throw new Error(`${question.id}: as quatro alternativas precisam ser diferentes.`);
    }
    if (question.correta < 0 || question.correta > 3) throw new Error(`${question.id}: índice da resposta inválido.`);
  });
  Object.values(chapters).forEach((chapter) => {
    const chapterQuestions = calculationQuestions.filter((question) => question.capitulo === chapter);
    const distribution = ["Fácil", "Médio", "Difícil"].map((level) => chapterQuestions.filter((question) => question.dificuldade === level).length);
    if (chapterQuestions.length !== 20 || distribution.join(",") !== "8,8,4") {
      throw new Error(`${chapter}: distribuição esperada 20 questões (8 fáceis, 8 médias e 4 difíceis).`);
    }
  });
})();
