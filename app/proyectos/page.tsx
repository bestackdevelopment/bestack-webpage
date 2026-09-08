import Link from "next/link"
import type { Metadata } from "next"
import { IconRocket } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Conoce nuestros proyectos destacados y el trabajo que hemos realizado para nuestros clientes.",
}

export default function ProyectosPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">
            Nuestro{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance">
            Proyectos destacados que demuestran nuestra experiencia y calidad
          </p>
        </div>
      </section>

      {/* Coming soon — sección en standby hasta definir los proyectos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Card className="border-dashed">
            <CardContent className="py-20 flex flex-col items-center text-center gap-4">
              <IconRocket className="w-14 h-14 text-primary" stroke={1.5} />
              <h2 className="text-2xl font-bold">Próximamente</h2>
              <p className="text-muted-foreground max-w-md">
                Estamos seleccionando los proyectos que mejor representan nuestro
                trabajo. Vuelve pronto para conocerlos.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Quieres un proyecto como estos?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Conversemos sobre tu idea y creemos algo increíble juntos
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
            <Link href="/contacto">Comenzar Proyecto</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
