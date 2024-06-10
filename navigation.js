document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('main section');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const targetHeader = targetSection.querySelector('h2');

            // Oculta todas as seções
            sections.forEach(section => {
                section.setAttribute('aria-hidden', 'true');
            });

            // Mostra a seção alvo
            targetSection.setAttribute('aria-hidden', 'false');

            // Define o foco no cabeçalho da seção alvo
            targetHeader.setAttribute('tabindex', '-1');
            targetHeader.focus();
        });
    });
});
