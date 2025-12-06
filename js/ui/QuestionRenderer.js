// Question Renderer - handles rendering questions and answer options
class QuestionRenderer {
    constructor(elements, gameEngine, nextBtn) {
        this.elements = elements;
        this.gameEngine = gameEngine;
        this.nextBtn = nextBtn;
        this.answerCallback = null;
    }

    setAnswerCallback(callback) {
        this.answerCallback = callback;
    }

    renderQuestion() {
        const question = this.gameEngine.getCurrentQuestion();
        if (!question) return;

        // Update question text and metadata
        updateElementText(this.elements.questionText, question.question);
        updateElementText(
            this.elements.questionNumber, 
            `Frage ${this.gameEngine.getGameState().getCurrentQuestionIndex() + 1} von ${this.gameEngine.getGameState().getTotalQuestions()}`
        );

        const progress = this.gameEngine.getGameState().getProgress();
        this.elements.progressBar.style.width = `${progress}%`;

        // Hide next button until answer is selected
        this.nextBtn.classList.add('hidden');

        // Update category badge
        this.renderCategoryBadge(question.category);

        // Render question content based on type
        if (question.type === 'multiple') {
            this.renderMultipleChoice(question);
        } else if (question.type === 'map') {
            this.renderMapQuestion(question);
        }
    }

    renderCategoryBadge(category) {
        updateElementText(this.elements.categoryBadge, category);
        const color = CATEGORY_BADGE_COLORS[category] || 'bg-gray-100 text-gray-800';
        this.elements.categoryBadge.className = `inline-block px-4 py-1 rounded-full text-sm font-semibold ${color}`;
    }

    renderMultipleChoice(question) {
        // Hide map elements
        this.elements.mapContainer.classList.add('hidden');
        this.elements.mapInstruction.classList.add('hidden');

        // Show answer container
        this.elements.answerContainer.classList.remove('hidden');
        clearContainer(this.elements.answerContainer);

        // Create answer buttons
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.className = 'w-full p-4 text-left rounded-lg border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition';
            button.addEventListener('click', () => this.handleMultipleChoiceAnswer(answer, button, question.correctAnswer));
            this.elements.answerContainer.appendChild(button);
        });
    }

    handleMultipleChoiceAnswer(selected, button, correct) {
        const buttons = this.elements.answerContainer.querySelectorAll('button');
        disableAllButtons(this.elements.answerContainer);

        const isCorrect = selected === correct;

        if (isCorrect) {
            button.classList.add('bg-green-100', 'border-green-500');
        } else {
            button.classList.add('bg-red-100', 'border-red-500');
            // Show correct answer
            buttons.forEach(btn => {
                if (btn.textContent === correct) {
                    btn.classList.add('bg-green-100', 'border-green-500');
                }
            });
        }

        if (this.answerCallback) {
            this.answerCallback(isCorrect);
        }

        this.nextBtn.classList.remove('hidden');
    }

    renderMapQuestion(question) {
        // Hide multiple choice elements
        this.elements.answerContainer.classList.add('hidden');

        // Show map elements
        this.elements.mapContainer.classList.remove('hidden');
        this.elements.mapInstruction.classList.remove('hidden');
        clearContainer(this.elements.mapContainer);

        // Trigger map rendering (delegated to MapRenderer)
        if (this.answerCallback) {
            this.answerCallback('map', question.correctAnswer, question.category);
        }
    }
}
