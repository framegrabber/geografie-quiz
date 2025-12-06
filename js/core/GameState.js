// Game State Management
class GameState {
    constructor() {
        this.currentCategory = '';
        this.currentQuestions = [];
        this.currentQuestion = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
    }

    setCategory(category) {
        this.currentCategory = category;
    }

    setQuestions(questions) {
        this.currentQuestions = questions;
    }

    resetQuiz() {
        this.currentQuestion = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
    }

    nextQuestion() {
        this.currentQuestion++;
    }

    getCurrentQuestion() {
        return this.currentQuestions[this.currentQuestion] || null;
    }

    isLastQuestion() {
        return this.currentQuestion >= this.currentQuestions.length - 1;
    }

    incrementScore() {
        this.score++;
    }

    incrementCorrect() {
        this.correctAnswers++;
    }

    incrementWrong() {
        this.wrongAnswers++;
    }

    // Getters
    getCategory() {
        return this.currentCategory;
    }

    getQuestions() {
        return this.currentQuestions;
    }

    getCurrentQuestionIndex() {
        return this.currentQuestion;
    }

    getScore() {
        return this.score;
    }

    getCorrectCount() {
        return this.correctAnswers;
    }

    getWrongCount() {
        return this.wrongAnswers;
    }

    getTotalQuestions() {
        return this.currentQuestions.length;
    }

    getProgress() {
        const total = this.getTotalQuestions();
        return total > 0 ? ((this.currentQuestion + 1) / total) * 100 : 0;
    }
}
