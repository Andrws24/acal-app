export const COMPANY = {
  name: "ACAL",
  slogan: "Tecnología que conecta y soluciona.",
  description:
    "ACAL es una empresa colombiana dedicada a brindar soluciones tecnológicas para personas y pequeñas empresas. Ofrecemos soporte técnico, asesoría tecnológica, desarrollo web y soluciones digitales.",
  email: "soporte.acal@gmail.com",
  phone: "3023461106",
  whatsapp: "573023461106",
  instagram: "acal.tecnologia",
  instagramUrl: "https://instagram.com/acal.tecnologia",
  whatsappUrl: "https://wa.me/573023461106",
} as const;

export const NAVIGATION = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Portafolio", href: "/portfolio" },
  { label: "Contacto", href: "/contacto" },
] as const;

export const SERVICES = [
  {
    title: "Soporte Técnico",
    description:
      "Asistencia especializada para resolver cualquier problema técnico en tus equipos y dispositivos, de forma remota o presencial.",
    features: [
      "Diagnóstico y reparación",
      "Soporte remoto inmediato",
      "Mantenimiento preventivo",
    ],
    icon: "Wrench",
  },
  {
    title: "Asesoría Tecnológica",
    description:
      "Te guiamos en la elección de las mejores herramientas tecnológicas para tu negocio o proyecto personal.",
    features: [
      "Selección de equipos",
      "Optimización de recursos",
      "Planificación tecnológica",
    ],
    icon: "Lightbulb",
  },
  {
    title: "Desarrollo Web",
    description:
      "Creamos sitios web modernos, rápidos y optimizados para convertir visitantes en clientes.",
    features: [
      "Landing pages",
      "Sitios corporativos",
      "Aplicaciones web",
    ],
    icon: "Globe",
  },
  {
    title: "Optimización de Equipos",
    description:
      "Mejoramos el rendimiento de tus equipos para que trabajen más rápido y sin interrupciones.",
    features: [
      "Limpieza y mantenimiento",
      "Actualización de hardware",
      "Optimización de software",
    ],
    icon: "Zap",
  },
  {
    title: "Instalación de Software",
    description:
      "Instalación y configuración profesional de programas y sistemas operativos.",
    features: [
      "Sistemas operativos",
      "Software empresarial",
      "Herramientas de productividad",
    ],
    icon: "Download",
  },
  {
    title: "Redes e Infraestructura",
    description:
      "Diseñamos e implementamos redes confiables y seguras para tu hogar u oficina.",
    features: [
      "Redes WiFi optimizadas",
      "Configuración de servidores",
      "Seguridad perimetral",
    ],
    icon: "Network",
  },
  {
    title: "Respaldo de Información",
    description:
      "Protegemos tus datos con estrategias de backup automatizadas y seguras.",
    features: [
      "Backups automáticos",
      "Almacenamiento en la nube",
      "Recuperación de datos",
    ],
    icon: "Shield",
  },
  {
    title: "Automatización",
    description:
      "Optimiza tus procesos con soluciones de automatización inteligente para tu negocio.",
    features: [
      "Próximamente",
      "Automatización de tareas",
      "Integración de sistemas",
    ],
    icon: "Bot",
    comingSoon: true,
  },
] as const;

export const BLOG_CATEGORIES = [
  "Windows",
  "Linux",
  "Redes",
  "Servidores",
  "Ciberseguridad",
  "IA",
  "Tutoriales",
] as const;

export const TESTIMONIALS = [
  {
    name: "Carlos Mendoza",
    role: "Emprendedor",
    content:
      "ACAL transformó la forma en que manejo mi negocio. Su asesoría me ayudó a elegir las herramientas adecuadas y el soporte técnico es excepcional.",
    rating: 5,
  },
  {
    name: "María García",
    role: "Dueña de PYME",
    content:
      "El desarrollo web que hicieron superó mis expectativas. Profesionales, puntuales y con un servicio al cliente inigualable.",
    rating: 5,
  },
  {
    name: "Andrés Ruiz",
    role: "Freelancer",
    content:
      "Necesitaba optimizar mi equipo de trabajo y ACAL me dio soluciones prácticas y económicas. Altamente recomendados.",
    rating: 5,
  },
] as const;
