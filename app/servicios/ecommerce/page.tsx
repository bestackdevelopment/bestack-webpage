import type { Metadata } from "next"
import {
  IconBox,
  IconBriefcase,
  IconBuildingStore,
  IconCreditCard,
  IconLayoutDashboard,
  IconRepeat,
  IconShoppingBag,
  IconShoppingCart,
  IconTruckDelivery,
  IconTrendingUp,
} from "@tabler/icons-react"

import { ServiceTemplate, type ServiceTemplateData } from "@/components/service-template"
import { incluyeGenerico } from "@/lib/servicios-incluye-generico"

export const metadata: Metadata = {
  title: "Ecommerce",
  description:
    "Tiendas online optimizadas con pasarelas de pago y gestión de inventario para impulsar tu negocio.",
}

const data: ServiceTemplateData = {
  hero: {
    badge: "Tiendas en línea",
    titleLead: "Tiendas",
    titleAccent: "Ecommerce",
    accentGradient: "from-accent to-primary",
    subtitle:
      "Tiendas online optimizadas con pasarelas de pago y gestión de inventario",
    ctas: [
      { label: "Solicitar Presupuesto", href: "/contacto" },
      { label: "Ver ejemplos", href: "/ejemplos", variant: "outline" },
    ],
  },
  incluye: {
    lead: {
      heading: "Impulsa tu Negocio Online",
      body: [
        "Creamos tiendas online de alto rendimiento, con tiempos de carga mínimos y una experiencia de compra fluida en cualquier dispositivo. Gestionamos el carrito y el proceso de pago de forma ágil y segura.",
        "Integramos pasarelas de pago seguras, sistemas de gestión de inventario y herramientas de análisis para que puedas tomar decisiones basadas en datos. Cada tienda está optimizada para conversión y experiencia del usuario.",
      ],
    },
    items: incluyeGenerico,
  },
  beneficios: [
    { icon: IconCreditCard, accent: "primary", text: "Pasarelas de pago integradas" },
    { icon: IconBox, accent: "secondary", text: "Gestión de inventario en tiempo real" },
    { icon: IconShoppingCart, accent: "accent", text: "Carrito de compra optimizado" },
    { icon: IconLayoutDashboard, accent: "primary", text: "Panel de administración completo" },
    { icon: IconTruckDelivery, accent: "secondary", text: "Seguimiento de pedidos" },
    { icon: IconTrendingUp, accent: "accent", text: "Optimización de conversión" },
  ],
  casosUso: [
    {
      icon: IconShoppingBag,
      accent: "primary",
      title: "Tiendas Online",
      description: "Vende productos físicos o digitales con facilidad",
    },
    {
      icon: IconBuildingStore,
      accent: "secondary",
      title: "Marketplaces",
      description: "Plataformas multi-vendedor con gestión centralizada",
    },
    {
      icon: IconRepeat,
      accent: "accent",
      title: "Suscripciones",
      description: "Modelos de negocio recurrentes y membresías",
    },
    {
      icon: IconBriefcase,
      accent: "primary",
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
  ejemplo: {
    href: "/ejemplos/laserbox",
    label: "Ver el ejemplo",
    description:
      "Un ecommerce integrado a un sistema de operación: mira cómo lo hicimos en LaserBox.",
  },
  final: {
    heading: "¿Listo para lanzar tu tienda online?",
    body: "Conversemos sobre tu modelo de negocio y creemos la tienda perfecta",
    cta: "Contactar Ahora",
  },
}

export default function EcommercePage() {
  return <ServiceTemplate data={data} />
}
