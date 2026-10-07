"use client"

import {
  Background,
  Controls,
  Handle,
  Position,
  ReactFlow,
  type Edge,
  type Node,
  type NodeProps,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"

import { ICONOS } from "@/components/icono-tabler"
import type {
  ArquitecturaArista,
  ArquitecturaNodo,
  ArquitecturaZona,
  IconoClave,
  LadoArista,
} from "@/lib/casos-de-uso"

/** Lado del nodo -> posición del handle en React Flow. */
const POSICION: Record<LadoArista, Position> = {
  left: Position.Left,
  right: Position.Right,
  top: Position.Top,
  bottom: Position.Bottom,
}

/** Arriba y a la izquierda entran aristas; abajo y a la derecha salen. */
function esEntrada(lado: LadoArista) {
  return lado === "left" || lado === "top"
}

const CLASE_HANDLE = "!h-2 !w-2 !border-primary !bg-primary"

type NodoData = {
  titulo: string
  descripcion?: string
  icono?: IconoClave
  /** Lados en los que el nodo expone un handle (se derivan de las aristas). */
  handles: LadoArista[]
}

type ZonaData = {
  titulo: string
  nota?: string
}

function NodoArquitectura({ data }: NodeProps) {
  const { titulo, descripcion, icono, handles } = data as NodoData
  const Icon = icono ? ICONOS[icono] : null

  return (
    <div className="w-[250px] rounded-xl border border-border bg-card p-4 shadow-sm">
      {handles.map((lado) => (
        <Handle
          key={lado}
          id={lado}
          type={esEntrada(lado) ? "target" : "source"}
          position={POSICION[lado]}
          className={CLASE_HANDLE}
        />
      ))}
      <div className="flex items-start gap-3">
        {Icon && (
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-5 w-5 text-primary" stroke={1.5} />
          </div>
        )}
        <div>
          <p className="text-sm font-semibold leading-snug">{titulo}</p>
          {descripcion && (
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {descripcion}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

/**
 * Marco punteado del diagrama: dice dónde queda el negocio y qué es público.
 * Va detrás de los nodos (React Flow pinta en el orden del arreglo).
 */
function ZonaArquitectura({ data }: NodeProps) {
  const { titulo, nota } = data as ZonaData

  return (
    <div className="relative h-full w-full rounded-2xl border-[1.5px] border-dashed border-border bg-muted/40">
      <span className="absolute -top-3 left-4 rounded-full border-[1.5px] border-dashed border-border bg-card px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {titulo}
      </span>
      {nota && (
        <p className="absolute inset-x-5 bottom-3 text-xs italic leading-snug text-muted-foreground">
          {nota}
        </p>
      )}
    </div>
  )
}

const nodeTypes = { arquitectura: NodoArquitectura, zona: ZonaArquitectura }

/** Lados que necesita cada nodo, según las aristas que lo tocan. */
function ladosPorNodo(aristas: ArquitecturaArista[]) {
  const lados = new Map<string, Set<LadoArista>>()
  const sumar = (id: string, lado: LadoArista) => {
    const set = lados.get(id) ?? new Set<LadoArista>()
    set.add(lado)
    lados.set(id, set)
  }

  for (const arista of aristas) {
    sumar(arista.from, arista.desde ?? "right")
    sumar(arista.to, arista.hasta ?? "left")
  }

  return lados
}

/** Diagrama de arquitectura interactivo (zoom, arrastre y auto-encuadre). */
export function ArquitecturaFlow({
  zonas = [],
  nodos,
  aristas,
}: {
  zonas?: ArquitecturaZona[]
  nodos: ArquitecturaNodo[]
  aristas: ArquitecturaArista[]
}) {
  const lados = ladosPorNodo(aristas)

  const nodesZona: Node[] = zonas.map((zona) => ({
    id: zona.id,
    type: "zona",
    position: { x: zona.x, y: zona.y },
    style: { width: zona.w, height: zona.h },
    data: { titulo: zona.titulo, nota: zona.nota } satisfies ZonaData,
    draggable: false,
    selectable: false,
    connectable: false,
    zIndex: 0,
  }))

  const nodesNodo: Node[] = nodos.map((nodo) => ({
    id: nodo.id,
    type: "arquitectura",
    position: { x: nodo.x, y: nodo.y },
    data: {
      titulo: nodo.titulo,
      descripcion: nodo.descripcion,
      icono: nodo.icono,
      handles: [...(lados.get(nodo.id) ?? [])],
    } satisfies NodoData,
    zIndex: 1,
  }))

  const edges: Edge[] = aristas.map((arista, index) => ({
    id: `arista-${index}`,
    source: arista.from,
    target: arista.to,
    sourceHandle: arista.desde ?? "right",
    targetHandle: arista.hasta ?? "left",
    label: arista.etiqueta,
    animated: true,
    style: { stroke: "var(--color-primary)" },
    labelStyle: { fill: "var(--color-foreground)", fontSize: 11 },
    labelBgStyle: { fill: "var(--color-card)" },
  }))

  return (
    <div className="h-[560px] w-full overflow-hidden rounded-xl border border-border bg-card">
      <ReactFlow
        nodes={[...nodesZona, ...nodesNodo]}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}
