import type { Metadata } from "next"
import {
  IconBriefcase,
  IconBuilding,
  IconDeviceDesktop,
  IconFileText,
  IconHeadset,
  IconLanguage,
  IconMail,
  IconPalette,
  IconRobot,
  IconSparkles,
  IconTarget,
  IconTrendingUp,
  IconUsers,
  IconWorld,
} from "@tabler/icons-react"

import { ServiceTemplate, type ServiceTemplateData } from "@/components/service-template"

export const metadata: Metadata = {
  title: "Páginas Corporativas",
  description:
    "Sitios con una imagen formal y profesional para presentar tu empresa.",
}

const data: ServiceTemplateData = {
  hero: {
    badge: "Imagen corporativa",
    titleLead: "Páginas",
    titleAccent: "Corporativas",
    accentGradient: "from-accent to-primary",
    subtitle:
      "Sitios con una imagen formal y profesional para presentar tu empresa.",
    ctas: [
      { label: "Solicitar Presupuesto", href: "/contacto" },
      { label: "Ver casos de uso", href: "/casos-de-uso", variant: "outline" },
    ],
  },
  incluye: {
    lead: {
      heading: "Una presencia a la altura de tu empresa",
      body: [
        "Diseñamos tu sitio con un estilo formal y profesional, pensado para transmitir la seriedad de tu empresa desde la primera visita. Cuidamos el tono, la estructura y la imagen para que tu empresa se presente con confianza y claridad.",
      ],
    },
    items: [
      {
        icon: IconPalette,
        accent: "primary",
        title: "Diseño corporativo y adaptable",
        description:
          "Una estética formal y coherente con la identidad de tu empresa, que se ve bien en cualquier dispositivo.",
      },
      {
        icon: IconFileText,
        accent: "secondary",
        title: "Estructura clara y estratégica",
        description:
          "Organizamos la información para que se entienda de inmediato cuál es tu negocio, qué ofreces y cómo contactarte.",
      },
      {
        icon: IconWorld,
        accent: "accent",
        title: "Preparación para buscadores (SEO)",
        description:
          "Textos y títulos bien estructurados para que tu sitio sea visible en los motores de búsqueda.",
      },
      {
        icon: IconRobot,
        accent: "secondary",
        title: "Optimización para agentes de IA (GEO)",
        description:
          "Preparamos el contenido para que los asistentes de IA lo entiendan, lo citen y lo recomienden.",
      },
      {
        icon: IconTarget,
        accent: "primary",
        title: "Formulario de contacto",
        description:
          "Un formulario directo para que tus clientes te escriban sin fricción.",
      },
      {
        icon: IconSparkles,
        accent: "accent",
        title: "Animaciones y contenido optimizado",
        description:
          "Transiciones sutiles y contenido optimizado para una carga rápida.",
      },
      {
        icon: IconLanguage,
        accent: "primary",
        title: "Varios idiomas",
        description:
          "Si tu empresa atiende en más de un idioma, el sitio puede mostrarse en cada uno.",
      },
    ],
  },
  beneficios: [
    { icon: IconPalette, accent: "primary", text: "Diseño corporativo profesional" },
    { icon: IconFileText, accent: "secondary", text: "Varias páginas y secciones" },
    { icon: IconTrendingUp, accent: "accent", text: "Optimización SEO y GEO" },
    { icon: IconLanguage, accent: "primary", text: "Sitio en varios idiomas" },
    { icon: IconDeviceDesktop, accent: "primary", text: "Carga rápida en cualquier dispositivo" },
    { icon: IconMail, accent: "secondary", text: "Formulario de contacto" },
    { icon: IconHeadset, accent: "accent", text: "Soporte y actualizaciones" },
  ],
  casosUso: [
    {
      icon: IconBuilding,
      accent: "primary",
      title: "Sitios de empresa",
      description: "Presencia digital formal para presentar tu empresa.",
    },
    {
      icon: IconBriefcase,
      accent: "secondary",
      title: "Presentación de servicios",
      description: "Muestra lo que ofreces con una imagen profesional.",
    },
    {
      icon: IconUsers,
      accent: "accent",
      title: "Equipo y trayectoria",
      description: "Da a conocer a tu equipo y tu experiencia.",
    },
    {
      icon: IconFileText,
      accent: "primary",
      title: "Portafolio corporativo",
      description: "Presenta tus proyectos y casos con seriedad.",
    },
  ],
  faqs: [
    {
      question: "¿Qué secciones puede tener mi sitio?",
      answer:
        "Las que necesites: presentación, servicios, sobre la empresa, proyectos y contacto. Definimos el contenido contigo.",
    },
    {
      question: "¿Cuánto tiempo toma desarrollar una página corporativa?",
      answer:
        "Depende del contenido y de las secciones que necesites. Te damos un tiempo estimado por escrito antes de empezar.",
    },
    {
      question: "¿Puedo modificar el contenido después?",
      answer:
        "El sitio se entrega estático y las actualizaciones las gestionamos con el servicio de mantenimiento. Si prefieres administrarlo tú, lo construimos sobre un gestor como WordPress.",
    },
    {
      question: "¿Funciona bien en móvil?",
      answer:
        "Sí, está optimizado para verse bien y cargar rápido en cualquier dispositivo.",
    },
  ],
  final: {
    heading: "¿Necesitas un sitio corporativo?",
    body: "Hablemos de tu empresa y de la imagen que quieres proyectar.",
    cta: "Contactar Ahora",
  },
}

export default function PaginasCorporativasPage() {
  return <ServiceTemplate data={data} />
}
