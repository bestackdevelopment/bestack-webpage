# Checkpoint — bestack-webpage

Estado del proyecto. Sirve para retomar el trabajo rápido en otra sesión, con cualquier agente.

> ⚠️ **El estado del proyecto vive en Notion.** Este archivo es solo el estado *técnico* del
> repo (rutas, verificación, cómo proceder). Antes de retomar: abre la página del proyecto en
> Notion y revisa las fases y pendientes abiertos. Ver `AGENTS.md` → *Fuente de verdad*.
>
> - Proyecto «BeStack — Sitio web» → https://app.notion.com/p/BeStack-Sitio-web-c527e60df569827daae1012fb845f05e
> - Raíz de proyectos → https://app.notion.com/p/BeStack-Development-Proyectos-9977e60df5698249b6b2814224f5ad09

**Última verificación:** 7 de octubre de 2026 (agente: **diagramas de Bidhara y LaserBox con
zonas y actores** — typecheck, ESLint y build limpios, y verificado **en el navegador** contra el
servidor levantado: 2 zonas y 8 nodos en Bidhara / 9 en LaserBox, aristas y handles correctos,
0 errores de JS. Ver la fila del 7-oct en `docs/plan-de-trabajo.md`.)

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
| Última actualización | 7-oct-2026 (diagramas de los casos con zonas y actores; icono propio por tarjeta en «La solución»; copy publicado sin guion largo) |
| Working tree | **limpio** |
| vs `origin/main` | **Sincronizado** — push hecho el 7-oct-2026 |
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
- **Del Patrón (contenido):** revisar en navegador; capturas de los casos de uso (hoy
  placeholders); números de «Qué cambió» — en **LaserBox quedó cualitativo por decisión suya**;
  aprobar el tono del copy del resto, que sigue en borrador v1 (Bidhara, SysOp y Bahía).
  *Resuelto (6-oct-2026):* **LaserBox ya tiene contenido aprobado e implementado**, y se
  confirmó que **el sistema sí corre** en el taller — lo que falta es la tienda en línea.

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
7. **Vista previa:** el sitio se revisa con `next start` en el Dev Server. Si se rehace el build con
   ese proceso arriba, **reiniciarlo en el mismo puerto**: el proceso viejo sirve HTML que apunta a
   una hoja de estilos que ya no existe y la página se ve **sin CSS** (la hoja contesta 500, no 404).
   Se ve como un bug de estilos y no lo es.

## Reglas de contenido

- **No inventar métricas.** Los números los aporta el Patrón; sin número, la sección se deja
  sin métricas.
- **No mencionar clientes que no se pueden firmar.** Los proyectos de Lanzaweb quedan fuera.
- **LaserBox se presenta como cliente.** No mencionar la sociedad con el taller.
- **Publicar no es decisión del agente.**
- **El copy publicado no lleva guion largo** (`—`): en el texto que ve el visitante se usan coma,
  dos puntos o paréntesis. Aplica a `lib/casos-de-uso.ts` y a los docs de copy; los separadores
  de formato de los `.md` internos no cuentan (decisión del Patrón, 7-oct-2026).
- **Capturas de pantalla:** las toma el Patrón; en el código se dejan placeholders con las
  medidas de `docs/casos-de-uso.md`.
- **Los agentes no se nombran.** El nombre del agente es interno del cliente: no se publica en
  las piezas ni en los diagramas de los casos de uso.
- **La lista de stack no se publica** en «Cómo se aplicó»: la sección se sostiene con el
  diagrama. El detalle técnico vive en el repo de cada proyecto.
- **El diagrama muestra quién entra y qué es público.** Zonas con nombre (red privada / internet)
  y los actores como nodo propio (el celular del dueño, el cliente). Los nodos del diagrama sí
  conservan el nombre técnico. Aplica a todos los casos con la misma estructura: Bidhara y
  LaserBox (decisión del Patrón, 7-oct-2026).
