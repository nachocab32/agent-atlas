import { ChevronRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

interface TarjetaCatalogoProps {
  icono: LucideIcon
  titulo: string
  descripcion: string
  metadata: ReactNode
  onSeleccionar: () => void
}

// Tarjeta compartida entre /aceleradores y /guias: icono fijo, descripción recortada
// a 2 líneas (mantiene la grilla alineada) y una línea de metadata.
export function TarjetaCatalogo({ icono: Icono, titulo, descripcion, metadata, onSeleccionar }: TarjetaCatalogoProps) {
  return (
    <button
      type="button"
      onClick={onSeleccionar}
      className="flex h-full items-start gap-[var(--space-component)] rounded-xl border border-border bg-card p-[var(--space-component)] text-left transition-colors hover:border-primary/25 hover:bg-primary/5"
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-card">
        <Icono className="size-4 text-foreground" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate font-medium text-foreground first-letter:uppercase">{titulo}</span>
        <span className="mt-0.5 line-clamp-2 text-sm text-muted-foreground">{descripcion}</span>
        <span className="mt-1.5 block truncate text-xs text-muted-foreground">{metadata}</span>
      </span>
      <ChevronRight className="mt-1 size-4 shrink-0 text-muted-foreground" />
    </button>
  )
}
