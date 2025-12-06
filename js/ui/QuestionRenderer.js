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
        } else if (question.type === 'flag-to-country') {
            this.renderFlagToCountry(question);
        } else if (question.type === 'country-to-flag') {
            this.renderCountryToFlag(question);
        } else if (question.type === 'fillblanks') {
            this.renderFillBlanks(question);
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

        // Disable all buttons and apply visual styling
        const allButtons = this.elements.answerContainer.querySelectorAll('button');
        allButtons.forEach(btn => {
            btn.disabled = true;
            btn.style.opacity = '0.6';
            btn.style.cursor = 'not-allowed';
        });

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

    renderFlagToCountry(question) {
        // Hide map elements
        this.elements.mapContainer.classList.add('hidden');
        this.elements.mapInstruction.classList.add('hidden');

        // Show answer container
        this.elements.answerContainer.classList.remove('hidden');
        clearContainer(this.elements.answerContainer);

        // Show flag image
        const flagImg = document.createElement('img');
        flagImg.src = question.flag;
        flagImg.alt = 'Flagge';
        flagImg.className = 'w-32 h-20 object-contain mx-auto mb-4 border border-gray-300 rounded';
        this.elements.answerContainer.appendChild(flagImg);

        // Create answer buttons
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.className = 'w-full p-4 text-left rounded-lg border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition';
            button.dataset.answer = answer;
            button.addEventListener('click', () => this.handleMultipleChoiceAnswer(answer, button, question.correctAnswer));
            this.elements.answerContainer.appendChild(button);
        });
    }

    renderCountryToFlag(question) {
        // Hide map elements
        this.elements.mapContainer.classList.add('hidden');
        this.elements.mapInstruction.classList.add('hidden');

        // Show answer container
        this.elements.answerContainer.classList.remove('hidden');
        clearContainer(this.elements.answerContainer);

        // Show country name
        const countryLabel = document.createElement('div');
        countryLabel.textContent = question.country;
        countryLabel.className = 'text-xl font-bold mb-4 text-center';
        this.elements.answerContainer.appendChild(countryLabel);

        // Create flag option buttons
        question.flagOptions.forEach(flagPath => {
            const button = document.createElement('button');
            button.className = 'inline-block m-2 p-2 border-2 border-gray-300 rounded hover:border-blue-500 bg-white';
            button.dataset.flag = flagPath;

            const img = document.createElement('img');
            img.src = flagPath;
            img.alt = 'Flagge';
            img.className = 'w-24 h-16 object-contain';
            button.appendChild(img);

            button.addEventListener('click', () => this.handleFlagChoiceAnswer(flagPath, button, question.correctFlag));
            this.elements.answerContainer.appendChild(button);
        });
    }

    handleFlagChoiceAnswer(selectedFlag, button, correctFlag) {
        const buttons = this.elements.answerContainer.querySelectorAll('button[data-flag]');
        disableAllButtons(this.elements.answerContainer);
        const isCorrect = selectedFlag === correctFlag;
        if (isCorrect) {
            button.classList.add('bg-green-100', 'border-green-500');
        } else {
            button.classList.add('bg-red-100', 'border-red-500');
            // Show correct flag
            buttons.forEach(btn => {
                if (btn.dataset.flag === correctFlag) {
                    btn.classList.add('bg-green-100', 'border-green-500');
                }
            });
        }
        if (this.answerCallback) {
            this.answerCallback(isCorrect);
        }
        this.nextBtn.classList.remove('hidden');
    }

    renderFillBlanks(question) {
        // Hide map elements
        this.elements.mapContainer.classList.add('hidden');
        this.elements.mapInstruction.classList.add('hidden');

        // Show answer container
        this.elements.answerContainer.classList.remove('hidden');
        clearContainer(this.elements.answerContainer);

        // Create container for the exercise
        const container = document.createElement('div');
        container.className = 'space-y-6';

        // Create text with blanks
        const textContainer = document.createElement('div');
        textContainer.className = 'bg-gray-100 p-6 rounded-lg text-lg leading-loose border-2 border-gray-300';
        
        // Parse the text and create dropzones
        const parts = question.text.split('_');
        let blankIndex = 0;
        
        parts.forEach((part, index) => {
            if (part !== '') {
                const textSpan = document.createElement('span');
                textSpan.textContent = part;
                textContainer.appendChild(textSpan);
            }
            
            // Add dropzone for each blank (except after the last part)
            if (index < parts.length - 1) {
                const dropzone = document.createElement('div');
                dropzone.className = 'inline-block mx-1 mb-2 p-2 min-w-[120px] border-2 border-dashed border-blue-400 rounded bg-blue-50 text-center cursor-move relative';
                dropzone.dataset.blankIndex = blankIndex;
                dropzone.dataset.correctAnswer = question.blanks.find(b => b.position === blankIndex)?.answer || '';
                dropzone.textContent = '∅';
                dropzone.style.color = '#999';
                dropzone.style.minHeight = '40px';
                dropzone.style.display = 'inline-flex';
                dropzone.style.alignItems = 'center';
                dropzone.style.justifyContent = 'center';
                
                // Allow drops on blanks - Drag and Drop API
                dropzone.addEventListener('dragover', this.handleDragOver.bind(this));
                dropzone.addEventListener('drop', (e) => this.handleDropOnBlank(e, dropzone, question));
                dropzone.addEventListener('dragend', this.handleDragEnd.bind(this));
                
                // Make dropzone draggable when it has content
                dropzone.addEventListener('dragstart', (e) => this.handleDragStartFromBlank(e, dropzone));
                
                // Touch events for iOS
                dropzone.addEventListener('touchstart', (e) => this.handleTouchStartBlank(e, dropzone));
                dropzone.addEventListener('touchmove', this.handleTouchMove.bind(this), false);
                dropzone.addEventListener('touchend', (e) => this.handleTouchEndBlank(e, dropzone, question));
                
                textContainer.appendChild(dropzone);
                blankIndex++;
            }
        });
        
        container.appendChild(textContainer);

        // Create draggable words container
        const wordsContainer = document.createElement('div');
        wordsContainer.className = 'bg-blue-50 p-4 rounded-lg border-2 border-blue-300';
        
        const wordsLabel = document.createElement('div');
        wordsLabel.className = 'font-semibold text-blue-900 mb-3';
        wordsLabel.textContent = 'Wörter (ziehe sie in die Lücken):';
        wordsContainer.appendChild(wordsLabel);

        const wordsList = document.createElement('div');
        wordsList.className = 'flex flex-wrap gap-2';
        wordsList.id = 'wordsList';

        // Shuffle words for randomization
        const shuffledWords = [...question.words].sort(() => Math.random() - 0.5);

        // Create draggable word buttons
        shuffledWords.forEach(word => {
            const wordBtn = document.createElement('div');
            wordBtn.className = 'px-4 py-2 bg-blue-500 text-white rounded cursor-move hover:bg-blue-600 select-none transition';
            wordBtn.textContent = word;
            wordBtn.draggable = true;
            wordBtn.dataset.word = word;
            wordBtn.id = `word-${word}`;
            
            // Drag and Drop API
            wordBtn.addEventListener('dragstart', this.handleDragStart.bind(this));
            wordBtn.addEventListener('dragend', this.handleDragEnd.bind(this));
            
            // Touch events for iOS
            wordBtn.addEventListener('touchstart', (e) => this.handleTouchStartWord(e, wordBtn));
            wordBtn.addEventListener('touchmove', this.handleTouchMove.bind(this), false);
            wordBtn.addEventListener('touchend', (e) => this.handleTouchEndWord(e, wordBtn));
            
            wordsList.appendChild(wordBtn);
        });

        // Make words container a drop zone to return words
        wordsList.addEventListener('dragover', this.handleDragOver.bind(this));
        wordsList.addEventListener('drop', (e) => this.handleDropOnWordsList(e, wordsList));
        wordsList.addEventListener('touchmove', this.handleTouchMove.bind(this), false);
        wordsList.addEventListener('touchend', (e) => this.handleTouchEndWordsList(e, wordsList));

        wordsContainer.appendChild(wordsList);
        container.appendChild(wordsContainer);

        // Create submit button
        const submitBtn = document.createElement('button');
        submitBtn.textContent = 'Antwort abgeben';
        submitBtn.className = 'w-full mt-4 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition';
        submitBtn.addEventListener('click', () => this.submitFillBlanksAnswer(question));
        container.appendChild(submitBtn);

        this.elements.answerContainer.appendChild(container);
    }

    // Touch event handlers for better iOS support
    handleTouchStartWord(e, wordBtn) {
        this.currentDraggedElement = wordBtn;
        this.currentDraggedWord = wordBtn.dataset.word;
        wordBtn.style.opacity = '0.5';
        wordBtn.style.transform = 'scale(0.95)';
    }

    handleTouchStartBlank(e, dropzone) {
        if (dropzone.dataset.value) {
            this.currentDraggedElement = dropzone;
            this.currentDraggedWord = dropzone.dataset.value;
            this.currentDraggedBlankIndex = dropzone.dataset.blankIndex;
            dropzone.style.opacity = '0.5';
            dropzone.style.transform = 'scale(0.95)';
        }
    }

    handleTouchMove(e) {
        e.preventDefault();
    }

    handleTouchEndWord(e, wordBtn) {
        const touch = e.changedTouches[0];
        const dropzone = document.elementFromPoint(touch.clientX, touch.clientY);
        
        if (dropzone && dropzone.dataset.blankIndex !== undefined) {
            // Found a dropzone - simulate drop
            this.moveWordToBlank(wordBtn.dataset.word, dropzone);
        }
        
        wordBtn.style.opacity = '1';
        wordBtn.style.transform = 'scale(1)';
        this.currentDraggedElement = null;
        this.currentDraggedWord = null;
    }

    handleTouchEndBlank(e, dropzone, question) {
        const touch = e.changedTouches[0];
        const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
        
        if (targetElement && targetElement.id === 'wordsList') {
            // Return word to word list
            const word = dropzone.dataset.value;
            const wordBtn = document.getElementById(`word-${word}`);
            if (wordBtn) {
                wordBtn.style.display = 'inline-block';
            }
            dropzone.textContent = '∅';
            dropzone.style.color = '#999';
            dropzone.dataset.value = '';
            dropzone.style.backgroundColor = '#dbeafe';
            dropzone.style.borderColor = '#60a5fa';
            dropzone.draggable = false;
        }
        
        dropzone.style.opacity = '1';
        dropzone.style.transform = 'scale(1)';
        this.currentDraggedElement = null;
        this.currentDraggedWord = null;
        this.currentDraggedBlankIndex = null;
    }

    handleTouchEndWordsList(e, wordsList) {
        if (this.currentDraggedElement && this.currentDraggedBlankIndex !== undefined) {
            // Return word from blank
            const dropzone = document.querySelector(`[data-blank-index="${this.currentDraggedBlankIndex}"]`);
            if (dropzone) {
                const word = dropzone.dataset.value;
                const wordBtn = document.getElementById(`word-${word}`);
                if (wordBtn) {
                    wordBtn.style.display = 'inline-block';
                }
                dropzone.textContent = '∅';
                dropzone.style.color = '#999';
                dropzone.dataset.value = '';
                dropzone.style.backgroundColor = '#dbeafe';
                dropzone.style.borderColor = '#60a5fa';
                dropzone.draggable = false;
            }
        }
        this.currentDraggedElement = null;
        this.currentDraggedWord = null;
    }

    moveWordToBlank(word, dropzone) {
        // If there was already a word in this blank, return it to the word list
        if (dropzone.dataset.value) {
            const oldWord = dropzone.dataset.value;
            const wordBtn = document.getElementById(`word-${oldWord}`);
            if (wordBtn) {
                wordBtn.style.display = 'inline-block';
            }
        }
        
        // Hide the word button if it exists in the word list
        const wordBtn = document.getElementById(`word-${word}`);
        if (wordBtn) {
            wordBtn.style.display = 'none';
        }
        
        // Update dropzone content
        dropzone.textContent = word;
        dropzone.style.color = '#000';
        dropzone.dataset.value = word;
        dropzone.style.backgroundColor = '#fff';
        dropzone.style.borderColor = '#60a5fa';
        dropzone.style.cursor = 'move';
        dropzone.draggable = true;
    }

    handleDragStart(e) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', e.target.dataset.word);
        e.target.style.opacity = '0.5';
    }

    handleDragStartFromBlank(e, dropzone) {
        if (dropzone.dataset.value) {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', dropzone.dataset.value);
            e.dataTransfer.setData('source', 'blank');
            e.dataTransfer.setData('sourceBlankIndex', dropzone.dataset.blankIndex);
            dropzone.style.opacity = '0.5';
        }
    }

    handleDragEnd(e) {
        e.target.style.opacity = '1';
    }

    handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        e.currentTarget.style.backgroundColor = '#dbeafe';
        e.currentTarget.style.borderColor = '#0084ff';
    }

    handleDropOnBlank(e, dropzone, question) {
        e.preventDefault();
        const word = e.dataTransfer.getData('text/plain');
        const source = e.dataTransfer.getData('source');
        const sourceBlankIndex = e.dataTransfer.getData('sourceBlankIndex');
        
        // If the word came from another blank, clear that blank first
        if (source === 'blank') {
            const sourceBlank = document.querySelector(`[data-blank-index="${sourceBlankIndex}"]`);
            if (sourceBlank) {
                sourceBlank.textContent = '∅';
                sourceBlank.style.color = '#999';
                sourceBlank.dataset.value = '';
                sourceBlank.style.backgroundColor = '#dbeafe';
                sourceBlank.style.borderColor = '#60a5fa';
                sourceBlank.draggable = false;
            }
        }
        
        this.moveWordToBlank(word, dropzone);
    }

    handleDropOnWordsList(e, wordsList) {
        e.preventDefault();
        const word = e.dataTransfer.getData('text/plain');
        
        // Find the blank that had this word
        const blanks = document.querySelectorAll('[data-blank-index]');
        blanks.forEach(blank => {
            if (blank.dataset.value === word) {
                blank.textContent = '∅';
                blank.style.color = '#999';
                blank.dataset.value = '';
                blank.style.backgroundColor = '#dbeafe';
                blank.style.borderColor = '#60a5fa';
                blank.draggable = false;
            }
        });
        
        // Show the word button again
        const wordBtn = document.getElementById(`word-${word}`);
        if (wordBtn) {
            wordBtn.style.display = 'inline-block';
        }
    }

    submitFillBlanksAnswer(question) {
        // Find and disable the submit button
        const submitBtn = Array.from(document.querySelectorAll('button')).find(btn => btn.textContent === 'Antwort abgeben');
        
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.6';
            submitBtn.style.cursor = 'not-allowed';
        }

        const dropzones = document.querySelectorAll('[data-blank-index]');
        let allCorrect = true;
        let filledBlanks = 0;
        let correctCount = 0;
        let wrongCount = 0;

        dropzones.forEach(dropzone => {
            const correctAnswer = dropzone.dataset.correctAnswer;
            const userAnswer = dropzone.dataset.value || '';

            if (userAnswer === correctAnswer) {
                dropzone.style.backgroundColor = '#dcfce7';
                dropzone.style.borderColor = '#22c55e';
                correctCount++;
            } else {
                allCorrect = false;
                wrongCount++;
                if (userAnswer === '') {
                    dropzone.style.backgroundColor = '#fee2e2';
                    dropzone.style.borderColor = '#ef4444';
                    dropzone.textContent = '✗';
                    dropzone.style.color = '#dc2626';
                } else {
                    dropzone.style.backgroundColor = '#fee2e2';
                    dropzone.style.borderColor = '#ef4444';
                    dropzone.style.color = '#000';
                }
            }
            
            if (userAnswer !== '') {
                filledBlanks++;
            }
        });

        // If not all filled, show error
        if (filledBlanks < dropzones.length) {
            allCorrect = false;
        }

        // Show feedback and disable interaction
        if (!allCorrect) {
            // Show correct answers
            dropzones.forEach(dropzone => {
                if (dropzone.dataset.value !== dropzone.dataset.correctAnswer) {
                    const correctLabel = document.createElement('div');
                    correctLabel.className = 'text-xs mt-1 text-green-700 font-semibold';
                    correctLabel.textContent = `✓ ${dropzone.dataset.correctAnswer}`;
                    if (!dropzone.querySelector('.text-xs')) {
                        dropzone.appendChild(correctLabel);
                    }
                }
            });
        }

        // Disable word dragging
        document.querySelectorAll('#wordsList div').forEach(word => {
            word.draggable = false;
            word.style.opacity = '0.6';
            word.style.cursor = 'not-allowed';
        });

        // Pass individual answer counts to callback
        if (this.answerCallback) {
            this.answerCallback({ isCorrect: allCorrect, correct: correctCount, wrong: wrongCount });
        }

        this.nextBtn.classList.remove('hidden');
    }
}
