import type { Metadata } from "next"
import {
  IconAdjustments,
  IconBrain,
  IconChartHistogram,
  IconClock24,
  IconLifebuoy,
  IconPlugConnected,
  IconServer,
  IconSettingsAutomation,
  IconTrendingUp,
} from "@tabler/icons-react"

import { ServiceTemplate, type ServiceTemplateData } from "@/components/service-template"

export const metadata: Metadata = {
  title: "Agente IA",
  description:
    "Un agente de IA que aprende cómo funciona tu negocio y lo opera contigo. Tú decides qué hace: se le enseña lo que tu operación necesite.",
}

const data: ServiceTemplateData = {
  hero: {
    badge: "Automatización y gestión",
    titleLead: "Agente",
    titleAccent: "IA",
    accentGradient: "from-accent to-primary",
    subtitle:
      "Un agente de IA que aprende cómo funciona tu negocio y lo opera contigo.",
    ctas: [
      { label: "Solicitar Presupuesto", href: "/contacto" },
      { label: "Ver casos de uso", href: "/casos-de-uso", variant: "outline" },
    ],
  },
  incluye: {
    lead: {
      heading: "Tu operación, con un agente que la conoce",
      body: [
        "Trabajamos con Hermes Agent, un agente de IA open-source que corre en tu propia infraestructura o en un VPS dedicado. Está pensado para gestión y administración, no para atención a clientes.",
        "Lo integramos con Telegram para que lo uses desde el chat, y lo dejamos funcionando. A partir de ahí, tú puedes seguir evolucionándolo y construyendo lo que necesites con tu agente.",
      ],
    },
    items: [
      {
        icon: IconSettingsAutomation,
        accent: "primary",
        title: "Gestión y administración",
        description:
          "Te ayuda a operar y administrar tu negocio; no es un chatbot de atención a clientes.",
      },
      {
        icon: IconPlugConnected,
        accent: "secondary",
        title: "Integrado con Telegram",
        description: "Lo usas desde el chat, donde ya trabajas.",
      },
      {
        icon: IconServer,
        accent: "accent",
        title: "En tu infraestructura o un VPS",
        description: "Vive en tu propio servidor o en un VPS dedicado.",
      },
      {
        icon: IconBrain,
        accent: "primary",
        title: "Crece contigo",
        description:
          "Memoria persistente y skills propias: sigue evolucionando y tú construyes más con él.",
      },
    ],
  },
  beneficios: [
    { icon: IconBrain, accent: "primary", text: "Aprende tu operación" },
    { icon: IconAdjustments, accent: "secondary", text: "Tú defines qué hace y qué no" },
    { icon: IconSettingsAutomation, accent: "accent", text: "Gestión y administración" },
    { icon: IconClock24, accent: "primary", text: "Automatiza tareas programadas" },
    { icon: IconServer, accent: "secondary", text: "En tu infraestructura o un VPS" },
    { icon: IconTrendingUp, accent: "accent", text: "Crece contigo" },
  ],
  casosUso: [
    {
      icon: IconSettingsAutomation,
      accent: "primary",
      title: "Administración",
      description: "Se encarga de tareas de gestión y administración de tu negocio.",
    },
    {
      icon: IconChartHistogram,
      accent: "secondary",
      title: "Reportes y seguimiento",
      description: "Genera reportes y da seguimiento a tu operación.",
    },
    {
      icon: IconClock24,
      accent: "accent",
      title: "Tareas programadas",
      description: "Ejecuta tareas recurrentes: respaldos, avisos o recordatorios.",
    },
    {
      icon: IconLifebuoy,
      accent: "primary",
      title: "Apoyo operativo",
      description: "Te acompaña en el día a día de tu operación.",
    },
  ],
  faqs: [
    {
      question: "¿Con qué agente trabajan?",
      answer:
        "Con Hermes Agent, un agente de IA open-source. Nosotros hacemos la implementación y te lo dejamos funcionando.",
    },
    {
      question: "¿Dónde vive el agente?",
      answer:
        "En tu propia infraestructura o en un VPS dedicado; tú eliges.",
    },
    {
      question: "¿Se integra con mis herramientas?",
      answer:
        "Sí, lo integramos con Telegram y con los sistemas que ya uses.",
    },
    {
      question: "¿Puedo seguir construyendo con él?",
      answer:
        "Sí. Tiene memoria persistente y genera sus propias skills, así que puedes seguir evolucionándolo y construyendo cosas con él.",
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
