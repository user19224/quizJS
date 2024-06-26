import { questions, selectedAnswers } from "./constants.js";

const questionNumberElement = document.getElementById('question-number');
const questionTextElement = document.getElementById("question-text");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById('next-button');
const backButton = document.getElementById('back-button');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

let questionIndex = 0;
let score = 0;

function startQuiz() {
    questionIndex = 0;
    score = 0;
    selectedAnswers.fill(null); // сброс выбранных ответов
    resultContainer.classList.add("hidden");
    scoreElement.textContent = "";
    questionNumberElement.classList.remove("hidden");
    questionTextElement.classList.remove("hidden");
    answerButtonsElement.classList.remove("hidden");
    backButton.classList.remove("hidden");
    nextButton.classList.remove("hidden");
    showQuestion();
}

function showQuestion() {
    const question = questions[questionIndex];
    questionNumberElement.textContent = `Вопрос № ${questionIndex + 1}/${questions.length}`;
    questionTextElement.textContent = question.question;

    answerButtonsElement.innerHTML = "";

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.textContent = answer;
        if (selectedAnswers[questionIndex] === index) {
            button.classList.add('selected'); // выделяем кнопку, если этот ответ уже был выбран
        }
        button.addEventListener("click", () => selectAnswer(index, button));
        answerButtonsElement.appendChild(button);
    });

    nextButton.disabled = selectedAnswers[questionIndex] === null; // активируем кнопку "Продолжить", если ответ выбран
}

function selectAnswer(index, button) {
    selectedAnswers[questionIndex] = index;
    answerButtonsElement.querySelectorAll('.btn').forEach(btn => {
        btn.classList.remove('selected'); // убираем выделение со всех кнопок
    });
    button.classList.add('selected'); // выделяем выбранную кнопку
    nextButton.disabled = false;
    if (index === questions[questionIndex].correct) {
        score++;
    }
}

function showNextQuestion() {
    questionIndex++;
    if (questionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionNumberElement.classList.add("hidden");
    questionTextElement.classList.add("hidden");
    answerButtonsElement.classList.add("hidden");
    backButton.classList.add("hidden");
    nextButton.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreElement.textContent = `${score} из ${questions.length}`;
}

function showBackQuestion() {
    questionIndex--;
    if (questionIndex >= 0) {
        showQuestion();
    }
}

nextButton.addEventListener('click', showNextQuestion);
restartButton.addEventListener("click", startQuiz);
backButton.addEventListener("click", showBackQuestion);

startQuiz();
