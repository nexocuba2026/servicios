const servicesData = {
    construccion: {
        nombre: "Construcción",
        icono: "fa-hard-hat",
        subservicios: {
            albanileria: {
                nombre: "Albañilería",
                empresas: [
                    {
                        nombre: "Construcciones Pérez",
                        logo: "img/logos/default.png",
                        descripcion: "Empresa líder en albañilería con más de 15 años de experiencia en Cienfuegos. Realizamos obras civiles, remodelaciones y construcciones desde cero.",
                        tiempo: "15 años en el mercado",
                        objetivos: "Ofrecer soluciones de construcción seguras y duraderas.",
                        eslogan: "Construimos tus sueños",
                        equipo: "Contamos con 12 albañiles certificados y un arquitecto.",
                        telefono: "+5355551234",
                        email: "perez@email.cu",
                        direccion: "Ave 56 #1234, Cienfuegos",
                        lat: 22.146,
                        lng: -80.451
                    },
                    {
                        nombre: "Albañilería García",
                        logo: "img/logos/default.png",
                        descripcion: "Servicios de albañilería rápida y económica. Especialistas en reparaciones y ampliaciones.",
                        tiempo: "8 años en el mercado",
                        objetivos: "Brindar calidad al mejor precio.",
                        eslogan: "Tu hogar en buenas manos",
                        equipo: "Equipo de 6 personas capacitadas.",
                        telefono: "+5355555678",
                        email: "garcia@email.cu",
                        direccion: "Calle 37 #890, Cienfuegos",
                        lat: 22.150,
                        lng: -80.455
                    }
                ]
            },
            pintura: {
                nombre: "Pintura",
                empresas: [
                    {
                        nombre: "Pinturas Marín",
                        logo: "img/logos/default.png",
                        descripcion: "Pintura residencial e industrial. Trabajamos con pinturas de alta calidad.",
                        tiempo: "10 años",
                        objetivos: "Embellecer espacios con profesionalismo.",
                        eslogan: "Color que transforma",
                        equipo: "5 pintores profesionales.",
                        telefono: "+5355559012",
                        email: "marin@email.cu",
                        direccion: "Ave 62 #567, Cienfuegos",
                        lat: 22.148,
                        lng: -80.453
                    }
                ]
            },
            techado: {
                nombre: "Techado",
                empresas: [
                    {
                        nombre: "Techados Cienfuegos",
                        logo: "img/logos/default.png",
                        descripcion: "Instalación y reparación de techos de fibrocemento, tejas y planchas metálicas.",
                        tiempo: "12 años",
                        objetivos: "Proteger tu hogar con los mejores materiales.",
                        eslogan: "Tu techo, nuestra prioridad",
                        equipo: "8 especialistas en techado.",
                        telefono: "+5355553456",
                        email: "techados@email.cu",
                        direccion: "Calle 25 #432, Cienfuegos",
                        lat: 22.152,
                        lng: -80.448
                    }
                ]
            }
        }
    },
    energia: {
        nombre: "Energía Fotovoltaica",
        icono: "fa-solar-panel",
        subservicios: {
            paneles: {
                nombre: "Instalación de Paneles",
                empresas: [
                    {
                        nombre: "SolarCuba",
                        logo: "img/logos/default.png",
                        descripcion: "Instalación de sistemas fotovoltaicos para hogares y negocios. Ahorra energía y protege el medio ambiente.",
                        tiempo: "5 años",
                        objetivos: "Promover energía limpia en Cuba.",
                        eslogan: "Energía del futuro, hoy",
                        equipo: "Equipo de ingenieros eléctricos y técnicos certificados.",
                        telefono: "+5355557890",
                        email: "solar@email.cu",
                        direccion: "Ave 58 #111, Cienfuegos",
                        lat: 22.149,
                        lng: -80.452
                    }
                ]
            }
        }
    },
    transporte: {
        nombre: "Transportación",
        icono: "fa-truck",
        subservicios: {
            carga: {
                nombre: "Carga y Mudanzas",
                empresas: [
                    {
                        nombre: "Transportes Rápidos",
                        logo: "img/logos/default.png",
                        descripcion: "Servicio de carga y mudanzas dentro de Cienfuegos y provincias cercanas. Camiones amplios y seguros.",
                        tiempo: "20 años",
                        objetivos: "Trasladar tus bienes con rapidez y seguridad.",
                        eslogan: "Tu carga en buenas manos",
                        equipo: "10 conductores profesionales.",
                        telefono: "+5355554321",
                        email: "transporte@email.cu",
                        direccion: "Calle 100 #200, Cienfuegos",
                        lat: 22.145,
                        lng: -80.450
                    }
                ]
            }
        }
    },
    restaurante: {
        nombre: "Restaurant",
        icono: "fa-utensils",
        subservicios: {
            comida_criolla: {
                nombre: "Comida Criolla",
                empresas: [
                    {
                        nombre: "Sabor Cubano",
                        logo: "img/logos/default.png",
                        descripcion: "Restaurante especializado en comida criolla y mariscos frescos. Ambiente familiar.",
                        tiempo: "8 años",
                        objetivos: "Ofrecer la mejor gastronomía cubana.",
                        eslogan: "El verdadero sabor de Cuba",
                        equipo: "Chef con 15 años de experiencia y equipo de cocina.",
                        telefono: "+5355556543",
                        email: "sabor@email.cu",
                        direccion: "Paseo del Prado #123, Cienfuegos",
                        lat: 22.146,
                        lng: -80.455
                    }
                ]
            }
        }
    },
    hospedaje: {
        nombre: "Hospedaje",
        icono: "fa-hotel",
        subservicios: {
            casas_particulares: {
                nombre: "Casas Particulares",
                empresas: [
                    {
                        nombre: "Hostal La Perla",
                        logo: "img/logos/default.png",
                        descripcion: "Hostal con habitaciones climatizadas, baño privado y desayuno incluido. A 5 minutos del centro.",
                        tiempo: "6 años",
                        objetivos: "Brindar una estancia confortable a nuestros huéspedes.",
                        eslogan: "Tu casa en Cienfuegos",
                        equipo: "Familia anfitriona con gran hospitalidad.",
                        telefono: "+5355558765",
                        email: "hostal@email.cu",
                        direccion: "Calle 35 #456, Cienfuegos",
                        lat: 22.151,
                        lng: -80.449
                    }
                ]
            }
        }
    },
    gastronomia: {
        nombre: "Gastronomía (Cafeterías y Bares)",
        icono: "fa-coffee",
        subservicios: {
            cafeteria: {
                nombre: "Cafeterías",
                empresas: [
                    {
                        nombre: "Café del Parque",
                        logo: "img/logos/default.png",
                        descripcion: "Cafetería con gran variedad de cafés, tés y repostería. Ambiente acogedor.",
                        tiempo: "4 años",
                        objetivos: "Ser la cafetería de referencia en Cienfuegos.",
                        eslogan: "Despierta tus sentidos",
                        equipo: "Baristas certificados y pasteleros.",
                        telefono: "+5355552109",
                        email: "cafe@email.cu",
                        direccion: "Parque Martí, Cienfuegos",
                        lat: 22.146,
                        lng: -80.453
                    }
                ]
            }
        }
    },
    spa: {
        nombre: "Spa",
        icono: "fa-spa",
        subservicios: {
            masajes: {
                nombre: "Masajes y Bienestar",
                empresas: [
                    {
                        nombre: "Spa Relax",
                        logo: "img/logos/default.png",
                        descripcion: "Masajes relajantes, descontracturantes y tratamientos faciales. Ambiente zen.",
                        tiempo: "3 años",
                        objetivos: "Aliviar el estrés de nuestros clientes.",
                        eslogan: "Renueva tu energía",
                        equipo: "Terapeutas certificados.",
                        telefono: "+5355550987",
                        email: "spa@email.cu",
                        direccion: "Ave 54 #789, Cienfuegos",
                        lat: 22.148,
                        lng: -80.451
                    }
                ]
            }
        }
    },
    mecanica: {
        nombre: "Mecánica",
        icono: "fa-wrench",
        subservicios: {
            taller: {
                nombre: "Taller Automotriz",
                empresas: [
                    {
                        nombre: "Mecánica AutoFix",
                        logo: "img/logos/default.png",
                        descripcion: "Reparación de motores, frenos, suspensión y diagnóstico computarizado.",
                        tiempo: "18 años",
                        objetivos: "Mantener tu auto en perfecto estado.",
                        eslogan: "Tu auto, nuestra pasión",
                        equipo: "Mecánicos especializados y herramientas modernas.",
                        telefono: "+5355551111",
                        email: "autofix@email.cu",
                        direccion: "Calle 60 #333, Cienfuegos",
                        lat: 22.144,
                        lng: -80.454
                    }
                ]
            }
        }
    },
    salud: {
        nombre: "Salud",
        icono: "fa-heartbeat",
        subservicios: {
            consulta: {
                nombre: "Consulta Médica",
                empresas: [
                    {
                        nombre: "Clínica SaludTotal",
                        logo: "img/logos/default.png",
                        descripcion: "Consultas de medicina general, pediatría y ginecología. Atención personalizada.",
                        tiempo: "10 años",
                        objetivos: "Cuidar la salud de las familias cienfuegueras.",
                        eslogan: "Tu salud, nuestra prioridad",
                        equipo: "Médicos especialistas y enfermeras.",
                        telefono: "+5355552222",
                        email: "salud@email.cu",
                        direccion: "Ave 52 #101, Cienfuegos",
                        lat: 22.147,
                        lng: -80.452
                    }
                ]
            }
        }
    },
    barberia: {
        nombre: "Barbería",
        icono: "fa-cut",
        subservicios: {
            corte: {
                nombre: "Corte y Estilo",
                empresas: [
                    {
                        nombre: "Barbería Estilo",
                        logo: "img/logos/default.png",
                        descripcion: "Cortes modernos, afeitado clásico y tratamientos capilares.",
                        tiempo: "5 años",
                        objetivos: "Realzar la imagen de nuestros clientes.",
                        eslogan: "Estilo que te define",
                        equipo: "Barberos profesionales con formación internacional.",
                        telefono: "+5355553333",
                        email: "barberia@email.cu",
                        direccion: "Calle 33 #222, Cienfuegos",
                        lat: 22.150,
                        lng: -80.450
                    }
                ]
            }
        }
    },
    fontaneria: {
        nombre: "Fontanería",
        icono: "fa-faucet",
        subservicios: {
            instalacion: {
                nombre: "Instalación y Reparación",
                empresas: [
                    {
                        nombre: "Fontanería Soluciones",
                        logo: "img/logos/default.png",
                        descripcion: "Reparación de fugas, instalación de tuberías y griferías. Urgencias 24h.",
                        tiempo: "12 años",
                        objetivos: "Solucionar problemas de agua rápidamente.",
                        eslogan: "Agua que fluye sin problemas",
                        equipo: "Fontaneros certificados.",
                        telefono: "+5355554444",
                        email: "fontaneria@email.cu",
                        direccion: "Calle 45 #678, Cienfuegos",
                        lat: 22.149,
                        lng: -80.453
                    }
                ]
            }
        }
    },
    electricidad: {
        nombre: "Electricidad",
        icono: "fa-bolt",
        subservicios: {
            instalacion: {
                nombre: "Instalación Eléctrica",
                empresas: [
                    {
                        nombre: "ElectroCienfuegos",
                        logo: "img/logos/default.png",
                        descripcion: "Instalaciones eléctricas residenciales e industriales. Certificados por la UNE.",
                        tiempo: "15 años",
                        objetivos: "Garantizar instalaciones seguras y eficientes.",
                        eslogan: "Energía segura para tu hogar",
                        equipo: "Electricistas matriculados.",
                        telefono: "+5355555555",
                        email: "electro@email.cu",
                        direccion: "Ave 60 #999, Cienfuegos",
                        lat: 22.145,
                        lng: -80.452
                    }
                ]
            }
        }
    },
    plomeria: {
        nombre: "Plomería",
        icono: "fa-toilet",
        subservicios: {
            desagues: {
                nombre: "Desagües y Alcantarillado",
                empresas: [
                    {
                        nombre: "Plomería Total",
                        logo: "img/logos/default.png",
                        descripcion: "Destapes, reparación de sanitarios y redes de alcantarillado.",
                        tiempo: "9 años",
                        objetivos: "Mantener tus desagües libres de problemas.",
                        eslogan: "Plomería de confianza",
                        equipo: "Plomeros con equipo especializado.",
                        telefono: "+5355556666",
                        email: "plomeria@email.cu",
                        direccion: "Calle 50 #111, Cienfuegos",
                        lat: 22.148,
                        lng: -80.451
                    }
                ]
            }
        }
    },
    tecnologico: {
        nombre: "Tecnológico",
        icono: "fa-laptop",
        subservicios: {
            reparacion: {
                nombre: "Reparación de Equipos",
                empresas: [
                    {
                        nombre: "TechSoluciones",
                        logo: "img/logos/default.png",
                        descripcion: "Reparación de computadoras, tablets y celulares. Instalación de software y redes.",
                        tiempo: "7 años",
                        objetivos: "Resolver tus problemas tecnológicos rápidamente.",
                        eslogan: "Tecnología que funciona",
                        equipo: "Técnicos certificados en hardware y software.",
                        telefono: "+5355557777",
                        email: "tech@email.cu",
                        direccion: "Calle 37 #555, Cienfuegos",
                        lat: 22.150,
                        lng: -80.449
                    }
                ]
            }
        }
    },
    limpieza: {
        nombre: "Limpieza",
        icono: "fa-broom",
        subservicios: {
            hogar: {
                nombre: "Limpieza del Hogar",
                empresas: [
                    {
                        nombre: "CleanHouse",
                        logo: "img/logos/default.png",
                        descripcion: "Servicio de limpieza profunda para hogares y oficinas. Productos ecológicos.",
                        tiempo: "4 años",
                        objetivos: "Dejar tus espacios impecables.",
                        eslogan: "Brillo que se nota",
                        equipo: "Personal capacitado y de confianza.",
                        telefono: "+5355558888",
                        email: "clean@email.cu",
                        direccion: "Ave 62 #123, Cienfuegos",
                        lat: 22.147,
                        lng: -80.454
                    }
                ]
            }
        }
    },
    jardineria: {
        nombre: "Jardinería",
        icono: "fa-seedling",
        subservicios: {
            mantenimiento: {
                nombre: "Mantenimiento de Jardines",
                empresas: [
                    {
                        nombre: "Jardines del Sur",
                        logo: "img/logos/default.png",
                        descripcion: "Diseño y mantenimiento de jardines, poda de árboles y sistemas de riego.",
                        tiempo: "11 años",
                        objetivos: "Crear espacios verdes armoniosos.",
                        eslogan: "Naturaleza que inspira",
                        equipo: "Jardineros y paisajistas.",
                        telefono: "+5355559999",
                        email: "jardin@email.cu",
                        direccion: "Calle 60 #777, Cienfuegos",
                        lat: 22.146,
                        lng: -80.450
                    }
                ]
            }
        }
    },
    eventos: {
        nombre: "Eventos",
        icono: "fa-glass-cheers",
        subservicios: {
            organizacion: {
                nombre: "Organización de Eventos",
                empresas: [
                    {
                        nombre: "Eventos Mágicos",
                        logo: "img/logos/default.png",
                        descripcion: "Planificación de bodas, cumpleaños y eventos corporativos. Decoración y catering.",
                        tiempo: "6 años",
                        objetivos: "Hacer de tu evento un momento inolvidable.",
                        eslogan: "Celebra con nosotros",
                        equipo: "Organizadores, decoradores y chefs.",
                        telefono: "+5355551010",
                        email: "eventos@email.cu",
                        direccion: "Paseo del Prado #200, Cienfuegos",
                        lat: 22.145,
                        lng: -80.455
                    }
                ]
            }
        }
    }
};
