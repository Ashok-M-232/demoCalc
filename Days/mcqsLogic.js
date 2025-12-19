// ----------- GET DAY VALUE ----------
const params = new URLSearchParams(window.location.search);
const day = params.get("day") || "day1";
document.getElementById("moduleName").innerText = day.replace(/day/i,"Day ") + " - MCQ Assessment";

// ----------- QUIZ VARIABLES ----------
let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let timerInterval;
let currentSubject = day;

// ----------- START QUIZ ----------
function beginQuiz() {
  // Select ALL questions for the day
  currentQuiz = shuffleArray(questionBanks[currentSubject]); // remove slice, take all
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];

  document.getElementById('setup').style.display = 'none';
  document.getElementById('question-box').style.display = 'block';

  // Hide the timer
  document.getElementById('timer').style.display = 'none';

  showQuestion();
}

// ----------- SHUFFLE ----------
function shuffleArray(array) {
  let copy = array.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// ----------- SHOW QUESTION ----------
function showQuestion() {
  const q = currentQuiz[currentQuestionIndex];
  document.getElementById('question').innerText = q.question;

  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(`opt${i}`);
    btn.innerText = q.options[i];
    btn.classList.remove('selected-option', 'correct-option', 'wrong-option');
    btn.disabled = false; // enable buttons
    btn.onclick = () => checkAnswer(i);
  }

  document.getElementById('counter').innerText = `Question ${currentQuestionIndex + 1} / ${currentQuiz.length}`;
  document.querySelector('.options').classList.remove('dimmed');
}

// ----------- CHECK ANSWER ----------
function checkAnswer(selected) {
  const q = currentQuiz[currentQuestionIndex];
  userAnswers[currentQuestionIndex] = selected;

  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(`opt${i}`);
    btn.disabled = true; // lock buttons
    btn.classList.remove('selected-option', 'correct-option', 'wrong-option');
  }

  const selectedBtn = document.getElementById(`opt${selected}`);
  selectedBtn.classList.add('selected-option');

  // Highlight correct/wrong instantly
  if (selected === q.answer) selectedBtn.classList.add('correct-option');
  else {
    selectedBtn.classList.add('wrong-option');
    document.getElementById(`opt${q.answer}`).classList.add('correct-option');
  }
}

// ----------- NEXT QUESTION ----------
function nextQuestion() {
  const q = currentQuiz[currentQuestionIndex];
  if (userAnswers[currentQuestionIndex] === q.answer) score++;

  if (currentQuestionIndex < currentQuiz.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    showResult();
  }
}

// ----------- RESULT SCREEN ----------
function showResult() {
  document.getElementById('question-box').style.display = 'none';
  document.getElementById('resultScreen').style.display = 'block';
  clearInterval(timerInterval);

  document.getElementById('totalScore').innerText = `Score: ${score} / ${currentQuiz.length}`;

  const tbody = document.getElementById('answerTable');
  tbody.innerHTML = '';
  currentQuiz.forEach((q, i) => {
    const userAnsIndex = userAnswers[i];
    const isCorrect = userAnsIndex === q.answer;
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${q.question}</td>
                    <td>${q.options[q.answer]}</td>
                    <td style="color:${isCorrect ? '#4cff9c' : '#ff6b6b'}">${userAnsIndex !== undefined ? q.options[userAnsIndex] : 'Not Answered'}</td>
                    <td>${q.explanation}</td>`;
    tbody.appendChild(tr);
  });
}

// ----------- RETRY / BACK ----------
function restartQuiz() {
  document.getElementById('resultScreen').style.display = 'none';
  document.getElementById('setup').style.display = 'block';
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
  clearInterval(timerInterval);
}

function goToSubjectSelection() {
  window.location.href = 'index.html';
}
