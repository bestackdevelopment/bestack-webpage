import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { IconArrowLeft, IconArrowRight, IconCheck } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EjemploGallery } from "@/components/ejemplo-gallery"
import { getEjemplo, getEjemplos } from "@/lib/ejemplos"
import { siteUrl } from "@/lib/site"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getEjemplos().map((ejemplo) => ({ slug: ejemplo.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const ejemplo = getEjemplo(slug)
  if (!ejemplo) return {}

  return {
    title: ejemplo.nombre,
    description: ejemplo.resumen,
    openGraph: {
      type: "website",
      locale: "es_MX",
      url: `${siteUrl}/ejemplos/${ejemplo.slug}`,
      title: ejemplo.nombre,
      description: ejemplo.resumen,
      // Imagen de portada: la publicará el Patrón en
      // /public/ejemplos/{slug}/og.jpg (1200×630) — docs/ejemplos.md.
      // Se añade a `images` cuando exista el archivo.
    },
  }
}

export default async function EjemploDetallePage({ params }: Props) {
  const { slug } = await params
  const ejemplo = getEjemplo(slug)
  if (!ejemplo) notFound()

  const ejemplos = getEjemplos()
  const index = ejemplos.findIndex((e) => e.slug === ejemplo.slug)
  const anterior = ejemplos[(index - 1 + ejemplos.length) % ejemplos.length]
  const siguiente = ejemplos[(index + 1) % ejemplos.length]

  return (
    <main className="min-h-screen pt-24">
      {/* 1. Portada */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
            {ejemplo.giro}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
            {ejemplo.nombre}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            {ejemplo.resumen}
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <span className="text-sm font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary">
              {ejemplo.tipo}
            </span>
            <span
              className={
                ejemplo.estado === "En operación"
                  ? "text-sm font-medium px-3 py-1.5 rounded-full bg-secondary/10 text-secondary"
                  : "text-sm font-medium px-3 py-1.5 rounded-full bg-muted text-muted-foreground"
              }
            >
              {ejemplo.estado}
            </span>
          </div>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
            <Link href="/contacto">¿Quieres algo así?</Link>
          </Button>
        </div>
      </section>

      {/* 2. El reto */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-balance">El reto</h2>
          {ejemplo.reto.map((parrafo, index) => (
            <p
              key={index}
              className="text-lg text-muted-foreground leading-relaxed mb-6 last:mb-0"
            >
              {parrafo}
            </p>
          ))}
        </div>
      </section>

      {/* 3. La solución */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-balance">La solución</h2>
          <p className="text-lg text-muted-foreground mb-12">
            {ejemplo.solucion.intro}
          </p>
          {ejemplo.solucion.piezas ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ejemplo.solucion.piezas.map((pieza, index) => (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">{pieza.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{pieza.descripcion}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {ejemplo.solucion.descripcion?.map((parrafo, index) => (
                <p
                  key={index}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  {parrafo}
                </p>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. Cómo se aplicó */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-balance">
            Cómo se aplicó
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {ejemplo.stack}
          </p>
          {/* Diagrama de arquitectura: hueco, lo arma el Patrón */}
          <div
            aria-hidden
            className="w-full aspect-[16/7] rounded-xl border border-dashed border-border/60 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 flex items-center justify-center"
          >
            <span className="text-sm text-muted-foreground/60">
              Diagrama de arquitectura (pendiente)
            </span>
          </div>
        </div>
      </section>

      {/* 5. Por qué así */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-balance">Por qué así</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Cada decisión tiene una razón: criterio, no herramientas.
          </p>
          <div className="space-y-6">
            {ejemplo.decisiones.map((decision, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <IconCheck className="w-4 h-4 text-primary" stroke={2} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {decision.titulo}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {decision.razon}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Qué cambió */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-balance">Qué cambió</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {ejemplo.queCambio}
          </p>
        </div>
      </section>

      {/* 7. Galería */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-balance">Galería</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Capturas del sistema: las publica el Patrón.
          </p>
          <EjemploGallery
            slug={ejemplo.slug}
            capturas={[1, 2, 3].map((n) => ({
              etiqueta: `Captura ${n}`,
              // imagen: `/ejemplos/${ejemplo.slug}/${n}.jpg`, — cuando exista
            }))}
          />
        </div>
      </section>

      {/* 8. CTA + navegación */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-balance">
            ¿Tienes un negocio como este?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Hablemos de lo que necesitas construir
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 mb-16">
            <Link href="/contacto">Comenzar Proyecto</Link>
          </Button>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-8">
            <Link
              href={`/ejemplos/${anterior.slug}`}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <IconArrowLeft className="w-5 h-5" stroke={2} />
              <span className="text-left">
                <span className="block text-xs uppercase tracking-wider">
                  Anterior
                </span>
                {anterior.nombre}
              </span>
            </Link>
            <Link
              href={`/ejemplos/${siguiente.slug}`}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-right">
                <span className="block text-xs uppercase tracking-wider">
                  Siguiente
                </span>
                {siguiente.nombre}
              </span>
              <IconArrowRight className="w-5 h-5" stroke={2} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}