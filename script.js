// 공지사항
function addNotice() {
    const input = document.getElementById('notice-input');
    const list = document.getElementById('notice-list');
    if (input.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = input.value;
        list.appendChild(li);
        input.value = "";
    }
}

// 한문 퀴즈
const quizData = [
    { question: "‘學’의 뜻은?", answer: "배울 학" },
    { question: "‘友’의 뜻은?", answer: "벗 우" },
    { question: "‘家’의 뜻은?", answer: "집 가" }
];
let currentQuiz = 0;

function showQuiz() {
    document.getElementById('quiz-question').textContent = quizData[currentQuiz].question;
    document.getElementById('quiz-answer').value = "";
    document.getElementById('quiz-result').textContent = "";
}
function checkQuiz() {
    const userAnswer = document.getElementById('quiz-answer').value.trim();
    const result = document.getElementById('quiz-result');
    if (userAnswer === quizData[currentQuiz].answer) {
        result.textContent = "정답입니다!";
        result.style.color = "green";
        currentQuiz = (currentQuiz + 1) % quizData.length;
        setTimeout(showQuiz, 1500);
    } else {
        result.textContent = "오답입니다. 다시 시도해보세요.";
        result.style.color = "red";
    }
}
showQuiz();

// 한문 사전 (간단 예시)
const dictData = {
    "學": "배울 학",
    "友": "벗 우",
    "家": "집 가",
    "人": "사람 인"
};
function searchDict() {
    const input = document.getElementById('dict-input').value.trim();
    const result = document.getElementById('dict-result');
    if (dictData[input]) {
        result.textContent = dictData[input];
    } else {
        result.textContent = "사전에 없는 한자입니다.";
    }
}

// 방명록
function addGuestbook() {
    const name = document.getElementById('guestbook-name').value.trim();
    const msg = document.getElementById('guestbook-msg').value.trim();
    const list = document.getElementById('guestbook-list');
    if (name && msg) {
        const li = document.createElement('li');
        li.textContent = `${name}: ${msg}`;
        list.appendChild(li);
        document.getElementById('guestbook-name').value = "";
        document.getElementById('guestbook-msg').value = "";
    }
}