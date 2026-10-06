import { SERVICIO_TAG_MAP, type ServicioTagId } from "@/lib/servicios"

/** Pill de un tag de servicio (icono + nombre). */
export function ServicioTag({ id }: { id: ServicioTagId }) {
  const tag = SERVICIO_TAG_MAP[id]
  const Icon = tag.icon

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium text-foreground/80">
      <Icon className="size-3.5 text-primary" stroke={1.5} />
      {tag.label}
    </span>
  )
}
