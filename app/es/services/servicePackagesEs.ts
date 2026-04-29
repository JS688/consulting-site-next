export type ServiceSlug = "starter" | "growth" | "premium";

export type ServicePackageEs = {
  slug: ServiceSlug;
  label: string;
  title: string;
  priceLabel: string;
  timeline: string;
  overviewDescription: string;
  bullets: string[];
  accentClass: string;
  primaryPillClass: string;
  pillTextClass?: string;
  selectedCardClass: string;
  glowClass: string;
  detailTagline: string;
  detailOverview: string[];
  rightFor: string[];
  process: string[];
  bookingTitle: string;
  bookingDescription: string;
  sessionType: "short" | "full";
};

export const SERVICE_PACKAGES_ES: ServicePackageEs[] = [
  {
    slug: "starter",
    label: "Paso 1 - Construir",
    title: "Base",
    priceLabel: "$3,000",
    timeline: "3 a 4 semanas",
    overviewDescription:
      "Un sitio web a medida disenado para darle a tu negocio una base clara y creible online.",
    bullets: [
      "Sitio web a medida",
      "Mensajeria y estructura claras",
      "Base tecnica lista para SEO",
      "Paginas esenciales y flujo de conversion",
      "Construccion mobile-first",
    ],
    accentClass: "bg-zinc-200",
    primaryPillClass: "bg-zinc-300/70 shadow-[0_8px_20px_rgba(255,255,255,0.08)]",
    pillTextClass: "text-zinc-950",
    selectedCardClass:
      "border-white/20 bg-zinc-100/10 shadow-[0_0_80px_rgba(255,255,255,0.1)]",
    glowClass: "bg-white/12",
    detailTagline:
      "Una base a medida para negocios que necesitan un mejor sitio antes de crecer su visibilidad.",
    detailOverview: [
      "Base es el inicio del sistema de visibilidad. Construimos un sitio web a medida que explica claramente lo que haces, transmite confianza y le da a Google y a los sistemas de IA una estructura que puedan entender.",
      "Esta fase reemplaza confusion por claridad: mejor mensaje, mejor estructura, mejor rendimiento y una presencia profesional lista para optimizar en lugar de rehacer despues.",
    ],
    rightFor: [
      "Lanzar un negocio nuevo o una nueva oferta",
      "Reemplazar un sitio antiguo o inconsistente",
      "Crear una base profesional antes de invertir en visibilidad mas profunda",
    ],
    process: [
      "Definir paginas, mensaje y flujo de conversion",
      "Disenar y construir un sitio a medida con estructura clara",
      "Lanzar con la base tecnica y de contenido lista para la siguiente fase",
    ],
    bookingTitle: "Cuentanos sobre tu proyecto Base",
    bookingDescription:
      "Comparte que necesitas del sitio web y donde hoy se queda corto. Revisamos primero el alcance y luego te enviamos tu valoracion base de $100, cronograma y enlace de pago. La valoracion se acredita al costo del proyecto si avanzas.",
    sessionType: "full",
  },
  {
    slug: "growth",
    label: "Paso 2 - Optimizar",
    title: "Visibilidad",
    priceLabel: "$1,500",
    timeline: "4 a 6 semanas",
    overviewDescription:
      "Optimizamos tu sitio para que tu negocio sea mas facil de descubrir en Google y en la busqueda impulsada por IA.",
    bullets: [
      "Optimizacion de contenido",
      "Estructura amigable para IA",
      "Bloques FAQ y respuestas",
      "Articulos dirigidos",
      "Monitoreo de rendimiento",
    ],
    accentClass: "bg-blue-400",
    primaryPillClass: "bg-blue-500/85 shadow-[0_10px_24px_rgba(59,130,246,0.18)]",
    pillTextClass: "text-white",
    selectedCardClass:
      "border-blue-300/35 bg-blue-500/10 shadow-[0_0_80px_rgba(59,130,246,0.16)]",
    glowClass: "bg-blue-300/14",
    detailTagline:
      "La capa de optimizacion para negocios que ya tienen sitio pero aun no logran suficiente visibilidad.",
    detailOverview: [
      "Visibilidad es la fase donde el sitio empieza a trabajar mejor para el negocio. Mejoramos el contenido, la estructura y la capacidad de responder preguntas para que buscadores y sistemas de IA lo interpreten con mayor claridad.",
      "Esta fase esta pensada para aumentar descubrimiento con el tiempo mediante mejores senales de pagina, contenido dirigido y una experiencia digital alineada con la intencion real de busqueda.",
    ],
    rightFor: [
      "Negocios con un sitio activo que no genera suficiente trafico",
      "Equipos que necesitan mas visibilidad en Google y busqueda con IA",
      "Marcas listas para mejorar claridad antes de empujar autoridad",
    ],
    process: [
      "Detectar que paginas y temas estan frenando la visibilidad",
      "Mejorar estructura, contenido y formato listo para respuestas",
      "Lanzar un sistema mas claro disenado para ganar traccion con el tiempo",
    ],
    bookingTitle: "Cuentanos sobre tu proyecto de Visibilidad",
    bookingDescription:
      "Cuentanos donde se esta rompiendo hoy la visibilidad y que quieres mejorar. Revisamos primero el alcance y luego te enviamos tu valoracion de visibilidad de $200, cronograma y enlace de pago. La valoracion se acredita al costo del proyecto si avanzas.",
    sessionType: "full",
  },
  {
    slug: "premium",
    label: "Paso 3 - Crecer",
    title: "Autoridad",
    priceLabel: "$2,000",
    timeline: "6 a 8 semanas",
    overviewDescription:
      "Construimos senales de autoridad para que tu negocio sea mas confiable, mas visible y mas competitivo online.",
    bullets: [
      "Expansion de contenido",
      "Backlinks y listados",
      "Senales de autoridad",
      "Optimizacion de crecimiento",
      "Refinamiento de visibilidad en plataformas de IA",
    ],
    accentClass: "bg-yellow-400",
    primaryPillClass: "bg-yellow-400 shadow-[0_12px_30px_rgba(245,197,24,0.24)]",
    pillTextClass: "text-black",
    selectedCardClass:
      "border-yellow-300/35 bg-yellow-400/10 shadow-[0_0_80px_rgba(245,197,24,0.18)]",
    glowClass: "bg-yellow-300/14",
    detailTagline:
      "La fase de autoridad para negocios que quieren convertirse en una referencia, no solo en otra opcion.",
    detailOverview: [
      "Autoridad es donde la visibilidad se convierte en credibilidad. Expandimos contenido, fortalecemos senales de confianza y mejoramos el ecosistema alrededor del sitio para que el negocio se vea mas establecido ante personas, buscadores y sistemas de IA.",
      "Esta fase esta pensada para marcas que quieren impulso a largo plazo: mejores recomendaciones, mejor percepcion y una presencia digital que se acumula en lugar de quedarse estancada.",
    ],
    rightFor: [
      "Negocios que ya tienen sitio y necesitan mas senales de confianza",
      "Equipos que invierten en visibilidad organica y en IA a largo plazo",
      "Marcas que quieren convertirse en autoridad en su espacio online",
    ],
    process: [
      "Detectar vacios de autoridad en contenido, menciones y confianza",
      "Expandir el sistema de contenido y las senales externas de visibilidad",
      "Refinar y crecer la presencia con mejoras enfocadas en credibilidad",
    ],
    bookingTitle: "Cuentanos sobre tu proyecto de Autoridad",
    bookingDescription:
      "Empieza con el formulario para que podamos revisar donde hace falta fortalecer autoridad y confianza. Luego te enviamos tu valoracion de autoridad de $300, cronograma y enlace de pago. La valoracion se acredita al costo del proyecto si avanzas.",
    sessionType: "full",
  },
];

export function getServicePackageEs(slug: string) {
  return SERVICE_PACKAGES_ES.find((servicePackage) => servicePackage.slug === slug);
}