export const questions = [
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

export const selectedAnswers = Array(questions.length).fill(null);
export let questionIndex = 0;
export let score = 0;
