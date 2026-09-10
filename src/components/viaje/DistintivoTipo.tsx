import { cn } from '@/shared/lib/utils'
import type { TipoPaso } from '@/types/viaje'
import { iconoPorTipoPaso, labelPorTipoPaso, tintPorTipoPaso } from './iconos'

interface DistintivoTipoProps {
  tipo: TipoPaso
}

export function DistintivoTipo({ tipo }: DistintivoTipoProps) {
  const Icono = iconoPorTipoPaso[tipo]
  const label = labelPorTipoPaso[tipo]
  const tint = tintPorTipoPaso[tipo]

  // Un paso sin tipo no lleva distintivo.
  if (!Icono || !label) return null

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium',
        tint ? cn(tint.bg, tint.text, 'border-transparent') : 'border-border text-muted-foreground',
      )}
    >
      <Icono className="size-3.5" />
      {label}
    </span>
  )
}
