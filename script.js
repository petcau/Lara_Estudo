// O conteúdo do quiz será inserido aqui quando Lara enviar o material.
// Formato esperado para cada pergunta:
// {
//   materia: "Matemática",
//   pergunta: "Quanto é 2 + 2?",
//   alternativas: ["2", "3", "4", "5"],
//   correta: 2,
//   explicacao: "2 + 2 é igual a 4."
// }
const perguntas = [];

const screens = document.querySelectorAll(".screen");
const welcomeScreen = document.querySelector("#welcome-screen");
const emptyScreen = document.querySelector("#empty-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");
const startButton = document.querySelector("#start-button");
const materialStatus = document.querySelector("#material-status");
const questionCounter = document.querySelector("#question-counter");
const progressBar = document.querySelector("#progress-bar");
const questionSubject = document.querySelector("#question-subject");
const questionText = document.querySelector("#question-text");
const answerList = document.querySelector("#answer-list");
const feedback = document.querySelector("#feedback");
const nextButton = document.querySelector("#next-button");
const scoreValue = document.querySelector("#score-value");
const resultMessage = document.querySelector("#result-message");
const restartButton = document.querySelector("#restart-button");

let currentQuestion = 0;
let selectedAnswer = null;
let score = 0;
let answerConfirmed = false;

function showScreen(screen) {
  screens.forEach((item) => item.classList.remove("is-active"));
  screen.classList.add("is-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateHomeState() {
  const hasQuestions = perguntas.length > 0;
  startButton.disabled = !hasQuestions;
  materialStatus.textContent = hasQuestions
    ? `${perguntas.length} ${perguntas.length === 1 ? "pergunta pronta" : "perguntas prontas"}`
    : "Aguardando material";
}

function startQuiz() {
  if (!perguntas.length) {
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
  const question = perguntas[currentQuestion];
  selectedAnswer = null;
  answerConfirmed = false;
  feedback.textContent = "";
  nextButton.disabled = true;
  nextButton.textContent = "Confirmar resposta";

  questionCounter.textContent = `Pergunta ${currentQuestion + 1} de ${perguntas.length}`;
  progressBar.style.width = `${((currentQuestion + 1) / perguntas.length) * 100}%`;
  questionSubject.textContent = question.materia || "Geral";
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
  if (currentQuestion < perguntas.length) {
    renderQuestion();
  } else {
    showResults();
  }
}

function confirmAnswer() {
  const question = perguntas[currentQuestion];
  const buttons = answerList.querySelectorAll(".answer-button");
  answerConfirmed = true;

  buttons.forEach((button) => {
    button.disabled = true;
  });

  buttons[question.correta]?.classList.add("is-correct");

  if (selectedAnswer === question.correta) {
    score += 1;
    feedback.textContent = question.explicacao
      ? `Correto! ${question.explicacao}`
      : "Correto! Muito bem!";
  } else {
    buttons[selectedAnswer]?.classList.add("is-wrong");
    feedback.textContent = question.explicacao
      ? `Vamos revisar: ${question.explicacao}`
      : "Quase! Observe a resposta destacada.";
  }

  nextButton.textContent = currentQuestion === perguntas.length - 1
    ? "Ver meu resultado"
    : "Próxima pergunta";
}

function showResults() {
  const percentage = Math.round((score / perguntas.length) * 100);
  scoreValue.textContent = `${score}/${perguntas.length}`;

  if (percentage === 100) {
    resultMessage.textContent = "Você acertou tudo. Excelente trabalho!";
  } else if (percentage >= 70) {
    resultMessage.textContent = "Ótimo resultado! Você está dominando este conteúdo.";
  } else {
    resultMessage.textContent = "Cada tentativa é parte do aprendizado. Vamos praticar mais uma vez?";
  }

  showScreen(resultScreen);
}

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", confirmOrAdvance);
restartButton.addEventListener("click", startQuiz);

document.querySelectorAll("[data-go-home]").forEach((button) => {
  button.addEventListener("click", () => showScreen(welcomeScreen));
});

updateHomeState();
