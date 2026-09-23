# Plan de trabajo — bestack-webpage

**Última actualización:** 23 de septiembre de 2026 (subfire).

Roadmap del sitio corporativo de BeStack Development: qué sigue, en qué orden y cómo
se da por terminado cada tramo.

## Objetivo del sitio

Ser la cara comercial de BeStack: explicar los servicios, **demostrar con ejemplos lo que
se puede construir en distintos giros**, y captar prospectos por formulario. A futuro, un
blog con lo que se aplica en los proyectos.

## Fases

| # | Fase | Estado |
|---|---|---|
| 1 | Base del sitio (home, 5 landings de servicio, contacto, SEO, navbar/footer) | ✅ Terminada (8-sep-2026) |
| 2 | Sección de **Ejemplos** (índice + 4 páginas de detalle) | ⏳ Siguiente |
| 3 | Formulario de contacto funcional | ⏳ Pendiente (corto) |
| 4 | Deploy + dominio | ⏳ Pendiente |
| 5 | Blog | ⏳ Pendiente (fase mayor) |

### Fase 1 — Base del sitio ✅

Entregado el 8-sep-2026 (commits `decf322` y `d9b448d`): home completa, 5 landings de
servicio, formulario de contacto con validación, navbar/footer/logo, marquee de tecnologías
y SEO on-page (`sitemap.ts`, `robots.ts`, `icon.svg`, Open Graph).

**Hueco conocido:** el contenido de proyectos quedó sin definir, por eso `/proyectos` se
dejó en "Próximamente" a propósito.

### Fase 2 — Contenido real: sección de Ejemplos + home ⏳ SIGUIENTE

**Por qué ahora:** es lo que desbloquea `/proyectos` (hoy en standby esperando justo esta
definición) y lo que quita el contenido de relleno del home. Sin esto, el sitio no demuestra
nada y enseña testimonios falsos.

**2.1 — Sección de Ejemplos**

- Renombrar **"Portfolio" → "Ejemplos"** y la ruta **`/proyectos` → `/ejemplos`**. Son 8 puntos
  (líneas al 23-sep-2026):
  `components/navbar.tsx` (33/36 y 73/77 — menú escritorio y móvil) · `components/footer.tsx`
  (75/78) · `app/page.tsx` (72 "Ver Portfolio" y 128) · `app/proyectos/page.tsx` (9 metadata y
  23 encabezado) · `app/sitemap.ts` (8) · y el enlace de
  `app/servicios/paginas-informativas/page.tsx` (158, que ya dice "Ver ejemplos" pero apunta a
  `/proyectos`).
- Índice `/ejemplos` con las 4 entradas y **filtros por tipo de solución**.
- Páginas de detalle `/ejemplos/[slug]` (4), con la estructura de 8 secciones.
- Contenido y estructura: **`docs/ejemplos.md`** — no inventar nada fuera de ahí.

**2.2 — Home: quitar el contenido de relleno**

- Reemplazar la sección de testimonios (`app/page.tsx` ~148-180) por **"Cómo trabajamos"**.
  Hoy tiene **3 testimonios falsos idénticos** ("Cliente 1/2/3 · Empresa"). Copy y estructura
  en **`docs/contenido-home.md`**.
- Activar **"Proyectos Destacados"** (`app/page.tsx` ~128): hoy dice "EN STANDBY" y no enlaza a
  nada. Debe mostrar 3 tarjetas hacia los ejemplos.
- Imágenes: **placeholders** (las capturas las toma el Patrón).

**Criterio de aceptación:** las 4 páginas de ejemplo renderizan en navegador real y sin links
muertos; el home no tiene testimonios falsos ni textos de "en standby"; ninguna parte del sitio
dice "Portfolio"; `pnpm lint` y `pnpm build` en verde.

### Fase 3 — Formulario de contacto funcional ⏳

**Por qué:** hoy el formulario **simula** el envío (`components/contact-form.tsx`, `onSubmit`).
Mientras el sitio no esté publicado no se pierden prospectos, pero no puede salir a
producción así.

- Conectar `onSubmit` a un backend real (correo o servicio de formularios).
- Notificación al correo de BeStack + confirmación real al prospecto.
- Anti-spam (honeypot o captcha) y rastro de envío.

**Criterio de aceptación:** enviar el formulario desde el sitio publicado y **recibir el
correo**. Verificado, no supuesto.

### Fase 4 — Deploy + dominio ⏳

- Registrar el dominio (hoy `bestackdevelopment.com` es placeholder en `lib/site.ts` y no
  resuelve). Se puede registrar en paralelo: la propagación tarda.
- Definir hosting y desplegar.
- `NEXT_PUBLIC_SITE_URL` con la URL real de producción.
- Verificar en producción: home, servicios, ejemplos, formulario.

**Criterio de aceptación:** sitio en vivo con dominio propio, verificado en navegador real.

### Fase 5 — Blog ⏳

**Requisito del Patrón: publicar sin re-build ni deploy.**

Estrategia acordada:

1. **El contenido vive fuera del repo** (no posts en `.md` dentro del proyecto — eso obliga
   a build y deploy por cada post).
2. **CMS: Notion.** El Patrón ya lo usa a diario, ya existe la integración, cuesta $0.
   Cada post es una página con un estado "Publicado"; lo que está en borrador no sale.
3. **Las páginas del blog se sirven cacheadas** (`use cache` + `cacheTag` + `cacheLife` en
   Next 16). Se arma una vez y se sirve del caché.
4. **Al publicar, un webhook pega a `/api/revalidate`** y solo se regeneran las páginas del
   blog. `cacheLife` queda como red de seguridad si el webhook falla.
5. **Imágenes por Cloudinary** (cuenta existente del Patrón, `dfnqqumsc`).

> ⚠️ **Trampa de Notion:** las imágenes que se **arrastran** al editor se suben a Notion y su
> URL **expira en ~1 hora**. Hay que insertarlas como **link externo** (`/image` → pestaña
> "Link" → pegar la URL de Cloudinary): así el bloque es `type: external` y no expira nunca.
> Verificado en la documentación de Notion: *"These links never expire and will always be
> returned as-is in API responses."*

## Orden y por qué

**2 → 3 → 4 → 5.** Los ejemplos primero porque son el contenido que hoy bloquea la página;
el formulario después porque es corto y debe quedar antes de publicar; el dominio se puede
registrar en paralelo a la fase 2-3 porque la propagación tarda; el blog al final, cuando el
sitio ya esté vendiendo.

## Decisiones tomadas (23-sep-2026)

| Decisión | Por qué |
|---|---|
| "Ejemplos" en vez de "Portafolio" | No obliga a probar relación con clientes (no hay testimonios) y permite organizar por giro: *"esto es lo que se puede hacer"*. |
| 8 desarrollos agrupados en **4 páginas** | 6 de los 8 son la misma fórmula (catálogo/ecommerce + sistema + agente) aplicada dos veces; sueltos se leen como relleno. |
| **Sin testimonios** → sección "Cómo trabajamos" | No hay testimonios reales. Uno genérico resta más de lo que suma. La sección de proceso se pone en su lugar. |
| **LaserBox se presenta como cliente** | El sitio habla como BeStack, empresa. No se menciona que el Patrón es socio del taller. |
| Los 12 proyectos de **Lanzaweb quedan fuera** | Fueron trabajo como empleado, no de BeStack. |
| Proyectos viejos descartados por el Patrón | "Ya están viejos o de plano no me gustan". |
| **Capturas: las toma el Patrón** | En el código se dejan placeholders con las medidas indicadas en `docs/ejemplos.md`. |
| Repo sigue **público** por ahora | El Patrón lo pasará a privado más adelante. No hay secretos en el repo. |

## Datos que faltan (los aporta el Patrón)

1. **Los números de resultados** de cada ejemplo (ventas al día, tiempo ahorrado, volumen).
   Sin número, la sección "Qué cambió" se deja sin métricas — **no se estiman**.
2. **Aprobación del tono** del copy (la muestra de Bidhara está en `docs/ejemplos.md`).
3. **El dominio** que va a usar.
4. Confirmar si el sistema de operación de **LaserBox ya corre** o también va marcado como
   en desarrollo.
