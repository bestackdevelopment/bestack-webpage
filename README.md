# BeStack Development — Sitio web

Sitio corporativo de la agencia BeStack Development.

## Stack

- **Next.js 16** (App Router, React Server Components)
- **React 19** + **TypeScript**
- **TailwindCSS v4** (configuración CSS-first en `app/globals.css`)
- **@tabler/icons-react** — única librería de iconos
- **react-hook-form** + **zod** (`@hookform/resolvers/zod`) para el formulario de contacto
- **zustand** — disponible para estado global (ver `store/`)
- **shadcn/ui** para `Button`, `Card` y `Accordion` (sobre Radix UI)

## Comandos

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build
pnpm lint
```

## Configuración

- `NEXT_PUBLIC_SITE_URL` — URL pública del sitio, usada por `metadataBase`,
  `sitemap.xml` y `robots.txt`. Por defecto `https://bestackdevelopment.com`
  (placeholder). Definir en producción. Ver `lib/site.ts`.
- Email de contacto y nombre del sitio también viven en `lib/site.ts`.

## Rutas

| Ruta | Descripción |
|---|---|
| `/` | Home |
| `/contacto` | Formulario de cotización (validación Zod) |
| `/proyectos` | **En standby** — placeholder "Próximamente" hasta definir los proyectos |
| `/servicios/paginas-informativas` | Landing de servicio |
| `/servicios/paginas-corporativas` | Landing de servicio |
| `/servicios/ecommerce` | Landing de servicio |
| `/servicios/mantenimiento-web` | Landing de servicio |
| `/servicios/finaliza-tu-web` | Landing de servicio |

## Notas

- **Proyectos / Portfolio en standby:** las rutas y enlaces se conservan, pero muestran
  un estado vacío. Falta decidir qué proyectos se incluirán y construir
  `/proyectos/[slug]`.
- **Formulario de contacto:** la validación (Zod) funciona, pero el envío todavía **no
  está conectado** a ningún backend (`components/contact-form.tsx`, `onSubmit`).
- **Páginas de servicio:** `ecommerce`, `mantenimiento-web`, `paginas-corporativas` y
  `finaliza-tu-web` comparten `components/service-landing.tsx` y solo aportan su objeto
  de datos. `paginas-informativas` tiene diseño propio.
- **Estado global (Zustand):** crear stores en `store/` cuando aparezca estado
  compartido entre componentes. El menú móvil del navbar usa `useState` local a
  propósito.
- **Iconos:** usar siempre `@tabler/icons-react`. No añadir `lucide-react` ni SVGs de
  iconos inline.
- **Colores:** usar los tokens del tema (`primary`, `secondary`, `accent`…) definidos en
  `app/globals.css`, no hex sueltos.
- Los logos de tecnologías del marquee viven en `public/stack/*.svg`.
- SEO: `app/sitemap.ts`, `app/robots.ts`, `app/icon.svg`, `app/apple-icon.tsx` y los
  `openGraph` en `app/layout.tsx`.
