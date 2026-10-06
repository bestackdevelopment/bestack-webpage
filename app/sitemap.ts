import type { MetadataRoute } from "next"

import { siteUrl } from "@/lib/site"

const routes = [
  "",
  "/contacto",
  "/casos-de-uso",
  "/servicios/paginas-informativas",
  "/servicios/paginas-corporativas",
  "/servicios/catalogos-en-linea",
  "/servicios/mantenimiento-web",
  "/servicios/finaliza-tu-web",
  "/servicios/agente-ia",
  "/servicios/tienda-en-linea",
]

const casoSlugs = ["bidhara", "laserbox", "sysop", "bahia"]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const pages = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }))
  const casos = casoSlugs.map((slug) => ({
    url: `${siteUrl}/casos-de-uso/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))
  return [...pages, ...casos]
}
