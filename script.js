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
  const isPortugueseQuiz = selectedSubject === PORTUGUESE_SUBJECT
    && items.every((question) => Boolean(question.dificuldade));

  if (!isPortugueseQuiz || selectedDifficulty !== ALL) {
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

function createLearnIllustration(subject) {
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

function renderLearnGuide() {
  const question = quizQuestions[currentQuestion];
  const guide = obterGuiaAprender(question);
  if (!guide) return;

  learnTitle.textContent = guide.titulo;
  learnIntro.textContent = guide.introducao;
  learnIllustration.innerHTML = createLearnIllustration(question.materia);
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
  guide.secoes.forEach((section) => {
    const article = document.createElement("article");
    const title = document.createElement("h4");
    const text = document.createElement("p");
    title.textContent = section.titulo;
    text.textContent = section.texto;
    article.append(title, text);
    if (section.exemplos?.length) {
      const exampleLabel = document.createElement("strong");
      const list = document.createElement("ul");
      exampleLabel.textContent = "Exemplos paralelos";
      section.exemplos.forEach((example) => {
        const item = document.createElement("li");
        item.textContent = example;
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
