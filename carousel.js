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
        announceStatus(status.textContent);
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
        announceStatus(status.textContent);
    }

    function updateStatus() {
        const currentSlide = slides[index];
        const descriptionId = currentSlide.querySelector("img").getAttribute("aria-describedby");
        const description = document.getElementById(descriptionId).textContent;
        status.textContent = `Slide ${index + 1}: ${description}`;
        announceStatus(status.textContent);
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
    [stopButton, prevButton, nextButton, startButton].forEach(button => {
        button.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                button.click();
            }
        });
    });

    updateCarousel(); // Atualiza o carrossel imediatamente na carga inicial

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
});
