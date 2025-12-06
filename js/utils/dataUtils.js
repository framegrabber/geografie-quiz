// Cookie management functions
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Data utility functions
function parseJSON(jsonString, fallback = null) {
    try {
        return JSON.parse(jsonString);
    } catch (e) {
        console.error('JSON parse error:', e);
        return fallback;
    }
}

function stringifyJSON(obj) {
    try {
        return JSON.stringify(obj);
    } catch (e) {
        console.error('JSON stringify error:', e);
        return null;
    }
}

// Math utility functions
function calculateAverage(total, count) {
    return count > 0 ? (total / count).toFixed(1) : '0.0';
}

function calculatePercentage(value, total) {
    return total > 0 ? ((value / total) * 100).toFixed(0) : '0';
}
