import Link from "next/link"
import { IconFolderCode } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AllServices } from "@/components/all-services"
import { Stack } from "@/components/stack"

export default function HomePage() {
  const beneficios = [
    {
      title: "Tecnología Moderna",
      description:
        "Construimos con tecnologías de última generación para crear sitios rápidos, seguros y escalables",
    },
    {
      title: "Diseño Profesional",
      description:
        "Interfaces minimalistas y elegantes optimizadas para conversión",
    },
    {
      title: "SEO Optimizado",
      description:
        "Código limpio y estructura pensada para posicionamiento en buscadores",
    },
    {
      title: "Soporte Continuo",
      description:
        "Acompañamiento técnico y actualizaciones durante todo el proyecto",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 -z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance mb-6">
            Desarrollo Web
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
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
              className="bg-primary hover:bg-primary/90 text-lg px-8"
            >
              <Link href="/contacto">Comenzar Proyecto</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 bg-transparent"
            >
              <Link href="/proyectos">Ver Portfolio</Link>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beneficios.map((beneficio, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{beneficio.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{beneficio.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="servicios"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-muted-foreground text-lg">
              Soluciones completas para tu presencia digital
            </p>
          </div>
          <AllServices />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Stack />
        </div>
      </section>

      {/* Portfolio Preview — EN STANDBY: pendiente definir los proyectos reales */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Proyectos Destacados</h2>
            <p className="text-muted-foreground text-lg">
              Estamos preparando nuestra selección de proyectos
            </p>
          </div>
          <Card className="max-w-2xl mx-auto border-dashed">
            <CardContent className="py-16 flex flex-col items-center text-center gap-4">
              <IconFolderCode className="w-12 h-12 text-primary" stroke={1.5} />
              <p className="text-lg font-semibold">Próximamente</p>
              <p className="text-muted-foreground">
                Muy pronto mostraremos aquí nuestros trabajos más recientes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-muted-foreground text-lg">
              Testimonios reales de proyectos exitosos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <Card key={testimonial} className="border-border">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4 italic">
                    &quot;Excelente servicio y resultados. El equipo de BeStack
                    superó nuestras expectativas.&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary" />
                    <div>
                      <p className="font-semibold">Cliente {testimonial}</p>
                      <p className="text-sm text-muted-foreground">Empresa</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
            ¿Listo para comenzar tu proyecto?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 text-balance">
            Hablemos sobre tus ideas y convirtámoslas en realidad
          </p>
          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-primary/90 text-lg px-12"
          >
            <Link href="/contacto">Contactar Ahora</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
