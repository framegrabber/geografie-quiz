// Statistics Management
class StatsManager {
    constructor() {
        this.stats = this.loadStats();
    }

    loadStats() {
        const saved = getCookie(QUIZ_CONFIG.statsCookieName);
        const defaultStats = this.getDefaultStats();
        
        if (saved) {
            const parsedStats = parseJSON(saved, defaultStats);
            // Merge with default stats to ensure all categories exist
            parsedStats.categories = { ...defaultStats.categories, ...parsedStats.categories };
            return parsedStats;
        }
        return defaultStats;
    }

    getDefaultStats() {
        return JSON.parse(JSON.stringify(QUIZ_CONFIG.defaultStats));
    }

    saveStats() {
        const json = stringifyJSON(this.stats);
        if (json) {
            setCookie(QUIZ_CONFIG.statsCookieName, json, QUIZ_CONFIG.statsCookieDays);
        }
    }

    addGameResult(category, score, correct, wrong) {
        this.stats.totalGames++;
        this.stats.totalPoints += score;
        this.stats.totalCorrect += correct;
        this.stats.totalWrong += wrong;

        if (this.stats.categories[category]) {
            this.stats.categories[category].games++;
            this.stats.categories[category].points += score;
            this.stats.categories[category].correct += correct;
            this.stats.categories[category].wrong += wrong;
        }

        this.saveStats();
    }

    reset() {
        this.stats = this.getDefaultStats();
        this.saveStats();
    }

    getStats() {
        return this.stats;
    }

    getCategoryStats(category) {
        return this.stats.categories[category] || null;
    }
}
