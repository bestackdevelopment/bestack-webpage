# Checkpoint — bestack-webpage

Estado del proyecto. Sirve para retomar el trabajo rápido en otra sesión, con cualquier agente.

> ⚠️ **El estado del proyecto vive en Notion.** Este archivo es solo el estado *técnico* del
> repo (rutas, verificación, cómo proceder). Antes de retomar: abre la página del proyecto en
> Notion y revisa las fases y pendientes abiertos. Ver `AGENTS.md` → *Fuente de verdad*.
>
> - Proyecto «BeStack — Sitio web» → https://app.notion.com/p/BeStack-Sitio-web-3f032530bf558183bce3d431032c9ca8
> - Raíz de proyectos → https://app.notion.com/p/BeStack-Development-Proyectos-3f032530bf5581d5aa76c460d8c48460

**Última verificación:** 6 de octubre de 2026 (agente, revisión completa: build, rutas, links y móvil).

## Qué es

Sitio corporativo de **BeStack Development** (agencia de desarrollo web). Es la cara
comercial: explica los servicios, muestra ejemplos de trabajo y capta prospectos por
formulario. Más adelante incluye un blog.

## Estado del repositorio

| | |
|---|---|
| Ruta | `~/proyects/bestackdevelopment/webpage` (Dev Server, usuario `dev`) |
| Remoto | `github.com/bestackdevelopment/bestack-webpage` (alias SSH `github-bot`) |
| Rama | `main` |
| Última actualización | 6-oct-2026 (rename a «Casos de uso», tienda/catálogos en línea, docs sincronizados) |
| Working tree | **limpio** |
| vs `origin/main` | **Sincronizado** — push hecho el 6-oct-2026 |
| Visibilidad | público (el Patrón lo pasará a privado; no es urgente, no hay secretos) |

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind v4 (CSS-first) · @tabler/icons-react ·
react-hook-form + zod · zustand · shadcn/ui (Button, Card, Accordion sobre Radix).

## Rutas

| Ruta | Estado |
|---|---|
| `/` | ✅ Home: hero, «¿Por qué elegirnos?» (cards con icono), «Nuestros Servicios», stack de tecnologías, «Proyectos Destacados», «Cómo trabajamos» (**línea de tiempo**) y CTA |
| `/contacto` | Funcional, **pero el envío está simulado** (Fase 4) |
| `/casos-de-uso` | ✅ Índice con filtros por tipo de solución + 4 tarjetas |
| `/casos-de-uso/[slug]` | ✅ 4 páginas SSG (bidhara, laserbox, sysop, bahia), 8 secciones |
| `/proyectos` | ❌ Eliminado — renombrado a `/casos-de-uso` |
| `/servicios/paginas-informativas` | ✅ Funcional |
| `/servicios/paginas-corporativas` | ✅ Funcional |
| `/servicios/catalogos-en-linea` | ✅ Funcional |
| `/servicios/tienda-en-linea` | ✅ Funcional |
| `/servicios/ecommerce` | ❌ Eliminado — se partió en `catalogos-en-linea` y `tienda-en-linea` |
| `/servicios/mantenimiento-web` | ✅ Funcional |
| `/servicios/finaliza-tu-web` | ✅ Funcional |
| `/servicios/agente-ia` | ✅ Funcional |
| Blog | ❌ **No existe** — Fase 3 |

Las 7 landings de `/servicios/*` — `paginas-informativas`, `paginas-corporativas`,
`catalogos-en-linea`, `tienda-en-linea`, `mantenimiento-web`, `finaliza-tu-web` y
`agente-ia` — comparten la plantilla
`components/service-template.tsx` (unificadas el 5-oct-2026; la antigua `service-landing.tsx`
se retiró).

> **Desviación visual aceptada:** la plantilla reproduce el look de informativas, pero
> tokeniza el brillo del hero (círculos `primary`/`secondary` con `blur` en vez de los
> antiguos degradados radiales `rgba`) y los degradados de los iconos de beneficio (paradas
> de token en vez de las paradas de marca más claras). Desviación menor respecto al hero
> original de informativas, registrada para trazabilidad.

## Estilos y accesibilidad (estado, 5-oct-2026)

- **Tipografía:** Montserrat como fuente general. Las variables de fuente de `next/font` se
  aplican en `<html>` (no en `<body>`) para que `--font-sans` resuelva. Jura solo en el
  navbar y `/contacto`, a propósito.
- **Contraste AA:** auditoría WCAG de las 12 rutas **sin fallos en texto de cuerpo/UI**.
  **Marca intacta** (primary `#FD4B5B`, secondary `#42BEC0`, accent `#665DE2`). El gris neutro
  de texto (`--color-muted-foreground`) es `#696969`.
  - **Excepción aceptada por el Patrón:** los encabezados con degradado de marca (extremo
    coral 2.5–3.0 sobre fondos teñidos, por debajo del 3.0 de texto grande).
- **Tokens de color:** las landings de `/servicios/*` usan solo tokens del tema (`primary`,
  `secondary`, `accent`…); se eliminaron los hex sueltos (`#FD4B5B`, `#42BEC0`, `#665DE2`,
  etc.) de su código al unificarlas en `components/service-template.tsx`.
- **Cómo trabajamos:** línea de tiempo vertical (línea a la izquierda, nodos con degradado de
  marca, un icono Tabler por paso). Ver `docs/contenido-home.md`.

## Pendientes

Ordenados según las fases de `docs/plan-de-trabajo.md`.

- **Fase 3 — Blog:** no existe nada (ni rutas, ni lectura de contenido, ni caché). Empezar por
  la prueba mínima: una página que lea un post de Notion, lo renderice y quede cacheada con
  revalidación por tiempo.
- **Fase 4 — Formulario + dominio:** 🔴 el formulario de contacto **simula el envío**
  (`components/contact-form.tsx`); se conecta a **Resend** cuando haya dominio. El dominio
  `bestackdevelopment.com` es placeholder y **no resuelve** (`lib/site.ts`).
- **Fase 5 — Publicación:** sin configuración de deploy. **No se publica hasta que el Patrón
  lo autorice.**
- **Del Patrón (contenido):** revisar en navegador; capturas de los ejemplos (hoy
  placeholders); números de «Qué cambió» (no se estiman); aprobar el tono del copy; confirmar
  si el sistema de LaserBox ya corre.

## Cómo proceder

1. Leer `docs/plan-de-trabajo.md` para el orden de las fases.
2. Leer `docs/casos-de-uso.md` antes de tocar `/casos-de-uso` — ahí está el copy y la estructura.
   **No inventar contenido de proyectos.**
3. Respetar las convenciones de `AGENTS.md` (iconos Tabler, tokens del tema, **no tocar los
   colores de marca**).
4. **Antes de dar algo por terminado:** `pnpm lint` y `pnpm build`, y verificar en navegador
   real (no basta con que compile).
5. Al terminar: actualizar este archivo (solo el estado actual) y Notion.
6. Si cambia una decisión de producto o contenido, registrarla en Notion (base `Decisiones`).

## Reglas de contenido

- **No inventar métricas.** Los números los aporta el Patrón; sin número, la sección se deja
  sin métricas.
- **No mencionar clientes que no se pueden firmar.** Los proyectos de Lanzaweb quedan fuera.
- **LaserBox se presenta como cliente.** No mencionar la sociedad con el taller.
- **Publicar no es decisión del agente.**
- **Capturas de pantalla:** las toma el Patrón; en el código se dejan placeholders con las
  medidas de `docs/casos-de-uso.md`.
