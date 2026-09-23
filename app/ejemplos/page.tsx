import Link from "next/link"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { EjemplosExplorador } from "@/components/ejemplos-explorador"
import { getEjemplos } from "@/lib/ejemplos"

export const metadata: Metadata = {
  title: "Ejemplos",
  description:
    "Esto es lo que se puede hacer: sistemas a medida, agentes IA, ecommerce y sitios corporativos aplicados a distintos giros.",
}

export default function EjemplosPage() {
  const ejemplos = getEjemplos()

  return (
    <main className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Ejemplos
            </span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance">
            Esto es lo que se puede hacer — aplicado a distintos giros. Si tu
            negocio se parece a alguno, escríbenos.
          </p>
        </div>
      </section>

      {/* Índice con filtros */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <EjemplosExplorador ejemplos={ejemplos} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Tienes un negocio como estos?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Hablemos de lo que necesitas construir
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
            <Link href="/contacto">Comenzar Proyecto</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}