import Link from "next/link"
import type { ComponentType } from "react"
import {
  IconDeviceDesktop,
  IconSparkles,
  IconTarget,
  IconTrendingUp,
} from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/reveal"

export type Accent = "primary" | "secondary" | "accent"

export type TablerIcon = ComponentType<{
  className?: string
  size?: number
  stroke?: number
}>

export type IncluyeItem = {
  icon: TablerIcon
  accent: Accent
  title: string
  description: string
}

export type ServiceTemplateData = {
  hero: {
    badge?: string
    titleLead: string
    titleAccent: string
    accentGradient: string
    subtitle: string
    ctas: { label: string; href: string; variant?: "primary" | "outline" }[]
  }
  incluye: {
    lead?: { heading: string; body: string[] }
    items: readonly IncluyeItem[]
  }
  beneficios: { icon: TablerIcon; accent: Accent; text: string }[]
  casosUso: { icon: TablerIcon; accent: Accent; title: string; description: string }[]
  faqs: { question: string; answer: string }[]
  copy?: {
    beneficiosSubtitle?: string
    casosSubtitle?: string
    faqsSubtitle?: string
  }
  ejemplo?: {
    href: string
    label: string
    description: string
  }
  final: { heading: string; body: string; cta: string }
}

const accentIconBox: Record<Accent, string> = {
  primary: "bg-gradient-to-br from-primary/20 to-primary/10",
  secondary: "bg-gradient-to-br from-secondary/20 to-secondary/10",
  accent: "bg-gradient-to-br from-accent/20 to-accent/10",
}

const accentHoverBorder: Record<Accent, string> = {
  primary: "hover:border-primary/30",
  secondary: "hover:border-secondary/30",
  accent: "hover:border-accent/30",
}

const accentText: Record<Accent, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
}

/** Texto legible sobre un fondo sólido del acento correspondiente. */
const accentOn: Record<Accent, string> = {
  primary: "text-primary-foreground",
  secondary: "text-secondary-foreground",
  accent: "text-accent-foreground",
}

const accentSolid: Record<Accent, string> = {
  primary: "from-primary to-primary/80",
  secondary: "from-secondary to-secondary/80",
  accent: "from-accent to-accent/80",
}

const accentFade: Record<Accent, string> = {
  primary: "from-primary/10 to-primary/5",
  secondary: "from-secondary/10 to-secondary/5",
  accent: "from-accent/10 to-accent/5",
}

function SectionHeader({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg">{subtitle}</p>
      )}
    </div>
  )
}

function ServiceGraphic() {
  return (
    <div className="relative mx-auto w-full max-w-xs">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-full blur-3xl" />
      <div className="relative w-full aspect-square flex items-center justify-center">
        <div className="grid grid-cols-3 gap-3 w-4/5">
          <div className="col-span-2 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl p-4 border border-accent/30 backdrop-blur-sm">
            <div className="space-y-2">
              <div className="h-2 bg-accent/40 rounded w-3/4" />
              <div className="h-2 bg-accent/30 rounded w-full" />
              <div className="h-2 bg-accent/20 rounded w-2/3" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-xl p-3 border border-secondary/30 backdrop-blur-sm flex items-center justify-center">
            <IconDeviceDesktop className="w-8 h-8 text-secondary" stroke={1.5} />
          </div>
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-3 border border-primary/30 backdrop-blur-sm flex items-center justify-center">
            <IconTrendingUp className="w-8 h-8 text-primary" stroke={1.5} />
          </div>
          <div className="col-span-2 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl p-4 border border-secondary/30 backdrop-blur-sm flex items-center justify-center gap-3">
            <IconTarget className="w-10 h-10 text-secondary" stroke={1.5} />
            <div className="flex-1 space-y-2">
              <div className="h-2 bg-secondary/40 rounded w-full" />
              <div className="h-2 bg-secondary/30 rounded w-3/4" />
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-2xl shadow-primary/40">
            <IconSparkles
              className="w-8 h-8 text-primary-foreground"
              stroke={2}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export function ServiceTemplate({ data }: { data: ServiceTemplateData }) {
  return (
    <main className="min-h-screen overflow-x-clip bg-surface">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {data.hero.badge && (
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-sm font-semibold">
                {data.hero.badge}
              </span>
            </div>
          )}
          <h1 className="text-5xl sm:text-7xl font-bold mb-8 text-balance">
            {data.hero.titleLead ? `${data.hero.titleLead} ` : ""}
            <span
              className={`bg-gradient-to-r ${data.hero.accentGradient} bg-clip-text text-transparent pb-[0.15em]`}
            >
              {data.hero.titleAccent}
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 text-balance max-w-3xl mx-auto leading-relaxed">
            {data.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {data.hero.ctas.map((cta) =>
              cta.variant === "outline" ? (
                <Button
                  key={cta.label}
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-2 border-secondary/50 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all bg-transparent"
                >
                  <Link href={cta.href}>{cta.label}</Link>
                </Button>
              ) : (
                <Button
                  key={cta.label}
                  size="lg"
                  asChild
                  className="shadow-lg shadow-primary/25"
                >
                  <Link href={cta.href}>{cta.label}</Link>
                </Button>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ¿Qué incluye este servicio? */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent pb-[0.15em]">
            ¿Qué incluye este servicio?
          </h2>

          {data.incluye.lead && (
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">
                {data.incluye.lead.heading}
              </h3>
              {data.incluye.lead.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-muted-foreground leading-relaxed mb-4 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-8">
            {data.incluye.items.map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal
                  key={item.title}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={(index % 2) * 100}
                >
                  <div
                    className={`flex items-start gap-4 p-6 h-full bg-card rounded-xl border border-border ${accentHoverBorder[item.accent]} transition-colors group`}
                  >
                    <div
                      className={`w-12 h-12 rounded-lg ${accentIconBox[item.accent]} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <Icon
                        className={`w-6 h-6 ${accentText[item.accent]}`}
                        stroke={1.5}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {index + 1}. {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Beneficios Principales */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Beneficios Principales"
            subtitle={data.copy?.beneficiosSubtitle}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.beneficios.map((beneficio, index) => {
              const Icon = beneficio.icon
              return (
                <Reveal
                  key={beneficio.text}
                  direction="up"
                  delay={(index % 3) * 80}
                >
                  <div className="group relative h-full bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${accentSolid[beneficio.accent]} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon
                          className={`w-6 h-6 ${accentOn[beneficio.accent]}`}
                          stroke={2}
                        />
                      </div>
                      <div className="flex-1 pt-1">
                        <span className="font-semibold text-base leading-snug">
                          {beneficio.text}
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Casos de Uso" subtitle={data.copy?.casosSubtitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.casosUso.map((caso, index) => {
              const Icon = caso.icon
              return (
                <Reveal
                  key={caso.title}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={(index % 2) * 100}
                >
                  <Card className="relative h-full border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-xl group overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${accentFade[caso.accent]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                    <CardHeader className="relative">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-14 h-14 rounded-xl ${accentIconBox[caso.accent]} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon
                            className={`w-7 h-7 ${accentText[caso.accent]}`}
                            stroke={1.5}
                          />
                        </div>
                        <CardTitle className="text-xl">{caso.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="relative">
                      <p className="text-muted-foreground leading-relaxed transition-colors group-hover:text-foreground">
                        {caso.description}
                      </p>
                    </CardContent>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Preguntas Frecuentes"
            subtitle={data.copy?.faqsSubtitle}
          />
          <Reveal direction="up">
            <Accordion type="single" collapsible className="space-y-4">
              {data.faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${index}`}
                  className="bg-card px-6 rounded-xl border border-border last:border-b hover:border-accent/50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-accent hover:no-underline data-[state=open]:text-accent transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* Ejemplo relacionado (opcional) */}
      {data.ejemplo && (
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <Reveal direction="up" className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{data.ejemplo.description}</h2>
            <Button
              size="lg"
              asChild
              className="shadow-lg shadow-primary/25"
            >
              <Link href={data.ejemplo.href}>{data.ejemplo.label}</Link>
            </Button>
          </Reveal>
        </section>
      )}

      {/* Gráfico + CTA final */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="max-w-4xl mx-auto text-center">
          <ServiceGraphic />
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 mt-12">
            {data.final.heading}
          </h2>
          <p className="text-xl text-muted-foreground mb-10 text-balance">
            {data.final.body}
          </p>
          <Button
            size="lg"
            asChild
            className="shadow-xl shadow-primary/30"
          >
            <Link href="/contacto">{data.final.cta}</Link>
          </Button>
        </Reveal>
      </section>
    </main>
  )
}
