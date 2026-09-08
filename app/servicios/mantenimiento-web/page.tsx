import type { Metadata } from "next"

import { ServiceLanding, type ServiceLandingData } from "@/components/service-landing"

export const metadata: Metadata = {
  title: "Mantenimiento Web",
  description:
    "Actualizaciones, seguridad y soporte técnico continuo para mantener tu sitio web siempre actualizado.",
}

const data: ServiceLandingData = {
  hero: {
    titleLead: "Mantenimiento",
    titleAccent: "Web",
    accentGradient: "from-primary to-accent",
    subtitle:
      "Actualizaciones, seguridad y soporte técnico continuo para tu sitio web",
    cta: "Ver Planes",
  },
  accent: "primary",
  intro: {
    heading: "Mantén tu Sitio Siempre Actualizado",
    body: [
      "Tu sitio web necesita atención continua para mantenerse seguro, rápido y actualizado. Ofrecemos servicios de mantenimiento integral que incluyen actualizaciones de la plataforma y de todas sus dependencias, garantizando compatibilidad y rendimiento óptimo.",
      "Monitoreamos tu sitio 24/7, realizamos backups automáticos y aplicamos parches de seguridad de inmediato. Además, optimizamos el rendimiento y ofrecemos soporte técnico prioritario para resolver cualquier incidencia.",
    ],
  },
  beneficios: [
    "Actualizaciones de seguridad",
    "Backups automáticos",
    "Monitoreo 24/7",
    "Optimización de rendimiento",
    "Soporte técnico prioritario",
    "Actualizaciones de contenido",
  ],
  casosUso: [
    {
      title: "Mantenimiento Preventivo",
      description:
        "Evita problemas antes de que ocurran con monitoreo constante",
    },
    {
      title: "Actualizaciones Técnicas",
      description: "Mantén tu sitio al día con las últimas versiones y parches",
    },
    {
      title: "Gestión de Contenido",
      description: "Actualizaciones regulares de texto, imágenes y multimedia",
    },
    {
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
  return <ServiceLanding data={data} />
}
