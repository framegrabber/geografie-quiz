// Quiz Questions Data - Echte Daten aus Wikipedia
const quizData = {
    bundeslaender: [
        {
            question: "Was ist die Hauptstadt von Bayern?",
            answers: ["Nürnberg", "Augsburg", "München", "Regensburg"],
            correctAnswer: "München",
            type: "multiple",
            category: "Bundesländer"
        },
        {
            question: "Wo ist Bayern auf der Karte?",
            correctAnswer: "Bayern",
            type: "map",
            category: "Bundesländer"
        },
        {
            question: "Welches ist das flächenmäßig größte Bundesland?",
            answers: ["Niedersachsen", "Bayern", "Baden-Württemberg", "Nordrhein-Westfalen"],
            correctAnswer: "Bayern",
            type: "multiple",
            category: "Bundesländer"
        },
        {
            question: "Was ist die Hauptstadt von Nordrhein-Westfalen?",
            answers: ["Köln", "Düsseldorf", "Dortmund", "Essen"],
            correctAnswer: "Düsseldorf",
            type: "multiple",
            category: "Bundesländer"
        },
        {
            question: "Wo ist Schleswig-Holstein auf der Karte?",
            correctAnswer: "Schleswig-Holstein",
            type: "map",
            category: "Bundesländer"
        },
        {
            question: "Welche der folgenden Bundesländer sind Stadtstaaten?",
            answers: ["Saarland", "Hamburg", "Bremen", "Berlin"],
            correctAnswer: ["Hamburg", "Bremen", "Berlin"],
            type: "multiple",
            category: "Bundesländer"
        },
        {
            question: "Wo ist Sachsen auf der Karte?",
            correctAnswer: "Sachsen",
            type: "map",
            category: "Bundesländer"
        },
        {
            question: "Was ist die Hauptstadt von Baden-Württemberg?",
            answers: ["Karlsruhe", "Stuttgart", "Mannheim", "Freiburg"],
            correctAnswer: "Stuttgart",
            type: "multiple",
            category: "Bundesländer"
        },
        {
            question: "Wo ist Rheinland-Pfalz auf der Karte?",
            correctAnswer: "Rheinland-Pfalz",
            type: "map",
            category: "Bundesländer"
        },
        {
            question: "Was ist die Hauptstadt von Hessen?",
            answers: ["Frankfurt am Main", "Wiesbaden", "Kassel", "Darmstadt"],
            correctAnswer: "Wiesbaden",
            type: "multiple",
            category: "Bundesländer"
        },
        {
            question: "Wo ist Niedersachsen auf der Karte?",
            correctAnswer: "Niedersachsen",
            type: "map",
            category: "Bundesländer"
        },
        {
            question: "Was ist die Hauptstadt von Sachsen?",
            answers: ["Leipzig", "Dresden", "Chemnitz", "Zwickau"],
            correctAnswer: "Dresden",
            type: "multiple",
            category: "Bundesländer"
        }
    ],
    europa: [
        {
            question: "Wo liegt Frankreich auf der Karte?",
            correctAnswer: "France",
            type: "map",
            category: "Europa"
        },
        {
            question: "Was ist die Hauptstadt von Frankreich?",
            answers: ["Marseille", "Lyon", "Paris", "Toulouse"],
            correctAnswer: "Paris",
            type: "multiple",
            category: "Europa"
        },
        {
            question: "Wo liegt Italien auf der Karte?",
            correctAnswer: "Italy",
            type: "map",
            category: "Europa"
        },
        {
            question: "Was ist die Hauptstadt von Italien?",
            answers: ["Mailand", "Rom", "Neapel", "Turin"],
            correctAnswer: "Rom",
            type: "multiple",
            category: "Europa"
        },
        {
            question: "Wo liegt Spanien auf der Karte?",
            correctAnswer: "Spain",
            type: "map",
            category: "Europa"
        },
        {
            question: "Was ist die Hauptstadt von Polen?",
            answers: ["Krakau", "Warschau", "Danzig", "Breslau"],
            correctAnswer: "Warschau",
            type: "multiple",
            category: "Europa"
        },
        {
            question: "Wo liegt Schweden auf der Karte?",
            correctAnswer: "Sweden",
            type: "map",
            category: "Europa"
        },
        {
            question: "Was ist die Hauptstadt von Griechenland?",
            answers: ["Thessaloniki", "Athen", "Patras", "Heraklion"],
            correctAnswer: "Athen",
            type: "multiple",
            category: "Europa"
        },
        {
            question: "Wo liegt Norwegen auf der Karte?",
            correctAnswer: "Norway",
            type: "map",
            category: "Europa"
        },
        {
            question: "Was ist die Hauptstadt von Portugal?",
            answers: ["Porto", "Lissabon", "Braga", "Coimbra"],
            correctAnswer: "Lissabon",
            type: "multiple",
            category: "Europa"
        },
        {
            question: "Wo liegt Deutschland auf der Karte?",
            correctAnswer: "Germany",
            type: "map",
            category: "Europa"
        },
        {
            question: "Was ist die Hauptstadt von Spanien?",
            answers: ["Barcelona", "Madrid", "Valencia", "Sevilla"],
            correctAnswer: "Madrid",
            type: "multiple",
            category: "Europa"
        },
        {
            question: "Welche der folgenden Länder sind Inselstaaten?",
            answers: ["Griechenland", "Irland", "Island", "Portugal"],
            correctAnswer: ["Irland", "Island"],
            type: "multiple",
            category: "Europa"
        }
    ],
    nachbarlaender: [
        {
            question: "Wie viele Nachbarländer hat Deutschland?",
            answers: ["7", "9", "11", "13"],
            correctAnswer: "9",
            type: "multiple",
            category: "Nachbarländer"
        },
        {
            question: "Wo liegt Dänemark auf der Karte?",
            correctAnswer: "Denmark",
            type: "map",
            category: "Nachbarländer"
        },
        {
            question: "Was ist die Hauptstadt der Niederlande?",
            answers: ["Rotterdam", "Den Haag", "Amsterdam", "Utrecht"],
            correctAnswer: "Amsterdam",
            type: "multiple",
            category: "Nachbarländer"
        },
        {
            question: "Wo liegt Polen auf der Karte?",
            correctAnswer: "Poland",
            type: "map",
            category: "Nachbarländer"
        },
        {
            question: "Was ist die Hauptstadt von Belgien?",
            answers: ["Antwerpen", "Brüssel", "Gent", "Brügge"],
            correctAnswer: "Brüssel",
            type: "multiple",
            category: "Nachbarländer"
        },
        {
            question: "Wo liegt die Schweiz auf der Karte?",
            correctAnswer: "Switzerland",
            type: "map",
            category: "Nachbarländer"
        },
        {
            question: "Was ist die Hauptstadt von Tschechien?",
            answers: ["Brünn", "Prag", "Ostrava", "Pilsen"],
            correctAnswer: "Prag",
            type: "multiple",
            category: "Nachbarländer"
        },
        {
            question: "Wo liegt Österreich auf der Karte?",
            correctAnswer: "Austria",
            type: "map",
            category: "Nachbarländer"
        },
        {
            question: "Welches Land grenzt im Norden an Deutschland?",
            answers: ["Norwegen", "Dänemark", "Schweden", "Polen"],
            correctAnswer: "Dänemark",
            type: "multiple",
            category: "Nachbarländer"
        },
        {
            question: "Wo liegt Frankreich auf der Karte?",
            correctAnswer: "France",
            type: "map",
            category: "Nachbarländer"
        },
        {
            question: "Was ist die Hauptstadt von Luxemburg?",
            answers: ["Esch-sur-Alzette", "Differdingen", "Luxemburg", "Dudelange"],
            correctAnswer: "Luxemburg",
            type: "multiple",
            category: "Nachbarländer"
        },
        {
            question: "Wo liegen die Niederlande auf der Karte?",
            correctAnswer: "Netherlands",
            type: "map",
            category: "Nachbarländer"
        }
    ],
    bayern: [
        {
            question: "Was ist die Regierungshauptstadt von Oberbayern?",
            answers: ["Ingolstadt", "Rosenheim", "München", "Landshut"],
            correctAnswer: "München",
            type: "multiple",
            category: "Bayern"
        },
        {
            question: "Wo liegt Oberbayern auf der Karte?",
            correctAnswer: "Oberbayern",
            type: "map",
            category: "Bayern"
        },
        {
            question: "Was ist die Regierungshauptstadt von Niederbayern?",
            answers: ["Passau", "Landshut", "Straubing", "Deggendorf"],
            correctAnswer: "Landshut",
            type: "multiple",
            category: "Bayern"
        },
        {
            question: "Wo liegt Schwaben auf der Karte?",
            correctAnswer: "Schwaben",
            type: "map",
            category: "Bayern"
        },
        {
            question: "Was ist die Regierungshauptstadt von Oberfranken?",
            answers: ["Bamberg", "Bayreuth", "Coburg", "Hof"],
            correctAnswer: "Bayreuth",
            type: "multiple",
            category: "Bayern"
        },
        {
            question: "Wo liegt Mittelfranken auf der Karte?",
            correctAnswer: "Mittelfranken",
            type: "map",
            category: "Bayern"
        },
        {
            question: "Was ist die Regierungshauptstadt von Unterfranken?",
            answers: ["Würzburg", "Schweinfurt", "Aschaffenburg", "Bad Kissingen"],
            correctAnswer: "Würzburg",
            type: "multiple",
            category: "Bayern"
        },
        {
            question: "Wo liegt die Oberpfalz auf der Karte?",
            correctAnswer: "Oberpfalz",
            type: "map",
            category: "Bayern"
        },
        {
            question: "Wie viele Regierungsbezirke hat Bayern?",
            answers: ["5", "7", "9", "11"],
            correctAnswer: "7",
            type: "multiple",
            category: "Bayern"
        },
        {
            question: "In welchem Regierungsbezirk liegt Nürnberg?",
            answers: ["Oberfranken", "Mittelfranken", "Unterfranken", "Oberpfalz"],
            correctAnswer: "Mittelfranken",
            type: "multiple",
            category: "Bayern"
        },
        {
            question: "Wo liegt Niederbayern auf der Karte?",
            correctAnswer: "Niederbayern",
            type: "map",
            category: "Bayern"
        },
        {
            question: "Was ist die Regierungshauptstadt der Oberpfalz?",
            answers: ["Amberg", "Weiden", "Regensburg", "Schwandorf"],
            correctAnswer: "Regensburg",
            type: "multiple",
            category: "Bayern"
        }
    ]
};
