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
        'flex flex-col items-start gap-2 rounded-xl border border-border bg-card p-3 text-left transition-colors hover:border-primary/25 hover:bg-primary/5',
        seleccionada && 'border-primary/30 bg-accent',
      )}
    >
      <Icono className={cn('size-4', seleccionada ? 'text-accent-foreground' : 'text-muted-foreground')} />
      <p className={cn('text-sm font-medium', seleccionada ? 'text-accent-foreground' : 'text-foreground')}>
        {etapa.nombre}
      </p>
      <p className={cn('text-xs', seleccionada ? 'text-primary-foreground/80' : 'text-muted-foreground')}>{conteo} activos</p>
    </button>
  )
}
