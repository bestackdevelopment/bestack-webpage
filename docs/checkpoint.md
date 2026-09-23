# Checkpoint — bestack-webpage

Estado del proyecto. Sirve para retomar el trabajo rápido en otra sesión, con cualquier agente.

**Última verificación:** 23 de septiembre de 2026 (agente, tras ejecutar la Fase 2).

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
| Último commit | `741179b` — *feat: seccion de Ejemplos y limpieza del home (Fase 2)* |
| Working tree | **limpio** |
| vs `origin/main` | 4 commits adelante + la Fase 2, SIN push (el Patrón no ha autorizado subirlos) |
| Visibilidad | público (el Patrón lo pasará a privado; no es urgente, no hay secretos) |
| Último cambio de **código** | 23-sep-2026 (Fase 2: Ejemplos + home) |

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind v4 (CSS-first) · @tabler/icons-react ·
react-hook-form + zod · zustand · shadcn/ui (Button, Card, Accordion sobre Radix).

## Rutas

| Ruta | Estado |
|---|---|
| `/` | ✅ Funcional, sin testimonios falsos y con Proyectos Destacados activos |
| `/contacto` | Funcional, **pero el envío está simulado** (ver pendiente 6) |
| `/ejemplos` | ✅ **Nuevo** — índice con filtros por tipo de solución y las 4 tarjetas |
| `/ejemplos/[slug]` | ✅ **Nuevo** — 4 páginas SSG (bidhara, laserbox, sysop, bahia), con las 8 secciones |
| `/proyectos` | ❌ **Eliminado** — renombrado a `/ejemplos` |
| `/servicios/paginas-informativas` | Funcional (diseño propio) |
| `/servicios/paginas-corporativas` | Funcional (vía `service-landing.tsx`) |
| `/servicios/ecommerce` | Funcional + enlace al ejemplo laserbox |
| `/servicios/mantenimiento-web` | Funcional (vía `service-landing.tsx`) |
| `/servicios/finaliza-tu-web` | Funcional (vía `service-landing.tsx`) |
| Blog | **No existe** — fase 3 |

## Pendientes (verificados en código, 23-sep-2026)

Ordenados según las fases de `docs/plan-de-trabajo.md`.

### Fase 2 — Ejemplos y home ✅ (ejecutada 23-sep-2026)

1. ✅ **Sección de Ejemplos construida.** Renombrado Portfolio → "Ejemplos" y `/proyectos`
   → `/ejemplos` en los 8 puntos (navbar, footer, hero del home, sitemap, landing
   paginas-informativas). El índice tiene filtros por tipo de solución (Sistema a medida ·
   Agente IA · Ecommerce · Sitio corporativo · SaaS) y las 4 tarjetas con placeholder de
   imagen, giro, tipo, estado, resumen y enlace "Ver el ejemplo".
2. ✅ **`/ejemplos/[slug]` construido** (4 páginas SSG). Estructura de 8 secciones:
   portada, el reto, la solución, cómo se aplicó (con hueco del diagrama), por qué así,
   qué cambió (cualitativo, sin métricas), galería con lightbox y CTA + navegación
   anterior/siguiente. `generateStaticParams` + metadata SEO por ejemplo.
3. ✅ **Testimonios falsos eliminados.** La sección `{/* Testimonials */}` del home se
   sustituyó por **"Cómo trabajamos"** (copy en `docs/contenido-home.md`): encabezado + bajada
   + 4 pasos en 2×2.
4. ✅ **"Proyectos Destacados" activos.** 3 tarjetas (SysOp, Bidhara, LaserBox) que enlazan a
   `/ejemplos/[slug]` + botón "Ver todos los ejemplos". La cuarta (Bahía) solo en el índice.

**Registros de la Fase 2 (decisiones tomadas al implementar):**
- `lib/ejemplos.ts` es la fuente de datos en código (tipa el copy de `docs/ejemplos.md`).
  `components/ejemplo-card.tsx` (tarjeta), `ejemplos-explorador.tsx` (filtros en cliente),
  `ejemplo-gallery.tsx` (lightbox en cliente), `ejemplo-cover.tsx` (placeholder de imagen).
- Capturas: el Patrón las toma; el código deja huecos (las medidas en `docs/ejemplos.md`).
  En la galería el lightbox ya funciona y muestra el placeholder hasta que exista el archivo.
- El openGraph de las páginas de ejemplo **no incluye imagen** hasta que exista `og.jpg`
  (evita el preview roto); el hueco está comentado en `app/ejemplos/[slug]/page.tsx`.
- `/servicios/ecommerce` enlaza al ejemplo laserbox (funcionalidad de `docs/ejemplos.md`);
  las demás landings no llevan enlace porque no hay ejemplo correspondiente definido.
- **Verificación:** `pnpm lint` ✅ y `pnpm build` ✅ (18 rutas, 4 SSG). Verificado con curl que
  `/` no tiene testimonios ni "en standby", que los links internos responden y que
  `/proyectos` da 404. **Pendiente del Patrón:** revisar en navegador real las páginas nuevas.

### Fase 3 — Blog

5. **No existe nada del blog.** Ni rutas, ni lectura de contenido, ni caché. Estrategia y
   trampas documentadas en `docs/plan-de-trabajo.md` (Fase 3). **Empezar por la prueba mínima:**
   una sola página que lea un post de Notion, lo renderice y quede cacheada con revalidación
   por tiempo — antes de construir índice y plantillas.

### Fase 4 — Formulario con Resend + dominio

6. **🔴 El formulario de contacto simula el envío.** En `components/contact-form.tsx`
   (función `onSubmit`, ~línea 49) valida con Zod, espera 1.5 s con un `setTimeout` y muestra
   el mensaje de éxito — pero **no manda nada a ningún lado** (hay un `<PLACEHOLDER>` y un
   `console.log`). Es peor que estar roto: el prospecto cree que ya escribió. Se conecta a
   **Resend** cuando el dominio esté registrado y verificado.

7. **Dominio.** `lib/site.ts` tiene `https://bestackdevelopment.com` como placeholder y ese
   dominio **no resuelve**. Falta registrarlo y definir la URL real (`NEXT_PUBLIC_SITE_URL`).

### Fase 5 — Publicación

8. **Sin despliegue.** No hay configuración de deploy en el repo (ni Vercel, ni Netlify, ni
   Docker). El sitio solo corre en local. **No se publica hasta que el Patrón lo autorice.**

## Cómo proceder

1. Leer `docs/plan-de-trabajo.md` para el orden de las fases.
2. Leer `docs/ejemplos.md` antes de tocar `/ejemplos` — ahí está el copy y la
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
- **Publicar no es decisión del agente.** El sitio no sale a producción hasta que el Patrón
  lo autorice explícitamente.
- **Capturas de pantalla:** las toma el Patrón. En el código se dejan **placeholders** con
  las medidas indicadas en `docs/ejemplos.md`.
