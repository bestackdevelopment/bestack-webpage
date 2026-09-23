import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AllServices } from "@/components/all-services"
import { Stack } from "@/components/stack"
import { EjemploCard } from "@/components/ejemplo-card"
import { getEjemplosDestacados } from "@/lib/ejemplos"

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

  const pasos = [
    {
      title: "Diagnóstico",
      description:
        "Revisamos qué necesitas y cómo opera hoy tu negocio. De ahí sale el alcance: qué se construye y qué no.",
    },
    {
      title: "Propuesta",
      description:
        "Te entregamos alcance, tiempo y precio por escrito, para que sepas exactamente qué estás comprando.",
    },
    {
      title: "Construcción",
      description:
        "Se construye por tramos y los ves funcionando en el camino: no esperas hasta el final para ver el sistema.",
    },
    {
      title: "Entrega y soporte",
      description:
        "El sistema se entrega funcionando y documentado, con acompañamiento y actualizaciones.",
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
              <Link href="/ejemplos">Ver Ejemplos</Link>
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

      {/* Proyectos Destacados */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Proyectos Destacados</h2>
            <p className="text-muted-foreground text-lg">
              Ejemplos de lo que podemos construir, aplicados a distintos giros
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getEjemplosDestacados().map((ejemplo) => (
              <EjemploCard key={ejemplo.slug} ejemplo={ejemplo} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base px-8"
            >
              <Link href="/ejemplos">Ver todos los ejemplos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Cómo trabajamos</h2>
            <p className="text-muted-foreground text-lg">
              Sin sorpresas: así se lleva un proyecto con BeStack.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pasos.map((paso, index) => (
              <Card
                key={paso.title}
                className="border-border hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <span className="text-sm font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Paso {index + 1}
                  </span>
                  <CardTitle className="text-xl">{paso.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{paso.description}</p>
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
