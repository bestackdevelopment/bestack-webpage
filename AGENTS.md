# AGENTS.md

Guía para agentes de IA que trabajan en este repositorio. Léela antes de tocar código.

## Proyecto

**bestack-webpage** — sitio corporativo de BeStack Development (agencia de desarrollo web).

> **Punto de estado actual**: leer **`docs/checkpoint.md`** antes de retomar el trabajo.
> Ahí está el estado real, los pendientes y cómo proceder.

## Documentación del proyecto

| Archivo | Qué contiene |
|---|---|
| `docs/checkpoint.md` | Estado actual, pendientes verificados y cómo proceder. **Empezar aquí.** |
| `docs/plan-de-trabajo.md` | Fases, orden de trabajo, criterios de aceptación y decisiones tomadas. |
| `docs/ejemplos.md` | Definición de la sección de Ejemplos: qué se muestra, estructura de las páginas y copy. |

**Al terminar una tarea, actualizar `docs/checkpoint.md`.** Es el mecanismo para que
cualquier agente (o el Patrón) pueda retomar sin releer el historial completo.

## Stack

- **Next.js 16** (App Router, React Server Components)
- **React 19** + **TypeScript**
- **TailwindCSS v4** (configuración CSS-first en `app/globals.css`)
- **@tabler/icons-react** — única librería de iconos
- **react-hook-form** + **zod** (`@hookform/resolvers/zod`) para formularios
- **zustand** — disponible para estado global (crear stores en `store/`)
- **shadcn/ui** para `Button`, `Card` y `Accordion` (sobre Radix UI)

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
- **Páginas de servicio:** `ecommerce`, `mantenimiento-web`, `paginas-corporativas` y
  `finaliza-tu-web` comparten `components/service-landing.tsx` y solo aportan su objeto de
  datos. `paginas-informativas` tiene diseño propio.
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
