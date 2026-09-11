import { cn } from '@/shared/lib/utils'
import type { EtapaCencoFlow } from '@/types/catalogo'
import { iconoPorEtapa } from './iconos'

interface EtapaCeldaProps {
  etapa: EtapaCencoFlow
  conteo: number
  seleccionada: boolean
  onSeleccionar: () => void
}

export function EtapaCelda({ etapa, conteo, seleccionada, onSeleccionar }: EtapaCeldaProps) {
  const Icono = iconoPorEtapa[etapa.id]

  return (
    <button
      type="button"
      onClick={onSeleccionar}
      className={cn(
        'flex flex-col items-start gap-2 rounded-xl border border-border bg-card p-3 text-left transition-colors hover:border-foreground/20 hover:bg-muted',
        seleccionada && 'border-foreground bg-muted',
      )}
    >
      <Icono className="size-4 text-foreground" />
      <p className="text-sm font-medium text-foreground">
        {etapa.nombre}
      </p>
      <p className="text-xs text-muted-foreground">{conteo} activos</p>
    </button>
  )
}
