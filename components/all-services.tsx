import Link from "next/link"
import {
  IconArrowUpRight,
  IconCertificate,
  IconChartHistogram,
  IconDeviceLaptop,
  IconPaint,
  IconShoppingCartSearch,
} from "@tabler/icons-react"

export function AllServices() {
  return (
    <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-secondary/5 via-transparent to-secondary/5 w-full p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
      {/* Container */}
      <div className="w-full flex flex-col gap-6">
        {/* First row */}
        <div className="w-full flex flex-col lg:flex-row gap-6">
          {/* Services offer */}
          <div className="min-h-[140px] w-full lg:border-r border-border/50 p-6 flex flex-col justify-between bg-gradient-to-br from-primary/5 to-transparent rounded-xl lg:rounded-none lg:rounded-l-xl">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-balance leading-tight">
              Servicios que ofrecemos
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Nos enfocamos en tus necesidades, transformando tus requerimientos
              en soluciones web de manera
              <span className="text-primary font-medium">
                {" "}
                eficaz, rápida y confiable.
              </span>
            </p>
          </div>
          {/* Information web pages */}
          <div className="min-h-[140px] w-full p-6 flex flex-col gap-5 hover:bg-muted/30 rounded-xl transition-all group">
            <div className="w-full flex items-center gap-4">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <IconDeviceLaptop className="text-primary" size={40} stroke={1.5} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">
                Páginas informativas
              </h3>
            </div>
            <div className="w-full flex flex-col gap-3 text-sm sm:text-base">
              <p className="text-muted-foreground leading-relaxed">
                Cada página está meticulosamente construida para ofrecer
                contenido claro y accesible, garantizando una experiencia de
                usuario superior.
              </p>
              <Link
                href="/servicios/paginas-informativas"
                className="w-fit flex items-center gap-2 text-primary hover:gap-3 transition-all duration-200 font-medium"
              >
                <span className="underline underline-offset-4 decoration-primary/50">
                  Ver más
                </span>
                <IconArrowUpRight className="text-primary" size={20} stroke={2} />
              </Link>
            </div>
          </div>
          {/* Corporate web pages */}
          <div className="min-h-[140px] w-full p-6 flex flex-col gap-5 hover:bg-muted/30 rounded-xl transition-all group">
            <div className="w-full flex items-center gap-4">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <IconChartHistogram className="text-primary" size={40} stroke={1.5} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">
                Páginas corporativas
              </h3>
            </div>
            <div className="w-full flex flex-col gap-3 text-sm sm:text-base">
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos tecnologías de última generación para reforzar la
                presencia de tu marca y comunicar tu profesionalismo de manera
                efectiva.
              </p>
              <Link
                href="/servicios/paginas-corporativas"
                className="w-fit flex items-center gap-2 text-primary hover:gap-3 transition-all duration-200 font-medium"
              >
                <span className="underline underline-offset-4 decoration-primary/50">
                  Ver más
                </span>
                <IconArrowUpRight className="text-primary" size={20} stroke={2} />
              </Link>
            </div>
          </div>
        </div>
        {/* Second row */}
        <div className="w-full flex flex-col lg:flex-row gap-6">
          {/* Web maintenance */}
          <div className="min-h-[140px] w-full p-6 flex flex-col gap-5 hover:bg-muted/30 rounded-xl transition-all group">
            <div className="w-full flex items-center gap-4">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <IconPaint className="text-primary" size={40} stroke={1.5} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">
                Mantenimiento web
              </h3>
            </div>
            <div className="w-full flex flex-col gap-3 text-sm sm:text-base">
              <p className="text-muted-foreground leading-relaxed">
                Nuestro servicio incluye actualizaciones regulares, monitoreo de
                seguridad, copias de seguridad automáticas y optimización del
                rendimiento. Nos encargamos de los aspectos técnicos para que tú
                puedas concentrarte en lo que mejor haces.
              </p>
              <Link
                href="/servicios/mantenimiento-web"
                className="w-fit flex items-center gap-2 text-primary hover:gap-3 transition-all duration-200 font-medium"
              >
                <span className="underline underline-offset-4 decoration-primary/50">
                  Ver más
                </span>
                <IconArrowUpRight className="text-primary" size={20} stroke={2} />
              </Link>
            </div>
          </div>
          {/* Online catalogs */}
          <div className="min-h-[140px] w-full p-6 flex flex-col gap-5 hover:bg-muted/30 rounded-xl transition-all group">
            <div className="w-full flex items-center gap-4">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <IconShoppingCartSearch className="text-primary" size={40} stroke={1.5} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">
                Catálogos en línea
              </h3>
            </div>
            <div className="w-full flex flex-col gap-3 text-sm sm:text-base">
              <p className="text-muted-foreground leading-relaxed">
                Optimiza la visualización de productos y facilita el acceso a la
                información con un catálogo en línea que se adapta a todos los
                dispositivos. Maximiza tu alcance y mejora la interacción con tu
                audiencia.
              </p>
              <Link
                href="/servicios/ecommerce"
                className="w-fit flex items-center gap-2 text-primary hover:gap-3 transition-all duration-200 font-medium"
              >
                <span className="underline underline-offset-4 decoration-primary/50">
                  Ver más
                </span>
                <IconArrowUpRight className="text-primary" size={20} stroke={2} />
              </Link>
            </div>
          </div>
          {/* Finalize your website */}
          <div className="min-h-[140px] w-full p-6 flex flex-col gap-5 hover:bg-muted/30 rounded-xl transition-all group">
            <div className="w-full flex items-center gap-4">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <IconCertificate className="text-primary" size={40} stroke={1.5} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">Finaliza tu web</h3>
            </div>
            <div className="w-full flex flex-col gap-3 text-sm sm:text-base">
              <p className="text-muted-foreground leading-relaxed">
                Ya sea que tu proyecto haya quedado estancado o necesite ajustes
                finales, nuestro equipo se encarga de llevarlo a la etapa final.
              </p>
              <Link
                href="/servicios/finaliza-tu-web"
                className="w-fit flex items-center gap-2 text-primary hover:gap-3 transition-all duration-200 font-medium"
              >
                <span className="underline underline-offset-4 decoration-primary/50">
                  Ver más
                </span>
                <IconArrowUpRight className="text-primary" size={20} stroke={2} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
