import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  IconArrowLeft,
  IconArrowRight,
  IconBox,
} from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArquitecturaFlow } from "@/components/arquitectura-flow"
import { CasoCover } from "@/components/caso-cover"
import { CasoGallery } from "@/components/caso-gallery"
import { ServicioTag } from "@/components/servicio-tag"
import { Reveal } from "@/components/reveal"
import { SectionHeader } from "@/components/section-header"
import { getCaso, getCasos } from "@/lib/casos-de-uso"
import { siteUrl } from "@/lib/site"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getCasos().map((caso) => ({ slug: caso.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const caso = getCaso(slug)
  if (!caso) return {}

  return {
    title: caso.nombre,
    description: caso.resumen,
    openGraph: {
      type: "website",
      locale: "es_MX",
      url: `${siteUrl}/casos-de-uso/${caso.slug}`,
      title: caso.nombre,
      description: caso.resumen,
      // Imagen de portada: la publicará el Patrón en
      // /public/casos-de-uso/{slug}/og.jpg (1200×630) — docs/casos-de-uso.md.
      // Se añade a `images` cuando exista el archivo.
    },
  }
}

export default async function CasoDetallePage({ params }: Props) {
  const { slug } = await params
  const caso = getCaso(slug)
  if (!caso) notFound()

  const casos = getCasos()
  const index = casos.findIndex((e) => e.slug === caso.slug)
  const anterior = casos[(index - 1 + casos.length) % casos.length]
  const siguiente = casos[(index + 1) % casos.length]

  return (
    <main className="min-h-screen overflow-x-clip">
      {/* 1. Portada */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/casos-de-uso"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <IconArrowLeft className="w-4 h-4" stroke={2} />
            Volver a Casos de uso
          </Link>

          <div className="text-center">
            <p className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
              {caso.giro}
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pb-[0.15em]">
                {caso.nombre}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              {caso.resumen}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
              {caso.tags.map((tagId) => (
                <ServicioTag key={tagId} id={tagId} />
              ))}
              <span
                className={
                  caso.estado === "En operación"
                    ? "text-xs font-medium px-2.5 py-1 rounded-full bg-secondary/10 text-foreground/80"
                    : "text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                }
              >
                {caso.estado}
              </span>
            </div>
            <Button size="lg" asChild>
              <Link href="/contacto">¿Quieres algo así?</Link>
            </Button>
          </div>

          {/* Imagen de portada (placeholder 16:9) */}
          <CasoCover slug={caso.slug} className="mt-12 rounded-xl" />
        </div>
      </section>

      {/* 2. El reto */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionHeader title="El reto" />
          <Reveal direction="up">
            <div className="space-y-6">
              {caso.reto.map((parrafo, index) => (
                <p
                  key={index}
                  className="text-xl text-foreground/80 leading-relaxed"
                >
                  {parrafo}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. La solución */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="La solución" subtitle={caso.solucion.intro} />
          {caso.solucion.piezas ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caso.solucion.piezas.map((pieza, index) => (
                <Reveal key={index} direction="up" delay={(index % 3) * 80}>
                  <Card className="border-border h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                        <IconBox
                          className="w-6 h-6 text-primary"
                          stroke={1.5}
                        />
                      </div>
                      <CardTitle className="text-xl">{pieza.titulo}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {pieza.descripcion}
                      </p>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal direction="up">
              <div className="max-w-3xl mx-auto space-y-4">
                {caso.solucion.descripcion?.map((parrafo, index) => (
                  <p
                    key={index}
                    className="text-lg text-muted-foreground leading-relaxed"
                  >
                    {parrafo}
                  </p>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* 4. Galería */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Galería"
            subtitle="Así se ve el sistema funcionando."
          />
          <Reveal direction="up">
            <CasoGallery
              capturas={[1, 2, 3].map((n) => ({
                etiqueta: `Captura ${n}`,
                // imagen: `/casos-de-uso/${caso.slug}/${n}.jpg`, — cuando exista
              }))}
            />
          </Reveal>
        </div>
      </section>

      {/* 5. Cómo se aplicó */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="Cómo se aplicó" />
          <Reveal direction="up">
            {caso.arquitectura ? (
              <ArquitecturaFlow
                nodos={caso.arquitectura.nodos}
                aristas={caso.arquitectura.aristas}
              />
            ) : (
              /* Diagrama de arquitectura: hueco pendiente */
              <div
                aria-hidden
                className="w-full aspect-[16/7] rounded-xl border border-dashed border-border/60 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 flex items-center justify-center"
              >
                <span className="text-sm text-muted-foreground">
                  Diagrama de arquitectura
                </span>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* 6. Por qué así */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Por qué así"
            subtitle="Cada decisión tiene una razón: criterio, no herramientas."
          />
          <div className="space-y-6">
            {caso.decisiones.map((decision, index) => (
              <Reveal key={index} direction="up" delay={(index % 4) * 80}>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold text-primary">
                    {index + 1}
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Qué cambió — opcional: un sistema que no reemplazó una operación anterior no la lleva */}
      {caso.queCambio && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-3xl mx-auto">
            <SectionHeader title="Qué cambió" />
            <Reveal direction="up">
              <p className="text-xl text-foreground/80 leading-relaxed">
                {caso.queCambio}
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* 8. CTA + navegación */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-balance">
            ¿Tienes un negocio como este?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Hablemos de lo que necesitas construir
          </p>
          <Button size="lg" asChild className="mb-16">
            <Link href="/contacto">Comenzar Proyecto</Link>
          </Button>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-8">
            <Link
              href={`/casos-de-uso/${anterior.slug}`}
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
              href={`/casos-de-uso/${siguiente.slug}`}
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
        </Reveal>
      </section>
    </main>
  )
}
