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
  return [question.materia, question.capitulo, question.conteudo, question.pergunta].join("|||" );
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
    const selectedIds = new Set(selected.map((question) => question.pergunta));
    const remaining = [
      ...groups["Fácil"],
      ...groups["Médio"],
      ...groups["Difícil"],
    ].filter((question) => !selectedIds.has(question.pergunta));
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
    questionIds: quizQuestions.map((question) => question.pergunta),
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

  const questionsById = new Map(perguntas.map((question) => [question.pergunta, question]));
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

function createGeometryLearnIllustration(visual) {
  const open = (label) => `<svg viewBox="0 0 520 220" role="img" aria-label="${label}"><rect x="12" y="12" width="496" height="196" rx="22" fill="#fff"/>`;
  const close = "</svg>";

  if (visual === "triangulo-lados") return `${open("Três tipos de triângulo classificados pelos lados")}
    <path d="M28 154 90 57l62 97Z" fill="#eee9ff" stroke="#7157d9" stroke-width="4"/><path d="M42 132l12 8M126 140l12-8M84 67h12" stroke="#df7a30" stroke-width="4"/>
    <path d="M181 154 248 58l85 96Z" fill="#e8f8f1" stroke="#2b9b74" stroke-width="4"/><path d="M198 130l12 8M305 138l12-8" stroke="#df7a30" stroke-width="4"/>
    <path d="M360 154 415 47l82 107Z" fill="#fff5d7" stroke="#d49a18" stroke-width="4"/><path d="M374 128l11 7M466 135l13-9M408 62l12 5M411 68l12 5" stroke="#df7a30" stroke-width="4"/>
    <text x="90" y="183" text-anchor="middle">EQUILÁTERO</text><text x="257" y="183" text-anchor="middle">ISÓSCELES</text><text x="427" y="183" text-anchor="middle">ESCALENO</text>
    <text x="90" y="202" text-anchor="middle">3 lados iguais</text><text x="257" y="202" text-anchor="middle">2 lados iguais</text><text x="427" y="202" text-anchor="middle">3 lados diferentes</text>${close}`;

  if (visual === "triangulo-angulos") return `${open("Três tipos de triângulo classificados pelos ângulos")}
    <path d="M25 155 88 56l72 99Z" fill="#e8f8f1" stroke="#2b9b74" stroke-width="4"/><path d="M46 140q18-20 36-5" fill="none" stroke="#df7a30" stroke-width="4"/>
    <path d="M185 155V62l125 93Z" fill="#e7f2ff" stroke="#3278c8" stroke-width="4"/><path d="M185 135h20v20" fill="none" stroke="#df7a30" stroke-width="4"/>
    <path d="M344 155 408 81l92 74Z" fill="#fff0e4" stroke="#df7a30" stroke-width="4"/><path d="M365 151q22-45 55-45" fill="none" stroke="#7157d9" stroke-width="4"/>
    <text x="91" y="183" text-anchor="middle">ACUTÂNGULO</text><text x="245" y="183" text-anchor="middle">RETÂNGULO</text><text x="421" y="183" text-anchor="middle">OBTUSÂNGULO</text>
    <text x="91" y="202" text-anchor="middle">todos &lt; 90°</text><text x="245" y="202" text-anchor="middle">um = 90°</text><text x="421" y="202" text-anchor="middle">um &gt; 90°</text>${close}`;

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
    <path d="M55 82h100v90H55Z" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/><path d="M250 30h210v142H250Z" fill="#e8f8f1" stroke="#2b9b74" stroke-width="5"/>
    <path d="M177 105h45" stroke="#df7a30" stroke-width="5"/><path d="m211 94 12 11-12 11" fill="none" stroke="#df7a30" stroke-width="4"/>
    <text x="105" y="199" text-anchor="middle">medidas × 1</text><text x="355" y="199" text-anchor="middle">medidas ampliadas → área cresce em duas direções</text>${close}`;

  if (visual === "poligonos-nomes") return `${open("Polígonos organizados pelo número de lados")}
    <path d="M28 140 72 58l44 82Z" fill="#eee9ff" stroke="#7157d9" stroke-width="4"/><path d="M140 58h82v82h-82Z" fill="#e8f8f1" stroke="#2b9b74" stroke-width="4"/>
    <path d="m294 52 48 35-18 56h-60l-18-56Z" fill="#e7f2ff" stroke="#3278c8" stroke-width="4"/><path d="m430 47 48 28v56l-48 28-48-28V75Z" fill="#fff5d7" stroke="#d49a18" stroke-width="4"/>
    <text x="72" y="170" text-anchor="middle">3 · TRIÂNGULO</text><text x="181" y="170" text-anchor="middle">4 · QUADRILÁTERO</text><text x="294" y="170" text-anchor="middle">5 · PENTÁGONO</text><text x="430" y="170" text-anchor="middle">6 · HEXÁGONO</text>
    <text x="260" y="203" text-anchor="middle">o nome depende da quantidade de lados do contorno</text>${close}`;

  if (visual === "poligono-regular") return `${open("Comparação entre polígono regular e irregular")}
    <path d="m145 38 83 60-32 98H94L62 98Z" fill="#e8f8f1" stroke="#2b9b74" stroke-width="5"/><path d="m385 44 84 45-25 99H330L300 105Z" fill="#fff0e4" stroke="#df7a30" stroke-width="5"/>
    <text x="145" y="216" text-anchor="middle">REGULAR · lados e ângulos iguais</text><text x="385" y="216" text-anchor="middle">IRREGULAR · medidas diferentes</text>${close}`;

  if (visual === "poligono-convexidade") return `${open("Comparação entre polígono convexo e não convexo")}
    <path d="m140 38 92 56-28 102H78L48 92Z" fill="#e8f8f1" stroke="#2b9b74" stroke-width="5"/><path d="m350 45 120 48-70 25 56 78H300l38-78-70-25Z" fill="#fff0e4" stroke="#df7a30" stroke-width="5"/>
    <path d="M90 80 205 170M300 80 444 170" stroke="#7157d9" stroke-width="3" stroke-dasharray="7 6"/>
    <text x="140" y="216" text-anchor="middle">CONVEXO · sem reentrância</text><text x="370" y="216" text-anchor="middle">NÃO CONVEXO · com reentrância</text>${close}`;

  if (visual === "triangulo-area") return `${open("Triângulo com base e altura perpendicular")}
    <path d="M90 174h330L260 42Z" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/>
    <path d="M260 42v132" stroke="#2b9b74" stroke-width="5" stroke-dasharray="8 7"/>
    <path d="M260 154h20v20" fill="none" stroke="#2b9b74" stroke-width="4"/>
    <text x="255" y="202" text-anchor="middle">BASE</text><text x="285" y="108">ALTURA ⟂</text>${close}`;

  if (visual === "triangulo-congruencia") return `${open("Dois triângulos com lados e ângulos correspondentes marcados")}
    <path d="M45 165 145 48l92 117Z" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/>
    <path d="M283 165 383 48l92 117Z" fill="#e8f8f1" stroke="#2b9b74" stroke-width="5"/>
    <path d="M89 113h18M327 113h18M184 108l15 11M422 108l15 11" stroke="#df7a30" stroke-width="5"/>
    <path d="M125 70q20 11 30 30M363 70q20 11 30 30" fill="none" stroke="#3278c8" stroke-width="4"/>
    <text x="260" y="201" text-anchor="middle">COMPARE AS MARCAS CORRESPONDENTES</text>${close}`;

  if (visual === "triangulo-existencia") return `${open("Três segmentos tentando fechar um triângulo")}
    <path d="M70 170 230 52l215 118" fill="none" stroke="#7157d9" stroke-width="6" stroke-linecap="round"/>
    <path d="M70 170h375" stroke="#2b9b74" stroke-width="6"/>
    <text x="145" y="100">a</text><text x="350" y="100">b</text><text x="258" y="197">maior lado c</text>
    <rect x="178" y="22" width="164" height="34" rx="12" fill="#fff5cf"/><text x="260" y="44" text-anchor="middle">a + b precisa superar c</text>${close}`;

  if (visual === "triangulo-segmentos") return `${open("Mediana, altura, bissetriz e mediatriz")}
    <path d="M18 132 70 42l52 90Z" fill="#f7f4ff" stroke="#7157d9" stroke-width="3"/><path d="M70 42v90" stroke="#7157d9" stroke-width="4"/><circle cx="70" cy="132" r="4" fill="#df7a30"/>
    <path d="M146 132 198 42l52 90Z" fill="#f7f4ff" stroke="#2b9b74" stroke-width="3"/><path d="M198 42v90" stroke="#2b9b74" stroke-width="4"/><path d="M198 120h12v12" fill="none" stroke="#df7a30" stroke-width="3"/>
    <path d="M274 132 326 42l52 90Z" fill="#f7f4ff" stroke="#3278c8" stroke-width="3"/><path d="M326 42 310 132" stroke="#3278c8" stroke-width="4"/><path d="M304 57q20 13 38 0" fill="none" stroke="#df7a30" stroke-width="3"/>
    <path d="M402 132 454 42l52 90Z" fill="#f7f4ff" stroke="#d49a18" stroke-width="3"/><path d="M454 25v132" stroke="#d49a18" stroke-width="4" stroke-dasharray="6 5"/><path d="M454 120h12v12" fill="none" stroke="#df7a30" stroke-width="3"/>
    <text x="70" y="164" text-anchor="middle">MEDIANA</text><text x="198" y="164" text-anchor="middle">ALTURA</text><text x="326" y="164" text-anchor="middle">BISSETRIZ</text><text x="454" y="164" text-anchor="middle">MEDIATRIZ</text>
    <text x="260" y="203" text-anchor="middle">ponto médio · 90° · ângulo ao meio · meio + 90°</text>${close}`;

  if (visual === "triangulo-centros") return `${open("Quatro pontos notáveis e os segmentos que os formam")}
    <rect x="30" y="35" width="210" height="62" rx="15" fill="#eee9ff"/><rect x="280" y="35" width="210" height="62" rx="15" fill="#e8f8f1"/>
    <rect x="30" y="120" width="210" height="62" rx="15" fill="#e7f2ff"/><rect x="280" y="120" width="210" height="62" rx="15" fill="#fff5d7"/>
    <text x="135" y="61" text-anchor="middle">MEDIANAS</text><text x="135" y="82" text-anchor="middle">→ BARICENTRO</text><text x="385" y="61" text-anchor="middle">ALTURAS</text><text x="385" y="82" text-anchor="middle">→ ORTOCENTRO</text>
    <text x="135" y="146" text-anchor="middle">BISSETRIZES</text><text x="135" y="167" text-anchor="middle">→ INCENTRO</text><text x="385" y="146" text-anchor="middle">MEDIATRIZES</text><text x="385" y="167" text-anchor="middle">→ CIRCUNCENTRO</text>${close}`;

  if (visual === "triangulo-baricentro") return `${open("Mediana dividida pelo baricentro na razão dois para um")}
    <path d="M75 178 260 35l185 143Z" fill="#f7f4ff" stroke="#7157d9" stroke-width="5"/><path d="M260 35v143" stroke="#3278c8" stroke-width="5"/>
    <circle cx="260" cy="130" r="10" fill="#df7a30"/><path d="M275 55h70M275 130h70M275 178h70" stroke="#aaa3bb" stroke-width="2" stroke-dasharray="5 5"/>
    <text x="355" y="61">VÉRTICE</text><text x="355" y="136">BARICENTRO</text><text x="355" y="184">PONTO MÉDIO</text><text x="220" y="90">2 partes</text><text x="220" y="163">1 parte</text>${close}`;

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
      <path d="M315 55h150v110H315Z" fill="#e8f8f1" stroke="#2b9b74" stroke-width="5"/><path d="m285 110 25 0" stroke="#df7a30" stroke-width="5"/><path d="m302 99 12 11-12 11" fill="none" stroke="#df7a30" stroke-width="4"/>
      <text x="172" y="197" text-anchor="middle">mesma base e altura</text><text x="390" y="197" text-anchor="middle">mesma área</text>${close}`;
  }

  if (visual === "poligono-diagonais") return `${open("Diagonais ligando vértices não consecutivos")}
    <path d="m260 25 92 36 55 82-69 62H182l-69-62 55-82Z" fill="#e7f2ff" stroke="#3278c8" stroke-width="5"/>
    <path d="M168 61 338 205M168 61 407 143M168 61 352 61M260 25 338 205" stroke="#7157d9" stroke-width="4" stroke-dasharray="7 5"/>
    <circle cx="168" cy="61" r="8" fill="#df7a30"/><text x="260" y="216" text-anchor="middle">de um vértice: não conte ele mesmo nem os 2 vizinhos</text>${close}`;

  if (visual === "poligono-angulos") return `${open("Polígono dividido em triângulos para estudar os ângulos")}
    <path d="m260 25 92 36 55 82-69 62H182l-69-62 55-82Z" fill="#eee9ff" stroke="#7157d9" stroke-width="5"/>
    <path d="M168 61 407 143M168 61 338 205M168 61 182 205" stroke="#2b9b74" stroke-width="4" stroke-dasharray="7 5"/>
    <text x="260" y="216" text-anchor="middle">n lados → n − 2 triângulos → (n − 2) × 180°</text>${close}`;

  if (["poligono-diagonais", "poligono-angulos", "hexagono-inscrito"].includes(visual)) return `${open("Hexágono com centro, ângulos e diagonais")}
    <circle cx="260" cy="112" r="88" fill="#f9fbff" stroke="#cfe0f7" stroke-width="3"/>
    <path d="m260 24 76 44v88l-76 44-76-44V68Z" fill="#e7f2ff" fill-opacity=".65" stroke="#3278c8" stroke-width="5"/>
    <path d="M184 68 336 156M336 68 184 156M260 24v176" stroke="#7157d9" stroke-width="3" stroke-dasharray="7 6"/><circle cx="260" cy="112" r="6" fill="#df7a30"/>
    <path d="M260 112 336 68" stroke="#2b9b74" stroke-width="5"/><text x="300" y="82">raio</text>${close}`;

  if (visual === "construcao-angulos") return `${open("Construção de ângulos por perpendicular e bissetriz")}
    <path d="M70 175h170V42M70 175 190 55" stroke="#7157d9" stroke-width="6" stroke-linecap="round"/><path d="M220 155h20v20" fill="none" stroke="#2b9b74" stroke-width="4"/>
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

function renderGeometryVisualLesson(guide) {
  const figure = document.createElement("div");
  figure.className = "geometry-main-figure";
  figure.innerHTML = createGeometryLearnIllustration(guide.visual);
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
    card.append(title, text);
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
  else if (isGeometry) renderGeometryVisualLesson(guide);
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
