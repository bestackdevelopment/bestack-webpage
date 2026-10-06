import type { Metadata } from "next"
import {
  IconBox,
  IconBriefcase,
  IconBuildingStore,
  IconCreditCard,
  IconDeviceDesktop,
  IconLayoutDashboard,
  IconRepeat,
  IconShoppingBag,
  IconShoppingCart,
  IconTrendingUp,
  IconTruckDelivery,
} from "@tabler/icons-react"

import { ServiceTemplate, type ServiceTemplateData } from "@/components/service-template"

export const metadata: Metadata = {
  title: "Tienda en línea",
  description:
    "Vende tus productos en línea con una tienda rápida, segura y fácil de administrar.",
}

const data: ServiceTemplateData = {
  hero: {
    badge: "Comercio en línea",
    titleLead: "Tienda",
    titleAccent: "en línea",
    accentGradient: "from-accent to-primary",
    subtitle:
      "Vende tus productos en línea con una tienda rápida, segura y fácil de administrar.",
    ctas: [
      { label: "Solicitar Presupuesto", href: "/contacto" },
      { label: "Ver casos de uso", href: "/casos-de-uso", variant: "outline" },
    ],
  },
  incluye: {
    lead: {
      heading: "Tu tienda, lista para vender",
      body: [
        "Montamos tu tienda en línea con lo esencial para empezar a vender: catálogo de productos, carrito de compra y pasarela de pago.",
        "Si quieres administrarla tú, la montamos sobre WooCommerce para que gestiones productos, precios y pedidos sin depender de un desarrollador.",
      ],
    },
    items: [
      {
        icon: IconShoppingBag,
        accent: "primary",
        title: "Catálogo y carrito",
        description:
          "Tus productos con ficha, carrito de compra y checkout listos para vender.",
      },
      {
        icon: IconCreditCard,
        accent: "secondary",
        title: "Pasarela de pago",
        description:
          "Cobramos en línea con una pasarela de pago segura, según lo que necesites.",
      },
      {
        icon: IconTruckDelivery,
        accent: "accent",
        title: "Pedidos y envíos",
        description: "Gestiona pedidos, stock y envíos desde la misma tienda.",
      },
      {
        icon: IconTrendingUp,
        accent: "primary",
        title: "Optimizado para conversión",
        description:
          "Diseñamos la tienda para que sea fácil comprar y no perder ventas.",
      },
    ],
  },
  beneficios: [
    { icon: IconShoppingBag, accent: "primary", text: "Catálogo de productos" },
    { icon: IconCreditCard, accent: "secondary", text: "Pagos en línea" },
    { icon: IconShoppingCart, accent: "accent", text: "Carrito y checkout" },
    { icon: IconTruckDelivery, accent: "primary", text: "Envíos y seguimiento" },
    { icon: IconLayoutDashboard, accent: "secondary", text: "Panel de administración" },
    { icon: IconDeviceDesktop, accent: "accent", text: "Optimizado para móvil" },
  ],
  casosUso: [
    {
      icon: IconBuildingStore,
      accent: "primary",
      title: "Producto físico",
      description: "Vende tus productos con control de stock y envíos.",
    },
    {
      icon: IconBriefcase,
      accent: "secondary",
      title: "Venta de servicios",
      description: "Cobra en línea por tus servicios o citas.",
    },
    {
      icon: IconBox,
      accent: "accent",
      title: "Productos digitales",
      description: "Entrega descargas o accesos de forma automática.",
    },
    {
      icon: IconRepeat,
      accent: "primary",
      title: "Suscripciones",
      description: "Vende de forma recurrente con planes.",
    },
  ],
  faqs: [
    {
      question: "¿Qué necesito para empezar?",
      answer:
        "Un catálogo de productos y una cuenta para recibir pagos. De ahí montamos el resto.",
    },
    {
      question: "¿Puedo cobrar en línea?",
      answer: "Sí, integramos una pasarela de pago según lo que necesites.",
    },
    {
      question: "¿Puedo administrar la tienda yo mismo?",
      answer:
        "Sí. Si necesitas autogestionarla, la montamos sobre WooCommerce para que administres productos, precios y pedidos sin depender de un desarrollador.",
    },
    {
      question: "¿Funciona bien en el celular?",
      answer:
        "Sí, está optimizada para que tus clientes compren desde cualquier dispositivo.",
    },
  ],
  final: {
    heading: "¿Listo para vender en línea?",
    body: "Conversemos sobre tu catálogo y cómo quieres vender.",
    cta: "Contactar Ahora",
  },
}

export default function TiendaEnLineaPage() {
  return <ServiceTemplate data={data} />
}
