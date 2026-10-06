import Link from "next/link"
import {
  IconCpu,
  IconFileText,
  IconHammer,
  IconHeadset,
  IconPalette,
  IconRocket,
  IconSearch,
  IconTrendingUp,
} from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AllServices } from "@/components/all-services"
import { Stack } from "@/components/stack"
import { CasoCard } from "@/components/caso-card"
import { Reveal } from "@/components/reveal"
import { getCasosDestacados } from "@/lib/casos-de-uso"

export default function HomePage() {
  const beneficios = [
    {
      icon: IconCpu,
      title: "Tecnología Moderna",
      description:
        "Construimos con tecnologías de última generación para crear sitios rápidos, seguros y escalables",
    },
    {
      icon: IconPalette,
      title: "Diseño Profesional",
      description:
        "Interfaces minimalistas y elegantes optimizadas para conversión",
    },
    {
      icon: IconTrendingUp,
      title: "SEO y GEO",
      description:
        "Código limpio y estructura pensada para posicionamiento en buscadores y agentes de IA",
    },
    {
      icon: IconHeadset,
      title: "Soporte Continuo",
      description:
        "Acompañamiento técnico y actualizaciones durante todo el proyecto",
    },
  ]

  const pasos = [
    {
      icon: IconSearch,
      title: "Diagnóstico",
      description:
        "Revisamos qué necesitas y cómo opera hoy tu negocio. De ahí sale el alcance: qué se construye y qué no.",
    },
    {
      icon: IconFileText,
      title: "Propuesta",
      description:
        "Te entregamos alcance, tiempo y precio por escrito, para que sepas exactamente qué estás comprando.",
    },
    {
      icon: IconHammer,
      title: "Construcción",
      description:
        "Se construye por tramos y los ves funcionando en el camino: no esperas hasta el final para ver el sistema.",
    },
    {
      icon: IconRocket,
      title: "Entrega y soporte",
      description:
        "El sistema se entrega funcionando y documentado, con acompañamiento y actualizaciones.",
    },
  ]

  const lineGradients = [
    "from-primary to-secondary",
    "from-secondary to-accent",
    "from-accent to-primary",
  ]

  return (
    <main className="min-h-screen overflow-x-clip">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 -z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance mb-6">
            Desarrollo Web
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pb-[0.15em]">
              Profesional y Moderno
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 text-balance">
            Creamos sitios web elegantes, rápidos y optimizados con las mejores
            tecnologías del mercado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="px-8"
            >
              <Link href="/contacto">Comenzar Proyecto</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-accent/50 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all text-lg px-8 bg-transparent"
            >
              <Link href="/casos-de-uso">Ver casos de uso</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">¿Por qué elegirnos?</h2>
            <p className="text-muted-foreground text-lg">
              Calidad, tecnología y resultados garantizados
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
            {beneficios.map((beneficio, index) => {
              const Icon = beneficio.icon

              return (
                <Reveal
                  key={beneficio.title}
                  direction="up"
                  delay={(index % 4) * 80}
                >
                  <Card className="border-border hover:shadow-lg transition-shadow h-full">
                    <CardHeader>
                      <div className="w-fit p-2 rounded-lg bg-primary/10">
                        <Icon
                          className="text-primary"
                          size={40}
                          stroke={1.5}
                          aria-hidden="true"
                        />
                      </div>
                      <CardTitle className="text-xl">
                        {beneficio.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {beneficio.description}
                      </p>
                    </CardContent>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="servicios"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-muted-foreground text-lg">
              Soluciones completas para tu presencia digital
            </p>
          </div>
          <Reveal direction="up">
            <AllServices />
          </Reveal>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal direction="up">
            <Stack />
          </Reveal>
        </div>
      </section>

      {/* Proyectos Destacados */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Proyectos Destacados</h2>
            <p className="text-muted-foreground text-lg">
              Ejemplos de lo que podemos construir, aplicados a distintos giros
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCasosDestacados().map((caso, index) => (
              <Reveal
                key={caso.slug}
                direction="up"
                delay={(index % 3) * 80}
              >
                <CasoCard caso={caso} />
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base px-8"
            >
              <Link href="/casos-de-uso">Ver todos los casos de uso</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Cómo trabajamos</h2>
            <p className="text-muted-foreground text-lg">
              Sin sorpresas: así se lleva un proyecto con BeStack.
            </p>
          </div>
          <Reveal direction="up">
          <ol className="relative">
            {pasos.map((paso, index) => {
              const Icon = paso.icon

              return (
                <li
                  key={paso.title}
                  className="relative flex gap-5 pb-10 last:pb-0"
                >
                  {index < pasos.length - 1 && (
                    <span
                      aria-hidden="true"
                      className={`absolute left-5 top-10 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b ${lineGradients[index % lineGradients.length]}`}
                    />
                  )}
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-[19px] font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="mb-1 flex items-center gap-2 text-xl font-semibold">
                      <Icon
                        className="size-5 shrink-0 text-primary"
                        stroke={1.5}
                        aria-hidden="true"
                      />
                      {paso.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {paso.description}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <Reveal direction="up" className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
            ¿Listo para comenzar tu proyecto?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 text-balance">
            Hablemos sobre tus ideas y convirtámoslas en realidad
          </p>
          <Button
            size="lg"
            asChild
            className="px-12"
          >
            <Link href="/contacto">Contactar Ahora</Link>
          </Button>
        </Reveal>
      </section>
    </main>
  )
}
