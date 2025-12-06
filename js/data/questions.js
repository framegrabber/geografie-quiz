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
    europa_flaggen: [
        // Flag to Country - alle 20 Länder
        {
            question: "Welche Flagge gehört zu welchem Land?",
            flag: "flags/Deutschland.svg",
            answers: ["Deutschland", "Belgien", "Schweden", "Polen"],
            correctAnswer: "Deutschland",
            type: "flag-to-country",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu welchem Land?",
            flag: "flags/Frankreich.svg",
            answers: ["Frankreich", "Italien", "Niederlande", "Österreich"],
            correctAnswer: "Frankreich",
            type: "flag-to-country",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu welchem Land?",
            flag: "flags/Schweden.svg",
            answers: ["Schweden", "Finnland", "Norwegen", "Dänemark"],
            correctAnswer: "Schweden",
            type: "flag-to-country",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu welchem Land?",
            flag: "flags/Italien.svg",
            answers: ["Italien", "Spanien", "Griechenland", "Portugal"],
            correctAnswer: "Italien",
            type: "flag-to-country",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu welchem Land?",
            flag: "flags/Spanien.svg",
            answers: ["Spanien", "Portugal", "Belgien", "Frankreich"],
            correctAnswer: "Spanien",
            type: "flag-to-country",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu welchem Land?",
            flag: "flags/Polen.svg",
            answers: ["Polen", "Ungarn", "Deutschland", "Niederlande"],
            correctAnswer: "Polen",
            type: "flag-to-country",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu welchem Land?",
            flag: "flags/Ungarn.svg",
            answers: ["Ungarn", "Rumänien", "Österreich", "Tschechien"],
            correctAnswer: "Ungarn",
            type: "flag-to-country",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu welchem Land?",
            flag: "flags/Griechenland.svg",
            answers: ["Griechenland", "Bulgarien", "Portugal", "Kroatien"],
            correctAnswer: "Griechenland",
            type: "flag-to-country",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu welchem Land?",
            flag: "flags/Österreich.svg",
            answers: ["Österreich", "Ungarn", "Tschechien", "Slowakei"],
            correctAnswer: "Österreich",
            type: "flag-to-country",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu welchem Land?",
            flag: "flags/Dänemark.svg",
            answers: ["Dänemark", "Schweden", "Norwegen", "Finnland"],
            correctAnswer: "Dänemark",
            type: "flag-to-country",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu welchem Land?",
            flag: "flags/Schweiz.svg",
            answers: ["Schweiz", "Österreich", "Belgien", "Luxemburg"],
            correctAnswer: "Schweiz",
            type: "flag-to-country",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu welchem Land?",
            flag: "flags/Großbritannien.svg",
            answers: ["Großbritannien", "Irland", "Australien", "Neuseeland"],
            correctAnswer: "Großbritannien",
            type: "flag-to-country",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu welchem Land?",
            flag: "flags/Belgien.svg",
            answers: ["Belgien", "Niederlande", "Luxemburg", "Dänemark"],
            correctAnswer: "Belgien",
            type: "flag-to-country",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu welchem Land?",
            flag: "flags/Russland.svg",
            answers: ["Russland", "Serbien", "Bulgarien", "Ukraine"],
            correctAnswer: "Russland",
            type: "flag-to-country",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu welchem Land?",
            flag: "flags/Niederlande.svg",
            answers: ["Niederlande", "Belgien", "Dänemark", "Schweden"],
            correctAnswer: "Niederlande",
            type: "flag-to-country",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu welchem Land?",
            flag: "flags/Portugal.svg",
            answers: ["Portugal", "Spanien", "Griechenland", "Italien"],
            correctAnswer: "Portugal",
            type: "flag-to-country",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu welchem Land?",
            flag: "flags/Irland.svg",
            answers: ["Irland", "Großbritannien", "Dänemark", "Polen"],
            correctAnswer: "Irland",
            type: "flag-to-country",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu welchem Land?",
            flag: "flags/Norwegen.svg",
            answers: ["Norwegen", "Schweden", "Finnland", "Dänemark"],
            correctAnswer: "Norwegen",
            type: "flag-to-country",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu welchem Land?",
            flag: "flags/Finnland.svg",
            answers: ["Finnland", "Norwegen", "Schweden", "Estland"],
            correctAnswer: "Finnland",
            type: "flag-to-country",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu welchem Land?",
            flag: "flags/Türkei.svg",
            answers: ["Türkei", "Griechenland", "Bulgarien", "Georgien"],
            correctAnswer: "Türkei",
            type: "flag-to-country",
            category: "Europa-Flaggen"
        },
        // Country to Flag - alle 20 Länder
        {
            question: "Welche Flagge gehört zu Deutschland?",
            country: "Deutschland",
            flagOptions: ["flags/Deutschland.svg", "flags/Belgien.svg", "flags/Niederlande.svg", "flags/Luxemburg.svg"],
            correctFlag: "flags/Deutschland.svg",
            type: "country-to-flag",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu Frankreich?",
            country: "Frankreich",
            flagOptions: ["flags/Frankreich.svg", "flags/Italien.svg", "flags/Belgien.svg", "flags/Niederlande.svg"],
            correctFlag: "flags/Frankreich.svg",
            type: "country-to-flag",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu Spanien?",
            country: "Spanien",
            flagOptions: ["flags/Portugal.svg", "flags/Spanien.svg", "flags/Belgien.svg", "flags/Frankreich.svg"],
            correctFlag: "flags/Spanien.svg",
            type: "country-to-flag",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu Italien?",
            country: "Italien",
            flagOptions: ["flags/Italien.svg", "flags/Irland.svg", "flags/Ungarn.svg", "flags/Griechenland.svg"],
            correctFlag: "flags/Italien.svg",
            type: "country-to-flag",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu Polen?",
            country: "Polen",
            flagOptions: ["flags/Polen.svg", "flags/Ungarn.svg", "flags/Österreich.svg", "flags/Tschechien.svg"],
            correctFlag: "flags/Polen.svg",
            type: "country-to-flag",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu Ungarn?",
            country: "Ungarn",
            flagOptions: ["flags/Ungarn.svg", "flags/Polen.svg", "flags/Österreich.svg", "flags/Rumänien.svg"],
            correctFlag: "flags/Ungarn.svg",
            type: "country-to-flag",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu Griechenland?",
            country: "Griechenland",
            flagOptions: ["flags/Griechenland.svg", "flags/Bulgarien.svg", "flags/Serbien.svg", "flags/Portugal.svg"],
            correctFlag: "flags/Griechenland.svg",
            type: "country-to-flag",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu Österreich?",
            country: "Österreich",
            flagOptions: ["flags/Österreich.svg", "flags/Ungarn.svg", "flags/Deutschland.svg", "flags/Tschechien.svg"],
            correctFlag: "flags/Österreich.svg",
            type: "country-to-flag",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu Dänemark?",
            country: "Dänemark",
            flagOptions: ["flags/Dänemark.svg", "flags/Schweden.svg", "flags/Norwegen.svg", "flags/Finnland.svg"],
            correctFlag: "flags/Dänemark.svg",
            type: "country-to-flag",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu Schweiz?",
            country: "Schweiz",
            flagOptions: ["flags/Schweiz.svg", "flags/Österreich.svg", "flags/Belgien.svg", "flags/Deutschland.svg"],
            correctFlag: "flags/Schweiz.svg",
            type: "country-to-flag",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu Großbritannien?",
            country: "Großbritannien",
            flagOptions: ["flags/Großbritannien.svg", "flags/Irland.svg", "flags/Australien.svg", "flags/Kanada.svg"],
            correctFlag: "flags/Großbritannien.svg",
            type: "country-to-flag",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu Belgien?",
            country: "Belgien",
            flagOptions: ["flags/Belgien.svg", "flags/Niederlande.svg", "flags/Luxemburg.svg", "flags/Frankreich.svg"],
            correctFlag: "flags/Belgien.svg",
            type: "country-to-flag",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu Russland?",
            country: "Russland",
            flagOptions: ["flags/Russland.svg", "flags/Weißrussland.svg", "flags/Ukraine.svg", "flags/Serbien.svg"],
            correctFlag: "flags/Russland.svg",
            type: "country-to-flag",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu Niederlande?",
            country: "Niederlande",
            flagOptions: ["flags/Niederlande.svg", "flags/Belgien.svg", "flags/Luxemburg.svg", "flags/Frankreich.svg"],
            correctFlag: "flags/Niederlande.svg",
            type: "country-to-flag",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu Portugal?",
            country: "Portugal",
            flagOptions: ["flags/Portugal.svg", "flags/Spanien.svg", "flags/Griechenland.svg", "flags/Belgien.svg"],
            correctFlag: "flags/Portugal.svg",
            type: "country-to-flag",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu Irland?",
            country: "Irland",
            flagOptions: ["flags/Irland.svg", "flags/Großbritannien.svg", "flags/Indien.svg", "flags/Italien.svg"],
            correctFlag: "flags/Irland.svg",
            type: "country-to-flag",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu Norwegen?",
            country: "Norwegen",
            flagOptions: ["flags/Norwegen.svg", "flags/Schweden.svg", "flags/Dänemark.svg", "flags/Island.svg"],
            correctFlag: "flags/Norwegen.svg",
            type: "country-to-flag",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu Schweden?",
            country: "Schweden",
            flagOptions: ["flags/Schweden.svg", "flags/Norwegen.svg", "flags/Finnland.svg", "flags/Dänemark.svg"],
            correctFlag: "flags/Schweden.svg",
            type: "country-to-flag",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu Finnland?",
            country: "Finnland",
            flagOptions: ["flags/Finnland.svg", "flags/Norwegen.svg", "flags/Schweden.svg", "flags/Estland.svg"],
            correctFlag: "flags/Finnland.svg",
            type: "country-to-flag",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu Türkei?",
            country: "Türkei",
            flagOptions: ["flags/Türkei.svg", "flags/Griechenland.svg", "flags/Bulgarien.svg", "flags/Georgien.svg"],
            correctFlag: "flags/Türkei.svg",
            type: "country-to-flag",
            category: "Europa-Flaggen"
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
