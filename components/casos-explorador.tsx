"use client"

import { useState } from "react"

import { CasoCard } from "@/components/caso-card"
import { SERVICIO_TAGS, type ServicioTagId } from "@/lib/servicios"
import type { Caso } from "@/lib/casos-de-uso"
import { cn } from "@/lib/utils"

/** Rejilla del índice `/casos-de-uso` con filtros por tag de servicio. */
export function CasosExplorador({ casos }: { casos: Caso[] }) {
  const [filtro, setFiltro] = useState<ServicioTagId | null>(null)

  const visibles = filtro
    ? casos.filter((caso) => caso.tags.includes(filtro))
    : casos

  return (
    <div className="space-y-12">
      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => setFiltro(null)}
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors border",
            filtro === null
              ? "bg-primary/10 text-foreground border-primary"
              : "bg-card text-muted-foreground border-border hover:text-foreground hover:border-foreground/30",
          )}
        >
          Todos
        </button>
        {SERVICIO_TAGS.map((tag) => {
          const Icon = tag.icon
          return (
            <button
              key={tag.id}
              type="button"
              onClick={() => setFiltro(filtro === tag.id ? null : tag.id)}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors border",
                filtro === tag.id
                  ? "bg-primary/10 text-foreground border-primary"
                  : "bg-card text-muted-foreground border-border hover:text-foreground hover:border-foreground/30",
              )}
            >
              <Icon className="size-4" stroke={1.5} />
              {tag.label}
            </button>
          )
        })}
      </div>

      {/* Rejilla */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {visibles.map((caso) => (
          <CasoCard key={caso.slug} caso={caso} />
        ))}
      </div>
    </div>
  )
}
