document.addEventListener("DOMContentLoaded", function() {
    const fontIncreaseButton = document.getElementById("font-increase");
    const fontDecreaseButton = document.getElementById("font-decrease");
    fontIncreaseButton.addEventListener("click", () => adjustFontSize('increase'));
    fontDecreaseButton.addEventListener("click", () => adjustFontSize('decrease'));

    const zoomIncreaseButton = document.getElementById("zoom-increase");
    const zoomDecreaseButton = document.getElementById("zoom-decrease");
    zoomIncreaseButton.addEventListener("click", () => adjustZoom('increase'));
    zoomDecreaseButton.addEventListener("click", () => adjustZoom('decrease'));

    const highContrastButton = document.getElementById("contrast-high");
    const lowContrastButton = document.getElementById("contrast-low");
    const normalContrastButton = document.getElementById("contrast-normal");
    highContrastButton.addEventListener("click", () => adjustContrast('high'));
    lowContrastButton.addEventListener("click", () => adjustContrast('low'));
    normalContrastButton.addEventListener("click", () => adjustContrast('normal'));

    const accessibilityButton = document.getElementById("accessibilityButton");
    accessibilityButton.addEventListener("click", () => {
        const menu = document.getElementById("menuAccessibility");
        const feedback = document.getElementById("accessibilityFeedback");
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
            feedback.textContent = 'Menu de acessibilidade fechado.';
        } else {
            menu.style.display = 'block';
            feedback.textContent = 'Menu de acessibilidade aberto.';
        }
        announceStatus(feedback.textContent);
    });

    const closeButton = document.getElementById("close-menu");
    closeButton.addEventListener("click", closeMenu);

    function closeMenu() {
        const menu = document.getElementById("menuAccessibility");
        const feedback = document.getElementById("accessibilityFeedback");
        menu.style.display = 'none';
        feedback.textContent = 'Menu de acessibilidade fechado.';
        announceStatus(feedback.textContent);
    }
});

let fontSize = 100;  // 100% font size
let zoomLevel = 1;  // 1 represents 100% zoom level
let contrast = 'normal';  // default contrast

function adjustFontSize(action) {
    if (action === 'increase') {
        fontSize += 10;
    } else if (action === 'decrease') {
        fontSize -= 10;
    }
    document.body.style.fontSize = `${fontSize}%`;
    announceFontSize();
}

function announceFontSize() {
    const announcement = document.createElement('div');
    announcement.className = 'sr-only';
    announcement.setAttribute('role', 'alert');
    announcement.textContent = `Fonte ajustada para ${fontSize}%`;
    document.body.appendChild(announcement);
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

function adjustZoom(action) {
    if (action === 'increase') {
        zoomLevel += 0.1;
    } else if (action === 'decrease') {
        zoomLevel -= 0.1;
    }
    document.body.style.zoom = zoomLevel;
    announceZoom();
}

function announceZoom() {
    const announcement = document.createElement('div');
    announcement.className = 'sr-only';
    announcement.setAttribute('role', 'alert');
    announcement.textContent = `Zoom ajustado para ${zoomLevel * 100}%`;
    document.body.appendChild(announcement);
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

function adjustContrast(level) {
    if (level === 'high') {
        document.body.style.filter = 'contrast(150%)';
    } else if (level === 'low') {
        document.body.style.filter = 'contrast(50%)';
    } else {
        document.body.style.filter = 'contrast(100%)';
    }
    contrast = level;
    announceContrast();
}

function announceContrast() {
    const announcement = document.createElement('div');
    announcement.className = 'sr-only';
    announcement.setAttribute('role', 'alert');
    announcement.textContent = `Contraste ajustado para ${contrast}`;
    document.body.appendChild(announcement);
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

function announceStatus(status) {
    const announcement = document.createElement('div');
    announcement.className = 'sr-only';
    announcement.setAttribute('role', 'alert');
    announcement.textContent = status;
    document.body.appendChild(announcement);
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}
