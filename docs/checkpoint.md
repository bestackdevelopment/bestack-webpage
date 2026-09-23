# Checkpoint — bestack-webpage

Estado del proyecto. Sirve para retomar el trabajo rápido en otra sesión, con cualquier agente.

**Última verificación:** 23 de septiembre de 2026 (subfire, leyendo el código en el Dev Server).

## Qué es

Sitio corporativo de **BeStack Development** (agencia de desarrollo web). Es la cara
comercial: explica los servicios, muestra ejemplos de trabajo y capta prospectos por
formulario. A futuro incluye un blog.

## Estado del repositorio

| | |
|---|---|
| Ruta | `~/proyects/bestackdevelopment/webpage` (Dev Server, usuario `dev`) |
| Remoto | `github.com/bestackdevelopment/bestack-webpage` (alias SSH `github-bot`) |
| Rama | `main` |
| Último commit | `d9b448d` — *fix: og:locale a es_MX* (8-sep-2026) |
| Working tree | **limpio** |
| vs `origin/main` | **al día** (mismo SHA) |
| Visibilidad | público (el Patrón lo pasará a privado; no es urgente, no hay secretos) |
| Último cambio de código | 8-sep-2026 |

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind v4 (CSS-first) · @tabler/icons-react ·
react-hook-form + zod · zustand · shadcn/ui (Button, Card, Accordion sobre Radix).

## Rutas

| Ruta | Estado |
|---|---|
| `/` | Funcional (home completa) |
| `/contacto` | Funcional, **pero el envío está simulado** (ver pendiente 3) |
| `/proyectos` | **En standby a propósito** — muestra "Próximamente" |
| `/proyectos/[slug]` | **No existe** — hay que construirlo |
| `/servicios/paginas-informativas` | Funcional (diseño propio) |
| `/servicios/paginas-corporativas` | Funcional (vía `service-landing.tsx`) |
| `/servicios/ecommerce` | Funcional (vía `service-landing.tsx`) |
| `/servicios/mantenimiento-web` | Funcional (vía `service-landing.tsx`) |
| `/servicios/finaliza-tu-web` | Funcional (vía `service-landing.tsx`) |
| `/ejemplos` y `/ejemplos/[slug]` | **No existen** — es el renombre de `/proyectos` (pendiente 1) |
| Blog | **No existe** — fase 5 |

## Pendientes (verificados en código, 23-sep-2026)

1. **Construir la sección de Ejemplos.** Renombrar "Portfolio" → **"Ejemplos"** y la ruta
   `/proyectos` → `/ejemplos`. Hoy `/proyectos` muestra "Próximamente" porque el contenido
   no estaba definido; **ya está definido** en `docs/ejemplos.md` (8 desarrollos agrupados
   en 4 páginas). Falta el índice, las páginas de detalle y los placeholders de imagen.

2. **Construir `/ejemplos/[slug]`.** No existe. La estructura de la página está especificada
   en `docs/ejemplos.md` (sección "Estructura de la página de ejemplo").

3. **🔴 El formulario de contacto simula el envío.** En `components/contact-form.tsx`
   (función `onSubmit`, ~línea 49) valida con Zod, espera 1.5 s con un `setTimeout` y muestra
   el mensaje de éxito — pero **no manda nada a ningún lado** (hay un `<PLACEHOLDER>` y un
   `console.log`). Es peor que estar roto: el prospecto cree que ya escribió. Hay que
   conectarlo a un backend real (correo o servicio de formularios) y dejar rastro de envío.

4. **Dominio.** `lib/site.ts` tiene `https://bestackdevelopment.com` como placeholder y ese
   dominio **no resuelve**. Falta registrarlo y definir la URL real de producción
   (`NEXT_PUBLIC_SITE_URL`).

5. **Sin despliegue.** No hay configuración de deploy en el repo (ni Vercel, ni Netlify, ni
   Docker). El sitio solo corre en local.

6. **Blog (fase 5).** No existe nada. La estrategia acordada está en
   `docs/plan-de-trabajo.md` (fase 5).

7. **🔴 Testimonios falsos en el home.** La sección `{/* Testimonials */}` de `app/page.tsx`
   (~líneas 148-180) muestra **3 testimonios inventados**: el mismo texto repetido tres veces,
   etiquetados "Cliente 1", "Cliente 2" y "Cliente 3" con "Empresa" como cargo. No hay
   testimonios reales todavía. La sección se sustituye por **"Cómo trabajamos"** (copy en
   `docs/contenido-home.md`). Los testimonios vuelven cuando existan, con nombre y cargo reales.

8. **"Proyectos Destacados" en standby.** `app/page.tsx` ~límite 128 muestra "Estamos preparando
   nuestra selección de proyectos". Debe activarse con 3 tarjetas que enlacen a los ejemplos
   (`docs/contenido-home.md`).

## Cómo proceder

1. Leer `docs/plan-de-trabajo.md` para el orden de las fases.
2. Leer `docs/ejemplos.md` antes de tocar `/proyectos` o `/ejemplos` — ahí está el copy y la
   estructura ya definidos. **No inventar contenido de proyectos.**
3. Respetar las convenciones de `AGENTS.md`.
4. **Antes de dar algo por terminado:** `pnpm lint` y `pnpm build`, y verificar en navegador
   real (no basta con que compile). El Patrón verifica los entregables web en navegador.
5. Al terminar: **actualizar este archivo** (estado del repo, rutas, pendientes).
6. Si una decisión de producto o de contenido cambia, registrarla en
   `docs/plan-de-trabajo.md` (tabla de decisiones) y en `docs/ejemplos.md` si aplica.
   **Lo que no está escrito no existe para el siguiente agente.**

## Reglas de contenido

- **No inventar métricas.** Los números de resultados de cada ejemplo los aporta el Patrón.
  Si no hay número, la sección se deja sin métricas — nunca se estiman.
- **No mencionar clientes que no se pueden firmar.** Los proyectos hechos para la agencia
  Lanzaweb quedan fuera del sitio.
- **LaserBox se presenta como cliente.** No mencionar que el Patrón es socio del taller.
- **Capturas de pantalla:** las toma el Patrón. En el código se dejan **placeholders** con
  las medidas indicadas en `docs/ejemplos.md`.
