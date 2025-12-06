// Map configuration
const MAP_CONFIG = {
    bundeslaender: {
        url: 'https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/2_bundeslaender/4_niedrig.geo.json',
        projection: {
            type: 'geoMercator',
            center: [10.4, 51.2],
            scale: 3500
        },
        nameProperty: 'name'
    },
    europa: {
        url: 'https://raw.githubusercontent.com/leakyMirror/map-of-europe/master/GeoJSON/europe.geojson',
        projection: {
            type: 'geoMercator',
            center: [15, 54],
            scale: 800
        },
        nameProperty: 'NAME'
    },
    nachbarlaender: {
        url: 'https://raw.githubusercontent.com/leakyMirror/map-of-europe/master/GeoJSON/europe.geojson',
        projection: {
            type: 'geoMercator',
            center: [10.4, 51.2],
            scale: 1200
        },
        nameProperty: 'NAME',
        filterCountries: ['Germany', 'Denmark', 'Poland', 'Czech Republic', 'Austria', 'Switzerland', 'France', 'Luxembourg', 'Belgium', 'Netherlands']
    },
    bayern: {
        url: 'https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/3_regierungsbezirke/3_mittel.geo.json',
        projection: {
            type: 'geoMercator',
            center: [11.5, 49.0],
            scale: 8000
        },
        nameProperty: 'NAME_2',
        filterRegions: ['Oberbayern', 'Niederbayern', 'Oberpfalz', 'Oberfranken', 'Mittelfranken', 'Unterfranken', 'Schwaben']
    }
};

// Map color palette
const MAP_COLORS = ['#FFE5B4', '#E0F2F7', '#F0E68C', '#DDA0DD', '#B0E0E6', 
                     '#FFB6C1', '#F5DEB3', '#D3D3D3', '#FFA07A', '#98FB98',
                     '#FFDAB9', '#E6E6FA', '#FFE4E1', '#F0FFF0', '#FFF5EE', '#F5F5DC'];

// Map dimensions
const MAP_DIMENSIONS = {
    width: 600,
    height: 750
};
