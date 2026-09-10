import { cn } from '@/shared/lib/utils'
import type { TipoActivo } from '@/types/catalogo'

interface FiltroTipoProps {
  opciones: { valor: 'todos' | TipoActivo; label: string }[]
  valorSeleccionado: 'todos' | TipoActivo
  onSeleccionar: (valor: 'todos' | TipoActivo) => void
}

export function FiltroTipo({ opciones, valorSeleccionado, onSeleccionar }: FiltroTipoProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {opciones.map((opcion) => (
        <button
          key={opcion.valor}
          type="button"
          onClick={() => onSeleccionar(opcion.valor)}
          className={cn(
            'rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/25 hover:bg-muted',
            opcion.valor === valorSeleccionado && 'border-primary/30 bg-accent text-accent-foreground',
          )}
        >
          {opcion.label}
        </button>
      ))}
    </div>
  )
}
