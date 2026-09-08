export const COMPANY = {
  name: "ACAL",
  slogan: "Tecnología que conecta y soluciona.",
  description:
    "ACAL es una empresa colombiana dedicada a brindar soluciones tecnológicas para personas y pequeñas empresas. Ofrecemos soporte técnico, asesoría tecnológica, desarrollo web y soluciones digitales.",
  email: "soporte.acal@gmail.com",
  phone: "3017877009",
  whatsapp: "573017877009",
  instagram: "acal.tecnologia",
  instagramUrl: "https://instagram.com/acal.tecnologia",
  facebook: "ACAL Tecnología",
  facebookUrl: "https://facebook.com/ACALTecnologia",
  whatsappUrl: "https://wa.me/573017877009",
  location: "Colombia",
  hours: "Lunes a sábado, 8:00 a.m. - 6:00 p.m. (hora Colombia)",
} as const;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hola ACAL, necesito una asesoría técnica.";

export function whatsappLink(message: string): string {
  return `${COMPANY.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export const NAVIGATION = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Garantía", href: "/#garantia" },
  { label: "Proceso", href: "/#proceso" },
  { label: "Empresas", href: "/empresas" },
] as const;

export const SERVICES = [
  {
    title: "Soporte Técnico",
    description:
      "Diagnóstico, reparación y mantenimiento de equipos. Remoto o presencial.",
    icon: "Monitor",
    whatsappMessage:
      "Hola ACAL, estoy interesado en el servicio de Soporte Técnico. ¿Podemos agendar una asesoría?",
  },
  {
    title: "Optimización de Equipos",
    description:
      "Limpieza, actualización de hardware y configuración para máximo rendimiento.",
    icon: "Zap",
    whatsappMessage:
      "Hola ACAL, estoy interesado en el servicio de Optimización de Equipos. ¿Podemos agendar una asesoría?",
  },
  {
    title: "Instalación de Software",
    description:
      "Sistemas operativos, programas empresariales y herramientas de productividad.",
    icon: "Download",
    whatsappMessage:
      "Hola ACAL, estoy interesado en el servicio de Instalación de Software. ¿Podemos agendar una asesoría?",
  },
  {
    title: "Asesoría Tecnológica",
    description:
      "Te guiamos a elegir el mejor equipo, software o infraestructura para tu necesidad.",
    icon: "Compass",
    whatsappMessage:
      "Hola ACAL, estoy interesado en el servicio de Asesoría Tecnológica. ¿Podemos agendar una asesoría?",
  },
  {
    title: "Desarrollo Web",
    description:
      "Landing pages y sitios corporativos modernos, rápidos y optimizados.",
    icon: "Code",
    whatsappMessage:
      "Hola ACAL, estoy interesado en el servicio de Desarrollo Web. ¿Podemos agendar una asesoría?",
  },
  {
    title: "Redes e Infraestructura",
    description:
      "Configuración de redes WiFi, seguridad y conectividad para hogar u oficina.",
    icon: "Network",
    whatsappMessage:
      "Hola ACAL, estoy interesado en el servicio de Redes e Infraestructura. ¿Podemos agendar una asesoría?",
  },
] as const;

export const CORE_SERVICES = [
  {
    title: "Soporte Técnico",
    description:
      "Reparación, mantenimiento y solución de fallas en tus equipos. Remoto o presencial cuando lo necesites.",
    icon: "Monitor",
    whatsappMessage:
      "Hola ACAL, quiero cotizar el servicio de Soporte Técnico.",
  },
  {
    title: "Instalación y Configuración",
    description:
      "Instalación de software, sistemas operativos y herramientas. Todo listo para que trabajes desde el día uno.",
    icon: "Settings",
    whatsappMessage:
      "Hola ACAL, quiero cotizar el servicio de Instalación y Configuración.",
  },
  {
    title: "Asesoría Tecnológica",
    description:
      "Te guío para elegir el equipo, software o plan adecuado. Sin tecnicismos y sin gastar de más.",
    icon: "Lightbulb",
    whatsappMessage:
      "Hola ACAL, quiero cotizar el servicio de Asesoría Tecnológica.",
  },
  {
    title: "Desarrollo Web",
    description:
      "Landing pages y sitios modernos, rápidos y optimizados para tu negocio.",
    icon: "Code",
    whatsappMessage:
      "Hola ACAL, quiero cotizar el servicio de Desarrollo Web.",
  },
] as const;

export const GUARANTEE = [
  {
    title: "Diagnóstico sin letra pequeña",
    description:
      "Sabes qué falla y cuánto cuesta antes de empezar. Cero costos ocultos.",
    icon: "ClipboardCheck",
  },
  {
    title: "Solución en tiempo récord",
    description:
      "Vamos directo al problema y dejamos todo funcionando lo más rápido posible.",
    icon: "Timer",
  },
  {
    title: "Te explico cada paso en humano",
    description:
      "Sin tecnicismos raros. Te hablo claro, desde el diagnóstico hasta el último detalle.",
    icon: "MessagesSquare",
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: "1",
    title: "Me contactas",
    description:
      "Escríbeme por WhatsApp o correo y cuéntame qué está pasando. Respuesta rápida en horario de atención.",
  },
  {
    number: "2",
    title: "Analizo tu caso sin costo",
    description:
      "Reviso tu situación, te explico qué ocurre y te doy un diagnóstico claro con presupuesto directo, sin compromiso.",
  },
  {
    number: "3",
    title: "Lo soluciono y te capacito",
    description:
      "Dejo todo funcionando y te explico en palabras sencillas cómo evitar que el problema vuelva.",
  },
] as const;

export const ABOUT = {
  name: "Andrés Camilo Arcila Leal",
  role: "Técnico en Sistemas / Estudiante de Ingeniería de Sistemas",
  bio: `Soy Andrés Camilo Arcila Leal, técnico en sistemas y estudiante de Ingeniería de Sistemas. Llevo más de 5 años ayudando a personas y pequeñas empresas a resolver problemas tecnológicos.

ACAL nació de una idea simple: la tecnología no debería ser un dolor de cabeza. Mi trabajo no es solo reparar equipos. Es entender lo que necesitas, explicártelo en palabras sencillas y dejarte mejor de lo que te encontré.

No soy una empresa grande con 50 empleados. Soy un profesional comprometido que responde tu mensaje, conoce tu caso y se asegura de que todo funcione. Esa es la diferencia.`,
  values: [
    { title: "Confianza", description: "Cada interacción construye una relación a largo plazo." },
    { title: "Transparencia", description: "Sin costos ocultos, sin letra pequeña." },
    { title: "Mejora continua", description: "Siempre aprendiendo para darte mejor servicio." },
    { title: "Innovación", description: "Aplicando tecnología moderna a problemas reales." },
  ],
};

export const PORTFOLIO = [
  {
    name: "Bekkaglam",
    type: "Desarrollo Web / Presencia Digital",
    description:
      "Diseñamos y construimos la presencia digital de Bekkaglam, una boutique de ropa femenina en Cartagena. Incluye sitio web con catálogo de productos, panel de administración e integración con WhatsApp.",
    result:
      "Sitio web funcional, optimizado y alineado con la identidad de marca.",
    tags: ["Desarrollo Web", "E-commerce", "Panel Admin"],
    url: "https://bekkaglam.com",
    image: "/images/portfolio/bekkaglam.svg",
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
