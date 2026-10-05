import type { Metadata } from "next"
import {
  IconDeviceDesktop,
  IconFileText,
  IconPalette,
  IconPresentation,
  IconRocket,
  IconSparkles,
  IconTarget,
  IconTrendingUp,
  IconWorld,
} from "@tabler/icons-react"

import { ServiceTemplate, type ServiceTemplateData } from "@/components/service-template"

export const metadata: Metadata = {
  title: "Páginas Informativas",
  description:
    "Sitios informativos modernos y optimizados. Diseño profesional, SEO integrado y compatibilidad total para destacar tu proyecto.",
}

const data: ServiceTemplateData = {
  hero: {
    badge: "Diseño Web Profesional",
    titleLead: "",
    titleAccent: "Páginas Informativas",
    accentGradient: "from-primary to-accent",
    subtitle:
      "Sitios informativos modernos diseñados para destacar tu proyecto con tecnología de vanguardia",
    ctas: [
      { label: "Empieza tu sitio", href: "/contacto" },
      { label: "Ver ejemplos", href: "/ejemplos", variant: "outline" },
    ],
  },
  incluye: {
    items: [
      {
        icon: IconPalette,
        accent: "primary",
        title: "Diseño moderno y adaptable",
        description:
          "Su sitio se presenta con una estética profesional que mantiene coherencia con su identidad visual y se ajusta correctamente a cualquier dispositivo.",
      },
      {
        icon: IconFileText,
        accent: "secondary",
        title: "Estructura de contenido clara y estratégica",
        description:
          "Organizamos la información de forma que sus visitantes comprendan de inmediato quién es usted, qué ofrece y cómo pueden avanzar al siguiente paso.",
      },
      {
        icon: IconWorld,
        accent: "accent",
        title: "Preparación para buscadores (SEO)",
        description:
          "Incluimos configuraciones que ayudan a que su proyecto sea más visible en motores de búsqueda mediante textos bien estructurados, títulos adecuados y contenido optimizado.",
      },
      {
        icon: IconTarget,
        accent: "primary",
        title: "Formulario de contacto optimizado para conversión",
        description:
          "Su página integra un formulario diseñado para que sus visitantes puedan comunicarse de forma rápida y efectiva.",
      },
      {
        icon: IconDeviceDesktop,
        accent: "secondary",
        title: "Enlaces directos a redes sociales y WhatsApp",
        description:
          "Agregamos accesos que facilitan la interacción directa con su marca, incluyendo un mensaje inicial predefinido para WhatsApp.",
      },
      {
        icon: IconSparkles,
        accent: "accent",
        title: "Animaciones sutiles que elevan la experiencia",
        description:
          "Incorporamos transiciones suaves y bien equilibradas que aportan dinamismo sin distraer del contenido.",
      },
      {
        icon: IconRocket,
        accent: "primary",
        title: "Contenido e imágenes optimizados para una mejor experiencia",
        description:
          "Su sitio aprovecha técnicas de optimización que mejoran la velocidad de carga y garantizan una navegación agradable.",
      },
    ],
  },
  beneficios: [
    { icon: IconSparkles, accent: "primary", text: "Diseño moderno y atractivo" },
    { icon: IconTrendingUp, accent: "secondary", text: "Optimización SEO integrada" },
    { icon: IconRocket, accent: "accent", text: "Rendimiento de carga superior" },
    { icon: IconDeviceDesktop, accent: "primary", text: "Adaptable a cualquier dispositivo" },
    { icon: IconFileText, accent: "secondary", text: "Contenido actualizable" },
    { icon: IconWorld, accent: "accent", text: "Integración con redes sociales" },
  ],
  casosUso: [
    {
      icon: IconPalette,
      accent: "primary",
      title: "Portafolios Creativos",
      description:
        "Destaca tu talento y experiencia con un diseño que refleja tu identidad profesional",
    },
    {
      icon: IconFileText,
      accent: "secondary",
      title: "Blogs y Publicaciones",
      description:
        "Comparte conocimiento y construye autoridad en tu sector con contenido bien estructurado",
    },
    {
      icon: IconTarget,
      accent: "accent",
      title: "Páginas de Captura",
      description:
        "Convierte visitas en oportunidades reales con diseños enfocados en la conversión",
    },
    {
      icon: IconPresentation,
      accent: "primary",
      title: "Sitios de Proyecto",
      description:
        "Presenta iniciativas, servicios o productos con claridad y profesionalismo",
    },
  ],
  faqs: [
    {
      question: "¿Cuánto tiempo toma desarrollar una página informativa?",
      answer:
        "El desarrollo toma entre 1 y 2 semanas, ajustándose a la complejidad del contenido y las funcionalidades que requieras.",
    },
    {
      question: "¿Incluye redacción de contenido?",
      answer:
        "Trabajamos con el contenido que nos proporciones, y también podemos ayudarte a crear textos profesionales si lo necesitas.",
    },
    {
      question: "¿El sitio funciona bien en móviles?",
      answer:
        "Totalmente. Todos nuestros desarrollos están optimizados para ofrecer una experiencia fluida en cualquier dispositivo.",
    },
    {
      question: "¿Puedo modificar el contenido después?",
      answer:
        "Por defecto, el contenido es estático. Sin embargo, si deseas gestionar tu contenido de forma autónoma, podemos integrar un sistema de gestión de contenidos (CMS) como servicio adicional, o bien, puedes contratar nuestro servicio de Administración web y soporte para que nosotros manejemos las actualizaciones por ti.",
    },
    {
      question: "¿Cuántas propuestas de diseño recibiré?",
      answer:
        "Entregamos dos propuestas de diseño para que puedas elegir la que mejor se adapte a tu visión. Una vez seleccionada, realizamos cambios limitados según corresponda para ajustar detalles específicos.",
    },
  ],
  copy: {
    beneficiosSubtitle: "Todo lo que necesitas para destacar en línea",
    casosSubtitle: "Soluciones adaptadas a tus necesidades",
    faqsSubtitle: "Resolvemos tus dudas",
  },
  final: {
    heading: "¿Listo para crear tu página informativa?",
    body: "Conversemos sobre tu proyecto y te enviaremos una propuesta personalizada",
    cta: "Contactar Ahora",
  },
}

export default function PaginasInformativasPage() {
  return <ServiceTemplate data={data} />
}
