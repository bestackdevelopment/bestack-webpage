# Plantilla unificada de servicios — Plan de implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Unificar las 6 landings de `/servicios` bajo una única plantilla (el diseño de páginas informativas), moviendo el gráfico decorativo a la sección del CTA y reduciéndolo.

**Architecture:** Un componente `components/service-template.tsx` recibe un objeto `ServiceTemplateData` y renderiza todas las secciones. Cada página aporta solo su `data`. Se retira `components/service-landing.tsx`.

**Tech Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 (tokens del tema) · `@tabler/icons-react` · shadcn/ui (Button, Card, Accordion).

**Spec:** `docs/superpowers/specs/2026-10-05-plantilla-servicios-design.md`

## Global Constraints

- **No inventar contenido**: el copy existente (hero, beneficios, casos, FAQ, CTA) se conserva **verbatim**. Lo único genérico permitido es el set de «¿Qué incluye?» de las 5 (marcado provisional).
- **Colores por tokens** (`primary`/`secondary`/`accent`); **cero hex sueltos** en las landings.
- **Iconos**: solo `@tabler/icons-react`.
- **UI en español**, código en inglés.
- **No tocar la marca** (`primary`/`secondary`/`accent`).
- **No hay framework de tests en el repo.** La verificación de cada tarea es: `pnpm lint && pnpm exec tsc --noEmit` limpios, render en `http://100.90.176.92:3000` y, al final, `pnpm build` en verde. (El dev server corre con `pnpm exec next dev --hostname 0.0.0.0 --port 3000`.)
- Commits frecuentes, uno por tarea.

---

## File Structure

- **Crear** `components/service-template.tsx` — layout compartido + tipo `ServiceTemplateData` + gráfico compacto.
- **Crear** `lib/servicios-incluye-generico.ts` — set provisional de «¿Qué incluye?» para las 5.
- **Reescribir** `app/servicios/paginas-informativas/page.tsx` — pasa a `data` + `ServiceTemplate` (referencia).
- **Reescribir** `app/servicios/ecommerce/page.tsx`
- **Reescribir** `app/servicios/mantenimiento-web/page.tsx`
- **Reescribir** `app/servicios/paginas-corporativas/page.tsx`
- **Reescribir** `app/servicios/finaliza-tu-web/page.tsx`
- **Reescribir** `app/servicios/agente-ia/page.tsx`
- **Borrar** `components/service-landing.tsx`

---

### Task 1: Componente de plantilla

**Files:**
- Create: `components/service-template.tsx`

**Interfaces:**
- Produces: `Accent`, `TablerIcon`, `IncluyeItem`, `ServiceTemplateData`, `ServiceTemplate({ data })`.

- [ ] **Step 1: Escribir el componente**

Crear `components/service-template.tsx` con exactamente:

```tsx
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
    items: IncluyeItem[]
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
            <IconSparkles className="w-8 h-8 text-white" stroke={2} />
          </div>
        </div>
      </div>
    </div>
  )
}

export function ServiceTemplate({ data }: { data: ServiceTemplateData }) {
  return (
    <main className="min-h-screen">
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
                  className="border-2 border-secondary/50 hover:bg-secondary hover:text-foreground hover:border-secondary transition-all bg-transparent"
                >
                  <Link href={cta.href}>{cta.label}</Link>
                </Button>
              ) : (
                <Button
                  key={cta.label}
                  size="lg"
                  asChild
                  className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
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
              {data.incluye.lead.body.map((paragraph, index) => (
                <p
                  key={index}
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
                <div
                  key={index}
                  className={`flex items-start gap-4 p-6 bg-card rounded-xl border border-border ${accentHoverBorder[item.accent]} transition-colors group`}
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
              )
            })}
          </div>
        </div>
      </section>

      {/* Beneficios Principales */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Beneficios Principales</h2>
            {data.copy?.beneficiosSubtitle && (
              <p className="text-muted-foreground text-lg">
                {data.copy.beneficiosSubtitle}
              </p>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.beneficios.map((beneficio, index) => {
              const Icon = beneficio.icon
              return (
                <div
                  key={index}
                  className="group relative bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${accentSolid[beneficio.accent]} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
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

      {/* Casos de Uso */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Casos de Uso</h2>
            {data.copy?.casosSubtitle && (
              <p className="text-muted-foreground text-lg">
                {data.copy.casosSubtitle}
              </p>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.casosUso.map((caso, index) => {
              const Icon = caso.icon
              return (
                <Card
                  key={index}
                  className="relative border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-xl group overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${accentFade[caso.accent]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  <CardHeader className="relative">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-accent" stroke={1.5} />
                      </div>
                      <CardTitle className="text-xl">{caso.title}</CardTitle>
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

      {/* Preguntas Frecuentes */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
            {data.copy?.faqsSubtitle && (
              <p className="text-muted-foreground text-lg">
                {data.copy.faqsSubtitle}
              </p>
            )}
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {data.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card px-6 rounded-xl border border-border hover:border-accent/50 transition-colors"
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
        </div>
      </section>

      {/* Ejemplo relacionado (opcional) */}
      {data.ejemplo && (
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{data.ejemplo.description}</h2>
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
            >
              <Link href={data.ejemplo.href}>{data.ejemplo.label}</Link>
            </Button>
          </div>
        </section>
      )}

      {/* Gráfico + CTA final */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
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
            className="bg-primary hover:bg-primary/90 shadow-xl shadow-primary/30"
          >
            <Link href="/contacto">{data.final.cta}</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
```

- [ ] **Step 2: Verificar que compila**

Run: `pnpm lint && pnpm exec tsc --noEmit`
Expected: sin errores (lint limpio y tipos OK).

- [ ] **Step 3: Commit**

```bash
git add components/service-template.tsx
git commit -m "feat(servicios): componente de plantilla unificada"
```

---

### Task 2: Migrar páginas informativas (referencia)

**Files:**
- Modify (reescribir): `app/servicios/paginas-informativas/page.tsx`

**Interfaces:**
- Consumes: `ServiceTemplate`, `ServiceTemplateData` (Task 1).

- [ ] **Step 1: Reescribir la página**

Reemplazar **todo** el contenido de `app/servicios/paginas-informativas/page.tsx` por:

```tsx
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

import { ServiceTemplate, type ServiceTemplateData } from "@/components/service-template"

export const metadata: Metadata = {
  title: "Páginas Informativas",
  description:
    "Sitios informativos modernos y optimizados. Diseño profesional, SEO integrado y compatibilidad total para destacar tu proyecto.",
}

const data: ServiceTemplateData = {
  hero: {
    badge: "Diseño Web Profesional",
    titleLead: "",
    titleAccent: "Páginas Informativas",
    accentGradient: "from-primary to-accent",
    subtitle:
      "Sitios informativos modernos diseñados para destacar tu proyecto con tecnología de vanguardia",
    ctas: [
      { label: "Empieza tu sitio", href: "/contacto" },
      { label: "Ver ejemplos", href: "/ejemplos", variant: "outline" },
    ],
  },
  incluye: {
    items: [
      {
        icon: IconPalette,
        accent: "primary",
        title: "Diseño moderno y adaptable",
        description:
          "Su sitio se presenta con una estética profesional que mantiene coherencia con su identidad visual y se ajusta correctamente a cualquier dispositivo.",
      },
      {
        icon: IconFileText,
        accent: "secondary",
        title: "Estructura de contenido clara y estratégica",
        description:
          "Organizamos la información de forma que sus visitantes comprendan de inmediato quién es usted, qué ofrece y cómo pueden avanzar al siguiente paso.",
      },
      {
        icon: IconWorld,
        accent: "accent",
        title: "Preparación para buscadores (SEO)",
        description:
          "Incluimos configuraciones que ayudan a que su proyecto sea más visible en motores de búsqueda mediante textos bien estructurados, títulos adecuados y contenido optimizado.",
      },
      {
        icon: IconTarget,
        accent: "primary",
        title: "Formulario de contacto optimizado para conversión",
        description:
          "Su página integra un formulario diseñado para que sus visitantes puedan comunicarse de forma rápida y efectiva.",
      },
      {
        icon: IconDeviceDesktop,
        accent: "secondary",
        title: "Enlaces directos a redes sociales y WhatsApp",
        description:
          "Agregamos accesos que facilitan la interacción directa con su marca, incluyendo un mensaje inicial predefinido para WhatsApp.",
      },
      {
        icon: IconSparkles,
        accent: "accent",
        title: "Animaciones sutiles que elevan la experiencia",
        description:
          "Incorporamos transiciones suaves y bien equilibradas que aportan dinamismo sin distraer del contenido.",
      },
      {
        icon: IconRocket,
        accent: "primary",
        title: "Contenido e imágenes optimizados para una mejor experiencia",
        description:
          "Su sitio aprovecha técnicas de optimización que mejoran la velocidad de carga y garantizan una navegación agradable.",
      },
    ],
  },
  beneficios: [
    { icon: IconSparkles, accent: "primary", text: "Diseño moderno y atractivo" },
    { icon: IconTrendingUp, accent: "secondary", text: "Optimización SEO integrada" },
    { icon: IconRocket, accent: "accent", text: "Rendimiento de carga superior" },
    { icon: IconDeviceDesktop, accent: "primary", text: "Adaptable a cualquier dispositivo" },
    { icon: IconFileText, accent: "secondary", text: "Contenido actualizable" },
    { icon: IconWorld, accent: "accent", text: "Integración con redes sociales" },
  ],
  casosUso: [
    {
      icon: IconPalette,
      accent: "primary",
      title: "Portafolios Creativos",
      description:
        "Destaca tu talento y experiencia con un diseño que refleja tu identidad profesional",
    },
    {
      icon: IconFileText,
      accent: "secondary",
      title: "Blogs y Publicaciones",
      description:
        "Comparte conocimiento y construye autoridad en tu sector con contenido bien estructurado",
    },
    {
      icon: IconTarget,
      accent: "accent",
      title: "Páginas de Captura",
      description:
        "Convierte visitas en oportunidades reales con diseños enfocados en la conversión",
    },
    {
      icon: IconPresentation,
      accent: "primary",
      title: "Sitios de Proyecto",
      description:
        "Presenta iniciativas, servicios o productos con claridad y profesionalismo",
    },
  ],
  faqs: [
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
  ],
  copy: {
    beneficiosSubtitle: "Todo lo que necesitas para destacar en línea",
    casosSubtitle: "Soluciones adaptadas a tus necesidades",
    faqsSubtitle: "Resolvemos tus dudas",
  },
  final: {
    heading: "¿Listo para crear tu página informativa?",
    body: "Conversemos sobre tu proyecto y te enviaremos una propuesta personalizada",
    cta: "Contactar Ahora",
  },
}

export default function PaginasInformativasPage() {
  return <ServiceTemplate data={data} />
}
```

- [ ] **Step 2: Verificar**

Run: `pnpm lint && pnpm exec tsc --noEmit`
Expected: sin errores (lint limpio y tipos OK).

Luego, con el dev server corriendo, comprobar:
`curl -s -o /dev/null -w "%{http_code}\n" http://100.90.176.92:3000/servicios/paginas-informativas`
Expected: `200`. Y que el gráfico ya **no** esté dentro de «¿Qué incluye?» (aparece en el CTA).

- [ ] **Step 3: Commit**

```bash
git add app/servicios/paginas-informativas/page.tsx
git commit -m "refactor(servicios): migra paginas-informativas a la plantilla"
```

---

### Task 3: Set genérico + migrar ecommerce y agente-ia

**Files:**
- Create: `lib/servicios-incluye-generico.ts`
- Modify (reescribir): `app/servicios/ecommerce/page.tsx`
- Modify (reescribir): `app/servicios/agente-ia/page.tsx`

**Interfaces:**
- Consumes: `IncluyeItem`, `ServiceTemplate`, `ServiceTemplateData` (Task 1).
- Produces: `incluyeGenerico: IncluyeItem[]`.

- [ ] **Step 1: Crear el set genérico provisional**

Crear `lib/servicios-incluye-generico.ts`:

```ts
import { IconCode, IconHeadset, IconSearch, IconTarget } from "@tabler/icons-react"

import type { IncluyeItem } from "@/components/service-template"

/**
 * Contenido PROVISIONAL para la sección «¿Qué incluye?» de los servicios que
 * todavía no tienen copy propio. El Patrón lo reemplazará por página.
 */
export const incluyeGenerico: IncluyeItem[] = [
  {
    icon: IconTarget,
    accent: "primary",
    title: "Alcance a tu medida",
    description: "Definimos juntos qué incluye el servicio según tu operación.",
  },
  {
    icon: IconCode,
    accent: "secondary",
    title: "Desarrollo con tecnología moderna",
    description: "Construido con el stack actual: rápido, seguro y mantenible.",
  },
  {
    icon: IconSearch,
    accent: "accent",
    title: "Optimizado para buscadores y agentes de IA",
    description: "Estructura y contenido pensados para posicionamiento.",
  },
  {
    icon: IconHeadset,
    accent: "primary",
    title: "Acompañamiento y soporte",
    description: "Te acompañamos durante y después del proyecto.",
  },
]
```

- [ ] **Step 2: Reescribir ecommerce**

Reemplazar **todo** el contenido de `app/servicios/ecommerce/page.tsx` por:

```tsx
import type { Metadata } from "next"
import {
  IconBox,
  IconBriefcase,
  IconBuildingStore,
  IconCreditCard,
  IconLayoutDashboard,
  IconRepeat,
  IconShoppingBag,
  IconShoppingCart,
  IconTruckDelivery,
  IconTrendingUp,
} from "@tabler/icons-react"

import { ServiceTemplate, type ServiceTemplateData } from "@/components/service-template"
import { incluyeGenerico } from "@/lib/servicios-incluye-generico"

export const metadata: Metadata = {
  title: "Ecommerce",
  description:
    "Tiendas online optimizadas con pasarelas de pago y gestión de inventario para impulsar tu negocio.",
}

const data: ServiceTemplateData = {
  hero: {
    badge: "Tiendas en línea",
    titleLead: "Tiendas",
    titleAccent: "Ecommerce",
    accentGradient: "from-accent to-primary",
    subtitle:
      "Tiendas online optimizadas con pasarelas de pago y gestión de inventario",
    ctas: [
      { label: "Solicitar Presupuesto", href: "/contacto" },
      { label: "Ver ejemplos", href: "/ejemplos", variant: "outline" },
    ],
  },
  incluye: {
    lead: {
      heading: "Impulsa tu Negocio Online",
      body: [
        "Creamos tiendas online de alto rendimiento, con tiempos de carga mínimos y una experiencia de compra fluida en cualquier dispositivo. Gestionamos el carrito y el proceso de pago de forma ágil y segura.",
        "Integramos pasarelas de pago seguras, sistemas de gestión de inventario y herramientas de análisis para que puedas tomar decisiones basadas en datos. Cada tienda está optimizada para conversión y experiencia del usuario.",
      ],
    },
    items: incluyeGenerico,
  },
  beneficios: [
    { icon: IconCreditCard, accent: "primary", text: "Pasarelas de pago integradas" },
    { icon: IconBox, accent: "secondary", text: "Gestión de inventario en tiempo real" },
    { icon: IconShoppingCart, accent: "accent", text: "Carrito de compra optimizado" },
    { icon: IconLayoutDashboard, accent: "primary", text: "Panel de administración completo" },
    { icon: IconTruckDelivery, accent: "secondary", text: "Seguimiento de pedidos" },
    { icon: IconTrendingUp, accent: "accent", text: "Optimización de conversión" },
  ],
  casosUso: [
    {
      icon: IconShoppingBag,
      accent: "primary",
      title: "Tiendas Online",
      description: "Vende productos físicos o digitales con facilidad",
    },
    {
      icon: IconBuildingStore,
      accent: "secondary",
      title: "Marketplaces",
      description: "Plataformas multi-vendedor con gestión centralizada",
    },
    {
      icon: IconRepeat,
      accent: "accent",
      title: "Suscripciones",
      description: "Modelos de negocio recurrentes y membresías",
    },
    {
      icon: IconBriefcase,
      accent: "primary",
      title: "B2B Ecommerce",
      description: "Soluciones específicas para venta empresarial",
    },
  ],
  faqs: [
    {
      question: "¿Qué pasarelas de pago soportan?",
      answer:
        "Integramos Stripe, PayPal y otras pasarelas según tus necesidades y mercado objetivo.",
    },
    {
      question: "¿Incluye gestión de inventario?",
      answer:
        "Sí, desarrollamos un sistema completo de gestión de productos, stock y variantes.",
    },
    {
      question: "¿Puedo gestionar envíos?",
      answer:
        "Sí, integramos sistemas de envío y tracking para una gestión logística completa.",
    },
    {
      question: "¿Es seguro para procesar pagos?",
      answer:
        "Absolutamente. Seguimos las mejores prácticas de seguridad y cumplimiento PCI.",
    },
  ],
  ejemplo: {
    href: "/ejemplos/laserbox",
    label: "Ver el ejemplo",
    description:
      "Un ecommerce integrado a un sistema de operación: mira cómo lo hicimos en LaserBox.",
  },
  final: {
    heading: "¿Listo para lanzar tu tienda online?",
    body: "Conversemos sobre tu modelo de negocio y creemos la tienda perfecta",
    cta: "Contactar Ahora",
  },
}

export default function EcommercePage() {
  return <ServiceTemplate data={data} />
}
```

- [ ] **Step 3: Reescribir agente-ia**

Reemplazar **todo** el contenido de `app/servicios/agente-ia/page.tsx` por:

```tsx
import type { Metadata } from "next"
import {
  IconAdjustments,
  IconBrain,
  IconChartHistogram,
  IconClock24,
  IconHeadset,
  IconLifebuoy,
  IconPlugConnected,
  IconSettingsAutomation,
  IconTrendingUp,
  IconUsers,
} from "@tabler/icons-react"

import { ServiceTemplate, type ServiceTemplateData } from "@/components/service-template"
import { incluyeGenerico } from "@/lib/servicios-incluye-generico"

export const metadata: Metadata = {
  title: "Agente IA",
  description:
    "Un agente de IA que aprende cómo funciona tu negocio y lo opera contigo. Tú decides qué hace: se le enseña lo que tu operación necesite.",
}

const data: ServiceTemplateData = {
  hero: {
    badge: "Automatización con IA",
    titleLead: "Agente",
    titleAccent: "IA",
    accentGradient: "from-accent to-primary",
    subtitle:
      "Un agente de IA que aprende cómo funciona tu negocio y lo opera contigo.",
    ctas: [
      { label: "Solicitar Presupuesto", href: "/contacto" },
      { label: "Ver ejemplos", href: "/ejemplos", variant: "outline" },
    ],
  },
  incluye: {
    lead: {
      heading: "Tu operación, con un agente que la conoce",
      body: [
        "Un agente de IA no es un chatbot genérico: se entrena con la forma en que opera tu negocio —tus procesos, tu información y tu forma de atender— para trabajar como parte de tu equipo.",
        "Tú defines qué hace y qué no. Se le enseña exactamente lo que tu operación necesite, y trabaja contigo en las tareas que elijas.",
      ],
    },
    items: incluyeGenerico,
  },
  beneficios: [
    { icon: IconBrain, accent: "primary", text: "Aprende cómo opera tu negocio" },
    { icon: IconUsers, accent: "secondary", text: "Opera tareas junto a tu equipo" },
    { icon: IconAdjustments, accent: "accent", text: "Tú defines qué hace y qué no" },
    { icon: IconPlugConnected, accent: "primary", text: "Se integra a tus herramientas y canales" },
    { icon: IconClock24, accent: "secondary", text: "Atiende a tus clientes sin horario" },
    { icon: IconTrendingUp, accent: "accent", text: "Se ajusta y mejora con el uso" },
  ],
  casosUso: [
    {
      icon: IconHeadset,
      accent: "primary",
      title: "Atención al cliente",
      description:
        "Responde dudas y da seguimiento con la información y el tono de tu negocio.",
    },
    {
      icon: IconSettingsAutomation,
      accent: "secondary",
      title: "Procesos internos",
      description:
        "Se encarga de tareas repetitivas: cotizaciones, seguimiento, reportes.",
    },
    {
      icon: IconChartHistogram,
      accent: "accent",
      title: "Ventas",
      description:
        "Apoya el seguimiento de prospectos para que ninguno se quede sin respuesta.",
    },
    {
      icon: IconLifebuoy,
      accent: "primary",
      title: "Soporte operativo",
      description: "Organiza y responde lo del día a día de tu operación.",
    },
  ],
  faqs: [
    {
      question: "¿Qué necesito para empezar?",
      answer:
        "Un diagnóstico de tu operación. De ahí sale qué tareas conviene que haga el agente.",
    },
    {
      question: "¿Puedo decidir qué hace y qué no?",
      answer:
        "Sí. El alcance lo defines tú; el agente se limita a lo que se le enseña.",
    },
    {
      question: "¿Se integra con mis herramientas actuales?",
      answer:
        "Sí, se conecta a los canales y sistemas que ya usas, según cada caso.",
    },
    {
      question: "¿Necesito saber de tecnología?",
      answer: "No. Nosotros lo configuramos y tú lo usas de forma natural.",
    },
  ],
  final: {
    heading: "¿Listo para que tu negocio opere con un agente de IA?",
    body: "Conversemos sobre tu operación y qué debería hacer el agente.",
    cta: "Contactar Ahora",
  },
}

export default function AgenteIaPage() {
  return <ServiceTemplate data={data} />
}
```

- [ ] **Step 4: Verificar**

Run: `pnpm lint && pnpm exec tsc --noEmit`
Expected: sin errores (lint limpio y tipos OK).

```bash
for r in /servicios/ecommerce /servicios/agente-ia; do
  curl -s -o /dev/null -w "%{http_code}  $r\n" "http://100.90.176.92:3000$r"
done
```
Expected: `200` en ambas.

- [ ] **Step 5: Commit**

```bash
git add lib/servicios-incluye-generico.ts app/servicios/ecommerce/page.tsx app/servicios/agente-ia/page.tsx
git commit -m "refactor(servicios): migra ecommerce y agente-ia a la plantilla"
```

---

### Task 4: Migrar mantenimiento-web, paginas-corporativas y finaliza-tu-web

**Files:**
- Modify (reescribir): `app/servicios/mantenimiento-web/page.tsx`
- Modify (reescribir): `app/servicios/paginas-corporativas/page.tsx`
- Modify (reescribir): `app/servicios/finaliza-tu-web/page.tsx`

**Interfaces:**
- Consumes: `ServiceTemplate`, `ServiceTemplateData`, `incluyeGenerico`.

- [ ] **Step 1: Reescribir mantenimiento-web**

Reemplazar **todo** el contenido de `app/servicios/mantenimiento-web/page.tsx` por:

```tsx
import type { Metadata } from "next"
import {
  IconActivityHeartbeat,
  IconDatabaseExport,
  IconFilePencil,
  IconFileText,
  IconGauge,
  IconHeadset,
  IconRefresh,
  IconShieldLock,
  IconTool,
} from "@tabler/icons-react"

import { ServiceTemplate, type ServiceTemplateData } from "@/components/service-template"
import { incluyeGenerico } from "@/lib/servicios-incluye-generico"

export const metadata: Metadata = {
  title: "Mantenimiento Web",
  description:
    "Actualizaciones, seguridad y soporte técnico continuo para mantener tu sitio web siempre actualizado.",
}

const data: ServiceTemplateData = {
  hero: {
    badge: "Sitio siempre al día",
    titleLead: "Mantenimiento",
    titleAccent: "Web",
    accentGradient: "from-primary to-accent",
    subtitle:
      "Actualizaciones, seguridad y soporte técnico continuo para tu sitio web",
    ctas: [
      { label: "Ver Planes", href: "/contacto" },
      { label: "Ver ejemplos", href: "/ejemplos", variant: "outline" },
    ],
  },
  incluye: {
    lead: {
      heading: "Mantén tu Sitio Siempre Actualizado",
      body: [
        "Tu sitio web necesita atención continua para mantenerse seguro, rápido y actualizado. Ofrecemos servicios de mantenimiento integral que incluyen actualizaciones de la plataforma y de todas sus dependencias, garantizando compatibilidad y rendimiento óptimo.",
        "Monitoreamos tu sitio 24/7, realizamos backups automáticos y aplicamos parches de seguridad de inmediato. Además, optimizamos el rendimiento y ofrecemos soporte técnico prioritario para resolver cualquier incidencia.",
      ],
    },
    items: incluyeGenerico,
  },
  beneficios: [
    { icon: IconShieldLock, accent: "primary", text: "Actualizaciones de seguridad" },
    { icon: IconDatabaseExport, accent: "secondary", text: "Backups automáticos" },
    { icon: IconActivityHeartbeat, accent: "accent", text: "Monitoreo 24/7" },
    { icon: IconGauge, accent: "primary", text: "Optimización de rendimiento" },
    { icon: IconHeadset, accent: "secondary", text: "Soporte técnico prioritario" },
    { icon: IconFilePencil, accent: "accent", text: "Actualizaciones de contenido" },
  ],
  casosUso: [
    {
      icon: IconTool,
      accent: "primary",
      title: "Mantenimiento Preventivo",
      description:
        "Evita problemas antes de que ocurran con monitoreo constante",
    },
    {
      icon: IconRefresh,
      accent: "secondary",
      title: "Actualizaciones Técnicas",
      description: "Mantén tu sitio al día con las últimas versiones y parches",
    },
    {
      icon: IconFileText,
      accent: "accent",
      title: "Gestión de Contenido",
      description: "Actualizaciones regulares de texto, imágenes y multimedia",
    },
    {
      icon: IconHeadset,
      accent: "primary",
      title: "Soporte Técnico",
      description: "Asistencia rápida ante cualquier incidencia o consulta",
    },
  ],
  faqs: [
    {
      question: "¿Qué incluye el servicio de mantenimiento?",
      answer:
        "Actualizaciones técnicas, backups, monitoreo, optimización, soporte técnico y pequeños cambios de contenido.",
    },
    {
      question: "¿Con qué frecuencia se realizan los backups?",
      answer: "Realizamos backups diarios automáticos con retención de 30 días.",
    },
    {
      question: "¿Cuánto tiempo de respuesta tienen?",
      answer:
        "Para clientes con plan de mantenimiento, garantizamos respuesta en menos de 24 horas.",
    },
    {
      question: "¿Puedo cancelar el servicio?",
      answer:
        "Sí, nuestros planes son mensuales y puedes cancelar cuando lo necesites.",
    },
  ],
  final: {
    heading: "¿Necesitas mantenimiento web?",
    body: "Elige el plan que mejor se adapte a tus necesidades",
    cta: "Ver Planes",
  },
}

export default function MantenimientoWebPage() {
  return <ServiceTemplate data={data} />
}
```

- [ ] **Step 2: Reescribir paginas-corporativas**

Reemplazar **todo** el contenido de `app/servicios/paginas-corporativas/page.tsx` por:

```tsx
import type { Metadata } from "next"
import {
  IconBuilding,
  IconBuildingSkyscraper,
  IconFileText,
  IconLayoutDashboard,
  IconMapPin,
  IconNetwork,
  IconPlugConnected,
  IconShieldCheck,
  IconUsers,
  IconWorld,
} from "@tabler/icons-react"

import { ServiceTemplate, type ServiceTemplateData } from "@/components/service-template"
import { incluyeGenerico } from "@/lib/servicios-incluye-generico"

export const metadata: Metadata = {
  title: "Páginas Corporativas",
  description:
    "Soluciones empresariales completas con diseño profesional y funcionalidad avanzada para tu negocio.",
}

const data: ServiceTemplateData = {
  hero: {
    badge: "Presencia empresarial",
    titleLead: "Páginas",
    titleAccent: "Corporativas",
    accentGradient: "from-accent to-primary",
    subtitle:
      "Soluciones empresariales completas con diseño profesional y funcionalidad avanzada",
    ctas: [
      { label: "Solicitar Presupuesto", href: "/contacto" },
      { label: "Ver ejemplos", href: "/ejemplos", variant: "outline" },
    ],
  },
  incluye: {
    lead: {
      heading: "Soluciones Empresariales a Medida",
      body: [
        "Desarrollamos sitios corporativos robustos y escalables. Nuestras soluciones incluyen gestión de contenido avanzada, formularios complejos con validación estricta y una arquitectura pensada para crecer contigo.",
        "Cada proyecto corporativo se diseña pensando en la escalabilidad futura, la integración con sistemas existentes y la facilidad de mantenimiento. Implementamos las mejores prácticas de seguridad y rendimiento.",
      ],
    },
    items: incluyeGenerico,
  },
  beneficios: [
    { icon: IconBuilding, accent: "primary", text: "Diseño corporativo profesional" },
    { icon: IconFileText, accent: "secondary", text: "Gestión de contenido avanzada" },
    { icon: IconPlugConnected, accent: "accent", text: "Integración con sistemas empresariales" },
    { icon: IconLayoutDashboard, accent: "primary", text: "Panel de administración personalizado" },
    { icon: IconWorld, accent: "secondary", text: "Múltiples idiomas" },
    { icon: IconShieldCheck, accent: "accent", text: "Alta seguridad y rendimiento" },
  ],
  casosUso: [
    {
      icon: IconBuildingSkyscraper,
      accent: "primary",
      title: "Sitios Corporativos",
      description:
        "Presencia digital completa para empresas medianas y grandes",
    },
    {
      icon: IconNetwork,
      accent: "secondary",
      title: "Intranets Corporativas",
      description: "Portales internos para comunicación y gestión empresarial",
    },
    {
      icon: IconUsers,
      accent: "accent",
      title: "Portales de Clientes",
      description:
        "Áreas privadas con funcionalidades específicas para clientes",
    },
    {
      icon: IconMapPin,
      accent: "primary",
      title: "Sitios Multi-sucursal",
      description: "Gestión centralizada de múltiples ubicaciones",
    },
  ],
  faqs: [
    {
      question: "¿Cuánto tiempo toma desarrollar una página corporativa?",
      answer:
        "Entre 4-8 semanas dependiendo de la complejidad, integraciones y funcionalidades requeridas.",
    },
    {
      question: "¿Incluye panel de administración?",
      answer:
        "Sí, desarrollamos un CMS personalizado o integramos uno existente según tus necesidades.",
    },
    {
      question: "¿Puedo integrar con mis sistemas actuales?",
      answer:
        "Absolutamente. Podemos integrar con CRM, ERP, bases de datos y otros sistemas empresariales.",
    },
    {
      question: "¿Ofrecen soporte post-lanzamiento?",
      answer:
        "Sí, ofrecemos planes de mantenimiento y soporte técnico continuo.",
    },
  ],
  final: {
    heading: "¿Necesitas una solución corporativa?",
    body: "Hablemos sobre los requisitos específicos de tu empresa",
    cta: "Contactar Ahora",
  },
}

export default function PaginasCorporativasPage() {
  return <ServiceTemplate data={data} />
}
```

- [ ] **Step 3: Reescribir finaliza-tu-web**

Reemplazar **todo** el contenido de `app/servicios/finaliza-tu-web/page.tsx` por:

```tsx
import type { Metadata } from "next"
import {
  IconArchive,
  IconArrowsExchange,
  IconBook,
  IconBug,
  IconChecklist,
  IconCode,
  IconListCheck,
  IconRocket,
  IconSearch,
} from "@tabler/icons-react"

import { ServiceTemplate, type ServiceTemplateData } from "@/components/service-template"
import { incluyeGenerico } from "@/lib/servicios-incluye-generico"

export const metadata: Metadata = {
  title: "Finaliza tu Web",
  description:
    "Completamos proyectos web inconclusos con calidad y profesionalismo para lanzar tu sitio cuanto antes.",
}

const data: ServiceTemplateData = {
  hero: {
    badge: "Proyectos inconclusos",
    titleLead: "Finaliza",
    titleAccent: "tu Web",
    accentGradient: "from-primary to-accent",
    subtitle:
      "Completamos proyectos inconclusos con calidad y profesionalismo",
    ctas: [
      { label: "Evaluar mi Proyecto", href: "/contacto" },
      { label: "Ver ejemplos", href: "/ejemplos", variant: "outline" },
    ],
  },
  incluye: {
    lead: {
      heading: "Rescatamos tu Proyecto Web",
      body: [
        "¿Tienes un proyecto web sin terminar? Analizamos el código existente, identificamos lo que falta y completamos el desarrollo con los más altos estándares de calidad. Si es necesario, migramos tu proyecto a una base tecnológica moderna para garantizar un resultado mantenible.",
        "Trabajamos con cualquier base de código, documentamos todo el proceso y te entregamos un sitio completo, optimizado y listo para lanzar. Nuestro objetivo es que finalmente tengas el sitio web que siempre quisiste.",
      ],
    },
    items: incluyeGenerico,
  },
  beneficios: [
    { icon: IconSearch, accent: "primary", text: "Análisis del proyecto existente" },
    { icon: IconListCheck, accent: "secondary", text: "Plan de finalización claro" },
    { icon: IconCode, accent: "accent", text: "Código de calidad profesional" },
    { icon: IconBug, accent: "primary", text: "Testing y optimización" },
    { icon: IconRocket, accent: "secondary", text: "Migración a tecnologías modernas" },
    { icon: IconBook, accent: "accent", text: "Documentación completa" },
  ],
  casosUso: [
    {
      icon: IconArchive,
      accent: "primary",
      title: "Proyectos Abandonados",
      description: "Retomamos proyectos que quedaron sin terminar",
    },
    {
      icon: IconCode,
      accent: "secondary",
      title: "Código Legacy",
      description: "Modernizamos y completamos sitios con código antiguo",
    },
    {
      icon: IconArrowsExchange,
      accent: "accent",
      title: "Migraciones",
      description: "Finalizamos migraciones incompletas a nuevas tecnologías",
    },
    {
      icon: IconChecklist,
      accent: "primary",
      title: "Funcionalidades Pendientes",
      description: "Completamos features que faltan en tu sitio actual",
    },
  ],
  faqs: [
    {
      question: "¿Pueden trabajar con código de otros desarrolladores?",
      answer:
        "Sí, analizamos el código existente y lo completamos siguiendo las mejores prácticas.",
    },
    {
      question: "¿Cuánto tiempo toma finalizar un proyecto?",
      answer:
        "Depende del estado actual. Tras una evaluación inicial, te damos un tiempo estimado preciso.",
    },
    {
      question: "¿Qué pasa si el código es de mala calidad?",
      answer:
        "Podemos refactorizar y mejorar el código existente o hacer una migración completa si es necesario.",
    },
    {
      question: "¿Ofrecen garantía?",
      answer:
        "Sí, garantizamos que el proyecto quedará funcional, optimizado y listo para producción.",
    },
  ],
  final: {
    heading: "¿Tienes un proyecto sin terminar?",
    body: "Analicemos tu proyecto y te daremos un plan de acción claro",
    cta: "Contactar Ahora",
  },
}

export default function FinalizaTuWebPage() {
  return <ServiceTemplate data={data} />
}
```

- [ ] **Step 4: Verificar**

Run: `pnpm lint && pnpm exec tsc --noEmit`
Expected: sin errores (lint limpio y tipos OK).

```bash
for r in /servicios/mantenimiento-web /servicios/paginas-corporativas /servicios/finaliza-tu-web; do
  curl -s -o /dev/null -w "%{http_code}  $r\n" "http://100.90.176.92:3000$r"
done
```
Expected: `200` en las tres.

- [ ] **Step 5: Commit**

```bash
git add app/servicios/mantenimiento-web/page.tsx app/servicios/paginas-corporativas/page.tsx app/servicios/finaliza-tu-web/page.tsx
git commit -m "refactor(servicios): migra las landings restantes a la plantilla"
```

---

### Task 5: Retirar la plantilla vieja, verificación final y checkpoint

**Files:**
- Delete: `components/service-landing.tsx`
- Modify: `docs/checkpoint.md`

- [ ] **Step 1: Confirmar que nadie usa la plantilla vieja**

Run: `grep -rn "service-landing" app components lib --exclude=service-landing.tsx`
Expected: sin resultados (nadie importa la plantilla vieja).

- [ ] **Step 2: Borrar el archivo**

```bash
git rm components/service-landing.tsx
```

- [ ] **Step 3: Build completo**

Run: `pnpm build`
Expected: `✓ Compiled successfully` y las 6 rutas de `/servicios/*` presentes.

- [ ] **Step 4: Verificación en navegador (las 6 rutas + contraste de hex)**

```bash
for r in paginas-informativas ecommerce mantenimiento-web paginas-corporativas finaliza-tu-web agente-ia; do
  curl -s -o /dev/null -w "%{http_code}  /servicios/$r\n" "http://100.90.176.92:3000/servicios/$r"
done
```

Run: `grep -rn "#FD4B5B\|#42BEC0\|#665DE2\|#FF6B7A\|#5AD5D7\|#8178E8" app/servicios`
Expected: sin resultados (cero hex sueltos).

- [ ] **Step 5: Actualizar `docs/checkpoint.md`**

Añadir en la tabla de rutas la nota de que las 6 landings usan la plantilla
`components/service-template.tsx`, y en «Estilos y accesibilidad» que se eliminaron
los hex sueltos de las landings. (Editar el archivo con los valores reales.)

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "refactor(servicios): plantilla unificada y retiro de service-landing"
```

---

## Self-Review

- **Cobertura del spec:** componente (Task 1), migración de las 6 páginas (Tasks 2–4),
  retiro de `service-landing` (Task 5), gráfico movido+reducido (Task 1, `ServiceGraphic`),
  cero hex (Tasks 2–4), dos listas con `lead` + genérico (Task 3). ✔
- **Placeholders:** no quedan TBD; todo el código va completo. ✔
- **Consistencia de tipos:** `Accent`, `IncluyeItem`, `ServiceTemplateData` definidos en
  Task 1 y usados con los mismos nombres en Tasks 2–4. ✔
