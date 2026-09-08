import type { Metadata } from "next"

import { ServiceLanding, type ServiceLandingData } from "@/components/service-landing"

export const metadata: Metadata = {
  title: "Ecommerce",
  description:
    "Tiendas online optimizadas con pasarelas de pago y gestión de inventario para impulsar tu negocio.",
}

const data: ServiceLandingData = {
  hero: {
    titleLead: "Tiendas",
    titleAccent: "Ecommerce",
    accentGradient: "from-accent to-primary",
    subtitle:
      "Tiendas online optimizadas con pasarelas de pago y gestión de inventario",
    cta: "Solicitar Presupuesto",
  },
  accent: "accent",
  intro: {
    heading: "Impulsa tu Negocio Online",
    body: [
      "Creamos tiendas online de alto rendimiento, con tiempos de carga mínimos y una experiencia de compra fluida en cualquier dispositivo. Gestionamos el carrito y el proceso de pago de forma ágil y segura.",
      "Integramos pasarelas de pago seguras, sistemas de gestión de inventario y herramientas de análisis para que puedas tomar decisiones basadas en datos. Cada tienda está optimizada para conversión y experiencia del usuario.",
    ],
  },
  beneficios: [
    "Pasarelas de pago integradas",
    "Gestión de inventario en tiempo real",
    "Carrito de compra optimizado",
    "Panel de administración completo",
    "Seguimiento de pedidos",
    "Optimización de conversión",
  ],
  casosUso: [
    {
      title: "Tiendas Online",
      description: "Vende productos físicos o digitales con facilidad",
    },
    {
      title: "Marketplaces",
      description: "Plataformas multi-vendedor con gestión centralizada",
    },
    {
      title: "Suscripciones",
      description: "Modelos de negocio recurrentes y membresías",
    },
    {
      title: "B2B Ecommerce",
      description: "Soluciones específicas para venta empresarial",
    },
  ],
  faqs: [
    {
      question: "¿Qué pasarelas de pago soportan?",
      answer:
        "Integramos Stripe, PayPal y otras pasarelas según tus necesidades y mercado objetivo.",
    },
    {
      question: "¿Incluye gestión de inventario?",
      answer:
        "Sí, desarrollamos un sistema completo de gestión de productos, stock y variantes.",
    },
    {
      question: "¿Puedo gestionar envíos?",
      answer:
        "Sí, integramos sistemas de envío y tracking para una gestión logística completa.",
    },
    {
      question: "¿Es seguro para procesar pagos?",
      answer:
        "Absolutamente. Seguimos las mejores prácticas de seguridad y cumplimiento PCI.",
    },
  ],
  final: {
    heading: "¿Listo para lanzar tu tienda online?",
    body: "Conversemos sobre tu modelo de negocio y creemos la tienda perfecta",
    cta: "Contactar Ahora",
  },
}

export default function EcommercePage() {
  return <ServiceLanding data={data} />
}
