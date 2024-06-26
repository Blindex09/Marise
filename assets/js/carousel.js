document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel .slides");
  const slides = Array.from(carousel.children);
  const stopButton = document.querySelector(".carousel-stop");
  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");
  const startButton = document.querySelector(".carousel-start");
  const status = document.getElementById("carousel-status");
  let index = 0;
  let interval;
  const descriptionDuration = 8000; // 8 segundos para a descrição
  const pauseDuration = 3000; // 3 segundos de pausa

  function startCarousel() {
    interval = setInterval(showNextSlide, descriptionDuration + pauseDuration);
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
      slide.classList.toggle("active", i === index);
    });
    updateStatus();
  }

  function hideAllSlides() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    status.textContent = "Carrossel parado";
  }

  function updateStatus() {
    const currentSlide = slides[index];
    const description = currentSlide.querySelector("img").alt;
    status.textContent = `Slide ${index + 1} de ${
      slides.length
    }: ${description}`;
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
  [stopButton, prevButton, nextButton, startButton].forEach((button) => {
    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        button.click();
      }
    });
  });

  updateCarousel(); // Atualiza o carrossel imediatamente na carga inicial
});
