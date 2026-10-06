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
        "Un agente de IA no es un chatbot genérico: se entrena con la forma en que opera tu negocio (tus procesos, tu información y tu forma de atender) para trabajar como parte de tu equipo.",
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
