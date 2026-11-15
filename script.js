const screens = document.querySelectorAll(".screen");
const welcomeScreen = document.querySelector("#welcome-screen");
const setupScreen = document.querySelector("#setup-screen");
const emptyScreen = document.querySelector("#empty-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");
const startButton = document.querySelector("#start-button");
const beginQuizButton = document.querySelector("#begin-quiz-button");
const materialStatus = document.querySelector("#material-status");
const subjectOptions = document.querySelector("#subject-options");
const chapterOptions = document.querySelector("#chapter-options");
const contentSelect = document.querySelector("#content-select");
const availableCount = document.querySelector("#available-count");
const amountButtons = document.querySelectorAll("[data-amount]");
const questionCounter = document.querySelector("#question-counter");
const progressBar = document.querySelector("#progress-bar");
const questionSubject = document.querySelector("#question-subject");
const questionChapter = document.querySelector("#question-chapter");
const questionContent = document.querySelector("#question-content");
const sourceText = document.querySelector("#source-text");
const sourceTextContent = document.querySelector("#source-text-content");
const questionText = document.querySelector("#question-text");
const answerList = document.querySelector("#answer-list");
const feedback = document.querySelector("#feedback");
const nextButton = document.querySelector("#next-button");
const scoreValue = document.querySelector("#score-value");
const resultMessage = document.querySelector("#result-message");
const restartButton = document.querySelector("#restart-button");

const ALL = "__all";
let selectedSubject = ALL;
let selectedChapters = new Set();
let selectedAmount = "all";
let quizQuestions = [];
let currentQuestion = 0;
let selectedAnswer = null;
let score = 0;
let answerConfirmed = false;

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

  selectedChapters = new Set(chapters);
  chapterOptions.replaceChildren();

  const allChoice = createChapterChoice(ALL, "Todos os capítulos", true, true);
  chapterOptions.appendChild(allChoice);
  chapters.forEach((chapter) => {
    chapterOptions.appendChild(createChapterChoice(chapter, chapter, true));
  });

  populateContents(true);
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
    return subjectMatches && chapterMatches && contentMatches;
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

function openSetup() {
  showScreen(setupScreen);
  updateAvailableCount();
}

function buildQuiz() {
  const filtered = shuffle(getFilteredQuestions());
  const limit = selectedAmount === "all"
    ? filtered.length
    : Math.min(Number(selectedAmount), filtered.length);

  quizQuestions = filtered.slice(0, limit);
  if (!quizQuestions.length) {
    showScreen(emptyScreen);
    return;
  }

  currentQuestion = 0;
  selectedAnswer = null;
  score = 0;
  answerConfirmed = false;
  showScreen(quizScreen);
  renderQuestion();
}

function renderQuestion() {
  const question = quizQuestions[currentQuestion];
  selectedAnswer = null;
  answerConfirmed = false;
  feedback.textContent = "";
  feedback.className = "feedback";
  nextButton.disabled = true;
  nextButton.textContent = "Confirmar resposta";

  questionCounter.textContent = `Pergunta ${currentQuestion + 1} de ${quizQuestions.length}`;
  progressBar.style.width = `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;
  questionSubject.textContent = question.materia;
  questionChapter.textContent = question.capitulo;
  questionContent.textContent = `${question.conteudo} · pág. ${question.pagina}`;
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
  } else {
    showResults();
  }
}

function confirmAnswer() {
  const question = quizQuestions[currentQuestion];
  const buttons = answerList.querySelectorAll(".answer-button");
  answerConfirmed = true;

  buttons.forEach((button) => {
    button.disabled = true;
  });

  buttons[question.correta]?.classList.add("is-correct");

  if (selectedAnswer === question.correta) {
    score += 1;
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
}

function updateHomeState() {
  materialStatus.textContent = `${perguntas.length} questões disponíveis`;
}

startButton.addEventListener("click", openSetup);
beginQuizButton.addEventListener("click", buildQuiz);
nextButton.addEventListener("click", confirmOrAdvance);
restartButton.addEventListener("click", buildQuiz);
contentSelect.addEventListener("change", updateAvailableCount);

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

document.querySelectorAll("[data-go-home]").forEach((button) => {
  button.addEventListener("click", () => showScreen(welcomeScreen));
});

document.querySelector(".brand").addEventListener("click", (event) => {
  event.preventDefault();
  showScreen(welcomeScreen);
});

populateSubjects();
updateHomeState();
