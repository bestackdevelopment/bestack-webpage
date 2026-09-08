import type { Metadata } from "next"

import { ServiceLanding, type ServiceLandingData } from "@/components/service-landing"

export const metadata: Metadata = {
  title: "Páginas Corporativas",
  description:
    "Soluciones empresariales completas con diseño profesional y funcionalidad avanzada para tu negocio.",
}

const data: ServiceLandingData = {
  hero: {
    titleLead: "Páginas",
    titleAccent: "Corporativas",
    accentGradient: "from-secondary to-accent",
    subtitle:
      "Soluciones empresariales completas con diseño profesional y funcionalidad avanzada",
    cta: "Solicitar Presupuesto",
  },
  accent: "secondary",
  intro: {
    heading: "Soluciones Empresariales a Medida",
    body: [
      "Desarrollamos sitios corporativos robustos y escalables. Nuestras soluciones incluyen gestión de contenido avanzada, formularios complejos con validación estricta y una arquitectura pensada para crecer contigo.",
      "Cada proyecto corporativo se diseña pensando en la escalabilidad futura, la integración con sistemas existentes y la facilidad de mantenimiento. Implementamos las mejores prácticas de seguridad y rendimiento.",
    ],
  },
  beneficios: [
    "Diseño corporativo profesional",
    "Gestión de contenido avanzada",
    "Integración con sistemas empresariales",
    "Panel de administración personalizado",
    "Múltiples idiomas",
    "Alta seguridad y rendimiento",
  ],
  casosUso: [
    {
      title: "Sitios Corporativos",
      description:
        "Presencia digital completa para empresas medianas y grandes",
    },
    {
      title: "Intranets Corporativas",
      description: "Portales internos para comunicación y gestión empresarial",
    },
    {
      title: "Portales de Clientes",
      description:
        "Áreas privadas con funcionalidades específicas para clientes",
    },
    {
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
  return <ServiceLanding data={data} />
}
