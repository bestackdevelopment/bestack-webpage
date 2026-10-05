import { IconCode, IconHeadset, IconSearch, IconTarget } from "@tabler/icons-react"

import type { IncluyeItem } from "@/components/service-template"

/**
 * Contenido PROVISIONAL para la sección «¿Qué incluye?» de los servicios que
 * todavía no tienen copy propio. El Patrón lo reemplazará por página.
 */
export const incluyeGenerico: readonly IncluyeItem[] = [
  {
    icon: IconTarget,
    accent: "primary",
    title: "Alcance a tu medida",
    description: "Definimos juntos qué incluye el servicio según tu operación.",
  },
  {
    icon: IconCode,
    accent: "secondary",
    title: "Desarrollo con tecnología moderna",
    description: "Construido con el stack actual: rápido, seguro y mantenible.",
  },
  {
    icon: IconSearch,
    accent: "accent",
    title: "Optimizado para buscadores y agentes de IA",
    description: "Estructura y contenido pensados para posicionamiento.",
  },
  {
    icon: IconHeadset,
    accent: "primary",
    title: "Acompañamiento y soporte",
    description: "Te acompañamos durante y después del proyecto.",
  },
]
