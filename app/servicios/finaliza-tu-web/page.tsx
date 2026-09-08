import type { Metadata } from "next"

import { ServiceLanding, type ServiceLandingData } from "@/components/service-landing"

export const metadata: Metadata = {
  title: "Finaliza tu Web",
  description:
    "Completamos proyectos web inconclusos con calidad y profesionalismo para lanzar tu sitio cuanto antes.",
}

const data: ServiceLandingData = {
  hero: {
    titleLead: "Finaliza",
    titleAccent: "tu Web",
    accentGradient: "from-secondary to-primary",
    subtitle:
      "Completamos proyectos inconclusos con calidad y profesionalismo",
    cta: "Evaluar mi Proyecto",
  },
  accent: "secondary",
  intro: {
    heading: "Rescatamos tu Proyecto Web",
    body: [
      "¿Tienes un proyecto web sin terminar? Analizamos el código existente, identificamos lo que falta y completamos el desarrollo con los más altos estándares de calidad. Si es necesario, migramos tu proyecto a una base tecnológica moderna para garantizar un resultado mantenible.",
      "Trabajamos con cualquier base de código, documentamos todo el proceso y te entregamos un sitio completo, optimizado y listo para lanzar. Nuestro objetivo es que finalmente tengas el sitio web que siempre quisiste.",
    ],
  },
  beneficios: [
    "Análisis del proyecto existente",
    "Plan de finalización claro",
    "Código de calidad profesional",
    "Testing y optimización",
    "Migración a tecnologías modernas",
    "Documentación completa",
  ],
  casosUso: [
    {
      title: "Proyectos Abandonados",
      description: "Retomamos proyectos que quedaron sin terminar",
    },
    {
      title: "Código Legacy",
      description: "Modernizamos y completamos sitios con código antiguo",
    },
    {
      title: "Migraciones",
      description: "Finalizamos migraciones incompletas a nuevas tecnologías",
    },
    {
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
  return <ServiceLanding data={data} />
}
