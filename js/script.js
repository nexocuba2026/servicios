document.addEventListener('DOMContentLoaded', function () {
    // Menú hamburguesa
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Expansión de tarjetas de empresas (en páginas de servicio)
    const cards = document.querySelectorAll('.empresa-card');
    cards.forEach(card => {
        card.addEventListener('click', function (e) {
            // Evita que clic en enlaces (WhatsApp, mapa, email) expanda
            if (e.target.closest('a')) return;
            this.classList.toggle('expanded');
        });
    });
});
