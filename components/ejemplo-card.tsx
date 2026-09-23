import Link from "next/link"
import { IconArrowUpRight } from "@tabler/icons-react"

import { Card, CardContent } from "@/components/ui/card"
import { EjemploCover } from "@/components/ejemplo-cover"
import type { Ejemplo } from "@/lib/ejemplos"

/**
 * Tarjeta de ejemplo. Se usa en el índice `/ejemplos` y en los destacados del
 * home. Muestra placeholder de captura, nombre, giro, etiquetas y el resumen.
 */
export function EjemploCard({ ejemplo }: { ejemplo: Ejemplo }) {
  return (
    <Card className="border-border hover:shadow-lg transition-shadow overflow-hidden">
      <EjemploCover slug={ejemplo.slug} />
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold leading-snug">
            {ejemplo.nombre}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{ejemplo.giro}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
            {ejemplo.tipo}
          </span>
          <span
            className={
              ejemplo.estado === "En operación"
                ? "text-xs font-medium px-2.5 py-1 rounded-full bg-secondary/10 text-secondary"
                : "text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
            }
          >
            {ejemplo.estado}
          </span>
        </div>
        <p className="text-muted-foreground">{ejemplo.resumen}</p>
        <Link
          href={`/ejemplos/${ejemplo.slug}`}
          className="inline-flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all duration-200"
        >
          Ver el ejemplo
          <IconArrowUpRight className="w-4 h-4" stroke={2} />
        </Link>
      </CardContent>
    </Card>
  )
}