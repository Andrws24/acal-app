export interface BusinessPlan {
  id: "remoto" | "hibrido" | "integral";
  name: string;
  tagline: string;
  priceLabel: string;
  message: string;
  features: string[];
  note?: string;
  badge?: string;
  featured?: boolean;
}

export const DIAGNOSIS_MESSAGE =
  "Hola ACAL, quiero agendar un diagnóstico gratuito para mi empresa.";

export const BUSINESS_PLANS: BusinessPlan[] = [
  {
    id: "remoto",
    name: "Plan Remoto",
    tagline: "Atención 100% remota para equipos estables.",
    priceLabel: "Desde $350.000/mes*",
    message: "Hola ACAL, me interesa el Plan Remoto para mi empresa.",
    features: [
      "Hasta 10 equipos",
      "2 horas de soporte remoto al mes",
      "Respuesta hábil en menos de 4 horas",
      "Soporte por WhatsApp y correo",
      "Horas extra se cotizan aparte",
    ],
  },
  {
    id: "hibrido",
    name: "Plan Híbrido",
    tagline: "Remoto + visitas para equipos que crecen.",
    priceLabel: "Valor según equipos y ciudad",
    message: "Hola ACAL, me interesa el Plan Híbrido para mi empresa.",
    badge: "Más elegido",
    featured: true,
    features: [
      "Hasta 15 equipos",
      "4 horas de soporte remoto al mes",
      "2 visitas mensuales en zona urbana",
      "Respuesta hábil en menos de 2 horas",
      "Soporte por WhatsApp y correo",
    ],
    note: "Desplazamiento incluido solo en zona urbana.",
  },
  {
    id: "integral",
    name: "Plan Integral",
    tagline: "Cobertura total, sin topes de horas ni visitas.",
    priceLabel: "A medida según tu operación",
    message: "Hola ACAL, me interesa el Plan Integral para mi empresa.",
    features: [
      "Sin límite de equipos",
      "Soporte remoto sin límite de horas",
      "Visitas ilimitadas",
      "Inventario y control de equipos",
      "Asesoría tecnológica incluida",
      "Respuesta hábil en menos de 1 hora",
    ],
    note: "Visitas fuera de Bogotá y Medellín con recargo logístico.",
  },
];

export const BUSINESS_BENEFITS = [
  {
    icon: "ShieldCheck",
    title: "Sin letra pequeña",
    description:
      "Límites, horas y precios claros desde el día uno. Lo que ves es lo que pagas.",
  },
  {
    icon: "Timer",
    title: "Respuesta en menos de 2 horas",
    description:
      "SLA por escrito y un técnico asignado que ya conoce tu empresa.",
  },
  {
    icon: "UsersRound",
    title: "Un solo contacto para todo",
    description:
      "Una persona a cargo de tu caso. Sin filas, sin transferencias.",
  },
] as const;

export const COMPARISON_COLUMNS = [
  { key: "remoto", label: "Plan Remoto" },
  { key: "hibrido", label: "Plan Híbrido" },
  { key: "integral", label: "Plan Integral" },
] as const;

export const COMPARISON_ROWS = [
  { label: "Soporte remoto", remoto: "2 h/mes", hibrido: "4 h/mes", integral: "Ilimitado" },
  { label: "Visitas presenciales", remoto: "No incluye", hibrido: "2 al mes", integral: "Ilimitadas" },
  { label: "Respuesta hábil", remoto: "< 4 horas", hibrido: "< 2 horas", integral: "< 1 hora" },
  { label: "Backups y seguridad", remoto: "No", hibrido: "Básico", integral: "Incluido" },
  { label: "Redes y conectividad", remoto: "No", hibrido: "Extra", integral: "Incluido" },
  { label: "Asesoría e inventario", remoto: "No", hibrido: "Básica", integral: "Incluida" },
  { label: "Desplazamiento", remoto: "No", hibrido: "Zona urbana", integral: "Incluido*" },
] as const;

export const BUSINESS_CONFIG = {
  equipos: ["1 a 5", "6 a 10", "11 a 15", "Más de 15"],
  ciudad: ["Bogotá", "Medellín", "Otra ciudad"],
  modalidad: ["Solo remoto", "Remoto + visitas presenciales"],
  urgencia: [
    "No urgente: planeo con calma",
    "Hay fallas recurrentes",
    "Urgente: necesito ayuda ya",
  ],
} as const;

export const BUSINESS_FAQ = [
  {
    q: "¿Qué pasa si necesito más visitas o más horas?",
    a: "En el Plan Remoto y el Plan Híbrido, las horas y visitas adicionales se cotizan por separado, siempre con aviso previo y tarifa clara. En el Plan Integral las horas son ilimitadas: solo aplica recargo logístico cuando la visita es fuera de Bogotá o Medellín.",
  },
  {
    q: "¿Cobran desplazamiento?",
    a: "En zona urbana, el desplazamiento del Plan Híbrido está incluido. Para visitas fuera del área urbana de tu ciudad, o fuera de Bogotá y Medellín, se aplica un recargo logístico que se confirma antes de agendar.",
  },
  {
    q: "¿Puedo cancelar el plan?",
    a: "Sí, cuando quieras. La suscripción es mensual y no tiene cláusulas de permanencia. El diagnóstico inicial siempre es gratuito y sin compromiso.",
  },
] as const;