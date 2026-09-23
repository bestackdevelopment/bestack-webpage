/**
 * Tamaño por tecnología en el marquee.
 *
 * Los logos tienen proporciones muy distintas: los de marca (React, JS,
 * MongoDB…) son casi cuadrados y llenan una caja; los wordmarks (Tailwind,
 * Next, SQLite…) son muy anchos y bajos, y dentro de una caja cuadrada se
 * ven diminutos. Por eso cada uno define su propia clase de tamaño: los
 * cuadrados usan caja fija + object-contain (escala sin deformar) y los
 * wordmarks una altura fija con ancho automático (proporción natural).
 */
const techSizes: Record<string, string> = {
  // Logos de marca, casi cuadrados → caja uniforme con object-contain
  js: "w-12 h-12 object-contain",
  react: "w-12 h-12 object-contain",
  pg: "w-12 h-12 object-contain",
  electron: "w-12 h-12 object-contain",
  css: "w-12 h-12 object-contain",
  mongo: "w-12 h-12 object-contain",
  wp: "w-12 h-12 object-contain",
  elementor: "w-12 h-12 object-contain",
  ts: "w-12 h-12 object-contain",
  vite: "w-12 h-12 object-contain",
  prisma: "w-12 h-12 object-contain",
  n8n: "w-12 h-12 object-contain",
  tailscale: "w-12 h-12 object-contain",
  // Wordmarks anchos/bajos → altura fija, ancho proporcional (h-9 = 36px)
  html: "h-9 w-auto",
  mysql: "h-9 w-auto",
  sqlite: "h-9 w-auto",
  node: "h-9 w-auto",
  next: "h-9 w-auto",
  // Tailwind es el wordmark más extremo (194×24, ratio 8:1): h-8 (32px) lo
  // deja en ~258px de ancho, con presencia comparable sin dominar el marquee
  tw: "h-8 w-auto",
}

const techs = [
  "js",
  "react",
  "next",
  "node",
  "pg",
  "electron",
  "tw",
  "mysql",
  "css",
  "html",
  "wp",
  "sqlite",
  "elementor",
  "mongo",
  "ts",
  "vite",
  "prisma",
  "n8n",
  "tailscale",
]

export function Stack() {
  const row = [...techs, ...techs]

  return (
    <div className="w-full flex flex-col justify-center items-center gap-[50px]">
      <h3 className="text-[24px] font-semibold">Tecnologías utilizadas</h3>
      <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-10">
          {row.map((tech, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={index}
              src={`/stack/${tech}.svg`}
              alt={tech}
              className={`${techSizes[tech]} shrink-0`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}