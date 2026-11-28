const screens = document.querySelectorAll(".screen");
const welcomeScreen = document.querySelector("#welcome-screen");
const setupScreen = document.querySelector("#setup-screen");
const emptyScreen = document.querySelector("#empty-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");
const performanceScreen = document.querySelector("#performance-screen");
const startButton = document.querySelector("#start-button");
const beginQuizButton = document.querySelector("#begin-quiz-button");
const materialStatus = document.querySelector("#material-status");
const subjectOptions = document.querySelector("#subject-options");
const chapterOptions = document.querySelector("#chapter-options");
const contentSelect = document.querySelector("#content-select");
const difficultyField = document.querySelector("#difficulty-field");
const difficultyButtons = document.querySelectorAll("[data-difficulty]");
const portugueseGuide = document.querySelector("#portuguese-guide");
const availableCount = document.querySelector("#available-count");
const amountButtons = document.querySelectorAll("[data-amount]");
const questionCounter = document.querySelector("#question-counter");
const correctCount = document.querySelector("#correct-count");
const wrongCount = document.querySelector("#wrong-count");
const progressBar = document.querySelector("#progress-bar");
const questionSubject = document.querySelector("#question-subject");
const questionDifficulty = document.querySelector("#question-difficulty");
const questionChapter = document.querySelector("#question-chapter");
const questionContent = document.querySelector("#question-content");
const sourceText = document.querySelector("#source-text");
const sourceTextContent = document.querySelector("#source-text-content");
const questionText = document.querySelector("#question-text");
const questionGeometry = document.querySelector("#question-geometry");
const answerList = document.querySelector("#answer-list");
const feedback = document.querySelector("#feedback");
const nextButton = document.querySelector("#next-button");
const learnButton = document.querySelector("#learn-button");
const closeLearnButton = document.querySelector("#close-learn-button");
const learnPanel = document.querySelector("#learn-panel");
const learnKicker = document.querySelector("#learn-kicker");
const learnTitle = document.querySelector("#learn-title");
const learnIntro = document.querySelector("#learn-intro");
const learnIllustration = document.querySelector("#learn-illustration");
const learnDiagram = document.querySelector("#learn-diagram");
const learnSections = document.querySelector("#learn-sections");
const scoreValue = document.querySelector("#score-value");
const wrongScoreValue = document.querySelector("#wrong-score-value");
const resultMessage = document.querySelector("#result-message");
const restartButton = document.querySelector("#restart-button");
const performanceSubjects = document.querySelector("#performance-subjects");
const performanceAnswered = document.querySelector("#performance-answered");
const performanceTotal = document.querySelector("#performance-total");
const performanceCorrect = document.querySelector("#performance-correct");
const performanceWrong = document.querySelector("#performance-wrong");
const performanceRate = document.querySelector("#performance-rate");
const performanceAttempts = document.querySelector("#performance-attempts");
const performanceContentFilter = document.querySelector("#performance-content-filter");
const performanceStatusFilter = document.querySelector("#performance-status-filter");
const performanceSearch = document.querySelector("#performance-search");
const performanceListTitle = document.querySelector("#performance-list-title");
const performanceVisibleCount = document.querySelector("#performance-visible-count");
const performanceQuestionList = document.querySelector("#performance-question-list");
const performanceEmpty = document.querySelector("#performance-empty");

const ALL = "__all";
const PORTUGUESE_SUBJECT = "Português — 8º ano";
const GEOMETRY_SUBJECT = "Geometria — 8º ano";
const STORAGE_KEY = "estuda-plus-quiz-progress-v1";
const PERFORMANCE_STORAGE_KEY = "estuda-plus-question-performance-v1";
let selectedSubject = ALL;
let selectedChapters = new Set();
let selectedDifficulty = ALL;
let selectedAmount = "all";
let quizQuestions = [];
let currentQuestion = 0;
let selectedAnswer = null;
let score = 0;
let wrongAnswers = 0;
let answerConfirmed = false;
let selectedPerformanceSubject = unique(perguntas.map((question) => question.materia))[0] || "";
let performanceData = loadPerformanceData();

function showScreen(screen) {
  screens.forEach((item) => item.classList.remove("is-active"));
  screen.classList.add("is-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function unique(values) {
  return [...new Set(values)];
}

function addOption(select, value, label) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = label;
  select.appendChild(option);
}

function getQuestionPerformanceId(question) {
  return question.id || [question.materia, question.capitulo, question.conteudo, question.pergunta].join("|||" );
}

function getQuestionStorageId(question) {
  return question.id || question.pergunta;
}

function loadPerformanceData() {
  try {
    const saved = JSON.parse(localStorage.getItem(PERFORMANCE_STORAGE_KEY));
    if (saved?.version === 1 && saved.questions && typeof saved.questions === "object") {
      return saved;
    }
  } catch {
    // Um histórico inválido é substituído por uma estrutura vazia.
  }

  return { version: 1, questions: {} };
}

function savePerformanceData() {
  try {
    localStorage.setItem(PERFORMANCE_STORAGE_KEY, JSON.stringify(performanceData));
  } catch {
    // O quiz continua funcionando mesmo se o navegador bloquear o armazenamento local.
  }
}

function getQuestionPerformance(question) {
  return performanceData.questions[getQuestionPerformanceId(question)] || {
    attempts: 0,
    correct: 0,
    wrong: 0,
    lastCorrect: null,
    lastAnsweredAt: null,
  };
}

function recordQuestionPerformance(question, isCorrect) {
  const id = getQuestionPerformanceId(question);
  const current = getQuestionPerformance(question);
  performanceData.questions[id] = {
    attempts: current.attempts + 1,
    correct: current.correct + (isCorrect ? 1 : 0),
    wrong: current.wrong + (isCorrect ? 0 : 1),
    lastCorrect: isCorrect,
    lastAnsweredAt: new Date().toISOString(),
  };
  savePerformanceData();
}

function getPerformanceStatus(stats) {
  if (!stats.attempts) return "unanswered";
  const rate = stats.correct / stats.attempts;
  if (rate >= 0.8) return "mastered";
  if (rate < 0.6) return "review";
  return "practicing";
}

function getPerformanceStatusLabel(status) {
  return {
    unanswered: "Não respondida",
    mastered: "Bom desempenho",
    review: "Precisa revisar",
    practicing: "Em progresso",
  }[status];
}

function createPerformanceSubjectButtons() {
  const subjects = unique(perguntas.map((question) => question.materia));
  if (!subjects.includes(selectedPerformanceSubject)) {
    selectedPerformanceSubject = subjects[0] || "";
  }

  performanceSubjects.replaceChildren();
  subjects.forEach((subject) => {
    const button = document.createElement("button");
    const isSelected = subject === selectedPerformanceSubject;
    button.type = "button";
    button.textContent = subject;
    button.dataset.performanceSubject = subject;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", String(isSelected));
    button.addEventListener("click", () => {
      selectedPerformanceSubject = subject;
      performanceContentFilter.value = ALL;
      createPerformanceSubjectButtons();
      populatePerformanceContents();
      renderPerformance();
    });
    performanceSubjects.appendChild(button);
  });
}

function populatePerformanceContents() {
  const questions = perguntas.filter((question) => question.materia === selectedPerformanceSubject);
  const previousValue = performanceContentFilter.value || ALL;
  performanceContentFilter.replaceChildren();
  addOption(performanceContentFilter, ALL, "Todos os conteúdos");
  unique(questions.map((question) => question.conteudo)).forEach((content) => {
    addOption(performanceContentFilter, content, content);
  });
  performanceContentFilter.value = [...performanceContentFilter.options]
    .some((option) => option.value === previousValue) ? previousValue : ALL;
}

function createMetric(label, value, modifier = "") {
  const metric = document.createElement("div");
  metric.className = `question-metric ${modifier}`.trim();
  const strong = document.createElement("strong");
  const span = document.createElement("span");
  strong.textContent = value;
  span.textContent = label;
  metric.append(strong, span);
  return metric;
}

function createPerformanceQuestionCard(question) {
  const stats = getQuestionPerformance(question);
  const rate = stats.attempts ? Math.round((stats.correct / stats.attempts) * 100) : 0;
  const status = getPerformanceStatus(stats);
  const card = document.createElement("article");
  card.className = "performance-question-card";

  const top = document.createElement("div");
  top.className = "performance-question-top";
  const taxonomy = document.createElement("div");
  taxonomy.className = "performance-question-taxonomy";
  [question.capitulo, question.conteudo].forEach((text) => {
    const span = document.createElement("span");
    span.textContent = text;
    taxonomy.appendChild(span);
  });
  if (question.dificuldade) {
    const difficulty = document.createElement("span");
    difficulty.className = "performance-difficulty";
    difficulty.dataset.level = question.dificuldade;
    difficulty.textContent = question.dificuldade;
    taxonomy.appendChild(difficulty);
  }
  const statusBadge = document.createElement("strong");
  statusBadge.className = "performance-status";
  statusBadge.dataset.status = status;
  statusBadge.textContent = getPerformanceStatusLabel(status);
  top.append(taxonomy, statusBadge);

  const title = document.createElement("h4");
  title.textContent = question.pergunta;

  const metrics = document.createElement("div");
  metrics.className = "question-metrics";
  metrics.append(
    createMetric("tentativas", stats.attempts),
    createMetric("acertos", stats.correct, "question-metric--correct"),
    createMetric("erros", stats.wrong, "question-metric--wrong"),
    createMetric("aproveitamento", `${rate}%`, "question-metric--rate"),
  );

  const rateBar = document.createElement("div");
  rateBar.className = "question-rate-bar";
  rateBar.setAttribute("aria-label", `${rate}% de aproveitamento`);
  const rateFill = document.createElement("span");
  rateFill.style.width = `${rate}%`;
  rateBar.appendChild(rateFill);

  const details = document.createElement("details");
  details.className = "performance-answer-details";
  const summary = document.createElement("summary");
  summary.textContent = "Ver resposta e explicação";
  const correctAnswer = document.createElement("p");
  const correctLabel = document.createElement("strong");
  correctLabel.textContent = "Resposta correta: ";
  correctAnswer.append(correctLabel, document.createTextNode(question.alternativas[question.correta]));
  const explanation = document.createElement("p");
  explanation.textContent = question.explicacao;
  details.append(summary, correctAnswer, explanation);

  card.append(top, title, metrics, rateBar, details);
  return card;
}

function renderPerformance() {
  performanceData = loadPerformanceData();
  const subjectQuestions = perguntas.filter((question) => question.materia === selectedPerformanceSubject);
  const subjectStats = subjectQuestions.map((question) => getQuestionPerformance(question));
  const answered = subjectStats.filter((stats) => stats.attempts > 0).length;
  const attempts = subjectStats.reduce((total, stats) => total + stats.attempts, 0);
  const correct = subjectStats.reduce((total, stats) => total + stats.correct, 0);
  const wrong = subjectStats.reduce((total, stats) => total + stats.wrong, 0);
  const rate = attempts ? Math.round((correct / attempts) * 100) : 0;

  performanceAnswered.textContent = answered;
  performanceTotal.textContent = `de ${subjectQuestions.length} questões`;
  performanceCorrect.textContent = correct;
  performanceWrong.textContent = wrong;
  performanceRate.textContent = `${rate}%`;
  performanceAttempts.textContent = `${attempts} ${attempts === 1 ? "tentativa" : "tentativas"}`;
  performanceListTitle.textContent = selectedPerformanceSubject;

  const normalizedSearch = performanceSearch.value.trim().toLocaleLowerCase("pt-BR");
  const filtered = subjectQuestions.filter((question) => {
    const stats = getQuestionPerformance(question);
    const status = getPerformanceStatus(stats);
    const contentMatches = performanceContentFilter.value === ALL
      || question.conteudo === performanceContentFilter.value;
    const statusMatches = performanceStatusFilter.value === ALL
      || (performanceStatusFilter.value === "answered" && stats.attempts > 0)
      || status === performanceStatusFilter.value;
    const searchableText = `${question.pergunta} ${question.conteudo} ${question.capitulo}`
      .toLocaleLowerCase("pt-BR");
    return contentMatches && statusMatches && searchableText.includes(normalizedSearch);
  });

  performanceVisibleCount.textContent = `${filtered.length} ${filtered.length === 1 ? "questão" : "questões"}`;
  performanceQuestionList.replaceChildren(...filtered.map(createPerformanceQuestionCard));
  performanceEmpty.hidden = filtered.length > 0;
}

function openPerformance() {
  createPerformanceSubjectButtons();
  populatePerformanceContents();
  renderPerformance();
  showScreen(performanceScreen);
}

function populateSubjects() {
  const subjects = [
    { value: ALL, label: "Todas" },
    ...unique(perguntas.map((question) => question.materia)).map((subject) => ({
      value: subject,
      label: subject,
    })),
  ];

  subjectOptions.replaceChildren();
  subjects.forEach(({ value, label }) => {
    const button = document.createElement("button");
    const isSelected = value === selectedSubject;
    button.type = "button";
    button.className = "subject-button";
    button.dataset.subject = value;
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", String(isSelected));
    button.classList.toggle("is-selected", isSelected);
    button.textContent = label;
    button.addEventListener("click", () => {
      selectedSubject = value;
      subjectOptions.querySelectorAll(".subject-button").forEach((item) => {
        const itemIsSelected = item === button;
        item.classList.toggle("is-selected", itemIsSelected);
        item.setAttribute("aria-checked", String(itemIsSelected));
      });
      populateChapters();
    });
    subjectOptions.appendChild(button);
  });
  populateChapters();
}

function populateChapters() {
  const matchingQuestions = selectedSubject === ALL
    ? perguntas
    : perguntas.filter((question) => question.materia === selectedSubject);
  const chapters = unique(matchingQuestions.map((question) => question.capitulo));

  updateSubjectExtras(matchingQuestions);

  selectedChapters = new Set(chapters);
  chapterOptions.replaceChildren();

  const allChoice = createChapterChoice(ALL, "Todos os capítulos", true, true);
  chapterOptions.appendChild(allChoice);
  chapters.forEach((chapter) => {
    chapterOptions.appendChild(createChapterChoice(chapter, chapter, true));
  });

  populateContents(true);
}

function updateSubjectExtras(matchingQuestions) {
  const hasDifficulty = selectedSubject !== ALL
    && matchingQuestions.some((question) => Boolean(question.dificuldade));
  difficultyField.hidden = !hasDifficulty;
  portugueseGuide.hidden = selectedSubject !== "Português — 8º ano";

  if (!hasDifficulty) {
    selectedDifficulty = ALL;
    difficultyButtons.forEach((button) => {
      const isSelected = button.dataset.difficulty === ALL;
      button.classList.toggle("is-selected", isSelected);
      button.setAttribute("aria-checked", String(isSelected));
    });
  }
}

function createChapterChoice(value, label, checked, isAll = false) {
  const choice = document.createElement("label");
  const checkbox = document.createElement("input");
  const text = document.createElement("span");

  choice.className = "chapter-choice";
  choice.classList.toggle("chapter-choice--all", isAll);
  checkbox.type = "checkbox";
  checkbox.value = value;
  checkbox.checked = checked;
  checkbox.dataset.chapter = value;
  text.textContent = label;
  choice.append(checkbox, text);

  checkbox.addEventListener("change", () => {
    if (value === ALL) {
      chapterOptions.querySelectorAll('input[data-chapter]:not([data-chapter="__all"])').forEach((item) => {
        item.checked = checkbox.checked;
      });
    }

    syncSelectedChapters();
    populateContents(true);
  });

  return choice;
}

function syncSelectedChapters() {
  const chapterCheckboxes = [...chapterOptions.querySelectorAll('input[data-chapter]:not([data-chapter="__all"])')];
  selectedChapters = new Set(
    chapterCheckboxes.filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.value),
  );

  const allCheckbox = chapterOptions.querySelector('input[data-chapter="__all"]');
  if (allCheckbox) {
    allCheckbox.checked = chapterCheckboxes.length > 0 && chapterCheckboxes.every((checkbox) => checkbox.checked);
    allCheckbox.indeterminate = selectedChapters.size > 0 && selectedChapters.size < chapterCheckboxes.length;
  }
}

function populateContents(resetSelection = false) {
  const matchingQuestions = perguntas.filter((question) => {
    const subjectMatches = selectedSubject === ALL || question.materia === selectedSubject;
    const chapterMatches = selectedChapters.has(question.capitulo);
    return subjectMatches && chapterMatches;
  });

  contentSelect.replaceChildren();
  addOption(contentSelect, ALL, "Todos os conteúdos");
  unique(matchingQuestions.map((question) => question.conteudo)).forEach((content) => {
    addOption(contentSelect, content, content);
  });
  if (resetSelection) contentSelect.value = ALL;
  updateAvailableCount();
}

function getFilteredQuestions() {
  return perguntas.filter((question) => {
    const subjectMatches = selectedSubject === ALL || question.materia === selectedSubject;
    const chapterMatches = selectedChapters.has(question.capitulo);
    const contentMatches = contentSelect.value === ALL || question.conteudo === contentSelect.value;
    const difficultyMatches = selectedDifficulty === ALL || question.dificuldade === selectedDifficulty;
    return subjectMatches && chapterMatches && contentMatches && difficultyMatches;
  });
}

function updateAvailableCount() {
  const count = getFilteredQuestions().length;
  availableCount.textContent = count;
  beginQuizButton.disabled = count === 0;
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function buildProgressiveQuiz(items, limit) {
  const isProgressiveQuiz = items.length > 0
    && items.every((question) => Boolean(question.dificuldade));

  if (!isProgressiveQuiz || selectedDifficulty !== ALL) {
    return shuffle(items).slice(0, limit);
  }

  const groups = {
    "Fácil": shuffle(items.filter((question) => question.dificuldade === "Fácil")),
    "Médio": shuffle(items.filter((question) => question.dificuldade === "Médio")),
    "Difícil": shuffle(items.filter((question) => question.dificuldade === "Difícil")),
  };

  const easyCount = Math.min(groups["Fácil"].length, Math.round(limit * 0.4));
  const mediumCount = Math.min(groups["Médio"].length, Math.round(limit * 0.4));
  const hardCount = Math.min(groups["Difícil"].length, limit - easyCount - mediumCount);
  const selected = [
    ...groups["Fácil"].slice(0, easyCount),
    ...groups["Médio"].slice(0, mediumCount),
    ...groups["Difícil"].slice(0, hardCount),
  ];

  if (selected.length < limit) {
    const selectedIds = new Set(selected.map(getQuestionStorageId));
    const remaining = [
      ...groups["Fácil"],
      ...groups["Médio"],
      ...groups["Difícil"],
    ].filter((question) => !selectedIds.has(getQuestionStorageId(question)));
    selected.push(...remaining.slice(0, limit - selected.length));
  }

  return selected;
}

function updateQuizStats() {
  correctCount.textContent = score;
  wrongCount.textContent = wrongAnswers;
}

function saveProgress(status = "quiz") {
  if (!quizQuestions.length) return;

  const state = {
    version: 1,
    status,
    questionIds: quizQuestions.map(getQuestionStorageId),
    currentQuestion: status === "result" ? quizQuestions.length - 1 : currentQuestion,
    selectedAnswer,
    answerConfirmed,
    score,
    wrongAnswers,
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // O quiz continua funcionando mesmo se o navegador bloquear o armazenamento local.
  }
}

function clearSavedProgress() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Sem ação: o armazenamento local pode estar indisponível.
  }
}

function restoreProgress() {
  let state;
  try {
    state = JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch {
    clearSavedProgress();
    return false;
  }

  if (!state || state.version !== 1 || !Array.isArray(state.questionIds) || !state.questionIds.length) {
    return false;
  }

  const questionsById = new Map();
  perguntas.forEach((question) => {
    questionsById.set(getQuestionStorageId(question), question);
    if (!questionsById.has(question.pergunta)) questionsById.set(question.pergunta, question);
  });
  const restoredQuestions = state.questionIds.map((id) => questionsById.get(id));
  const validIndex = Number.isInteger(state.currentQuestion)
    && state.currentQuestion >= 0
    && state.currentQuestion < restoredQuestions.length;

  if (!validIndex || restoredQuestions.some((question) => !question)) {
    clearSavedProgress();
    return false;
  }

  quizQuestions = restoredQuestions;
  currentQuestion = state.currentQuestion;
  score = Number.isInteger(state.score) && state.score >= 0 ? state.score : 0;
  wrongAnswers = Number.isInteger(state.wrongAnswers) && state.wrongAnswers >= 0 ? state.wrongAnswers : 0;
  updateQuizStats();

  if (state.status === "result") {
    showResults();
    return true;
  }

  const savedAnswer = Number.isInteger(state.selectedAnswer)
    && state.selectedAnswer >= 0
    && state.selectedAnswer < 4
    ? state.selectedAnswer
    : null;
  const savedConfirmation = Boolean(state.answerConfirmed && savedAnswer !== null);

  showScreen(quizScreen);
  renderQuestion();

  if (savedAnswer !== null) {
    const button = answerList.querySelectorAll(".answer-button")[savedAnswer];
    selectedAnswer = savedAnswer;
    button?.classList.add("is-selected");
    button?.setAttribute("aria-checked", "true");
    nextButton.disabled = false;
  }

  if (savedConfirmation) {
    answerConfirmed = true;
    revealConfirmedAnswer();
  }

  return true;
}

function openSetup() {
  showScreen(setupScreen);
  updateAvailableCount();
}

function buildQuiz() {
  const filtered = getFilteredQuestions();
  const limit = selectedAmount === "all"
    ? filtered.length
    : Math.min(Number(selectedAmount), filtered.length);

  quizQuestions = buildProgressiveQuiz(filtered, limit);
  if (!quizQuestions.length) {
    showScreen(emptyScreen);
    return;
  }

  currentQuestion = 0;
  selectedAnswer = null;
  score = 0;
  wrongAnswers = 0;
  answerConfirmed = false;
  updateQuizStats();
  showScreen(quizScreen);
  renderQuestion();
  saveProgress();
}

function closeLearnGuide() {
  learnPanel.hidden = true;
  learnButton.setAttribute("aria-expanded", "false");
  learnButton.classList.remove("is-open");
}

const GEOMETRY_EPSILON = 0.001;

function geometryRound(value) {
  return Number(value.toFixed(3));
}

function geometryPoint(point) {
  return `${geometryRound(point.x)} ${geometryRound(point.y)}`;
}

function triangleFromBaseAngles(x, baseY, width, leftAngle, rightAngle) {
  const leftRadians = leftAngle * Math.PI / 180;
  const rightRadians = rightAngle * Math.PI / 180;
  const height = width * Math.tan(leftRadians) * Math.tan(rightRadians)
    / (Math.tan(leftRadians) + Math.tan(rightRadians));
  return {
    points: [
      { x, y: baseY },
      { x: x + height / Math.tan(leftRadians), y: baseY - height },
      { x: x + width, y: baseY },
    ],
    angles: [leftAngle, 180 - leftAngle - rightAngle, rightAngle],
  };
}

function regularPolygonPoints(cx, cy, radius, sides, rotation = -90) {
  return Array.from({ length: sides }, (_, index) => {
    const angle = (rotation + index * 360 / sides) * Math.PI / 180;
    return { x: cx + radius * Math.cos(angle), y: cy + radius * Math.sin(angle) };
  });
}

function trianglePath(triangle) {
  return `M${triangle.points.map(geometryPoint).join(" L")} Z`;
}

function polygonPath(points) {
  return `M${points.map(geometryPoint).join(" L")} Z`;
}

function geometryDistance(pointA, pointB) {
  return Math.hypot(pointA.x - pointB.x, pointA.y - pointB.y);
}

function geometryPointAtDistance(vertex, point, distance) {
  const length = geometryDistance(vertex, point);
  return {
    x: vertex.x + (point.x - vertex.x) * distance / length,
    y: vertex.y + (point.y - vertex.y) * distance / length,
  };
}

function geometryAngleArc(vertex, pointA, pointB, radius = 28) {
  const start = geometryPointAtDistance(vertex, pointA, radius);
  const end = geometryPointAtDistance(vertex, pointB, radius);
  return `M${geometryPoint(start)} Q${geometryPoint(vertex)} ${geometryPoint(end)}`;
}

function geometrySideTicks(pointA, pointB, count, color = "#df7a30") {
  const length = geometryDistance(pointA, pointB);
  const alongX = (pointB.x - pointA.x) / length;
  const alongY = (pointB.y - pointA.y) / length;
  const normalX = -alongY * 9;
  const normalY = alongX * 9;
  const paths = Array.from({ length: count }, (_, index) => {
    const offset = (index - (count - 1) / 2) * 12;
    const centerX = (pointA.x + pointB.x) / 2 + alongX * offset;
    const centerY = (pointA.y + pointB.y) / 2 + alongY * offset;
    return `M${geometryRound(centerX - normalX)} ${geometryRound(centerY - normalY)} L${geometryRound(centerX + normalX)} ${geometryRound(centerY + normalY)}`;
  }).join(" ");
  return `<path d="${paths}" stroke="${color}" stroke-width="4" stroke-linecap="round"/>`;
}

function geometryPolygonArea(points) {
  const doubleArea = points.reduce((sum, point, index) => {
    const next = points[(index + 1) % points.length];
    return sum + point.x * next.y - next.x * point.y;
  }, 0);
  return Math.abs(doubleArea) / 2;
}

function validateGeometryDiagramSpecs() {
  const equilateral = triangleFromBaseAngles(0, 100, 100, 60, 60);
  const isosceles = triangleFromBaseAngles(0, 100, 100, 65, 65);
  const acute = triangleFromBaseAngles(0, 100, 100, 50, 60);
  const obtuse = triangleFromBaseAngles(0, 100, 100, 25, 35);
  const sides = (triangle) => [
    geometryDistance(triangle.points[0], triangle.points[1]),
    geometryDistance(triangle.points[1], triangle.points[2]),
    geometryDistance(triangle.points[2], triangle.points[0]),
  ];
  const nearlyEqual = (a, b) => Math.abs(a - b) < GEOMETRY_EPSILON;
  const equilateralSides = sides(equilateral);
  const isoscelesSides = sides(isosceles);
  const regularHexagon = regularPolygonPoints(0, 0, 80, 6);
  const hexagonSides = regularHexagon.map((point, index) => geometryDistance(point, regularHexagon[(index + 1) % regularHexagon.length]));
  const midpoint = { x: (30 + 190) / 2, y: (92 + 92) / 2 };
  const perpendicularDotProduct = (190 - 30) * (110 - 110) + (92 - 92) * (7 - 105);
  const parallelogramArea = geometryPolygonArea([{ x: 55, y: 165 }, { x: 110, y: 55 }, { x: 290, y: 55 }, { x: 235, y: 165 }]);
  const rectangleArea = geometryPolygonArea([{ x: 315, y: 55 }, { x: 495, y: 55 }, { x: 495, y: 165 }, { x: 315, y: 165 }]);
  const baricenterRatio = (130.33333333333334 - 35) / (178 - 130.33333333333334);
  const square = [{ x: 145, y: 25 }, { x: 335, y: 25 }, { x: 335, y: 215 }, { x: 145, y: 215 }];
  const squareSides = square.map((point, index) => geometryDistance(point, square[(index + 1) % square.length]));
  const congruentA = [{ x: 45, y: 165 }, { x: 145, y: 48 }, { x: 237, y: 165 }];
  const congruentB = congruentA.map((point) => ({ x: point.x + 238, y: point.y }));
  const congruentSidesA = congruentA.map((point, index) => geometryDistance(point, congruentA[(index + 1) % congruentA.length]));
  const congruentSidesB = congruentB.map((point, index) => geometryDistance(point, congruentB[(index + 1) % congruentB.length]));
  return {
    equilateral: equilateralSides.every((side) => nearlyEqual(side, equilateralSides[0])),
    isosceles: nearlyEqual(isoscelesSides[0], isoscelesSides[1]) && !nearlyEqual(isoscelesSides[1], isoscelesSides[2]),
    acute: acute.angles.every((angle) => angle < 90),
    right: [30, 60, 90].filter((angle) => nearlyEqual(angle, 90)).length === 1,
    obtuse: obtuse.angles.filter((angle) => angle > 90).length === 1 && nearlyEqual(obtuse.angles.reduce((sum, angle) => sum + angle, 0), 180),
    midpoint: nearlyEqual(midpoint.x, 110) && nearlyEqual(midpoint.y, 92),
    perpendicular: nearlyEqual(perpendicularDotProduct, 0),
    equivalentArea: nearlyEqual(parallelogramArea, rectangleArea),
    doubledArea: nearlyEqual((160 * 120) / (80 * 60), 4),
    regularHexagon: hexagonSides.every((side) => nearlyEqual(side, hexagonSides[0])),
    baricenter: nearlyEqual(baricenterRatio, 2),
    square: squareSides.every((side) => nearlyEqual(side, squareSides[0])),
    congruence: congruentSidesA.every((side, index) => nearlyEqual(side, congruentSidesB[index])),
  };
}

const geometryDiagramValidation = validateGeometryDiagramSpecs();
const invalidGeometrySpecs = Object.entries(geometryDiagramValidation).filter(([, valid]) => !valid);
if (invalidGeometrySpecs.length) {
  throw new Error(`Diagramas geométricos inválidos: ${invalidGeometrySpecs.map(([name]) => name).join(", ")}`);
}

function createGeometryLearnIllustration(visual) {
  const open = (label) => `<svg viewBox="0 0 520 220" role="img" aria-label="${label}"><rect x="12" y="12" width="496" height="196" rx="22" fill="#fff"/>`;
  const close = "</svg>";

  if (visual === "triangulo-lados") {
    const equilateral = triangleFromBaseAngles(24, 154, 126, 60, 60);
    const isosceles = triangleFromBaseAngles(185, 154, 136, 65, 65);
    const scalene = triangleFromBaseAngles(358, 154, 138, 48, 72);
    const [eA, eB, eC] = equilateral.points;
    const [iA, iB, iC] = isosceles.points;
    const [sA, sB, sC] = scalene.points;
    return `${open("Três tipos de triângulo classificados pelos lados")}
    <path d="${trianglePath(equilateral)}" fill="#eee9ff" stroke="#7157d9" stroke-width="4"/>${geometrySideTicks(eA, eB, 1)}${geometrySideTicks(eB, eC, 1)}${geometrySideTicks(eC, eA, 1)}
    <path d="${trianglePath(isosceles)}" fill="#e8f8f1" stroke="#2b9b74" stroke-width="4"/>${geometrySideTicks(iA, iB, 1)}${geometrySideTicks(iB, iC, 1)}
    <path d="${trianglePath(scalene)}" fill="#fff5d7" stroke="#d49a18" stroke-width="4"/>${geometrySideTicks(sA, sB, 1)}${geometrySideTicks(sB, sC, 2)}${geometrySideTicks(sC, sA, 3)}
    <text x="90" y="183" text-anchor="middle">EQUILÁTERO</text><text x="257" y="183" text-anchor="middle">ISÓSCELES</text><text x="427" y="183" text-anchor="middle">ESCALENO</text>
    <text x="90" y="202" text-anchor="middle">60° · 60° · 60°</text><text x="257" y="202" text-anchor="middle">65° · 50° · 65°</text><text x="427" y="202" text-anchor="middle">48° · 60° · 72°</text>${close}`;
  }

  if (visual === "triangulo-angulos") {
    const acute = triangleFromBaseAngles(25, 155, 135, 50, 60);
    const obtuse = triangleFromBaseAngles(340, 155, 160, 25, 35);
    const obtuseApex = obtuse.points[1];
    return `${open("Três tipos de triângulo classificados pelos ângulos")}
    <path d="${trianglePath(acute)}" fill="#e8f8f1" stroke="#2b9b74" stroke-width="4"/><path d="M47 145q14-18 32-8" fill="none" stroke="#df7a30" stroke-width="4"/>
    <path d="M185 155V62l125 93Z" fill="#e7f2ff" stroke="#3278c8" stroke-width="4"/><path d="M185 135h20v20" fill="none" stroke="#df7a30" stroke-width="4"/>
    <path d="${trianglePath(obtuse)}" fill="#fff0e4" stroke="#df7a30" stroke-width="4"/><path d="M${geometryRound(obtuseApex.x - 24)} ${geometryRound(obtuseApex.y + 15)} Q${geometryPoint(obtuseApex)} ${geometryRound(obtuseApex.x + 24)} ${geometryRound(obtuseApex.y + 15)}" fill="none" stroke="#7157d9" stroke-width="4"/>
    <text x="91" y="183" text-anchor="middle">ACUTÂNGULO</text><text x="245" y="183" text-anchor="middle">RETÂNGULO</text><text x="421" y="183" text-anchor="middle">OBTUSÂNGULO</text>
    <text x="91" y="202" text-anchor="middle">50° · 70° · 60°</text><text x="245" y="202" text-anchor="middle">90° · 53,4° · 36,6°</text><text x="421" y="202" text-anchor="middle">25° · 120° · 35°</text>${close}`;
  }

  if (visual === "triangulo-soma") return `${open("Soma dos três ângulos internos do triângulo")}
    <path d="M80 175 260 38l180 137Z" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/>
    <path d="M106 160q25-27 53-8M228 62q32 25 64 0M361 152q29-18 53 8" fill="none" stroke="#df7a30" stroke-width="5"/>
    <text x="132" y="145">A</text><text x="260" y="77" text-anchor="middle">B</text><text x="388" y="145">C</text>
    <rect x="145" y="181" width="230" height="29" rx="11" fill="#e8f8f1"/><text x="260" y="201" text-anchor="middle">A + B + C = 180°</text>${close}`;

  if (visual === "triangulo-classificacao") return `${open("Duas maneiras de classificar o mesmo triângulo")}
    <path d="M45 162 140 48l95 114Z" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/><path d="M68 135l13 10M199 145l13-10" stroke="#df7a30" stroke-width="5"/>
    <path d="M285 162V58l170 104Z" fill="#e7f2ff" stroke="#3278c8" stroke-width="5"/><path d="M285 142h20v20" fill="none" stroke="#df7a30" stroke-width="4"/>
    <text x="140" y="190" text-anchor="middle">PELOS LADOS</text><text x="370" y="190" text-anchor="middle">PELOS ÂNGULOS</text><text x="260" y="210" text-anchor="middle">todo triângulo recebe as duas classificações</text>${close}`;

  if (visual === "triangulo-isosceles") return `${open("Triângulo isósceles com lados e ângulos iguais")}
    <path d="M95 177 260 36l165 141Z" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/>
    <path d="M145 128l16 12M359 140l16-12" stroke="#df7a30" stroke-width="5"/><path d="M122 160q28-30 60-12M338 148q32-18 60 12" fill="none" stroke="#2b9b74" stroke-width="5"/>
    <text x="145" y="112">lado a</text><text x="348" y="112">lado a</text><text x="260" y="201" text-anchor="middle">ângulos da base iguais</text>${close}`;

  if (visual === "triangulo-externo") return `${open("Ângulo externo e ângulos internos não adjacentes")}
    <path d="M65 165 235 45l150 120Z" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/><path d="M385 165h100" stroke="#7157d9" stroke-width="5"/>
    <path d="M92 151q25-27 54-11M210 68q28 22 55 0" fill="none" stroke="#2b9b74" stroke-width="5"/><path d="M405 164q8-35 40-42" fill="none" stroke="#df7a30" stroke-width="5"/>
    <text x="120" y="137">A</text><text x="235" y="83">B</text><text x="437" y="112">EXTERNO</text><text x="260" y="204" text-anchor="middle">externo = A + B</text>${close}`;

  if (visual === "triangulo-perimetro") return `${open("Perímetro de um triângulo isósceles")}
    <path d="M90 176 260 35l170 141Z" fill="#e8f8f1" stroke="#2b9b74" stroke-width="5"/>
    <text x="150" y="104">x</text><text x="365" y="104">x</text><text x="260" y="201" text-anchor="middle">base b</text>
    <rect x="170" y="118" width="180" height="35" rx="12" fill="#eee9ff"/><text x="260" y="141" text-anchor="middle">P = b + x + x</text>${close}`;

  if (visual === "quadrilateros-tipos") return `${open("Quadrado, retângulo, losango e trapézio")}
    <path d="M28 55h95v95H28Z" fill="#eee9ff" stroke="#7157d9" stroke-width="4"/><path d="M150 72h120v78H150Z" fill="#e8f8f1" stroke="#2b9b74" stroke-width="4"/>
    <path d="m342 49 58 54-58 54-58-54Z" fill="#e7f2ff" stroke="#3278c8" stroke-width="4"/><path d="M405 150 430 65h60l22 85Z" fill="#fff5d7" stroke="#d49a18" stroke-width="4"/>
    <text x="75" y="179" text-anchor="middle">QUADRADO</text><text x="210" y="179" text-anchor="middle">RETÂNGULO</text><text x="342" y="179" text-anchor="middle">LOSANGO</text><text x="458" y="179" text-anchor="middle">TRAPÉZIO</text>
    <text x="260" y="207" text-anchor="middle">compare lados · ângulos retos · paralelismo</text>${close}`;

  if (visual === "quadrilatero-angulos") return `${open("Quatro ângulos internos de um quadrilátero")}
    <path d="M80 170 125 45h285l35 125Z" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/>
    <path d="M101 151q23-25 50-10M139 64q20 16 42 0M365 64q22 16 39-1M392 142q29-14 39 10" fill="none" stroke="#df7a30" stroke-width="5"/>
    <text x="260" y="205" text-anchor="middle">A + B + C + D = 360°</text>${close}`;

  if (visual === "quadrado-area") return `${open("Quadrado dividido em unidades de área")}
    <path d="M160 28h190v190H160Z" fill="#e8f8f1" stroke="#2b9b74" stroke-width="5"/>
    <path d="M207 28v190M255 28v190M302 28v190M160 75h190M160 123h190M160 170h190" stroke="#9bd6c0" stroke-width="2"/>
    <text x="255" y="18" text-anchor="middle">lado</text><text x="140" y="126" text-anchor="middle" transform="rotate(-90 140 126)">lado</text><text x="255" y="132" text-anchor="middle">lado × lado</text>${close}`;

  if (visual === "escala-area") return `${open("Efeito da ampliação das medidas sobre a área")}
    <path d="M55 102h80v60H55Z" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/><path d="M250 42h160v120H250Z" fill="#e8f8f1" stroke="#2b9b74" stroke-width="5"/>
    <path d="M177 105h45" stroke="#df7a30" stroke-width="5"/><path d="m211 94 12 11-12 11" fill="none" stroke="#df7a30" stroke-width="4"/>
    <text x="95" y="190" text-anchor="middle">80 × 60 → A</text><text x="330" y="190" text-anchor="middle">160 × 120 → 4A</text>${close}`;

  if (visual === "poligonos-nomes") {
    const triangle = regularPolygonPoints(72, 100, 48, 3);
    const square = regularPolygonPoints(181, 100, 48, 4, -45);
    const pentagon = regularPolygonPoints(294, 100, 50, 5);
    const hexagon = regularPolygonPoints(430, 100, 53, 6);
    return `${open("Polígonos organizados pelo número de lados")}
    <path d="${polygonPath(triangle)}" fill="#eee9ff" stroke="#7157d9" stroke-width="4"/><path d="${polygonPath(square)}" fill="#e8f8f1" stroke="#2b9b74" stroke-width="4"/>
    <path d="${polygonPath(pentagon)}" fill="#e7f2ff" stroke="#3278c8" stroke-width="4"/><path d="${polygonPath(hexagon)}" fill="#fff5d7" stroke="#d49a18" stroke-width="4"/>
    <text x="72" y="169" text-anchor="middle">TRIÂNGULO</text><text x="181" y="169" text-anchor="middle">QUADRILÁTERO</text><text x="294" y="169" text-anchor="middle">PENTÁGONO</text><text x="430" y="169" text-anchor="middle">HEXÁGONO</text>
    <text x="72" y="185" text-anchor="middle">3 lados</text><text x="181" y="185" text-anchor="middle">4 lados</text><text x="294" y="185" text-anchor="middle">5 lados</text><text x="430" y="185" text-anchor="middle">6 lados</text>
    <text x="260" y="203" text-anchor="middle">o nome depende da quantidade de lados do contorno</text>${close}`;
  }

  if (visual === "poligono-regular") {
    const regular = regularPolygonPoints(145, 112, 82, 5);
    return `${open("Comparação entre polígono regular e irregular")}
    <path d="${polygonPath(regular)}" fill="#e8f8f1" stroke="#2b9b74" stroke-width="5"/><path d="M385 35 478 88 445 194 328 184 294 104Z" fill="#fff0e4" stroke="#df7a30" stroke-width="5"/>
    <text x="145" y="216" text-anchor="middle">REGULAR · lados e ângulos iguais</text><text x="385" y="216" text-anchor="middle">IRREGULAR · medidas diferentes</text>${close}`;
  }

  if (visual === "poligono-convexidade") return `${open("Comparação entre polígono convexo e não convexo")}
    <path d="m140 38 92 56-28 102H78L48 92Z" fill="#e8f8f1" stroke="#2b9b74" stroke-width="5"/><path d="M286 48 478 48 408 112 478 190 286 190 350 112Z" fill="#fff0e4" stroke="#df7a30" stroke-width="5"/>
    <path d="M48 92 204 196M286 48 408 112" stroke="#7157d9" stroke-width="3" stroke-dasharray="7 6"/>
    <text x="140" y="216" text-anchor="middle">CONVEXO · sem reentrância</text><text x="370" y="216" text-anchor="middle">NÃO CONVEXO · com reentrância</text>${close}`;

  if (visual === "triangulo-area") return `${open("Triângulo com base e altura perpendicular")}
    <path d="M90 174h330L260 42Z" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/>
    <path d="M260 42v132" stroke="#2b9b74" stroke-width="5" stroke-dasharray="8 7"/>
    <path d="M260 154h20v20" fill="none" stroke="#2b9b74" stroke-width="4"/>
    <text x="255" y="202" text-anchor="middle">BASE</text><text x="285" y="108">ALTURA ⟂</text>${close}`;

  if (visual === "triangulo-congruencia") return `${open("Triângulos ABC e A linha B linha C linha com correspondência identificada")}
    <path d="M45 165 145 48l92 117Z" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/>
    <path d="M283 165 383 48l92 117Z" fill="#e8f8f1" stroke="#2b9b74" stroke-width="5"/>
    <path d="M88 111l14 12M326 111l14 12" stroke="#df7a30" stroke-width="5"/>
    <path d="M181 99l14-11M190 111l14-11M419 99l14-11M428 111l14-11" stroke="#3278c8" stroke-width="4"/>
    <path d="M124 155v20M141 155v20M158 155v20M362 155v20M379 155v20M396 155v20" stroke="#d49a18" stroke-width="4"/>
    <path d="M125 70q20 11 30 30M363 70q20 11 30 30" fill="none" stroke="#a24fce" stroke-width="4"/>
    <text x="32" y="181">A</text><text x="140" y="36">B</text><text x="239" y="181">C</text>
    <text x="264" y="181">A′</text><text x="378" y="36">B′</text><text x="474" y="181" text-anchor="end">C′</text>
    <text x="260" y="204" text-anchor="middle">AB ↔ A′B′ · BC ↔ B′C′ · AC ↔ A′C′</text>${close}`;

  if (visual === "triangulo-existencia") return `${open("Três segmentos tentando fechar um triângulo")}
    <path d="M70 170 230 52l215 118" fill="none" stroke="#7157d9" stroke-width="6" stroke-linecap="round"/>
    <path d="M70 170h375" stroke="#2b9b74" stroke-width="6"/>
    <text x="145" y="100">a</text><text x="350" y="100">b</text><text x="258" y="197">maior lado c</text>
    <rect x="178" y="22" width="164" height="34" rx="12" fill="#fff5cf"/><text x="260" y="44" text-anchor="middle">a + b precisa superar c</text>${close}`;

  if (visual === "triangulo-segmentos") return `${open("Mediana, altura, bissetriz e mediatriz")}
    <path d="M18 132 70 42l52 90Z" fill="#f7f4ff" stroke="#7157d9" stroke-width="3"/><path d="M70 42v90" stroke="#7157d9" stroke-width="4"/><circle cx="70" cy="132" r="4" fill="#df7a30"/>
    <path d="M146 132 198 42l52 90Z" fill="#f7f4ff" stroke="#2b9b74" stroke-width="3"/><path d="M198 42v90" stroke="#2b9b74" stroke-width="4"/><path d="M198 120h12v12" fill="none" stroke="#df7a30" stroke-width="3"/>
    <path d="M274 132 326 42l52 90Z" fill="#f7f4ff" stroke="#3278c8" stroke-width="3"/><path d="M326 42V132" stroke="#3278c8" stroke-width="4"/><path d="M309 58q17 13 34 0" fill="none" stroke="#df7a30" stroke-width="3"/>
    <path d="M402 132 432 50l74 82Z" fill="#f7f4ff" stroke="#d49a18" stroke-width="3"/><path d="M454 25v132" stroke="#d49a18" stroke-width="4" stroke-dasharray="6 5"/><path d="M454 120h12v12" fill="none" stroke="#df7a30" stroke-width="3"/><path d="M446 132h16" stroke="#df7a30" stroke-width="3"/>
    <text x="70" y="164" text-anchor="middle">MEDIANA</text><text x="198" y="164" text-anchor="middle">ALTURA</text><text x="326" y="164" text-anchor="middle">BISSETRIZ</text><text x="454" y="164" text-anchor="middle">MEDIATRIZ</text>
    <text x="260" y="203" text-anchor="middle">ponto médio · 90° · ângulo ao meio · meio + 90°</text>${close}`;

  if (visual === "triangulo-centros") return `${open("Quatro pontos notáveis e os segmentos que os formam")}
    <rect x="30" y="35" width="210" height="62" rx="15" fill="#eee9ff"/><rect x="280" y="35" width="210" height="62" rx="15" fill="#e8f8f1"/>
    <rect x="30" y="120" width="210" height="62" rx="15" fill="#e7f2ff"/><rect x="280" y="120" width="210" height="62" rx="15" fill="#fff5d7"/>
    <text x="135" y="61" text-anchor="middle">MEDIANAS</text><text x="135" y="82" text-anchor="middle">→ BARICENTRO</text><text x="385" y="61" text-anchor="middle">ALTURAS</text><text x="385" y="82" text-anchor="middle">→ ORTOCENTRO</text>
    <text x="135" y="146" text-anchor="middle">BISSETRIZES</text><text x="135" y="167" text-anchor="middle">→ INCENTRO</text><text x="385" y="146" text-anchor="middle">MEDIATRIZES</text><text x="385" y="167" text-anchor="middle">→ CIRCUNCENTRO</text>${close}`;

  if (visual === "triangulo-baricentro") return `${open("Mediana dividida pelo baricentro na razão dois para um")}
    <path d="M75 178 260 35l185 143Z" fill="#f7f4ff" stroke="#7157d9" stroke-width="5"/><path d="M260 35v143" stroke="#3278c8" stroke-width="5"/>
    <circle cx="260" cy="130.333" r="10" fill="#df7a30"/><path d="M275 35h70M275 130.333h70M275 178h70" stroke="#aaa3bb" stroke-width="2" stroke-dasharray="5 5"/>
    <text x="355" y="41">VÉRTICE</text><text x="355" y="136">BARICENTRO</text><text x="355" y="201">PONTO MÉDIO</text><text x="220" y="85">2 partes</text><text x="220" y="163">1 parte</text>${close}`;

  if (["triangulo-segmentos", "triangulo-centros", "triangulo-baricentro"].includes(visual)) return `${open("Segmentos e pontos notáveis de um triângulo")}
    <path d="M70 176 260 36l190 140Z" fill="#f7f4ff" stroke="#7157d9" stroke-width="5"/>
    <path d="M260 36v140" stroke="#2b9b74" stroke-width="5"/><path d="M70 176 355 106" stroke="#3278c8" stroke-width="4" stroke-dasharray="8 6"/>
    <circle cx="260" cy="113" r="9" fill="#df7a30"/><path d="M260 156h20v20" fill="none" stroke="#2b9b74" stroke-width="4"/>
    <text x="287" y="106">ponto de encontro</text><text x="287" y="168">90°</text>${close}`;

  if (visual === "mediatriz") return `${open("Construção da mediatriz com arcos de compasso")}
    <path d="M85 120h350" stroke="#7157d9" stroke-width="6"/><circle cx="85" cy="120" r="7" fill="#7157d9"/><circle cx="435" cy="120" r="7" fill="#7157d9"/>
    <path d="M85 120a210 210 0 0 1 350 0M85 120a210 210 0 0 0 350 0" fill="none" stroke="#3278c8" stroke-width="4" stroke-dasharray="7 6"/>
    <path d="M260 30v170" stroke="#2b9b74" stroke-width="5"/><path d="M260 120h18v18" fill="none" stroke="#2b9b74" stroke-width="4"/>
    <text x="70" y="148">A</text><text x="445" y="148">B</text><text x="278" y="48">mediatriz</text>${close}`;

  if (["quadrilatero-area", "trapezio", "losango"].includes(visual)) {
    if (visual === "losango") return `${open("Losango com as duas diagonais")}
      <path d="M260 30 440 110 260 190 80 110Z" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/>
      <path d="M80 110h360M260 30v160" stroke="#2b9b74" stroke-width="5" stroke-dasharray="8 6"/>
      <path d="M260 110h18v18" fill="none" stroke="#df7a30" stroke-width="4"/><text x="350" y="99">D</text><text x="274" y="70">d</text>${close}`;
    if (visual === "trapezio") return `${open("Trapézio com bases paralelas e altura")}
      <path d="M70 175 145 50h230l75 125Z" fill="#fff5d7" stroke="#d49a18" stroke-width="5"/>
      <path d="M145 50v125" stroke="#2b9b74" stroke-width="5" stroke-dasharray="8 6"/><path d="M145 155h20v20" fill="none" stroke="#2b9b74" stroke-width="4"/>
      <text x="260" y="42" text-anchor="middle">base menor</text><text x="260" y="204" text-anchor="middle">base maior</text><text x="169" y="115">altura</text>${close}`;
    return `${open("Paralelogramo transformado em retângulo")}
      <path d="M55 165 110 55h180l-55 110Z" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/><path d="M110 55v110" stroke="#2b9b74" stroke-width="4" stroke-dasharray="7 6"/>
      <path d="M315 55h180v110H315Z" fill="#e8f8f1" stroke="#2b9b74" stroke-width="5"/><path d="m285 110 25 0" stroke="#df7a30" stroke-width="5"/><path d="m302 99 12 11-12 11" fill="none" stroke="#df7a30" stroke-width="4"/>
      <text x="172" y="197" text-anchor="middle">mesma base e altura</text><text x="390" y="197" text-anchor="middle">mesma área</text>${close}`;
  }

  if (visual === "poligono-diagonais") return `${open("Diagonais ligando vértices não consecutivos")}
    <path d="m260 10 92 36 55 82-69 62H182l-69-62 55-82Z" fill="#e7f2ff" stroke="#3278c8" stroke-width="5"/>
    <path d="M168 46 352 46M168 46 407 128M168 46 338 190M168 46 182 190" stroke="#7157d9" stroke-width="4" stroke-dasharray="7 5"/>
    <circle cx="168" cy="46" r="8" fill="#df7a30"/><text x="260" y="215" text-anchor="middle">de um vértice: não conte ele mesmo nem os 2 vizinhos</text>${close}`;

  if (visual === "poligono-angulos") return `${open("Polígono dividido em triângulos para estudar os ângulos")}
    <path d="m260 10 92 36 55 82-69 62H182l-69-62 55-82Z" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/>
    <path d="M168 46 352 46M168 46 407 128M168 46 338 190M168 46 182 190" stroke="#2b9b74" stroke-width="4" stroke-dasharray="7 5"/>
    <text x="260" y="215" text-anchor="middle">n lados → n − 2 triângulos → (n − 2) × 180°</text>${close}`;

  if (["poligono-diagonais", "poligono-angulos", "hexagono-inscrito"].includes(visual)) {
    const hexagon = regularPolygonPoints(260, 112, 88, 6);
    return `${open("Hexágono regular inscrito, com lado exatamente igual ao raio")}
    <circle cx="260" cy="112" r="88" fill="#f9fbff" stroke="#cfe0f7" stroke-width="3"/>
    <path d="${polygonPath(hexagon)}" fill="#e7f2ff" fill-opacity=".65" stroke="#3278c8" stroke-width="5"/>
    <path d="M${geometryPoint(hexagon[0])} L${geometryPoint(hexagon[3])} M${geometryPoint(hexagon[1])} L${geometryPoint(hexagon[4])} M${geometryPoint(hexagon[2])} L${geometryPoint(hexagon[5])}" stroke="#7157d9" stroke-width="3" stroke-dasharray="7 6"/><circle cx="260" cy="112" r="6" fill="#df7a30"/>
    <path d="M260 112 L${geometryPoint(hexagon[1])}" stroke="#2b9b74" stroke-width="5"/><text x="300" y="82">raio = lado</text>${close}`;
  }

  if (visual === "construcao-angulos") return `${open("Construção de ângulos por perpendicular e bissetriz")}
    <path d="M70 175H240M70 175V35M70 175 169 76" stroke="#7157d9" stroke-width="6" stroke-linecap="round"/><path d="M70 155h20v20" fill="none" stroke="#2b9b74" stroke-width="4"/>
    <path d="M330 175h135M330 175l68-118M330 175l118-68" stroke="#3278c8" stroke-width="6" stroke-linecap="round"/>
    <path d="M366 112q24 12 35 36M397 142q16 7 21 23" fill="none" stroke="#df7a30" stroke-width="4"/>
    <text x="155" y="205" text-anchor="middle">90° dividido ao meio</text><text x="400" y="205" text-anchor="middle">60° dividido ao meio</text>${close}`;

  if (visual === "unidades") return `${open("Comprimento, área, volume e capacidade")}
    <path d="M35 63h90" stroke="#7157d9" stroke-width="7"/><text x="80" y="48" text-anchor="middle">1 dimensão</text><text x="80" y="92" text-anchor="middle">m</text>
    <path d="M150 35h90v70h-90Z" fill="#e8f8f1" stroke="#2b9b74" stroke-width="4"/><text x="195" y="130" text-anchor="middle">m² · superfície</text>
    <path d="M275 50h75v75h-75ZM275 50l28-20h75v75l-28 20M350 50l28-20M350 125l28-20" fill="#e7f2ff" fill-opacity=".7" stroke="#3278c8" stroke-width="4"/><text x="326" y="151" text-anchor="middle">m³ · espaço</text>
    <path d="M410 38h70v100h-70Z" fill="#fff5d7" stroke="#d49a18" stroke-width="4"/><path d="M410 88h70" stroke="#d49a18" stroke-width="3"/><text x="445" y="164" text-anchor="middle">L · capacidade</text>${close}`;

  if (["volume-capacidade", "unidades"].includes(visual)) return `${open("Bloco retangular com três dimensões e conversão de capacidade")}
    <path d="M75 72h180v105H75ZM75 72l55-38h180v105l-55 38M255 72l55-38M255 177l55-38" fill="#e7f2ff" fill-opacity=".7" stroke="#3278c8" stroke-width="4"/>
    <path d="M355 65h100v105H355Z" fill="#e8f8f1" stroke="#2b9b74" stroke-width="5"/><path d="M355 120h100" stroke="#2b9b74" stroke-width="3" stroke-dasharray="7 5"/>
    <text x="165" y="199" text-anchor="middle">comprimento × largura × altura</text><text x="405" y="195" text-anchor="middle">volume ↔ litros</text>${close}`;

  if (visual === "circulo-area") return `${open("Círculo com raio destacado")}
    <circle cx="260" cy="112" r="82" fill="#fff5d7" stroke="#d49a18" stroke-width="5"/><circle cx="260" cy="112" r="7" fill="#7157d9"/>
    <path d="M260 112h82" stroke="#7157d9" stroke-width="6"/><text x="300" y="101">raio r</text><path d="M260 30a82 82 0 0 1 82 82" fill="none" stroke="#2b9b74" stroke-width="5"/>
    <text x="260" y="210" text-anchor="middle">a área ocupa toda a região interna</text>${close}`;

  if (["area-composta", "comparar-areas"].includes(visual)) return `${open("Figuras divididas para comparar ou somar áreas")}
    <path d="M55 170V55h150v115Z" fill="#e8f8f1" stroke="#2b9b74" stroke-width="5"/><path d="M205 170 300 75l75 95Z" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/>
    <circle cx="430" cy="112" r="57" fill="#fff5d7" stroke="#d49a18" stroke-width="5"/><path d="M205 170h170" stroke="#df7a30" stroke-width="4" stroke-dasharray="7 5"/>
    <text x="214" y="204" text-anchor="middle">separe · calcule · combine</text>${close}`;

  return `${open("Triângulo com lados e ângulos destacados")}
    <path d="M75 175 260 38l185 137Z" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/>
    <path d="M101 156q26 10 38 33M381 189q13-23 38-33M235 58q25 18 50 0" fill="none" stroke="#df7a30" stroke-width="5"/>
    <text x="145" y="105">lado</text><text x="350" y="105">lado</text><text x="260" y="207" text-anchor="middle">compare lados e ângulos</text>${close}`;
}

function createLearnIllustration(subject, visual) {
  if (subject === "Português — 8º ano") {
    return `
      <svg viewBox="0 0 520 170" role="img" aria-label="Ilustração de análise de uma frase">
        <rect x="28" y="26" width="464" height="118" rx="24" fill="#ffffff" opacity=".9"/>
        <rect x="58" y="55" width="112" height="38" rx="12" fill="#eee9ff"/>
        <rect x="184" y="55" width="112" height="38" rx="12" fill="#e8f8f1"/>
        <rect x="310" y="55" width="150" height="38" rx="12" fill="#fff5d7"/>
        <text x="114" y="80" text-anchor="middle">TERMO</text>
        <text x="240" y="80" text-anchor="middle">VERBO</text>
        <text x="385" y="80" text-anchor="middle">INFORMAÇÃO</text>
        <path d="M112 112h276" stroke="#7157d9" stroke-width="4" stroke-linecap="round" stroke-dasharray="7 10"/>
        <circle cx="112" cy="112" r="7" fill="#7157d9"/><circle cx="240" cy="112" r="7" fill="#57b995"/><circle cx="388" cy="112" r="7" fill="#f6c850"/>
      </svg>`;
  }
  if (subject === GEOMETRY_SUBJECT) {
    return createGeometryLearnIllustration(visual);
  }
  if (subject === "Ciências") {
    return `
      <svg viewBox="0 0 520 170" role="img" aria-label="Ilustração de um sistema científico">
        <circle cx="92" cy="85" r="48" fill="#eee9ff"/><circle cx="260" cy="85" r="58" fill="#e8f8f1"/><circle cx="428" cy="85" r="48" fill="#fff5d7"/>
        <path d="M144 85h52M324 85h52" stroke="#7157d9" stroke-width="5" stroke-linecap="round"/>
        <path d="m184 72 14 13-14 13M364 72l14 13-14 13" fill="none" stroke="#7157d9" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M72 85c12-26 30-26 42 0-12 26-30 26-42 0ZM235 57v56M217 85h86" fill="none" stroke="#5640bc" stroke-width="6" stroke-linecap="round"/>
        <path d="M404 105c8-36 36-36 44 0" fill="none" stroke="#d8a61f" stroke-width="7" stroke-linecap="round"/>
      </svg>`;
  }
  return `
    <svg viewBox="0 0 520 170" role="img" aria-label="Ilustração de aprendizagem de inglês">
      <path d="M42 37h210a18 18 0 0 1 18 18v55a18 18 0 0 1-18 18H133l-35 25 8-25H42a18 18 0 0 1-18-18V55a18 18 0 0 1 18-18Z" fill="#eee9ff"/>
      <path d="M298 50h180a18 18 0 0 1 18 18v49a18 18 0 0 1-18 18h-54l8 20-31-20H298a18 18 0 0 1-18-18V68a18 18 0 0 1 18-18Z" fill="#e8f8f1"/>
      <text x="146" y="91" text-anchor="middle">READ · NOTICE · CONNECT</text>
      <text x="388" y="97" text-anchor="middle">THINK IN CONTEXT</text>
      <circle cx="53" cy="66" r="6" fill="#7157d9"/><circle cx="75" cy="66" r="6" fill="#7157d9"/><circle cx="97" cy="66" r="6" fill="#7157d9"/>
    </svg>`;
}

function appendMiniExample(card, example) {
  if (!example) return;
  const exampleBox = document.createElement("div");
  const label = document.createElement("span");
  const [sentence, ...classification] = example.split("→");
  const sentenceText = document.createElement("span");
  exampleBox.className = "mini-card-example";
  label.className = "mini-example-label";
  label.textContent = "Exemplo";
  sentenceText.className = "mini-example-sentence";
  sentenceText.textContent = sentence.trim();
  exampleBox.append(label, sentenceText);
  if (classification.length) {
    const result = document.createElement("strong");
    result.className = "mini-example-result";
    result.textContent = classification.join("→").trim();
    exampleBox.appendChild(result);
  }
  card.appendChild(exampleBox);
}

function renderPortugueseConceptMap(guide) {
  const foundations = document.createElement("section");
  foundations.className = "learn-foundations";
  const foundationHeading = document.createElement("div");
  foundationHeading.className = "learn-visual-heading";
  foundationHeading.innerHTML = "<strong>Comece do zero</strong><span>Estas palavras aparecem no guia. Entenda-as antes de continuar.</span>";
  const foundationGrid = document.createElement("div");
  foundationGrid.className = "learn-foundation-grid";

  guide.fundamentos.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = `learn-foundation-card tone-${["roxo", "verde", "amarelo"][index % 3]}`;
    const term = document.createElement("strong");
    const meaning = document.createElement("span");
    term.textContent = item.termo;
    meaning.textContent = item.significado;
    card.append(term, meaning);
    appendMiniExample(card, item.exemplo);
    foundationGrid.appendChild(card);
  });
  foundations.append(foundationHeading, foundationGrid);

  const map = document.createElement("section");
  map.className = "portuguese-concept-map";
  const mapHeading = document.createElement("div");
  mapHeading.className = "learn-visual-heading";
  mapHeading.innerHTML = "<strong>Mapa dos conceitos</strong><span>Compare as caixas: a cor ajuda a separar cada ideia.</span>";
  const mapGrid = document.createElement("div");
  mapGrid.className = "concept-map-grid";

  guide.conceitos.forEach((concept, index) => {
    const card = document.createElement("article");
    card.className = `concept-card tone-${concept.tom || "roxo"}`;
    const marker = document.createElement("span");
    const term = document.createElement("strong");
    const summary = document.createElement("small");
    marker.className = "concept-marker";
    marker.textContent = String(index + 1).padStart(2, "0");
    term.textContent = concept.termo;
    summary.textContent = concept.resumo;
    card.append(marker, term, summary);
    appendMiniExample(card, concept.exemplo);
    mapGrid.appendChild(card);
  });
  map.append(mapHeading, mapGrid);
  learnIllustration.append(foundations, map);
}

function getGeometryWorkedSpecs(visual) {
  const specs = {
    "triangulo-lados": [
      { tipo: "triangulo-lados-calculo", lados: ["5 cm", "5 cm", "5 cm"] },
      { tipo: "triangulo-lados-calculo", lados: ["7 cm", "7 cm", "4 cm"] },
      { tipo: "triangulo-lados-calculo", lados: ["4 cm", "5 cm", "6 cm"] },
    ],
    "triangulo-angulos": [
      { tipo: "triangulo-angulos-calculo", angulos: ["50°", "70°", "60°"], forma: [50, 70, 60] },
      { tipo: "triangulo-angulos-calculo", angulos: ["30°", "60°", "90°"], forma: [30, 60, 90] },
      { tipo: "triangulo-angulos-calculo", angulos: ["25°", "120°", "35°"], forma: [25, 120, 35] },
    ],
    "triangulo-soma": [
      { tipo: "triangulo-angulos-calculo", angulos: ["45°", "55°", "80°"], forma: [45, 55, 80] },
      { tipo: "triangulo-angulos-calculo", angulos: ["35°", "80°", "65°"], forma: [35, 80, 65] },
    ],
    "triangulo-area": [
      { tipo: "triangulo-area", base: "8 cm", altura: "6 cm" },
      { tipo: "triangulo-area", base: "10 cm", altura: "4 cm" },
      { tipo: "triangulo-area", base: "8 cm", altura: "6 cm" },
      { tipo: "triangulo-area", base: "12 cm", altura: "5 cm" },
    ],
    "triangulo-congruencia": [
      { tipo: "triangulo-lados-calculo", lados: ["3 cm", "4 cm", "5 cm"] },
      { tipo: "triangulo-isosceles", esquerda: "5 cm", direita: "7 cm", vertice: "60°", base: "lado incluído" },
      { tipo: "triangulo-angulos-calculo", angulos: ["45°", "65°", "70°"], forma: [45, 65, 70] },
      { tipo: "triangulo-lados-calculo", lados: ["6 cm", "8 cm", "10 cm"] },
    ],
    "triangulo-existencia": [
      { tipo: "triangulo-lados-calculo", lados: ["5 cm", "6 cm", "8 cm"] },
      { tipo: "triangulo-lados-calculo", lados: ["4 cm", "5 cm", "9 cm"] },
      { tipo: "triangulo-lados-calculo", lados: ["2 cm", "6 cm", "7 cm"] },
    ],
    "triangulo-classificacao": [
      { tipo: "triangulo-lados-calculo", lados: ["6 cm", "6 cm", "9 cm"] },
      { tipo: "triangulo-angulos-calculo", angulos: ["45°", "45°", "90°"], forma: [45, 45, 90] },
      { tipo: "triangulo-isosceles", esquerda: "5 cm", direita: "5 cm", vertice: "90°", base: "5√2 cm", medidasLados: true },
    ],
    "triangulo-isosceles": [
      { tipo: "triangulo-isosceles", esquerda: "7 cm", direita: "7 cm", base: "4 cm" },
      { tipo: "triangulo-isosceles", esquerda: "65°", direita: "65°", vertice: "50°" },
      { tipo: "triangulo-isosceles", esquerda: "70°", direita: "70°", vertice: "40°" },
    ],
    "triangulo-externo": [
      { tipo: "triangulo-externo", internos: ["45°", "65°"], externo: "110°" },
      { tipo: "triangulo-externo", internos: ["45°", "65°"], externo: "110°" },
    ],
    "triangulo-perimetro": [
      { tipo: "triangulo-isosceles", esquerda: "11 cm", direita: "11 cm", base: "8 cm · P = 30 cm" },
      { tipo: "triangulo-isosceles", esquerda: "11 cm", direita: "11 cm", base: "8 cm · P = 30 cm" },
    ],
    "triangulo-segmentos": [
      { tipo: "mediana", partes: ["6 cm", "6 cm"], total: "12 cm" },
      { tipo: "triangulo-area", base: "10 cm", altura: "8 cm · 90°" },
      { tipo: "bissetriz", partes: ["40°", "40°"], total: "80°" },
      { tipo: "mediatriz", distancias: ["PA = 10 cm", "PB = 10 cm"] },
    ],
    "triangulo-centros": [
      { tipo: "baricentro", vg: "12 cm", gm: "6 cm", total: "18 cm" },
      { tipo: "triangulo-area", base: "altura 8 cm", altura: "90°" },
      { tipo: "bissetriz", partes: ["35°", "35°"], total: "70°" },
      { tipo: "mediatriz", distancias: ["5 cm", "5 cm"] },
    ],
    "triangulo-baricentro": [
      { tipo: "baricentro", vg: "10 cm", gm: "5 cm", total: "15 cm" },
      { tipo: "baricentro", vg: "12 cm", gm: "6 cm", total: "18 cm" },
      { tipo: "baricentro", vg: "12 cm", gm: "6 cm", total: "18 cm" },
    ],
    mediatriz: [
      { tipo: "mediana", partes: ["6 cm", "6 cm"], total: "12 cm" },
      { tipo: "mediatriz", distancias: ["PA = 10 cm", "PB = 10 cm"] },
      { tipo: "mediatriz", distancias: ["7 cm", "7 cm"] },
    ],
    "quadrilateros-tipos": [
      { tipo: "quadrado", lado: "5 cm · 90°" },
      { tipo: "retangulo", base: "8 cm", altura: "5 cm" },
      { tipo: "losango-calculo", diagonalMaior: "12 cm", diagonalMenor: "8 cm" },
      { tipo: "trapezio-calculo", baseMaior: "10 cm", baseMenor: "6 cm", altura: "4 cm" },
    ],
    "quadrilatero-angulos": [
      { tipo: "quadrilatero-angulos-calculo", angulos: ["90°", "90°", "90°", "90°"] },
      { tipo: "quadrilatero-angulos-calculo", angulos: ["80°", "100°", "110°", "70°"] },
    ],
    "quadrilatero-area": [
      { tipo: "retangulo", base: "8 cm", altura: "5 cm", interno: "A = 40 cm²" },
      { tipo: "paralelogramo", base: "10 cm", altura: "4 cm" },
      { tipo: "retangulo", base: "10 cm", altura: "4 cm", interno: "A = 40 cm²" },
    ],
    "quadrado-area": [
      { tipo: "quadrado", lado: "6 cm · A = 36 cm²" },
      { tipo: "quadrado", lado: "6 cm · P = 24 cm" },
    ],
    losango: [
      { tipo: "losango-calculo", diagonalMaior: "lado 5 cm", diagonalMenor: "lado 5 cm" },
      { tipo: "losango-calculo", diagonalMaior: "D = 12 cm", diagonalMenor: "d = 8 cm · 90°" },
      { tipo: "losango-calculo", diagonalMaior: "12 cm", diagonalMenor: "8 cm" },
    ],
    trapezio: [
      { tipo: "trapezio-calculo", baseMaior: "B = 10 cm", baseMenor: "b = 6 cm", altura: "h = 4 cm" },
      { tipo: "trapezio-calculo", baseMaior: "10 cm", baseMenor: "6 cm", altura: "4 cm · 90°" },
      { tipo: "trapezio-calculo", baseMaior: "10 cm", baseMenor: "6 cm", altura: "4 cm" },
    ],
    "escala-area": [
      { tipo: "retangulo", base: "8 → 16 cm", altura: "5 cm", interno: "40 → 80 cm²" },
      { tipo: "retangulo", base: "8 → 16 cm", altura: "5 → 10 cm", interno: "40 → 160 cm²" },
      { tipo: "quadrado", lado: "3 → 9 cm · A: 9 → 81 cm²" },
    ],
    "poligonos-nomes": [3, 5, 7, 9].map((n) => ({ tipo: "poligono-calculo", n, centro: `${n} lados`, detalhe: `conte: ${n}` })),
    "poligono-regular": [
      { tipo: "poligono-calculo", n: 6, centro: "lado = 4 cm", detalhe: "6 lados iguais" },
      { tipo: "poligono-calculo", n: 6, centro: "interno = 120°", detalhe: "6 ângulos iguais" },
      { tipo: "poligono-calculo", n: 6, centro: "lado = 4 cm", detalhe: "interno = 120°" },
    ],
    "poligono-diagonais": [
      { tipo: "poligono-calculo", n: 5, centro: "5 lados", detalhe: "diagonal liga não vizinhos" },
      { tipo: "poligono-calculo", n: 6, centro: "6 lados", detalhe: "6 − 3 = 3 por vértice" },
      { tipo: "poligono-calculo", n: 5, centro: "D = 5", detalhe: "5 × 2 ÷ 2" },
    ],
    "poligono-angulos": [
      { tipo: "poligono-calculo", n: 6, centro: "S = 720°", detalhe: "(6 − 2) × 180°" },
      { tipo: "poligono-calculo", n: 6, centro: "interno = 120°", detalhe: "720° ÷ 6" },
      { tipo: "poligono-calculo", n: 8, centro: "externo = 45°", detalhe: "360° ÷ 8" },
    ],
    "poligono-convexidade": [
      { tipo: "poligono-calculo", n: 5, centro: "5 ângulos < 180°", detalhe: "diagonais internas" },
      { tipo: "poligono-calculo", n: 5, centro: "1 ângulo > 180°", detalhe: "há reentrância" },
    ],
    "construcao-angulos": [90, 60, 45, 30].map((angle) => ({ tipo: "poligono-calculo", n: angle === 60 ? 3 : 4, centro: `${angle}°`, detalhe: angle === 45 ? "90° ÷ 2" : angle === 30 ? "60° ÷ 2" : `ângulo de ${angle}°` })),
    "hexagono-inscrito": [
      { tipo: "poligono-calculo", n: 6, centro: "360° ÷ 6", detalhe: "central = 60°" },
      { tipo: "poligono-calculo", n: 6, centro: "raio = 4 cm", detalhe: "lado = 4 cm" },
      { tipo: "poligono-calculo", n: 6, centro: "6 marcações", detalhe: "abertura = 4 cm" },
    ],
    unidades: [
      { tipo: "retangulo", base: "parede = 5 m", altura: "1 dimensão" },
      { tipo: "retangulo", base: "5 m", altura: "4 m", interno: "A = 20 m²" },
      { tipo: "bloco", comprimento: "5 cm", largura: "4 cm", altura: "3 cm" },
      { tipo: "reservatorio", nivelY: 95, percentual: "20 L", capacidade: "capacidade: 20 L" },
    ],
    "volume-capacidade": [
      { tipo: "bloco", comprimento: "5 cm", largura: "4 cm", altura: "3 cm" },
      { tipo: "cubo", aresta: "3 cm" },
      { tipo: "cubo", aresta: "1 dm · V = 1 dm³ = 1 L" },
      { tipo: "bloco", comprimento: "20 cm", largura: "10 cm", altura: "10 cm" },
    ],
    "circulo-area": [
      { tipo: "circulo-calculo", diametro: "10 cm · r = 5 cm" },
      { tipo: "circulo-calculo", raio: "r = 3 cm · A = 28,26 cm²" },
      { tipo: "circulo-calculo", raio: "r = 3 cm · C = 18,84 cm" },
    ],
    "area-composta": [
      { tipo: "area-composta-calculo", base: "14 cm", altura: "8 cm", recorte: "4 × 2 cm" },
      { tipo: "area-composta-calculo", base: "10 cm", altura: "6 cm", recorte: "somar 4 × 3 cm" },
      { tipo: "area-composta-calculo", base: "8 m", altura: "4 m", recorte: "2,5 × 2 m" },
    ],
    "comparar-areas": [
      { tipo: "quadrado", lado: "6 cm · A = 36 cm²" },
      { tipo: "circulo-calculo", raio: "r = 3 cm · A = 28,26 cm²" },
    ],
  };
  return specs[visual] || [{ tipo: "triangulo-angulos-calculo", angulos: ["50°", "70°", "60°"], forma: [50, 70, 60] }];
}

function createGeometryWorkedDiagram(visual, index = 0, question = null, isMain = false) {
  if (!question?.diagrama && visual === "triangulo-congruencia") {
    const open = `<svg viewBox="0 0 480 240" role="img" aria-label="Dois triângulos congruentes com medidas correspondentes"><rect x="4" y="4" width="472" height="232" rx="20" fill="#fff"/>`;
    const close = "</svg>";
    if (index === 1) return `${open}
      <path d="M35 190h140L85 103.397Z" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/><path d="M275 190h140l-90-86.603Z" fill="#e8f8f1" stroke="#2b9b74" stroke-width="5"/>
      <text x="105" y="218" text-anchor="middle">7 cm</text><text x="49" y="148">5 cm</text><text x="69" y="181">60°</text>
      <text x="345" y="218" text-anchor="middle">7 cm</text><text x="289" y="148">5 cm</text><text x="309" y="181">60°</text><text x="240" y="30" text-anchor="middle">LAL: 5 cm · 60° · 7 cm</text>${close}`;
    if (index === 2) {
      const first = triangleFromBaseAngles(35, 190, 145, 45, 70);
      const second = { points: first.points.map((point) => ({ x: point.x + 250, y: point.y })) };
      return `${open}<path d="${trianglePath(first)}" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/><path d="${trianglePath(second)}" fill="#e8f8f1" stroke="#2b9b74" stroke-width="5"/>
        <text x="108" y="218" text-anchor="middle">8 cm</text><text x="58" y="178">45°</text><text x="153" y="178">70°</text>
        <text x="358" y="218" text-anchor="middle">8 cm</text><text x="308" y="178">45°</text><text x="403" y="178">70°</text><text x="240" y="30" text-anchor="middle">ALA: 45° · 8 cm · 70°</text>${close}`;
    }
    const scale = index === 3 ? 2 : 1;
    const values = scale === 2 ? ["6 cm", "8 cm", "10 cm"] : ["3 cm", "4 cm", "5 cm"];
    return `${open}<path d="M45 190V70h90Z" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/><path d="M285 190V70h90Z" fill="#e8f8f1" stroke="#2b9b74" stroke-width="5"/>
      <text x="90" y="218" text-anchor="middle">${values[0]}</text><text x="30" y="135">${values[1]}</text><text x="100" y="125">${values[2]}</text>
      <text x="330" y="218" text-anchor="middle">${values[0]}</text><text x="270" y="135">${values[1]}</text><text x="340" y="125">${values[2]}</text><text x="240" y="30" text-anchor="middle">${values.join(" · ")} nos dois</text>${close}`;
  }
  if (!question?.diagrama && visual === "triangulo-existencia" && index === 1) {
    return `<svg viewBox="0 0 480 240" role="img" aria-label="Segmentos de quatro, cinco e nove centímetros alinhados, sem formar triângulo"><rect x="4" y="4" width="472" height="232" rx="20" fill="#fff"/>
      <path d="M40 130h180" stroke="#7157d9" stroke-width="7"/><path d="M220 130h220" stroke="#2b9b74" stroke-width="7"/><path d="M40 175h400" stroke="#d49a18" stroke-width="7"/>
      <text x="130" y="115" text-anchor="middle">4 cm</text><text x="330" y="115" text-anchor="middle">5 cm</text><text x="240" y="205" text-anchor="middle">9 cm</text><text x="240" y="45" text-anchor="middle">4 + 5 = 9 → fica alinhado</text>${"</svg>"}`;
  }
  if (!question?.diagrama && visual === "quadrilatero-area" && index === 0 && isMain) {
    return `<svg viewBox="0 0 480 240" role="img" aria-label="Paralelogramo e retângulo com base dez e altura quatro, ambos com área quarenta">
      <rect x="4" y="4" width="472" height="232" rx="20" fill="#fff"/>
      <path d="M28 174 78 54h150l-50 120Z" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/>
      <path d="M78 54v120" stroke="#2b9b74" stroke-width="4" stroke-dasharray="8 6"/><path d="M78 154h20v20" fill="none" stroke="#df7a30" stroke-width="4"/>
      <path d="M272 54h180v120H272Z" fill="#e8f8f1" stroke="#2b9b74" stroke-width="5"/><path d="M272 154h20v20" fill="none" stroke="#df7a30" stroke-width="4"/>
      <text x="128" y="207" text-anchor="middle">b = 10 cm</text><text x="61" y="115" text-anchor="middle">h = 4 cm</text>
      <text x="362" y="207" text-anchor="middle">b = 10 cm</text><text x="255" y="115" text-anchor="middle">h = 4 cm</text>
      <text x="150" y="125" text-anchor="middle">A = 40 cm²</text><text x="362" y="125" text-anchor="middle">A = 40 cm²</text>
    </svg>`;
  }
  if (!question?.diagrama && visual === "poligono-convexidade" && isMain) {
    return `<svg viewBox="0 0 480 240" role="img" aria-label="Polígono convexo e polígono não convexo com ângulos medidos">
      <rect x="4" y="4" width="472" height="232" rx="20" fill="#fff"/>
      <path d="M40 170 65 75 150 40 215 105 185 190 85 195Z" fill="#e8f8f1" stroke="#2b9b74" stroke-width="5"/>
      <path d="M270 55H440V195H360V125H270Z" fill="#fff0e4" stroke="#df7a30" stroke-width="5"/>
      <text x="128" y="25" text-anchor="middle">todos os ângulos &lt; 180°</text><text x="355" y="25" text-anchor="middle">reentrância = 270°</text>
      <text x="128" y="224" text-anchor="middle">CONVEXO</text><text x="355" y="224" text-anchor="middle">NÃO CONVEXO</text>
    </svg>`;
  }
  if (!question?.diagrama && visual === "poligono-convexidade" && index === 1) {
    return `<svg viewBox="0 0 480 240" role="img" aria-label="Polígono não convexo com ângulo interno de 270 graus"><rect x="4" y="4" width="472" height="232" rx="20" fill="#fff"/><path d="M95 35H385V210H270V120H95Z" fill="#fff0e4" stroke="#df7a30" stroke-width="6"/><text x="270" y="108" text-anchor="middle">270°</text><text x="240" y="230" text-anchor="middle">ângulo interno maior que 180°</text></svg>`;
  }
  if (!question?.diagrama && visual === "construcao-angulos") {
    const angles = [90, 60, 45, 30];
    const angle = angles[index] || 90;
    const radians = angle * Math.PI / 180;
    const x = geometryRound(95 + 120 * Math.cos(radians));
    const y = geometryRound(190 - 120 * Math.sin(radians));
    return `<svg viewBox="0 0 480 240" role="img" aria-label="Construção exata de um ângulo de ${angle} graus">
      <rect x="4" y="4" width="472" height="232" rx="20" fill="#fff"/>
      <path d="M95 190H405M95 190L${x} ${y}" stroke="#7157d9" stroke-width="6" stroke-linecap="round"/>
      <path d="M155 190 A60 60 0 0 0 ${geometryRound(95 + 60 * Math.cos(radians))} ${geometryRound(190 - 60 * Math.sin(radians))}" fill="none" stroke="#df7a30" stroke-width="5"/>
      <text x="175" y="155" text-anchor="middle">${angle}°</text><text x="240" y="222" text-anchor="middle">${angle === 45 ? "90° ÷ 2 = 45°" : angle === 30 ? "60° ÷ 2 = 30°" : `medida exata: ${angle}°`}</text>
    </svg>`;
  }
  if (!question?.diagrama && visual === "hexagono-inscrito") {
    const points = regularPolygonPoints(240, 120, 88, 6);
    return `<svg viewBox="0 0 480 240" role="img" aria-label="Hexágono regular inscrito com raio e lado de quatro centímetros">
      <rect x="4" y="4" width="472" height="232" rx="20" fill="#fff"/><circle cx="240" cy="120" r="88" fill="#f8fbff" stroke="#bcd5f4" stroke-width="4"/>
      <path d="${polygonPath(points)}" fill="#e7f2ff" fill-opacity=".7" stroke="#3278c8" stroke-width="5"/>
      <path d="M240 120 L${geometryPoint(points[1])} M240 120 L${geometryPoint(points[2])}" stroke="#7157d9" stroke-width="4"/>
      <text x="296" y="93">r = 4 cm</text><text x="240" y="220" text-anchor="middle">lado = 4 cm · ângulo central = 60°</text>
    </svg>`;
  }
  if (!question?.diagrama && visual === "losango" && index === 0) {
    return `<svg viewBox="0 0 480 240" role="img" aria-label="Losango com quatro lados de cinco centímetros"><rect x="4" y="4" width="472" height="232" rx="20" fill="#fff"/><path d="M240 25 425 120 240 215 55 120Z" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/><text x="145" y="74">5 cm</text><text x="335" y="74">5 cm</text><text x="145" y="180">5 cm</text><text x="335" y="180">5 cm</text></svg>`;
  }
  if (!question?.diagrama && visual === "area-composta" && index === 1) {
    return `<svg viewBox="0 0 480 240" role="img" aria-label="Duas áreas retangulares somadas"><rect x="4" y="4" width="472" height="232" rx="20" fill="#fff"/><path d="M45 65h270v130H45Z" fill="#e8f8f1" stroke="#2b9b74" stroke-width="5"/><path d="M315 117h120v78H315Z" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/><text x="180" y="220" text-anchor="middle">10 × 6 = 60 cm²</text><text x="375" y="220" text-anchor="middle">4 × 3 = 12 cm²</text><text x="240" y="35" text-anchor="middle">60 + 12 = 72 cm²</text></svg>`;
  }
  if (!question?.diagrama && visual === "comparar-areas" && index === 0) {
    return `<svg viewBox="0 0 480 240" role="img" aria-label="Comparação numérica entre as áreas de um quadrado e um círculo">
      <rect x="4" y="4" width="472" height="232" rx="20" fill="#fff"/><path d="M50 48h150v150H50Z" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/>
      <circle cx="355" cy="123" r="75" fill="#fff5d7" stroke="#d49a18" stroke-width="5"/><path d="M355 123h75" stroke="#7157d9" stroke-width="5"/>
      <text x="125" y="220" text-anchor="middle">lado 6 cm → A = 36 cm²</text><text x="355" y="220" text-anchor="middle">r = 3 cm → A = 28,26 cm²</text>
    </svg>`;
  }
  const spec = question?.diagrama || getGeometryWorkedSpecs(visual)[index] || getGeometryWorkedSpecs(visual)[0];
  return createGeometryQuestionDiagram(spec);
}

function createGeometryCardDiagram(visual, index, title) {
  const open = (label) => `<svg viewBox="0 0 220 112" role="img" aria-label="${label}"><rect x="1" y="1" width="218" height="110" rx="12" fill="#fff" fill-opacity=".78"/>`;
  const close = "</svg>";
  const triangle = (points, stroke = "#7157d9", fill = "#eee9ff") => `<path d="${trianglePath(points)}" fill="${fill}" stroke="${stroke}" stroke-width="3"/>`;

  if (visual === "triangulo-lados") {
    const specs = [
      triangleFromBaseAngles(45, 87, 130, 60, 60),
      triangleFromBaseAngles(45, 87, 130, 68, 68),
      triangleFromBaseAngles(45, 87, 130, 43, 71),
    ];
    const labels = ["5 cm", "7 · 7 · 4 cm", "4 · 5 · 6 cm"];
    return `${open(`${title}: medidas dos lados`)}${triangle(specs[index] || specs[0])}<text x="110" y="105" text-anchor="middle">${labels[index] || labels[0]}</text>${close}`;
  }

  if (visual === "triangulo-angulos") {
    if (index === 1) return `${open("Triângulo retângulo de 30, 60 e 90 graus")}<path d="M45 88V25h110Z" fill="#e7f2ff" stroke="#3278c8" stroke-width="3"/><path d="M45 74h14v14" fill="none" stroke="#df7a30" stroke-width="3"/><text x="31" y="63">90°</text><text x="110" y="105" text-anchor="middle">30° + 60° + 90°</text>${close}`;
    const spec = index === 2
      ? triangleFromBaseAngles(35, 87, 150, 25, 35)
      : triangleFromBaseAngles(35, 87, 150, 50, 60);
    const labels = index === 2 ? ["25°", "120°", "35°"] : ["50°", "70°", "60°"];
    const apex = spec.points[1];
    return `${open(`${title}: ângulos medidos`)}${triangle(spec, index === 2 ? "#df7a30" : "#2b9b74", index === 2 ? "#fff0e4" : "#e8f8f1")}<text x="39" y="102">${labels[0]}</text><text x="${geometryRound(apex.x)}" y="${geometryRound(apex.y + 18)}" text-anchor="middle">${labels[1]}</text><text x="181" y="102" text-anchor="end">${labels[2]}</text>${close}`;
  }

  if (visual === "quadrilateros-tipos") {
    const figures = [
      '<path d="M70 18h80v80H70Z" fill="#eee9ff" stroke="#7157d9" stroke-width="4"/>',
      '<path d="M45 30h130v68H45Z" fill="#e8f8f1" stroke="#2b9b74" stroke-width="4"/>',
      '<path d="M110 12 174 56 110 100 46 56Z" fill="#e7f2ff" stroke="#3278c8" stroke-width="4"/>',
      '<path d="M38 96 68 25h84l30 71Z" fill="#fff5d7" stroke="#d49a18" stroke-width="4"/>',
    ];
    return `${open(title)}${figures[index] || figures[0]}${close}`;
  }

  if (visual === "triangulo-segmentos") {
    const base = '<path d="M30 92 98 18 190 92Z" fill="#f7f4ff" stroke="#7157d9" stroke-width="3"/>';
    const marks = [
      '<path d="M98 18 110 92" stroke="#df7a30" stroke-width="4"/><path d="M102 92h16" stroke="#3278c8" stroke-width="3"/>',
      '<path d="M98 18v74" stroke="#2b9b74" stroke-width="4"/><path d="M98 79h13v13" fill="none" stroke="#df7a30" stroke-width="3"/>',
      '<path d="M98 18 103.6 92" stroke="#3278c8" stroke-width="4"/><path d="M83 30q14 11 27 1" fill="none" stroke="#df7a30" stroke-width="3"/>',
      '<path d="M110 7v98" stroke="#d49a18" stroke-width="4" stroke-dasharray="6 4"/><path d="M110 79h13v13" fill="none" stroke="#df7a30" stroke-width="3"/>',
    ];
    return `${open(title)}${base}${marks[index] || marks[0]}${close}`;
  }

  if (visual === "poligonos-nomes") {
    const pair = [[3, 4], [5, 6], [7, 8], [9, 10]][index] || [3, 4];
    const first = regularPolygonPoints(65, 55, 35, pair[0]);
    const second = regularPolygonPoints(157, 55, 35, pair[1]);
    return `${open(`${pair[0]} e ${pair[1]} lados`)}<path d="${polygonPath(first)}" fill="#eee9ff" stroke="#7157d9" stroke-width="3"/><path d="${polygonPath(second)}" fill="#e8f8f1" stroke="#2b9b74" stroke-width="3"/><text x="65" y="105" text-anchor="middle">${pair[0]} lados</text><text x="157" y="105" text-anchor="middle">${pair[1]} lados</text>${close}`;
  }

  if (visual === "construcao-angulos") {
    const angles = [90, 60, 45, 30];
    const angle = angles[index] || 90;
    const radians = angle * Math.PI / 180;
    const endX = 42 + 70 * Math.cos(radians);
    const endY = 92 - 70 * Math.sin(radians);
    return `${open(`Construção exata de ${angle} graus`)}<path d="M42 92h145M42 92 ${geometryRound(endX)} ${geometryRound(endY)}" stroke="#7157d9" stroke-width="4" stroke-linecap="round"/><path d="M70 92 A28 28 0 0 0 ${geometryRound(42 + 28 * Math.cos(radians))} ${geometryRound(92 - 28 * Math.sin(radians))}" fill="none" stroke="#df7a30" stroke-width="4"/><text x="110" y="108" text-anchor="middle">${angle}°</text>${close}`;
  }

  if (visual === "escala-area") {
    const shapes = [
      '<path d="M18 52h55v40H18ZM118 52h110v40H118Z" transform="scale(.9 1)" fill="#eee9ff" stroke="#7157d9" stroke-width="3"/>',
      '<path d="M16 60h50v30H16ZM105 30h100v60H105Z" fill="#e8f8f1" stroke="#2b9b74" stroke-width="3"/>',
      '<path d="M16 68h30v20H16ZM92 28h90v60H92Z" fill="#e7f2ff" stroke="#3278c8" stroke-width="3"/>',
    ];
    return `${open(title)}${shapes[index] || shapes[0]}${close}`;
  }

  if (visual === "circulo-area") {
    return `${open(title)}<circle cx="110" cy="55" r="40" fill="#fff5d7" stroke="#d49a18" stroke-width="4"/><path d="M110 55h40" stroke="#7157d9" stroke-width="4"/><circle cx="110" cy="55" r="4" fill="#7157d9"/><text x="130" y="48">r</text>${close}`;
  }

  if (visual === "volume-capacidade" || visual === "unidades") {
    return `${open(title)}<path d="M35 38h95v55H35ZM35 38l28-19h95v55l-28 19M130 38l28-19M130 93l28-19" fill="#e7f2ff" fill-opacity=".75" stroke="#3278c8" stroke-width="3"/><text x="176" y="61" text-anchor="middle">1 dm³</text><text x="176" y="82" text-anchor="middle">= 1 L</text>${close}`;
  }

  return createGeometryWorkedDiagram(visual, index);
}

function renderGeometryVisualLesson(guide, question) {
  const figure = document.createElement("div");
  figure.className = "geometry-main-figure";
  const figureTitle = document.createElement("strong");
  const figureHint = document.createElement("span");
  const figureDiagram = document.createElement("div");
  figureTitle.textContent = "Exemplo visual com valores";
  figureHint.textContent = question?.diagrama
    ? "Use as medidas da questão para acompanhar o raciocínio."
    : "Observe as medidas no desenho antes de aplicar a regra.";
  figureDiagram.className = "geometry-main-worked-diagram";
  figureDiagram.innerHTML = createGeometryWorkedDiagram(guide.visual, 0, question, true);
  figure.append(figureTitle, figureHint, figureDiagram);
  learnIllustration.appendChild(figure);

  if (!guide.quadro?.length) return;

  const reference = document.createElement("section");
  reference.className = "geometry-reference";
  const heading = document.createElement("div");
  heading.className = "learn-visual-heading";
  heading.innerHTML = "<strong>Veja, compare e aprenda</strong><span>Use o desenho e os cartões juntos para reconhecer cada caso.</span>";
  const grid = document.createElement("div");
  grid.className = "geometry-reference-grid";

  guide.quadro.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = `geometry-reference-card tone-${item.tom || ["roxo", "verde", "azul", "laranja"][index % 4]}`;
    const title = document.createElement("strong");
    const text = document.createElement("p");
    title.textContent = item.titulo;
    text.textContent = item.texto;
    const diagram = document.createElement("div");
    diagram.className = "geometry-card-diagram";
    diagram.innerHTML = createGeometryWorkedDiagram(guide.visual, index);
    card.append(title, text, diagram);
    if (item.exemplo) appendMiniExample(card, item.exemplo);
    grid.appendChild(card);
  });

  reference.append(heading, grid);
  learnIllustration.appendChild(reference);
}

function renderLearnGuide() {
  const question = quizQuestions[currentQuestion];
  const guide = obterGuiaAprender(question);
  if (!guide) return;

  const isPortuguese = question.materia === PORTUGUESE_SUBJECT;
  const isGeometry = question.materia === GEOMETRY_SUBJECT;
  learnPanel.classList.toggle("is-portuguese-guide", isPortuguese);
  learnPanel.classList.toggle("is-geometry-guide", isGeometry);
  learnKicker.textContent = isGeometry ? "AULA VISUAL · CONTEÚDO COMPLETO" : "GUIA DE APRENDIZAGEM";

  learnTitle.textContent = guide.titulo;
  learnIntro.textContent = guide.introducao;
  learnIllustration.replaceChildren();
  if (isPortuguese) renderPortugueseConceptMap(guide);
  else if (isGeometry) renderGeometryVisualLesson(guide, question);
  else learnIllustration.innerHTML = createLearnIllustration(question.materia, guide.visual);
  learnDiagram.replaceChildren();
  guide.diagrama.forEach((step, index) => {
    const node = document.createElement("span");
    node.textContent = step;
    learnDiagram.appendChild(node);
    if (index < guide.diagrama.length - 1) {
      const connector = document.createElement("b");
      connector.textContent = "›";
      connector.setAttribute("aria-hidden", "true");
      learnDiagram.appendChild(connector);
    }
  });

  learnSections.replaceChildren();
  guide.secoes.forEach((section, sectionIndex) => {
    const article = document.createElement("article");
    article.className = `learn-section tone-${section.tom || ["roxo", "verde", "azul"][sectionIndex % 3]}`;
    const heading = document.createElement("div");
    const number = document.createElement("span");
    const title = document.createElement("h4");
    const text = document.createElement("p");
    heading.className = "learn-section-heading";
    number.className = "learn-section-number";
    number.textContent = String(sectionIndex + 1).padStart(2, "0");
    title.textContent = section.titulo;
    text.textContent = section.texto;
    heading.append(number, title);
    article.append(heading, text);
    if (section.termos?.length) {
      const keywords = document.createElement("div");
      keywords.className = "learn-keywords";
      section.termos.forEach((keyword) => {
        const chip = document.createElement("span");
        chip.textContent = keyword;
        keywords.appendChild(chip);
      });
      article.appendChild(keywords);
    }
    if (section.exemplos?.length) {
      const exampleLabel = document.createElement("strong");
      const list = document.createElement("ul");
      exampleLabel.textContent = "Exemplos paralelos";
      section.exemplos.forEach((example) => {
        const item = document.createElement("li");
        const [sentence, ...analysis] = example.split("→");
        const sentenceText = document.createElement("span");
        sentenceText.className = "example-sentence";
        sentenceText.textContent = sentence.trim();
        item.appendChild(sentenceText);
        if (analysis.length) {
          const connector = document.createElement("span");
          const result = document.createElement("span");
          connector.className = "example-connector";
          connector.textContent = "então";
          result.className = "example-result";
          result.textContent = analysis.join("→").trim();
          item.append(connector, result);
        }
        list.appendChild(item);
      });
      article.append(exampleLabel, list);
    }
    learnSections.appendChild(article);
  });

  learnPanel.hidden = false;
  learnButton.setAttribute("aria-expanded", "true");
  learnButton.classList.add("is-open");
  learnPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function toggleLearnGuide() {
  if (learnPanel.hidden) renderLearnGuide();
  else closeLearnGuide();
}

function createGeometryQuestionDiagram(spec) {
  const open = (label) => `<svg viewBox="0 0 480 240" role="img" aria-label="${label}"><rect x="4" y="4" width="472" height="232" rx="20" fill="#fff"/>`;
  const close = "</svg>";
  const label = (x, y, value, anchor = "middle") => `<text x="${x}" y="${y}" text-anchor="${anchor}">${value}</text>`;

  if (spec.tipo === "triangulo-angulos-calculo") {
    const shape = spec.forma || [50, 70, 60];
    const leftRadians = shape[0] * Math.PI / 180;
    const rightRadians = shape[2] * Math.PI / 180;
    const heightPerWidth = Math.tan(leftRadians) * Math.tan(rightRadians) / (Math.tan(leftRadians) + Math.tan(rightRadians));
    const width = Math.min(350, 140 / heightPerWidth);
    const triangle = triangleFromBaseAngles((480 - width) / 2, 190, width, shape[0], shape[2]);
    const [left, apex, right] = triangle.points;
    return `${open("Triângulo com ângulos indicados")}
      <path d="${trianglePath(triangle)}" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/>
      <path d="${geometryAngleArc(left, apex, right)} ${geometryAngleArc(apex, left, right)} ${geometryAngleArc(right, apex, left)}" fill="none" stroke="#df7a30" stroke-width="4"/>
      ${label(left.x + 34, left.y - 16, spec.angulos[0])}${label(apex.x, apex.y + 38, spec.angulos[1])}${label(right.x - 34, right.y - 16, spec.angulos[2])}${close}`;
  }

  if (spec.tipo === "triangulo-area") return `${open("Triângulo com base e altura indicadas")}
    <path d="M55 190 245 38 425 190Z" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/>
    <path d="M245 38V190" stroke="#2b9b74" stroke-width="5" stroke-dasharray="9 7"/><path d="M245 170h20v20" fill="none" stroke="#df7a30" stroke-width="4"/>
    ${label(240, 222, spec.base)}${label(278, 112, spec.altura, "start")}${close}`;

  if (spec.tipo === "triangulo-isosceles") {
    const vertexAngle = Number.parseFloat(spec.vertice);
    const baseAngle = Number.isFinite(vertexAngle) ? (180 - vertexAngle) / 2 : 48;
    const maxWidth = 350;
    const width = Math.min(maxWidth, 290 / Math.tan(baseAngle * Math.PI / 180));
    const triangle = triangleFromBaseAngles((480 - width) / 2, 190, width, baseAngle, baseAngle);
    const [left, apex, right] = triangle.points;
    const leftSideLabel = { x: (left.x + apex.x) / 2 - 18, y: (left.y + apex.y) / 2 };
    const rightSideLabel = { x: (right.x + apex.x) / 2 + 18, y: (right.y + apex.y) / 2 };
    return `${open("Triângulo isósceles com medidas indicadas")}
      <path d="${trianglePath(triangle)}" fill="#e8f8f1" stroke="#2b9b74" stroke-width="5"/>
      ${geometrySideTicks(left, apex, 1)}${geometrySideTicks(apex, right, 1)}
      ${label(apex.x, apex.y + 36, spec.vertice || "")}${spec.medidasLados || !spec.vertice ? label(leftSideLabel.x, leftSideLabel.y, spec.esquerda || "") : label(left.x + 35, left.y - 18, spec.esquerda || "")}${spec.medidasLados || !spec.vertice ? label(rightSideLabel.x, rightSideLabel.y, spec.direita || "") : label(right.x - 35, right.y - 18, spec.direita || "")}${spec.base ? label(240, 220, spec.base) : ""}${close}`;
  }

  if (spec.tipo === "triangulo-lados-calculo") return `${open("Triângulo com medidas dos lados")}
    <path d="M65 190 230 35 420 190Z" fill="#fff5d7" stroke="#d49a18" stroke-width="5"/>
    ${label(128, 105, spec.lados[0])}${label(337, 105, spec.lados[1])}${label(242, 218, spec.lados[2])}${close}`;

  if (spec.tipo === "triangulo-externo") {
    const leftAngle = Number.parseFloat(spec.internos[0]);
    const apexAngle = Number.parseFloat(spec.internos[1]);
    const rightAngle = 180 - leftAngle - apexAngle;
    const leftTangent = Math.tan(leftAngle * Math.PI / 180);
    const rightTangent = Math.tan(rightAngle * Math.PI / 180);
    const heightPerWidth = leftTangent * rightTangent / (leftTangent + rightTangent);
    const width = Math.min(315, 135 / heightPerWidth);
    const triangle = triangleFromBaseAngles(45, 185, width, leftAngle, rightAngle);
    const [left, apex, right] = triangle.points;
    const extension = { x: 462, y: right.y };
    return `${open("Triângulo exato com ângulo externo")}
      <path d="${trianglePath(triangle)}" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/><path d="M${geometryPoint(right)} L${geometryPoint(extension)}" stroke="#7157d9" stroke-width="5"/>
      <path d="${geometryAngleArc(left, apex, right)} ${geometryAngleArc(apex, left, right)} ${geometryAngleArc(right, apex, extension, 38)}" fill="none" stroke="#df7a30" stroke-width="4"/>
      ${label(left.x + 35, left.y - 18, spec.internos[0])}${label(apex.x, apex.y + 38, spec.internos[1])}${label(right.x - 34, right.y - 18, `${rightAngle}°`)}${label(right.x + 42, right.y - 38, spec.externo)}${close}`;
  }

  if (spec.tipo === "mediana") return `${open("Mediana dividindo o lado oposto ao meio")}
    <path d="M55 190 235 35 425 190Z" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/><path d="M235 35 240 190" stroke="#3278c8" stroke-width="5"/>
    <circle cx="240" cy="190" r="7" fill="#df7a30"/><path d="M145 180v20M335 180v20" stroke="#df7a30" stroke-width="4"/>
    ${label(145, 212, spec.partes[0])}${label(335, 212, spec.partes[1])}${spec.total ? label(240, 232, `lado inteiro = ${spec.total}`) : ""}${close}`;

  if (spec.tipo === "bissetriz") return `${open("Bissetriz dividindo um ângulo em duas partes iguais")}
    <path d="M55 190 240 35 425 190Z" fill="#e7f2ff" stroke="#3278c8" stroke-width="5"/><path d="M240 35V190" stroke="#7157d9" stroke-width="5"/>
    <path d="M207 65q16 18 33 23M240 88q17-5 33-23" fill="none" stroke="#df7a30" stroke-width="4"/>
    ${label(208, 91, spec.partes[0])}${label(273, 91, spec.partes[1])}${spec.total ? label(240, 25, spec.total) : ""}${close}`;

  if (spec.tipo === "baricentro") return `${open("Mediana dividida pelo baricentro na razão dois para um")}
    <path d="M70 190 240 30 410 190Z" fill="#f7f4ff" stroke="#7157d9" stroke-width="5"/><path d="M240 30V190" stroke="#3278c8" stroke-width="5"/>
    <circle cx="240" cy="136.667" r="9" fill="#df7a30"/>
    ${label(270, 88, spec.vg, "start")}${label(270, 170, spec.gm, "start")}${spec.total ? label(70, 25, `mediana = ${spec.total}`, "start") : ""}${label(240, 220, "M · ponto médio")}${close}`;

  if (spec.tipo === "mediatriz") return `${open("Ponto sobre a mediatriz de um segmento")}
    <path d="M70 180h340" stroke="#7157d9" stroke-width="6"/><path d="M240 30v190" stroke="#2b9b74" stroke-width="5" stroke-dasharray="8 6"/><path d="M240 160h20v20" fill="none" stroke="#df7a30" stroke-width="4"/>
    <path d="M240 45 70 180M240 45 410 180" stroke="#3278c8" stroke-width="4"/><circle cx="240" cy="45" r="7" fill="#df7a30"/>
    ${label(142, 105, spec.distancias[0])}${label(338, 105, spec.distancias[1])}${label(62, 205, "A")}${label(418, 205, "B")}${close}`;

  if (spec.tipo === "retangulo") return `${open("Retângulo com medidas indicadas")}
    <path d="M85 45h310v145H85Z" fill="#e8f8f1" stroke="#2b9b74" stroke-width="5"/><path d="M85 170h20v20M375 170h20v20" fill="none" stroke="#df7a30" stroke-width="4"/>
    ${label(240, 220, spec.base)}${label(65, 122, spec.altura)}${spec.interno ? label(240, 125, spec.interno) : ""}${close}`;

  if (spec.tipo === "quadrado") return `${open("Quadrado com quatro lados iguais e medida indicada")}
    <path d="M145 25h190v190H145Z" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/><path d="M145 195h20v20" fill="none" stroke="#df7a30" stroke-width="4"/>
    ${label(240, 235, spec.lado)}${label(115, 120, spec.lado)}${close}`;

  if (spec.tipo === "trapezio-calculo") return `${open("Trapézio com bases e altura indicadas")}
    <path d="M55 190 135 45h210l80 145Z" fill="#fff5d7" stroke="#d49a18" stroke-width="5"/><path d="M135 45v145" stroke="#2b9b74" stroke-width="5" stroke-dasharray="8 6"/><path d="M135 170h20v20" fill="none" stroke="#df7a30" stroke-width="4"/>
    ${label(240, 35, spec.baseMenor)}${label(240, 220, spec.baseMaior)}${label(164, 120, spec.altura, "start")}${close}`;

  if (spec.tipo === "losango-calculo") return `${open("Losango com diagonais indicadas")}
    <path d="M240 25 425 120 240 215 55 120Z" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/><path d="M55 120h370M240 25v190" stroke="#2b9b74" stroke-width="5" stroke-dasharray="8 6"/><path d="M240 120h18v18" fill="none" stroke="#df7a30" stroke-width="4"/>
    ${label(335, 109, spec.diagonalMaior)}${label(258, 70, spec.diagonalMenor, "start")}${close}`;

  if (spec.tipo === "quadrilatero-angulos-calculo") {
    const angle = Number.parseFloat(spec.angulos[0]);
    const side = 140;
    const offsetX = side * Math.cos(angle * Math.PI / 180);
    const offsetY = side * Math.sin(angle * Math.PI / 180);
    const leftTopX = 70 + offsetX;
    const topY = 190 - offsetY;
    const rightTopX = 410 + offsetX;
    return `${open("Paralelogramo exato com ângulos opostos iguais e consecutivos suplementares")}
      <path d="M70 190 ${geometryPoint({ x: leftTopX, y: topY })} ${geometryPoint({ x: rightTopX, y: topY })} 410 190Z" fill="#e7f2ff" stroke="#3278c8" stroke-width="5"/>
      ${label(105, 173, spec.angulos[0])}${label(leftTopX + 20, topY + 31, spec.angulos[1])}${label(rightTopX - 28, topY + 31, spec.angulos[2])}${label(385, 173, spec.angulos[3])}${close}`;
  }

  if (spec.tipo === "paralelogramo") return `${open("Paralelogramo com base e altura indicadas")}
    <path d="M55 190 125 45h280l-70 145Z" fill="#e8f8f1" stroke="#2b9b74" stroke-width="5"/><path d="M125 45v145" stroke="#7157d9" stroke-width="5" stroke-dasharray="8 6"/><path d="M125 170h20v20" fill="none" stroke="#df7a30" stroke-width="4"/>
    ${label(235, 220, spec.base)}${label(151, 120, spec.altura, "start")}${close}`;

  if (spec.tipo === "poligono-calculo") {
    if (spec.ocultarLados) return `${open("Polígono com quantidade desconhecida de lados")}
      <path d="M95 178 62 120 95 62 174 34M306 34 385 62 418 120 385 178 306 206" fill="none" stroke="#7157d9" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="220" cy="34" r="5" fill="#7157d9"/><circle cx="240" cy="34" r="5" fill="#7157d9"/><circle cx="260" cy="34" r="5" fill="#7157d9"/>
      ${label(240, 112, spec.centro || "n lados")}${label(240, 140, spec.detalhe)}${label(240, 181, "descubra n sem contar o desenho")}${close}`;
    const points = regularPolygonPoints(240, 120, spec.n > 12 ? 92 : 100, spec.n);
    return `${open(`Polígono regular de ${spec.n} lados`)}<path d="${polygonPath(points)}" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/>
      ${label(240, 112, spec.centro || `${spec.n} lados`)}${spec.detalhe ? label(240, 138, spec.detalhe) : ""}${close}`;
  }

  if (spec.tipo === "bloco") return `${open("Bloco retangular com três dimensões")}
    <path d="M75 80h230v115H75ZM75 80l65-42h230v115l-65 42M305 80l65-42M305 195l65-42" fill="#e7f2ff" fill-opacity=".75" stroke="#3278c8" stroke-width="5"/>
    ${label(190, 224, spec.comprimento)}${label(337, 193, spec.largura)}${label(55, 142, spec.altura)}${close}`;

  if (spec.tipo === "cubo") return `${open("Cubo com aresta indicada")}
    <path d="M115 65h190v140H115ZM115 65l55-35h190v140l-55 35M305 65l55-35M305 205l55-35" fill="#eee9ff" fill-opacity=".8" stroke="#7157d9" stroke-width="5"/>
    ${label(210, 230, spec.aresta)}${label(332, 196, spec.aresta)}${close}`;

  if (spec.tipo === "circulo-calculo") return `${open("Círculo com raio ou diâmetro indicado")}
    <circle cx="240" cy="120" r="92" fill="#fff5d7" stroke="#d49a18" stroke-width="5"/><circle cx="240" cy="120" r="7" fill="#7157d9"/>
    <path d="${spec.diametro ? "M148 120h184" : "M240 120h92"}" stroke="#7157d9" stroke-width="6"/>
    ${label(spec.diametro ? 240 : 286, 108, spec.diametro || spec.raio)}${close}`;

  if (spec.tipo === "area-composta-calculo") return `${open("Figura composta com recorte retangular")}
    <path d="M55 35h370v170H55Z" fill="#e8f8f1" stroke="#2b9b74" stroke-width="5"/><path d="M305 125h120v80H305Z" fill="#fff" stroke="#df7a30" stroke-width="5" stroke-dasharray="8 6"/>
    ${label(240, 230, spec.base)}${label(35, 120, spec.altura)}${label(365, 118, spec.recorte)}${close}`;

  if (spec.tipo === "reservatorio") return `${open("Reservatório com nível de preenchimento")}
    <path d="M105 ${spec.nivelY}h270v${210 - spec.nivelY}H105Z" fill="#bfe9ff"/><path d="M105 30h270v180H105Z" fill="none" stroke="#3278c8" stroke-width="6"/>
    <path d="M105 ${spec.nivelY}h270" stroke="#3278c8" stroke-width="4" stroke-dasharray="9 6"/>${label(240, 128, spec.percentual)}${label(240, 232, spec.capacidade)}${close}`;

  return "";
}

function renderQuestion() {
  const question = quizQuestions[currentQuestion];
  selectedAnswer = null;
  answerConfirmed = false;
  feedback.textContent = "";
  feedback.className = "feedback";
  nextButton.disabled = true;
  nextButton.textContent = "Confirmar resposta";
  closeLearnGuide();

  questionCounter.textContent = `Pergunta ${currentQuestion + 1} de ${quizQuestions.length}`;
  progressBar.style.width = `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;
  questionSubject.textContent = question.materia;
  questionDifficulty.hidden = !question.dificuldade;
  questionDifficulty.textContent = question.dificuldade || "";
  questionDifficulty.dataset.level = question.dificuldade || "";
  questionChapter.textContent = question.capitulo;
  const sourceReference = question.pagina === "Prova Final"
    ? question.pagina
    : `pág. ${question.pagina}`;
  questionContent.textContent = `${question.conteudo} · ${sourceReference}`;
  const hasSourceText = Boolean(question.textoBase?.trim());
  sourceText.hidden = !hasSourceText;
  sourceTextContent.textContent = hasSourceText ? question.textoBase : "";
  questionText.textContent = question.pergunta;
  const hasGeometryDiagram = Boolean(question.diagrama);
  questionGeometry.hidden = !hasGeometryDiagram;
  questionGeometry.innerHTML = hasGeometryDiagram ? createGeometryQuestionDiagram(question.diagrama) : "";
  answerList.replaceChildren();

  question.alternativas.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", "false");
    button.innerHTML = `<span class="answer-letter">${String.fromCharCode(65 + index)}</span><span></span>`;
    button.lastElementChild.textContent = answer;
    button.addEventListener("click", () => selectAnswer(index, button));
    answerList.appendChild(button);
  });
}

function selectAnswer(index, selectedButton) {
  if (answerConfirmed) return;

  selectedAnswer = index;
  answerList.querySelectorAll(".answer-button").forEach((button) => {
    button.classList.remove("is-selected");
    button.setAttribute("aria-checked", "false");
  });
  selectedButton.classList.add("is-selected");
  selectedButton.setAttribute("aria-checked", "true");
  nextButton.disabled = false;
  saveProgress();
}

function confirmOrAdvance() {
  if (selectedAnswer === null) return;

  if (!answerConfirmed) {
    confirmAnswer();
    return;
  }

  currentQuestion += 1;
  if (currentQuestion < quizQuestions.length) {
    renderQuestion();
    saveProgress();
  } else {
    showResults();
  }
}

function confirmAnswer() {
  const question = quizQuestions[currentQuestion];
  const isCorrect = selectedAnswer === question.correta;
  answerConfirmed = true;

  if (isCorrect) {
    score += 1;
  } else {
    wrongAnswers += 1;
  }

  recordQuestionPerformance(question, isCorrect);
  updateQuizStats();
  revealConfirmedAnswer();
  saveProgress();
}

function revealConfirmedAnswer() {
  const question = quizQuestions[currentQuestion];
  const buttons = answerList.querySelectorAll(".answer-button");

  buttons.forEach((button) => {
    button.disabled = true;
  });

  buttons[question.correta]?.classList.add("is-correct");

  if (selectedAnswer === question.correta) {
    feedback.classList.add("is-correct");
    feedback.textContent = `Correto! ${question.explicacao}`;
  } else {
    buttons[selectedAnswer]?.classList.add("is-wrong");
    feedback.classList.add("is-wrong");
    feedback.textContent = `Vamos revisar: ${question.explicacao}`;
  }

  nextButton.textContent = currentQuestion === quizQuestions.length - 1
    ? "Ver meu resultado"
    : "Próxima pergunta";
}

function showResults() {
  const percentage = Math.round((score / quizQuestions.length) * 100);
  scoreValue.textContent = `${score}/${quizQuestions.length}`;
  wrongScoreValue.textContent = wrongAnswers;

  if (percentage === 100) {
    resultMessage.textContent = "Você acertou tudo. Excelente trabalho!";
  } else if (percentage >= 70) {
    resultMessage.textContent = "Ótimo resultado! Você está dominando este conteúdo.";
  } else if (percentage >= 50) {
    resultMessage.textContent = "Bom começo! Revise as explicações e tente mais uma vez.";
  } else {
    resultMessage.textContent = "Cada tentativa faz parte do aprendizado. Continue praticando!";
  }

  showScreen(resultScreen);
  saveProgress("result");
}

function updateHomeState() {
  materialStatus.textContent = `${perguntas.length} questões disponíveis`;
}

startButton.addEventListener("click", openSetup);
beginQuizButton.addEventListener("click", buildQuiz);
nextButton.addEventListener("click", confirmOrAdvance);
restartButton.addEventListener("click", buildQuiz);
contentSelect.addEventListener("change", updateAvailableCount);
learnButton.addEventListener("click", toggleLearnGuide);
closeLearnButton.addEventListener("click", closeLearnGuide);
performanceContentFilter.addEventListener("change", renderPerformance);
performanceStatusFilter.addEventListener("change", renderPerformance);
performanceSearch.addEventListener("input", renderPerformance);

document.querySelectorAll("[data-open-performance]").forEach((button) => {
  button.addEventListener("click", openPerformance);
});

amountButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedAmount = button.dataset.amount;
    amountButtons.forEach((item) => {
      const isSelected = item === button;
      item.classList.toggle("is-selected", isSelected);
      item.setAttribute("aria-checked", String(isSelected));
    });
  });
});

difficultyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedDifficulty = button.dataset.difficulty;
    difficultyButtons.forEach((item) => {
      const isSelected = item === button;
      item.classList.toggle("is-selected", isSelected);
      item.setAttribute("aria-checked", String(isSelected));
    });
    updateAvailableCount();
  });
});

document.querySelectorAll("[data-go-home]").forEach((button) => {
  button.addEventListener("click", () => showScreen(welcomeScreen));
});

document.querySelector(".brand").addEventListener("click", (event) => {
  event.preventDefault();
  showScreen(welcomeScreen);
});

populateSubjects();
updateHomeState();
restoreProgress();
