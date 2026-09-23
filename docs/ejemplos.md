# Ejemplos — definición de la sección

**Última actualización:** 23 de septiembre de 2026 (subfire).

Especificación completa de la sección que reemplaza a "Portfolio": qué se muestra, cómo se
estructura cada página y el copy de los 4 ejemplos. **Todo el contenido sale de aquí — no se
inventa nada fuera de este documento.**

> ⚠️ **Este repositorio es público.** No meter credenciales, datos de clientes, nombres de
> personas ni información interna de las operaciones. Las capturas se publican con datos demo.

## Qué es y por qué "Ejemplos"

La sección **no** se llama "Portafolio". Se llama **"Ejemplos"**, y su promesa es distinta:

> *"Esto es lo que se puede hacer"* — aplicado a distintos giros.

La razón: un portafolio obliga a demostrar que fueron clientes de BeStack (no hay testimonios,
y parte del trabajo real no se puede firmar). "Ejemplos" no carga esa prueba y deja que el
prospecto se identifique por su giro.

**Dos etiquetas por ejemplo:**
- **Giro** (agroalimentario, taller de corte láser, seguridad perimetral, renta de espacios)
- **Estado**: `En operación` · `En desarrollo`

**Qué se espera de la sección:** que un visitante que llega buscando un sistema, un agente o
un sitio web reconozca su propio negocio en alguno de los ejemplos y escriba por el formulario.
No es una galería para presumir: es una herramienta de venta.

## Los 4 ejemplos

8 desarrollos agrupados en 4 páginas (los dos primeros son la misma fórmula aplicada dos veces;
se presentan por cliente para que no se lean como relleno).

| slug | Nombre | Giro | Tipo | Estado |
|---|---|---|---|---|
| `bidhara` | Bidhara — Flores comestibles y microgreens | Agroalimentario | Implementación integral | En operación |
| `laserbox` | LaserBox — Taller de corte láser | Manufactura / taller | Implementación integral | En desarrollo |
| `sysop` | SysOp — Configuración operacional | Seguridad perimetral | SaaS | En desarrollo |
| `bahia` | Bahía Business Center | Renta de espacios | Sitio corporativo | En operación |

**Fuera del sitio:** los 12 proyectos hechos para la agencia Lanzaweb, y los proyectos viejos
que el Patrón descartó (Titanes, Magone, SAI, Interurbana, Melba).

## Índice `/ejemplos`

- Rejilla de 4 tarjetas: imagen (placeholder), nombre, giro, tipo, estado, una línea de qué
  se hizo y enlace "Ver el ejemplo".
- **Filtros por tipo de solución** (idea traída del portafolio anterior, ya probada):
  `Sistema a medida` · `Agente IA` · `Ecommerce` · `Sitio corporativo` · `SaaS`.
- Sección de cierre con CTA a `/contacto`.
- Reemplaza a la página "Próximamente" actual en `/proyectos`.

## Estructura de la página de ejemplo `/ejemplos/[slug]`

Ocho secciones, en este orden:

1. **Portada** — nombre, giro, una línea de qué es, etiquetas de tipo y estado, CTA.
2. **El reto** — cómo operaba el negocio antes (2-3 párrafos).
3. **La solución** — las piezas del sistema. En Bidhara y LaserBox son 3 tarjetas
   (catálogo/ecommerce · sistema de operación · agente IA). En SysOp y Bahía, la descripción
   de la plataforma/sitio.
4. **Cómo se aplicó** — stack y arquitectura. Aquí va un diagrama de la arquitectura.
5. **Por qué así** — las decisiones y **su razón**. *Es la sección que vende: demuestra
   criterio, no herramientas.* Mínimo 4 decisiones, cada una con su porqué.
6. **Qué cambió** — el efecto en la operación. **Sin métricas inventadas**: si el Patrón no
   da el número, la sección queda cualitativa.
7. **Galería** — capturas (placeholders).
8. **CTA + navegación** — "¿Tienes un negocio como este?" → `/contacto`, y enlace al
   siguiente ejemplo.

### Funcionalidad

- Ruta dinámica con `generateStaticParams` y metadata SEO por ejemplo (`title`, `description`,
  Open Graph con la imagen de portada).
- **Recordar:** en Next 16 `params` es una **Promise** — hay que hacer `const { slug } = await params`.
  Usarlo síncrono devuelve 404 en runtime aunque el build prerenderice la ruta.
- Navegación anterior/siguiente entre los 4 ejemplos.
- Galería con lightbox y placeholders responsivos.
- Enlaces desde las landings de servicio hacia el ejemplo correspondiente
  (p. ej. `/servicios/ecommerce` → `laserbox`).

### Placeholders de imagen

Las capturas las toma el Patrón. En el código se dejan los huecos con estas medidas:

| Uso | Proporción | Tamaño | Ruta sugerida |
|---|---|---|---|
| Portada del índice | 16:9 | 1280×720 | `/public/ejemplos/{slug}/cover.jpg` |
| Galería | 16:10 | 1600×1000 | `/public/ejemplos/{slug}/01.jpg`, `02.jpg`… |
| Open Graph | 1200×630 | 1200×630 | `/public/ejemplos/{slug}/og.jpg` |

---

# Copy

> **Estado del copy:** los 4 textos son **borrador v1**, pendiente de la aprobación del tono
> por el Patrón. Construir las páginas con esto; los ajustes de redacción no cambian la
> estructura.
>
> **"Qué cambió" va sin métricas** hasta que el Patrón aporte los números. No estimarlos.

## Ejemplo 1 — Bidhara

**Bidhara — Flores comestibles y microgreens**
*Giro:* agroalimentario · *Tipo:* implementación integral · *Estado:* En operación

**El reto.** Catálogo de 45 productos perecederos, pedidos que entran por WhatsApp y el
control repartido entre hojas de cálculo y la memoria del dueño: qué se vendió, a quién,
cuánto se gastó, qué queda disponible.

**La solución — tres piezas, una sola fuente de verdad:**

1. **Catálogo en línea** — el escaparate: 45 productos con foto, descripción y
   disponibilidad; el pedido se cierra por WhatsApp, sin carrito ni pasarela que nadie iba
   a usar.
2. **Sistema de operación** — ventas multi-artículo, clientes, gastos por categoría y
   reportes en PDF. Mobile-first, porque el negocio se opera desde el celular.
3. **Agente IA "Cortana"** — el dueño le escribe por Telegram: registra ventas, consulta
   inventario, sube fotos y pide su reporte del día. Trabaja sobre **la misma base de datos**
   que la app, con permisos restringidos.

**Cómo se aplicó.** PostgreSQL + Prisma · Express + TypeScript · React + Vite + Tailwind +
shadcn/ui · Recharts · JWT · reportes en PDF · Hermes Agent sobre Telegram.

**Por qué así.**

- **Un agente, no otro dashboard.** El dueño no iba a abrir un panel para registrar una
  venta; le escribe al agente. No tuvo que cambiar su forma de trabajar.
- **Una sola base de datos.** El agente y la app leen y escriben lo mismo. Dos fuentes de
  verdad son dos verdades distintas.
- **Permisos mínimos.** El agente solo puede leer y dar de alta: no borra, no modifica.
- **PostgreSQL nativo, sin contenedores.** Lo va a mantener alguien que no es desarrollador.
  Menos piezas, menos fallas.
- **Reportes en PDF.** El negocio los manda y los imprime; un tablero no reemplaza eso.

**Qué cambió.** *(pendiente: los números del Patrón)*

---

## Ejemplo 2 — LaserBox

**LaserBox — Taller de corte láser**
*Giro:* manufactura / taller de corte láser · *Tipo:* implementación integral · *Estado:* En desarrollo

> **Se presenta como cliente.** No mencionar que el Patrón es socio del taller, ni la relación
> entre LaserBox y BeStack. Los sistemas que BeStack construyó para LaserBox se presentan como
> el trabajo que son.

**El reto.** Un taller que cotiza a mano y lleva la producción y el inventario repartidos entre
la memoria de quien atiende y hojas de cálculo. Cotizar un trabajo tomaba tiempo y el precio
terminaba dependiendo de quién lo calculara.

**La solución — tres piezas:**

1. **Sistema de operación** — clientes, cotizaciones, producción, inventario y usuarios.
   Cotizar deja de ser un cálculo a mano: el precio sale del sistema, no de la memoria.
2. **Ecommerce** *(en desarrollo)* — el canal de venta en línea de los productos del taller.
3. **Agente IA "Aserrín"** — opera sobre el mismo sistema: consulta y registra desde Telegram,
   sin abrir la aplicación.

**Cómo se aplicó.** Express + Prisma + SQLite · React + Vite + Tailwind CSS · Tabler Icons ·
monorepo pnpm · API con autenticación.

**Por qué así.**

- **SQLite, no un motor grande.** Un taller con un solo punto de operación no necesita un
  servidor de base de datos: un archivo respaldable es más simple de mantener y de mover.
- **Las cotizaciones dentro del sistema.** Es la pieza que más tiempo ahorra: el precio deja
  de depender de la persona que atiende.
- **Producción e inventario junto a la venta.** Lo que se cotiza, lo que se produce y lo que
  se consume son el mismo dato, no tres hojas distintas.
- **Mobile y tablet primero.** En un taller se consulta de pie, junto a la máquina, no sentado
  en un escritorio.

**Qué cambió.** *(pendiente: los números del Patrón)*

---

## Ejemplo 3 — SysOp

**SysOp — Configuración operacional**
*Giro:* seguridad perimetral · *Tipo:* SaaS · *Estado:* En desarrollo

> **Se muestra sin el nombre del cliente.** Las capturas van con datos demo, nunca con
> información real de la operación.

**El reto.** Las empresas de seguridad perimetral operan con protocolos, turnos, roles y
evidencia repartidos entre papel, mensajería y hojas de cálculo. Cuando un proveedor atiende
varias instalaciones a la vez, ese desorden se multiplica por cada cliente.

**La solución.** Una plataforma multi-tenant —se construye una vez y se opera para muchos
clientes— organizada en capas:

- **Configuración** — el nivel de plataforma administra instalaciones, clientes y módulos.
- **Operación** — el personal ejecuta protocolos y levanta incidencias con evidencia
  fotográfica desde el celular.
- **Portal de cliente** — el proveedor administra a sus clientes directos y a los sub-clientes
  de estos, y cada uno ve únicamente lo suyo.

**Cómo se aplicó.** Next.js · Express · Prisma + PostgreSQL · PWA instalable con precache por
rutas · internacionalización · almacenamiento de evidencia en la nube · despliegue gestionado.

**Por qué así.**

- **Multi-tenant desde el modelo de datos, no desde la interfaz.** Los permisos no se resuelven
  escondiendo botones: cada recurso tiene dueño en la base de datos.
- **PWA en vez de aplicación nativa.** La operación ocurre en instalaciones con señal
  irregular; una app web instalable no depende de una tienda y se actualiza sola.
- **Evidencia fotográfica obligatoria en las incidencias.** Es lo que convierte un reporte en
  algo verificable.
- **Capas separadas por rol.** Quien opera en campo no ve la configuración, y un cliente nunca
  ve a otro.

**Qué cambió.** *(pendiente: los números del Patrón)*

---

## Ejemplo 4 — Bahía Business Center

**Bahía Business Center**
*Giro:* renta de espacios (coworking, oficinas privadas y virtuales, salas) · *Tipo:* sitio
corporativo · *Estado:* En operación

**El reto.** Un negocio de renta de espacios en una plaza turística compite por las búsquedas
locales de "oficina", "coworking" y "sala de juntas". En ese terreno el sitio tiene que ser
rastreable por los buscadores, no solo verse bien.

**La solución.** Un sitio corporativo con renderizado en servidor, para que el contenido exista
en HTML desde el primer byte — la condición para competir en buscadores. Organizado por tipo de
espacio, con la ubicación y un único llamado a la acción: cotizar.

**Cómo se aplicó.** Next.js con renderizado en servidor · React · Tailwind CSS · publicación
en el hosting del negocio.

**Por qué así.**

- **Renderizado en servidor en vez de una aplicación de una sola página.** Un negocio local
  vive de búsqueda: si el contenido no llega en el HTML, no existe para Google.
- **Un solo llamado a la acción.** Los cinco tipos de espacio compiten entre sí por la misma
  atención; el objetivo del sitio es que el visitante cotice.
- **El producto es el lugar.** Fotos y video del espacio real venden una oficina; las imágenes
  genéricas, no.

**Qué cambió.** *(pendiente: los números del Patrón)*

---

## Datos por confirmar antes de publicar

1. **LaserBox:** ¿el sistema de operación ya corre en el taller (va limpio) o también se marca
   "en desarrollo"? — *El ecommerce todavía no está creado* (confirmado por el Patrón el
   23-sep-2026): va marcado como "en desarrollo" y todavía no tiene repositorio.
2. **SysOp:** confirmar que la descripción multi-tenant puede publicarse así (sin nombre del
   cliente ni detalles de la operación real).
3. **Bahía:** confirmar el stack exacto (el registrado proviene del portafolio de 2024).
4. **Los 4:** los números de "Qué cambió".
5. **Aprobación del tono** de este copy.
