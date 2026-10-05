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
