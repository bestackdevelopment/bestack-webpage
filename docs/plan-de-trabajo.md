# Plan de trabajo — bestack-webpage

**Última actualización:** 7 de octubre de 2026 (subfire).

Roadmap del sitio corporativo de BeStack Development: qué sigue, en qué orden y cómo
se da por terminado cada tramo.

## Objetivo del sitio

Ser la cara comercial de BeStack: explicar los servicios, **demostrar con ejemplos lo que
se puede construir en distintos giros**, y captar prospectos por formulario. Más adelante, un
blog con lo que se aplica en los proyectos.

## Fases

| # | Fase | Estado |
|---|---|---|
| 1 | Base del sitio (home, 5 landings de servicio, contacto, SEO, navbar/footer) | ✅ Terminada (8-sep-2026) |
| 2 | Sección de **Casos de uso** + limpieza del home | ✅ **Terminada (23-sep-2026)** — ver checkpoint |
| 3 | **Blog** (Notion como CMS, sin rebuild) | ⏳ **Siguiente** |
| 4 | Formulario con **Resend** + dominio | ⏳ Al final |
| 5 | **Publicación** | ⏳ Solo cuando el Patrón la autorice |

> **Orden redefinido por el Patrón el 23-sep-2026.** El blog **subió** (hay que ver cómo funciona
> antes de construir el resto); el formulario y el dominio **bajaron al final** (la integración
> con Resend es corta y necesita el dominio ya verificado); y la publicación es una **decisión
> explícita del Patrón**: nada se publica hasta que él diga que el sitio está completo.

### Fase 1 — Base del sitio ✅

Entregado el 8-sep-2026 (commits `decf322` y `d9b448d`): home completa, 5 landings de
servicio, formulario de contacto con validación, navbar/footer/logo, marquee de tecnologías
y SEO on-page (`sitemap.ts`, `robots.ts`, `icon.svg`, Open Graph).

**Hueco conocido:** el contenido de proyectos quedó sin definir, por eso `/proyectos` se
dejó en "Próximamente" a propósito.

### Fase 2 — Contenido real: sección de Casos de uso + home ✅

**Ejecutada el 23-sep-2026.** Ver el detalle completo en `docs/checkpoint.md`.

**2.1 — Sección de Casos de uso** ✅

- Renombrado **"Portfolio" → "Casos de uso"** y la ruta **`/proyectos` → `/casos-de-uso`** (8 puntos).
- Índice `/casos-de-uso` con las 4 entradas y **filtros por tipo de solución**.
- Páginas de detalle `/casos-de-uso/[slug]` (4), con la estructura de 8 secciones.
- Contenido en `lib/casos-de-uso.ts` (tipa `docs/casos-de-uso.md`).

**2.2 — Home: quitar el contenido de relleno** ✅

- Testimonios falsos → **"Cómo trabajamos"** (copy de `docs/contenido-home.md`).
- **"Proyectos Destacados"** activos con 3 tarjetas hacia los ejemplos.
- Imágenes: **placeholders** (las capturas las toma el Patrón).

**Criterio de aceptación:** ✅ `pnpm lint` y `pnpm build` en verde; el home sin testimonios
falsos ni textos de "en standby"; ninguna parte dice "Portfolio"; 4 páginas de ejemplo SSG.
**Pendiente del Patrón:** revisar las páginas nuevas en navegador real.

### Fase 3 — Blog ⏳

**Por qué subió:** el Patrón quiere **ver funcionando el mecanismo** antes de seguir. Es la
parte con más riesgo técnico y la que más se va a usar, así que se valida temprano.

**Requisito del Patrón: publicar sin re-build ni deploy.**

1. **El contenido vive fuera del repo** (no posts en `.md` dentro del proyecto — eso obliga
   a build y deploy por cada post).
2. **CMS: Notion.** El Patrón ya lo usa a diario, ya existe la integración, cuesta $0.
   Cada post es una página con un estado "Publicado"; lo que está en borrador no sale.
3. **Las páginas del blog se sirven cacheadas** (`use cache` + `cacheTag` + `cacheLife` en
   Next 16). Se arma una vez y se sirve del caché.
4. **Al publicar, un webhook pega a `/api/revalidate`** y solo se regeneran las páginas del
   blog. `cacheLife` queda como red de seguridad si el webhook falla.
5. **Imágenes por Cloudinary** (cuenta existente del Patrón, `dfnqqumsc`).

**Empezar por una prueba mínima, no por el blog completo.** Antes de construir índice,
categorías y plantillas: **una sola página que lea un post de Notion, lo renderice y quede
cacheada con revalidación por tiempo.** Eso valida las dos incógnitas reales (el renderizado
de Notion y el caché) sin construir todo el blog. Si algo no cuadra, se descubre ahí y no
después de 20 archivos.

> ⚠️ **Trampa de Notion:** las imágenes que se **arrastran** al editor se suben a Notion y su
> URL **expira en ~1 hora**. Hay que insertarlas como **link externo** (`/image` → pestaña
> "Link" → pegar la URL de Cloudinary): así el bloque es `type: external` y no expira nunca.
> Verificado en la documentación de Notion: *"These links never expire and will always be
> returned as-is in API responses."*

> ⚠️ **Dependencia de URL pública.** La revalidación **por tiempo** (`cacheLife`) se puede probar
> en local. La revalidación **on-demand** —el webhook que dispara Notion al publicar— necesita
> una **URL alcanzable desde internet**: en local no se puede probar de punta a punta. Cuando
> se llegue ahí: despliegue de vista previa o túnel temporal. **No reportar el mecanismo como
> "funcionando" hasta probar el webhook contra una URL pública** — la mitad de caché sí es
> verificable en local, la otra no.

**Criterio de aceptación:** publicar un post en Notion y verlo aparecer en el sitio **sin
volver a construir**. Y el mecanismo descrito en el README del repo, para poder retomarlo.

### Fase 4 — Formulario con Resend + dominio ⏳

**Por qué al final:** la integración es corta y **Resend necesita el dominio ya verificado**
(registros DNS), así que no tiene sentido hacerla antes.

- Registrar el dominio (hoy `bestackdevelopment.com` es placeholder en `lib/site.ts` y no
  resuelve).
- Verificarlo en **Resend** y conectar el formulario a esa API.
- Notificación al correo de BeStack + confirmación real al prospecto.
- Anti-spam (honeypot o captcha) y rastro de envío.

**Criterio de aceptación:** enviar el formulario y **recibir el correo**. Verificado, no supuesto.

### Fase 5 — Publicación ⏳

**Es decisión del Patrón, no del agente: nada se publica hasta que él diga que el sitio está
completo.**

- Definir hosting y desplegar.
- `NEXT_PUBLIC_SITE_URL` con la URL real de producción.
- Verificar en producción: home, servicios, ejemplos y formulario, en navegador real.

**Criterio de aceptación:** sitio en vivo con dominio propio, verificado por el Patrón.

## Orden y por qué

**2 → 3 → 4 → 5.** Los ejemplos primero (es el contenido que hoy bloquea la página y el relleno
que hay que quitar); el blog después, porque hay que **ver funcionando** el mecanismo antes de
construir el resto; luego el formulario y el dominio juntos, porque Resend los necesita en ese
orden; y la publicación al final, **solo con la autorización del Patrón**.

## Decisiones tomadas

| Fecha | Decisión | Por qué |
|---|---|---|
| 23-sep | "Casos de uso" en vez de "Portafolio" | No obliga a probar relación con clientes (no hay testimonios) y permite organizar por giro: *"esto es lo que se puede hacer"*. |
| 23-sep | 8 desarrollos agrupados en **4 páginas** | 6 de los 8 son la misma fórmula (catálogo/ecommerce + sistema + agente) aplicada dos veces; sueltos se leen como relleno. |
| 23-sep | **Sin testimonios** → sección "Cómo trabajamos" | No hay testimonios reales. Uno genérico resta más de lo que suma. La sección de proceso se pone en su lugar. |
| 23-sep | **LaserBox se presenta como cliente** | El sitio habla como BeStack, empresa. No se menciona que el Patrón es socio del taller. |
| 23-sep | Los 12 proyectos de **Lanzaweb quedan fuera** | Fueron trabajo como empleado, no de BeStack. |
| 23-sep | Proyectos viejos descartados por el Patrón | "Ya están viejos o de plano no me gustan". |
| 23-sep | **Capturas: las toma el Patrón** | En el código se dejan placeholders con las medidas indicadas en `docs/casos-de-uso.md`. |
| 23-sep | Repo sigue **público** por ahora | El Patrón lo pasará a privado más adelante. No hay secretos en el repo. |
| 23-sep | **El blog sube al 3.º lugar** | El Patrón quiere ver cómo funciona antes de construir el resto. |
| 23-sep | **El formulario se hace con Resend, al final** | La integración es corta y necesita el dominio verificado. |
| 23-sep | **La publicación la autoriza el Patrón** | No se publica hasta que él diga que el sitio está completo. |
| 7-oct | El diagrama de cada caso lleva **zonas** (lo privado, lo público) y los **actores** como nodo propio | Un dibujo que solo lista piezas no dice dónde queda el negocio ni dónde su cliente. El Patrón lo pidió así: *«no está bien representado que el catálogo va hacia internet y el cliente, y que la nube privada es accesible desde el dueño y su celular»*. Regla de la sección: aplica a los casos con la misma estructura (Bidhara y LaserBox). |
| 7-oct | El diagrama **no lleva el paso de WhatsApp** | El cierre del pedido vive en el copy; el diagrama se sostiene con la zona y los actores. |
| 7-oct | **Bahía: una página por tipo de espacio** es la cuarta decisión de «Por qué así» | Elegida por el Patrón entre dos candidatas. Cada espacio se busca con su propio término («coworking», «sala de juntas»), y cada `/espacios/<tipo>` trae su propio `title` y `description`: una página por término es lo que se puede posicionar. |
| 7-oct | **Bahía: la cuarta pieza del diagrama es «Contacto», no «Solicitud de cotización»** | Indicación del Patrón: representa la **comunicación** (el visitante escribe y el mensaje llega al correo del negocio). El formulario envía de verdad (Resend, verificado). |
| 7-oct | **Bahía: «plaza turística» estaba mal; es Chetumal, Quintana Roo** | El borrador v1 describía mal dónde está el negocio. Se verificó contra el sitio publicado antes de publicar un dato falso. |
| 7-oct | **Bahía sí lleva «Qué cambió»** aunque no tenía sitio antes | El cambio existe: pasa de no tener presencia en internet a tenerla. Distinto de SysOp, donde no había operación anterior que medir. |

## Datos que faltan (los aporta el Patrón)

1. **Los números de resultados** de cada ejemplo (ventas al día, tiempo ahorrado, volumen).
   Sin número, la sección "Qué cambió" se deja sin métricas — **no se estiman**.
2. **Aprobación del tono** del copy: ✅ **los cuatro casos aprobados** (Bahía el 7-oct-2026).
   Queda la **cobertura**: "Finaliza tu Web" es el único servicio sin un caso que lo respalde.
3. **El dominio** que va a usar (lo necesita la Fase 4).
4. Confirmar si el sistema de operación de **LaserBox ya corre** o también va marcado como
   en desarrollo.
