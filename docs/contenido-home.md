# Contenido del home — secciones que cambian

**Última actualización:** 23 de septiembre de 2026 (subfire).

Copy de las secciones del home que se ajustan en la Fase 2 de `docs/plan-de-trabajo.md`.
Todo el texto sale de aquí — no inventar fuera de este documento.

## 1. "Cómo trabajamos" (reemplaza a "Lo Que Dicen Nuestros Clientes")

**Por qué se cambia:** hoy el home trae **3 testimonios falsos**: el mismo texto repetido tres
veces, con las etiquetas "Cliente 1", "Cliente 2" y "Cliente 3" y "Empresa" como cargo. Un
prospecto lo detecta de inmediato, y eso resta más de lo que suma. No hay testimonios reales
todavía, así que la sección se sustituye por el proceso de trabajo. **Los testimonios regresan
cuando existan, con nombre y cargo reales** — ahí esta sección se vuelve a montar.

- **Ubicación:** `app/page.tsx`, sección `{/* Testimonials */}` (~líneas 148-180 al 23-sep-2026).
- **Estructura:** encabezado + bajada + 4 pasos. Respetar el sistema de diseño actual (rejilla,
  tarjetas y tokens del tema). Los 4 pasos pueden ir en 2×2 o en 4×1 en escritorio: decidir en
  la implementación según cómo mejor respire el contenido.

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
- **Debe quedar:** **3 tarjetas** —las tres más fuertes— y un botón "Ver todos los ejemplos" que
  lleve a `/ejemplos`.

| Tarjeta | Enlace |
|---|---|
| SysOp — Configuración operacional (SaaS · seguridad perimetral) | `/ejemplos/sysop` |
| Bidhara — Flores comestibles y microgreens (implementación integral) | `/ejemplos/bidhara` |
| LaserBox — Taller de corte láser (implementación integral) | `/ejemplos/laserbox` |

- Cada tarjeta: imagen (placeholder), nombre, giro, una línea de qué se hizo y enlace
  "Ver el ejemplo".
- La cuarta (**Bahía**) no entra en destacados: se ve en el índice completo. Es el único sitio
  web de los cuatro, así que sirve mejor como contraste dentro de la sección que como portada.

## 3. Imágenes

Placeholders con las medidas definidas en `docs/ejemplos.md`. **Las capturas las toma el Patrón**
— el código solo deja el hueco.
