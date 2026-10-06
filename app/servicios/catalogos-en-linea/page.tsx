import type { Metadata } from "next"
import Link from "next/link"
import {
  IconBox,
  IconBrandWhatsapp,
  IconBuildingStore,
  IconDeviceDesktop,
  IconFileText,
  IconLayoutGrid,
  IconPalette,
  IconPhoto,
  IconSearch,
  IconTrendingUp,
} from "@tabler/icons-react"

import { ServiceTemplate, type ServiceTemplateData } from "@/components/service-template"

export const metadata: Metadata = {
  title: "Catálogos en línea",
  description:
    "Muestra tus productos en línea con una vitrina clara, ordenada y fácil de explorar.",
}

const data: ServiceTemplateData = {
  hero: {
    badge: "Vitrinas de producto",
    titleLead: "Catálogos",
    titleAccent: "en línea",
    accentGradient: "from-primary to-secondary",
    subtitle:
      "Muestra tus productos en línea con una vitrina clara, ordenada y fácil de explorar.",
    ctas: [
      { label: "Solicitar Presupuesto", href: "/contacto" },
      { label: "Ver casos de uso", href: "/casos-de-uso", variant: "outline" },
    ],
  },
  incluye: {
    lead: {
      heading: "Tus productos, siempre a la vista",
      body: [
        "Un catálogo en línea es la vitrina de tu negocio: tus productos organizados y accesibles desde cualquier dispositivo.",
        "Tus clientes exploran el catálogo y arman su pedido contigo por WhatsApp si lo necesitan. No incluye pasarela de pago: se limita a mostrar tus productos y a que te contacten.",
      ],
    },
    items: [
      {
        icon: IconLayoutGrid,
        accent: "primary",
        title: "Productos organizados",
        description:
          "Agrupamos tus productos por categorías para que se encuentren fácil.",
      },
      {
        icon: IconPhoto,
        accent: "secondary",
        title: "Fichas de producto",
        description:
          "Cada producto con foto, descripción y la información que necesites mostrar.",
      },
      {
        icon: IconDeviceDesktop,
        accent: "accent",
        title: "Se ve bien en cualquier dispositivo",
        description: "El catálogo se adapta a computadora, tablet y celular.",
      },
      {
        icon: IconBrandWhatsapp,
        accent: "primary",
        title: "Contacto directo",
        description:
          "Tus clientes te consultan por WhatsApp o por el formulario de contacto.",
      },
    ],
  },
  beneficios: [
    { icon: IconLayoutGrid, accent: "primary", text: "Productos por categorías" },
    { icon: IconPhoto, accent: "secondary", text: "Fotos y descripciones" },
    { icon: IconDeviceDesktop, accent: "accent", text: "Adaptado a todo dispositivo" },
    { icon: IconBrandWhatsapp, accent: "primary", text: "Consultas por WhatsApp" },
    { icon: IconSearch, accent: "secondary", text: "Búsqueda y filtros" },
    { icon: IconTrendingUp, accent: "accent", text: "Optimizado para buscadores" },
  ],
  casosUso: [
    {
      icon: IconBuildingStore,
      accent: "primary",
      title: "Negocios con productos",
      description: "Muestra tu línea de productos sin montar una tienda completa.",
    },
    {
      icon: IconPalette,
      accent: "secondary",
      title: "Talleres y artesanos",
      description: "Presenta tus piezas con fotos y detalles.",
    },
    {
      icon: IconBox,
      accent: "accent",
      title: "Distribuidores",
      description: "Un catálogo para que tus clientes consulten productos y precios.",
    },
    {
      icon: IconFileText,
      accent: "primary",
      title: "Menús y listas",
      description: "Muestra tu menú o tu lista de servicios de forma clara.",
    },
  ],
  faqs: [
    {
      question: "¿Incluye pagos en línea?",
      answer: (
        <>
          No. El catálogo muestra tus productos y tus clientes te contactan (por
          WhatsApp o el formulario) para armar el pedido. No incluye pasarela de
          pago; para cobrar en línea está el servicio de{" "}
          <Link
            href="/servicios/tienda-en-linea"
            className="text-primary font-medium underline underline-offset-4"
          >
            Tienda en línea
          </Link>
          .
        </>
      ),
    },
    {
      question: "¿Cómo compran mis clientes?",
      answer:
        "Te contactan por WhatsApp o por el formulario para pedir o preguntar por un producto.",
    },
    {
      question: "¿Puedo actualizar los productos?",
      answer:
        "Sí. Podemos actualizarlos nosotros con el servicio de mantenimiento, o montar el catálogo sobre WooCommerce para que lo administres tú mismo.",
    },
    {
      question: "¿Cuántos productos puedo mostrar?",
      answer:
        "Los que necesites; organizamos el catálogo por categorías para que sea fácil de explorar.",
    },
    {
      question: "¿Funciona bien en móvil?",
      answer:
        "Sí, el catálogo está optimizado para verse bien en cualquier dispositivo.",
    },
  ],
  final: {
    heading: "¿Quieres mostrar tu catálogo en línea?",
    body: "Conversemos sobre tus productos y cómo quieres presentarlos.",
    cta: "Contactar Ahora",
  },
}

export default function CatalogosEnLineaPage() {
  return <ServiceTemplate data={data} />
}
