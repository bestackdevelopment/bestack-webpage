/**
 * Datos de la sección de Casos de uso. FUENTE ÚNICA en código: el copy vive en
 * `docs/casos-de-uso.md`; este módulo lo tipa y lo comparte entre el home, el
 * índice `/casos-de-uso` y las páginas de detalle `/casos-de-uso/[slug]`.
 *
 * No inventar contenido aquí: cada texto sale de `docs/casos-de-uso.md`.
 */

import type { ServicioTagId } from "@/lib/servicios"

export type EstadoCaso = "En operación" | "En desarrollo"

export type PiezaSolucion = {
  titulo: string
  descripcion: string
}

export type ArquitecturaIcono =
  | "settings"
  | "device-mobile"
  | "users"
  | "api"
  | "database"
  | "cloud-upload"
  | "nextjs"
  | "node"
  | "prisma"
  | "react"
  | "tailwind"
  | "typescript"
  | "robot"
  | "file"
  | "search"
  | "cloud"
  | "app-window"
  | "lock"
  | "shopping-bag"
  | "social"
  | "telegram"

export type ArquitecturaNodo = {
  id: string
  titulo: string
  descripcion?: string
  /** Clave de icono (el componente cliente la mapea a un icono Tabler). */
  icono?: ArquitecturaIcono
  /** Posición en el lienzo (React Flow). */
  x: number
  y: number
}

export type ArquitecturaArista = {
  from: string
  to: string
  etiqueta?: string
}

export type Caso = {
  slug: string
  nombre: string
  giro: string
  estado: EstadoCaso
  /** Tags de servicio para el filtro del índice (1 o más) */
  tags: ServicioTagId[]
  /** Una línea de qué se hizo, para tarjetas (home e índice) */
  resumen: string
  /** Copy de la sección "El reto" */
  reto: string[]
  /** Copy de la sección "La solución" */
  solucion: {
    intro: string
    /** Bidhara y LaserBox: las piezas como tarjetas */
    piezas?: PiezaSolucion[]
    /** SysOp y Bahía: descripción de la plataforma/sitio */
    descripcion?: string[]
  }
  /**
   * Diagrama de arquitectura para "Cómo se aplicó" (opcional).
   * La sección NO publica una lista de stack: el cliente que contrata no la lee y el
   * diagrama carga la sección (decisión del 6-oct-2026).
   */
  arquitectura?: {
    nodos: ArquitecturaNodo[]
    aristas: ArquitecturaArista[]
  }
  /** Copy de "Por qué así": decisiones y su razón */
  decisiones: { titulo: string; razon: string }[]
  /** "Qué cambió" — sin métricas: si el Patrón no da el número, queda cualitativo */
  queCambio: string
}

const casos: Caso[] = [
  {
    slug: "bidhara",
    nombre: "Bidhara: Flores comestibles y microgreens",
    giro: "Agroalimentario",
    estado: "En operación",
    tags: ["informativas", "catalogos", "mantenimiento", "agente-ia"],
    resumen:
      "El negocio completo en un sistema: catálogo en línea, ventas y gastos centralizados, con un agente de IA que responde por Telegram.",
    reto: [
      "Catálogo de 45 productos perecederos, pedidos que entran por WhatsApp y el control repartido entre hojas de cálculo y la memoria del dueño: qué se vendió, a quién, cuánto se gastó, qué queda disponible.",
    ],
    solucion: {
      intro: "Seis piezas, una sola fuente de verdad:",
      piezas: [
        {
          titulo: "Aplicación interna",
          descripcion:
            "Ventas multi-artículo, clientes, gastos por categoría e inventario en un solo lugar; mobile-first, porque el negocio se opera desde el celular.",
        },
        {
          titulo: "Base de datos centralizada",
          descripcion:
            "Toda la información del negocio en una sola fuente: es la que alimenta a la aplicación, al catálogo en línea y al agente.",
        },
        {
          titulo: "Agente IA",
          descripcion:
            "Corre en infraestructura propia, entra a la aplicación y responde por Telegram: registra y consulta pedidos, ventas e inventario sin abrir el sistema.",
        },
        {
          titulo: "Catálogo en línea",
          descripcion:
            "Los productos con foto, descripción y disponibilidad; el cliente arma su pedido en el carrito y lo cierra por WhatsApp.",
        },
        {
          titulo: "Nube privada",
          descripcion:
            "Los archivos del negocio —fotos de producto, evidencia— ordenados y accesibles desde la operación.",
        },
        {
          titulo: "Red privada",
          descripcion: "Se entra a la aplicación sin exponer nada a internet.",
        },
      ],
    },
    arquitectura: {
      nodos: [
        {
          id: "red",
          titulo: "Red privada",
          descripcion: "El acceso entra por aquí; la aplicación no está expuesta a internet.",
          icono: "lock",
          x: 0,
          y: 100,
        },
        {
          id: "app",
          titulo: "Aplicación interna",
          descripcion: "Ventas, clientes, gastos e inventario.",
          icono: "app-window",
          x: 340,
          y: 100,
        },
        {
          id: "db",
          titulo: "Base de datos centralizada",
          descripcion: "Una sola fuente para la aplicación, el catálogo y el agente.",
          icono: "database",
          x: 680,
          y: 0,
        },
        {
          id: "agente",
          titulo: "Agente IA",
          descripcion: "Gestiona pedidos y consulta sin abrir la aplicación.",
          icono: "robot",
          x: 680,
          y: 190,
        },
        {
          id: "nube",
          titulo: "Nube privada",
          descripcion: "Los archivos del negocio, ordenados y accesibles.",
          icono: "cloud",
          x: 680,
          y: 380,
        },
        {
          id: "catalogo",
          titulo: "Catálogo en línea",
          descripcion: "En operación: lee los productos de la base.",
          icono: "shopping-bag",
          x: 1020,
          y: 0,
        },
        {
          id: "telegram",
          titulo: "Telegram",
          descripcion: "Donde el negocio habla con el agente.",
          icono: "telegram",
          x: 1020,
          y: 190,
        },
      ],
      aristas: [
        { from: "red", to: "app", etiqueta: "acceso" },
        { from: "app", to: "db" },
        { from: "app", to: "agente", etiqueta: "MCP" },
        { from: "app", to: "nube", etiqueta: "archivos" },
        { from: "db", to: "catalogo", etiqueta: "catálogo" },
        { from: "agente", to: "telegram" },
      ],
    },
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
        razon: "El agente solo puede leer y dar de alta: no borra, no modifica.",
      },
      {
        titulo: "PostgreSQL nativo, sin contenedores",
        razon:
          "Lo va a mantener alguien que no es desarrollador. Menos piezas, menos fallas.",
      },
      {
        titulo: "Reportes en PDF",
        razon: "El negocio los manda y los imprime; un tablero no reemplaza eso.",
      },
      {
        titulo: "Red privada en vez de exponer la aplicación",
        razon:
          "La operación no tiene por qué estar en internet para poder entrar desde fuera.",
      },
      {
        titulo: "El catálogo se construye sobre lo que ya existe",
        razon:
          "El catálogo en línea sale de la operación, no de una lista aparte que se desactualiza sola.",
      },
      {
        titulo: "El agente dentro del sistema, no al lado",
        razon:
          "Por MCP el agente usa la aplicación real, con sus datos y sus permisos; no es un chatbot que adivina.",
      },
    ],
    queCambio:
      "Se digitalizó y se organizó: el negocio dejó los papeles y las hojas de cálculo, y ahora se administra de mejor manera —catálogo, ventas y gastos en un mismo sistema, con un agente que responde por Telegram.",
  },
  {
    slug: "laserbox",
    nombre: "LaserBox: Taller de corte láser",
    giro: "Manufactura / taller",
    estado: "En desarrollo",
    tags: ["tienda", "mantenimiento", "agente-ia"],
    resumen:
      "El taller completo en un sistema: cotizaciones, producción, materiales, archivos y venta en línea, con un agente de IA que responde por Telegram.",
    reto: [
      "La operación era la de un negocio de paso: se atendía lo que llegaba y todo se anotaba a lápiz y papel. Sin administración ni organización detrás, el control quedaba en la memoria de quien atendía.",
    ],
    solucion: {
      intro: "Seis piezas, una sola fuente de verdad:",
      piezas: [
        {
          titulo: "Aplicación interna",
          descripcion:
            "Cotizaciones, órdenes de producción, materiales y proveedores en un solo lugar.",
        },
        {
          titulo: "Base de datos centralizada",
          descripcion:
            "Toda la información del negocio en una sola fuente: es la que alimenta a la aplicación, a la tienda y al agente.",
        },
        {
          titulo: "Agente IA",
          descripcion:
            "Corre en infraestructura propia, entra a la aplicación y responde por Telegram: consulta y registra sin abrir el sistema. También publica contenido en Facebook e Instagram y revisa los mensajes.",
        },
        {
          titulo: "Tienda en línea",
          descripcion:
            "En desarrollo: se construye con los productos que ya viven en la base de datos centralizada.",
        },
        {
          titulo: "Nube privada",
          descripcion:
            "Los archivos del negocio —planos, cotizaciones, evidencia— ordenados y accesibles desde la operación.",
        },
        {
          titulo: "Red privada",
          descripcion: "Se entra a la aplicación sin exponer nada a internet.",
        },
      ],
    },
    arquitectura: {
      nodos: [
        {
          id: "red",
          titulo: "Red privada",
          descripcion: "El acceso entra por aquí; la aplicación no está expuesta a internet.",
          icono: "lock",
          x: 0,
          y: 100,
        },
        {
          id: "app",
          titulo: "Aplicación interna",
          descripcion: "Cotizaciones, órdenes de producción, materiales y proveedores.",
          icono: "app-window",
          x: 340,
          y: 100,
        },
        {
          id: "db",
          titulo: "Base de datos centralizada",
          descripcion: "Una sola fuente para la aplicación, la tienda y el agente.",
          icono: "database",
          x: 680,
          y: 0,
        },
        {
          id: "agente",
          titulo: "Agente IA",
          descripcion: "Consulta y registra sin abrir la aplicación.",
          icono: "robot",
          x: 680,
          y: 190,
        },
        {
          id: "nube",
          titulo: "Nube privada",
          descripcion: "Los archivos del negocio, ordenados y accesibles.",
          icono: "cloud",
          x: 680,
          y: 380,
        },
        {
          id: "tienda",
          titulo: "Tienda en línea",
          descripcion: "En desarrollo: lee los productos de la base.",
          icono: "shopping-bag",
          x: 1020,
          y: 0,
        },
        {
          id: "telegram",
          titulo: "Telegram",
          descripcion: "Donde el taller habla con el agente.",
          icono: "telegram",
          x: 1020,
          y: 190,
        },
        {
          id: "social",
          titulo: "Facebook e Instagram",
          descripcion: "El agente publica contenido y revisa los mensajes.",
          icono: "social",
          x: 1020,
          y: 380,
        },
      ],
      aristas: [
        { from: "red", to: "app", etiqueta: "acceso" },
        { from: "app", to: "db" },
        { from: "app", to: "agente", etiqueta: "MCP" },
        { from: "app", to: "nube", etiqueta: "archivos" },
        { from: "db", to: "tienda", etiqueta: "catálogo" },
        { from: "agente", to: "telegram" },
        { from: "agente", to: "social", etiqueta: "publica" },
      ],
    },
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
      {
        titulo: "Red privada en vez de exponer la aplicación",
        razon:
          "La operación no tiene por qué estar en internet para poder entrar desde fuera.",
      },
      {
        titulo: "Una sola base de datos para todo",
        razon:
          "La misma información alimenta a la aplicación, a la tienda y al agente: lo que se captura una vez no se vuelve a escribir.",
      },
      {
        titulo: "El agente dentro del sistema, no al lado",
        razon:
          "Por MCP el agente usa la aplicación real, con sus datos y sus permisos; no es un chatbot que adivina. Y la puerta es Telegram, donde el taller ya está.",
      },
      {
        titulo: "La tienda se construye sobre lo que ya existe",
        razon:
          "El catálogo sale de la operación, no de una lista aparte que se desactualiza sola.",
      },
    ],
    queCambio:
      "Organización y rapidez: el taller dejó de llevar todo en papel y de memoria —cotizaciones, producción, materiales y archivos ahora viven en el sistema— y ganó un agente que avisa y contesta por Telegram.",
  },
  {
    slug: "sysop",
    nombre: "SysOp: Configuración operacional",
    giro: "Seguridad perimetral",
    estado: "En desarrollo",
    tags: ["saas"],
    resumen:
      "Plataforma SaaS multi-tenant para operar protocolos, turnos y evidencia de seguridad perimetral.",
    reto: [
      "Las empresas de seguridad perimetral operan con protocolos, turnos, roles y evidencia repartidos entre papel, mensajería y hojas de cálculo. Cuando un proveedor atiende varias instalaciones a la vez, ese desorden se multiplica por cada cliente.",
    ],
    solucion: {
      intro:
        "Una plataforma multi-tenant (se construye una vez y se opera para muchos clientes) organizada en capas:",
      descripcion: [
        "Configuración: el nivel de plataforma administra instalaciones, clientes y módulos.",
        "Operación: el personal ejecuta protocolos y levanta incidencias con evidencia fotográfica desde el celular.",
        "Portal de cliente: el proveedor administra a sus clientes directos y a los sub-clientes de estos, y cada uno ve únicamente lo suyo.",
      ],
    },
    arquitectura: {
      nodos: [
        {
          id: "config",
          titulo: "Configuración",
          descripcion: "Administra instalaciones, clientes y módulos.",
          icono: "settings",
          x: 0,
          y: 0,
        },
        {
          id: "operacion",
          titulo: "Operación (PWA)",
          descripcion:
            "El personal ejecuta protocolos y levanta incidencias con evidencia fotográfica.",
          icono: "device-mobile",
          x: 0,
          y: 170,
        },
        {
          id: "portal",
          titulo: "Portal de cliente",
          descripcion:
            "El proveedor administra clientes y sub-clientes; cada uno ve solo lo suyo.",
          icono: "users",
          x: 0,
          y: 340,
        },
        {
          id: "api",
          titulo: "API (Express)",
          descripcion: "Autenticación, permisos por rol y lógica de negocio.",
          icono: "api",
          x: 360,
          y: 170,
        },
        {
          id: "db",
          titulo: "PostgreSQL (Prisma)",
          descripcion: "Multi-tenant: cada recurso tiene dueño en la base de datos.",
          icono: "database",
          x: 720,
          y: 80,
        },
        {
          id: "evidencia",
          titulo: "Evidencia en la nube",
          descripcion: "Las fotos de las incidencias se guardan en la nube.",
          icono: "cloud-upload",
          x: 720,
          y: 260,
        },
      ],
      aristas: [
        { from: "config", to: "api" },
        { from: "operacion", to: "api" },
        { from: "portal", to: "api" },
        { from: "api", to: "db" },
        { from: "api", to: "evidencia", etiqueta: "fotos" },
      ],
    },
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
    estado: "En operación",
    tags: ["corporativas"],
    resumen:
      "Sitio corporativo con renderizado en servidor para competir en búsqueda local.",
    reto: [
      "Un negocio de renta de espacios en una plaza turística compite por las búsquedas locales de «oficina», «coworking» y «sala de juntas». En ese terreno el sitio tiene que ser rastreable por los buscadores, no solo verse bien.",
    ],
    solucion: {
      intro:
        "Un sitio corporativo con renderizado en servidor, para que el contenido exista en HTML desde el primer byte (la condición para competir en buscadores). Organizado por tipo de espacio, con la ubicación y un único llamado a la acción: cotizar.",
    },
    arquitectura: {
      nodos: [
        {
          id: "busqueda",
          titulo: "Búsqueda local",
          descripcion: "«Oficina», «coworking», «sala de juntas».",
          icono: "search",
          x: 0,
          y: 0,
        },
        {
          id: "visitante",
          titulo: "Visitante",
          descripcion: "Llega y encuentra el espacio; cotiza.",
          icono: "users",
          x: 0,
          y: 200,
        },
        {
          id: "ssr",
          titulo: "Sitio en servidor (Next.js)",
          descripcion: "Contenido en HTML desde el primer byte.",
          icono: "nextjs",
          x: 400,
          y: 100,
        },
        {
          id: "hosting",
          titulo: "Hosting del negocio",
          descripcion: "Publicado en su propio hosting.",
          icono: "cloud",
          x: 800,
          y: 100,
        },
      ],
      aristas: [
        { from: "busqueda", to: "ssr", etiqueta: "rastreo" },
        { from: "visitante", to: "ssr" },
        { from: "ssr", to: "hosting", etiqueta: "publicado" },
      ],
    },
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

export function getCasos(): Caso[] {
  return casos
}

export function getCaso(slug: string): Caso | undefined {
  return casos.find((caso) => caso.slug === slug)
}

/** Casos destacados para el home (docs/contenido-home.md: las 3 más fuertes) */
export function getCasosDestacados(): Caso[] {
  const slugs = ["sysop", "bidhara", "laserbox"]
  return slugs
    .map((slug) => getCaso(slug))
    .filter((caso): caso is Caso => Boolean(caso))
}