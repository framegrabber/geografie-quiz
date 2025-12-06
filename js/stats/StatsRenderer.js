// Stats Renderer - handles rendering statistics screens
class StatsRenderer {
    constructor(elements, gameEngine) {
        this.elements = elements;
        this.gameEngine = gameEngine;
    }

    render() {
        const stats = this.gameEngine.getStats();
        
        this.renderOverallStats(stats);
        this.renderAverageScore(stats);
        this.renderCategoryStats(stats);
        this.renderPerformance(stats);
    }

    renderOverallStats(stats) {
        updateElementText(this.elements.statTotalGames, stats.totalGames);
        updateElementText(this.elements.statTotalPoints, stats.totalPoints);
        updateElementText(this.elements.statTotalCorrect, stats.totalCorrect);
        updateElementText(this.elements.statTotalWrong, stats.totalWrong);
    }

    renderAverageScore(stats) {
        const average = calculateAverage(stats.totalPoints, stats.totalGames);
        updateElementText(this.elements.statAverage, average);
    }

    renderCategoryStats(stats) {
        clearContainer(this.elements.categoryStatsContainer);

        Object.entries(stats.categories).forEach(([key, data]) => {
            if (data.games > 0) {
                const avg = calculateAverage(data.points, data.games);
                const accuracy = calculatePercentage(data.correct, data.correct + data.wrong);
                
                const catDiv = document.createElement('div');
                catDiv.className = 'bg-gray-50 p-4 rounded-lg';
                catDiv.innerHTML = `
                    <div class="flex justify-between items-center mb-2">
                        <h4 class="font-semibold text-gray-800">${CATEGORY_DISPLAY_NAMES[key]}</h4>
                        <span class="text-sm text-gray-600">${data.games} Spiele</span>
                    </div>
                    <div class="grid grid-cols-4 gap-2 text-center text-sm">
                        <div>
                            <p class="text-gray-600">Punkte</p>
                            <p class="font-bold text-blue-600">${data.points}</p>
                        </div>
                        <div>
                            <p class="text-gray-600">Ø</p>
                            <p class="font-bold text-purple-600">${avg}</p>
                        </div>
                        <div>
                            <p class="text-gray-600">Richtig</p>
                            <p class="font-bold text-green-600">${data.correct}</p>
                        </div>
                        <div>
                            <p class="text-gray-600">Genauigkeit</p>
                            <p class="font-bold text-orange-600">${accuracy}%</p>
                        </div>
                    </div>
                `;
                this.elements.categoryStatsContainer.appendChild(catDiv);
            }
        });
    }

    renderPerformance(stats) {
        const bestPerf = this.elements.bestPerformance;
        const worstPerf = this.elements.worstPerformance;

        const averages = Object.entries(stats.categories)
            .filter(([key, data]) => data.games > 0)
            .map(([key, data]) => ({
                name: CATEGORY_DISPLAY_NAMES[key],
                average: data.points / data.games,
                accuracy: (data.correct / (data.correct + data.wrong)) * 100
            }))
            .sort((a, b) => b.average - a.average);

        if (averages.length > 0) {
            const best = averages[0];
            updateElementContent(bestPerf, `
                <div class="text-sm">
                    <p class="font-semibold">${best.name}</p>
                    <p class="text-gray-600">Durchschnitt: ${best.average.toFixed(1)} Punkte</p>
                    <p class="text-gray-600">Genauigkeit: ${best.accuracy.toFixed(0)}%</p>
                </div>
            `);

            if (averages.length > 1) {
                const worst = averages[averages.length - 1];
                updateElementContent(worstPerf, `
                    <div class="text-sm">
                        <p class="font-semibold">${worst.name}</p>
                        <p class="text-gray-600">Durchschnitt: ${worst.average.toFixed(1)} Punkte</p>
                        <p class="text-gray-600">Genauigkeit: ${worst.accuracy.toFixed(0)}%</p>
                    </div>
                `);
            } else {
                updateElementContent(worstPerf, '<p class="text-sm text-gray-500">Spiele mehr Kategorien!</p>');
            }
        } else {
            updateElementContent(bestPerf, '<p class="text-sm text-gray-500">Noch keine Daten</p>');
            updateElementContent(worstPerf, '<p class="text-sm text-gray-500">Noch keine Daten</p>');
        }
    }
}
