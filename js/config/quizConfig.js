// Quiz configuration
const QUIZ_CONFIG = {
    questionsPerQuiz: 10,
    defaultStats: {
        totalGames: 0,
        totalPoints: 0,
        totalCorrect: 0,
        totalWrong: 0,
        categories: {
            bundeslaender: { games: 0, points: 0, correct: 0, wrong: 0 },
            europa: { games: 0, points: 0, correct: 0, wrong: 0 },
            europa_flaggen: { games: 0, points: 0, correct: 0, wrong: 0 },
            nachbarlaender: { games: 0, points: 0, correct: 0, wrong: 0 },
            bayern: { games: 0, points: 0, correct: 0, wrong: 0 },
            bayerischefluesze: { games: 0, points: 0, correct: 0, wrong: 0 },
            mix: { games: 0, points: 0, correct: 0, wrong: 0 }
        },
    },
    statsCookieName: 'quizStats',
    statsCookieDays: 365
};

// DOM element selectors
const DOM_SELECTORS = {
    screens: {
        categoryScreen: '#categoryScreen',
        quizScreen: '#quizScreen',
        endScreen: '#endScreen',
        statsScreen: '#statsScreen'
    },
    buttons: {
        backBtn: '#backBtn',
        nextBtn: '#nextBtn',
        restartBtn: '#restartBtn',
        newCategoryBtn: '#newCategoryBtn',
        statsBtn: '#statsBtn',
        closeStatsBtn: '#closeStatsBtn',
        resetStatsBtn: '#resetStatsBtn'
    },
    quiz: {
        questionText: '#questionText',
        answerContainer: '#answerContainer',
        mapContainer: '#mapContainer',
        mapInstruction: '#mapInstruction',
        questionNumber: '#questionNumber',
        scoreDisplay: '#scoreDisplay',
        progressBar: '#progressBar',
        correctCount: '#correctCount',
        wrongCount: '#wrongCount',
        categoryBadge: '#categoryBadge'
    },
    stats: {
        totalGames: '#totalGames',
        totalPoints: '#totalPoints',
        statTotalGames: '#statTotalGames',
        statTotalPoints: '#statTotalPoints',
        statTotalCorrect: '#statTotalCorrect',
        statTotalWrong: '#statTotalWrong',
        statAverage: '#statAverage',
        categoryStatsContainer: '#categoryStatsContainer',
        bestPerformance: '#bestPerformance',
        worstPerformance: '#worstPerformance',
        categoryGames: '.category-games'
    },
    end: {
        finalScore: '#finalScore',
        finalCorrect: '#finalCorrect',
        finalWrong: '#finalWrong'
    }
};
