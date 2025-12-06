// Screen Manager - handles screen visibility and navigation
class ScreenManager {
    constructor(screens) {
        this.screens = screens;
    }

    showCategoryScreen() {
        hideAllScreens(this.screens);
        showScreen(this.screens.categoryScreen);
    }

    showQuizScreen() {
        hideAllScreens(this.screens);
        showScreen(this.screens.quizScreen);
    }

    showEndScreen() {
        hideAllScreens(this.screens);
        showScreen(this.screens.endScreen);
    }

    showStatsScreen() {
        hideAllScreens(this.screens);
        showScreen(this.screens.statsScreen);
    }

    hideAllScreens() {
        Object.values(this.screens).forEach(screen => hideScreen(screen));
    }
}
