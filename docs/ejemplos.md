# Ejemplos — definición de la sección

**Última actualización:** 23 de septiembre de 2026 (subfire).

Especificación completa de la sección que reemplaza a "Portfolio": qué se muestra, cómo se
estructura cada página y el copy aprobado. **Todo el contenido de proyectos sale de aquí —
no se inventa nada fuera de este documento.**

## Qué es y por qué "Ejemplos"

La sección **no** se llama "Portafolio". Se llama **"Ejemplos"**, y su promesa es distinta:

> *"Esto es lo que se puede hacer"* — aplicado a distintos giros.

La razón: un portafolio obliga a demostrar que fueron clientes de BeStack (no hay testimonios,
y parte del trabajo real no se puede firmar). "Ejemplos" no carga esa prueba y deja que el
prospecto se identifique por su giro.

**Dos etiquetas por ejemplo:**
- **Giro** (agroalimentario, taller de corte láser, seguridad perimetral, renta de espacios)
- **Estado**: `En operación` · `En desarrollo`

## Los 4 ejemplos

8 desarrollos agrupados en 4 páginas (los tres primeros bloques del listado son la misma
fórmula aplicada dos veces; se presentan por cliente para que no se lean como relleno).

| slug | Nombre | Giro | Tipo | Estado | Qué muestra |
|---|---|---|---|---|---|
| `bidhara` | Bidhara — Flores comestibles y microgreens | Agroalimentario | Implementación integral | En operación | Catálogo en línea + sistema de operación + agente IA "Cortana" |
| `laserbox` | LaserBox — Taller de corte láser | Manufactura / taller | Implementación integral | En desarrollo | Ecommerce + sistema de operación + agente IA "Aserrín" |
| `sysop` | SysOp — Configuración operacional | Seguridad perimetral | SaaS | En desarrollo | Plataforma multi-tenant: proveedor, clientes directos y sub-clientes |
| `bahia` | Bahía Business Center | Renta de espacios | Sitio corporativo | En operación | Sitio con SSR para SEO, orientado a captación |

**Fuera del sitio:** los 12 proyectos hechos para la agencia Lanzaweb, y los proyectos viejos
que el Patrón descartó (Titanes, Magone, SAI, Interurbana, Melba).

## Índice `/ejemplos`

- Rejilla de 4 tarjetas: imagen (placeholder), nombre, giro, tipo, estado, una línea de qué
  se hizo y enlace "Ver el ejemplo".
- **Filtros por tipo de solución** (idea traída del portafolio anterior, ya probada):
  `Sistema a medida` · `Agente IA` · `Ecommerce` · `Sitio corporativo` · `SaaS`.
- Sección de cierre con CTA a `/contacto`.
- Reemplaza a la página "Próximamente" actual en `/proyectos`.

## Estructura de la página de ejemplo `/ejemplos/[slug]`

Ocho secciones, en este orden:

1. **Portada** — nombre, giro, una línea de qué es, etiquetas de tipo y estado, CTA.
2. **El reto** — cómo operaba el negocio antes (2-3 párrafos).
3. **La solución** — las piezas del sistema. En Bidhara y LaserBox son 3 tarjetas
   (catálogo/ecommerce · sistema de operación · agente IA). En SysOp y Bahía, la descripción
   de la plataforma/sitio.
4. **Cómo se aplicó** — stack y arquitectura. Aquí va un diagrama de la arquitectura.
5. **Por qué así** — las decisiones y **su razón**. *Es la sección que vende: demuestra
   criterio, no herramientas.* Mínimo 4 decisiones, cada una con su porqué.
6. **Qué cambió** — el efecto en la operación. **Sin métricas inventadas**: si el Patrón no
   da el número, la sección queda cualitativa.
7. **Galería** — capturas (placeholders).
8. **CTA + navegación** — "¿Tienes un negocio como este?" → `/contacto`, y enlace al
   siguiente ejemplo.

### Funcionalidad

- Ruta dinámica con `generateStaticParams` y metadata SEO por ejemplo (`title`, `description`,
  Open Graph con la imagen de portada).
- **Recordar:** en Next 16 `params` es una **Promise** — hay que hacer `const { slug } = await params`.
  Usarlo síncrono devuelve 404 en runtime aunque el build prerenderice la ruta.
- Navegación anterior/siguiente entre los 4 ejemplos.
- Galería con lightbox y placeholders responsivos.
- Enlaces desde las landings de servicio hacia el ejemplo correspondiente
  (p. ej. `/servicios/ecommerce` → `laserbox`).

### Placeholders de imagen

Las capturas las toma el Patrón. En el código se dejan los huecos con estas medidas:

| Uso | Proporción | Tamaño | Ruta sugerida |
|---|---|---|---|
| Portada del índice | 16:9 | 1280×720 | `/public/ejemplos/{slug}/cover.jpg` |
| Galería | 16:10 | 1600×1000 | `/public/ejemplos/{slug}/01.jpg`, `02.jpg`… |
| Open Graph | 1200×630 | 1200×630 | `/public/ejemplos/{slug}/og.jpg` |

---

## Copy — Ejemplo 1: Bidhara

*(muestra del tono, pendiente de aprobación del Patrón)*

**Bidhara — Flores comestibles y microgreens**
*Giro:* agroalimentario · *Tipo:* implementación integral · *Estado:* En operación

**El reto.** Catálogo de 45 productos perecederos, pedidos que entran por WhatsApp y el
control repartido entre hojas de cálculo y la memoria del dueño: qué se vendió, a quién,
cuánto se gastó, qué queda disponible.

**La solución — tres piezas, una sola fuente de verdad:**

1. **Catálogo en línea** — el escaparate: 45 productos con foto, descripción y
   disponibilidad; el pedido se cierra por WhatsApp, sin carrito ni pasarela que nadie iba
   a usar.
2. **Sistema de operación** — ventas multi-artículo, clientes, gastos por categoría y
   reportes en PDF. Mobile-first, porque el negocio se opera desde el celular.
3. **Agente IA "Cortana"** — el dueño le escribe por Telegram: registra ventas, consulta
   inventario, sube fotos y pide su reporte del día. Trabaja sobre **la misma base de datos**
   que la app, con permisos restringidos.

**Cómo se aplicó.** PostgreSQL + Prisma · Express + TypeScript · React + Vite + Tailwind +
shadcn/ui · Recharts · JWT · reportes en PDF · Hermes Agent sobre Telegram.

**Por qué así.**

- **Un agente, no otro dashboard.** El dueño no iba a abrir un panel para registrar una
  venta; le escribe al agente. No tuvo que cambiar su forma de trabajar.
- **Una sola base de datos.** El agente y la app leen y escriben lo mismo. Dos fuentes de
  verdad son dos verdades distintas.
- **Permisos mínimos.** El agente solo puede leer y dar de alta: no borra, no modifica.
- **PostgreSQL nativo, sin contenedores.** Lo va a mantener alguien que no es desarrollador.
  Menos piezas, menos fallas.
- **Reportes en PDF.** El negocio los manda y los imprime; un tablero no reemplaza eso.

**Qué cambió.** *(pendiente: los números del Patrón — no se estiman)*

---

## Ejemplos 2 a 4 — hechos verificados y lo que falta

### LaserBox — Taller de corte láser
*Tipo:* implementación integral · *Estado:* En desarrollo

- Tres piezas: **ecommerce** (en desarrollo), **sistema de operación**, **agente IA "Aserrín"**.
- **Se presenta como cliente.** No se menciona que el Patrón es socio del taller.
- **Falta:** stack del ecommerce y del sistema de operación; confirmar si el sistema de
  operación ya corre o también va como "en desarrollo"; copy completo.

### SysOp — Configuración operacional
*Tipo:* SaaS · *Estado:* En desarrollo

- Plataforma multi-tenant para operaciones de seguridad perimetral: el proveedor administra
  sus instalaciones, sus clientes directos y sus sub-clientes.
- Capas: `/config` (plataforma), `/ops` y `/ops-admin` (operación en campo), `/client`
  (portal de cliente).
- Stack verificado (23-sep-2026, repo `csic-solutions-mvp`): Next.js + Vite · Express ·
  Prisma · PostgreSQL (Supabase) · desplegado en Railway.
- **Se muestra sin el nombre del cliente y con datos demo** en las capturas.
- **Falta:** copy completo.

### Bahía Business Center
*Tipo:* sitio corporativo · *Estado:* En operación

- Sitio para negocio de renta de oficinas privadas y coworking. Desarrollo con SSR para
  aprovechar SEO.
- En vivo: `bahiabusinesscenter.com.mx` (verificado HTTP 200 el 23-sep-2026).
- Es trabajo de 2024 — es el único sitio web de la lista, sirve de ejemplo para la línea de
  "páginas corporativas".
- **Falta:** copy completo; confirmar stack exacto.

---

## Pendientes de esta sección

1. **Aprobar el tono** del copy (muestra: Bidhara).
2. **Los números** de resultados de cada ejemplo.
3. **Escribir el copy** de LaserBox, SysOp y Bahía en el mismo tono.
4. **Confirmar** los datos marcados como "falta" en cada ejemplo.
5. Decidir si la sección se llama `/ejemplos` en la URL o se conserva `/proyectos` con el
   texto "Ejemplos" (recomendado: renombrar también la URL, es más claro).
