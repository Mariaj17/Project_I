const quizData = [
    {
        question: 'Em qual das alternativas está escrito "a mulher"?', 
        a: 'die Frau',
        b: 'die Kinder',
        c: 'die Jungen',
        correct: 'a'       
    }, {
        question: 'Em qual das alternativas está escrito "o homem"?', 
        a: 'die Manner',
        b: 'der Mann',
        c: 'die Mannschaft',
        correct: 'b'
    }, {
        question: 'Em qual das alternativas está escrito "o menino"?', 
        a: 'das Baby',
        b: 'die Kinder',
        c: 'der Junge',
        correct: 'c'
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
let points = 0;


loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.
    question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;



}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    //check to see the answer
    const answer = getSelected();

    if(answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
            points += 50;
        }

            currentQuiz++;
            if (currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                quiz.innerHTML = `<h2>You answered correctly at ${score} of ${quizData.length} questions</h2>
                <h5>You have received ${points} points</h5>
                <button onclick="location.reload()">Reload</button>`
            }
        }
    
});