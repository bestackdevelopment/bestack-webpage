import type { Metadata } from "next"

import { ServiceLanding, type ServiceLandingData } from "@/components/service-landing"

export const metadata: Metadata = {
  title: "Agente IA",
  description:
    "Un agente de IA que aprende cómo funciona tu negocio y lo opera contigo. Tú decides qué hace: se le enseña lo que tu operación necesite.",
}

const data: ServiceLandingData = {
  hero: {
    titleLead: "Agente",
    titleAccent: "IA",
    accentGradient: "from-accent to-primary",
    subtitle:
      "Un agente de IA que aprende cómo funciona tu negocio y lo opera contigo.",
    cta: "Solicitar Presupuesto",
  },
  accent: "accent",
  intro: {
    heading: "Tu operación, con un agente que la conoce",
    body: [
      "Un agente de IA no es un chatbot genérico: se entrena con la forma en que opera tu negocio —tus procesos, tu información y tu forma de atender— para trabajar como parte de tu equipo.",
      "Tú defines qué hace y qué no. Se le enseña exactamente lo que tu operación necesite, y trabaja contigo en las tareas que elijas.",
    ],
  },
  beneficios: [
    "Aprende cómo opera tu negocio",
    "Opera tareas junto a tu equipo",
    "Tú defines qué hace y qué no",
    "Se integra a tus herramientas y canales",
    "Atiende a tus clientes sin horario",
    "Se ajusta y mejora con el uso",
  ],
  casosUso: [
    {
      title: "Atención al cliente",
      description:
        "Responde dudas y da seguimiento con la información y el tono de tu negocio.",
    },
    {
      title: "Procesos internos",
      description:
        "Se encarga de tareas repetitivas: cotizaciones, seguimiento, reportes.",
    },
    {
      title: "Ventas",
      description:
        "Apoya el seguimiento de prospectos para que ninguno se quede sin respuesta.",
    },
    {
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
      answer:
        "No. Nosotros lo configuramos y tú lo usas de forma natural.",
    },
  ],
  final: {
    heading: "¿Listo para que tu negocio opere con un agente de IA?",
    body: "Conversemos sobre tu operación y qué debería hacer el agente.",
    cta: "Contactar Ahora",
  },
}

export default function AgenteIaPage() {
  return <ServiceLanding data={data} />
}
