import type { ComponentType } from "react"
import {
  IconApi,
  IconAppWindow,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPrisma,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTelegram,
  IconBrandTypescript,
  IconCloud,
  IconCloudUpload,
  IconDatabase,
  IconDeviceMobile,
  IconFileText,
  IconLock,
  IconMail,
  IconRobot,
  IconSearch,
  IconSettings,
  IconShare,
  IconShoppingBag,
  IconUsers,
} from "@tabler/icons-react"

import type { IconoClave } from "@/lib/casos-de-uso"

export type TablerIcon = ComponentType<{
  className?: string
  size?: number
  stroke?: number
}>

/**
 * Clave de icono (en los datos) → icono Tabler.
 *
 * FUENTE ÚNICA: la comparten el diagrama de arquitectura («Cómo se aplicó») y las
 * tarjetas de «La solución». Al agregar una clave nueva hay que tocar los dos
 * lados: este mapa y el tipo `IconoClave` en `lib/casos-de-uso.ts`.
 */
export const ICONOS: Record<IconoClave, TablerIcon> = {
  settings: IconSettings,
  "app-window": IconAppWindow,
  lock: IconLock,
  mail: IconMail,
  "shopping-bag": IconShoppingBag,
  social: IconShare,
  telegram: IconBrandTelegram,
  "device-mobile": IconDeviceMobile,
  users: IconUsers,
  api: IconApi,
  database: IconDatabase,
  "cloud-upload": IconCloudUpload,
  nextjs: IconBrandNextjs,
  node: IconBrandNodejs,
  prisma: IconBrandPrisma,
  react: IconBrandReact,
  tailwind: IconBrandTailwind,
  typescript: IconBrandTypescript,
  robot: IconRobot,
  file: IconFileText,
  search: IconSearch,
  cloud: IconCloud,
}
