import { cn } from '@/shared/lib/utils'
import type { Paso } from '@/types/viaje'
import { iconoPorTipoPaso, tintPorTipoPaso } from './iconos'

interface IndicePasoItemProps {
  paso: Paso
  activo: boolean
  onSeleccionar: () => void
}

export function IndicePasoItem({ paso, activo, onSeleccionar }: IndicePasoItemProps) {
  const Icono = iconoPorTipoPaso[paso.tipo]
  const tint = tintPorTipoPaso[paso.tipo]

  return (
    <li>
      <button
        type="button"
        onClick={onSeleccionar}
        className={cn(
          'flex w-full flex-col items-start gap-1 rounded-lg px-3 py-2 text-left transition-colors hover:bg-muted',
          activo && 'border border-accent/30 bg-accent/5',
        )}
      >
        <span className="flex flex-wrap items-center gap-2">
          {Icono && <Icono className={cn('size-4 shrink-0', tint ? tint.text : 'text-muted-foreground')} />}
          <span className={cn('text-sm font-medium', activo ? 'text-accent' : 'text-foreground')}>
            {paso.etiqueta}
          </span>
        </span>
        <span className="text-xs text-muted-foreground">{paso.descripcionMenu}</span>
      </button>
    </li>
  )
}
