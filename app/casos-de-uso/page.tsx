import Link from "next/link"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { CasosExplorador } from "@/components/casos-explorador"
import { Reveal } from "@/components/reveal"
import { getCasos } from "@/lib/casos-de-uso"

export const metadata: Metadata = {
  title: "Casos de uso",
  description:
    "Esto es lo que se puede hacer: sistemas a medida, agentes IA, ecommerce y sitios corporativos aplicados a distintos giros.",
}

export default function CasosPage() {
  const casos = getCasos()

  return (
    <main className="min-h-screen overflow-x-clip">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pb-[0.15em]">
              Casos de uso
            </span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance">
            Esto es lo que se puede hacer, aplicado a distintos giros. Si tu
            negocio se parece a alguno, escríbenos.
          </p>
        </div>
      </section>

      {/* Índice con filtros */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal direction="up">
            <CasosExplorador casos={casos} />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Tienes un negocio como estos?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Hablemos de lo que necesitas construir
          </p>
          <Button size="lg" asChild>
            <Link href="/contacto">Comenzar Proyecto</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
