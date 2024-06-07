document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel .slides");
    const slides = Array.from(carousel.children);
    const stopButton = document.querySelector(".carousel-stop");
    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");
    const startButton = document.querySelector(".carousel-start");
    const status = document.getElementById("carousel-status");
    let index = 0;
    let interval;

    function startCarousel() {
        interval = setInterval(showNextSlide, 15000); // Muda de imagem a cada 15 segundos
        announceStaus(status.textContent)
    }

    function stopCarousel() {
        clearInterval(interval);
        hideAllSlides();
    }

    function showPreviousSlide() {
        index = (index - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    function showNextSlide() {
        index = (index + 1) % slides.length;
        updateCarousel();
    }

    function updateCarousel() {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        updateStatus();
    }

    function hideAllSlides() {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        status.textContent = "Carrossel parado";
        announceStaus(status.textContent)
    }

    function updateStatus() {
        const currentSlide = slides[index];
        const descriptionId = currentSlide.querySelector("img").getAttribute("aria-describedby");
        const description = document.getElementById(descriptionId).textContent;
        status.textContent = `Slide ${index + 1}: ${description}`;
        announceStaus(status.textContent)
    }

    stopButton.addEventListener("click", stopCarousel);
    startButton.addEventListener("click", startCarousel);
    prevButton.addEventListener("click", () => {
        stopCarousel();
        showPreviousSlide();
    });
    nextButton.addEventListener("click", () => {
        stopCarousel();
        showNextSlide();
    });

    // Acessibilidade: permitir que os botões sejam operados com o teclado
    [stopButton, prevButton, nextButton].forEach(button => {
        button.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                button.click();
            }
        });
    });

    updateCarousel(); // Atualiza o carrossel imediatamente na carga inicial
    //startCarousel();






    // Adicionando event listeners para os botões de ajuste de fonte
    const fontIncreaseButton = document.getElementById("font-increase");
    const fontDecreaseButton = document.getElementById("font-decrease");

    fontIncreaseButton.addEventListener("click", () => adjustFontSize('increase'));
    fontDecreaseButton.addEventListener("click", () => adjustFontSize('decrease'));
});

let fontSize = 6.25;  // 1 represents 100% font size
let zoomLevel = 1;  // 1 represents 100% zoom level
let contrast = 'normal';  // default contrast


function adjustFontSize(action) {
    if (action === 'increase') {
        fontSize += 0.1;
    } else if (action === 'decrease') {
        fontSize -= 0.1;
    }
    document.styleSheets[0].cssRules[0].style.setProperty('font-size', `${fontSize}%`);

    announceFontSize();
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

function announceFontSize() {
    const announcement = document.createElement('div');
    announcement.className = 'sr-only';
    announcement.setAttribute('role', 'alert');
    announcement.textContent = `Fonte ajustada para ${Math.round(fontSize * 100/6.25)}%`;
    document.body.appendChild(announcement);
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
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

//verifica se está focado no carrossel
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function announceStaus(status) {
    const announcement = document.createElement('div');
    announcement.className = 'sr-only';
    announcement.setAttribute('role', 'alert');
    announcement.textContent = status;
    document.body.appendChild(announcement);
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
    console.log(status)
}

document.getElementById("accessibilityButton").onclick = function() {
    var menu = document.getElementById("menuAccessibility");
    var feedback = document.getElementById("accessibilityFeedback");
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        feedback.textContent = 'Menu de acessibilidade fechado.';
        console.log(feedback.textContent)
        setTimeout(() => feedback.textContent = '', 500); // Clear feedback after half a second
    } else {
        menu.style.display = 'block';
        feedback.textContent = 'Menu de acessibilidade aberto.';
        console.log(feedback.textContent)
        setTimeout(() => feedback.textContent = '', 500); // Clear feedback after half a second
    }
};

function closeMenu() {
    var menu = document.getElementById("menuAccessibility");
    var feedback = document.getElementById("accessibilityFeedback");
    menu.style.display = 'none';
    feedback.textContent = 'Menu de acessibilidade fechado.';
    console.log(feedback.textContent)
    setTimeout(() => feedback.textContent = '', 500); // Clear feedback after half a second
}
