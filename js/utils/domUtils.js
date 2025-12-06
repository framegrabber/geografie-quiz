// DOM utility functions
function getCachedElements(selectors) {
    const elements = {};
    Object.entries(selectors).forEach(([category, categorySelectors]) => {
        elements[category] = {};
        Object.entries(categorySelectors).forEach(([name, selector]) => {
            const element = document.querySelectorAll(selector);
            elements[category][name] = element.length === 1 ? element[0] : element;
        });
    });
    return elements;
}

function showScreen(screen) {
    screen.classList.remove('hidden');
}

function hideScreen(screen) {
    screen.classList.add('hidden');
}

function hideAllScreens(screens) {
    Object.values(screens).forEach(screen => hideScreen(screen));
}

function disableAllButtons(container) {
    container.querySelectorAll('button').forEach(btn => btn.disabled = true);
}

function enableAllButtons(container) {
    container.querySelectorAll('button').forEach(btn => btn.disabled = false);
}

function clearContainer(container) {
    container.innerHTML = '';
}

function updateElementText(element, text) {
    if (element) {
        element.textContent = text;
    }
}

function updateElementContent(element, html) {
    if (element) {
        element.innerHTML = html;
    }
}
