// UI Updater - handles updating UI elements with game state
class UIUpdater {
    constructor(elements) {
        this.elements = elements;
    }

    updateScore(score) {
        updateElementText(this.elements.scoreDisplay, `Punkte: ${score}`);
    }

    updateCounts(correct, wrong) {
        updateElementText(this.elements.correctCount, correct);
        updateElementText(this.elements.wrongCount, wrong);
    }

    updateQuickStats(stats) {
        updateElementText(this.elements.totalGames, stats.totalGames);
        updateElementText(this.elements.totalPoints, stats.totalPoints);
    }

    updateCategoryGames(stats) {
        this.elements.categoryGames.forEach(span => {
            const cat = span.dataset.cat;
            const games = stats.categories[cat] ? stats.categories[cat].games : 0;
            updateElementText(span, games);
        });
    }

    updateEndScreen(score, correct, wrong) {
        updateElementText(this.elements.finalScore, score);
        updateElementText(this.elements.finalCorrect, correct);
        updateElementText(this.elements.finalWrong, wrong);
    }

    showNextButton() {
        this.elements.nextBtn.classList.remove('hidden');
    }

    hideNextButton() {
        this.elements.nextBtn.classList.add('hidden');
    }
}
