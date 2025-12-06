// Event Manager - handles all event listeners and user interactions
class EventManager {
    constructor(elements, screenManager, gameEngine, uiUpdater, questionRenderer, mapRenderer, statsRenderer) {
        this.elements = elements;
        this.screenManager = screenManager;
        this.gameEngine = gameEngine;
        this.uiUpdater = uiUpdater;
        this.questionRenderer = questionRenderer;
        this.mapRenderer = mapRenderer;
        this.statsRenderer = statsRenderer;
        
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Category selection
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.category;
                this.handleCategorySelect(category);
            });
        });

        // Quiz navigation
        this.elements.backBtn.addEventListener('click', () => this.handleBackToCategories());
        this.elements.nextBtn.addEventListener('click', () => this.handleNextQuestion());
        this.elements.restartBtn.addEventListener('click', () => this.handleRestartQuiz());
        this.elements.newCategoryBtn.addEventListener('click', () => this.handleBackToCategories());

        // Stats
        this.elements.statsBtn.addEventListener('click', () => this.handleShowStats());
        this.elements.closeStatsBtn.addEventListener('click', () => this.handleCloseStats());
        this.elements.resetStatsBtn.addEventListener('click', () => this.handleResetStats());

        // Set up answer callbacks
        this.questionRenderer.setAnswerCallback((isCorrect, ...args) => {
            if (isCorrect === 'map') {
                // Map question - delegate to map renderer
                this.mapRenderer.render(args[0], args[1]);
            } else if (typeof isCorrect === 'object' && isCorrect.isCorrect !== undefined) {
                // Fill blanks answer with individual counts
                this.handleAnswer(isCorrect.isCorrect, isCorrect.correct, isCorrect.wrong);
            } else {
                // Multiple choice answer
                this.handleAnswer(isCorrect);
            }
        });

        this.mapRenderer.answerCallback = (isCorrect) => {
            this.handleAnswer(isCorrect);
        };
    }

    handleCategorySelect(category) {
        this.gameEngine.selectCategory(category);
        this.gameEngine.startQuiz();
        this.screenManager.showQuizScreen();
        this.updateQuizDisplay();
    }

    handleAnswer(isCorrect, correctCount = null, wrongCount = null) {
        this.gameEngine.checkAnswer(isCorrect, correctCount, wrongCount);
        this.updateQuizStats();
        this.uiUpdater.showNextButton();
    }

    handleNextQuestion() {
        if (this.gameEngine.isLastQuestion()) {
            this.gameEngine.endQuiz();
            this.showResults();
        } else {
            this.gameEngine.nextQuestion();
            this.updateQuizDisplay();
        }
    }

    handleRestartQuiz() {
        this.gameEngine.selectCategory(this.gameEngine.getGameState().getCategory());
        this.gameEngine.startQuiz();
        this.screenManager.showQuizScreen();
        this.updateQuizDisplay();
    }

    handleBackToCategories() {
        this.screenManager.showCategoryScreen();
        this.updateQuickStats();
    }

    handleShowStats() {
        this.screenManager.showStatsScreen();
        this.statsRenderer.render();
    }

    handleCloseStats() {
        this.screenManager.showCategoryScreen();
    }

    handleResetStats() {
        if (confirm('Möchtest du wirklich alle Statistiken zurücksetzen? Diese Aktion kann nicht rückgängig gemacht werden.')) {
            this.gameEngine.resetStats();
            this.statsRenderer.render();
            this.updateQuickStats();
        }
    }

    updateQuizDisplay() {
        this.questionRenderer.renderQuestion();
        this.updateQuizStats();
    }

    updateQuizStats() {
        const gameState = this.gameEngine.getGameState();
        this.uiUpdater.updateScore(gameState.getScore());
        this.uiUpdater.updateCounts(gameState.getCorrectCount(), gameState.getWrongCount());
    }

    updateQuickStats() {
        const stats = this.gameEngine.getStats();
        this.uiUpdater.updateQuickStats(stats);
        this.uiUpdater.updateCategoryGames(stats);
    }

    showResults() {
        this.screenManager.showEndScreen();
        const gameState = this.gameEngine.getGameState();
        this.uiUpdater.updateEndScreen(gameState.getScore(), gameState.getCorrectCount(), gameState.getWrongCount());
        this.updateQuickStats();
    }
}
