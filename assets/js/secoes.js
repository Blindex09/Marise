document.addEventListener("DOMContentLoaded", function () {
  const hash = window.location.hash;
  if (hash) {
    // Tentativa de encontrar a seção ou o cabeçalho diretamente
    const targetElement = document.getElementById(hash.substring(1));

    // Seleciona todas as seções para manipulação de visibilidade
    const sections = document.querySelectorAll("main > section");

    if (targetElement) {
      // Oculta todas as seções
      sections.forEach((section) => {
        section.setAttribute("aria-hidden", "true");
      });

      // Se o elemento alvo é uma seção, opera normalmente
      if (targetElement.tagName.toLowerCase() === "section") {
        targetElement.setAttribute("aria-hidden", "false");
        const targetHeader = targetElement.querySelector("h2");
        if (targetHeader) {
          focusHeader(targetHeader);
        }
      } else if (targetElement.tagName.toLowerCase() === "h2") {
        // Se o elemento alvo é um cabeçalho, encontra a seção pai para mostrar
        const parentSection = targetElement.closest("section");
        if (parentSection) {
          parentSection.setAttribute("aria-hidden", "false");
        }
        focusHeader(targetElement);
      }
    }
  }
});

function focusHeader(header) {
  // Aplica o foco com atraso para garantir a renderização
  setTimeout(() => {
    header.setAttribute("tabindex", "-1");
    header.focus();
  }, 100); // 100 milissegundos de atraso
}
