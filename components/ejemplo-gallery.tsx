"use client"

import { useEffect, useState } from "react"
import { IconPhoto, IconX } from "@tabler/icons-react"

type Captura = {
  /** Ruta de la captura en public/ejemplos/{slug}/N.jpg → se añade cuando exista */
  imagen?: string
  etiqueta: string
}

/**
 * Galería con lightbox. Hoy los slides son placeholders (las capturas las toma
 * el Patrón); cuando exista el archivo, añadir `imagen` al slide y el lightbox
 * mostrará la captura real — docs/ejemplos.md. Cierra con Esc o clic fuera.
 */
export function EjemploGallery({
  slug,
  capturas,
}: {
  slug: string
  capturas: Captura[]
}) {
  const [activa, setActiva] = useState<number | null>(null)

  useEffect(() => {
    if (activa === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiva(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [activa])

  const capturaActiva = activa !== null ? capturas[activa] : null

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {capturas.map((captura, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiva(index)}
            aria-label={`Ampliar ${captura.etiqueta}`}
            className="relative w-full aspect-[16/10] rounded-xl border border-dashed border-border/60 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 flex flex-col items-center justify-center gap-2 cursor-zoom-in hover:border-primary/40 transition-colors"
          >
            <IconPhoto className="w-8 h-8 text-muted-foreground/40" stroke={1.5} />
            <span className="text-xs text-muted-foreground/60">
              {captura.etiqueta}
            </span>
          </button>
        ))}
      </div>

      {capturaActiva && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={capturaActiva.etiqueta}
          onClick={() => setActiva(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full rounded-xl bg-canvas border border-border overflow-hidden"
          >
            <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex flex-col items-center justify-center gap-3">
              {capturaActiva.imagen ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={capturaActiva.imagen}
                  alt={capturaActiva.etiqueta}
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <IconPhoto
                    className="w-12 h-12 text-muted-foreground/50"
                    stroke={1.5}
                  />
                  <p className="text-sm text-muted-foreground">
                    Captura por el Patrón — {slug}/01.jpg·02.jpg·03.jpg
                  </p>
                </>
              )}
            </div>
            <div className="flex items-center justify-between px-6 py-4">
              <p className="font-medium">{capturaActiva.etiqueta}</p>
              <button
                type="button"
                onClick={() => setActiva(null)}
                aria-label="Cerrar"
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}