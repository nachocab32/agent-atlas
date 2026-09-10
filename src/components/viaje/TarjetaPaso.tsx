import { Link } from 'react-router'
import { cn } from '@/shared/lib/utils'
import type { Paso } from '@/types/viaje'
import { DistintivoTipo } from './DistintivoTipo'
import { iconoPorTipoPaso, tintPorTipoPaso } from './iconos'

interface TarjetaPasoProps {
  paso: Paso
  activoCatalogoId?: string
}

export function TarjetaPaso({ paso, activoCatalogoId }: TarjetaPasoProps) {
  const Icono = iconoPorTipoPaso[paso.tipo]
  const tint = tintPorTipoPaso[paso.tipo]

  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <p className="text-xs font-medium text-muted-foreground">{paso.etiqueta}</p>
      <div className="mt-2 flex items-start gap-4">
        {Icono && (
          <span
            className={cn(
              'flex size-11 shrink-0 items-center justify-center rounded-xl',
              tint ? tint.bg : 'bg-muted',
            )}
          >
            <Icono className={cn('size-5', tint ? tint.text : 'text-muted-foreground')} />
          </span>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-lg font-semibold text-foreground">{paso.titulo}</h2>
            <DistintivoTipo tipo={paso.tipo} />
          </div>
          <p className="mt-2 text-sm leading-relaxed text-foreground">{paso.descripcion}</p>
          {activoCatalogoId && (
            <Link
              to={`/aceleradores/${activoCatalogoId}`}
              className="mt-3 inline-block text-xs font-medium text-accent hover:underline"
            >
              Ver en el catálogo de Aceleradores →
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
