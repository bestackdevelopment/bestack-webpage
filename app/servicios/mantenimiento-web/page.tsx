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
      { label: "Solicitar información", href: "/contacto" },
      { label: "Ver casos de uso", href: "/casos-de-uso", variant: "outline" },
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
    items: [
      {
        icon: IconRefresh,
        accent: "primary",
        title: "Actualizaciones y parches",
        description:
          "Mantenemos la plataforma y sus dependencias al día para evitar fallos y problemas de compatibilidad.",
      },
      {
        icon: IconShieldLock,
        accent: "secondary",
        title: "Seguridad y copias de seguridad",
        description:
          "Aplicamos parches de seguridad y hacemos copias de seguridad automáticas.",
      },
      {
        icon: IconActivityHeartbeat,
        accent: "accent",
        title: "Monitoreo y rendimiento",
        description:
          "Vigilamos tu sitio y optimizamos el rendimiento para que cargue rápido.",
      },
      {
        icon: IconHeadset,
        accent: "primary",
        title: "Soporte y cambios de contenido",
        description:
          "Atendemos incidencias y actualizamos el contenido que necesites: textos e imágenes, y también productos, precios y descripciones de tu catálogo en línea o ecommerce.",
      },
    ],
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
      description:
        "Actualizaciones de texto, imágenes, y también productos, precios y descripciones de tu catálogo o tienda en línea",
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
      question: "¿Cómo sé si este servicio es para mí?",
      answer:
        "Si tu sitio ya está publicado y quieres que siga funcionando bien, seguro y con el contenido al día, este servicio es para ti. Nos encargamos de las actualizaciones, la seguridad y los cambios de contenido para que tú no tengas que hacerlo.",
    },
    {
      question: "¿Qué incluye el servicio de mantenimiento?",
      answer:
        "Actualizaciones técnicas, backups, monitoreo, optimización, soporte técnico, pequeños cambios de contenido y documentación de lo que se hace y de las incidencias atendidas.",
    },
    {
      question: "¿Con qué frecuencia se realizan los backups?",
      answer:
        "Depende del VPS contratado y de lo que ofrezca tu proveedor. Nos adaptamos a la frecuencia y la retención de backups que permita.",
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
    cta: "Solicitar información",
  },
}

export default function MantenimientoWebPage() {
  return <ServiceTemplate data={data} />
}
