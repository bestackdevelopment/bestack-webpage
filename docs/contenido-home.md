# Contenido del home — secciones que cambian

**Última actualización:** 5 de octubre de 2026 (Agente Dev Server).

Copy de las secciones del home que se ajustan en la Fase 2 de `docs/plan-de-trabajo.md`.
Todo el texto sale de aquí — no inventar fuera de este documento.

## 1. "Cómo trabajamos" (reemplaza a "Lo Que Dicen Nuestros Clientes")

**Por qué se cambia:** hoy el home trae **3 testimonios falsos**: el mismo texto repetido tres
veces, con las etiquetas "Cliente 1", "Cliente 2" y "Cliente 3" y "Empresa" como cargo. Un
prospecto lo detecta de inmediato, y eso resta más de lo que suma. No hay testimonios reales
todavía, así que la sección se sustituye por el proceso de trabajo. **Los testimonios regresan
cuando existan, con nombre y cargo reales** — ahí esta sección se vuelve a montar.

- **Ubicación:** `app/page.tsx`, sección `{/* Cómo trabajamos */}`.
- **Estructura:** encabezado + bajada + 4 pasos en **línea de tiempo vertical** (línea a la
  izquierda, nodos numerados 1–4 con `bg-primary/10` y texto neutro), sin dependencias nuevas.
  En la revisión de estilos (5-oct-2026) se pasó del 2×2 de tarjetas a esta línea de tiempo.

**Encabezado:** Cómo trabajamos

**Bajada:** Sin sorpresas: así se lleva un proyecto con BeStack.

1. **Diagnóstico** — Revisamos qué necesitas y cómo opera hoy tu negocio. De ahí sale el
   alcance: qué se construye y qué no.
2. **Propuesta** — Te entregamos alcance, tiempo y precio por escrito, para que sepas
   exactamente qué estás comprando.
3. **Construcción** — Se construye por tramos y los ves funcionando en el camino: no esperas
   hasta el final para ver el sistema.
4. **Entrega y soporte** — El sistema se entrega funcionando y documentado, con
   acompañamiento y actualizaciones.

> **Pendiente:** aprobación del Patrón. Las condiciones y los tiempos de cada paso deben
> coincidir con lo que realmente se ofrece — el anticipo y las formas de pago viven en el
> cotizador, no aquí.

## 2. "Proyectos Destacados" (hoy en standby)

- **Ubicación:** `app/page.tsx` (~línea 128), con el comentario `EN STANDBY: pendiente definir
  los proyectos reales`.
- **Hoy:** dice "Estamos preparando nuestra selección de proyectos".
- **Debe quedar:** **3 tarjetas** —las tres más fuertes— y un botón "Ver todos los casos de uso" que
  lleve a `/casos-de-uso`.

| Tarjeta | Enlace |
|---|---|
| SysOp — Configuración operacional (SaaS · seguridad perimetral) | `/casos-de-uso/sysop` |
| Bidhara — Flores comestibles y microgreens (implementación integral) | `/casos-de-uso/bidhara` |
| LaserBox — Taller de corte láser (implementación integral) | `/casos-de-uso/laserbox` |

- Cada tarjeta: imagen (placeholder), nombre, giro, una línea de qué se hizo y enlace
  "Ver el caso".
- La cuarta (**Bahía**) no entra en destacados: se ve en el índice completo. Es el único sitio
  web de los cuatro, así que sirve mejor como contraste dentro de la sección que como portada.

## 3. "¿Por qué elegirnos?" (cards con iconos)

- **Ubicación:** `app/page.tsx`, sección `{/* Benefits Section */}`.
- **Estructura:** 4 cards con icono (Tabler, `size={40} stroke={1.5}` dentro de caja
  `rounded-lg bg-primary/10`), título y descripción. Rejilla
  `grid-cols-1 sm:grid-cols-2 xl:grid-cols-4`.
- **Añadido en la revisión de estilos (5-oct-2026);** antes eran cards sin icono.

| Icono | Título | Descripción |
|---|---|---|
| `IconCpu` | Tecnología Moderna | Construimos con tecnologías de última generación para crear sitios rápidos, seguros y escalables |
| `IconPalette` | Diseño Profesional | Interfaces minimalistas y elegantes optimizadas para conversión |
| `IconTrendingUp` | SEO y GEO | Código limpio y estructura pensada para posicionamiento en buscadores y agentes de IA |
| `IconHeadset` | Soporte Continuo | Acompañamiento técnico y actualizaciones durante todo el proyecto |

> **GEO** = *Generative Engine Optimization*: conseguir que el contenido aparezca y sea citado en
> las respuestas de IA (ChatGPT, Gemini, Perplexity, Google AI Overviews). El título de la tercera
> card se cambió de "SEO Optimizado" a **"SEO y GEO"** (decisión del Patrón; ver la base
> `Decisiones` en Notion).

## 4. Imágenes

Placeholders con las medidas definidas en `docs/casos-de-uso.md`. **Las capturas las toma el Patrón**
— el código solo deja el hueco.
