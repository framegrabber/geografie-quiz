// Main application entry point
class App {
    constructor() {
        this.initializeApp();
    }

    initializeApp() {
        // Initialize core classes
        this.gameState = new GameState();
        this.statsManager = new StatsManager();
        this.gameEngine = new GameEngine(this.gameState, this.statsManager);

        // Cache DOM elements
        this.elements = this.cacheDOMElements();

        // Initialize screen manager
        this.screenManager = new ScreenManager(this.elements.screens);

        // Initialize UI managers
        this.uiUpdater = new UIUpdater(this.elements.ui);
        this.questionRenderer = new QuestionRenderer(this.elements.quiz, this.gameEngine, this.elements.buttons.nextBtn);
        this.mapRenderer = new MapRenderer(this.elements.quiz.mapContainer, null);
        this.statsRenderer = new StatsRenderer(this.elements.stats, this.gameEngine);

        // Initialize event manager (must be last to connect everything)
        this.eventManager = new EventManager(
            this.elements.buttons,
            this.screenManager,
            this.gameEngine,
            this.uiUpdater,
            this.questionRenderer,
            this.mapRenderer,
            this.statsRenderer
        );

        // Initial UI update
        this.updateInitialState();
    }

    cacheDOMElements() {
        const elements = {
            screens: {
                categoryScreen: document.getElementById('categoryScreen'),
                quizScreen: document.getElementById('quizScreen'),
                endScreen: document.getElementById('endScreen'),
                statsScreen: document.getElementById('statsScreen')
            },
            buttons: {
                backBtn: document.getElementById('backBtn'),
                nextBtn: document.getElementById('nextBtn'),
                restartBtn: document.getElementById('restartBtn'),
                newCategoryBtn: document.getElementById('newCategoryBtn'),
                statsBtn: document.getElementById('statsBtn'),
                closeStatsBtn: document.getElementById('closeStatsBtn'),
                resetStatsBtn: document.getElementById('resetStatsBtn')
            },
            quiz: {
                questionText: document.getElementById('questionText'),
                answerContainer: document.getElementById('answerContainer'),
                mapContainer: document.getElementById('mapContainer'),
                mapInstruction: document.getElementById('mapInstruction'),
                questionNumber: document.getElementById('questionNumber'),
                scoreDisplay: document.getElementById('scoreDisplay'),
                progressBar: document.getElementById('progressBar'),
                correctCount: document.getElementById('correctCount'),
                wrongCount: document.getElementById('wrongCount'),
                categoryBadge: document.getElementById('categoryBadge')
            },
            ui: {
                totalGames: document.getElementById('totalGames'),
                totalPoints: document.getElementById('totalPoints'),
                categoryGames: document.querySelectorAll('.category-games'),
                scoreDisplay: document.getElementById('scoreDisplay'),
                correctCount: document.getElementById('correctCount'),
                wrongCount: document.getElementById('wrongCount'),
                nextBtn: document.getElementById('nextBtn')
            },
            stats: {
                statTotalGames: document.getElementById('statTotalGames'),
                statTotalPoints: document.getElementById('statTotalPoints'),
                statTotalCorrect: document.getElementById('statTotalCorrect'),
                statTotalWrong: document.getElementById('statTotalWrong'),
                statAverage: document.getElementById('statAverage'),
                categoryStatsContainer: document.getElementById('categoryStatsContainer'),
                bestPerformance: document.getElementById('bestPerformance'),
                worstPerformance: document.getElementById('worstPerformance')
            }
        };

        return elements;
    }

    updateInitialState() {
        this.uiUpdater.updateQuickStats(this.gameEngine.getStats());
        this.uiUpdater.updateCategoryGames(this.gameEngine.getStats());
    }
}

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
});
