// Quiz Questions Data - Echte Daten aus Wikipedia
const quizData = {
    bundeslaender: [
        // Bayern
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
            question: "München ist die Hauptstadt von welchem Bundesland?",
            answers: ["Hessen", "Baden-Württemberg", "Bayern", "Sachsen"],
            correctAnswer: "Bayern",
            type: "multiple",
            category: "Bundesländer"
        },

        // Baden-Württemberg
        {
            question: "Was ist die Hauptstadt von Baden-Württemberg?",
            answers: ["Karlsruhe", "Stuttgart", "Mannheim", "Freiburg"],
            correctAnswer: "Stuttgart",
            type: "multiple",
            category: "Bundesländer"
        },
        {
            question: "Wo ist Baden-Württemberg auf der Karte?",
            correctAnswer: "Baden-Württemberg",
            type: "map",
            category: "Bundesländer"
        },
        {
            question: "Stuttgart ist die Hauptstadt von welchem Bundesland?",
            answers: ["Bayern", "Hessen", "Baden-Württemberg", "Nordrhein-Westfalen"],
            correctAnswer: "Baden-Württemberg",
            type: "multiple",
            category: "Bundesländer"
        },

        // Nordrhein-Westfalen
        {
            question: "Was ist die Hauptstadt von Nordrhein-Westfalen?",
            answers: ["Köln", "Düsseldorf", "Dortmund", "Essen"],
            correctAnswer: "Düsseldorf",
            type: "multiple",
            category: "Bundesländer"
        },
        {
            question: "Wo ist Nordrhein-Westfalen auf der Karte?",
            correctAnswer: "Nordrhein-Westfalen",
            type: "map",
            category: "Bundesländer"
        },
        {
            question: "Düsseldorf ist die Hauptstadt von welchem Bundesland?",
            answers: ["Nordrhein-Westfalen", "Niedersachsen", "Hessen", "Rheinland-Pfalz"],
            correctAnswer: "Nordrhein-Westfalen",
            type: "multiple",
            category: "Bundesländer"
        },

        // Hessen
        {
            question: "Was ist die Hauptstadt von Hessen?",
            answers: ["Frankfurt am Main", "Wiesbaden", "Kassel", "Darmstadt"],
            correctAnswer: "Wiesbaden",
            type: "multiple",
            category: "Bundesländer"
        },
        {
            question: "Wo ist Hessen auf der Karte?",
            correctAnswer: "Hessen",
            type: "map",
            category: "Bundesländer"
        },
        {
            question: "Wiesbaden ist die Hauptstadt von welchem Bundesland?",
            answers: ["Rheinland-Pfalz", "Hessen", "Nordrhein-Westfalen", "Thüringen"],
            correctAnswer: "Hessen",
            type: "multiple",
            category: "Bundesländer"
        },

        // Rheinland-Pfalz
        {
            question: "Was ist die Hauptstadt von Rheinland-Pfalz?",
            answers: ["Trier", "Mainz", "Ludwigshafen", "Worms"],
            correctAnswer: "Mainz",
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
            question: "Mainz ist die Hauptstadt von welchem Bundesland?",
            answers: ["Hessen", "Rheinland-Pfalz", "Baden-Württemberg", "Bayern"],
            correctAnswer: "Rheinland-Pfalz",
            type: "multiple",
            category: "Bundesländer"
        },

        // Sachsen
        {
            question: "Was ist die Hauptstadt von Sachsen?",
            answers: ["Leipzig", "Dresden", "Chemnitz", "Zwickau"],
            correctAnswer: "Dresden",
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
            question: "Dresden ist die Hauptstadt von welchem Bundesland?",
            answers: ["Sachsen", "Sachsen-Anhalt", "Thüringen", "Brandenburg"],
            correctAnswer: "Sachsen",
            type: "multiple",
            category: "Bundesländer"
        },

        // Niedersachsen
        {
            question: "Was ist die Hauptstadt von Niedersachsen?",
            answers: ["Hannover", "Braunschweig", "Oldenburg", "Osnabrück"],
            correctAnswer: "Hannover",
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
            question: "Hannover ist die Hauptstadt von welchem Bundesland?",
            answers: ["Schleswig-Holstein", "Niedersachsen", "Mecklenburg-Vorpommern", "Bremen"],
            correctAnswer: "Niedersachsen",
            type: "multiple",
            category: "Bundesländer"
        },

        // Schleswig-Holstein
        {
            question: "Was ist die Hauptstadt von Schleswig-Holstein?",
            answers: ["Kiel", "Lübeck", "Flensburg", "Neumünster"],
            correctAnswer: "Kiel",
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
            question: "Kiel ist die Hauptstadt von welchem Bundesland?",
            answers: ["Niedersachsen", "Mecklenburg-Vorpommern", "Schleswig-Holstein", "Hamburg"],
            correctAnswer: "Schleswig-Holstein",
            type: "multiple",
            category: "Bundesländer"
        },

        // Thüringen
        {
            question: "Was ist die Hauptstadt von Thüringen?",
            answers: ["Jena", "Erfurt", "Weimar", "Gera"],
            correctAnswer: "Erfurt",
            type: "multiple",
            category: "Bundesländer"
        },
        {
            question: "Wo ist Thüringen auf der Karte?",
            correctAnswer: "Thüringen",
            type: "map",
            category: "Bundesländer"
        },
        {
            question: "Erfurt ist die Hauptstadt von welchem Bundesland?",
            answers: ["Sachsen", "Thüringen", "Sachsen-Anhalt", "Hessen"],
            correctAnswer: "Thüringen",
            type: "multiple",
            category: "Bundesländer"
        },

        // Sachsen-Anhalt
        {
            question: "Was ist die Hauptstadt von Sachsen-Anhalt?",
            answers: ["Halle", "Magdeburg", "Dessau", "Wittenberg"],
            correctAnswer: "Magdeburg",
            type: "multiple",
            category: "Bundesländer"
        },
        {
            question: "Wo ist Sachsen-Anhalt auf der Karte?",
            correctAnswer: "Sachsen-Anhalt",
            type: "map",
            category: "Bundesländer"
        },
        {
            question: "Magdeburg ist die Hauptstadt von welchem Bundesland?",
            answers: ["Sachsen", "Sachsen-Anhalt", "Brandenburg", "Niedersachsen"],
            correctAnswer: "Sachsen-Anhalt",
            type: "multiple",
            category: "Bundesländer"
        },

        // Mecklenburg-Vorpommern
        {
            question: "Was ist die Hauptstadt von Mecklenburg-Vorpommern?",
            answers: ["Rostock", "Schwerin", "Greifswald", "Wismar"],
            correctAnswer: "Schwerin",
            type: "multiple",
            category: "Bundesländer"
        },
        {
            question: "Wo ist Mecklenburg-Vorpommern auf der Karte?",
            correctAnswer: "Mecklenburg-Vorpommern",
            type: "map",
            category: "Bundesländer"
        },
        {
            question: "Schwerin ist die Hauptstadt von welchem Bundesland?",
            answers: ["Schleswig-Holstein", "Mecklenburg-Vorpommern", "Brandenburg", "Niedersachsen"],
            correctAnswer: "Mecklenburg-Vorpommern",
            type: "multiple",
            category: "Bundesländer"
        },

        // Brandenburg
        {
            question: "Was ist die Hauptstadt von Brandenburg?",
            answers: ["Cottbus", "Potsdam", "Frankfurt an der Oder", "Bernau"],
            correctAnswer: "Potsdam",
            type: "multiple",
            category: "Bundesländer"
        },
        {
            question: "Wo ist Brandenburg auf der Karte?",
            correctAnswer: "Brandenburg",
            type: "map",
            category: "Bundesländer"
        },
        {
            question: "Potsdam ist die Hauptstadt von welchem Bundesland?",
            answers: ["Sachsen-Anhalt", "Brandenburg", "Berlin", "Sachsen"],
            correctAnswer: "Brandenburg",
            type: "multiple",
            category: "Bundesländer"
        },

        // Saarland
        {
            question: "Was ist die Hauptstadt von Saarland?",
            answers: ["Neunkirchen", "Saarbrücken", "Merzig", "Saarlouis"],
            correctAnswer: "Saarbrücken",
            type: "multiple",
            category: "Bundesländer"
        },
        {
            question: "Wo ist Saarland auf der Karte?",
            correctAnswer: "Saarland",
            type: "map",
            category: "Bundesländer"
        },
        {
            question: "Saarbrücken ist die Hauptstadt von welchem Bundesland?",
            answers: ["Rheinland-Pfalz", "Saarland", "Baden-Württemberg", "Hessen"],
            correctAnswer: "Saarland",
            type: "multiple",
            category: "Bundesländer"
        },

        // Berlin
        {
            question: "Wo ist Berlin auf der Karte?",
            correctAnswer: "Berlin",
            type: "map",
            category: "Bundesländer"
        },
        {
            question: "Berlin ist ein Stadtstaat. Wie heißen die anderen Stadtstaaten?",
            answers: ["Köln und München", "Hamburg und Bremen", "Düsseldorf und Frankfurt", "Stuttgart und Hannover"],
            correctAnswer: "Hamburg und Bremen",
            type: "multiple",
            category: "Bundesländer"
        },

        // Hamburg
        {
            question: "Wo ist Hamburg auf der Karte?",
            correctAnswer: "Hamburg",
            type: "map",
            category: "Bundesländer"
        },

        // Bremen
        {
            question: "Wo ist Bremen auf der Karte?",
            correctAnswer: "Bremen",
            type: "map",
            category: "Bundesländer"
        },

        // Allgemeine Fragen
        {
            question: "Welche der folgenden Bundesländer sind Stadtstaaten?",
            answers: ["Saarland", "Hamburg", "Bremen", "Berlin"],
            correctAnswer: ["Hamburg", "Bremen", "Berlin"],
            type: "multiple",
            category: "Bundesländer"
        },
        {
            question: "Wie viele Bundesländer hat Deutschland?",
            answers: ["14", "15", "16", "17"],
            correctAnswer: "16",
            type: "multiple",
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
            question: "Welches Bundesland ist bevölkerungsreichste?",
            answers: ["Bayern", "Nordrhein-Westfalen", "Baden-Württemberg", "Niedersachsen"],
            correctAnswer: "Nordrhein-Westfalen",
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
            answers: ["Ungarn", "Österreich", "Polen", "Schweiz"],
            correctAnswer: "Ungarn",
            type: "flag-to-country",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu welchem Land?",
            flag: "flags/Griechenland.svg",
            answers: ["Griechenland", "Portugal", "Spanien", "Türkei"],
            correctAnswer: "Griechenland",
            type: "flag-to-country",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu welchem Land?",
            flag: "flags/Österreich.svg",
            answers: ["Österreich", "Ungarn", "Schweiz", "Italien"],
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
            answers: ["Großbritannien", "Irland", "Schweden", "Dänemark"],
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
            answers: ["Russland", "Polen", "Frankreich", "Ungarn"],
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
            answers: ["Irland", "Großbritannien", "Belgien", "Spanien"],
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
            answers: ["Finnland", "Norwegen", "Schweden", "Dänemark"],
            correctAnswer: "Finnland",
            type: "flag-to-country",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu welchem Land?",
            flag: "flags/Türkei.svg",
            answers: ["Türkei", "Griechenland", "Russland", "Frankreich"],
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
            flagOptions: ["flags/Ungarn.svg", "flags/Polen.svg", "flags/Österreich.svg", "flags/Schweiz.svg"],
            correctFlag: "flags/Ungarn.svg",
            type: "country-to-flag",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu Griechenland?",
            country: "Griechenland",
            flagOptions: ["flags/Griechenland.svg", "flags/Spanien.svg", "flags/Türkei.svg", "flags/Portugal.svg"],
            correctFlag: "flags/Griechenland.svg",
            type: "country-to-flag",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu Österreich?",
            country: "Österreich",
            flagOptions: ["flags/Österreich.svg", "flags/Ungarn.svg", "flags/Deutschland.svg", "flags/Schweiz.svg"],
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
            flagOptions: ["flags/Großbritannien.svg", "flags/Irland.svg", "flags/Frankreich.svg", "flags/Schweden.svg"],
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
            flagOptions: ["flags/Russland.svg", "flags/Frankreich.svg", "flags/Schweden.svg", "flags/Polen.svg"],
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
            flagOptions: ["flags/Irland.svg", "flags/Großbritannien.svg", "flags/Spanien.svg", "flags/Italien.svg"],
            correctFlag: "flags/Irland.svg",
            type: "country-to-flag",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu Norwegen?",
            country: "Norwegen",
            flagOptions: ["flags/Norwegen.svg", "flags/Schweden.svg", "flags/Dänemark.svg", "flags/Finnland.svg"],
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
            flagOptions: ["flags/Finnland.svg", "flags/Norwegen.svg", "flags/Schweden.svg", "flags/Dänemark.svg"],
            correctFlag: "flags/Finnland.svg",
            type: "country-to-flag",
            category: "Europa-Flaggen"
        },
        {
            question: "Welche Flagge gehört zu Türkei?",
            country: "Türkei",
            flagOptions: ["flags/Türkei.svg", "flags/Griechenland.svg", "flags/Russland.svg", "flags/Frankreich.svg"],
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
    ],
    bayerischefluesze: [
        {
            question: "Ergänze den Merkspruch der bayerischen Flüsse mit Drag & Drop:",
            text: "_, _, _, _, fließen _ zur Donau hin. _, _, _ und _ kommen ihr von _ entgegen.",
            blanks: [
                { position: 0, answer: "Iller" },
                { position: 1, answer: "Lech" },
                { position: 2, answer: "Isar" },
                { position: 3, answer: "Inn" },
                { position: 4, answer: "rechts" },
                { position: 5, answer: "Wörnitz" },
                { position: 6, answer: "Altmühl" },
                { position: 7, answer: "Naab" },
                { position: 8, answer: "Regen" },
                { position: 9, answer: "links" }
            ],
            words: ["Iller", "Lech", "Isar", "Inn", "rechts", "Wörnitz", "Altmühl", "Naab", "Regen", "links"],
            type: "fillblanks",
            category: "Bayerische Flüsse"
        }
    ]
};
