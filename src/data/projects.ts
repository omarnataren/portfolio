export interface ProjectSection {
    type: 'text' | 'list' | 'cards' | 'impact';
    title: string;
    number: string;
    colorClass: string; // e.g., "text-blue-400"
    content?: string[]; // Paragraphs
    listItems?: { title?: string; description: string }[];
    cards?: {
        title: string;
        description: string;
        icon: string;
        iconColorClass: string;
        hoverBorderColorClass: string;
        bgColorClass: string;
    }[];
    impactContent?: {
        quote: string;
        description: string;
        borderColorClass: string;
        bgColorClass: string; 
    };
}

export interface Project {
    id: string;
    title: string;
    subtitle: string;
    role: string;
    timeline: string;
    tags: string[];
    repoLink?: string;
    otherLink?: {
        href: string;
        label: string;
    };
    images: string[];
    sections: ProjectSection[];
}

export const projects: Project[] = [
    {
        id: "ciscoPKTBuilder",
        title: "Cisco Net Config",
        subtitle: "Automatización de redes con una interfaz web intuitiva inspirada en el ecosistema Cisco.",
        role: "Lead Architect & Full Stack Dev",
        timeline: "2024",
        tags: ["Python", "Flask", "Web UI (HTML/JS)", "Cisco CLI", "Automation"],
        repoLink: "https://github.com/omarnataren/Cisco-Pkt-net-config",
        otherLink: {
            href: "https://ciscopkt-config.onrender.com",
            label: "Live Demo"
        },
        images: [
            "/images/projects/ciscoPKT/Cisco_img1.png",
            "/images/projects/ciscoPKT/Cisco_img2.png",
            "/images/projects/ciscoPKT/Cisco_img3.png"
        ],
        sections: [
            {
                type: 'text',
                number: "01.",
                title: "El Cuello de Botella",
                colorClass: "text-blue-400",
                content: [
                    "En las redes y telecomunicaciones, la configuración manual es el enemigo de la eficiencia. Durante nuestra formación académica, nos enfrentamos a ejercicios brutales: escenarios con docenas de routers y switches que debían configurarse comando por comando.",
                    "Estos ejercicios tomaban más de 4 horas. El problema no era la falta de conocimiento técnico, sino la velocidad física de tecleo y la propensión a errores de sintaxis en la consola. Identifiqué la necesidad de una herramienta que abstrajera esta complejidad."
                ]
            },
            {
                type: 'text',
                number: "02.",
                title: "Automatización con UX Profesional",
                colorClass: "text-blue-400",
                content: [
                    "En lugar de crear un simple script de consola, desarrollé una aplicación web completa. Diseñé una interfaz gráfica (UI) inspirada en los dashboards profesionales de Cisco, utilizando <strong>HTML, CSS y JavaScript</strong> servidos a través de <strong>Flask</strong>.",
                    "Esta interfaz permite a los usuarios seleccionar visualmente sus dispositivos, asignar direcciones IP y protocolos mediante formularios validados, eliminando los errores de sintaxis. El sistema transforma estos inputs visuales en configuraciones CLI perfectas o archivos <code>.pkt</code> listos para usar, reduciendo el tiempo de trabajo de horas a minutos."
                ]
            },
            {
                type: 'cards',
                number: "03.",
                title: "Arquitectura Modular",
                colorClass: "text-blue-400",
                cards: [
                    {
                        title: "Python & Flask Core",
                        description: "El backend actúa como el cerebro lógico. Recibe los datos estructurados del frontend, aplica reglas de negocio de redes (cálculo de subredes, validación de ACLs) y orquesta la generación de archivos.",
                        icon: "fab fa-python",
                        iconColorClass: "text-blue-400",
                        hoverBorderColorClass: "hover:border-blue-500/30",
                        bgColorClass: "bg-blue-500/10"
                    },
                    {
                        title: "Interfaz Web Reactiva",
                        description: "El frontend no es solo estético; guía al ingeniero a través del flujo de configuración, previniendo conflictos de IP antes de que ocurran y proporcionando una experiencia visual similar a configurar hardware real de Cisco, pero simplificada.",
                        icon: "fas fa-desktop",
                        iconColorClass: "text-green-400",
                        hoverBorderColorClass: "hover:border-green-500/30",
                        bgColorClass: "bg-green-500/10"
                    }
                ]
            },
            {
                type: 'impact',
                number: "04.",
                title: "El Impacto",
                colorClass: "text-blue-400",
                impactContent: {
                    quote: "\"Logramos reducir el tiempo de resolución de ejercicios de 4 horas o más a solo 30 minutos.\"",
                    description: "El proyecto evolucionó de una herramienta personal a una solución colaborativa, demostrando que una buena interfaz de usuario puede potenciar drásticamente la productividad en tareas de infraestructura.",
                    borderColorClass: "border-blue-500",
                    bgColorClass: "bg-blue-900/20"
                }
            }
        ]
    },
    {
        id: "legado",
        title: "Legado",
        subtitle: "Conectando viajeros con la raíz cultural.",
        role: "Mobile Developer (Flutter) @ Teteocán Technologies",
        timeline: "2024 - Presente",
        tags: ["Flutter", "Firebase", "Google Maps API", "Clean Architecture"],
        otherLink: {
            href: "https://teteocan.github.io/Legado_LandingPage/",
            label: "Landing Page"
        },
        images: [
            "/images/projects/Legado/Legado_img1.png",
            "/images/projects/Legado/Legado_img2.png",
            "/images/projects/Legado/Legado_img3.png",
            "/images/projects/Legado/Legado_img4.png"
        ],
        sections: [
            {
                type: 'text',
                number: "01.",
                title: "La Visión",
                colorClass: "text-red-400",
                content: [
                    "El turismo moderno a menudo roza la superficie. En <strong>Teteocán Technologies</strong>, creamos <em>Legado</em> no solo como una app, sino como un puente digital para conectar a viajeros que buscan autenticidad con anfitriones locales. El objetivo era crear una economía colaborativa segura y centrada en la cultura."
                ]
            },
            {
                type: 'list',
                number: "02.",
                title: "Ecosistema de 3 Roles",
                colorClass: "text-red-400",
                content: [
                    "Para garantizar la calidad y la seguridad de la plataforma, diseñé una lógica de negocio que orquesta tres perfiles de usuario distintos, cada uno con permisos y flujos específicos:"
                ],
                listItems: [
                    {
                        title: "1. Anfitrión",
                        description: "Creadores locales que publican experiencias. Tienen acceso a un panel para gestionar sus ofertas y recibir pagos."
                    },
                    {
                        title: "2. Cliente",
                        description: "Viajeros que exploran el mapa, chatean con anfitriones y realizan reservas seguras."
                    },
                    {
                        title: "3. Moderador",
                        description: "Un rol administrativo crítico que valida la autenticidad y seguridad de las experiencias antes de que se publiquen en el feed global."
                    }
                ]
            },
            {
                type: 'cards',
                number: "03.",
                title: "Arquitectura & Monetización",
                colorClass: "text-red-400",
                cards: [
                    {
                        title: "Pagos Seguros con Stripe",
                        description: "Integración completa de la pasarela de pagos Stripe. Implementé el flujo de cobro seguro, gestión de intenciones de pago y confirmación de reservas en tiempo real, cerrando el ciclo comercial dentro de la app sin depender de efectivo.",
                        icon: "fab fa-stripe",
                        iconColorClass: "text-indigo-400",
                        hoverBorderColorClass: "hover:border-indigo-500/30",
                        bgColorClass: "bg-indigo-500/10"
                    },
                    {
                        title: "Clean Architecture",
                        description: "Implementé una separación estricta de capas (Domain, Data, Presentation) en Flutter. Esto permite que la lógica compleja de los roles y pagos sea independiente de la UI, facilitando el mantenimiento y la escalabilidad.",
                        icon: "fas fa-layer-group",
                        iconColorClass: "text-red-400",
                        hoverBorderColorClass: "hover:border-red-500/30",
                        bgColorClass: "bg-red-500/10"
                    }
                ]
            }
        ]
    },
    {
        id: "optimizadorRutas",
        title: "Optimizador Logístico",
        subtitle: "Arquitectura Híbrida JavaFX + Web para resolver el problema de la última milla.",
        role: "Full Stack Developer (Java Ecosystem)",
        timeline: "2024",
        tags: ["JavaFX", "OpenStreetMap", "Firebase", "Algorithms", "Hybrid UI"],
        repoLink: "https://github.com/omarnataren/OptimizadorRutas",
        images: [
            "/images/projects/OptimizadorRutas/Opt_img1.png",
            "/images/projects/OptimizadorRutas/Opt_img2.png",
            "/images/projects/OptimizadorRutas/Opt_img3.png",
            "/images/projects/OptimizadorRutas/Opt_img4.png"
        ],
        sections: [
            {
                type: 'text',
                number: "01.",
                title: "El Desafío Logístico",
                colorClass: "text-green-400",
                content: [
                    "La gestión de envíos en pequeñas y medianas empresas suele ser caótica. Asignar paquetes a repartidores y definir rutas manualmente no solo es lento, sino ineficiente. El reto era crear un sistema centralizado que permitiera gestionar flota (CRUD de repartidores) y carga (paquetes), pero que fuera más allá de una simple base de datos: necesitaba inteligencia espacial."
                ]
            },
            {
                type: 'text',
                number: "02.",
                title: "El Puente JavaFX ↔ Web",
                colorClass: "text-green-400",
                content: [
                    "Aquí radica la innovación técnica del proyecto. Java es excelente para lógica de negocio robusta en escritorio, pero las librerías de mapas nativas son limitadas. Decidí implementar una <strong>arquitectura híbrida</strong>.",
                    "Utilicé <strong>JavaFX WebView</strong> como un contenedor para ejecutar una interfaz moderna construida con HTML, CSS y JavaScript. Esto me permitió integrar la API de <strong>OpenStreetMap</strong> de forma nativa en la UI. Creé un puente de comunicación bidireccional: Java gestiona los datos pesados y Firebase, mientras inyecta coordenadas en el motor JS para renderizar las rutas en tiempo real."
                ]
            },
            {
                type: 'cards',
                number: "03.",
                title: "Lógica de Enrutamiento",
                colorClass: "text-green-400",
                cards: [
                    {
                        title: "Cálculo de Ruta Óptima",
                        description: "El sistema no solo dibuja líneas. Al seleccionar un repartidor y un set de paquetes, el algoritmo consulta la API de OpenStreetMap para calcular la matriz de distancias y sugerir la ruta más corta (Shortest Path), optimizando tiempos de entrega y combustible.",
                        icon: "fas fa-route",
                        iconColorClass: "text-green-400",
                        hoverBorderColorClass: "hover:border-green-500/30",
                        bgColorClass: "bg-green-500/10"
                    },
                    {
                        title: "Firebase Real-time Sync",
                        description: "La persistencia de datos se delegó a Firebase. Esto permite que la gestión del CRUD (altas, bajas y edición de repartidores/paquetes) sea instantánea y esté sincronizada, permitiendo escalar a múltiples despachadores operando simultáneamente.",
                        icon: "fas fa-fire",
                        iconColorClass: "text-orange-400",
                        hoverBorderColorClass: "hover:border-orange-500/30",
                        bgColorClass: "bg-orange-500/10"
                    }
                ]
            }
        ]
    },
    {
        id: "miTiendita",
        title: "Mi Tiendita",
        subtitle: "Sistema de Punto de Venta Enterprise con Arquitectura de Microservicios.",
        role: "Full Stack Developer (Angular/NestJS)",
        timeline: "2024",
        tags: ["Angular", "NestJS", "Supabase", "PostgreSQL", "JWT Auth"],
        repoLink: "https://github.com/omarnataren/mi_tiendita",
        images: [
            "/images/projects/miTiendita/MiTiendita_img1.png",
            "/images/projects/miTiendita/MiTiendita_img2.png",
            "/images/projects/miTiendita/MiTiendita_img3.png",
            "/images/projects/miTiendita/MiTiendita_img4.png",
            "/images/projects/miTiendita/MiTiendita_img5.png"
        ],
        sections: [
            {
                type: 'text',
                number: "01.",
                title: "Más que un CRUD",
                colorClass: "text-purple-400",
                content: [
                    "Muchas tiendas locales operan con cuadernos o Excel, limitando su crecimiento. Mi objetivo era crear un sistema <strong>Punto de Venta (POS)</strong> que rivalizara con el software de cadenas como OXXO, pero accesible.",
                    "No se trataba solo de registrar ventas, sino de construir una infraestructura robusta. Implementé una arquitectura desacoplada utilizando <strong>Angular</strong> para una interfaz reactiva y rápida, y <strong>NestJS</strong> para un backend escalable y tipado, garantizando que el sistema pudiera manejar inventarios complejos y múltiples transacciones simultáneas."
                ]
            },
            {
                type: 'list',
                number: "02.",
                title: "Seguridad Granular (RBAC)",
                colorClass: "text-purple-400",
                content: [
                    "En un entorno retail, la seguridad es crítica. Diseñé un sistema de autenticación con <strong>JWT (JSON Web Tokens)</strong> y un estricto Control de Acceso Basado en Roles (RBAC)."
                ],
                listItems: [
                    {
                        title: "Vendedor",
                        description: "Solo puede escanear productos y generar ventas. Interfaz simplificada para velocidad."
                    },
                    {
                        title: "Encargado de Paquetería",
                        description: "Acceso exclusivo al módulo de inventarios y recepción de mercancía."
                    },
                    {
                        title: "Admin (Encargado)",
                        description: "Visión total del dashboard, métricas de ventas y gestión de usuarios."
                    }
                ]
            },
            {
                type: 'cards',
                number: "03.",
                title: "Simulación de Hardware",
                colorClass: "text-purple-400",
                cards: [
                    {
                        title: "Generación de Tickets",
                        description: "El sistema completa el ciclo de venta generando un ticket digital formateado profesionalmente. La interfaz está optimizada para entrada rápida de datos, pensada para conectarse plug-and-play con escáneres de códigos de barras e impresoras térmicas.",
                        icon: "fas fa-receipt",
                        iconColorClass: "text-purple-400",
                        hoverBorderColorClass: "hover:border-purple-500/30",
                        bgColorClass: "bg-purple-500/10"
                    },
                    {
                        title: "Integridad de Datos (PostgreSQL)",
                        description: "Usando Supabase (PostgreSQL), aseguré la integridad referencial de los datos. A diferencia de soluciones NoSQL rápidas, aquí cada transacción es ACID, garantizando que el inventario siempre cuadre con las ventas reportadas, vital para la contabilidad real.",
                        icon: "fas fa-database",
                        iconColorClass: "text-blue-400",
                        hoverBorderColorClass: "hover:border-blue-500/30",
                        bgColorClass: "bg-blue-500/10"
                    }
                ]
            }
        ]
    }
];
