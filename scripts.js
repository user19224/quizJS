
const questions = [
        {
            question: "Назовите столицу Франции?",
            answers: ["Нью-Йорк", "Лондон", "Париж", "Минск"],
            correct: 2
        },
        {
            question: "Назовите столицу Германии?",
            answers: ["Берлин", "Мадрид", "Рим", "Амстердам"],
            correct: 0
        },
        {
            question: "Назовите столицу Италии?",
            answers: ["Афины", "Рим", "Прага", "Лиссабон"],
            correct: 1
        },
        {
            question: "Назовите столицу Испании?",
            answers: ["Барселона", "Мадрид", "Лиссабон", "Париж"],
            correct: 1
        }
];
  


let questionIndex = 0;
let score = 0;

const questionNumberElement = document.getElementById('question-number')
const questionTextElement = document.getElementById("question-text")
const answerButtonElement = document.getElementById("answer-buttons")
const nextButton = document.getElementById('next-button')
const backButton = document.getElementById('back-button')
const resultContainer = document.getElementById('result-container')
const scoreElement = document.getElementById('score')
const restartButton = document.getElementById('restart-button')



function showQuestions(){
        
        
        questionNumberElement.textContent = `Вопрос № ${questionIndex + 1}`
        questionTextElement.textContent = questions.question
        
        answerButtonElement.innerHTML = ""; 

        questions.answers.forEach(() => {
            const button  = document.createElement('button')
            button.classList.add('btn')
            button.textContent = 

        });
        


    nextButton.disabled = true
}


function selectAnswer(){

}



function showResult(){
   
}

nextButton.addEventListener('click',showQuestions)

