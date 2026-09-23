import { IconPhoto } from "@tabler/icons-react"

import { cn } from "@/lib/utils"

/**
 * Placeholder de captura para las tarjetas de ejemplo.
 *
 * Las capturas las toma el Patrón; el código solo deja el hueco con las
 * medidas definidas en `docs/ejemplos.md` (portada 16:9 = 1280×720).
 * Cuando exista la imagen en `public/ejemplos/{slug}/cover.jpg`,
 * sustituir este componente por `next/image`.
 */
export function EjemploCover({
  slug,
  className,
}: {
  slug: string
  className?: string
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative w-full aspect-video bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-dashed border-border/60 flex items-center justify-center overflow-hidden",
        className,
      )}
    >
      <IconPhoto className="w-10 h-10 text-muted-foreground/50" stroke={1.5} />
      <span className="sr-only">Captura de {slug}</span>
    </div>
  )
}