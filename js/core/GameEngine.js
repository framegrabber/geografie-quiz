// Game Engine - handles core game logic and flow
class GameEngine {
    constructor(gameState, statsManager) {
        this.gameState = gameState;
        this.statsManager = statsManager;
    }

    selectCategory(category) {
        this.gameState.setCategory(category);
        
        let questions;
        if (category === 'mix') {
            const allQuestions = [
                ...quizData.bundeslaender,
                ...quizData.europa,
                ...quizData.nachbarlaender,
                ...quizData.bayern
            ];
            questions = shuffleArray(allQuestions).slice(0, QUIZ_CONFIG.questionsPerQuiz);
        } else {
            questions = shuffleArray([...quizData[category]]).slice(0, QUIZ_CONFIG.questionsPerQuiz);
        }
        
        this.gameState.setQuestions(questions);
    }

    startQuiz() {
        this.gameState.resetQuiz();
    }

    getCurrentQuestion() {
        return this.gameState.getCurrentQuestion();
    }

    nextQuestion() {
        this.gameState.nextQuestion();
    }

    checkAnswer(isCorrect) {
        if (isCorrect) {
            this.gameState.incrementScore();
            this.gameState.incrementCorrect();
        } else {
            this.gameState.incrementWrong();
        }
    }

    isLastQuestion() {
        return this.gameState.isLastQuestion();
    }

    endQuiz() {
        const category = this.gameState.getCategory();
        const score = this.gameState.getScore();
        const correct = this.gameState.getCorrectCount();
        const wrong = this.gameState.getWrongCount();
        
        this.statsManager.addGameResult(category, score, correct, wrong);
    }

    // Getters for UI
    getGameState() {
        return this.gameState;
    }

    getStats() {
        return this.statsManager.getStats();
    }

    getCategoryStats(category) {
        return this.statsManager.getCategoryStats(category);
    }

    resetStats() {
        this.statsManager.reset();
    }
}
