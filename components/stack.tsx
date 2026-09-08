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
]

export function Stack() {
  const row = [...techs, ...techs]

  return (
    <div className="w-full flex flex-col justify-center items-center gap-[50px]">
      <h3 className="text-[24px] font-semibold">Tecnologías utilizadas</h3>
      <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-10">
          {row.map((tech, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={index}
              src={`/stack/${tech}.svg`}
              alt={tech}
              className="h-[80px] w-auto shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
