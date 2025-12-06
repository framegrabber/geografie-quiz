// Directory structure documentation
// 
// geografie-quiz/
// ├── index.html                    # Main HTML file with modular script loading
// ├── styles.css                    # Global CSS styles
// ├── questions.js                  # (Old) - Can be deleted, data moved to js/data/questions.js
// ├── maps/                         # GeoJSON map data files
// │   ├── bavaria.json
// │   ├── europe.json
// │   └── germany.json
// │
// └── js/                           # All application JavaScript modules
//     ├── app.js                    # Entry point - initializes and orchestrates the app
//     │
//     ├── config/                   # Configuration and constants
//     │   ├── categories.js         # Category definitions and metadata
//     │   ├── quizConfig.js         # Quiz settings and DOM selectors
//     │   └── mapConfig.js          # Map configuration and colors
//     │
//     ├── core/                     # Core game logic
//     │   ├── GameState.js          # Encapsulates quiz state (questions, score, etc.)
//     │   └── GameEngine.js         # Game flow logic (selectCategory, nextQuestion, etc.)
//     │
//     ├── data/                     # Data layer
//     │   └── questions.js          # Quiz questions data (quizData object)
//     │
//     ├── stats/                    # Statistics management
//     │   ├── StatsManager.js       # Cookie-based stats persistence and retrieval
//     │   └── StatsRenderer.js      # Stats display and rendering
//     │
//     ├── ui/                       # User interface components
//     │   ├── ScreenManager.js      # Screen visibility toggling (category, quiz, stats, end)
//     │   ├── QuestionRenderer.js   # Question and answer rendering
//     │   ├── MapRenderer.js        # D3 map rendering for map questions
//     │   ├── UIUpdater.js          # DOM element updates (scores, stats, etc.)
//     │   └── EventManager.js       # Event listener setup and delegation
//     │
//     └── utils/                    # Utility functions
//         ├── arrayUtils.js         # Array manipulation (shuffleArray)
//         ├── domUtils.js           # DOM helper functions (element caching, visibility)
//         └── dataUtils.js          # Data utilities (JSON parsing, cookies, math)
//
// KEY IMPROVEMENTS:
// ================
// 1. Separation of Concerns
//    - UI logic separated from game logic
//    - Configuration centralized and reusable
//    - Data layer isolated from presentation
//
// 2. Modularity
//    - Each file has a single responsibility
//    - Easy to locate and modify specific features
//    - Reusable components (StatsManager, GameEngine, etc.)
//
// 3. Maintainability
//    - Clear file naming conventions
//    - Reduced complexity per file
//    - Easier to test individual modules
//
// 4. Scalability
//    - Simple to add new quiz categories
//    - Easy to extend stats features
//    - Trivial to add new UI screens
//
// DEPENDENCY GRAPH:
// =================
// app.js (entry point)
//   └── Creates instances of:
//       ├── GameState (core/GameState.js)
//       ├── StatsManager (stats/StatsManager.js)
//       ├── GameEngine (core/GameEngine.js)
//       │   └── Uses: GameState, StatsManager
//       ├── ScreenManager (ui/ScreenManager.js)
//       ├── QuestionRenderer (ui/QuestionRenderer.js)
//       │   └── Uses: GameEngine
//       ├── MapRenderer (ui/MapRenderer.js)
//       │   └── Uses: MAP_CONFIG, MAP_COLORS, MAP_DIMENSIONS
//       ├── UIUpdater (ui/UIUpdater.js)
//       ├── StatsRenderer (stats/StatsRenderer.js)
//       │   └── Uses: GameEngine
//       └── EventManager (ui/EventManager.js)
//           └── Uses: All above components
//
// CONFIGURATION LOADING ORDER (in index.html):
// =============================================
// 1. Data: questions.js
// 2. Config: categories.js, quizConfig.js, mapConfig.js
// 3. Utils: arrayUtils.js, domUtils.js, dataUtils.js
// 4. Core: GameState.js, StatsManager.js, GameEngine.js
// 5. UI: ScreenManager.js, QuestionRenderer.js, MapRenderer.js, UIUpdater.js, EventManager.js, StatsRenderer.js
// 6. Entry: app.js
