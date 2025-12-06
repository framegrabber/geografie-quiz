// Map Renderer - handles D3 map rendering for map-type questions
class MapRenderer {
    constructor(mapContainer, answerCallback) {
        this.mapContainer = mapContainer;
        this.answerCallback = answerCallback;
    }

    render(correctAnswer, category) {
        let mapCategory = this.getCategoryMapType(category);
        const config = MAP_CONFIG[mapCategory];

        const { width, height } = MAP_DIMENSIONS;

        const svg = d3.select("#mapContainer")
            .append("svg")
            .attr("viewBox", `0 0 ${width} ${height}`)
            .attr("class", "w-full border-2 border-gray-300 rounded-lg bg-white");

        const loading = svg.append("g")
            .attr("transform", `translate(${width/2}, ${height/2})`);
        
        loading.append("text")
            .attr("text-anchor", "middle")
            .attr("fill", "#666")
            .text("Karte wird geladen...");

        const projection = d3[config.projection.type]()
            .center(config.projection.center)
            .scale(config.projection.scale)
            .translate([width / 2, height / 2]);

        const path = d3.geoPath().projection(projection);

        d3.json(config.url)
            .then(data => {
                loading.remove();
                this.renderFeatures(svg, data, path, config, correctAnswer, mapCategory);
            })
            .catch(error => {
                console.error('Fehler beim Laden der Karte:', error);
                loading.remove();
                svg.append("text")
                    .attr("x", width/2)
                    .attr("y", height/2)
                    .attr("text-anchor", "middle")
                    .attr("fill", "red")
                    .text("Fehler beim Laden der Karte");
            });
    }

    getCategoryMapType(category) {
        const categoryMap = {
            'Bayern': 'bayern',
            'Europa': 'europa',
            'Nachbarländer': 'nachbarlaender'
        };
        return categoryMap[category] || 'bundeslaender';
    }

    renderFeatures(svg, data, path, config, correctAnswer, mapCategory) {
        let features = data.features;

        // Filter Bavaria regions if needed
        if (mapCategory === 'bayern' && config.filterRegions) {
            features = features.filter(f => {
                const regionName = f.properties[config.nameProperty];
                const stateName = f.properties.NAME_1;
                return stateName === 'Bayern' && config.filterRegions.some(region => 
                    regionName && regionName.includes(region)
                );
            });

            // Map region names
            features.forEach(f => {
                const originalName = f.properties[config.nameProperty];
                for (let region of config.filterRegions) {
                    if (originalName.toLowerCase().includes(region.toLowerCase())) {
                        f.properties.displayName = region;
                        break;
                    }
                }
            });
        }

        // Filter for neighbor countries
        if (config.filterCountries) {
            features = features.filter(f => 
                config.filterCountries.includes(f.properties[config.nameProperty])
            );
        }

        // Render regions
        svg.selectAll('.region')
            .data(features)
            .enter()
            .append('path')
            .attr('class', 'region')
            .attr('d', path)
            .attr('fill', (d, i) => MAP_COLORS[i % MAP_COLORS.length])
            .attr('data-name', d => d.properties.displayName || d.properties[config.nameProperty])
            .on('click', (event, d) => {
                const regionName = d.properties.displayName || d.properties[config.nameProperty];
                this.handleRegionClick(regionName, event.currentTarget, correctAnswer);
            });
    }

    handleRegionClick(selectedRegion, element, correctAnswer) {
        const allRegions = document.querySelectorAll('.region');
        allRegions.forEach(region => region.style.pointerEvents = 'none');

        const isCorrect = selectedRegion === correctAnswer;

        if (isCorrect) {
            d3.select(element).classed('correct', true);
        } else {
            d3.select(element).classed('incorrect', true);

            // Show correct answer
            d3.selectAll('.region')
                .filter(function() {
                    return d3.select(this).attr('data-name') === correctAnswer;
                })
                .classed('correct', true);
        }

        if (this.answerCallback) {
            this.answerCallback(isCorrect);
        }
    }
}
