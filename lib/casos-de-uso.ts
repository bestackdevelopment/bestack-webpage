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
  /** Clave de icono propia de la pieza (el componente cliente la mapea a un icono Tabler). */
  icono?: IconoClave
}

export type IconoClave =
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
  | "mail"
  | "shopping-bag"
  | "social"
  | "telegram"

export type ArquitecturaNodo = {
  id: string
  titulo: string
  descripcion?: string
  /** Clave de icono (el componente cliente la mapea a un icono Tabler). */
  icono?: IconoClave
  /** Posición en el lienzo (React Flow). */
  x: number
  y: number
}

/** Lado de un nodo por el que entra o sale una arista. */
export type LadoArista = "left" | "right" | "top" | "bottom"

/**
 * Marco punteado del diagrama. Agrupa nodos bajo un nombre («Red privada»,
 * «Internet») para que se lea dónde está el negocio y qué queda público: el
 * diagrama muestra quién entra, no solo las piezas.
 */
export type ArquitecturaZona = {
  id: string
  titulo: string
  /** Nota corta al pie de la zona (una línea). */
  nota?: string
  x: number
  y: number
  /** Ancho y alto del marco. */
  w: number
  h: number
}

export type ArquitecturaArista = {
  from: string
  to: string
  etiqueta?: string
  /**
   * Lados por los que sale y entra la arista. Por defecto derecha -> izquierda.
   * Se declaran solo cuando la arista es vertical (`desde: "bottom"`, `hasta: "top"`).
   */
  desde?: LadoArista
  hasta?: LadoArista
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
    /** Marcos punteados (lo privado y lo público); se pintan detrás de los nodos. */
    zonas?: ArquitecturaZona[]
    nodos: ArquitecturaNodo[]
    aristas: ArquitecturaArista[]
  }
  /** Copy de "Por qué así": decisiones y su razón */
  decisiones: { titulo: string; razon: string }[]
  /**
   * "Qué cambió" sin métricas: si el Patrón no da el número, queda cualitativo.
   * Opcional: un sistema que no reemplazó una operación anterior (SysOp) no la lleva, y
   * entonces la sección no se pinta.
   */
  queCambio?: string
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
          icono: "app-window",
        },
        {
          titulo: "Base de datos centralizada",
          descripcion:
            "Toda la información del negocio en una sola fuente: es la que alimenta a la aplicación, al catálogo en línea y al agente.",
          icono: "database",
        },
        {
          titulo: "Agente IA",
          descripcion:
            "Corre en infraestructura propia, entra a la aplicación y responde por Telegram: registra y consulta pedidos, ventas e inventario sin abrir el sistema.",
          icono: "robot",
        },
        {
          titulo: "Catálogo en línea",
          descripcion:
            "Los productos con foto, descripción y disponibilidad; el cliente arma su pedido en el carrito y lo cierra por WhatsApp.",
          icono: "shopping-bag",
        },
        {
          titulo: "Nube privada",
          descripcion:
            "Los archivos del negocio (fotos de producto, evidencia) ordenados y accesibles desde la operación.",
          icono: "cloud",
        },
        {
          titulo: "Red privada",
          descripcion: "Se entra a la aplicación sin exponer nada a internet.",
          icono: "lock",
        },
      ],
    },
    arquitectura: {
      zonas: [
        {
          id: "privada",
          titulo: "Red privada",
          nota: "El acceso entra por aquí: nada de la operación está expuesto a internet.",
          x: 8,
          y: 8,
          w: 984,
          h: 505,
        },
        {
          id: "internet",
          titulo: "Internet",
          nota: "Lo único público del negocio.",
          x: 1028,
          y: 8,
          w: 302,
          h: 505,
        },
      ],
      nodos: [
        {
          id: "celular",
          titulo: "Celular del dueño",
          descripcion: "Aquí se opera el negocio: es con lo que entra al sistema.",
          icono: "device-mobile",
          x: 40,
          y: 200,
        },
        {
          id: "app",
          titulo: "Aplicación interna",
          descripcion: "Ventas, clientes, gastos e inventario.",
          icono: "app-window",
          x: 380,
          y: 40,
        },
        {
          id: "nube",
          titulo: "Nube privada",
          descripcion: "Los archivos del negocio, ordenados y accesibles.",
          icono: "cloud",
          x: 380,
          y: 330,
        },
        {
          id: "db",
          titulo: "Base de datos centralizada",
          descripcion: "Una sola fuente para la aplicación, el catálogo y el agente.",
          icono: "database",
          x: 720,
          y: 10,
        },
        {
          id: "agente",
          titulo: "Agente IA",
          descripcion: "Gestiona pedidos y consulta sin abrir la aplicación.",
          icono: "robot",
          x: 720,
          y: 200,
        },
        {
          id: "catalogo",
          titulo: "Catálogo en línea",
          descripcion: "En operación: lee los productos de la base.",
          icono: "shopping-bag",
          x: 1060,
          y: 40,
        },
        {
          id: "cliente",
          titulo: "Cliente",
          descripcion: "Consulta el catálogo y arma su pedido.",
          icono: "users",
          x: 1060,
          y: 230,
        },
        {
          id: "telegram",
          titulo: "Telegram",
          descripcion: "Donde el negocio habla con el agente.",
          icono: "telegram",
          x: 1060,
          y: 370,
        },
      ],
      aristas: [
        { from: "celular", to: "app", etiqueta: "acceso" },
        { from: "celular", to: "nube", etiqueta: "sus archivos" },
        { from: "app", to: "db" },
        { from: "app", to: "agente", etiqueta: "MCP" },
        { from: "db", to: "catalogo", etiqueta: "publica" },
        {
          from: "catalogo",
          to: "cliente",
          etiqueta: "consulta",
          desde: "bottom",
          hasta: "top",
        },
        { from: "agente", to: "telegram", etiqueta: "responde" },
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
      "Se digitalizó y se organizó: el negocio dejó los papeles y las hojas de cálculo, y ahora se administra de mejor manera: catálogo, ventas y gastos en un mismo sistema, con un agente que responde por Telegram.",
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
          icono: "app-window",
        },
        {
          titulo: "Base de datos centralizada",
          descripcion:
            "Toda la información del negocio en una sola fuente: es la que alimenta a la aplicación, a la tienda y al agente.",
          icono: "database",
        },
        {
          titulo: "Agente IA",
          descripcion:
            "Corre en infraestructura propia, entra a la aplicación y responde por Telegram: consulta y registra sin abrir el sistema. También publica contenido en Facebook e Instagram y revisa los mensajes.",
          icono: "robot",
        },
        {
          titulo: "Tienda en línea",
          descripcion:
            "En desarrollo: se construye con los productos que ya viven en la base de datos centralizada.",
          icono: "shopping-bag",
        },
        {
          titulo: "Nube privada",
          descripcion:
            "Los archivos del negocio (planos, cotizaciones, evidencia) ordenados y accesibles desde la operación.",
          icono: "cloud",
        },
        {
          titulo: "Red privada",
          descripcion: "Se entra a la aplicación sin exponer nada a internet.",
          icono: "lock",
        },
      ],
    },
    arquitectura: {
      zonas: [
        {
          id: "privada",
          titulo: "Red privada",
          nota: "El acceso entra por aquí: nada de la operación está expuesto a internet.",
          x: 8,
          y: 8,
          w: 984,
          h: 505,
        },
        {
          id: "internet",
          titulo: "Internet",
          nota: "Lo único público del negocio.",
          x: 1028,
          y: 8,
          w: 302,
          h: 632,
        },
      ],
      nodos: [
        {
          id: "celular",
          titulo: "Celular del dueño",
          descripcion: "Aquí se opera el taller: es con lo que entra al sistema.",
          icono: "device-mobile",
          x: 40,
          y: 200,
        },
        {
          id: "app",
          titulo: "Aplicación interna",
          descripcion: "Cotizaciones, órdenes de producción, materiales y proveedores.",
          icono: "app-window",
          x: 380,
          y: 40,
        },
        {
          id: "nube",
          titulo: "Nube privada",
          descripcion: "Los archivos del negocio, ordenados y accesibles.",
          icono: "cloud",
          x: 380,
          y: 330,
        },
        {
          id: "db",
          titulo: "Base de datos centralizada",
          descripcion: "Una sola fuente para la aplicación, la tienda y el agente.",
          icono: "database",
          x: 720,
          y: 10,
        },
        {
          id: "agente",
          titulo: "Agente IA",
          descripcion: "Consulta y registra sin abrir la aplicación.",
          icono: "robot",
          x: 720,
          y: 200,
        },
        {
          id: "tienda",
          titulo: "Tienda en línea",
          descripcion: "En desarrollo: lee los productos de la base.",
          icono: "shopping-bag",
          x: 1060,
          y: 40,
        },
        {
          id: "cliente",
          titulo: "Cliente",
          descripcion: "Consulta la tienda y compra en línea.",
          icono: "users",
          x: 1060,
          y: 200,
        },
        {
          id: "telegram",
          titulo: "Telegram",
          descripcion: "Donde el taller habla con el agente.",
          icono: "telegram",
          x: 1060,
          y: 360,
        },
        {
          id: "social",
          titulo: "Facebook e Instagram",
          descripcion: "El agente publica contenido y revisa los mensajes.",
          icono: "social",
          x: 1060,
          y: 520,
        },
      ],
      aristas: [
        { from: "celular", to: "app", etiqueta: "acceso" },
        { from: "celular", to: "nube", etiqueta: "sus archivos" },
        { from: "app", to: "db" },
        { from: "app", to: "agente", etiqueta: "MCP" },
        { from: "db", to: "tienda", etiqueta: "publica" },
        {
          from: "tienda",
          to: "cliente",
          etiqueta: "compra",
          desde: "bottom",
          hasta: "top",
        },
        { from: "agente", to: "telegram", etiqueta: "responde" },
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
      "Organización y rapidez: el taller dejó de llevar todo en papel y de memoria (cotizaciones, producción, materiales y archivos ahora viven en el sistema) y ganó un agente que avisa y contesta por Telegram.",
  },
  {
    slug: "sysop",
    nombre: "SysOp: Configuración operacional",
    giro: "Seguridad perimetral",
    estado: "En desarrollo",
    tags: ["saas"],
    resumen:
      "Un motor operativo configurable: cada cliente define sus protocolos, sus ubicaciones y su personal, y el sistema los ejecuta en campo con evidencia trazable.",
    reto: [
      "Las empresas de seguridad perimetral operan con protocolos, turnos, roles y evidencia repartidos entre papel, mensajería y hojas de cálculo. Cuando un proveedor atiende varias instalaciones a la vez, ese desorden se multiplica por cada cliente.",
    ],
    solucion: {
      intro:
        "Un motor operativo configurable, que se construye una vez y se opera para muchos clientes, organizado en tres capas:",
      descripcion: [
        "Configuración: define qué se puede ejecutar. El nivel de plataforma administra clientes, instalaciones, ubicaciones, protocolos y las operaciones de cada ubicación.",
        "Operación: el personal ejecuta paso a paso lo que ya está configurado, desde el celular: turnos, captura de datos, evidencia e incidencias. La supervisión ve la cobertura por ubicación, las asignaciones y las emergencias pendientes de aprobar.",
        "Portal de cliente: el proveedor administra a sus clientes directos y a los sub-clientes de estos, y cada uno ve únicamente lo suyo. No tiene configuración profunda: es visibilidad y acciones acotadas.",
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
        titulo: "Un motor configurable, no una app a medida",
        razon:
          "No es una aplicación fija para un cliente: cada uno adapta sus protocolos, sus ubicaciones y su personal sin tocar código.",
      },
      {
        titulo: "Multi-tenant desde el modelo de datos, no desde la interfaz",
        razon:
          "El aislamiento no se resuelve escondiendo botones: ninguna entidad alcanza los datos de otra.",
      },
      {
        titulo: "Nada se ejecuta que no haya sido configurado",
        razon:
          "La capa de configuración es el techo de lo que se puede hacer en campo: no hay operaciones improvisadas.",
      },
      {
        titulo: "El acceso siempre explícito, nunca inferido",
        razon:
          "Los permisos se conceden; no se suponen. Sin asignación vigente no hay contexto operativo.",
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
  },
  {
    slug: "bahia",
    nombre: "Bahía Business Center",
    giro: "Renta de espacios",
    estado: "En operación",
    tags: ["corporativas"],
    resumen:
      "Sitio web corporativo hecho para aparecer en las búsquedas locales.",
    reto: [
      "Bahía renta cinco tipos de espacio bajo un mismo techo en Chetumal: coworking, oficina privada, oficina virtual, sala de juntas y sala de capacitación. El negocio ya operaba, pero no existía en internet: quien buscaba un espacio así en la ciudad no lo encontraba.",
      "En ese terreno no basta con verse bien. Cada espacio se busca con su propio término, y el sitio tenía que ser rastreable por los buscadores para aparecer en esas búsquedas.",
    ],
    solucion: {
      intro:
        "Un sitio web corporativo organizado por tipo de espacio:",
      descripcion: [
        "Cinco espacios, cada uno con su página: coworking, oficina privada, oficina virtual, sala de juntas y sala de capacitación. Cada página responde a la búsqueda de ese espacio, no a un catálogo genérico.",
        "La ubicación: con su propia página y acceso desde el inicio del sitio.",
        "Un solo llamado a la acción, cotizar: el formulario llega al correo del negocio.",
        "Fotos y video del espacio real: lo que se renta es el lugar, y se muestra como es.",
      ],
    },
    arquitectura: {
      nodos: [
        {
          id: "busqueda",
          titulo: "Búsqueda local (SEO)",
          descripcion:
            "Aparecer en el buscador cuando alguien busca «oficina», «coworking» o «sala de juntas» en la ciudad.",
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
          titulo: "Sitio en línea",
          descripcion:
            "Organizado por tipo de espacio, hecho para aparecer en las búsquedas locales.",
          icono: "app-window",
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
        {
          id: "contacto",
          titulo: "Contacto",
          descripcion:
            "El visitante escribe desde el sitio; el mensaje llega al correo del negocio.",
          icono: "mail",
          x: 800,
          y: 300,
        },
      ],
      aristas: [
        { from: "busqueda", to: "ssr", etiqueta: "rastreo" },
        { from: "visitante", to: "ssr" },
        { from: "ssr", to: "hosting", etiqueta: "publicado" },
        { from: "ssr", to: "contacto", etiqueta: "escribe" },
      ],
    },
    decisiones: [
      {
        titulo: "El contenido tiene que existir para el buscador, no solo verse",
        razon:
          "Un negocio local vive de búsqueda: lo que el buscador no puede leer, no lo muestra.",
      },
      {
        titulo: "Una página por tipo de espacio, no una sola con todo",
        razon:
          "Cada espacio se busca con su propio término. Una página por término es lo que se puede posicionar; una página con todo compite por nada.",
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
      "Ahora tienen presencia en internet a través de su página web: quien busca oficina, coworking o sala de juntas en la ciudad ya puede encontrarlos y cotizar en línea.",
  }
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