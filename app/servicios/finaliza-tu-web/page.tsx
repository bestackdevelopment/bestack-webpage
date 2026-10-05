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
