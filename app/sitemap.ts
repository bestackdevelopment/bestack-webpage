import type { MetadataRoute } from "next"

import { siteUrl } from "@/lib/site"

const routes = [
  "",
  "/contacto",
  "/proyectos",
  "/servicios/paginas-informativas",
  "/servicios/paginas-corporativas",
  "/servicios/ecommerce",
  "/servicios/mantenimiento-web",
  "/servicios/finaliza-tu-web",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }))
}
