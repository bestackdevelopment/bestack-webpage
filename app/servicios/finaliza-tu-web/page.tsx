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
      { label: "Ver casos de uso", href: "/casos-de-uso", variant: "outline" },
    ],
  },
  incluye: {
    lead: {
      heading: "Rescatamos tu Proyecto Web",
      body: [
        "¿Tienes un proyecto web sin terminar? Analizamos tu proyecto existente y te decimos si podemos adaptarnos a él y ofrecerte una solución, o si es mejor migrarlo a una tecnología más actual. A partir de ahí completamos lo que falta y lo dejamos listo.",
        "Analizamos cualquier proyecto, documentamos todo el proceso y te entregamos un sitio completo, optimizado y listo para lanzar. Nuestro objetivo es que finalmente tengas el sitio web que siempre quisiste.",
      ],
    },
    items: [
      {
        icon: IconSearch,
        accent: "primary",
        title: "Diagnóstico del proyecto",
        description:
          "Revisamos en qué estado está tu proyecto y qué falta para terminarlo.",
      },
      {
        icon: IconArrowsExchange,
        accent: "secondary",
        title: "Adaptación o migración",
        description:
          "Nos adaptamos a lo que ya tienes o lo migramos a una tecnología más actual.",
      },
      {
        icon: IconChecklist,
        accent: "accent",
        title: "Completamos lo que falta",
        description:
          "Terminamos las funcionalidades pendientes y lo dejamos funcionando.",
      },
      {
        icon: IconBug,
        accent: "primary",
        title: "Pruebas y entrega",
        description: "Probamos el sitio y te lo entregamos listo para lanzar.",
      },
    ],
  },
  beneficios: [
    { icon: IconSearch, accent: "primary", text: "Análisis del proyecto existente" },
    { icon: IconListCheck, accent: "secondary", text: "Plan de finalización claro" },
    { icon: IconCode, accent: "accent", text: "Trabajo de calidad profesional" },
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
      title: "Proyectos antiguos",
      description: "Modernizamos y completamos proyectos hechos con tecnología antigua",
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
      question: "¿Pueden trabajar con el proyecto de otros desarrolladores?",
      answer:
        "Sí. Analizamos tu proyecto y nos adaptamos a él si es posible; si no, te proponemos una solución o una migración.",
    },
    {
      question: "¿Cuánto tiempo toma finalizar un proyecto?",
      answer:
        "Depende del estado actual. Tras una evaluación inicial, te damos un tiempo estimado preciso.",
    },
    {
      question: "¿Qué pasa si el proyecto es de mala calidad?",
      answer:
        "Podemos refactorizar y mejorar tu proyecto o hacer una migración completa si es necesario.",
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
