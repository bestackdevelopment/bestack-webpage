/**
 * Datos de la sección de Ejemplos. FUENTE ÚNICA en código: el copy vive en
 * `docs/ejemplos.md`; este módulo lo tipa y lo comparte entre el home, el
 * índice `/ejemplos` y las páginas de detalle `/ejemplos/[slug]`.
 *
 * No inventar contenido aquí: cada texto sale de `docs/ejemplos.md`.
 */

export type EstadoEjemplo = "En operación" | "En desarrollo"

/** Filtros por tipo de solución (docs/ejemplos.md → "Índice /ejemplos"). */
export const FILTROS_SOLUCION = [
  "Sistema a medida",
  "Agente IA",
  "Ecommerce",
  "Sitio corporativo",
  "SaaS",
] as const

export type FiltroSolucion = (typeof FILTROS_SOLUCION)[number]

export type PiezaSolucion = {
  titulo: string
  descripcion: string
}

export type Ejemplo = {
  slug: string
  nombre: string
  giro: string
  tipo: string
  estado: EstadoEjemplo
  /** Etiquetas de tipo de solución para el filtro del índice */
  filtros: FiltroSolucion[]
  /** Una línea de qué se hizo, para tarjetas (home e índice) */
  resumen: string
  /** Copy de la sección "El reto" */
  reto: string[]
  /** Copy de la sección "La solución" */
  solucion: {
    intro: string
    /** Bidhara y LaserBox: 3 piezas como tarjetas */
    piezas?: PiezaSolucion[]
    /** SysOp y Bahía: descripción de la plataforma/sitio */
    descripcion?: string[]
  }
  /** Copy de "Cómo se aplicó" */
  stack: string
  /** Copy de "Por qué así": decisiones y su razón */
  decisiones: { titulo: string; razon: string }[]
  /** "Qué cambió" — sin métricas: si el Patrón no da el número, queda cualitativo */
  queCambio: string
}

const ejemplos: Ejemplo[] = [
  {
    slug: "bidhara",
    nombre: "Bidhara — Flores comestibles y microgreens",
    giro: "Agroalimentario",
    tipo: "Implementación integral",
    estado: "En operación",
    filtros: ["Sistema a medida", "Agente IA", "Ecommerce"],
    resumen:
      "Catálogo en línea, sistema de operación y agente IA que registra ventas desde Telegram.",
    reto: [
      "Catálogo de 45 productos perecederos, pedidos que entran por WhatsApp y el control repartido entre hojas de cálculo y la memoria del dueño: qué se vendió, a quién, cuánto se gastó, qué queda disponible.",
    ],
    solucion: {
      intro: "Tres piezas, una sola fuente de verdad:",
      piezas: [
        {
          titulo: "Catálogo en línea",
          descripcion:
            "El escaparate: 45 productos con foto, descripción y disponibilidad; el pedido se cierra por WhatsApp, sin carrito ni pasarela que nadie iba a usar.",
        },
        {
          titulo: "Sistema de operación",
          descripcion:
            "Ventas multi-artículo, clientes, gastos por categoría y reportes en PDF. Mobile-first, porque el negocio se opera desde el celular.",
        },
        {
          titulo: "Agente IA «Cortana»",
          descripcion:
            "El dueño le escribe por Telegram: registra ventas, consulta inventario, sube fotos y pide su reporte del día. Trabaja sobre la misma base de datos que la app, con permisos restringidos.",
        },
      ],
    },
    stack:
      "PostgreSQL + Prisma · Express + TypeScript · React + Vite + Tailwind + shadcn/ui · Recharts · JWT · reportes en PDF · Hermes Agent sobre Telegram.",
    decisiones: [
      {
        titulo: "Un agente, no otro dashboard",
        razon:
          "El dueño no iba a abrir un panel para registrar una venta; le escribe al agente. No tuvo que cambiar su forma de trabajar.",
      },
      {
        titulo: "Una sola base de datos",
        razon:
          "El agente y la app leen y escriben lo mismo. Dos fuentes de verdad son dos verdades distintas.",
      },
      {
        titulo: "Permisos mínimos",
        razon:
          "El agente solo puede leer y dar de alta: no borra, no modifica.",
      },
      {
        titulo: "PostgreSQL nativo, sin contenedores",
        razon:
          "Lo va a mantener alguien que no es desarrollador. Menos piezas, menos fallas.",
      },
      {
        titulo: "Reportes en PDF",
        razon:
          "El negocio los manda y los imprime; un tablero no reemplaza eso.",
      },
    ],
    queCambio:
      "La operación dejó de depender de hojas de cálculo y memoria: catálogo, ventas, gastos e inventario viven en una sola base de datos, consultable desde el celular y Telegram.",
  },
  {
    slug: "laserbox",
    nombre: "LaserBox — Taller de corte láser",
    giro: "Manufactura / taller",
    tipo: "Implementación integral",
    estado: "En desarrollo",
    filtros: ["Sistema a medida", "Ecommerce", "Agente IA"],
    resumen:
      "Sistema de operación, ecommerce y agente IA para cotizar y llevar la producción del taller.",
    reto: [
      "Un taller que cotiza a mano y lleva la producción y el inventario repartidos entre la memoria de quien atiende y hojas de cálculo. Cotizar un trabajo tomaba tiempo y el precio terminaba dependiendo de quién lo calculara.",
    ],
    solucion: {
      intro: "Tres piezas:",
      piezas: [
        {
          titulo: "Sistema de operación",
          descripcion:
            "Clientes, cotizaciones, producción, inventario y usuarios. Cotizar deja de ser un cálculo a mano: el precio sale del sistema, no de la memoria.",
        },
        {
          titulo: "Ecommerce",
          descripcion:
            "En desarrollo: el canal de venta en línea de los productos del taller.",
        },
        {
          titulo: "Agente IA «Aserrín»",
          descripcion:
            "Opera sobre el mismo sistema: consulta y registra desde Telegram, sin abrir la aplicación.",
        },
      ],
    },
    stack:
      "Express + Prisma + SQLite · React + Vite + Tailwind CSS · Tabler Icons · monorepo pnpm · API con autenticación.",
    decisiones: [
      {
        titulo: "SQLite, no un motor grande",
        razon:
          "Un taller con un solo punto de operación no necesita un servidor de base de datos: un archivo respaldable es más simple de mantener y de mover.",
      },
      {
        titulo: "Las cotizaciones dentro del sistema",
        razon:
          "Es la pieza que más tiempo ahorra: el precio deja de depender de la persona que atiende.",
      },
      {
        titulo: "Producción e inventario junto a la venta",
        razon:
          "Lo que se cotiza, lo que se produce y lo que se consume son el mismo dato, no tres hojas distintas.",
      },
      {
        titulo: "Mobile y tablet primero",
        razon:
          "En un taller se consulta de pie, junto a la máquina, no sentado en un escritorio.",
      },
    ],
    queCambio:
      "La cotización dejó de ser un cálculo a mano y el precio sale del sistema. Producción e inventario se consultan con el agente desde el celular, sin abrir la aplicación.",
  },
  {
    slug: "sysop",
    nombre: "SysOp — Configuración operacional",
    giro: "Seguridad perimetral",
    tipo: "SaaS",
    estado: "En desarrollo",
    filtros: ["SaaS", "Sistema a medida"],
    resumen:
      "Plataforma SaaS multi-tenant para operar protocolos, turnos y evidencia de seguridad perimetral.",
    reto: [
      "Las empresas de seguridad perimetral operan con protocolos, turnos, roles y evidencia repartidos entre papel, mensajería y hojas de cálculo. Cuando un proveedor atiende varias instalaciones a la vez, ese desorden se multiplica por cada cliente.",
    ],
    solucion: {
      intro:
        "Una plataforma multi-tenant —se construye una vez y se opera para muchos clientes— organizada en capas:",
      descripcion: [
        "Configuración: el nivel de plataforma administra instalaciones, clientes y módulos.",
        "Operación: el personal ejecuta protocolos y levanta incidencias con evidencia fotográfica desde el celular.",
        "Portal de cliente: el proveedor administra a sus clientes directos y a los sub-clientes de estos, y cada uno ve únicamente lo suyo.",
      ],
    },
    stack:
      "Next.js · Express · Prisma + PostgreSQL · PWA instalable con precache por rutas · internacionalización · almacenamiento de evidencia en la nube · despliegue gestionado.",
    decisiones: [
      {
        titulo: "Multi-tenant desde el modelo de datos, no desde la interfaz",
        razon:
          "Los permisos no se resuelven escondiendo botones: cada recurso tiene dueño en la base de datos.",
      },
      {
        titulo: "PWA en vez de aplicación nativa",
        razon:
          "La operación ocurre en instalaciones con señal irregular; una app web instalable no depende de una tienda y se actualiza sola.",
      },
      {
        titulo: "Evidencia fotográfica obligatoria en las incidencias",
        razon: "Es lo que convierte un reporte en algo verificable.",
      },
      {
        titulo: "Capas separadas por rol",
        razon:
          "Quien opera en campo no ve la configuración, y un cliente nunca ve a otro.",
      },
    ],
    queCambio:
      "Protocolos, turnos y evidencia dejan de viajar en papel y mensajería: cada instalación opera con sus procedimientos en una sola plataforma, con evidencia verificable.",
  },
  {
    slug: "bahia",
    nombre: "Bahía Business Center",
    giro: "Renta de espacios",
    tipo: "Sitio corporativo",
    estado: "En operación",
    filtros: ["Sitio corporativo"],
    resumen:
      "Sitio corporativo con renderizado en servidor para competir en búsqueda local.",
    reto: [
      "Un negocio de renta de espacios en una plaza turística compite por las búsquedas locales de «oficina», «coworking» y «sala de juntas». En ese terreno el sitio tiene que ser rastreable por los buscadores, no solo verse bien.",
    ],
    solucion: {
      intro:
        "Un sitio corporativo con renderizado en servidor, para que el contenido exista en HTML desde el primer byte —la condición para competir en buscadores—. Organizado por tipo de espacio, con la ubicación y un único llamado a la acción: cotizar.",
    },
    stack: "Next.js con renderizado en servidor · React · Tailwind CSS · publicación en el hosting del negocio.",
    decisiones: [
      {
        titulo: "Renderizado en servidor en vez de una aplicación de una sola página",
        razon:
          "Un negocio local vive de búsqueda: si el contenido no llega en el HTML, no existe para Google.",
      },
      {
        titulo: "Un solo llamado a la acción",
        razon:
          "Los cinco tipos de espacio compiten entre sí por la misma atención; el objetivo del sitio es que el visitante cotice.",
      },
      {
        titulo: "El producto es el lugar",
        razon:
          "Fotos y video del espacio real venden una oficina; las imágenes genéricas, no.",
      },
    ],
    queCambio:
      "El sitio existe en HTML desde el primer byte, organizado por tipo de espacio y con un único camino: cotizar.",
  },
]

export function getEjemplos(): Ejemplo[] {
  return ejemplos
}

export function getEjemplo(slug: string): Ejemplo | undefined {
  return ejemplos.find((ejemplo) => ejemplo.slug === slug)
}

/** Ejemplos destacados para el home (docs/contenido-home.md: las 3 más fuertes) */
export function getEjemplosDestacados(): Ejemplo[] {
  const slugs = ["sysop", "bidhara", "laserbox"]
  return slugs
    .map((slug) => getEjemplo(slug))
    .filter((ejemplo): ejemplo is Ejemplo => Boolean(ejemplo))
}