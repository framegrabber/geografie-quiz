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

        // Determine if this is a multi-answer question
        const isMultiAnswer = Array.isArray(question.correctAnswer);

        // Create answer buttons
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.className = 'w-full p-4 text-left rounded-lg border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition';
            button.dataset.answer = answer;
            
            if (isMultiAnswer) {
                // Multi-answer mode: allow multiple selections
                button.addEventListener('click', () => this.toggleMultiAnswer(button, answer));
            } else {
                // Single answer mode: immediate feedback
                button.addEventListener('click', () => this.handleMultipleChoiceAnswer(answer, button, question.correctAnswer));
            }
            this.elements.answerContainer.appendChild(button);
        });

        // For multi-answer questions, add a submit button
        if (isMultiAnswer) {
            const submitBtn = document.createElement('button');
            submitBtn.textContent = 'Antwort abgeben';
            submitBtn.className = 'w-full mt-4 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition';
            submitBtn.addEventListener('click', () => this.submitMultiAnswer(question.correctAnswer));
            this.elements.answerContainer.appendChild(submitBtn);
        }
    }

    toggleMultiAnswer(button, answer) {
        button.classList.toggle('bg-blue-100');
        button.classList.toggle('border-blue-500');
    }

    submitMultiAnswer(correctAnswers) {
        const buttons = this.elements.answerContainer.querySelectorAll('button[data-answer]');
        const selectedAnswers = Array.from(buttons)
            .filter(btn => btn.classList.contains('bg-blue-100'))
            .map(btn => btn.dataset.answer);

        // Check if selected answers match correct answers
        const isCorrect = selectedAnswers.length === correctAnswers.length &&
            selectedAnswers.every(answer => correctAnswers.includes(answer));

        // Disable all buttons
        const allButtons = this.elements.answerContainer.querySelectorAll('button');
        disableAllButtons(this.elements.answerContainer);

        // Show feedback
        buttons.forEach(button => {
            const answer = button.dataset.answer;
            button.classList.remove('bg-blue-100', 'border-blue-500', 'hover:border-blue-500', 'hover:bg-blue-50');
            
            if (correctAnswers.includes(answer)) {
                button.classList.add('bg-green-100', 'border-green-500');
            } else if (selectedAnswers.includes(answer)) {
                button.classList.add('bg-red-100', 'border-red-500');
            }
        });

        if (this.answerCallback) {
            this.answerCallback(isCorrect);
        }

        this.nextBtn.classList.remove('hidden');
    }

    handleMultipleChoiceAnswer(selected, button, correct) {
        const buttons = this.elements.answerContainer.querySelectorAll('button[data-answer]');
        disableAllButtons(this.elements.answerContainer);

        // Handle both string and array correctAnswer
        const correctAnswers = Array.isArray(correct) ? correct : [correct];
        const isCorrect = correctAnswers.includes(selected);

        if (isCorrect) {
            button.classList.add('bg-green-100', 'border-green-500');
        } else {
            button.classList.add('bg-red-100', 'border-red-500');
            // Show correct answer(s)
            buttons.forEach(btn => {
                if (correctAnswers.includes(btn.dataset.answer)) {
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
