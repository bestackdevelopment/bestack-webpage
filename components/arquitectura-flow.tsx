"use client"

import type { ComponentType } from "react"
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
import {
  IconApi,
  IconAppWindow,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPrisma,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTelegram,
  IconBrandTypescript,
  IconCloud,
  IconCloudUpload,
  IconDatabase,
  IconDeviceMobile,
  IconFileText,
  IconLock,
  IconRobot,
  IconSearch,
  IconSettings,
  IconShare,
  IconShoppingBag,
  IconUsers,
} from "@tabler/icons-react"

import type {
  ArquitecturaArista,
  ArquitecturaIcono,
  ArquitecturaNodo,
} from "@/lib/casos-de-uso"

type TablerIcon = ComponentType<{
  className?: string
  size?: number
  stroke?: number
}>

/** Clave de icono (en los datos) → icono Tabler. */
const ICONOS: Record<ArquitecturaIcono, TablerIcon> = {
  settings: IconSettings,
  "app-window": IconAppWindow,
  lock: IconLock,
  "shopping-bag": IconShoppingBag,
  social: IconShare,
  telegram: IconBrandTelegram,
  "device-mobile": IconDeviceMobile,
  users: IconUsers,
  api: IconApi,
  database: IconDatabase,
  "cloud-upload": IconCloudUpload,
  nextjs: IconBrandNextjs,
  node: IconBrandNodejs,
  prisma: IconBrandPrisma,
  react: IconBrandReact,
  tailwind: IconBrandTailwind,
  typescript: IconBrandTypescript,
  robot: IconRobot,
  file: IconFileText,
  search: IconSearch,
  cloud: IconCloud,
}

type NodoData = {
  titulo: string
  descripcion?: string
  icono?: ArquitecturaIcono
}

function NodoArquitectura({ data }: NodeProps) {
  const { titulo, descripcion, icono } = data as NodoData
  const Icon = icono ? ICONOS[icono] : null

  return (
    <div className="w-[250px] rounded-xl border border-border bg-card p-4 shadow-sm">
      <Handle
        type="target"
        position={Position.Left}
        className="!h-2 !w-2 !border-primary !bg-primary"
      />
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
      <Handle
        type="source"
        position={Position.Right}
        className="!h-2 !w-2 !border-primary !bg-primary"
      />
    </div>
  )
}

const nodeTypes = { arquitectura: NodoArquitectura }

/** Diagrama de arquitectura interactivo (zoom, arrastre y auto-encuadre). */
export function ArquitecturaFlow({
  nodos,
  aristas,
}: {
  nodos: ArquitecturaNodo[]
  aristas: ArquitecturaArista[]
}) {
  const nodes: Node[] = nodos.map((nodo) => ({
    id: nodo.id,
    type: "arquitectura",
    position: { x: nodo.x, y: nodo.y },
    data: { titulo: nodo.titulo, descripcion: nodo.descripcion, icono: nodo.icono },
  }))

  const edges: Edge[] = aristas.map((arista, index) => ({
    id: `arista-${index}`,
    source: arista.from,
    target: arista.to,
    label: arista.etiqueta,
    animated: true,
    style: { stroke: "var(--color-primary)" },
    labelStyle: { fill: "var(--color-foreground)", fontSize: 11 },
    labelBgStyle: { fill: "var(--color-card)" },
  }))

  return (
    <div className="h-[460px] w-full overflow-hidden rounded-xl border border-border bg-card">
      <ReactFlow
        nodes={nodes}
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
