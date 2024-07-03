import { questions, selectedAnswers } from "./constants.js";

let questionIndex = 0; 
let score = 0;  

const questionNumberElement = document.getElementById('question-number');
const questionTextElement = document.getElementById("question-text");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById('next-button');
const backButton = document.getElementById('back-button');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

const resultModal = document.getElementById('result-modal');
const modalScoreElement = document.getElementById('modal-score');
const modalRestartButton = document.getElementById('modal-restart-button');
const closeButton = document.querySelector('.close-button');

function startQuiz() {
    questionIndex = 0;
    score = 0;
    selectedAnswers.fill(null);
    resultContainer.classList.add("hidden");
    resultModal.classList.add("hidden");
    scoreElement.textContent = "";
    questionNumberElement.classList.remove("hidden");
    questionTextElement.classList.remove("hidden");
    answerButtonsElement.classList.remove("hidden");
    backButton.classList.remove("hidden");
    nextButton.classList.remove("hidden");
    showQuestion();
}

function updateProgressBar(){
    const progressBar = document.getElementById('progress-bar');
    const progress = ((questionIndex)/questions.length)*100;
    progressBar.style.width = `${progress}%`;
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
            button.classList.add('selected');
        }
        button.addEventListener("click", () => selectAnswer(index, button));
        answerButtonsElement.appendChild(button);
    });

    nextButton.disabled = selectedAnswers[questionIndex] === null;

    updateProgressBar();
}

function selectAnswer(index, button) {
    selectedAnswers[questionIndex] = index;
    answerButtonsElement.querySelectorAll('.btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    button.classList.add('selected');
    nextButton.disabled = false;
    if (index === questions[questionIndex].correct) {
        score++;
    }
}

function showNextQuestion() {
    if (questionIndex < questions.length - 1) {
        questionIndex++;
        showQuestion();
    } else {
        showResults();
    }
}

function showBackQuestion() {
    if (questionIndex > 0) {
        questionIndex--;
        showQuestion();
    }
}

function showResults() {
    questionNumberElement.classList.add("hidden");
    questionTextElement.classList.add("hidden");
    answerButtonsElement.classList.add("hidden");
    backButton.classList.add("hidden");
    nextButton.classList.add("hidden");
    resultModal.classList.remove("hidden");
    resultContainer.classList.remove("hidden");
    scoreElement.textContent = `${score} из ${questions.length}`;
}

nextButton.addEventListener('click', showNextQuestion);
restartButton.addEventListener("click", startQuiz);
backButton.addEventListener("click", showBackQuestion);
closeButton.addEventListener("click",()=>{
    resultModal.classList.add("hidden");
})

startQuiz();
