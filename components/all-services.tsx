import Link from "next/link"
import type { ComponentType } from "react"
import {
  IconArrowUpRight,
  IconCertificate,
  IconChartHistogram,
  IconDeviceLaptop,
  IconPaint,
  IconRobot,
  IconShoppingBag,
  IconShoppingCartSearch,
} from "@tabler/icons-react"

type Accent = "primary" | "secondary" | "accent"

type TablerIcon = ComponentType<{
  className?: string
  size?: number
  stroke?: number
}>

type Service = {
  icon: TablerIcon
  title: string
  description: string
  href: string
  accent: Accent
}

const services: Service[] = [
  {
    icon: IconDeviceLaptop,
    title: "Páginas informativas",
    href: "/servicios/paginas-informativas",
    accent: "primary",
    description:
      "Cada página está meticulosamente construida para ofrecer contenido claro y accesible, garantizando una experiencia de usuario superior.",
  },
  {
    icon: IconChartHistogram,
    title: "Páginas corporativas",
    href: "/servicios/paginas-corporativas",
    accent: "secondary",
    description:
      "Utilizamos tecnologías de última generación para reforzar la presencia de tu marca y comunicar tu profesionalismo de manera efectiva.",
  },
  {
    icon: IconPaint,
    title: "Mantenimiento web",
    href: "/servicios/mantenimiento-web",
    accent: "accent",
    description:
      "Nuestro servicio incluye actualizaciones regulares, monitoreo de seguridad, copias de seguridad automáticas y optimización del rendimiento. Nos encargamos de los aspectos técnicos para que tú puedas concentrarte en lo que mejor haces.",
  },
  {
    icon: IconShoppingCartSearch,
    title: "Catálogos en línea",
    href: "/servicios/catalogos-en-linea",
    accent: "primary",
    description:
      "Optimiza la visualización de productos y facilita el acceso a la información con un catálogo en línea que se adapta a todos los dispositivos. Maximiza tu alcance y mejora la interacción con tu audiencia.",
  },
  {
    icon: IconShoppingBag,
    title: "Tienda en línea",
    href: "/servicios/tienda-en-linea",
    accent: "secondary",
    description:
      "Vende tus productos en línea con una tienda rápida, segura y fácil de administrar.",
  },
  {
    icon: IconCertificate,
    title: "Finaliza tu web",
    href: "/servicios/finaliza-tu-web",
    accent: "secondary",
    description:
      "Ya sea que tu proyecto haya quedado estancado o necesite ajustes finales, nuestro equipo se encarga de llevarlo a la etapa final.",
  },
  {
    icon: IconRobot,
    title: "Agente IA",
    href: "/servicios/agente-ia",
    accent: "accent",
    description:
      "Un agente de IA que aprende cómo funciona tu negocio y lo opera contigo. Tú decides qué hace, y evolucionan juntos.",
  },
]

/** Fondo del icono: degradado suave del acento + refuerzo al hover. */
const accentBox: Record<Accent, string> = {
  primary:
    "bg-gradient-to-br from-primary/15 to-primary/5 group-hover:from-primary/25 group-hover:to-primary/10",
  secondary:
    "bg-gradient-to-br from-secondary/15 to-secondary/5 group-hover:from-secondary/25 group-hover:to-secondary/10",
  accent:
    "bg-gradient-to-br from-accent/15 to-accent/5 group-hover:from-accent/25 group-hover:to-accent/10",
}

const accentIcon: Record<Accent, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
}

const accentDecoration: Record<Accent, string> = {
  primary: "decoration-primary/50",
  secondary: "decoration-secondary/50",
  accent: "decoration-accent/50",
}

const accentLinkHover: Record<Accent, string> = {
  primary: "group-hover:text-primary",
  secondary: "group-hover:text-secondary",
  accent: "group-hover:text-accent",
}

/** Textura al hover: tinte suave del acento + sombra. */
const accentCardHover: Record<Accent, string> = {
  primary: "hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10",
  secondary: "hover:bg-secondary/5 hover:shadow-lg hover:shadow-secondary/10",
  accent: "hover:bg-accent/5 hover:shadow-lg hover:shadow-accent/10",
}

const beforeLine =
  "relative lg:before:content-[''] lg:before:absolute lg:before:inset-x-6 lg:before:top-0 lg:before:h-px lg:before:bg-gradient-to-r lg:before:from-transparent lg:before:via-muted-foreground/40 lg:before:to-transparent"
const afterLine =
  "lg:after:content-[''] lg:after:absolute lg:after:inset-y-6 lg:after:right-0 lg:after:w-px lg:after:bg-gradient-to-b lg:after:from-transparent lg:after:via-muted-foreground/40 lg:after:to-transparent"

function ServiceCard({
  service,
  showRight = false,
  className = "",
}: {
  service: Service
  showRight?: boolean
  className?: string
}) {
  const Icon = service.icon

  return (
    <div
      className={`min-h-[140px] w-full ${beforeLine} ${showRight ? afterLine : ""} ${accentCardHover[service.accent]} p-6 flex flex-col gap-5 rounded-xl transition-all group ${className}`}
    >
      <div className="w-full flex items-center gap-4">
        <div
          className={`p-2 rounded-lg ${accentBox[service.accent]} transition-colors`}
        >
          <Icon className={accentIcon[service.accent]} size={40} stroke={1.5} />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold">{service.title}</h3>
      </div>
      <div className="w-full flex flex-col gap-3 text-sm sm:text-base">
        <p className="text-foreground/80 leading-relaxed">
          {service.description}
        </p>
        <Link
          href={service.href}
          className={`w-fit flex items-center gap-2 text-foreground/80 ${accentLinkHover[service.accent]} hover:gap-3 transition-all duration-200 font-medium`}
        >
          <span
            className={`underline underline-offset-4 ${accentDecoration[service.accent]}`}
          >
            Ver más
          </span>
          <IconArrowUpRight
            className={accentIcon[service.accent]}
            size={20}
            stroke={2}
          />
        </Link>
      </div>
    </div>
  )
}

export function AllServices() {
  return (
    <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-secondary/10 via-transparent to-secondary/10 w-full p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
      {/* Container */}
      <div className="w-full flex flex-col gap-6">
        {/* First row */}
        <div className="w-full flex flex-col lg:flex-row gap-6">
          {/* Services offer */}
          <div className="min-h-[140px] w-full relative lg:before:content-[''] lg:before:absolute lg:before:inset-x-6 lg:before:top-0 lg:before:h-px lg:before:bg-gradient-to-r lg:before:from-transparent lg:before:via-muted-foreground/40 lg:before:to-transparent lg:after:content-[''] lg:after:absolute lg:after:inset-y-6 lg:after:right-0 lg:after:w-px lg:after:bg-gradient-to-b lg:after:from-transparent lg:after:via-muted-foreground/40 lg:after:to-transparent p-6 flex flex-col justify-between bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-xl lg:rounded-none lg:rounded-l-xl">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-balance leading-tight">
              Servicios que ofrecemos
            </h2>
            <p className="text-foreground/80 text-base leading-relaxed">
              Nos enfocamos en tus necesidades, transformando tus requerimientos
              en soluciones web de manera
              <span className="text-foreground/80 font-semibold">
                {" "}
                eficaz, rápida y confiable.
              </span>
            </p>
          </div>
          <ServiceCard service={services[0]} showRight />
          <ServiceCard service={services[1]} />
        </div>
        {/* Second row */}
        <div className="w-full flex flex-col lg:flex-row gap-6">
          <ServiceCard service={services[2]} showRight />
          <ServiceCard service={services[3]} showRight />
          <ServiceCard service={services[4]} />
        </div>
        {/* Third row */}
        <div className="w-full flex flex-col lg:flex-row gap-6">
          <ServiceCard
            service={services[5]}
            showRight
            className="lg:grow-0 lg:shrink-0 lg:basis-[calc((100%_-_3rem)/3)]"
          />
          <ServiceCard
            service={services[6]}
            className="lg:grow-0 lg:shrink-0 lg:basis-[calc((100%_-_3rem)/3)]"
          />
        </div>
      </div>
    </div>
  )
}
