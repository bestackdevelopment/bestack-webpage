import Link from "next/link"
import type { Metadata } from "next"
import {
  IconDeviceDesktop,
  IconFileText,
  IconPalette,
  IconPresentation,
  IconRocket,
  IconSparkles,
  IconTarget,
  IconTrendingUp,
  IconWorld,
} from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Páginas Informativas",
  description:
    "Sitios informativos modernos y optimizados. Diseño profesional, SEO integrado y compatibilidad total para destacar tu proyecto.",
}

export default function PaginasInformativasPage() {
  const beneficios = [
    {
      icon: IconSparkles,
      text: "Diseño moderno y atractivo",
      color: "from-[#FD4B5B] to-[#FF6B7A]",
    },
    {
      icon: IconTrendingUp,
      text: "Optimización SEO integrada",
      color: "from-[#42BEC0] to-[#5AD5D7]",
    },
    {
      icon: IconRocket,
      text: "Rendimiento de carga superior",
      color: "from-[#665DE2] to-[#8178E8]",
    },
    {
      icon: IconDeviceDesktop,
      text: "Adaptable a cualquier dispositivo",
      color: "from-[#FD4B5B] to-[#665DE2]",
    },
    {
      icon: IconFileText,
      text: "Contenido actualizable",
      color: "from-[#42BEC0] to-[#665DE2]",
    },
    {
      icon: IconWorld,
      text: "Integración con redes sociales",
      color: "from-[#665DE2] to-[#42BEC0]",
    },
  ]

  const casosUso = [
    {
      icon: IconPalette,
      title: "Portafolios Creativos",
      description:
        "Destaca tu talento y experiencia con un diseño que refleja tu identidad profesional",
      gradient: "from-[#FD4B5B]/10 to-[#FF6B7A]/5",
    },
    {
      icon: IconFileText,
      title: "Blogs y Publicaciones",
      description:
        "Comparte conocimiento y construye autoridad en tu sector con contenido bien estructurado",
      gradient: "from-[#42BEC0]/10 to-[#5AD5D7]/5",
    },
    {
      icon: IconTarget,
      title: "Páginas de Captura",
      description:
        "Convierte visitas en oportunidades reales con diseños enfocados en la conversión",
      gradient: "from-[#665DE2]/10 to-[#8178E8]/5",
    },
    {
      icon: IconPresentation,
      title: "Sitios de Proyecto",
      description:
        "Presenta iniciativas, servicios o productos con claridad y profesionalismo",
      gradient: "from-[#FD4B5B]/10 to-[#42BEC0]/5",
    },
  ]

  const faqs = [
    {
      question: "¿Cuánto tiempo toma desarrollar una página informativa?",
      answer:
        "El desarrollo toma entre 1 y 2 semanas, ajustándose a la complejidad del contenido y las funcionalidades que requieras.",
    },
    {
      question: "¿Incluye redacción de contenido?",
      answer:
        "Trabajamos con el contenido que nos proporciones, y también podemos ayudarte a crear textos profesionales si lo necesitas.",
    },
    {
      question: "¿El sitio funciona bien en móviles?",
      answer:
        "Totalmente. Todos nuestros desarrollos están optimizados para ofrecer una experiencia fluida en cualquier dispositivo.",
    },
    {
      question: "¿Puedo modificar el contenido después?",
      answer:
        "Por defecto, el contenido es estático. Sin embargo, si deseas gestionar tu contenido de forma autónoma, podemos integrar un sistema de gestión de contenidos (CMS) como servicio adicional, o bien, puedes contratar nuestro servicio de Administración web y soporte para que nosotros manejemos las actualizaciones por ti.",
    },
    {
      question: "¿Cuántas propuestas de diseño recibiré?",
      answer:
        "Entregamos dos propuestas de diseño para que puedas elegir la que mejor se adapte a tu visión. Una vez seleccionada, realizamos cambios limitados según corresponda para ajustar detalles específicos.",
    },
  ]

  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FD4B5B]/5 via-[#42BEC0]/5 to-[#665DE2]/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(253,75,91,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(66,190,192,0.1),transparent_50%)]" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#FD4B5B]/20 to-[#42BEC0]/20 border border-[#FD4B5B]/30 text-sm font-semibold">
              Diseño Web Profesional
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold mb-8 text-balance font-[family-name:var(--font-jura)] bg-gradient-to-r from-[#FD4B5B] via-[#42BEC0] to-[#665DE2] bg-clip-text text-transparent">
            Páginas Informativas
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 text-balance max-w-3xl mx-auto leading-relaxed">
            Sitios informativos modernos diseñados para destacar tu proyecto con
            tecnología de vanguardia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-[#FD4B5B] to-[#FF6B7A] hover:opacity-90 transition-opacity shadow-lg shadow-[#FD4B5B]/25"
            >
              <Link href="/contacto">Empieza tu sitio</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-[#42BEC0]/50 hover:bg-[#42BEC0] hover:text-white hover:border-[#42BEC0] transition-all bg-transparent"
            >
              <Link href="/proyectos">Ver ejemplos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center font-[family-name:var(--font-jura)] bg-gradient-to-r from-[#665DE2] to-[#42BEC0] bg-clip-text text-transparent">
            ¿Qué incluye este servicio?
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-[#FD4B5B]/30 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FD4B5B]/20 to-[#FD4B5B]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <IconPalette className="w-6 h-6 text-[#FD4B5B]" stroke={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  1. Diseño moderno y adaptable
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Su sitio se presenta con una estética profesional que mantiene
                  coherencia con su identidad visual y se ajusta correctamente a
                  cualquier dispositivo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-[#42BEC0]/30 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#42BEC0]/20 to-[#42BEC0]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <IconFileText className="w-6 h-6 text-[#42BEC0]" stroke={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  2. Estructura de contenido clara y estratégica
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Organizamos la información de forma que sus visitantes
                  comprendan de inmediato quién es usted, qué ofrece y cómo pueden
                  avanzar al siguiente paso.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-[#665DE2]/30 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#665DE2]/20 to-[#665DE2]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <IconWorld className="w-6 h-6 text-[#665DE2]" stroke={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  3. Preparación para buscadores (SEO)
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Incluimos configuraciones que ayudan a que su proyecto sea más
                  visible en motores de búsqueda mediante textos bien
                  estructurados, títulos adecuados y contenido optimizado.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-[#FD4B5B]/30 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FD4B5B]/20 to-[#42BEC0]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <IconTarget className="w-6 h-6 text-[#FD4B5B]" stroke={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  4. Formulario de contacto optimizado para conversión
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Su página integra un formulario diseñado para que sus
                  visitantes puedan comunicarse de forma rápida y efectiva.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-[#42BEC0]/30 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#42BEC0]/20 to-[#665DE2]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <IconDeviceDesktop
                  className="w-6 h-6 text-[#42BEC0]"
                  stroke={1.5}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  5. Enlaces directos a redes sociales y WhatsApp
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Agregamos accesos que facilitan la interacción directa con su
                  marca, incluyendo un mensaje inicial predefinido para WhatsApp.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-[#665DE2]/30 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#665DE2]/20 to-[#FD4B5B]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <IconSparkles className="w-6 h-6 text-[#665DE2]" stroke={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  6. Animaciones sutiles que elevan la experiencia
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Incorporamos transiciones suaves y bien equilibradas que
                  aportan dinamismo sin distraer del contenido.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-[#FD4B5B]/30 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#665DE2]/20 to-[#42BEC0]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <IconRocket className="w-6 h-6 text-[#FD4B5B]" stroke={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  7. Contenido e imágenes optimizados para una mejor experiencia
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Su sitio aprovecha técnicas de optimización que mejoran la
                  velocidad de carga y garantizan una navegación agradable.
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center mt-16">
            <div className="w-full max-w-lg mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FD4B5B]/10 via-[#42BEC0]/10 to-[#665DE2]/10 rounded-full blur-3xl" />

              <div className="relative w-full aspect-square flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 w-4/5">
                  <div className="col-span-2 bg-gradient-to-br from-[#665DE2]/20 to-[#665DE2]/5 rounded-xl p-6 border border-[#665DE2]/30 backdrop-blur-sm">
                    <div className="space-y-2">
                      <div className="h-2 bg-[#665DE2]/40 rounded w-3/4" />
                      <div className="h-2 bg-[#665DE2]/30 rounded w-full" />
                      <div className="h-2 bg-[#665DE2]/20 rounded w-2/3" />
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#42BEC0]/20 to-[#42BEC0]/5 rounded-xl p-4 border border-[#42BEC0]/30 backdrop-blur-sm flex items-center justify-center">
                    <IconDeviceDesktop
                      className="w-10 h-10 text-[#42BEC0]"
                      stroke={1.5}
                    />
                  </div>

                  <div className="bg-gradient-to-br from-[#FD4B5B]/20 to-[#FD4B5B]/5 rounded-xl p-4 border border-[#FD4B5B]/30 backdrop-blur-sm flex items-center justify-center">
                    <IconTrendingUp
                      className="w-10 h-10 text-[#FD4B5B]"
                      stroke={1.5}
                    />
                  </div>

                  <div className="col-span-2 bg-gradient-to-br from-[#42BEC0]/20 to-[#665DE2]/20 rounded-xl p-6 border border-[#42BEC0]/30 backdrop-blur-sm flex items-center justify-center gap-3">
                    <IconTarget
                      className="w-12 h-12 text-[#42BEC0]"
                      stroke={1.5}
                    />
                    <div className="flex-1 space-y-2">
                      <div className="h-2 bg-[#42BEC0]/40 rounded w-full" />
                      <div className="h-2 bg-[#42BEC0]/30 rounded w-3/4" />
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#FD4B5B] to-[#FF6B7A] flex items-center justify-center shadow-2xl shadow-[#FD4B5B]/40">
                    <IconSparkles className="w-10 h-10 text-white" stroke={2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-[family-name:var(--font-jura)]">
              Beneficios Principales
            </h2>
            <p className="text-muted-foreground text-lg">
              Todo lo que necesitas para destacar en línea
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((beneficio, index) => {
              const Icon = beneficio.icon
              return (
                <div
                  key={index}
                  className="group relative bg-card p-6 rounded-xl border border-border hover:border-[#FD4B5B]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#FD4B5B]/10 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${beneficio.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" stroke={2} />
                    </div>
                    <div className="flex-1 pt-1">
                      <span className="font-semibold text-base leading-snug">
                        {beneficio.text}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-[family-name:var(--font-jura)]">
              Casos de Uso
            </h2>
            <p className="text-muted-foreground text-lg">
              Soluciones adaptadas a tus necesidades
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {casosUso.map((caso, index) => {
              const Icon = caso.icon
              return (
                <Card
                  key={index}
                  className="relative border-border hover:border-[#42BEC0]/50 transition-all duration-300 hover:shadow-xl group overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${caso.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  <CardHeader className="relative">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#665DE2]/20 to-[#42BEC0]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-[#665DE2]" stroke={1.5} />
                      </div>
                      <CardTitle className="text-xl font-[family-name:var(--font-jura)]">
                        {caso.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="relative">
                    <p className="text-muted-foreground leading-relaxed">
                      {caso.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-[family-name:var(--font-jura)]">
              Preguntas Frecuentes
            </h2>
            <p className="text-muted-foreground text-lg">Resolvemos tus dudas</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card px-6 rounded-xl border border-border hover:border-[#665DE2]/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-[#665DE2] hover:no-underline data-[state=open]:text-[#665DE2] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-[family-name:var(--font-jura)]">
            ¿Listo para crear tu página informativa?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 text-balance">
            Conversemos sobre tu proyecto y te enviaremos una propuesta
            personalizada
          </p>
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-[#FD4B5B] to-[#FF6B7A] hover:opacity-90 transition-opacity shadow-xl shadow-[#FD4B5B]/30"
          >
            <Link href="/contacto">Contactar Ahora</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
