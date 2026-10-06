"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { motion, useInView, useReducedMotion } from "motion/react"

type Direction = "up" | "down" | "left" | "right"

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 48 },
  down: { x: 0, y: -48 },
  left: { x: -72, y: 0 },
  right: { x: 72, y: 0 },
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(query)
    const update = () => setMatches(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [query])

  return matches
}

type RevealProps = {
  children: ReactNode
  className?: string
  /** Desde dónde entra el bloque en escritorio. */
  direction?: Direction
  /** Retraso en ms (para escalonar). */
  delay?: number
}

/**
 * Entrada al hacer scroll: fade + desplazamiento direccional, una sola vez.
 * - En pantallas chicas (`< lg`, una columna) las entradas laterales se vuelven
 *   verticales para no salirse del layout.
 * - Respeta `prefers-reduced-motion`.
 * - Salvaguarda: si al montar el bloque ya quedó por encima del viewport
 *   (p. ej. al refrescar a mitad de página), se muestra de inmediato.
 */
export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const [alreadyPassed, setAlreadyPassed] = useState(false)
  const reduceMotion = useReducedMotion()
  const isDesktop = useMediaQuery("(min-width: 1024px)")

  useEffect(() => {
    const el = ref.current
    if (el && el.getBoundingClientRect().bottom < 0) {
      setAlreadyPassed(true)
    }
  }, [])

  const isSide = direction === "left" || direction === "right"
  const dir: Direction = isSide && !isDesktop ? "up" : direction
  const from = reduceMotion ? { x: 0, y: 0 } : offset[dir]
  const show = inView || alreadyPassed

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={show ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, ...from },
        visible: { opacity: 1, x: 0, y: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeOut", delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  )
}
