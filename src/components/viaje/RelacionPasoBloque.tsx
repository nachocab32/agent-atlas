import { ArrowRight, Component } from 'lucide-react'
import { cn } from '@/shared/lib/utils'
import type { RelacionPaso, TipoPaso } from '@/types/viaje'
import { tintPorTipoPaso } from './iconos'

interface RelacionPasoBloqueProps {
  relacion: RelacionPaso
  tipoOrigen?: TipoPaso
  onSeleccionar?: () => void
}

export function RelacionPasoBloque({ relacion, tipoOrigen, onSeleccionar }: RelacionPasoBloqueProps) {
  const esSeAlimentaDe = relacion.clase === 'se-alimenta-de'
  const tint = tipoOrigen ? tintPorTipoPaso[tipoOrigen] : undefined
  const IconoRelacion = esSeAlimentaDe ? ArrowRight : Component
  const contenido = (
    <>
      <div className="min-w-0 flex-1">
        <p className={cn('text-xs font-medium', tint ? tint.text : 'text-muted-foreground')}>
          {esSeAlimentaDe ? 'Se alimenta de' : 'Integrada en'}
        </p>
        <p className="mt-1 text-sm font-medium text-foreground">{relacion.pasoOrigen}</p>
        <p className="mt-0.5 text-sm text-muted-foreground">{relacion.explicacion}</p>
      </div>
      {onSeleccionar && <span className="shrink-0 text-xs font-medium text-primary">Ver paso</span>}
      <IconoRelacion className={cn('size-5 shrink-0', tint ? tint.text : 'text-muted-foreground')} />
    </>
  )

  const clases = cn(
    'flex items-center gap-4 rounded-xl border p-4',
    onSeleccionar
      ? 'w-full border-primary/20 bg-card text-left transition-colors hover:border-primary/35 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
      : tint ? cn(tint.bg, 'border-transparent') : 'border-border bg-muted',
  )

  if (onSeleccionar) {
    return <button type="button" onClick={onSeleccionar} className={clases}>{contenido}</button>
  }
  return (
    <div className={clases}>{contenido}</div>
  )
}
