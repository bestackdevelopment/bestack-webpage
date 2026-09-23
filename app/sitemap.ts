import type { MetadataRoute } from "next"

import { siteUrl } from "@/lib/site"

const routes = [
  "",
  "/contacto",
  "/ejemplos",
  "/servicios/paginas-informativas",
  "/servicios/paginas-corporativas",
  "/servicios/ecommerce",
  "/servicios/mantenimiento-web",
  "/servicios/finaliza-tu-web",
]

const ejemploSlugs = ["bidhara", "laserbox", "sysop", "bahia"]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const pages = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }))
  const ejemplos = ejemploSlugs.map((slug) => ({
    url: `${siteUrl}/ejemplos/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))
  return [...pages, ...ejemplos]
}
