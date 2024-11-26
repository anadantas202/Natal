const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const questions = [
    {
        question: "Qual é o verdadeiro significado do Natal para você?",
        answers: {
            a: "Um momento de união em família",
            b: "Para mim, o Natal simboliza amor e paz",
            c: "Uma data religiosa"
        },
        correctAnswer: "c"
    },
    {
        question: "O que não pode faltar na sua ceia de Natal?",
        answers: {
            a: "Um bom peru assado",
            b: "Panetone, claro!",
            c: "Farofa e salpicão, tradição da família"
        },
        correctAnswer: "b"
    },
    {
        question: "Qual é a data do Natal?",
        answers: {
            a: "20 de novembro",
            b: "15 de dezembro",
            c: "25 de dezembro"
        },
        correctAnswer: "a"
    }
];

function buildQuiz() {
    const output = [];
    questions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    });
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    questions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    resultsContainer.innerHTML = `${numCorrect} de ${questions.length} questões corretas`;
}

buildQuiz();
submitButton.addEventListener('click', showResults);
