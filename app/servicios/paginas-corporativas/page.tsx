import type { Metadata } from "next"
import {
  IconBuilding,
  IconBuildingSkyscraper,
  IconFileText,
  IconLayoutDashboard,
  IconMapPin,
  IconNetwork,
  IconPlugConnected,
  IconShieldCheck,
  IconUsers,
  IconWorld,
} from "@tabler/icons-react"

import { ServiceTemplate, type ServiceTemplateData } from "@/components/service-template"
import { incluyeGenerico } from "@/lib/servicios-incluye-generico"

export const metadata: Metadata = {
  title: "Páginas Corporativas",
  description:
    "Soluciones empresariales completas con diseño profesional y funcionalidad avanzada para tu negocio.",
}

const data: ServiceTemplateData = {
  hero: {
    badge: "Presencia empresarial",
    titleLead: "Páginas",
    titleAccent: "Corporativas",
    accentGradient: "from-accent to-primary",
    subtitle:
      "Soluciones empresariales completas con diseño profesional y funcionalidad avanzada",
    ctas: [
      { label: "Solicitar Presupuesto", href: "/contacto" },
      { label: "Ver ejemplos", href: "/ejemplos", variant: "outline" },
    ],
  },
  incluye: {
    lead: {
      heading: "Soluciones Empresariales a Medida",
      body: [
        "Desarrollamos sitios corporativos robustos y escalables. Nuestras soluciones incluyen gestión de contenido avanzada, formularios complejos con validación estricta y una arquitectura pensada para crecer contigo.",
        "Cada proyecto corporativo se diseña pensando en la escalabilidad futura, la integración con sistemas existentes y la facilidad de mantenimiento. Implementamos las mejores prácticas de seguridad y rendimiento.",
      ],
    },
    items: incluyeGenerico,
  },
  beneficios: [
    { icon: IconBuilding, accent: "primary", text: "Diseño corporativo profesional" },
    { icon: IconFileText, accent: "secondary", text: "Gestión de contenido avanzada" },
    { icon: IconPlugConnected, accent: "accent", text: "Integración con sistemas empresariales" },
    { icon: IconLayoutDashboard, accent: "primary", text: "Panel de administración personalizado" },
    { icon: IconWorld, accent: "secondary", text: "Múltiples idiomas" },
    { icon: IconShieldCheck, accent: "accent", text: "Alta seguridad y rendimiento" },
  ],
  casosUso: [
    {
      icon: IconBuildingSkyscraper,
      accent: "primary",
      title: "Sitios Corporativos",
      description:
        "Presencia digital completa para empresas medianas y grandes",
    },
    {
      icon: IconNetwork,
      accent: "secondary",
      title: "Intranets Corporativas",
      description: "Portales internos para comunicación y gestión empresarial",
    },
    {
      icon: IconUsers,
      accent: "accent",
      title: "Portales de Clientes",
      description:
        "Áreas privadas con funcionalidades específicas para clientes",
    },
    {
      icon: IconMapPin,
      accent: "primary",
      title: "Sitios Multi-sucursal",
      description: "Gestión centralizada de múltiples ubicaciones",
    },
  ],
  faqs: [
    {
      question: "¿Cuánto tiempo toma desarrollar una página corporativa?",
      answer:
        "Entre 4-8 semanas dependiendo de la complejidad, integraciones y funcionalidades requeridas.",
    },
    {
      question: "¿Incluye panel de administración?",
      answer:
        "Sí, desarrollamos un CMS personalizado o integramos uno existente según tus necesidades.",
    },
    {
      question: "¿Puedo integrar con mis sistemas actuales?",
      answer:
        "Absolutamente. Podemos integrar con CRM, ERP, bases de datos y otros sistemas empresariales.",
    },
    {
      question: "¿Ofrecen soporte post-lanzamiento?",
      answer:
        "Sí, ofrecemos planes de mantenimiento y soporte técnico continuo.",
    },
  ],
  final: {
    heading: "¿Necesitas una solución corporativa?",
    body: "Hablemos sobre los requisitos específicos de tu empresa",
    cta: "Contactar Ahora",
  },
}

export default function PaginasCorporativasPage() {
  return <ServiceTemplate data={data} />
}
