import Link from "next/link"
import { IconCheck } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type Accent = "primary" | "secondary" | "accent"

const accentButton: Record<Accent, string> = {
  primary: "bg-primary hover:bg-primary/90",
  secondary: "bg-secondary hover:bg-secondary/90",
  accent: "bg-accent hover:bg-accent/90",
}

const accentCircle: Record<Accent, string> = {
  primary: "bg-primary/20",
  secondary: "bg-secondary/20",
  accent: "bg-accent/20",
}

const accentText: Record<Accent, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
}

export type ServiceLandingData = {
  hero: {
    titleLead: string
    titleAccent: string
    /** Gradiente Tailwind para el texto resaltado, p. ej. "from-accent to-primary" */
    accentGradient: string
    subtitle: string
    cta: string
  }
  /** Color de marca dominante de la página (botones y checks) */
  accent: Accent
  intro: {
    heading: string
    body: string[]
  }
  beneficios: string[]
  casosUso: { title: string; description: string }[]
  faqs: { question: string; answer: string }[]
  final: {
    heading: string
    body: string
    cta: string
  }
}

export function ServiceLanding({ data }: { data: ServiceLandingData }) {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">
            {data.hero.titleLead}{" "}
            <span
              className={`bg-gradient-to-r ${data.hero.accentGradient} bg-clip-text text-transparent`}
            >
              {data.hero.titleAccent}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 text-balance">
            {data.hero.subtitle}
          </p>
          <Button size="lg" asChild className={accentButton[data.accent]}>
            <Link href="/contacto">{data.hero.cta}</Link>
          </Button>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">{data.intro.heading}</h2>
          {data.intro.body.map((paragraph, index) => (
            <p
              key={index}
              className="text-muted-foreground text-lg leading-relaxed mb-8 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Beneficios Principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.beneficios.map((beneficio, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border"
              >
                <div
                  className={`w-8 h-8 rounded-full ${accentCircle[data.accent]} flex items-center justify-center flex-shrink-0`}
                >
                  <IconCheck
                    className={`w-5 h-5 ${accentText[data.accent]}`}
                  />
                </div>
                <span className="font-medium">{beneficio}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de uso */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Casos de Uso</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.casosUso.map((caso, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl">{caso.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{caso.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Preguntas Frecuentes
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {data.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card px-6 rounded-lg border border-border"
              >
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{data.final.heading}</h2>
          <p className="text-xl text-muted-foreground mb-10">{data.final.body}</p>
          <Button size="lg" asChild className={accentButton[data.accent]}>
            <Link href="/contacto">{data.final.cta}</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
