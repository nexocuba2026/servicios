document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Servicios Cienfuegos – script cargado');

    // Menú hamburguesa (responsive)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- LÓGICA PARA LA PÁGINA DE SERVICIO (servicio.html) ---
    const servicioMain = document.getElementById('servicio-main');
    if (servicioMain) {
        const urlParams = new URLSearchParams(window.location.search);
        const servicioId = urlParams.get('servicio');

        if (!servicioId || !servicesData[servicioId]) {
            servicioMain.innerHTML = `
                <div style="text-align:center; padding:4rem;">
                    <h2>Servicio no encontrado</h2>
                    <p>El servicio solicitado no existe. <a href="index.html">Volver al inicio</a></p>
                </div>`;
            return;
        }

        const servicio = servicesData[servicioId];
        document.title = servicio.nombre + ' - Servicios Cienfuegos';

        // Construir submenú desplegable
        const submenuDropdown = document.getElementById('submenu-dropdown');
        let submenuHTML = '';
        for (const [subId, sub] of Object.entries(servicio.subservicios)) {
            submenuHTML += `<a href="#${subId}">${sub.nombre}</a>`;
        }
        submenuDropdown.innerHTML = submenuHTML;

        // Construir contenido principal
        let mainHTML = `
            <div class="servicio-header">
                <h2><i class="fas ${servicio.icono || 'fa-concierge-bell'}"></i> ${servicio.nombre}</h2>
            </div>
        `;

        for (const [subId, sub] of Object.entries(servicio.subservicios)) {
            mainHTML += `
            <section id="${subId}" class="subservicio-section">
                <h3>${sub.nombre}</h3>
                <div class="empresas-grid">
            `;

            sub.empresas.forEach((empresa, index) => {
                const cardId = `card-${subId}-${index}`;
                mainHTML += `
                    <div class="empresa-card" id="${cardId}">
                        <div class="card-header">
                            <img src="${empresa.logo}" alt="Logo ${empresa.nombre}" class="card-logo" onerror="this.onerror=null;this.src='img/logos/default.png';" />
                            <h4>${empresa.nombre}</h4>
                        </div>
                        <div class="card-contact">
                            <div class="contact-item">
                                <i class="fas fa-phone"></i>
                                <span>${empresa.telefono}</span>
                                <a href="https://wa.me/${empresa.telefono.replace('+','')}" target="_blank" class="btn-whatsapp" onclick="event.stopPropagation();">
                                    <i class="fab fa-whatsapp"></i> WhatsApp
                                </a>
                            </div>
                            <div class="contact-item">
                                <i class="fas fa-envelope"></i>
                                <a href="mailto:${empresa.email}">${empresa.email}</a>
                            </div>
                            <div class="contact-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>${empresa.direccion}</span>
                                <a href="https://www.google.com/maps?q=${empresa.lat},${empresa.lng}" target="_blank" class="btn-mapa" onclick="event.stopPropagation();">
                                    <i class="fas fa-map"></i> Ver mapa
                                </a>
                            </div>
                        </div>
                        <div class="card-detalle">
                            <p><strong>Descripción:</strong> ${empresa.descripcion}</p>
                            <p><strong>Tiempo en el mercado:</strong> ${empresa.tiempo}</p>
                            <p><strong>Objetivos:</strong> ${empresa.objetivos}</p>
                            <p><strong>Eslogan:</strong> "${empresa.eslogan}"</p>
                            <p class="equipo"><strong>Equipo de trabajo:</strong> ${empresa.equipo}</p>
                        </div>
                    </div>
                `;
            });

            mainHTML += `</div></section>`;
        }

        servicioMain.innerHTML = mainHTML;

        // Evento click en tarjetas para expandir/contraer detalle
        document.querySelectorAll('.empresa-card').forEach(card => {
            card.addEventListener('click', function(e) {
                // Evita que clic en enlaces (WhatsApp, mail, mapa) expanda la tarjeta
                if (e.target.closest('a')) return;
                this.classList.toggle('expanded');
            });
        });
    }
});
