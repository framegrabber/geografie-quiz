// Category configuration
const CATEGORIES = {
    bundeslaender: {
        id: 'bundeslaender',
        name: '🏰 Deutsche Bundesländer',
        description: 'Hauptstädte, Flächen und Lage',
        color: 'bg-blue-500 hover:bg-blue-600'
    },
    europa: {
        id: 'europa',
        name: '🇪🇺 Europäische Länder',
        description: 'Hauptstädte und Geografie',
        color: 'bg-green-500 hover:bg-green-600'
    },
    nachbarlaender: {
        id: 'nachbarlaender',
        name: '🤝 Deutsche Nachbarländer',
        description: 'Grenzen und Hauptstädte',
        color: 'bg-orange-500 hover:bg-orange-600'
    },
    bayern: {
        id: 'bayern',
        name: '🏔️ Bayerische Bezirke',
        description: 'Regierungsbezirke Bayerns',
        color: 'bg-purple-500 hover:bg-purple-600'
    },
    mix: {
        id: 'mix',
        name: '🎲 Mix-Modus',
        description: 'Fragen aus allen Kategorien',
        color: 'bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600'
    }
};

// Category colors for badges in quiz screen
const CATEGORY_BADGE_COLORS = {
    'Bundesländer': 'bg-blue-100 text-blue-800',
    'Europa': 'bg-green-100 text-green-800',
    'Nachbarländer': 'bg-orange-100 text-orange-800',
    'Bayern': 'bg-purple-100 text-purple-800'
};

// Category display names for statistics
const CATEGORY_DISPLAY_NAMES = {
    bundeslaender: '🏰 Deutsche Bundesländer',
    europa: '🇪🇺 Europäische Länder',
    nachbarlaender: '🤝 Deutsche Nachbarländer',
    bayern: '🏔️ Bayerische Bezirke',
    mix: '🎲 Mix-Modus'
};
