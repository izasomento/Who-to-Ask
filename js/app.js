/**
 * Who to Ask — Application Logic
 */

// State Management
const state = {
  currentQuestionIndex: 0,
  answers: [], // Array of selected option objects
  totalScore: 0,
  hasRedFlag: false,
  recommenderRole: '', // From Q1
  currentRecommenderName: '',
  evaluatedRecommenders: [] // Array of { name, score, label, meaning }
};

// DOM Elements
const sections = {
  home: document.getElementById('home-section'),
  name: document.getElementById('name-section'),
  questionnaire: document.getElementById('questionnaire-section'),
  results: document.getElementById('results-section'),
  ranking: document.getElementById('ranking-section')
};

const elements = {
  startBtn: document.getElementById('start-btn'),
  confirmNameBtn: document.getElementById('confirm-name-btn'),
  recommenderNameInput: document.getElementById('recommender-name'),
  nextBtn: document.getElementById('next-btn'),
  prevBtn: document.getElementById('prev-btn'),
  progressBar: document.getElementById('progress-bar'),
  questionContent: document.getElementById('question-content'),
  evalTargetName: document.getElementById('eval-target-name'),
  resultBadge: document.getElementById('result-badge'),
  resultMeaning: document.getElementById('result-meaning'),
  resultNextSteps: document.getElementById('result-next-steps'),
  resultChecklist: document.getElementById('result-checklist'),
  addAnotherBtn: document.getElementById('add-another-btn'),
  viewRankingBtn: document.getElementById('view-ranking-btn'),
  rankingList: document.getElementById('ranking-list'),
  addFromRankingBtn: document.getElementById('add-from-ranking-btn'),
  resetAllBtn: document.getElementById('reset-all-btn')
};

// Initialization
function init() {
  elements.startBtn.addEventListener('click', () => showSection('name'));
  
  elements.recommenderNameInput.addEventListener('input', (e) => {
    elements.confirmNameBtn.disabled = !e.target.value.trim();
  });
  
  elements.confirmNameBtn.addEventListener('click', startEvaluation);
  elements.nextBtn.addEventListener('click', goToNextQuestion);
  elements.prevBtn.addEventListener('click', goToPrevQuestion);
  
  elements.addAnotherBtn.addEventListener('click', () => {
    elements.recommenderNameInput.value = '';
    elements.confirmNameBtn.disabled = true;
    showSection('name');
  });
  
  elements.addFromRankingBtn.addEventListener('click', () => {
    elements.recommenderNameInput.value = '';
    elements.confirmNameBtn.disabled = true;
    showSection('name');
  });
  
  elements.viewRankingBtn.addEventListener('click', showRanking);
  elements.resetAllBtn.addEventListener('click', resetEverything);
}

// Navigation Functions
function startEvaluation() {
  state.currentRecommenderName = elements.recommenderNameInput.value.trim();
  state.currentQuestionIndex = 0;
  state.answers = [];
  state.totalScore = 0;
  state.hasRedFlag = false;
  
  showSection('questionnaire');
  renderQuestion();
}

function showSection(sectionId) {
  Object.values(sections).forEach(section => section.classList.add('hidden', 'active'));
  sections[sectionId].classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Questionnaire Logic
function renderQuestion() {
  const question = questions[state.currentQuestionIndex];
  const progress = ((state.currentQuestionIndex) / questions.length) * 100;
  
  elements.progressBar.style.width = `${progress}%`;
  
  let html = `
    <h3 class="question-text">${question.text}</h3>
    <div class="options-list">
  `;
  
  question.options.forEach((option, index) => {
    const isSelected = state.answers[state.currentQuestionIndex] === option;
    html += `
      <button class="option-btn ${isSelected ? 'selected' : ''}" 
              onclick="selectOption(${index})">
        ${option.text}
      </button>
    `;
  });
  
  html += `</div>`;
  elements.questionContent.innerHTML = html;
  
  // Update Buttons
  elements.prevBtn.classList.toggle('hidden', state.currentQuestionIndex === 0);
  elements.nextBtn.disabled = !state.answers[state.currentQuestionIndex];
  elements.nextBtn.innerText = state.currentQuestionIndex === questions.length - 1 ? 'Show Results' : 'Next';
}

function selectOption(optionIndex) {
  const question = questions[state.currentQuestionIndex];
  const selectedOption = question.options[optionIndex];
  
  state.answers[state.currentQuestionIndex] = selectedOption;
  
  // Re-render to show selection
  renderQuestion();
}

function goToNextQuestion() {
  if (state.currentQuestionIndex < questions.length - 1) {
    state.currentQuestionIndex++;
    renderQuestion();
  } else {
    calculateResults();
  }
}

function goToPrevQuestion() {
  if (state.currentQuestionIndex > 0) {
    state.currentQuestionIndex--;
    renderQuestion();
  }
}

// Scoring Logic
function calculateResults() {
  state.totalScore = 0;
  state.hasRedFlag = false;
  
  state.answers.forEach((answer, index) => {
    state.totalScore += answer.score;
    if (answer.isRedFlag) state.hasRedFlag = true;
    if (index === 0) state.recommenderRole = answer.text;
  });
  
  displayResults();
}

function displayResults() {
  let result;
  
  if (state.hasRedFlag || state.totalScore < resultCategories.COULD_WORK.minScore) {
    result = resultCategories.NOT_BEST_FIT;
  } else if (state.totalScore >= resultCategories.STRONG.minScore) {
    result = resultCategories.STRONG;
  } else {
    result = resultCategories.COULD_WORK;
  }
  
  // Save to Session
  state.evaluatedRecommenders.push({
    name: state.currentRecommenderName,
    score: state.totalScore,
    label: result.label,
    meaning: result.meaning
  });
  
  // Update UI
  elements.evalTargetName.innerText = `Results for ${state.currentRecommenderName}`;
  elements.resultBadge.innerText = result.label;
  elements.resultBadge.className = 'badge ' + result.label.toLowerCase().replace(/ /g, '-');
  
  elements.resultMeaning.innerText = result.meaning;
  
  elements.resultNextSteps.innerHTML = result.nextSteps
    .map(step => `<li>${step}</li>`)
    .join('');
    
  elements.resultChecklist.innerHTML = result.checklist
    .map(item => `<li>${item}</li>`)
    .join('');
  
  // Extra Guidance
  const extraContainer = document.getElementById('extra-guidance-container');
  const extraTitle = document.getElementById('extra-guidance-title');
  const extraSteps = document.getElementById('extra-guidance-steps');
  
  if (result.extraGuidance) {
    extraContainer.classList.remove('hidden');
    extraTitle.innerText = result.extraGuidance.title;
    extraSteps.innerHTML = result.extraGuidance.steps
      .map(step => `<li>${step}</li>`)
      .join('');
  } else {
    extraContainer.classList.add('hidden');
  }
    
  showSection('results');
}

function showRanking() {
  // Sort by score descending
  const sorted = [...state.evaluatedRecommenders].sort((a, b) => b.score - a.score);
  
  elements.rankingList.innerHTML = sorted.map(rec => `
    <div class="ranking-item">
      <div class="ranking-item-main">
        <h4>${rec.name}</h4>
        <p>${rec.meaning}</p>
      </div>
      <div class="ranking-item-score">
        <span class="badge ${rec.label.toLowerCase().replace(/ /g, '-')}">${rec.label}</span>
        <span class="score-number">SCORE: ${rec.score}</span>
      </div>
    </div>
  `).join('');
  
  showSection('ranking');
}

function resetEverything() {
  if (confirm('This will clear all evaluations from this session. Are you sure?')) {
    state.evaluatedRecommenders = [];
    state.currentRecommenderName = '';
    elements.recommenderNameInput.value = '';
    showSection('home');
  }
}

// Global scope for onclick handlers in template literals
window.selectOption = selectOption;

// Run init
init();
