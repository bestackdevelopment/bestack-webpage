"use client"

import { useState } from "react"

import { EjemploCard } from "@/components/ejemplo-card"
import { FILTROS_SOLUCION, type Ejemplo } from "@/lib/ejemplos"
import { cn } from "@/lib/utils"

/** Rejilla del índice `/ejemplos` con filtros por tipo de solución. */
export function EjemplosExplorador({ ejemplos }: { ejemplos: Ejemplo[] }) {
  const [filtro, setFiltro] = useState<(typeof FILTROS_SOLUCION)[number] | null>(
    null,
  )

  const visibles = filtro
    ? ejemplos.filter((ejemplo) => ejemplo.filtros.includes(filtro))
    : ejemplos

  return (
    <div className="space-y-12">
      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => setFiltro(null)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors border",
            filtro === null
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-card text-muted-foreground border-border hover:text-foreground hover:border-foreground/30",
          )}
        >
          Todos
        </button>
        {FILTROS_SOLUCION.map((tipo) => (
          <button
            key={tipo}
            type="button"
            onClick={() => setFiltro(filtro === tipo ? null : tipo)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors border",
              filtro === tipo
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-muted-foreground border-border hover:text-foreground hover:border-foreground/30",
            )}
          >
            {tipo}
          </button>
        ))}
      </div>

      {/* Rejilla */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {visibles.map((ejemplo) => (
          <EjemploCard key={ejemplo.slug} ejemplo={ejemplo} />
        ))}
      </div>
    </div>
  )
}