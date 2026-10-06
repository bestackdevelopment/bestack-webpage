# AGENTS.md

Guía para agentes de IA que trabajan en este repositorio. Léela antes de tocar código.

## Proyecto

**bestack-webpage** — sitio corporativo de BeStack Development (agencia de desarrollo web).

> **Punto de estado actual**: el estado del proyecto vive en **Notion** (ver *Fuente de verdad*).
> Empezar por la página del proyecto, no por estos archivos.

## Fuente de verdad: Notion

**Notion es la fuente de verdad del proyecto: lo que no está ahí, no existe.**

- **Notion** → estado, avance, fases, pendientes, decisiones y el contenido del blog.
  **Ahí escriben los dos agentes.**
- **Este repo** → lo técnico que vive pegado al código: stack, comandos, convenciones,
  y el copy que el código consume.

### Referencias

| Qué | Dónde |
|---|---|
| Raíz de proyectos | https://app.notion.com/p/BeStack-Development-Proyectos-3f032530bf5581d5aa76c460d8c48460 |
| Proyecto «BeStack — Sitio web» | https://app.notion.com/p/BeStack-Sitio-web-3f032530bf558183bce3d431032c9ca8 |
| Blog (aparte — es contenido, no gestión) | https://app.notion.com/p/Blog-BeStack-Development-3f032530bf5581ee9fcce88248da1974 |

Dentro de la página del proyecto viven tres bases de datos: **Fases**, **Pendientes** y
**Decisiones**. Cada fila se abre como página propia — **el detalle va en la fila, no en
el texto de la página**.

Workspace: **BeStackDevelopment's Space**. El bot `DevelopmentServer` ya tiene acceso.

## Documentación en el repo

| Archivo | Qué contiene |
|---|---|
| `docs/casos-de-uso.md` | Copy y estructura de la sección de Casos de uso. **El copy sale de aquí, no de la imaginación.** |
| `docs/contenido-home.md` | Copy de las secciones del home que se ajustan ("Cómo trabajamos", "Proyectos Destacados"). |
| `docs/plan-de-trabajo.md` | Detalle técnico de cada fase y criterios de aceptación. *(El estado vive en Notion.)* |
| `docs/checkpoint.md` | Estado técnico del repo: rutas, verificación, cómo proceder. *(El estado de producto vive en Notion.)* |

## Sincronización de la información (regla dura)

| Cuándo | Qué actualizar |
|---|---|
| Antes de empezar | **Notion** — la página del proyecto: fases abiertas y pendientes. Y `docs/casos-de-uso.md` si vas a tocar contenido |
| Al terminar una tarea | **Notion** — la fase correspondiente: **notas/detalle del trabajo hecho** y sus pendientes. El **estado y el «Avance %» los fija el Patrón**, no el agente |
| Si cambia una decisión de producto o contenido | **Notion** → base `Decisiones` del proyecto |
| Si falta un dato de contenido | **Preguntar.** El copy sale de `docs/casos-de-uso.md`, no de la imaginación |
| Al cerrar un tramo | Repo consistente (`pnpm lint`, `pnpm build`) y commit |

**Una decisión que solo vive en una conversación no existe para el siguiente agente.**
Si algo se acordó hablando y no está en un documento, escríbelo.

## Este repositorio es público

No incluir credenciales, nombres de clientes, datos de personas ni información interna de las
operaciones. Las capturas de los ejemplos se publican **con datos demo**.

## Stack

- **Next.js 16** (App Router, React Server Components)
- **React 19** + **TypeScript**
- **TailwindCSS v4** (configuración CSS-first en `app/globals.css`)
- **@tabler/icons-react** — única librería de iconos
- **react-hook-form** + **zod** (`@hookform/resolvers/zod`) para formularios
- **zustand** — disponible para estado global (crear stores en `store/`)
- **shadcn/ui** para `Button`, `Card` y `Accordion` (sobre Radix UI)
- **motion** (framer-motion) — animaciones de entrada; se usan vía `components/reveal.tsx`

## Comandos

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build
pnpm lint
```

## Configuración

- `NEXT_PUBLIC_SITE_URL` — URL pública del sitio, usada por `metadataBase`, `sitemap.xml`
  y `robots.txt`. Por defecto `https://bestackdevelopment.com` (placeholder). Ver `lib/site.ts`.
- Email de contacto y nombre del sitio también viven en `lib/site.ts`.

## Convenciones (respetar)

- **Iconos:** siempre `@tabler/icons-react`. No añadir `lucide-react` ni SVGs inline.
- **Colores:** usar los tokens del tema (`primary`, `secondary`, `accent`…) definidos en
  `app/globals.css`, nunca hex sueltos.
- **Páginas de servicio:** las seis landings de `/servicios/*` (`paginas-informativas`,
  `paginas-corporativas`, `ecommerce`, `mantenimiento-web`, `finaliza-tu-web` y `agente-ia`)
  comparten `components/service-template.tsx` y solo aportan su objeto de datos
  (`ServiceTemplateData`).
- **Animaciones de entrada:** usar `components/reveal.tsx` (framer-motion). El componente
  envuelve contenido server-rendered.
  - Los **títulos de sección quedan siempre visibles**; se anima el contenido (tarjetas, bloques).
  - Props: `direction` (`"up" | "down" | "left" | "right"`, por defecto `"up"`) y `delay`
    (ms, para escalonar hermanos).
  - Rejillas: **2 columnas** → `direction={index % 2 === 0 ? "left" : "right"}` (izquierda/derecha
    por columna); **3–4 columnas** → `"up"` con `delay={(index % cols) * 80}`.
  - **Responsivo:** en `< lg` las entradas laterales caen a `"up"` (evita desbordes). El `<main>`
    de cada página lleva `overflow-x-clip`.
  - Respeta `prefers-reduced-motion` y muestra el bloque si al cargar ya quedó por encima del
    viewport (no deja contenido oculto).
- **Estado global:** crear stores en `store/` solo cuando el estado sea compartido entre
  componentes. El menú móvil del navbar usa `useState` local a propósito.
- **Logo:** componente `components/logo.tsx`.
- **Imágenes de tecnologías:** viven en `public/stack/*.svg`.
- **Idioma:** la UI va en español; el código (nombres, tipos, props) en inglés.
- **SEO:** `app/sitemap.ts`, `app/robots.ts`, `app/icon.svg`, `app/apple-icon.tsx` y los
  `openGraph` en `app/layout.tsx`.

## Dónde vive este proyecto

El desarrollo **se hace en el Dev Server** (GMKtec), no en la Pi 5:

```
~/proyects/bestackdevelopment/webpage     # usuario: dev
```

- Remoto git: `github.com/bestackdevelopment/bestack-webpage` (alias SSH `github-bot`).
- La copia que vivía en FileBrowser (`/BeStackDevelopment/BeStackDevelopment_WebPage/`)
  era el **prototipo de v0**, ya superado y retirado el 23-sep-2026. No usarla como base.
