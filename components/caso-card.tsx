import Link from "next/link"
import { IconArrowUpRight } from "@tabler/icons-react"

import { Card, CardContent } from "@/components/ui/card"
import { CasoCover } from "@/components/caso-cover"
import { ServicioTag } from "@/components/servicio-tag"
import type { Caso } from "@/lib/casos-de-uso"

/**
 * Tarjeta de caso de uso. Se usa en el índice `/casos-de-uso` y en los
 * destacados del home. Muestra placeholder de captura, nombre, giro, etiquetas
 * y el resumen.
 */
export function CasoCard({ caso }: { caso: Caso }) {
  return (
    <Card className="border-border hover:shadow-lg transition-shadow overflow-hidden">
      <CasoCover slug={caso.slug} />
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold leading-snug">
            {caso.nombre}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{caso.giro}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {caso.tags.map((tagId) => (
            <ServicioTag key={tagId} id={tagId} />
          ))}
          <span
            className={
              caso.estado === "En operación"
                ? "text-xs font-medium px-2.5 py-1 rounded-full bg-secondary/10 text-foreground/80"
                : "text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
            }
          >
            {caso.estado}
          </span>
        </div>
        <p className="text-muted-foreground">{caso.resumen}</p>
        <Link
          href={`/casos-de-uso/${caso.slug}`}
          className="inline-flex items-center gap-1 text-foreground font-medium hover:gap-2 transition-all duration-200"
        >
          Ver el caso
          <IconArrowUpRight className="w-4 h-4 text-primary" stroke={2} />
        </Link>
      </CardContent>
    </Card>
  )
}
