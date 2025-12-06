# Quick Reference Guide - Modular Geografie-Quiz

## 📁 Project Structure

```
geografie-quiz/
├── index.html                  # HTML template + script loading
├── styles.css                  # Global styles
├── STRUCTURE.md                # Detailed structure documentation
├── REFACTORING_SUMMARY.md      # Refactoring overview
├── questions.js                # (Old - can delete, data moved to js/data/)
├── maps/                       # GeoJSON files
│   ├── bavaria.json
│   ├── europe.json
│   └── germany.json
│
└── js/                         # All application modules
    ├── app.js                  # Entry point
    ├── config/
    │   ├── categories.js       # Category config
    │   ├── mapConfig.js        # Map config
    │   └── quizConfig.js       # Quiz settings
    ├── core/
    │   ├── GameEngine.js       # Game logic
    │   └── GameState.js        # Game state
    ├── data/
    │   └── questions.js        # Quiz data
    ├── stats/
    │   ├── StatsManager.js     # Stats persistence
    │   └── StatsRenderer.js    # Stats display
    ├── ui/
    │   ├── EventManager.js     # Events
    │   ├── MapRenderer.js      # Map rendering
    │   ├── QuestionRenderer.js # Question display
    │   ├── ScreenManager.js    # Screen nav
    │   └── UIUpdater.js        # DOM updates
    └── utils/
        ├── arrayUtils.js       # Array functions
        ├── dataUtils.js        # Data helpers
        └── domUtils.js         # DOM helpers
```

## 🚀 How to Extend

### Add a New Quiz Category

**Step 1**: Add questions to `js/data/questions.js`
```javascript
const quizData = {
    // ... existing categories ...
    newcategory: [
        {
            question: "Question text?",
            answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
            correctAnswer: "Option 1",
            type: "multiple",  // or "map"
            category: "New Category"
        },
        // ... more questions ...
    ]
};
```

**Step 2**: Add category config to `js/config/categories.js`
```javascript
const CATEGORIES = {
    // ... existing ...
    newcategory: {
        id: 'newcategory',
        name: '🎯 New Category',
        description: 'Description here',
        color: 'bg-red-500 hover:bg-red-600'
    }
};
```

**Step 3**: Add category button to `index.html`
```html
<button class="category-btn bg-red-500 hover:bg-red-600 ..." data-category="newcategory">
    🎯 New Category
    <p class="text-sm font-normal mt-2">Description</p>
    <p class="text-xs mt-1 opacity-75">Gespielt: <span class="category-games" data-cat="newcategory">0</span>x</p>
</button>
```

### Add a New Map Question

**For map questions**, also add map config to `js/config/mapConfig.js`:
```javascript
const MAP_CONFIG = {
    // ... existing ...
    mycity: {
        url: 'https://... geojson url ...',
        projection: {
            type: 'geoMercator',
            center: [10.4, 51.2],
            scale: 5000
        },
        nameProperty: 'name'
    }
};
```

### Modify Question Rendering

Edit `js/ui/QuestionRenderer.js`:
- `renderQuestion()` - Main question display
- `renderMultipleChoice()` - Answer buttons
- `renderMapQuestion()` - Trigger map rendering
- `renderCategoryBadge()` - Question category label

### Modify Statistics Display

Edit `js/stats/StatsRenderer.js`:
- `renderOverallStats()` - Top-level stats
- `renderCategoryStats()` - Per-category stats
- `renderPerformance()` - Best/worst performance

### Add Event Handling

Edit `js/ui/EventManager.js` - `setupEventListeners()`:
```javascript
// Add new event listener
document.getElementById('myElement').addEventListener('click', () => {
    this.handleMyEvent();
});

// Add handler method
handleMyEvent() {
    // Your logic here
}
```

## 🎮 Game Flow

```
app.js (init)
    ↓
GameState (create)
    ↓
GameEngine (create)
    ↓
EventManager (setup listeners)
    ↓
User clicks category
    ↓
GameEngine.selectCategory()
    → shuffle questions
    → set game state
    ↓
ScreenManager.showQuizScreen()
    ↓
QuestionRenderer.renderQuestion()
    ↓
User answers question
    ↓
GameEngine.checkAnswer()
    → update score
    ↓
UIUpdater.updateScore()
    ↓
User clicks next (or end of quiz)
    ↓
GameEngine.endQuiz()
    → save stats
    ↓
StatsManager.addGameResult()
    → persist to cookie
```

## 📊 Data Flow

```
quizData (questions.js)
    ↓
GameEngine.selectCategory()
    ↓
GameState.setQuestions()
    ↓
QuestionRenderer.renderQuestion()
    ↓
User selects answer
    ↓
GameEngine.checkAnswer()
    ↓
StatsManager.addGameResult()
    ↓
Cookie storage
    ↓
StatsRenderer.render()
```

## 🔑 Key Classes

### GameState
- Manages current question, score, progress
- Single source of truth for game data
- No side effects (pure state)

### GameEngine
- Orchestrates game flow
- Uses GameState + StatsManager
- Business logic only

### StatsManager
- Persistent statistics via cookies
- Isolated from game logic
- CRUD operations on stats

### ScreenManager
- Toggle between category/quiz/stats/end screens
- Pure DOM manipulation

### QuestionRenderer
- Renders questions based on type
- Handles answer callbacks
- No game logic

### MapRenderer
- D3 map rendering
- Isolated map interactions
- Reusable for any map-based question

### EventManager
- Central event delegation
- Connects all components
- No direct DOM manipulation

## 🧪 Testing Scenarios

### Test Category Selection
1. Click "Deutsche Bundesländer"
2. Verify 10 shuffled questions load
3. Verify quiz screen shows

### Test Multiple Choice
1. Complete a multiple-choice question
2. Select wrong answer → highlights red + shows correct
3. Select right answer → highlights green
4. Click "Next" button

### Test Map Question
1. Complete a map question
2. Click wrong region → red, shows correct in green
3. Click correct region → highlights green
4. Next button appears

### Test Statistics
1. Play 2+ quizzes in different categories
2. Click "Statistiken"
3. Verify totals are correct
4. Verify category breakdowns
5. Verify best/worst performance

### Test Stats Reset
1. Have some stats saved
2. Click stats → "Zurücksetzen"
3. Confirm reset dialog
4. Verify all stats cleared
5. Verify cookies cleared

## 🐛 Debugging

### Check browser console
Open DevTools (F12) → Console tab:
- No JS errors should appear
- Check network tab to verify all scripts load (HTTP 200)

### Verify file loading
All 17 scripts load in order:
1. data/questions.js
2. config/*.js
3. utils/*.js
4. core/*.js
5. stats/*.js
6. ui/*.js
7. app.js

### Debug game state
In browser console:
```javascript
// Access global app (if exported)
app.gameEngine.getGameState()
app.statsManager.getStats()
```

## 📝 Performance Tips

- Map rendering is heaviest operation
- Consider lazy-loading map data
- Stats rendering is fast (~10ms)
- Quiz state updates are instant

## 🔄 Maintenance Checklist

- [ ] Update category colors in `categories.js` only
- [ ] Update quiz settings in `quizConfig.js`
- [ ] Add new maps to `mapConfig.js`
- [ ] Keep utility functions pure (no side effects)
- [ ] Keep game logic in `GameEngine.js`
- [ ] Keep UI logic in `ui/` files

## 🎓 Learning Path

1. Start with `app.js` - see initialization
2. Read `GameState.js` - understand state
3. Read `GameEngine.js` - understand logic
4. Read `EventManager.js` - understand connections
5. Explore individual `ui/` components
6. Explore utility functions as needed

---

**Version**: 1.0 Refactored  
**Last Updated**: December 6, 2025  
**Status**: Production Ready ✓
