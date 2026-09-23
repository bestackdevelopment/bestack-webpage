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
              // Contenedor uniforme: object-contain escala proporcionalmente
              // cada logo dentro de la misma caja, sin deformarse
              className="w-14 h-14 shrink-0 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  )
}