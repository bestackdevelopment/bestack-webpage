# Plantilla de servicios — Diseño

- **Fecha:** 5 de octubre de 2026
- **Autor:** Agente Dev Server
- **Estado:** Aprobado para implementar (pendiente: plan de implementación)
- **Ámbito:** `app/servicios/*` (6 landings) + nuevo componente compartido

## 1. Contexto

Hoy las landings de servicio no son consistentes:

- **5 páginas** (`ecommerce`, `mantenimiento-web`, `paginas-corporativas`,
  `finaliza-tu-web`, `agente-ia`) usan `components/service-landing.tsx`.
  Secciones: Hero → Intro → Beneficios → Casos de Uso → FAQ → (Ejemplo, opcional)
  → CTA. Datos en un objeto `ServiceLandingData`.
- **1 página** (`paginas-informativas`) tiene **diseño propio**, con los datos
  dentro del archivo y **colores hex sueltos** (`#FD4B5B`, `#42BEC0`, `#665DE2`),
  lo que va contra la convención de `AGENTS.md` (usar tokens del tema).

## 2. Objetivo

Que el diseño de `paginas-informativas` sea la **plantilla por defecto** de las
6 landings, con una única fuente de verdad para el layout y un modelo de datos
compartido.

## 3. Decisiones tomadas

1. **Un solo componente de plantilla.** Se extrae el diseño de informativas a
   `components/service-template.tsx`; las **6 páginas** lo usan (incluida
   informativas, que deja de ser un caso aparte). Se retira
   `components/service-landing.tsx`.
2. **Dos listas.** La plantilla conserva «¿Qué incluye este servicio?» **y**
   «Beneficios Principales».
3. **Contenido de «¿Qué incluye?» en las 5:** por ahora **genérico** (el Patrón
   lo completará después). No se inventan claims definitivos; el texto genérico
   queda explícitamente marcado como provisional en este spec.
4. **El gráfico decorativo** que hoy vive dentro de «¿Qué incluye?» se **mueve a
   la sección del CTA final** y se **reduce** (altura menor). Es el único
   elemento que cambia de lugar.
5. **Colores por tokens del tema** (`primary`/`secondary`/`accent`). Se eliminan
   los hex sueltos. Los valores hex actuales corresponden exactamente a esos
   tokens, así que el color percibido no cambia.

## 4. Arquitectura

```
app/servicios/<servicio>/page.tsx   (6)  →  aporta solo su objeto `data`
                                              ↓
                              components/service-template.tsx  →  renderiza el layout
```

- **Nuevo:** `components/service-template.tsx` (layout + tipo `ServiceTemplateData`).
- **Migran:** las 6 páginas de `app/servicios/*/page.tsx`.
- **Se retira:** `components/service-landing.tsx`.

## 5. Modelo de datos (`ServiceTemplateData`)

```ts
type Accent = "primary" | "secondary" | "accent"

type ServiceTemplateData = {
  hero: {
    badge?: string                 // p. ej. "Diseño Web Profesional"
    titleLead: string              // puede ir vacío: entonces el degradado cubre todo el título
    titleAccent: string            // p. ej. "Informativas"
    accentGradient: string         // p. ej. "from-accent to-primary"
    subtitle: string
    ctas: { label: string; href: string; variant?: "primary" | "outline" }[]
  }
  incluye: {
    lead?: { heading: string; body: string[] }  // texto de entrada opcional (el `intro` de las 5)
    items: {
      icon: TablerIcon
      accent: Accent
      title: string                // el número (1., 2., …) lo pone el componente
      description: string
    }[]
  }
  beneficios: { icon: TablerIcon; accent: Accent; text: string }[]
  casosUso: { icon: TablerIcon; accent: Accent; title: string; description: string }[]
  faqs: { question: string; answer: string }[]
  copy?: {                         // subtítulos de sección (informativas los conserva)
    beneficiosSubtitle?: string
    casosSubtitle?: string
    faqsSubtitle?: string
  }
  ejemplo?: {                      // sección opcional (hoy solo ecommerce la usa)
    href: string
    label: string
    description: string
  }
  final: { heading: string; body: string; cta: string }
}
```

- Los **iconos** son de `@tabler/icons-react` (única librería permitida).
- El **número** de cada ítem de «¿Qué incluye?» se renderiza por índice, no se
  guarda en el dato.

## 6. Estructura de la plantilla (orden de secciones)

1. **Hero** — badge (opcional) + título (lead + acento con degradado) +
   subtítulo + 1–2 botones.
2. **¿Qué incluye este servicio?** — grid de ítems (icono + título + descripción).
3. **Beneficios Principales** — grid de tarjetas (icono + texto).
4. **Casos de Uso** — tarjetas (icono + título + descripción).
5. **Preguntas Frecuentes** — acordeón.
6. **Ejemplo relacionado** — *opcional* (solo si el dato lo define; hoy ecommerce).
7. **Gráfico decorativo (compacto) + CTA final.**

## 7. Contenido por página

| Página | ¿Qué incluye? | Beneficios | Casos de Uso |
|---|---|---|---|
| `paginas-informativas` | sus **7** ítems reales (sin cambios) | sus 6 | sus 4 |
| las otras 5 | **genérico provisional** (editable después) | sus 6 actuales | sus 4 actuales |

- En las 5, el copy de `beneficios` y `casosUso` es el que ya existe; **no se
  reescribe**.
- **Hero de las 5:** heredan el **badge** (texto propio de cada servicio, p. ej.
  "Tiendas en línea") y **2 botones** (primario → `/contacto`, outline →
  `/ejemplos`), como informativas.
- El copy de hero, FAQ y CTA final de cada página se conserva.
- El `intro` (título + 2 párrafos) de las 5 se reutiliza como **texto de entrada
  de la sección «¿Qué incluye?»** para no perder ese contenido.
- Los iconos y el `accent` de cada ítem los asigna el agente (presentacional),
  ciclando los tres colores de marca.

### Contenido genérico provisional (las 5)

Cada página llevará un set corto de ítems de «¿Qué incluye?» con texto neutro,
claramente provisional, que el Patrón reemplazará. No se presentan como
beneficios verificados.

## 8. El gráfico decorativo

- **Antes:** dentro de «¿Qué incluye?», a ancho completo, `aspect-square` con
  `max-w-lg`.
- **Después:** en la **sección del CTA final**, por encima del encabezado,
  **reducido** (~`max-w-xs`) con los bloques internos más chicos, de modo que su
  altura sea claramente menor.
- Se reproduce con los mismos elementos (grid de 3 columnas, bloques con
  degradado, iconos `IconDeviceDesktop` / `IconTrendingUp` / `IconTarget` y el
  sello central `IconSparkles`), usando tokens del tema.

## 9. Convenciones y accesibilidad

- Iconos: solo `@tabler/icons-react`.
- Colores: tokens del tema (`primary`, `secondary`, `accent`); **cero hex**.
- Contraste AA en texto de cuerpo/UI (la marca no se altera).
- Idioma de UI en español; código en inglés.

## 10. Fuera de alcance

- Redactar el contenido real de «¿Qué incluye?» de las 5 (lo hará el Patrón).
- Cambiar el copy existente de hero, beneficios, casos, FAQ o CTA.
- Blog, formulario y publicación.

## 11. Archivos afectados

- **Nuevo:** `components/service-template.tsx`
- **Migran:** `app/servicios/{paginas-informativas,ecommerce,mantenimiento-web,paginas-corporativas,finaliza-tu-web,agente-ia}/page.tsx`
- **Se retira:** `components/service-landing.tsx`

## 12. Criterios de aceptación

1. Las 6 landings renderizan con la **misma estructura** de secciones.
2. No queda ningún **hex suelto** en las landings.
3. El **gráfico** aparece en el **CTA final**, compacto (altura menor).
4. El copy existente (hero, beneficios, casos, FAQ, CTA) se conserva.
5. `pnpm lint` y `pnpm build` en verde; revisado en navegador real.

## 13. Verificación

- `pnpm lint` y `pnpm build`.
- Navegación por las 6 rutas en `http://100.90.176.92:3000`.
- Comprobar geometría (sin desbordes) en 390 / 768 / 1024 / 1440.

## 14. Riesgos y notas

- Hasta que el Patrón complete el contenido, «¿Qué incluye?» de las 5 se verá
  **genérico** (esperado y aceptado).
- La migración de `paginas-informativas` debe **preservar su copy exacto**; el
  único cambio visible en esa página es el **gráfico movido y reducido**.
