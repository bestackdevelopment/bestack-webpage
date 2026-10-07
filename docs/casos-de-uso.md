# Casos de uso — definición de la sección

**Última actualización:** 7 de octubre de 2026 (subfire).

Especificación completa de la sección que reemplaza a "Portfolio": qué se muestra, cómo se
estructura cada página y el copy de los 4 ejemplos. **Todo el contenido sale de aquí — no se
inventa nada fuera de este documento.**

> ⚠️ **Este repositorio es público.** No meter credenciales, datos de clientes, nombres de
> personas ni información interna de las operaciones. Las capturas se publican con datos demo.

## Qué es y por qué "Casos de uso"

La sección **no** se llama "Portafolio". Se llama **"Casos de uso"**, y su promesa es distinta:

> *"Esto es lo que se puede hacer"*, aplicado a distintos giros.

La razón: un portafolio obliga a demostrar que fueron clientes de BeStack (no hay testimonios,
y parte del trabajo real no se puede firmar). "Casos de uso" no carga esa prueba y deja que el
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
| `bidhara` | Bidhara: Flores comestibles y microgreens | Agroalimentario | Implementación integral | En operación |
| `laserbox` | LaserBox: Taller de corte láser | Manufactura / taller | Implementación integral | En desarrollo |
| `sysop` | SysOp: Configuración operacional | Seguridad perimetral | SaaS | En desarrollo |
| `bahia` | Bahía Business Center | Renta de espacios | Sitio corporativo | En operación |

**Fuera del sitio:** los 12 proyectos hechos para la agencia Lanzaweb, y los proyectos viejos
que el Patrón descartó (Titanes, Magone, SAI, Interurbana, Melba).

## Índice `/casos-de-uso`

- Rejilla de 4 tarjetas: imagen (placeholder), nombre, giro, tipo, estado, una línea de qué
  se hizo y enlace "Ver el caso".
- **Filtros por tipo de solución** (idea traída del portafolio anterior, ya probada):
  `Sistema a medida` · `Agente IA` · `Tienda en línea` · `Sitio corporativo` · `SaaS`.
- Sección de cierre con CTA a `/contacto`.
- Reemplaza a la página "Próximamente" actual en `/proyectos`.

## Estructura de la página de ejemplo `/casos-de-uso/[slug]`

Ocho secciones, en este orden:

1. **Portada** — nombre, giro, una línea de qué es, etiquetas de tipo y estado, CTA.
2. **El reto** — cómo operaba el negocio antes (2-3 párrafos).
3. **La solución** — una tarjeta por pieza, **cada una con su propio icono** (campo `icono` de
   `PiezaSolucion`; el mapa clave → icono Tabler está en `components/icono-tabler.tsx`, el mismo
   que usan los nodos del diagrama). LaserBox y Bidhara llevan 6 (aplicación interna ·
   base de datos centralizada · agente IA · el canal de venta —tienda en LaserBox, catálogo en
   Bidhara— · nube privada · red privada); en LaserBox el agente además toca redes sociales. En
   SysOp y Bahía, la descripción de la plataforma/sitio.
4. **Cómo se aplicó** — **solo el diagrama** de cómo se conectan las piezas. **No se publica la
   lista de stack:** el cliente que contrata no la lee y la sección se sostiene con el diagrama
   (decisión del Patrón, 6-oct-2026).
   - **El diagrama muestra quién entra y qué es público**, no solo las piezas (decisión del
     Patrón, 7-oct-2026). Lleva **zonas con nombre** (marco punteado: «Red privada» e
     «Internet») y los **actores como nodo propio**: el celular del dueño adentro de la red
     privada, y el cliente al otro lado del catálogo, en internet. Los nodos del diagrama **sí
     conservan el nombre técnico** (`Base de datos centralizada`, `Agente IA`): la regla de no
     publicar stack aplica al texto, no al dibujo.
   - En el código: el campo `zonas` del tipo `arquitectura` (`ArquitecturaZona`, en
     `lib/casos-de-uso.ts`), pintado por `components/arquitectura-flow.tsx` como un nodo `zona`
     detrás de las tarjetas. Las aristas verticales declaran su lado (`desde` / `hasta`) y los
     handles de cada nodo **se derivan de las aristas**, no se pintan a mano.
   - Aplica a **todos los casos con la misma estructura** (Bidhara y LaserBox). SysOp y Bahía
     conservan su diagrama: no tienen frontera entre lo privado y lo público.
5. **Por qué así** — las decisiones y **su razón**. *Es la sección que vende: demuestra
   criterio, no herramientas.* Mínimo 4 decisiones, cada una con su porqué.
6. **Qué cambió** — el efecto en la operación. **Sin métricas inventadas**: si el Patrón no
   da el número, la sección queda cualitativa. **Es opcional:** un sistema que no reemplazó una
   operación anterior (SysOp) no la lleva, y la sección no se pinta.
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
  (p. ej. `/servicios/tienda-en-linea` → `laserbox`).

### Placeholders de imagen

Las capturas las toma el Patrón. En el código se dejan los huecos con estas medidas:

| Uso | Proporción | Tamaño | Ruta sugerida |
|---|---|---|---|
| Portada del índice | 16:9 | 1280×720 | `/public/casos-de-uso/{slug}/cover.jpg` |
| Galería | 16:10 | 1600×1000 | `/public/casos-de-uso/{slug}/01.jpg`, `02.jpg`… |
| Open Graph | 1200×630 | 1200×630 | `/public/casos-de-uso/{slug}/og.jpg` |

---

# Copy

> **Estado del copy:** **LaserBox, Bidhara y SysOp ya están aprobados por el Patrón**
> (6-oct-2026). **Bahía sigue como borrador v1**, pendiente de definir caso por caso.
> El detalle de cada caso se trabaja en Notion (base «Casos de uso — contenido»); este doc
> guarda el copy que el código consume.
>
> **"Qué cambió" va sin métricas** hasta que el Patrón aporte los números. No estimarlos.

## Ejemplo 1 — Bidhara

**Bidhara: Flores comestibles y microgreens**
*Giro:* agroalimentario · *Tipo:* implementación integral · *Estado:* En operación

> **Definido y aprobado por el Patrón el 6-oct-2026.** El agente no se nombra y **no toca redes
> sociales**: eso es exclusivo del caso de LaserBox. **El carrito sí va en el catálogo en
> línea** — lo que distingue al catálogo de la tienda es la pasarela de pago, no el carrito.
>
> **Diagrama (7-oct-2026):** dos zonas (Red privada / Internet), el **Celular del dueño** como
> actor dentro de la privada (de ahí sale el acceso a la aplicación y a sus archivos en la nube)
> y el **Cliente** del otro lado del catálogo, en internet. «Red privada» dejó de ser una pieza
> suelta para ser el marco que agrupa la operación.

**El reto.** Catálogo de 45 productos perecederos, pedidos que entran por WhatsApp y el
control repartido entre hojas de cálculo y la memoria del dueño: qué se vendió, a quién,
cuánto se gastó, qué queda disponible.

**La solución — seis piezas, una sola fuente de verdad:**

1. **Aplicación interna** — ventas multi-artículo, clientes, gastos por categoría e inventario
   en un solo lugar; mobile-first, porque el negocio se opera desde el celular.
2. **Base de datos centralizada** — toda la información del negocio en una sola fuente: es la
   que alimenta a la aplicación, al catálogo en línea y al agente.
3. **Agente IA** — corre en infraestructura propia, entra a la aplicación y responde por
   Telegram: registra y consulta pedidos, ventas e inventario sin abrir el sistema.
4. **Catálogo en línea** *(en operación)* — los productos con foto, descripción y
   disponibilidad; el cliente arma su pedido en el carrito y lo cierra por WhatsApp.
5. **Nube privada** — los archivos del negocio (fotos de producto, evidencia), ordenados y
   accesibles desde la operación.
6. **Red privada** — se entra a la aplicación sin exponer nada a internet.

> **Los agentes no se nombran.** El nombre del agente es interno del cliente y no se publica
> (decisión del 6-oct-2026). Aplica a los dos casos que traían agente con nombre.

**Por qué así.** La razón de fondo: organizar y administrar el negocio — tener todo
centralizado y un agente 24/7 que sabe de qué va el negocio y en qué estado está todo.

- **Un agente, no otro dashboard.** El dueño no iba a abrir un panel para registrar una
  venta; le escribe al agente. No tuvo que cambiar su forma de trabajar.
- **Una sola base de datos.** El agente y la app leen y escriben lo mismo. Dos fuentes de
  verdad son dos verdades distintas.
- **Permisos mínimos.** El agente solo puede leer y dar de alta: no borra, no modifica.
- **PostgreSQL nativo, sin contenedores.** Lo va a mantener alguien que no es desarrollador.
  Menos piezas, menos fallas.
- **Reportes en PDF.** El negocio los manda y los imprime; un tablero no reemplaza eso.
- **Red privada en vez de exponer la aplicación.** La operación no tiene por qué estar en
  internet para poder entrar desde fuera.
- **El catálogo se construye sobre lo que ya existe.** El catálogo en línea sale de la
  operación, no de una lista aparte que se desactualiza sola.
- **El agente dentro del sistema, no al lado.** Por MCP usa la aplicación real, con sus datos
  y sus permisos; no es un chatbot que adivina.

**Qué cambió.** Se digitalizó y se organizó: el negocio dejó los papeles y las hojas de
cálculo, y ahora se administra de mejor manera: catálogo, ventas y gastos en un mismo sistema,
con un agente que responde por Telegram. *Sin números: cualitativo por decisión del Patrón.*

---

## Ejemplo 2 — LaserBox

**LaserBox: Taller de corte láser**
*Giro:* manufactura / taller de corte láser · *Tipo:* implementación integral · *Estado:* En desarrollo

> **Se presenta como cliente.** No mencionar que el Patrón es socio del taller, ni la relación
> entre LaserBox y BeStack. Los sistemas que BeStack construyó para LaserBox se presentan como
> el trabajo que son.

> **Definido y aprobado por el Patrón el 6-oct-2026.** El agente no se nombra.
>
> **Diagrama (7-oct-2026):** mismo tratamiento que Bidhara (zonas y actores), con la **Tienda en
> línea** en lugar del catálogo, el **Cliente** comprándole a la tienda y **Facebook e
> Instagram** del lado de internet, fuera de la red privada.

**El reto.** La operación era la de un negocio de paso: se atendía lo que llegaba y todo se
anotaba a lápiz y papel. Sin administración ni organización detrás, el control quedaba en la
memoria de quien atendía.

**La solución — seis piezas, una sola fuente de verdad:**

1. **Aplicación interna** — cotizaciones, órdenes de producción, materiales y proveedores en un
   solo lugar.
2. **Base de datos centralizada** — toda la información del negocio en una sola fuente: es la
   que alimenta a la aplicación, a la tienda y al agente.
3. **Agente IA** — corre en infraestructura propia, entra a la aplicación y responde por
   Telegram: consulta y registra sin abrir el sistema. También publica contenido en Facebook e
   Instagram y revisa los mensajes.
4. **Tienda en línea** *(en desarrollo)* — se construye con los productos que ya viven en la
   base de datos centralizada.
5. **Nube privada** — los archivos del negocio (planos, cotizaciones, evidencia), ordenados y
   accesibles desde la operación.
6. **Red privada** — se entra a la aplicación sin exponer nada a internet.

**Por qué así.** La razón de fondo: digitalizar el negocio y darle las herramientas para crecer.

- **SQLite, no un motor grande.** Un taller con un solo punto de operación no necesita un
  servidor de base de datos: un archivo respaldable es más simple de mantener y de mover.
- **Las cotizaciones dentro del sistema.** Es la pieza que más tiempo ahorra: el precio deja
  de depender de la persona que atiende.
- **Producción e inventario junto a la venta.** Lo que se cotiza, lo que se produce y lo que
  se consume son el mismo dato, no tres hojas distintas.
- **Mobile y tablet primero.** En un taller se consulta de pie, junto a la máquina, no sentado
  en un escritorio.
- **Red privada en vez de exponer la aplicación.** La operación no tiene por qué estar en
  internet para poder entrar desde fuera.
- **Una sola base de datos para todo.** La misma información alimenta a la aplicación, a la
  tienda y al agente: lo que se captura una vez no se vuelve a escribir.
- **El agente dentro del sistema, no al lado.** Por MCP el agente usa la aplicación real, con
  sus datos y sus permisos; no es un chatbot que adivina. Y la puerta es Telegram, donde el
  taller ya está.
- **La tienda se construye sobre lo que ya existe.** El catálogo sale de la operación, no de
  una lista aparte que se desactualiza sola.

**Qué cambió.** Organización y rapidez: el taller dejó de llevar todo en papel y de memoria
(cotizaciones, producción, materiales y archivos ahora viven en el sistema) y ganó un agente que
avisa y contesta por Telegram. *Sin números: cualitativo por decisión del Patrón (6-oct-2026).*

---

## Ejemplo 3 — SysOp

**SysOp: Configuración operacional**
*Giro:* seguridad perimetral · *Tipo:* SaaS · *Estado:* En desarrollo

> **Definido y aprobado por el Patrón el 6-oct-2026.** El contenido se escribió desde el repo y
> la documentación del proyecto.
>
> **Se muestra sin el nombre del cliente.** Nada privado: ni el nombre, ni datos reales, ni URLs
> de despliegue.
>
> ⚠️ **Los datos demo actuales usan el nombre de una institución real** (el tenant de demo se
> llama «Instituto Nacional de Pediatría», y también hay «Hospital Demo Directo» y «CUSAEM»).
> **Hay que renombrarlos antes de tomar las capturas:** publicados se leen como clientes de
> BeStack.
>
> **Este caso no lleva «Qué cambió»:** el sistema no reemplazó una operación anterior, no
> existía nada antes.
>
> **Tampoco lleva lista de stack** (solo el diagrama), pero el diagrama **sí conserva los
> nombres técnicos de sus nodos** (API, PostgreSQL, evidencia en la nube) — indicación expresa
> del Patrón.

**El reto.** Las empresas de seguridad perimetral operan con protocolos, turnos, roles y
evidencia repartidos entre papel, mensajería y hojas de cálculo. Cuando un proveedor atiende
varias instalaciones a la vez, ese desorden se multiplica por cada cliente.

**La solución.** Un motor operativo configurable, que se construye una vez y se opera para
muchos clientes, organizado en tres capas:

- **Configuración** — define qué se puede ejecutar: clientes, instalaciones, ubicaciones,
  protocolos y las operaciones de cada ubicación. Sin esta capa no hay nada que ejecutar.
- **Operación** — el personal ejecuta paso a paso lo que ya está configurado, desde el celular:
  turnos, captura de datos, evidencia e incidencias. La supervisión ve la cobertura por
  ubicación, las asignaciones y las emergencias pendientes de aprobar.
- **Portal de cliente** — el proveedor administra a sus clientes directos y a los sub-clientes
  de estos, y cada uno ve únicamente lo suyo. No tiene configuración profunda: es visibilidad y
  acciones acotadas.

**Por qué así.**

- **Un motor configurable, no una app a medida.** No es una aplicación fija para un cliente:
  cada uno adapta sus protocolos, sus ubicaciones y su personal sin tocar código.
- **Multi-tenant desde el modelo de datos, no desde la interfaz.** El aislamiento no se resuelve
  escondiendo botones: ninguna entidad alcanza los datos de otra.
- **Nada se ejecuta que no haya sido configurado.** La capa de configuración es el techo de lo
  que se puede hacer en campo: no hay operaciones improvisadas.
- **El acceso siempre explícito, nunca inferido.** Los permisos se conceden; no se suponen. Sin
  asignación vigente no hay contexto operativo.
- **PWA en vez de aplicación nativa.** La operación ocurre en instalaciones con señal irregular;
  una app web instalable no depende de una tienda y se actualiza sola.
- **Evidencia fotográfica obligatoria en las incidencias.** Es lo que convierte un reporte en
  algo verificable.
- **Capas separadas por rol.** Quien opera en campo no ve la configuración, y un cliente nunca
  ve a otro.

> **Cómo leer el diagrama (interno, no se publica como texto):** el backend es la única fuente
> de verdad y el frontend solo renderiza estado validado; la estructura nace del protocolo; la
> asignación (usuario ↔ ubicación ↔ turno ↔ vigencia) es el vínculo operativo real; cada
> ejecución guarda sus pasos, sus valores y su evidencia; las evidencias viven en almacenamiento
> externo.

---

## Ejemplo 4 — Bahía Business Center

**Bahía Business Center**
*Giro:* renta de espacios (coworking, oficinas privadas y virtuales, salas) · *Tipo:* sitio
corporativo · *Estado:* En operación

**El reto.** Un negocio de renta de espacios en una plaza turística compite por las búsquedas
locales de "oficina", "coworking" y "sala de juntas". En ese terreno el sitio tiene que ser
rastreable por los buscadores, no solo verse bien.

**La solución.** Un sitio corporativo con renderizado en servidor, para que el contenido exista
en HTML desde el primer byte (la condición para competir en buscadores). Organizado por tipo de
espacio, con la ubicación y un único llamado a la acción: cotizar.

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

1. **LaserBox:** *resuelto (6-oct-2026).* El sistema **sí corre** (verificado: el servicio está
   activo) y la **tienda en línea todavía no está construida**. El caso va con estado "En
   desarrollo", aclarando que lo que falta es la tienda.
2. **SysOp:** confirmar que la descripción multi-tenant puede publicarse así (sin nombre del
   cliente ni detalles de la operación real).
3. **Los 4:** los números de "Qué cambió". En **LaserBox quedó cualitativo por decisión del
   Patrón**, no por olvido.
4. **Aprobación del tono.** **LaserBox, Bidhara y SysOp ya están aprobados**; falta **Bahía**,
   que se define caso por caso con el Patrón.
