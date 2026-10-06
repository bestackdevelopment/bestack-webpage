import type { ComponentType } from "react"
import {
  IconCertificate,
  IconChartHistogram,
  IconCloud,
  IconDeviceLaptop,
  IconPaint,
  IconRobot,
  IconShoppingBag,
  IconShoppingCartSearch,
} from "@tabler/icons-react"

/**
 * Tags de los casos de uso. Corresponden a los servicios que BeStack ofrece,
 * más un tag exclusivo `saas` que NO es un servicio (solo describe un tipo de
 * caso). FUENTE ÚNICA: se usan en `lib/casos-de-uso.ts` y en el componente
 * `components/servicio-tag.tsx`.
 */
export type ServicioTagId =
  | "informativas"
  | "corporativas"
  | "mantenimiento"
  | "catalogos"
  | "tienda"
  | "finaliza"
  | "agente-ia"
  | "saas"

export type ServicioTag = {
  id: ServicioTagId
  label: string
  icon: ComponentType<{
    className?: string
    size?: number
    stroke?: number
  }>
  /** Página del servicio. `saas` no tiene (no se ofrece como servicio). */
  href?: string
}

export const SERVICIO_TAGS: ServicioTag[] = [
  {
    id: "informativas",
    label: "Páginas informativas",
    icon: IconDeviceLaptop,
    href: "/servicios/paginas-informativas",
  },
  {
    id: "corporativas",
    label: "Páginas corporativas",
    icon: IconChartHistogram,
    href: "/servicios/paginas-corporativas",
  },
  {
    id: "mantenimiento",
    label: "Mantenimiento web",
    icon: IconPaint,
    href: "/servicios/mantenimiento-web",
  },
  {
    id: "catalogos",
    label: "Catálogos en línea",
    icon: IconShoppingCartSearch,
    href: "/servicios/catalogos-en-linea",
  },
  {
    id: "tienda",
    label: "Tienda en línea",
    icon: IconShoppingBag,
    href: "/servicios/tienda-en-linea",
  },
  {
    id: "finaliza",
    label: "Finaliza tu web",
    icon: IconCertificate,
    href: "/servicios/finaliza-tu-web",
  },
  {
    id: "agente-ia",
    label: "Agente IA",
    icon: IconRobot,
    href: "/servicios/agente-ia",
  },
  {
    id: "saas",
    label: "SaaS",
    icon: IconCloud,
  },
]

export const SERVICIO_TAG_MAP = Object.fromEntries(
  SERVICIO_TAGS.map((tag) => [tag.id, tag]),
) as Record<ServicioTagId, ServicioTag>
