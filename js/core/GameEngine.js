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
            const mixCats = ['bundeslaender', 'europa', 'europa_flaggen', 'nachbarlaender', 'bayern'];
            const allQuestions = mixCats.flatMap(cat => Array.isArray(quizData[cat]) ? quizData[cat] : []);
            if (allQuestions.length === 0) {
                console.warn('Mix mode: keine Fragen gefunden. Prüfe quizData.');
            }
            questions = shuffleArray(allQuestions).slice(0, QUIZ_CONFIG.questionsPerQuiz);
        } else {
            if (!Array.isArray(quizData[category])) {
                console.warn(`Kategorie "${category}" nicht gefunden in quizData.`);
                questions = [];
            } else {
                questions = shuffleArray([...quizData[category]]).slice(0, QUIZ_CONFIG.questionsPerQuiz);
            }
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
